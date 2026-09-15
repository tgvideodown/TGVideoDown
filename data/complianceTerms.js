/**
 * Shared compliance / Terms of Use text for payment-platform audits.
 * Used on Terms, Privacy, Support, and extension landing pages.
 */
export const complianceTerms = {
  title: 'Terms of Use & Compliance',
  titleCn: '使用条款与合规说明',
  intro:
    'By using TGVideoDown products and services, you agree to the following terms. Please read carefully.',
  introCn: '使用 TGVideoDown 产品与服务即表示您同意以下条款，请仔细阅读。',
  items: [
    {
      title: '1. Copyright and Intellectual Property',
      titleCn: '1. 版权和知识产权',
      body: 'You may only download content that you own, have a license to use, or are otherwise legally entitled to download. You are responsible for ensuring that your use of downloaded content does not infringe any third-party rights.',
      bodyCn:
        '您仅可下载您拥有所有权、已获得使用许可或依法有权下载的内容。您有责任确保您对下载内容的使用不侵犯任何第三方的权利。'
    },
    {
      title: '2. No Bypassing Access Restrictions',
      titleCn: '2. 不得规避访问限制',
      body: 'You may not use our services to access or download content from private accounts, bypass paywalls or DRM protection, or circumvent any access controls or technical restrictions.',
      bodyCn:
        '您不得使用我们的服务访问或下载私人帐户中的内容，绕过付费墙或 DRM 保护，或规避任何访问控制或技术限制。'
    },
    {
      title: '3. Copyright / DMCA Complaints',
      titleCn: '3. 版权/DMCA投诉',
      body: 'If you believe your copyrighted content has been used or downloaded without authorization, please contact us at {{supportEmail}} and provide details of the alleged infringement.',
      bodyCn:
        '如果您认为您的受版权保护的内容被他人未经授权使用或下载，请通过 {{supportEmail}} 联系我们，并提供涉嫌侵权的详细信息。',
      hasEmail: true
    },
    {
      title: '4. Platform Disclaimer',
      titleCn: '4. 平台免责声明',
      body: 'Our products have no affiliation, endorsement, sponsorship, or official relationship with Meta, Instagram, TikTok, ByteDance, Telegram, or any other third-party platform.',
      bodyCn:
        '我们的产品与 Meta、Instagram、TikTok、字节跳动、Telegram 或任何其他第三方平台均无任何关联、认可、赞助或官方联系。'
    },
    {
      title: '5. Privacy',
      titleCn: '5. 隐私',
      body: 'We do not collect account passwords, authentication credentials, cookies, private messages, or other sensitive information unrelated to providing the service.',
      bodyCn:
        '我们不会收集账户密码、身份验证凭证、cookie、私人消息或其他与提供服务无关的敏感信息。'
    }
  ]
}

/** Optional product-specific intro override */
export function getComplianceTerms(productName) {
  if (!productName) return complianceTerms
  return {
    ...complianceTerms,
    intro: `By using ${productName}, you agree to the following terms. Please read carefully.`,
    introCn: `使用 ${productName} 即表示您同意以下条款，请仔细阅读。`
  }
}
