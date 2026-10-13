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
        const days = Math.min(30, Math.max(1, Number(url.searchParams.get('days')) || 30))
        const products = getProducts(env)
        const product = products.find((p) => p.id === productId)
        if (!product) return json({ error: 'unknown_product' }, 404)
        const data = await fetchProductSummary(product, days, env)
        return json(data)
      }

      if (request.method === 'GET' && path === '/api/records') {
        if (!(await isAuthed(request, env))) {
          return json({ error: 'unauthorized' }, 401)
        }
        const productId = url.searchParams.get('product') || ''
        const products = getProducts(env)
        const product = products.find((p) => p.id === productId)
        if (!product) return json({ error: 'unknown_product' }, 404)
        const data = await fetchProductRecords(product, url, env)
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

async function fetchProductRecords(product, url, env) {
  if (!product.summaryUrl) return failSummary(product, 'summary_url_missing')
  if (!product.token) {
    return failSummary(product, 'token_not_configured', {
      hint: 'Set TOKEN_* secret / var for this product',
    })
  }
  const target = new URL(product.summaryUrl)
  target.pathname = '/v1/analytics/records'
  target.search = ''
  target.searchParams.set('kind', url.searchParams.get('kind') === 'payments' ? 'payments' : 'purchases')
  target.searchParams.set('page', String(Math.max(1, Number(url.searchParams.get('page')) || 1)))
  const day = String(url.searchParams.get('day') || '').trim()
  if (day) target.searchParams.set('day', day)
  const request = new Request(target.toString(), {
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
  const products = getProducts(env).map((p) => ({ id: p.id, name: p.name }))
  const boot = JSON.stringify(products).replace(/</g, '\\u003c')

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
    .tabs{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
    .tab{border:1px solid #334155;background:#0f172a;color:#e5e7eb;border-radius:999px;padding:8px 14px;cursor:pointer}
    .tab.active{background:#38bdf8;color:#0f172a;border-color:#38bdf8;font-weight:700}
    .card{background:#111827;border:1px solid #1f2937;border-radius:16px;padding:16px;margin-bottom:16px}
    .head{display:flex;justify-content:space-between;align-items:center;gap:12px}
    h2{margin:0;font-size:16px}
    h3{margin:16px 0 8px;font-size:13px;color:#94a3b8}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:12px}
    .label{font-size:11px;color:#94a3b8}
    .value{font-size:22px;font-weight:750;color:#38bdf8;margin-top:4px}
    .linkish{background:none;border:0;padding:0;color:#38bdf8;font:inherit;font-weight:750;cursor:pointer;text-decoration:underline}
    .pill{background:#0f172a;border:1px solid #334155;border-radius:999px;padding:4px 10px;font-size:12px}
    table{width:100%;border-collapse:collapse;font-size:13px}
    th,td{text-align:left;padding:8px 6px;border-bottom:1px solid #1f2937}
    th{color:#94a3b8;font-weight:600}
    .err{color:#fca5a5}
    .pager{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:12px;color:#94a3b8;font-size:13px}
    .pager button,.logout{border:0;border-radius:10px;padding:8px 12px;background:#334155;color:#e5e7eb;font-size:13px;cursor:pointer}
    .logout{margin:0}
    .mask{position:fixed;inset:0;background:rgba(2,6,23,.72);display:none;align-items:flex-start;justify-content:center;padding:48px 16px;overflow:auto}
    .mask.open{display:flex}
    .panel{width:min(980px,100%);background:#111827;border:1px solid #1f2937;border-radius:16px;padding:16px}
    .note{color:#94a3b8;font-size:12px;margin:8px 0 12px}
  </style>
</head>
<body>
  <main>
    <div class="top">
      <div>
        <h1>产品数据后台</h1>
        <p class="sub">更新于 ${escapeHtml(new Date().toISOString())} · 数据来自各插件 Worker</p>
      </div>
      <form method="POST" action="/logout"><button class="logout" type="submit">退出登录</button></form>
    </div>
    <div class="tabs" id="tabs"></div>
    <section class="card" id="summary"></section>
  </main>
  <div class="mask" id="mask">
    <div class="panel">
      <div class="head">
        <h2 id="detailTitle">详情</h2>
        <button type="button" id="detailClose">关闭</button>
      </div>
      <p class="note" id="detailNote"></p>
      <div id="detailBody"></div>
    </div>
  </div>
  <script>
    const products = ${boot}
    const PAGE = 20
    let currentId = products[0] ? products[0].id : ''
    let summary = null
    let dayPage = 1
    let detail = { kind: 'purchases', day: '', page: 1 }

    const tabsEl = document.getElementById('tabs')
    const summaryEl = document.getElementById('summary')
    const mask = document.getElementById('mask')

    function el(tag, text, className) {
      const node = document.createElement(tag)
      if (className) node.className = className
      if (text != null) node.textContent = text
      return node
    }

    function planLabel(plan) {
      if (plan === 'monthly') return '月付'
      if (plan === 'annual') return '年付'
      if (plan === 'quarterly') return '季付'
      return plan || '—'
    }

    function statusLabel(status) {
      if (status === 'paid') return '已支付'
      if (status === 'pending') return '待支付'
      return status || '—'
    }

    function money(cents, currency) {
      const amount = (Number(cents) || 0) / 100
      return (currency || 'usd').toUpperCase() + ' ' + amount.toFixed(2)
    }

    function when(ms) {
      const n = Number(ms) || 0
      if (!n) return '—'
      return new Date(n).toLocaleString('zh-CN', { hour12: false, timeZone: 'Asia/Shanghai' })
    }

    function renderTabs() {
      tabsEl.replaceChildren()
      products.forEach((product) => {
        const button = el('button', product.name, 'tab' + (product.id === currentId ? ' active' : ''))
        button.type = 'button'
        button.addEventListener('click', () => {
          currentId = product.id
          dayPage = 1
          renderTabs()
          loadSummary()
        })
        tabsEl.appendChild(button)
      })
    }

    function pager(page, total, onPage) {
      const pages = Math.max(1, Math.ceil(total / PAGE))
      const bar = el('div', '', 'pager')
      const prev = el('button', '上一页')
      prev.type = 'button'
      prev.disabled = page <= 1
      prev.addEventListener('click', () => onPage(page - 1))
      const next = el('button', '下一页')
      next.type = 'button'
      next.disabled = page >= pages
      next.addEventListener('click', () => onPage(page + 1))
      bar.append(prev, el('span', '第 ' + page + ' / ' + pages + ' 页 · 共 ' + total + ' 条'), next)
      return bar
    }

    function renderSummary() {
      summaryEl.replaceChildren()
      if (!summary) {
        summaryEl.appendChild(el('p', '加载中…'))
        return
      }
      if (!summary.ok) {
        summaryEl.appendChild(el('p', '拉取失败：' + (summary.error || 'unknown'), 'err'))
        return
      }
      const today = summary.today || {}
      const events = today.events || {}
      const head = el('div', '', 'head')
      head.append(el('h2', summary.name || currentId), el('span', '在线 ' + (summary.onlineNow || 0), 'pill'))
      const grid = el('div', '', 'grid')
      ;[
        ['今日 DAU', today.dau || 0],
        ['新安装', today.newInstalls || 0],
        ['导出', Number(events.export_start || 0)],
      ].forEach(([label, value]) => {
        const box = el('div')
        box.append(el('div', label, 'label'), el('div', String(value), 'value'))
        grid.appendChild(box)
      })
      grid.appendChild(metric('购买点击', Number(events.checkout_start || 0), 'purchases', ''))
      grid.appendChild(metric('支付确认', Number(events.payment_confirmed || 0), 'payments', ''))
      summaryEl.append(head, grid, el('h3', '按日 · 每页 20 天'))

      const days = summary.days || []
      const slice = days.slice((dayPage - 1) * PAGE, dayPage * PAGE)
      const table = document.createElement('table')
      const thead = document.createElement('thead')
      const hr = document.createElement('tr')
      ;['日期', 'DAU', '新安装', '导出', '购买', '支付'].forEach((name) => hr.appendChild(el('th', name)))
      thead.appendChild(hr)
      const tbody = document.createElement('tbody')
      if (!slice.length) {
        const tr = document.createElement('tr')
        const td = el('td', '暂无')
        td.colSpan = 6
        tr.appendChild(td)
        tbody.appendChild(tr)
      }
      slice.forEach((day) => {
        const tr = document.createElement('tr')
        tr.append(
          el('td', day.day || ''),
          el('td', String(day.dau || 0)),
          el('td', String(day.newInstalls || 0)),
          el('td', String(Number(day.events && day.events.export_start || 0))),
        )
        tr.appendChild(countCell(Number(day.events && day.events.checkout_start || 0), 'purchases', day.day))
        tr.appendChild(countCell(Number(day.events && day.events.payment_confirmed || 0), 'payments', day.day))
        tbody.appendChild(tr)
      })
      table.append(thead, tbody)
      summaryEl.append(table, pager(dayPage, days.length, (page) => {
        dayPage = page
        renderSummary()
      }))
    }

    function metric(label, value, kind, day) {
      const box = el('div')
      const button = el('button', String(value), 'linkish value')
      button.type = 'button'
      button.addEventListener('click', () => openDetail(kind, day))
      box.append(el('div', label, 'label'), button)
      return box
    }

    function countCell(value, kind, day) {
      const td = document.createElement('td')
      const button = el('button', String(value), 'linkish')
      button.type = 'button'
      button.addEventListener('click', () => openDetail(kind, day))
      td.appendChild(button)
      return td
    }

    async function loadSummary() {
      summary = null
      renderSummary()
      const resp = await fetch('/api/summary?product=' + encodeURIComponent(currentId) + '&days=30')
      summary = await resp.json()
      renderSummary()
    }

    function openDetail(kind, day) {
      detail = { kind, day: day || '', page: 1 }
      mask.classList.add('open')
      loadDetail()
    }

    async function loadDetail() {
      const title = document.getElementById('detailTitle')
      const note = document.getElementById('detailNote')
      const body = document.getElementById('detailBody')
      const product = products.find((item) => item.id === currentId)
      title.textContent = (product ? product.name + ' · ' : '') + (detail.kind === 'payments' ? '已支付' : '购买') + (detail.day ? ' · ' + detail.day : '')
      note.textContent = detail.kind === 'payments'
        ? '名单来自成功支付的结账记录，按支付时间。上方「支付确认」是插件当时等到开通的次数，两边不必相等。'
        : '名单是成功打开结账页的记录，含尚未支付。按打开时间。'
      body.replaceChildren(el('p', '加载中…'))
      const params = new URLSearchParams({
        product: currentId,
        kind: detail.kind,
        page: String(detail.page),
      })
      if (detail.day) params.set('day', detail.day)
      const resp = await fetch('/api/records?' + params.toString())
      const data = await resp.json()
      body.replaceChildren()
      if (!data.ok) {
        body.appendChild(el('p', '拉取失败：' + (data.error || 'unknown'), 'err'))
        return
      }
      const table = document.createElement('table')
      const thead = document.createElement('thead')
      const hr = document.createElement('tr')
      ;['时间', '邮箱', '方案', '状态', '金额', '订单号'].forEach((name) => hr.appendChild(el('th', name)))
      thead.appendChild(hr)
      const tbody = document.createElement('tbody')
      const items = data.items || []
      if (!items.length) {
        const tr = document.createElement('tr')
        const td = el('td', '暂无记录')
        td.colSpan = 6
        tr.appendChild(td)
        tbody.appendChild(tr)
      }
      items.forEach((item) => {
        const tr = document.createElement('tr')
        const stamp = detail.kind === 'payments' ? item.paidAt || item.createdAt : item.createdAt
        tr.append(
          el('td', when(stamp)),
          el('td', item.email || '—'),
          el('td', planLabel(item.plan)),
          el('td', statusLabel(item.status)),
          el('td', money(item.amountCents, item.currency)),
          el('td', item.orderId || '—'),
        )
        tbody.appendChild(tr)
      })
      table.append(thead, tbody)
      body.append(table, pager(data.page || 1, data.total || 0, (page) => {
        detail.page = page
        loadDetail()
      }))
    }

    document.getElementById('detailClose').addEventListener('click', () => mask.classList.remove('open'))
    mask.addEventListener('click', (event) => {
      if (event.target === mask) mask.classList.remove('open')
    })
    renderTabs()
    if (currentId) loadSummary()
    else summaryEl.appendChild(el('p', '还没有配置产品', 'err'))
  </script>
</body>
</html>`
}
