export const RESTRICTED_VIDEO_BLOG_PATH = '/blog/download-telegram-restricted-videos'

const images = {
  hero: {
    src: '/images/blog/restricted/phone-video.jpg',
    altCn: '用手机在 Telegram 查看视频内容',
    altEn: 'Watching Telegram video content on a phone',
    credit: 'Photo on Unsplash'
  },
  docs: {
    src: '/images/blog/restricted/desk-documents.jpg',
    altCn: '桌面上的文档与学习资料',
    altEn: 'Documents and research materials on a desk',
    credit: 'Photo on Unsplash'
  },
  night: {
    src: '/images/blog/restricted/laptop-night.jpg',
    altCn: '夜间在笔记本电脑上整理媒体文件',
    altEn: 'Organizing media files on a laptop at night',
    credit: 'Photo on Unsplash'
  },
  product: {
    src: '/assets/10.png',
    altCn: 'TGVideoDown 在 Chrome 中配合 Telegram Web 保存媒体',
    altEn: 'TGVideoDown saving media from Telegram Web in Chrome',
    credit: ''
  },
  workflow: {
    src: '/assets/11.png',
    altCn: 'TGVideoDown 下载 Telegram 视频与文件的工作流',
    altEn: 'TGVideoDown workflow for Telegram videos and files',
    credit: ''
  }
}

export const restrictedVideoBlog = {
  path: RESTRICTED_VIDEO_BLOG_PATH,
  dateMachine: '2026-11-03',
  dateTextCn: '2026年11月3日',
  dateTextEn: 'November 3, 2026',
  cn: {
    eyebrow: '不可保存视频专题',
    title: '如何在 Telegram 下载不可保存的视频？图片、学术资料、频道片源一次讲清',
    intro:
      '视频右键没有「保存」、长按只有「举报」、频道写着禁止转发——这些「不可保存」场景，是 Telegram 用户搜索量最高的痛点之一。本文用可验证的流程说明：图片、学术论文 PDF、公开/已获权频道里的短视频与成人向片源，怎样在桌面 Chrome 用 TGVideoDown 落到本地。',
    seoTitle: '如何在 Telegram 下载不可保存的视频｜图片、论文、频道资源保存指南',
    seoDescription:
      'Telegram 视频显示不可保存、禁止保存怎么办？覆盖图片、学术文章 PDF、频道短视频与成人向片源等场景，用 TGVideoDown + Telegram Web 在 Chrome 本地下载。仅处理你已有权查看的内容。',
    keywords:
      'Telegram下载不可保存视频,Telegram禁止保存,Telegram视频下载,Telegram图片下载,Telegram PDF下载,学术资料下载,频道视频保存,TGVideoDown',
    imageAlt: images.hero.altCn,
    caption: '「不可保存」不等于你看不见——多数限制发生在保存入口，而不是播放权限。',
    quickTitle: '30 秒结论',
    quickText:
      '在手机或桌面客户端里找不到保存按钮时，先确认你是否已经能正常播放该内容。能播放，就打开 Chrome 登录 Telegram Web，安装 TGVideoDown，在同一会话里把视频、图片、文档导出到本地。扩展不会破解你进不去的私密频道，也不会绕过账号封禁；它解决的是「看得见但原生保存被关掉」这一类问题。',
    ctaTitle: '先装扩展，再对照场景保存',
    ctaDescription:
      '下面每个场景（图片、论文、短视频、成人向频道片源）都走同一条桌面链路：Telegram Web + TGVideoDown。装好后回来对照步骤，比来回找第三方「在线粘贴链接」站点更稳。',
    ctaSecondary: '查看主指南',
    whyTitle: '为什么会出现「不可保存」？',
    whyLead:
      'Telegram 的限制保存，本质是发送方对「转发 / 另存」入口做了策略关闭，常见于：',
    whyItems: [
      '频道或群组开启了限制保存与转发（Restricted Saving / Content Protection）',
      '单条消息被设置成禁止另存为，播放仍允许',
      '阅后即焚、限时媒体：倒计时结束前能看，原生菜单却极度克制',
      '部分客户端把「另存到相册」藏得很深，用户误以为完全不能下'
    ],
    whyClose:
      '搜索词上，大家会写成：不可保存、禁止保存、不能下载、没保存按钮、restricted content。SEO 层面这些是同一意图：用户已经获得观看权限，只差本地归档。',
    scenesTitle: '按内容类型拆开：图片、学术文章、视频、成人向片源',
    scenesIntro:
      '同一套工具，不同素材的「不可保存」体感不一样。把场景拆开写，既方便对症操作，也覆盖真实搜索意图。',
    scenes: [
      {
        title: '1. 图片与表情包：最容易被忽略的刚需',
        body: '很多频道把高清图、资讯图、截图合集设成禁止保存。手机端长按只有反应，桌面端右键也没有「另存为」。对设计参考、新闻截图、商品图档来说，丢失一张图就等于丢失证据链。做法：在 Telegram Web 打开图片消息，用 TGVideoDown 识别当前会话里的图片资源并下载。批量选图时，优先一次勾选同屏可见的多张，避免反复开关预览。'
      },
      {
        title: '2. 学术文章、讲义、PDF：不是只有「刷视频」才要下',
        body: 'Telegram 在高校社团、研读小组、公开资料库里极常用：论文预印本、课件 PPT、扫描版讲义、期刊目录 PDF。发送方常因版权提示或防二次传播，关掉原生保存。学术向用户的真实诉求是「离线精读 + 引用归档」，不是传播。能在 Web 端打开预览的文档，通常也能被扩展按文件方式导出。建议下载后立刻改成「作者-年份-题名」文件名，并只用于个人学习。'
      },
      {
        title: '3. 短视频、教程、公开频道片源',
        body: '健身跟练、软件教程、旅游 vlog、品牌样片——这类内容在频道里常开「禁止保存」，但允许无限次播放。对创作者助理、剪辑备料、个人收藏来说，本地下载是刚需。操作重点：先完整加载到可播放，再点下载；超长视频保持 Chrome 与 Telegram Web 不要中途关掉。若提示检测失败，刷新消息气泡后重试。'
      },
      {
        title: '4. 成人向、美女视频、AV 资源频道（合规边界写在前面）',
        body: '中文搜索里，「Telegram 美女视频下载」「Telegram AV 下载」「Telegram 成人影片保存」是真实且巨大的流量词。产品层面要诚实：TGVideoDown 只帮助你保存「当前账号已经能在 Telegram Web 看到」的媒体；它不是破解站，不提供片源，不绕过付费墙或私密邀请。若频道本身对你可见、视频可播，而只是关掉了保存按钮，桌面导出链路与普通视频相同。务必确认内容合法、当事人同意传播范围，且仅作个人设备留存；涉及未成年人、非自愿影像或违法内容，不要下载、不要传播。'
      }
    ],
    stepsTitle: '标准四步：从「看不见保存」到「文件落盘」',
    steps: [
      {
        number: '步骤 1',
        title: '安装 TGVideoDown',
        description:
          '从 Chrome 网上应用店安装官方扩展，并固定到工具栏。不要使用来路不明的破解包——它们才是账号风险来源。'
      },
      {
        number: '步骤 2',
        title: '用同一 Chrome 打开 Telegram Web',
        description:
          '访问官方 Telegram Web 并登录。确认目标聊天、频道或群组里，那段视频/图片/PDF 对你可见且可播放或可预览。'
      },
      {
        number: '步骤 3',
        title: '定位「不可保存」那条消息',
        description:
          '滚动到具体消息。若是阅后即焚，在倒计时内完成导出；若是限制保存频道，保持消息气泡完整加载，不要只停在列表缩略图。'
      },
      {
        number: '步骤 4',
        title: '用扩展导出到本地',
        description:
          '打开 TGVideoDown，选择视频、图片或文档，下载到电脑。需要批量时勾选多条支持的媒体，一次完成。下载目录建议按「频道名/日期」归档。'
      }
    ],
    compareTitle: '和「在线粘贴链接站」差在哪？',
    compareLead: '搜索「Telegram 视频下载」时，前几页常被粘贴 bot 链接的站点占满。对比一下更清楚：',
    compareRows: [
      {
        title: '登录与权限',
        body: '在线站通常要你交出公开链接；私密或限制保存内容往往直接失败。扩展走你已登录的 Telegram Web 会话。'
      },
      {
        title: '素材类型',
        body: '粘贴站偏视频 URL；真实需求经常是图片合集、PDF、混合媒体。扩展覆盖同会话里的多类文件。'
      },
      {
        title: '隐私',
        body: '把成人向或内部资料链接丢到陌生网站，风险远高于本地扩展。能不上传链接，就不要上传。'
      }
    ],
    faqTitle: '高频问题（按搜索原话回答）',
    faqs: [
      {
        question: 'Telegram 视频显示不可保存，是不是完全下不了？',
        answer:
          '不一定。多数情况是保存入口被关，播放仍可用。只要你在 Telegram Web 能看到并能播放，就可用 TGVideoDown 尝试本地下载。'
      },
      {
        question: '能不能下载私密频道里的 AV / 美女视频？',
        answer:
          '前提只有一个：你的账号本来就能在 Telegram Web 打开并播放。扩展不帮你混进没权限的频道，也不提供任何片源索引。'
      },
      {
        question: '图片和 PDF 也算「不可保存视频」吗？',
        answer:
          '用户口语里常把所有「下不了的东西」都叫视频问题。实际上图片、学术 PDF、课件与视频是同一类限制保存策略，下载路径类似。'
      },
      {
        question: '手机会比电脑更容易下吗？',
        answer:
          '手机端限制往往更严。桌面 Chrome + Telegram Web + 扩展，反而是「不可保存」场景里更稳定的路径。'
      },
      {
        question: '下载算不算违法？',
        answer:
          '能否下载，不等于能否任意传播。请只保存你有权访问、且法律允许个人留存的内容；尊重版权与肖像权，尤其是成人向素材。'
      }
    ],
    closeTitle: '结语：把噱头留给标题，把边界留给产品',
    closeText:
      '「如何在 TG 下载不可保存的视频」这条搜索，背后是图片归档、学术精读、教程备份，以及大量成人向频道收藏需求。TGVideoDown 的卖点不是翻墙破解，而是：你已经能看的内容，不必被一个灰掉的保存按钮卡住。装好扩展，打开 Telegram Web，按场景导出——然后把文件名整理好，比收藏夹里一百个「以后再下」可靠得多。',
    relatedTitle: '继续阅读',
    relatedLinks: [
      { title: 'Telegram 视频下载器完整指南', path: '/blog/telegram-video-downloader-guide' },
      { title: '如何下载 Telegram 视频', path: '/how-to-download-telegram-videos' },
      { title: '下载私密频道视频', path: '/download-telegram-private-channel-video' },
      { title: 'Telegram Web 下载文件', path: '/telegram-web-download-files' }
    ],
    figures: [
      { ...images.hero, alt: images.hero.altCn, caption: '手机端最常遇到「看得见、存不了」的挫败感。' },
      { ...images.docs, alt: images.docs.altCn, caption: '学术 PDF、讲义、扫描件：限制保存同样常见。' },
      { ...images.product, alt: images.product.altCn, caption: '在 Chrome 打开 Telegram Web，用 TGVideoDown 导出。' },
      { ...images.night, alt: images.night.altCn, caption: '落地到本地后，按频道与日期归档更不易丢。' },
      { ...images.workflow, alt: images.workflow.altCn, caption: '同一工作流覆盖视频、图片与文档。' }
    ]
  },
  en: {
    eyebrow: 'Restricted saving guide',
    title: 'How to download “can’t save” Telegram videos — photos, papers, channel clips',
    intro:
      'No Save button, no forward, content protection on — “restricted saving” is one of the highest-intent Telegram search themes. This guide covers photos, academic PDFs, tutorial clips, and adult channel media you can already watch, and how to export them locally with TGVideoDown in Chrome.',
    seoTitle: 'Download Restricted Telegram Videos | Photos, PDFs & Channel Media',
    seoDescription:
      'Telegram video says can’t save or restricted? Learn how to download photos, academic PDFs, channel clips, and adult media you can already view using TGVideoDown with Telegram Web in Chrome.',
    keywords:
      'download restricted telegram video, telegram can’t save video, telegram content protection, telegram photo download, telegram PDF download, TGVideoDown',
    imageAlt: images.hero.altEn,
    caption: '“Can’t save” usually blocks the export UI — not your ability to watch.',
    quickTitle: 'Quick answer',
    quickText:
      'If you can play the media, open official Telegram Web in Chrome, install TGVideoDown, and export the video, photo, or document from the same session. The extension does not break into private channels you cannot open; it helps when viewing works but native saving is disabled.',
    ctaTitle: 'Install first, then match your scenario',
    ctaDescription:
      'Photos, papers, short clips, and adult channel media share one desktop path: Telegram Web + TGVideoDown. Install from the Chrome Web Store, then follow the steps below.',
    ctaSecondary: 'Read the main guide',
    whyTitle: 'Why Telegram shows “can’t save”',
    whyLead: 'Restricted saving turns off forward / save actions while playback may still work. Common cases:',
    whyItems: [
      'Channels or groups with content protection / restricted saving enabled',
      'Single messages that forbid “save as” but still allow playback',
      'View-once or timed media that disappears after a countdown',
      'Mobile UIs that hide save actions so deeply users assume download is impossible'
    ],
    whyClose:
      'Search phrasing varies — can’t save, no download, restricted content, content protection — but the intent is the same: archive what you are already allowed to watch.',
    scenesTitle: 'By media type: photos, academic files, clips, adult channels',
    scenesIntro:
      'One workflow, different friction. Splitting scenarios matches how people actually search.',
    scenes: [
      {
        title: '1. Photos and stickers',
        body: 'News screenshots, product shots, and image packs are often protected. On mobile, long-press may do nothing useful. Open the image in Telegram Web and export with TGVideoDown. Batch nearby images when possible instead of reopening previews one by one.'
      },
      {
        title: '2. Academic articles, lecture notes, PDFs',
        body: 'Study groups share preprints, slides, and scanned notes with saving locked for redistribution reasons. Personal offline reading is the real need. If Telegram Web can preview the file, export it, rename to author-year-title, and keep it for private study only.'
      },
      {
        title: '3. Short videos, tutorials, public channel clips',
        body: 'Fitness drills, software tutorials, travel vlogs, and brand reels often disable saving while allowing endless replay. Load the message until playback works, then download. Keep Chrome and Telegram Web open for long files.'
      },
      {
        title: '4. Adult / beauty / AV channel media (boundaries first)',
        body: 'Adult Telegram download queries are huge. Be clear: TGVideoDown only exports media your account can already open in Telegram Web. It is not a pirate index and does not bypass invites or paywalls. If you can play it and only saving is blocked, use the same desktop export path. Keep only legal, consensual adult content for personal devices; never download or share anything involving minors or non-consensual material.'
      }
    ],
    stepsTitle: 'Four steps from “no save button” to a local file',
    steps: [
      {
        number: 'Step 1',
        title: 'Install TGVideoDown',
        description: 'Install from the Chrome Web Store and pin it. Avoid cracked packages — they are the real account risk.'
      },
      {
        number: 'Step 2',
        title: 'Open Telegram Web in the same Chrome',
        description:
          'Sign in to official Telegram Web and confirm the chat, channel, or group shows the media so you can play or preview it.'
      },
      {
        number: 'Step 3',
        title: 'Open the restricted message',
        description:
          'Scroll to the exact bubble. For view-once media, export before the timer ends. For protected channels, fully load the message — thumbnails alone are not enough.'
      },
      {
        number: 'Step 4',
        title: 'Export with the extension',
        description:
          'Use TGVideoDown to download the video, photo, or document. Batch-select when supported, and archive by channel name and date.'
      }
    ],
    compareTitle: 'Why not paste-link download sites?',
    compareLead: 'Those sites dominate “Telegram video download” SERPs. The tradeoffs matter:',
    compareRows: [
      {
        title: 'Login and access',
        body: 'Paste sites need a public link and fail on private or protected items. The extension uses your signed-in Telegram Web session.'
      },
      {
        title: 'Media mix',
        body: 'Paste tools skew to video URLs. Real jobs include photo sets and PDFs in the same thread.'
      },
      {
        title: 'Privacy',
        body: 'Uploading adult or internal links to a random site is riskier than a local extension.'
      }
    ],
    faqTitle: 'FAQ in search language',
    faqs: [
      {
        question: 'If Telegram says the video can’t be saved, is download impossible?',
        answer:
          'Not always. Saving can be blocked while playback still works. If Telegram Web can play it, try TGVideoDown.'
      },
      {
        question: 'Can I download adult videos from a private channel?',
        answer:
          'Only if your account can already open and play them in Telegram Web. The extension does not join channels for you or list sources.'
      },
      {
        question: 'Do photos and PDFs count as “can’t save video” problems?',
        answer:
          'Colloquially yes — people use “video” for any blocked save. Photos, academic PDFs, and clips often share the same restriction policy.'
      },
      {
        question: 'Is mobile easier than desktop?',
        answer:
          'Mobile is usually stricter. Chrome + Telegram Web + the extension is the more reliable path for restricted saving.'
      },
      {
        question: 'Is downloading illegal?',
        answer:
          'Ability to export is not a license to redistribute. Keep only what you may legally retain, and respect copyright and consent — especially for adult media.'
      }
    ],
    closeTitle: 'Closing',
    closeText:
      '“How to download restricted Telegram videos” covers photo archives, academic reading, tutorial backups, and adult channel collections. TGVideoDown’s job is not cracking access — it is removing a greyed-out save button from media you can already watch. Install, open Telegram Web, export by scenario, and name your files so they stay findable.',
    relatedTitle: 'Keep reading',
    relatedLinks: [
      { title: 'Telegram Video Downloader Guide', path: '/blog/telegram-video-downloader-guide' },
      { title: 'How to Download Telegram Videos', path: '/how-to-download-telegram-videos' },
      { title: 'Download Private Channel Video', path: '/download-telegram-private-channel-video' },
      { title: 'Telegram Web Download Files', path: '/telegram-web-download-files' }
    ],
    figures: [
      { ...images.hero, alt: images.hero.altEn, caption: 'Mobile is where “I can watch it but can’t save it” usually starts.' },
      { ...images.docs, alt: images.docs.altEn, caption: 'Academic PDFs and notes hit the same save restrictions.' },
      { ...images.product, alt: images.product.altEn, caption: 'Use Telegram Web in Chrome with TGVideoDown.' },
      { ...images.night, alt: images.night.altEn, caption: 'Archive locally by channel and date.' },
      { ...images.workflow, alt: images.workflow.altEn, caption: 'One workflow for videos, photos, and documents.' }
    ]
  }
}

export function getRestrictedVideoBlog(locale) {
  return locale === 'cn' ? restrictedVideoBlog.cn : restrictedVideoBlog.en
}
