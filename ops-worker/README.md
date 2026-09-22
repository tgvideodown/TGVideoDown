# 产品数据后台（product-ops）

隐藏入口在官网：`/dashboard`（不进导航 / sitemap；旧地址 `/ops-x9f2a7` 会 301 过来）  
登录后跳转到本 Worker 控制台。

## 本地部署

```powershell
cd ops-worker
npm install
npx wrangler deploy
```

部署后地址类似：
`https://product-ops.<你的子域>.workers.dev`

## 账号

账号密码**不要写进仓库**，只在 Cloudflare 网页改：

Workers & Pages → `product-ops` → Settings → Variables and Secrets

需要这些变量：

- `OPS_USERNAME`
- `OPS_PASSWORD`
- `OPS_SESSION_SECRET`
- `TOKEN_IGEXPORT`
- `TOKEN_IGCOMMENT`

`wrangler.jsonc` 已开启 `keep_vars`，之后 `npx wrangler deploy` 不会覆盖网页上改过的值。

## 接入新插件

插件 Worker 需提供：

`GET /v1/analytics/summary`（Bearer token）

然后在本 Worker 的 `TOKEN_*`、`getProducts()` / `OPS_PRODUCTS_JSON`，以及 `wrangler.jsonc` 的 `services` 绑定里登记即可。同账号 Worker 之间请用 Service Binding，不要走 workers.dev 公网（否则会 404）。
