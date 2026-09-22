/**
 * Multi-product ops console (login required).
 * Hidden entry from tgvideoweb redirects here.
 */

const COOKIE = 'ops_session'
const SESSION_DAYS = 7

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const path = url.pathname.replace(/\/+$/, '') || '/'

    try {
      if (request.method === 'GET' && (path === '/' || path === '/login')) {
        if (await isAuthed(request, env)) {
          return redirect('/dashboard')
        }
        return html(renderLogin())
      }

      if (request.method === 'POST' && path === '/login') {
        return handleLogin(request, env)
      }

      if (request.method === 'POST' && path === '/logout') {
        return handleLogout()
      }

      if (request.method === 'GET' && path === '/dashboard') {
        if (!(await isAuthed(request, env))) return redirect('/login')
        return html(await renderDashboard(env))
      }

      if (request.method === 'GET' && path === '/api/summary') {
        if (!(await isAuthed(request, env))) {
          return json({ error: 'unauthorized' }, 401)
        }
        const productId = url.searchParams.get('product') || ''
        const days = Math.min(30, Math.max(1, Number(url.searchParams.get('days')) || 14))
        const products = getProducts(env)
        const product = products.find((p) => p.id === productId)
        if (!product) return json({ error: 'unknown_product' }, 404)
        const data = await fetchProductSummary(product, days, env)
        return json(data)
      }

      if (request.method === 'GET' && path === '/health') {
        return json({ ok: true })
      }

      return json({ error: 'not_found' }, 404)
    } catch (error) {
      console.error('ops_error', error)
      return html(`<pre>Internal error</pre>`, 500)
    }
  },
}

function getProducts(env) {
  // Prefer JSON config; fallback to built-in registry.
  try {
    if (env.OPS_PRODUCTS_JSON) {
      const parsed = JSON.parse(env.OPS_PRODUCTS_JSON)
      if (Array.isArray(parsed) && parsed.length) return parsed.map(normalizeProduct)
    }
  } catch (e) {
    console.error('OPS_PRODUCTS_JSON invalid', e)
  }

  return [
    normalizeProduct({
      id: 'igexport',
      name: 'IG Follower Export',
      summaryUrl: 'https://ig-exporter-billing.leorock8808.workers.dev/v1/analytics/summary',
      token: env.TOKEN_IGEXPORT || '',
      binding: 'BILLING_IGEXPORT',
    }),
    normalizeProduct({
      id: 'igcomment',
      name: 'IG Comment Exporter',
      summaryUrl: 'https://ig-comment-billing.leorock8808.workers.dev/v1/analytics/summary',
      token: env.TOKEN_IGCOMMENT || '',
      binding: 'BILLING_IGCOMMENT',
    }),
  ]
}

function normalizeProduct(p) {
  return {
    id: String(p.id || '').trim(),
    name: String(p.name || p.id || 'Product').trim(),
    summaryUrl: String(p.summaryUrl || '').trim(),
    token: String(p.token || '').trim(),
    binding: String(p.binding || '').trim(),
  }
}

function failSummary(product, error, extra = {}) {
  return {
    ok: false,
    error,
    productId: product.id,
    name: product.name,
    ...extra,
  }
}

async function fetchProductSummary(product, days, env) {
  if (!product.summaryUrl) {
    return failSummary(product, 'summary_url_missing')
  }
  if (!product.token) {
    return failSummary(product, 'token_not_configured', {
      hint: 'Set TOKEN_* secret / var for this product',
    })
  }
  const url = new URL(product.summaryUrl)
  url.searchParams.set('days', String(days))
  const request = new Request(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${product.token}`,
      Accept: 'application/json',
    },
  })
  try {
    const bindingFetch = product.binding && env?.[product.binding]?.fetch
    const resp = bindingFetch
      ? await env[product.binding].fetch(request)
      : await fetch(request)
    const data = await resp.json().catch(() => ({}))
    if (!resp.ok) {
      return failSummary(product, data.error || `http_${resp.status}`)
    }
    return { ok: true, productId: product.id, name: product.name, ...data }
  } catch (error) {
    return failSummary(product, String(error?.message || error))
  }
}

async function handleLogin(request, env) {
  const form = await request.formData()
  const username = String(form.get('username') || '')
  const password = String(form.get('password') || '')
  const expectedUser = String(env.OPS_USERNAME || 'admin')
  const expectedPass = String(env.OPS_PASSWORD || '')
  if (!expectedPass || username !== expectedUser || password !== expectedPass) {
    return html(renderLogin('账号或密码错误'), 401)
  }
  const token = await signSession(env, {
    u: expectedUser,
    exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000,
  })
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/dashboard',
      'Set-Cookie': `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`,
    },
  })
}

function handleLogout() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/login',
      'Set-Cookie': `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  })
}

async function isAuthed(request, env) {
  const cookie = request.headers.get('Cookie') || ''
  const match = cookie.match(new RegExp(`${COOKIE}=([^;]+)`))
  if (!match) return false
  const payload = await verifySession(env, match[1])
  return Boolean(payload && payload.exp > Date.now())
}

async function signSession(env, payload) {
  const secret = String(env.OPS_SESSION_SECRET || '')
  if (!secret) throw new Error('OPS_SESSION_SECRET missing')
  const body = utf8ToB64Url(JSON.stringify(payload))
  const sig = await hmac(secret, body)
  return `${body}.${sig}`
}

async function verifySession(env, token) {
  const secret = String(env.OPS_SESSION_SECRET || '')
  if (!secret || !token || !token.includes('.')) return null
  const [body, sig] = token.split('.', 2)
  const expected = await hmac(secret, body)
  if (sig !== expected) return null
  try {
    return JSON.parse(b64UrlToUtf8(body))
  } catch {
    return null
  }
}

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message))
  return bytesToB64Url(new Uint8Array(sig))
}

function utf8ToB64Url(str) {
  return bytesToB64Url(new TextEncoder().encode(str))
}

function b64UrlToUtf8(str) {
  const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4))
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/') + pad
  const bin = atob(b64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

function bytesToB64Url(bytes) {
  let bin = ''
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i])
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

function redirect(to) {
  return new Response(null, { status: 302, headers: { Location: to } })
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}

function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderLogin(error = '') {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Ops Login</title>
  <style>
    body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0b1224;color:#e5e7eb;font-family:ui-sans-serif,system-ui,sans-serif}
    form{width:min(360px,92vw);background:#111827;border:1px solid #1f2937;border-radius:16px;padding:24px}
    h1{margin:0 0 8px;font-size:20px}
    p{margin:0 0 16px;color:#94a3b8;font-size:13px}
    label{display:block;font-size:12px;color:#94a3b8;margin:12px 0 6px}
    input{width:100%;box-sizing:border-box;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e5e7eb;padding:10px 12px}
    button{margin-top:18px;width:100%;border:0;border-radius:10px;padding:11px;background:#38bdf8;color:#0f172a;font-weight:700;cursor:pointer}
    .err{color:#fca5a5;font-size:13px;margin-bottom:8px}
  </style>
</head>
<body>
  <form method="POST" action="/login">
    <h1>产品数据后台</h1>
    <p>多插件运营数据 · 需登录</p>
    ${error ? `<div class="err">${escapeHtml(error)}</div>` : ''}
    <label>账号</label>
    <input name="username" autocomplete="username" required />
    <label>密码</label>
    <input name="password" type="password" autocomplete="current-password" required />
    <button type="submit">进入</button>
  </form>
</body>
</html>`
}

async function renderDashboard(env) {
  const products = getProducts(env)
  const summaries = await Promise.all(products.map((p) => fetchProductSummary(p, 14, env)))
  const cards = summaries
    .map((s) => {
      if (!s.ok) {
        return `<section class="card">
          <h2>${escapeHtml(s.name || s.productId)}</h2>
          <p class="err">拉取失败：${escapeHtml(s.error)}${s.hint ? ' · ' + escapeHtml(s.hint) : ''}</p>
        </section>`
      }
      const today = s.today || {}
      const events = today.events || {}
      const dayRows = (s.days || [])
        .slice(0, 7)
        .map(
          (d) => `<tr>
            <td>${escapeHtml(d.day)}</td>
            <td>${d.dau}</td>
            <td>${d.newInstalls}</td>
            <td>${Number(d.events?.export_start || 0)}</td>
            <td>${Number(d.events?.checkout_start || 0)}</td>
            <td>${Number(d.events?.payment_confirmed || 0)}</td>
          </tr>`,
        )
        .join('')
      return `<section class="card">
        <div class="head">
          <h2>${escapeHtml(s.name || s.productId)}</h2>
          <span class="pill">在线 ${s.onlineNow ?? 0}</span>
        </div>
        <div class="grid">
          <div><div class="label">今日 DAU</div><div class="value">${today.dau || 0}</div></div>
          <div><div class="label">新安装</div><div class="value">${today.newInstalls || 0}</div></div>
          <div><div class="label">导出</div><div class="value">${Number(events.export_start || 0)}</div></div>
          <div><div class="label">购买点击</div><div class="value">${Number(events.checkout_start || 0)}</div></div>
          <div><div class="label">支付确认</div><div class="value">${Number(events.payment_confirmed || 0)}</div></div>
        </div>
        <h3>近 7 天</h3>
        <table>
          <thead><tr><th>日期</th><th>DAU</th><th>新安装</th><th>导出</th><th>购买</th><th>支付</th></tr></thead>
          <tbody>${dayRows || '<tr><td colspan="6">暂无</td></tr>'}</tbody>
        </table>
      </section>`
    })
    .join('')

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>产品数据后台</title>
  <style>
    body{margin:0;background:#0b1224;color:#e5e7eb;font-family:ui-sans-serif,system-ui,sans-serif}
    main{max-width:1100px;margin:0 auto;padding:24px 16px 48px}
    .top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}
    h1{margin:0;font-size:22px}
    .sub{color:#94a3b8;font-size:13px}
    .card{background:#111827;border:1px solid #1f2937;border-radius:16px;padding:16px;margin-bottom:16px}
    .head{display:flex;justify-content:space-between;align-items:center}
    h2{margin:0;font-size:16px}
    h3{margin:16px 0 8px;font-size:13px;color:#94a3b8}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:12px}
    .label{font-size:11px;color:#94a3b8}
    .value{font-size:22px;font-weight:750;color:#38bdf8;margin-top:4px}
    .pill{background:#0f172a;border:1px solid #334155;border-radius:999px;padding:4px 10px;font-size:12px}
    table{width:100%;border-collapse:collapse;font-size:13px}
    th,td{text-align:left;padding:8px 6px;border-bottom:1px solid #1f2937}
    th{color:#94a3b8;font-weight:600}
    .err{color:#fca5a5}
    button,a.btn{border:0;border-radius:10px;padding:8px 12px;background:#334155;color:#e5e7eb;text-decoration:none;font-size:13px;cursor:pointer}
  </style>
</head>
<body>
  <main>
    <div class="top">
      <div>
        <h1>产品数据后台</h1>
        <p class="sub">更新于 ${escapeHtml(new Date().toISOString())} · 数据来自各插件 Worker</p>
      </div>
      <form method="POST" action="/logout"><button type="submit">退出登录</button></form>
    </div>
    ${cards}
  </main>
</body>
</html>`
}
