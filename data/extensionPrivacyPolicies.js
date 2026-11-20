export const extensionPrivacyPolicies = {
  igDmBot: {
    extensionName: 'IG DM Bot',
    extensionNameCn: 'IG DM Bot（Instagram 群发私信工具）',
    lastUpdated: 'August 25, 2026',
    landingSlug: 'ig-dm-bot',
    seoTitle: 'Privacy Policy - IG DM Bot',
    seoDescription:
      'Privacy Policy for the IG DM Bot Chrome extension by TGvideodown.com. Learn how we collect, use, and protect your data.',
    en: {
      intro:
        'This Privacy Policy describes how the IG DM Bot browser extension ("Extension", "we", "us", or "our") collects, uses, and protects information when you install and use our Extension. By using the Extension, you agree to the practices described in this policy.',
      sections: [
        {
          title: '1. Overview',
          paragraphs: [
            'The Extension helps you send direct messages on Instagram from your browser. Core messaging workflows are designed to run on your device. We do not require you to create an account on this website, and we do not collect your Instagram password.'
          ]
        },
        {
          title: '2. Information We Collect',
          subsections: [
            {
              title: '2.1 Information Stored Locally on Your Device',
              paragraphs: ['The Extension uses Chrome local storage to save:'],
              list: [
                'Message templates, send settings, and UI preferences',
                'Send history, success/failure records, and funnel filter state',
                'A randomly generated anonymous identifier (UUID) to distinguish installations',
                'Extension installation time and version',
                'Basic browser environment information (browser type, OS, language, user-agent)',
                'Review prompt display state'
              ],
              after:
                'This data remains on your device unless you uninstall the Extension or clear extension storage.'
            },
            {
              title: '2.2 Usage Analytics',
              paragraphs: [
                'To improve stability and features, we may collect anonymous usage analytics, including extension version, anonymous UUID, browser type, language, user-agent, and event types (e.g., install, update, feature usage).',
                'Analytics data may be transmitted to our log service provider (Alibaba Cloud Log Service). We do not use analytics to identify you personally.'
              ]
            },
            {
              title: '2.3 Instagram Data (Processed Locally)',
              paragraphs: [
                'When you use bulk or automated messaging features, the Extension reads information visible in your Instagram session in the browser (such as usernames, profile URLs, and message targets you select) solely to perform sends you initiate. Processing occurs in your browser. We do not upload your Instagram password, private messages, or full account data to our servers.'
              ]
            }
          ]
        },
        {
          title: '3. Permissions We Request',
          paragraphs: ['The Extension may request browser permissions such as:'],
          list: [
            'storage — to save templates, settings, and send history locally',
            'tabs — to interact with Instagram tabs you open',
            'downloads — to export success/failure lists',
            'Host access to instagram.com — to read page context needed for messaging workflows you initiate'
          ]
        },
        {
          title: '4. How We Use Information',
          paragraphs: ['We use collected information only to:'],
          list: [
            'Provide and maintain messaging and automation features you request',
            'Remember templates, filters, and preferences',
            'Diagnose errors and improve performance',
            'Understand aggregate usage patterns to improve the Extension'
          ]
        },
        {
          title: '5. Data Sharing and Third Parties',
          paragraphs: [
            'We do not sell, rent, or trade your personal information. We may share limited technical data with Alibaba Cloud Log Service for anonymous analytics and error logging. Your browser may communicate directly with Instagram/Meta servers when you send messages, governed by Instagram’s privacy policy.',
            'We may disclose information if required by law or to protect our legal rights.'
          ]
        },
        {
          title: '6. Data Retention',
          paragraphs: [
            'Locally stored data persists until you uninstall the Extension or clear its storage. Analytics logs are retained for a limited period for analysis and troubleshooting, then deleted or anonymized.'
          ]
        },
        {
          title: '7. Data Security',
          paragraphs: [
            'We take reasonable measures to protect information transmitted by the Extension. However, no method of transmission or storage over the Internet is 100% secure.'
          ]
        },
        {
          title: '8. Your Choices',
          list: [
            'You can change templates and settings in the Extension popup at any time.',
            'You can uninstall the Extension at any time, which removes locally stored data.',
            'You can disable or limit the Extension through Chrome extension management settings.'
          ]
        },
        {
          title: "9. Children's Privacy",
          paragraphs: [
            'The Extension is not directed at children under 13. We do not knowingly collect personal information from children.'
          ]
        },
        {
          title: '10. International Users',
          paragraphs: [
            'The Extension may be used globally. Analytics data may be processed on servers outside your country. By using the Extension, you consent to such processing as described in this policy.'
          ]
        },
        {
          title: '11. Changes to This Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time. The "Last updated" date reflects the most recent revision. Continued use after changes constitutes acceptance of the updated policy.'
          ]
        },
        {
          title: '12. Contact Us',
          paragraphs: ['If you have questions about this Privacy Policy, contact us at:'],
          contact: true
        }
      ]
    },
    cn: {
      title: '隐私政策',
      intro:
        '本隐私政策说明 IG DM Bot 浏览器扩展（以下简称"本扩展"、"我们"）在您安装和使用过程中如何收集、使用和保护相关信息。使用本扩展即表示您同意本政策所述的做法。',
      sections: [
        {
          title: '1. 概述',
          paragraphs: [
            '本扩展帮助您在浏览器中向 Instagram 用户发送私信。核心消息流程在您的设备上运行。我们不要求您在本网站注册账号，也不会收集您的 Instagram 密码。'
          ]
        },
        {
          title: '2. 我们收集的信息',
          subsections: [
            {
              title: '2.1 本地存储的信息',
              paragraphs: ['本扩展使用 Chrome 本地存储保存：'],
              list: [
                '消息模板、发送设置与界面偏好',
                '发送历史、成功/失败记录与漏斗过滤状态',
                '随机生成的匿名标识符（UUID）',
                '扩展安装时间与版本',
                '基本浏览器环境信息（浏览器类型、操作系统、语言、User-Agent）',
                '评价提示弹窗的显示状态'
              ],
              after: '上述数据保存在您的设备上，除非您卸载扩展或清除扩展存储。'
            },
            {
              title: '2.2 使用分析数据',
              paragraphs: [
                '为改进稳定性与功能，我们可能收集匿名使用分析数据，包括扩展版本、匿名 UUID、浏览器类型、语言、User-Agent 及事件类型（如安装、更新、功能使用）。',
                '分析数据可能传输至阿里云日志服务进行处理。我们不会通过分析数据识别您的个人身份。'
              ]
            },
            {
              title: '2.3 Instagram 数据（本地处理）',
              paragraphs: [
                '当您使用群发或自动化消息功能时，本扩展会读取您浏览器中 Instagram 会话内可见的信息（如您选择的用户名、资料链接与发送目标），仅用于执行您发起的发送操作。处理在浏览器中完成。我们不会将您的 Instagram 密码、私信内容或完整账号数据上传至服务器。'
              ]
            }
          ]
        },
        {
          title: '3. 请求的权限说明',
          paragraphs: ['本扩展可能请求以下浏览器权限：'],
          list: [
            'storage（存储）— 在本地保存模板、设置与发送历史',
            'tabs（标签页）— 与您打开的 Instagram 标签页交互',
            'downloads（下载）— 导出成功/失败列表',
            '访问 instagram.com — 读取您发起消息流程所需的页面上下文'
          ]
        },
        {
          title: '4. 信息使用方式',
          paragraphs: ['我们仅将收集的信息用于：'],
          list: [
            '提供和维护您请求的消息与自动化功能',
            '记住模板、过滤器与偏好设置',
            '诊断错误并提升性能',
            '了解汇总使用情况以改进扩展'
          ]
        },
        {
          title: '5. 数据共享与第三方',
          paragraphs: [
            '我们不会出售、出租或交易您的个人信息。我们可能向阿里云日志服务共享有限的技术数据用于匿名分析与错误日志。您发送消息时，浏览器会直接与 Instagram/Meta 服务器通信，受 Instagram 隐私政策约束。',
            '在法律要求或为保护合法权益的情况下，我们也可能披露相关信息。'
          ]
        },
        {
          title: '6. 数据保留',
          paragraphs: [
            '本地数据在您卸载扩展或清除存储前一直保留。分析日志仅在有限期限内保留，之后将被删除或匿名化处理。'
          ]
        },
        {
          title: '7. 数据安全',
          paragraphs: ['我们采取合理措施保护本扩展传输的信息，但无法保证互联网传输与存储的绝对安全。']
        },
        {
          title: '8. 您的选择',
          list: [
            '您可随时在扩展弹窗中更改模板与设置。',
            '您可随时卸载扩展，相关本地数据将随之移除。',
            '您可通过 Chrome 扩展管理设置禁用或限制本扩展。'
          ]
        },
        {
          title: '9. 儿童隐私',
          paragraphs: ['本扩展不面向 13 岁以下儿童，我们不会故意收集儿童个人信息。']
        },
        {
          title: '10. 国际用户',
          paragraphs: [
            '本扩展可供全球用户使用。分析数据可能在您所在国家/地区以外的服务器上处理。使用本扩展即表示您同意按本政策进行此类处理。'
          ]
        },
        {
          title: '11. 政策变更',
          paragraphs: [
            '我们可能不时更新本隐私政策，文首"最后更新日期"将反映最新修订。变更后继续使用即视为接受更新后的政策。'
          ]
        },
        {
          title: '12. 联系我们',
          paragraphs: ['如对本隐私政策有任何疑问，请通过以下方式联系我们：'],
          contactCn: true
        }
      ]
    }
  },

  igFollowerExport: {
    extensionName: 'IG Follower Export Tool',
    extensionNameCn: 'IG Follower Export Tool（Instagram 粉丝导出工具）',
    lastUpdated: 'August 25, 2026',
    landingSlug: 'ig-follower-export-tool',
    seoTitle: 'Privacy Policy - IG Follower Export Tool',
    seoDescription:
      'Privacy Policy for the IG Follower Export Tool Chrome extension by TGvideodown.com.',
    en: {
      intro:
        'This Privacy Policy describes how the IG Follower Export Tool browser extension ("Extension", "we", "us", or "our") collects, uses, and protects information when you install and use our Extension.',
      sections: [
        {
          title: '1. Overview',
          paragraphs: [
            'The Extension exports Instagram follower and following lists to CSV or Excel files on your device. We do not require you to create an account on this website, and we do not collect your Instagram password.'
          ]
        },
        {
          title: '2. Information We Collect',
          subsections: [
            {
              title: '2.1 Information Stored Locally on Your Device',
              paragraphs: ['The Extension uses Chrome local storage to save:'],
              list: [
                'Export settings, mode preferences (fast/detailed), and UI state',
                'Export history and cooldown/rate-limit timers',
                'A randomly generated anonymous identifier (UUID)',
                'Extension installation time and version',
                'Basic browser environment information'
              ],
              after:
                'Exported CSV/Excel files are saved to your device through Chrome downloads. We do not upload exported follower lists to our servers.'
            },
            {
              title: '2.2 Usage Analytics',
              paragraphs: [
                'We may collect anonymous usage analytics (version, UUID, browser type, language, events) transmitted to Alibaba Cloud Log Service for stability and improvement. We do not use analytics to identify you personally.'
              ]
            },
            {
              title: '2.3 Instagram Profile Data (Processed Locally)',
              paragraphs: [
                'When you export followers or following, the Extension reads publicly available profile fields visible in your Instagram browser session (such as username, full name, bio, counts, and optional contact fields in detailed mode) solely to build the export file you request. Processing occurs in your browser.'
              ]
            }
          ]
        },
        {
          title: '3. Permissions We Request',
          list: [
            'storage — local settings and export state',
            'tabs — interact with Instagram tabs you open',
            'downloads — save CSV/Excel export files',
            'Host access to instagram.com — read profile/list data for exports you initiate'
          ]
        },
        {
          title: '4. How We Use Information',
          list: [
            'Provide export functionality you request',
            'Remember settings and handle rate-limit cooldowns',
            'Diagnose errors and improve performance',
            'Understand aggregate usage patterns'
          ]
        },
        {
          title: '5. Data Sharing and Third Parties',
          paragraphs: [
            'We do not sell your personal information. Limited technical data may be shared with Alibaba Cloud Log Service for analytics. Your browser communicates with Instagram when loading profile data, governed by Instagram’s policies.'
          ]
        },
        {
          title: '6. Data Retention',
          paragraphs: [
            'Local extension data persists until uninstall or storage clear. Analytics logs are retained for a limited period then deleted or anonymized. Exported files remain on your device until you delete them.'
          ]
        },
        {
          title: '7. Data Security',
          paragraphs: ['We take reasonable measures to protect transmitted information but cannot guarantee absolute security.']
        },
        {
          title: '8. Your Choices',
          list: [
            'Change export settings in the Extension popup.',
            'Uninstall the Extension to remove local extension data.',
            'Manage permissions in Chrome extension settings.'
          ]
        },
        {
          title: "9. Children's Privacy",
          paragraphs: ['Not directed at children under 13.']
        },
        {
          title: '10. International Users',
          paragraphs: ['Analytics may be processed outside your country. By using the Extension you consent as described.']
        },
        {
          title: '11. Changes to This Policy',
          paragraphs: ['We may update this policy. Continued use after changes constitutes acceptance.']
        },
        {
          title: '12. Contact Us',
          paragraphs: ['Questions? Contact us at:'],
          contact: true
        }
      ]
    },
    cn: {
      title: '隐私政策',
      intro:
        '本隐私政策说明 IG Follower Export Tool 浏览器扩展（以下简称"本扩展"、"我们"）在您安装和使用过程中如何收集、使用和保护相关信息。',
      sections: [
        {
          title: '1. 概述',
          paragraphs: [
            '本扩展将 Instagram 粉丝与关注列表导出为设备上的 CSV 或 Excel 文件。我们不要求您在本网站注册账号，也不会收集您的 Instagram 密码。'
          ]
        },
        {
          title: '2. 我们收集的信息',
          subsections: [
            {
              title: '2.1 本地存储的信息',
              paragraphs: ['本扩展使用 Chrome 本地存储保存：'],
              list: [
                '导出设置、模式偏好（快速/详细）与界面状态',
                '导出历史与冷却/限流计时器',
                '随机生成的匿名 UUID',
                '扩展安装时间与版本',
                '基本浏览器环境信息'
              ],
              after:
                '导出的 CSV/Excel 文件通过 Chrome 下载保存到您的设备。我们不会将导出的粉丝列表上传至服务器。'
            },
            {
              title: '2.2 使用分析数据',
              paragraphs: [
                '我们可能收集匿名使用分析数据（版本、UUID、浏览器类型、语言、事件），并传输至阿里云日志服务以改进稳定性。我们不会通过分析数据识别您的个人身份。'
              ]
            },
            {
              title: '2.3 Instagram 资料数据（本地处理）',
              paragraphs: [
                '导出粉丝或关注时，本扩展读取您浏览器 Instagram 会话中可见的公开资料字段（如用户名、全名、简介、数量及详细模式下的可选联系字段），仅用于生成您请求的导出文件。处理在浏览器中完成。'
              ]
            }
          ]
        },
        {
          title: '3. 请求的权限说明',
          list: [
            'storage — 本地设置与导出状态',
            'tabs — 与打开的 Instagram 标签页交互',
            'downloads — 保存 CSV/Excel 导出文件',
            '访问 instagram.com — 读取您发起导出所需的资料/列表数据'
          ]
        },
        {
          title: '4. 信息使用方式',
          list: [
            '提供您请求的导出功能',
            '记住设置并处理限流冷却',
            '诊断错误并提升性能',
            '了解汇总使用情况'
          ]
        },
        {
          title: '5. 数据共享与第三方',
          paragraphs: [
            '我们不会出售您的个人信息。有限技术数据可能与阿里云日志服务共享用于分析。加载资料时浏览器会与 Instagram 通信，受 Instagram 政策约束。'
          ]
        },
        {
          title: '6. 数据保留',
          paragraphs: [
            '本地扩展数据在卸载或清除存储前保留。分析日志在有限期限后删除或匿名化。导出文件保留在您的设备上直至您自行删除。'
          ]
        },
        {
          title: '7. 数据安全',
          paragraphs: ['我们采取合理措施保护传输的信息，但无法保证绝对安全。']
        },
        {
          title: '8. 您的选择',
          list: [
            '在扩展弹窗中更改导出设置。',
            '卸载扩展以移除本地扩展数据。',
            '在 Chrome 扩展设置中管理权限。'
          ]
        },
        {
          title: '9. 儿童隐私',
          paragraphs: ['本扩展不面向 13 岁以下儿童。']
        },
        {
          title: '10. 国际用户',
          paragraphs: ['分析数据可能在您所在国家/地区以外处理。使用本扩展即表示您同意本政策所述处理。']
        },
        {
          title: '11. 政策变更',
          paragraphs: ['我们可能更新本政策。变更后继续使用即视为接受。']
        },
        {
          title: '12. 联系我们',
          paragraphs: ['如有疑问，请通过以下方式联系我们：'],
          contactCn: true
        }
      ]
    }
  },

  facebookVideoDownloader: {
    extensionName: 'Facebook Video Downloader & Ads Library',
    extensionNameCn: '脸书视频下载器与广告库',
    lastUpdated: 'November 20, 2026',
    landingSlug: 'facebook-video-download',
    seoTitle: 'Privacy Policy - Facebook Video Downloader',
    seoDescription:
      'Privacy Policy for the Facebook Video Downloader & Ads Library Chrome extension by TGvideodown.com. Covers local storage, Google sign-in, billing, Ads Library, transcription, and analytics.',
    en: {
      intro:
        'This Privacy Policy describes how the Facebook Video Downloader & Ads Library browser extension ("Extension", "we", "us", or "our"), operated by TGvideodown.com, collects, uses, stores, and shares information when you install and use the Extension. By using the Extension, you agree to the practices described in this policy.',
      sections: [
        {
          title: '1. Overview',
          paragraphs: [
            'The Extension helps you download Facebook videos and images, save Meta Ads Library creatives locally, manage a local ads workspace, purchase optional VIP / credit plans, and (when you choose) transcribe media. Core download and Ads Library save workflows are designed to run primarily on your device.',
            'We do not collect your Facebook password or Facebook login cookies. Optional Google sign-in is used only when you choose paid features, account sync, or transcription. We do not sell personal information.'
          ]
        },
        {
          title: '2. Information We Collect',
          subsections: [
            {
              title: '2.1 Information Stored Locally on Your Device',
              paragraphs: ['The Extension uses Chrome storage (including unlimitedStorage for large local datasets) to save:'],
              list: [
                'Download quality, UI language, and other preferences',
                'A randomly generated install identifier (UUID)',
                'Daily free-quota counters and optional review-bonus state',
                'Local VIP / paid-plan entitlement cache (plan type and expiry timestamp)',
                'Transcription credit balance cache',
                'Local Ads Library workspace data you save (ad metadata, media URLs, folders, and related notes)',
                'Side-panel / dashboard UI state'
              ],
              after:
                'This data remains on your device unless you clear extension storage, sign out related caches, or uninstall the Extension. Saved media files go to your Downloads folder via Chrome downloads.'
            },
            {
              title: '2.2 Google Account Information (Only If You Sign In)',
              paragraphs: [
                'If you use Google sign-in (Chrome identity), we may receive and store your Google account email and Google user ID locally, and send them to our billing API to associate purchases, entitlements, and credit balances with your account. We do not receive or store your Google password.'
              ]
            },
            {
              title: '2.3 Billing, Payments, and Entitlements',
              paragraphs: [
                'When you start checkout for VIP plans (monthly / annual / lifetime) or transcription credits, the Extension sends your install ID, selected plan, and (if signed in) Google email / user ID to our billing backend hosted on Cloudflare Workers. Payment is completed through our payment processor (Anyway). We may store order / entitlement records such as plan, amount, status, purchase timestamps, and expiry so we can unlock features and support refunds or disputes.',
                'Card or wallet payment details are handled by the payment processor; we do not store full payment card numbers in the Extension.'
              ]
            },
            {
              title: '2.4 Usage Analytics and Diagnostics',
              paragraphs: [
                'To improve stability and features, we may collect usage events such as install/update, downloads started/completed/failed, quota blocked, plans opened, checkout started/failed, login events, Ads Library saves, and transcription start/complete/fail. Events may include Extension version, install ID, browser language/user-agent, and non-sensitive event metadata.',
                'Analytics may be sent to our billing/analytics endpoint on Cloudflare Workers and/or Alibaba Cloud Log Service. We do not use analytics to sell advertising profiles about you.'
              ]
            },
            {
              title: '2.5 Facebook Page and Ads Library Data',
              paragraphs: [
                'When you download a video/image, the Extension reads publicly available media information from the Facebook page context in your browser (for example media URLs, IDs, and related page fields needed to fetch files). This processing is initiated by you and occurs in the browser to complete the download.',
                'When you use Ads Library features, the Extension may read publicly visible ad fields (such as archive ID, page/brand name, creative text, CTA, media URLs, start/end dates, and EU transparency metrics where available) to display, save locally, or download creatives. Local Ads Library saves are stored in Chrome storage on your device and are not uploaded as a cloud ads database to our servers.'
              ]
            },
            {
              title: '2.6 Transcription Media (Only If You Use Transcription)',
              paragraphs: [
                'If you start transcription, media you select may be temporarily uploaded to our billing backend (Cloudflare Workers / R2 object storage) and processed by a speech-to-text provider (for example AssemblyAI) to return a transcript. Uploaded media is used only to complete that request and related credit accounting. Do not upload content you are not allowed to process.'
              ]
            }
          ]
        },
        {
          title: '3. Permissions We Request',
          paragraphs: ['The Extension requests these Chrome permissions for the features above:'],
          list: [
            'storage / unlimitedStorage — save preferences, quota, entitlements, and local Ads Library workspace data',
            'downloads — save videos, images, and ad creatives to your device',
            'offscreen — process certain media formats locally before download',
            'scripting — inject helpers required for download / Ads Library features on Facebook pages',
            'identity — optional Google sign-in for VIP, credits, and transcription',
            'sidePanel — open the Extension side panel UI',
            'Host access to facebook.com and fbcdn.net — detect and fetch Facebook media / Ads Library content',
            'Host access to accounts.google.com and www.googleapis.com — Google sign-in / profile lookup',
            'Host access to our billing API (Cloudflare Workers) — entitlements, checkout, credits, analytics, transcription'
          ]
        },
        {
          title: '4. How We Use Information',
          list: [
            'Provide downloads, Ads Library local save/download, side panel, and dashboard features you request',
            'Enforce free daily quotas and unlock paid VIP / credit features after purchase',
            'Process payments and maintain entitlement / credit records',
            'Provide optional transcription and deduct credits',
            'Diagnose errors, prevent abuse, and improve product quality using aggregate analytics',
            'Respond to support requests you send us'
          ]
        },
        {
          title: '5. Data Sharing and Third Parties',
          paragraphs: [
            'We do not sell, rent, or trade personal information. Depending on features you use, limited data may be processed by:'
          ],
          list: [
            'Meta / Facebook — your browser contacts Meta servers to load pages and fetch media you choose to download (subject to Meta’s policies)',
            'Google — if you sign in with Google identity',
            'Anyway (payment processor) — checkout and payment confirmation',
            'Cloudflare Workers / R2 — billing API, entitlements, analytics intake, temporary transcription media storage',
            'Speech-to-text providers (e.g. AssemblyAI) — only when you request transcription',
            'Alibaba Cloud Log Service — optional anonymous/diagnostic logging'
          ],
          after:
            'We may also disclose information if required by law or to protect our legal rights. We do not share your Facebook password, and we do not operate a social graph of your friends or private messages.'
        },
        {
          title: '6. Data Retention',
          paragraphs: [
            'Local extension storage persists until you clear it, sign out related caches, or uninstall. Files in your Downloads folder remain until you delete them.',
            'Billing / entitlement / order records are retained as needed to provide the purchased service, accounting, fraud prevention, and legal compliance.',
            'Analytics and diagnostic logs are retained for a limited period needed for analysis and troubleshooting, then deleted or anonymized.',
            'Temporary transcription uploads are retained only as long as needed to finish processing and related support/abuse review, then removed according to our backend retention rules.'
          ]
        },
        {
          title: '7. Data Security',
          paragraphs: [
            'We use reasonable technical and organizational measures to protect information transmitted to our billing and logging services. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.'
          ]
        },
        {
          title: '8. Your Choices and Rights',
          list: [
            'Use core download features without Google sign-in (subject to free daily limits)',
            'Sign out of Google in the Extension UI to clear local account fields where applicable',
            'Change quality / language preferences in the side panel or settings',
            'Delete local Ads Library workspace items from the dashboard / side panel',
            'Uninstall the Extension or revoke permissions in Chrome to stop further collection by the Extension',
            'Email support@tgvideodown.com to request deletion of billing-account associated records we control (we may retain limited records where legally required)'
          ]
        },
        {
          title: "9. Children's Privacy",
          paragraphs: [
            'The Extension is not directed at children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children.'
          ]
        },
        {
          title: '10. International Users',
          paragraphs: [
            'The Extension may be used globally. Billing, analytics, payment, and transcription processing may occur on servers outside your country (including services operated by Cloudflare, Google, Anyway, Alibaba Cloud, and speech-to-text providers). By using the Extension, you understand such processing as described in this policy.'
          ]
        },
        {
          title: '11. Changes to This Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect the most recent revision. Continued use of the Extension after changes constitutes acceptance of the updated policy.'
          ]
        },
        {
          title: '12. Contact Us',
          paragraphs: ['If you have questions about this Privacy Policy or our data practices, contact us at:'],
          contact: true
        }
      ]
    },
    cn: {
      title: '隐私政策',
      intro:
        '本隐私政策说明由 TGvideodown.com 运营的「脸书视频下载器与广告库」浏览器扩展（以下简称"本扩展"、"我们"）在您安装和使用过程中如何收集、使用、存储和共享相关信息。使用本扩展即表示您同意本政策。',
      sections: [
        {
          title: '1. 概述',
          paragraphs: [
            '本扩展用于下载 Facebook 视频与图片、在本地保存 Meta 广告库素材、管理本地广告工作区、购买可选 VIP / 积分方案，以及在您主动选择时进行媒体转录。下载与广告库本地保存流程主要在您的设备上完成。',
            '我们不收集您的 Facebook 密码或登录 Cookie。仅当您使用付费功能、账号同步或转录时，才会用到可选的 Google 登录。我们不出售个人信息。'
          ]
        },
        {
          title: '2. 我们收集的信息',
          subsections: [
            {
              title: '2.1 存储在您设备本地的信息',
              paragraphs: ['本扩展使用 Chrome 存储（含 unlimitedStorage，用于较大本地数据集）保存：'],
              list: [
                '下载清晰度、界面语言等偏好设置',
                '随机生成的安装标识（UUID）',
                '每日免费额度计数与评价奖励状态',
                '本地 VIP / 付费权益缓存（方案类型与到期时间）',
                '转录积分余额缓存',
                '您保存的本地广告库工作区数据（广告元数据、媒体链接、文件夹等）',
                '侧边栏 / 数据面板界面状态'
              ],
              after:
                '上述数据保留在您的设备上，除非您清理扩展存储、退出相关缓存或卸载扩展。媒体文件通过 Chrome 下载功能保存到您的下载目录。'
            },
            {
              title: '2.2 Google 账号信息（仅在您登录时）',
              paragraphs: [
                '若您使用 Google 登录（Chrome identity），我们可能获取并在本地保存您的 Google 邮箱与 Google 用户 ID，并将其发送至计费接口，用于关联购买、权益与积分。我们不会获取或存储您的 Google 密码。'
              ]
            },
            {
              title: '2.3 计费、支付与权益',
              paragraphs: [
                '当您发起 VIP（月付 / 年付 / 终身）或转录积分结账时，扩展会将安装 ID、所选方案，以及（如已登录）Google 邮箱 / 用户 ID 发送至部署在 Cloudflare Workers 上的计费后端。支付由支付服务商 Anyway 完成。我们可能保存订单 / 权益记录（方案、金额、状态、时间、到期时间等），以便开通功能并处理退款或争议。',
                '银行卡等支付凭据由支付服务商处理；扩展不存储完整卡号。'
              ]
            },
            {
              title: '2.4 使用分析与诊断',
              paragraphs: [
                '为改进稳定性与功能，我们可能收集安装/更新、下载开始/完成/失败、额度用尽、打开价格、结账开始/失败、登录、广告库保存、转录开始/完成/失败等事件。事件可包含扩展版本、安装 ID、浏览器语言 / User-Agent 及非敏感事件元数据。',
                '分析数据可能发送至 Cloudflare Workers 计费/分析接口，以及/或阿里云日志服务。我们不会利用分析数据向您出售广告画像。'
              ]
            },
            {
              title: '2.5 Facebook 页面与广告库数据',
              paragraphs: [
                '当您下载视频/图片时，扩展会在浏览器中读取当前 Facebook 页面上下文中公开可用的媒体信息（如媒体链接、ID 等），仅用于完成您发起的下载。',
                '使用广告库功能时，扩展可能读取公开可见的广告字段（如资料库编号、品牌名、文案、CTA、媒体链接、投放起止日期、欧盟透明数据等），用于展示、本地保存或下载素材。本地保存的广告数据存放在您设备的 Chrome 存储中，不会作为云端广告库上传到我们的服务器。'
              ]
            },
            {
              title: '2.6 转录媒体（仅在您使用转录时）',
              paragraphs: [
                '若您发起转录，所选媒体可能被临时上传至计费后端（Cloudflare Workers / R2），并由语音转写服务商（例如 AssemblyAI）处理以返回文稿。上传内容仅用于完成本次请求及相关积分记账。请勿上传您无权处理的内容。'
              ]
            }
          ]
        },
        {
          title: '3. 我们申请的权限',
          paragraphs: ['本扩展为上述功能申请以下 Chrome 权限：'],
          list: [
            'storage / unlimitedStorage — 保存偏好、额度、权益与本地广告库数据',
            'downloads — 将视频、图片与广告素材保存到本机',
            'offscreen — 在本机处理部分媒体格式',
            'scripting — 在 Facebook 页面注入下载 / 广告库所需脚本',
            'identity — 可选 Google 登录（VIP、积分、转录）',
            'sidePanel — 打开扩展侧边栏',
            '访问 facebook.com 与 fbcdn.net — 检测并获取媒体 / 广告库内容',
            '访问 accounts.google.com 与 www.googleapis.com — Google 登录 / 资料查询',
            '访问计费 API（Cloudflare Workers）— 权益、结账、积分、分析、转录'
          ]
        },
        {
          title: '4. 我们如何使用信息',
          list: [
            '提供您请求的下载、广告库本地保存/下载、侧边栏与数据面板功能',
            '执行免费每日额度，并在购买后开通 VIP / 积分功能',
            '处理支付并维护权益 / 积分记录',
            '提供可选转录并扣减积分',
            '诊断错误、防止滥用，并通过汇总分析改进产品',
            '回复您的支持请求'
          ]
        },
        {
          title: '5. 数据共享与第三方',
          paragraphs: ['我们不出售、出租或交易个人信息。根据您使用的功能，有限数据可能由以下方处理：'],
          list: [
            'Meta / Facebook — 您的浏览器在加载页面与获取您选择下载的媒体时会与 Meta 通信（适用 Meta 政策）',
            'Google — 当您使用 Google 登录时',
            'Anyway（支付服务商）— 结账与支付确认',
            'Cloudflare Workers / R2 — 计费接口、权益、分析接入、临时转录媒体存储',
            '语音转写服务商（如 AssemblyAI）— 仅当您请求转录时',
            '阿里云日志服务 — 可选的匿名/诊断日志'
          ],
          after:
            '在法律要求或为保护我们的合法权利时，我们也可能披露信息。我们不收集您的 Facebook 密码，也不构建您的好友或私信社交图谱。'
        },
        {
          title: '6. 数据保留',
          paragraphs: [
            '本地扩展数据在您清理、退出相关缓存或卸载前会一直保留。下载目录中的文件由您自行管理。',
            '计费 / 权益 / 订单记录会在提供服务、记账、防欺诈与合规所需的期限内保留。',
            '分析与诊断日志仅保留分析与排障所需的有限时间，随后删除或匿名化。',
            '临时转录上传仅保留至处理完成及相关支持/滥用审查所需时间，随后按后端规则删除。'
          ]
        },
        {
          title: '7. 数据安全',
          paragraphs: ['我们对传输至计费与日志服务的信息采取合理保护措施，但任何传输或存储方式都无法保证绝对安全。']
        },
        {
          title: '8. 您的选择与权利',
          list: [
            '可在未 Google 登录的情况下使用核心下载功能（受每日免费额度限制）',
            '可在扩展中退出 Google 登录以清理相关本地账号字段',
            '可在侧边栏或设置中更改清晰度 / 语言偏好',
            '可在数据面板 / 侧边栏删除本地广告库条目',
            '可卸载扩展或在 Chrome 中撤销权限以停止扩展继续收集',
            '可发送邮件至 support@tgvideodown.com，请求删除我们控制的、与计费账号相关的记录（法律要求保留的除外）'
          ]
        },
        {
          title: '9. 儿童隐私',
          paragraphs: ['本扩展不面向 13 岁以下（或您所在司法辖区要求的最低年龄）儿童。我们不会故意收集儿童的个人信息。']
        },
        {
          title: '10. 国际用户',
          paragraphs: [
            '本扩展可在全球使用。计费、分析、支付与转录处理可能发生在您所在国家/地区以外的服务器（包括 Cloudflare、Google、Anyway、阿里云及语音转写服务商）。使用本扩展即表示您理解本政策所述处理。'
          ]
        },
        {
          title: '11. 政策变更',
          paragraphs: ['我们可能不时更新本隐私政策。页面顶部的"最后更新"日期反映最近修订。变更后继续使用本扩展即视为接受更新后的政策。']
        },
        {
          title: '12. 联系我们',
          paragraphs: ['如对本隐私政策或数据处理有疑问，请联系：'],
          contactCn: true
        }
      ]
    }
  }
}
