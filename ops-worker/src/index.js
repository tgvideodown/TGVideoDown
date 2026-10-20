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
  const requested = String(url.searchParams.get('kind') || '')
  const kind = ['payments', 'unpaid', 'expiring'].includes(requested) ? requested : 'purchases'
  target.searchParams.set('kind', kind)
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
    body{margin:0;background:#f0f2f5;color:#303133;font-family:"Helvetica Neue",Helvetica,"PingFang SC","Microsoft YaHei",Arial,sans-serif}
    main{max-width:1200px;margin:0 auto;padding:20px 16px 48px}
    .top{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:14px}
    .top-actions{display:flex;align-items:center;gap:8px}
    h1{margin:0;font-size:20px;font-weight:600}
    .sub{color:#909399;font-size:12px;margin:4px 0 0}
    select{height:32px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#303133;padding:0 8px;font-size:13px}
    .views{display:flex;gap:0;margin-bottom:12px;border-bottom:1px solid #e4e7ed}
    .tab{border:0;border-bottom:2px solid transparent;background:transparent;color:#303133;padding:10px 18px;cursor:pointer;font-size:14px;margin-bottom:-1px}
    .tab.active{color:#409eff;border-bottom-color:#409eff;font-weight:600}
    .card{background:#fff;border:1px solid #ebeef5;border-radius:4px;padding:16px;box-shadow:0 1px 4px rgba(0,0,0,.04)}
    .head{display:flex;justify-content:space-between;align-items:center;gap:12px}
    h2{margin:0;font-size:16px;font-weight:600}
    h3{margin:18px 0 8px;font-size:14px;color:#303133}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:12px}
    .grid .label{font-size:12px;color:#909399}
    .value{font-size:22px;font-weight:600;color:#303133;margin-top:4px}
    .funnel{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:8px}
    .step{min-width:88px;border:1px solid #ebeef5;border-radius:4px;padding:8px 10px;background:#f5f7fa}
    .step .value{font-size:18px;color:#409eff}
    .arrow{color:#c0c4cc}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .linkish{background:none;border:0;padding:0;color:#409eff;font:inherit;cursor:pointer}
    .pill{background:#ecf5ff;color:#409eff;border-radius:4px;padding:4px 8px;font-size:12px}
    table{width:100%;border-collapse:collapse;font-size:13px}
    .table-wrap{overflow-x:auto;border:1px solid #ebeef5;border-radius:4px}
    th,td{text-align:left;padding:10px 8px;border-bottom:1px solid #ebeef5}
    th{background:#f5f7fa;color:#909399;font-weight:500}
    tr:hover td{background:#f5f7fa}
    .err{color:#f56c6c}
    .pager{display:flex;justify-content:flex-end;align-items:center;gap:12px;margin-top:12px;color:#606266;font-size:13px}
    .pager button,.logout{border:1px solid #dcdfe6;border-radius:4px;padding:7px 12px;background:#fff;color:#606266;font-size:13px;cursor:pointer}
    .pager button:disabled{color:#c0c4cc;cursor:not-allowed}
    .logout{margin:0;color:#409eff;border-color:#b3d8ff;background:#ecf5ff}
    .mask{position:fixed;inset:0;background:rgba(0,0,0,.45);display:none;align-items:flex-start;justify-content:center;padding:48px 16px;overflow:auto}
    .mask.open{display:flex}
    .panel{width:min(980px,100%);background:#fff;border-radius:4px;padding:16px}
    .note{color:#909399;font-size:12px;margin:8px 0 12px;line-height:1.5}
    @media (max-width:800px){.split{grid-template-columns:1fr}.top{align-items:flex-start;flex-direction:column}}
  </style>
</head>
<body>
  <main>
    <div class="top">
      <div>
        <h1>产品数据后台</h1>
        <p class="sub">中国时间 · 日志看使用，支付看订单</p>
      </div>
      <div class="top-actions">
        <select id="product" aria-label="产品"></select>
        <form method="POST" action="/logout"><button class="logout" type="submit">退出</button></form>
      </div>
    </div>
    <div class="views" id="views"></div>
    <section class="card" id="summary"></section>
    <section class="card" id="payments" hidden></section>
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
    let paymentPage = 1
    let paymentData = null
    let unpaidData = null
    let expiringData = null
    let detail = { kind: 'purchases', day: '', page: 1 }
    let view = 'stats'

    const productEl = document.getElementById('product')
    const viewsEl = document.getElementById('views')
    const summaryEl = document.getElementById('summary')
    const paymentsEl = document.getElementById('payments')
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

    function renderProductSelect() {
      productEl.replaceChildren()
      products.forEach((product) => {
        const option = el('option', product.name)
        option.value = product.id
        if (product.id === currentId) option.selected = true
        productEl.appendChild(option)
      })
    }

    function renderViews() {
      viewsEl.replaceChildren()
      ;[
        ['stats', '日志'],
        ['payments', '支付'],
      ].forEach(([id, label]) => {
        const button = el('button', label, 'tab' + (view === id ? ' active' : ''))
        button.type = 'button'
        button.addEventListener('click', () => {
          view = id
          applyView()
          renderViews()
        })
        viewsEl.appendChild(button)
      })
    }

    function applyView() {
      summaryEl.hidden = view !== 'stats'
      paymentsEl.hidden = view !== 'payments'
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
      grid.appendChild(plainMetric('好评领取', Number(events.review_granted || 0)))
      grid.appendChild(plainMetric('优惠码兑换', Number(events.promo_redeem || 0)))
      grid.appendChild(metric('已支付', paidCount(today), 'payments', ''))
      grid.appendChild(plainMetric('昨日也来过', Number(today.returning1 || 0)))
      grid.appendChild(plainMetric('7 天前也来过', Number(today.returning7 || 0)))
      summaryEl.append(head, grid, el('h3', '今日漏斗'), funnel(events, paidCount(today)))
      summaryEl.appendChild(el('p', '漏斗是次数，同一个人可以计多次。回访是安装编号去重：今天来过、而且昨天或 7 天前也来过。', 'note'))
      summaryEl.appendChild(breakdownBlock(today.breakdown || {}))
      summaryEl.appendChild(el('h3', '按日'))

      const days = summary.days || []
      const slice = days.slice((dayPage - 1) * PAGE, dayPage * PAGE)
      const table = document.createElement('table')
      const thead = document.createElement('thead')
      const hr = document.createElement('tr')
      ;['日期', 'DAU', '新安装', '导出', '购买', '好评', '优惠码', '支付'].forEach((name) => hr.appendChild(el('th', name)))
      thead.appendChild(hr)
      const tbody = document.createElement('tbody')
      if (!slice.length) {
        const tr = document.createElement('tr')
        const td = el('td', '暂无')
        td.colSpan = 8
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
        tr.appendChild(el('td', String(Number(day.events && day.events.review_granted || 0))))
        tr.appendChild(el('td', String(Number(day.events && day.events.promo_redeem || 0))))
        tr.appendChild(countCell(paidCount(day), 'payments', day.day))
        tbody.appendChild(tr)
      })
      table.append(thead, tbody)
      summaryEl.append(table, pager(dayPage, days.length, (page) => {
        dayPage = page
        renderSummary()
      }))
    }

    function evCount(events, name) {
      return Number(events && events[name] || 0)
    }

    function funnel(events, paid) {
      const row = el('div', '', 'funnel')
      ;[
        ['打开', evCount(events, 'options_open')],
        ['开始导出', evCount(events, 'export_start')],
        ['导出完成', evCount(events, 'export_complete')],
        ['次数用尽', evCount(events, 'quota_blocked')],
        ['打开价格', evCount(events, 'plans_open')],
        ['打开结账', evCount(events, 'checkout_start')],
        ['已支付', paid],
      ].forEach(([label, value], index) => {
        if (index) row.appendChild(el('span', '→', 'arrow'))
        const step = el('div', '', 'step')
        step.append(el('div', label, 'label'), el('div', String(value), 'value'))
        row.appendChild(step)
      })
      return row
    }

    function dimTable(title, pairs) {
      const card = el('div')
      card.appendChild(el('h3', title))
      const table = document.createElement('table')
      const tbody = document.createElement('tbody')
      if (!pairs.length) {
        const tr = document.createElement('tr')
        const td = el('td', '暂无')
        td.colSpan = 2
        tr.appendChild(td)
        tbody.appendChild(tr)
      }
      pairs.forEach(([label, count]) => {
        const tr = document.createElement('tr')
        tr.append(el('td', label), el('td', String(count)))
        tbody.appendChild(tr)
      })
      table.appendChild(tbody)
      card.appendChild(table)
      return card
    }

    function pairsOf(breakdown, event, dim, labels) {
      const values = (((breakdown || {})[event] || {})[dim]) || {}
      return Object.keys(values).map((key) => [labels[key] || key, Number(values[key] || 0)])
    }

    function breakdownBlock(breakdown) {
      const wrap = el('div', '', 'split')
      wrap.append(
        dimTable('导出失败原因', pairsOf(breakdown, 'export_failed', 'reason', {
          ig_login: '未登录 Instagram',
          invalid_url: '链接无效',
          profile_missing: '没有主页',
          private: '私密账号',
          empty_profile: '主页为空',
          schema: '页面结构变化',
          not_found: '找不到',
          ig_session: '登录失效',
          ig_verify: '需要验证',
          rate_limit: '限流',
          client_error: '请求被拒绝',
          server_error: 'Instagram 出错',
          timeout: '超时',
          scrape_failed: '抓取失败',
          ig_suspended: '账号受限',
          unknown: '未知',
          exception: '异常',
          detail_failed: '详情失败',
          parse_error: '解析失败',
          login_required: '需要登录插件',
          checkout_error: '结账失败',
        })),
        dimTable('导出内容', [
          ...pairsOf(breakdown, 'export_start', 'list', { followers: '粉丝', following: '关注' }),
          ...pairsOf(breakdown, 'export_start', 'detail', { 0: '普通', 1: '详细模式' }),
          ...pairsOf(breakdown, 'export_start', 'source', { new: '新任务', continue: '继续', quota_bar: '额度条', quota_dialog: '额度弹窗' }),
        ]),
      )
      const second = el('div', '', 'split')
      second.append(
        dimTable('打开价格的来源', pairsOf(breakdown, 'plans_open', 'source', { quota_bar: '额度条', quota_dialog: '次数用尽弹窗' })),
        dimTable('结账方案', pairsOf(breakdown, 'checkout_start', 'plan', { monthly: '月付', annual: '年付', quarterly: '季付' })),
      )
      const block = el('div')
      block.append(wrap, second)
      return block
    }

    function paidCount(row) {
      if (row && row.paidOrders != null) return Number(row.paidOrders) || 0
      const events = row && row.events
      return Number(events && events.payment_confirmed || 0)
    }

    function plainMetric(label, value) {
      const box = el('div')
      box.append(el('div', label, 'label'), el('div', String(value), 'value'))
      return box
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
      loadPayments()
    }

    async function fetchRecords(kind, page) {
      const params = new URLSearchParams({
        product: currentId,
        kind: kind,
        page: String(page || 1),
      })
      const resp = await fetch('/api/records?' + params.toString())
      return resp.json()
    }

    async function loadPayments() {
      paymentsEl.replaceChildren(el('h2', '支付'), el('p', '加载中…'))
      const [paid, unpaid, expiring] = await Promise.all([
        fetchRecords('payments', paymentPage),
        fetchRecords('unpaid', 1),
        fetchRecords('expiring', 1),
      ])
      paymentData = paid
      unpaidData = unpaid
      expiringData = expiring
      renderPayments()
    }

    function renderPayments() {
      paymentsEl.replaceChildren()
      paymentsEl.appendChild(el('h2', '支付'))
      if (!paymentData || !paymentData.ok) {
        paymentsEl.appendChild(el('p', '拉取失败：' + ((paymentData && paymentData.error) || 'unknown'), 'err'))
        return
      }
      const stats = paymentData.summary || {}
      const grid = el('div', '', 'grid')
      ;[
        ['今日笔数', String(stats.todayCount || 0)],
        ['今日金额', money(stats.todayAmountCents, stats.currency)],
        ['近 30 天笔数', String(stats.last30Count || 0)],
        ['近 30 天金额', money(stats.last30AmountCents, stats.currency)],
      ].forEach(([label, value]) => {
        const box = el('div')
        box.append(el('div', label, 'label'), el('div', value, 'value'))
        grid.appendChild(box)
      })
      paymentsEl.appendChild(grid)
      const plans = stats.byPlan || {}
      const planText = Object.keys(plans)
        .map((plan) => planLabel(plan) + ' ' + plans[plan].count + ' 笔 ' + money(plans[plan].amountCents, stats.currency))
        .join(' · ')
      if (planText) paymentsEl.appendChild(el('p', '近 30 天：' + planText, 'note'))
      paymentsEl.appendChild(el('p', '登录邮箱是插件账号。支付邮箱是 Anyway 付款页上的客户邮箱；以前的订单没有这条记录，会空着。', 'note'))
      const wrap = el('div', '', 'table-wrap')
      wrap.appendChild(paymentTable(paymentData.items || [], '暂无已支付订单'))
      paymentsEl.append(
        wrap,
        pager(paymentData.page || 1, paymentData.total || 0, (page) => {
          paymentPage = page
          loadPayments()
        }),
      )
      paymentsEl.appendChild(recordList('打开了结账、还没付', unpaidData, 'unpaid'))
      paymentsEl.appendChild(recordList('3 天内到期', expiringData, 'expiring'))
    }

    function recordList(title, data, expectedKind) {
      const block = el('div')
      block.appendChild(el('h3', title))
      if (!data || !data.ok) {
        block.appendChild(el('p', '拉取失败：' + ((data && data.error) || 'unknown'), 'err'))
        return block
      }
      if (data.kind !== expectedKind) {
        block.appendChild(el('p', '这个产品的计费接口还没有这份名单。', 'note'))
        return block
      }
      const wrap = el('div', '', 'table-wrap')
      wrap.appendChild(paymentTable(data.items || [], expectedKind === 'unpaid' ? '暂无未支付订单' : '暂无即将到期的订单'))
      block.appendChild(wrap)
      if ((data.total || 0) > (data.items || []).length) {
        block.appendChild(el('p', '共 ' + data.total + ' 条，这里显示最近 ' + (data.items || []).length + ' 条。', 'note'))
      }
      return block
    }

    function paymentTable(items, emptyText) {
      const table = document.createElement('table')
      const thead = document.createElement('thead')
      const hr = document.createElement('tr')
      ;['付款时间', '登录邮箱', '支付邮箱', '方案', '金额', '到期时间', '订单号'].forEach((name) => hr.appendChild(el('th', name)))
      thead.appendChild(hr)
      const tbody = document.createElement('tbody')
      if (!items.length) {
        const tr = document.createElement('tr')
        const td = el('td', emptyText || '暂无')
        td.colSpan = 7
        tr.appendChild(td)
        tbody.appendChild(tr)
      }
      items.forEach((item) => {
        const tr = document.createElement('tr')
        tr.append(
          el('td', when(item.paidAt || item.createdAt)),
          el('td', item.loginEmail || item.email || '—'),
          el('td', item.payerEmail || '—'),
          el('td', planLabel(item.plan)),
          el('td', money(item.amountCents, item.currency)),
          el('td', when(item.expiresAt)),
          el('td', item.orderId || '—'),
        )
        tbody.appendChild(tr)
      })
      table.append(thead, tbody)
      return table
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
        ? '已付款订单，按中国时间。登录邮箱是插件账号，支付邮箱是 Anyway 付款页上的客户邮箱。'
        : '名单是成功打开结账页的记录，含尚未支付。按中国时间的打开时间。'
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
      const paymentColumns = ['付款时间', '登录邮箱', '支付邮箱', '方案', '金额', '到期时间', '订单号']
      const purchaseColumns = ['时间', '登录邮箱', '方案', '状态', '金额', '订单号']
      const columns = detail.kind === 'payments' ? paymentColumns : purchaseColumns
      columns.forEach((name) => hr.appendChild(el('th', name)))
      thead.appendChild(hr)
      const tbody = document.createElement('tbody')
      const items = data.items || []
      if (!items.length) {
        const tr = document.createElement('tr')
        const td = el('td', '暂无记录')
        td.colSpan = detail.kind === 'payments' ? 7 : 6
        tr.appendChild(td)
        tbody.appendChild(tr)
      }
      items.forEach((item) => {
        const tr = document.createElement('tr')
        if (detail.kind === 'payments') {
          tr.append(
            el('td', when(item.paidAt || item.createdAt)),
            el('td', item.loginEmail || item.email || '—'),
            el('td', item.payerEmail || '—'),
            el('td', planLabel(item.plan)),
            el('td', money(item.amountCents, item.currency)),
            el('td', when(item.expiresAt)),
            el('td', item.orderId || '—'),
          )
        } else {
          tr.append(
            el('td', when(item.createdAt)),
            el('td', item.loginEmail || item.email || '—'),
            el('td', planLabel(item.plan)),
            el('td', statusLabel(item.status)),
            el('td', money(item.amountCents, item.currency)),
            el('td', item.orderId || '—'),
          )
        }
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
    renderProductSelect()
    productEl.addEventListener('change', () => {
      currentId = productEl.value
      dayPage = 1
      paymentPage = 1
      loadSummary()
    })
    renderViews()
    applyView()
    if (currentId) loadSummary()
    else summaryEl.appendChild(el('p', '还没有配置产品', 'err'))
  </script>
</body>
</html>`
}
