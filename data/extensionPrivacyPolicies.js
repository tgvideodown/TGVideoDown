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
  }
}
