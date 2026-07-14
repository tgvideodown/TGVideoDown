import { getBlogLocaleContent } from './blogLocaleContent.js'

export const telegramPagePaths = {
  downloader: '/telegram-video-downloader',
  extensionLanding: '/telegram-video-downloader-extension',
  chromeLanding: '/telegram-video-downloader-chrome',
  mainGuide: '/blog/telegram-video-downloader-guide',
  howTo: '/how-to-download-telegram-videos',
  extensionGuide: '/telegram-video-downloader-chrome-extension-guide',
  noLogin: '/download-telegram-files-without-login',
  privateChannel: '/download-telegram-private-channel-video',
  telegramWeb: '/telegram-web-download-files',
  comparison: '/telegram-vs-whatsapp-media-download'
}

const pageDate = '2026-07-08'

const mergeDeep = (fallback, value) => {
  if (Array.isArray(fallback)) {
    return Array.isArray(value) ? value : fallback
  }

  if (!fallback || typeof fallback !== 'object') {
    return value === undefined ? fallback : value
  }

  const result = { ...fallback }
  for (const key of Object.keys(value || {})) {
    result[key] = mergeDeep(fallback[key], value[key])
  }
  return result
}

const en = {
  common: {
    dir: 'ltr',
    updated: 'Updated',
    dateText: 'July 8, 2026',
    installStore: 'Install from Chrome Web Store',
    readGuide: 'Read guide',
    home: 'Home',
    blog: 'Blog',
    chromeWebStore: 'Chrome Web Store',
    getTgvideodown: 'Get TGVideoDown',
    stepLabels: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']
  },
  titles: {
    downloader: 'Telegram Video Downloader',
    extensionLanding: 'Telegram Video Downloader Extension',
    chromeLanding: 'Telegram Video Downloader Chrome',
    mainGuide: 'Telegram Video Downloader Guide',
    howTo: 'How to Download Telegram Videos',
    extensionGuide: 'Telegram Video Downloader Chrome Extension Guide',
    noLogin: 'Download Telegram Files Without Login',
    privateChannel: 'Download Telegram Private Channel Video',
    telegramWeb: 'Telegram Web Download Files',
    comparison: 'Telegram vs WhatsApp Media Download'
  },
  descriptions: {
    downloader:
      'TGVideoDown helps you download Telegram videos, files, images, audio, and GIFs from Telegram Web in Chrome with no TGVideoDown account login.',
    extensionLanding:
      'Use TGVideoDown as a Telegram video downloader extension for Chrome. Save Telegram videos, photos, audio, and files with single and batch downloads.',
    chromeLanding:
      'Download Telegram videos on Chrome with TGVideoDown. Install the free extension, open Telegram Web, select media, and save videos or files locally.',
    noLogin:
      'You do not need a TGVideoDown account to download Telegram files with the Chrome extension. Private Telegram files still use official Telegram Web access.'
  },
  labels: {
    extensionEyebrow: 'TGVideoDown Chrome Extension',
    tutorial: 'Tutorial',
    privateGuide: 'Private channel guide',
    webGuide: 'Telegram Web guide',
    comparison: 'Media download comparison',
    privacyGuide: 'Privacy guide',
    chromeGuide: 'Chrome extension guide',
    whyDifferent: 'Why TGVideoDown is different',
    downloadWorkflow: 'Download workflow',
    learnWorkflow: 'Learn the right download workflow',
    downloaderFaq: 'Telegram Video Downloader FAQ',
    quickAnswer: 'Quick answer',
    beforeStart: 'Before you start',
    stepWorkflow: 'Step-by-step download workflow',
    multiDownload: 'Download one video or many files',
    safetyNotes: 'Safety notes',
    nextReads: 'Next reads',
    importantAccessNote: 'Important access note',
    whenWorks: 'When this works',
    doDont: 'Do and do not',
    goodPractice: 'Good practice',
    avoid: 'Avoid',
    whyExtension: 'Why a Chrome extension is a better fit',
    fileTypes: 'File types this workflow can help with',
    howWebFiles: 'How to download Telegram Web files',
    noTgLogin: 'No TGVideoDown login required',
    largeTips: 'Tips for large files',
    relatedGuides: 'Related guides',
    shortVersion: 'Short version',
    telegramStronger: 'Where Telegram is stronger',
    whatsappSimpler: 'Where WhatsApp is simpler',
    bestWorkflow: 'Best workflow for Telegram media',
    continueReading: 'Continue reading',
    whatExtensionFor: 'What the extension is for',
    coreFeatures: 'Core features',
    recommendedSetup: 'Recommended setup',
    privacyLogin: 'Privacy and login model',
    troubleshooting: 'Troubleshooting',
    guideLinks: 'Guide links',
    clarification: 'Important clarification',
    whatCanDownload: 'What you can download',
    noLoginWorkflow: 'No-login workflow',
    whyPasswordForm: 'Why this is better than a password form',
    bestPractices: 'Best practices',
    builtForChromeUsers: 'Built for Telegram users on Chrome',
    whyExtensionLanding: 'Why use a downloader extension?',
    supportedMedia: 'Supported Telegram media',
    singleBatchDownloads: 'Single and batch downloads',
    installSteps: 'How to install and use it',
    extensionVsOnline: 'Extension workflow vs online downloader',
    chromeHowTitle: 'How to download Telegram videos on Chrome?',
    chromeUseCases: 'Where the Chrome workflow fits',
    extensionFaq: 'Telegram Video Downloader Extension FAQ',
    chromeFaq: 'Telegram Video Downloader Chrome FAQ',
    extensionPage: 'Extension page',
    chromePage: 'Chrome page'
  },
  body: {
    downloaderIntro:
      'TGVideoDown is a fast, lightweight Chrome extension for saving Telegram videos, images, audio, documents, and batch media from Telegram Web. Use it for personal backup and organization when you have permission to save the content.',
    downloaderCaption:
      'Download inside Chrome while browsing Telegram Web. This companion site explains the extension instead of parsing pasted links.',
    whyDifferent:
      'TGVideoDown is positioned as a Chrome extension for authorized local saving, not as a public paste-link downloader. You keep the workflow in Chrome and use official Telegram Web for access.',
    workflowText:
      'Use the extension where Telegram content already appears: in Telegram Web on Chrome. For private chats and channels, sign in only through the official Telegram flow.',
    guidesIntro:
      'These guides answer the practical questions users ask before installing a Telegram downloader: setup, private channels, Telegram Web files, and platform differences.',
    howToIntro:
      'This guide shows how to download Telegram videos with TGVideoDown. Install the extension, open Telegram Web, and save videos locally from Chrome.',
    howToCaption:
      'Start with the Chrome Web Store listing, then use the extension while browsing Telegram Web.',
    howToCtaTitle: 'Install TGVideoDown and follow the steps below',
    howToCtaDescription:
      'The fastest desktop workflow is simple: install the Chrome extension, open Telegram Web, then save videos or files that are visible to your account.',
    quickHowTo:
      'Install TGVideoDown in Chrome, open Telegram Web, go to the chat or channel where the video appears, and use the extension controls to save it locally.',
    beforeHowTo:
      'Use desktop Chrome and make sure the Telegram video is content you are allowed to save. For private chats or channels, sign in only through official Telegram Web.',
    multiDownload:
      'TGVideoDown supports single downloads and batch selection when supported media is detected, including videos, images, audio, documents, and other files.',
    workflowCaption: 'The downloader workflow happens in Chrome while Telegram Web is open.',
    safety:
      'Avoid websites that ask for your Telegram password or claim to unlock content you cannot access. Use TGVideoDown for personal backup and respect copyright, channel rules, and privacy.',
    privateIntro:
      'If you can already view a video inside a private Telegram channel, TGVideoDown can help you save it from Telegram Web in Chrome. This guide explains the safe workflow and the limits.',
    privateNote:
      'TGVideoDown does not bypass private channels, passwords, or Telegram permissions. Use it only for videos you can already open in official Telegram Web and are allowed to save.',
    privateCaption: 'Use the extension inside Chrome after opening the private channel in Telegram Web.',
    privateCtaTitle: 'Install TGVideoDown for Telegram Web',
    privateCtaDescription:
      'Use official Telegram Web for access, then let the Chrome extension help save videos or files that are visible to your account.',
    privateWhen:
      'This workflow is for private channels, groups, and chats where your Telegram account already has permission to view the video. Once the video appears in Telegram Web, the extension can help save supported media locally.',
    privateWhy:
      'Private Telegram media usually depends on your Telegram session. A Chrome extension workflow lets Telegram Web handle access while TGVideoDown focuses on saving visible media in your browser.',
    webIntro:
      'Telegram Web is often the easiest place to save media on desktop. This guide shows how TGVideoDown helps download videos, documents, images, audio, and other files from Chrome.',
    webCaption: 'Use TGVideoDown while browsing Telegram Web in Chrome.',
    webQuick:
      'Install TGVideoDown, open Telegram Web in Chrome, go to the chat or channel containing the file, and use the extension to save supported media locally.',
    webCtaTitle: 'Install TGVideoDown before opening Telegram Web',
    webCtaDescription:
      'The extension is built for Chrome desktop. Install it once, then use Telegram Web to save videos and files you can access.',
    webNoLogin:
      'TGVideoDown does not require an account on this website. Private Telegram files may still require official Telegram Web sign-in, but the login belongs to Telegram, not a third-party download form.',
    fileTypeDescription: 'Save supported media from Telegram Web for offline organization or personal backup.',
    comparisonIntro:
      'Telegram and WhatsApp both support media sharing, but their desktop download workflows are different. This guide compares when a Telegram downloader extension can help.',
    comparisonShort:
      'Telegram is often better for large files, public channels, saved messages, and desktop media organization. WhatsApp is simpler for personal chats. TGVideoDown focuses on the Telegram Web workflow.',
    comparisonCtaTitle: 'Use TGVideoDown with Telegram Web',
    comparisonCtaDescription:
      'If your media is in Telegram, install the Chrome extension and download videos or files from Telegram Web without using a paste-link website.',
    noLoginIntro:
      'You do not need a TGVideoDown account to download Telegram files with the Chrome extension. This guide explains what without login means and how private Telegram access works.',
    noLoginClarification:
      'Without login means no TGVideoDown website login. If a file is inside a private chat, group, or channel, Telegram may still require official Telegram Web sign-in.',
    noLoginWhatCan:
      'TGVideoDown is positioned as a Telegram Video Downloader Chrome extension, but the workflow can also support files, images, GIFs, audio, and other media available in Telegram Web.',
    noLoginCaption:
      'TGVideoDown works in Chrome while you browse Telegram Web. The companion site does not require an account.',
    noLoginWhy:
      'A third-party website that asks for your Telegram password creates unnecessary risk. A Chrome extension workflow lets Telegram Web handle access while TGVideoDown focuses on local saving.',
    extensionLandingIntro:
      'TGVideoDown is a Chrome extension built for people who want a Telegram video downloader extension without using a paste-link downloader. Install it once, open Telegram Web, and save supported videos, photos, audio, and files from Chrome.',
    extensionLandingCaption:
      'Use the extension inside Chrome while Telegram Web is open, instead of uploading links to a third-party downloader site.',
    extensionLandingWhy:
      'A browser extension fits Telegram because many videos and files are visible inside your Telegram Web session. TGVideoDown keeps access in official Telegram Web and focuses on local saving in Chrome.',
    extensionLandingBatch:
      'Use a single download when you only need one Telegram video, or use batch selection when multiple supported media items are available. This helps with channels, saved messages, and media-heavy chats.',
    extensionLandingVsOnline:
      'Online Telegram downloaders usually depend on public links or server-side parsing. TGVideoDown keeps the workflow in the browser: Telegram Web handles access, and the companion website does not process your Telegram links.',
    extensionLandingCtaTitle: 'Install the Telegram downloader extension',
    extensionLandingCtaDescription:
      'Add TGVideoDown to Chrome, open Telegram Web, and save Telegram videos or files you are allowed to keep.',
    chromeLandingIntro:
      'Use TGVideoDown when you want a Telegram video downloader for Chrome. The workflow is simple: install the free extension, open Telegram Web in Chrome, choose the media, and download it locally.',
    chromeLandingCaption:
      'The Chrome workflow starts with the extension, then continues inside Telegram Web.',
    chromeLandingHow:
      'Chrome is the best desktop place for this workflow because the extension can work while Telegram Web is already open. You do not need to paste Telegram links into this website.',
    chromeLandingUseCases:
      'This page focuses on the Chrome workflow: install the extension, open Telegram Web, select a video or file, and save it locally. For broader product features, use the extension page.',
    chromeLandingCtaTitle: 'Download Telegram videos on Chrome',
    chromeLandingCtaDescription:
      'Install TGVideoDown, open Telegram Web in Chrome, and download Telegram videos, photos, audio, or files that are visible to your account.',
    extensionIntro:
      'TGVideoDown is built for users who want a clear Chrome extension workflow for saving Telegram videos and files. This guide explains setup, scope, privacy, and troubleshooting.',
    extensionWhat:
      'TGVideoDown helps save Telegram media from Telegram Web in Chrome. It is useful for videos, images, GIFs, audio, and files you can already access. The website links to the store and does not process Telegram links on a server.',
    extensionCaption: 'TGVideoDown is intended for Chrome desktop with Telegram Web.',
    extensionPrivacy:
      'No TGVideoDown website account is required. For private Telegram content, use official Telegram Web because Telegram handles what you can access. Do not share your Telegram password with unrelated sites.',
    genericCardDescription: 'Use this as part of a safe Telegram Web workflow in Chrome.',
    telegramComparison:
      'Telegram works well for channels, large files, documents, and organized desktop saving.',
    whatsappComparison:
      'WhatsApp is simpler for everyday chats, but its web workflow is more manual and less archive-focused.',
    privateComparison:
      'Private media on either platform depends on your account session and should be handled through the official web app.',
    telegramStrengthDescription:
      'This makes Telegram a strong fit for a Chrome extension workflow when the media is visible to your account.',
    whatsappStrengthDescription:
      'This makes WhatsApp convenient for simple personal media, but it is a different tool category.'
  },
  steps: {
    install: {
      title: 'Install TGVideoDown in Chrome',
      description: 'Open the Chrome Web Store listing and add the Telegram Video Downloader extension to Chrome.'
    },
    openWeb: {
      title: 'Open Telegram Web',
      description: 'Use official Telegram Web in Chrome and sign in through Telegram if the chat or channel requires it.'
    },
    chooseMedia: {
      title: 'Choose the video or files',
      description: 'Open the Telegram video, image, audio, document, or file you want to save.'
    },
    saveLocal: {
      title: 'Save locally',
      description: 'Use TGVideoDown to download to your computer, with single or batch selection when available.'
    },
    openPrivate: {
      title: 'Open the private channel',
      description: 'Go to the private channel where you are already a member and open the video message.'
    },
    saveVisible: {
      title: 'Save the visible video',
      description: 'Use TGVideoDown to save the video locally. The extension cannot unlock unavailable content.'
    },
    openFile: {
      title: 'Open the file location',
      description: 'Go to the chat, group, or channel where the video, image, audio, or document appears.'
    },
    saveChrome: {
      title: 'Download from Chrome',
      description: 'Save the detected file locally from Chrome, using batch selection when supported.'
    },
    pinExtension: {
      title: 'Pin the extension',
      description: 'Pin TGVideoDown in Chrome if you use it often.'
    },
    browseMedia: {
      title: 'Browse to the media',
      description: 'Open the chat, channel, group, or message where the Telegram media appears.'
    },
    useControls: {
      title: 'Use the extension controls',
      description: 'Save one item or multiple supported files from the extension workflow.'
    },
    respectRules: {
      title: 'Respect permissions',
      description: 'Download only content you are allowed to keep and follow copyright, channel rules, and privacy expectations.'
    }
  },
  lists: {
    featureTitles: [
      'Faster Telegram video saving',
      'Lightweight extension',
      'Privacy-minded workflow',
      'No TGVideoDown login',
      'Batch downloads',
      'Multi-language support'
    ],
    fileTypes: ['Videos', 'Images and GIFs', 'Audio', 'Documents', 'Large media', 'Batch selections'],
    goodPractice: [
      'Save only content you have permission to keep.',
      'Use Telegram Web for all Telegram sign-in steps.',
      'Keep Chrome open until large videos finish downloading.',
      'Store sensitive files responsibly after downloading.'
    ],
    avoidItems: [
      'Do not expect the extension to unlock channels you cannot join.',
      'Do not paste private links into unknown downloader sites.',
      'Do not enter Telegram passwords outside official Telegram pages.',
      'Do not redistribute private channel videos without permission.'
    ],
    tips: [
      'Use desktop Chrome for the most reliable extension workflow.',
      'Keep Telegram Web and Chrome open until the download finishes.',
      'Use a stable connection for long videos or large archives.',
      'Check your Chrome downloads folder if you cannot find the saved file.',
      'Download only media you are allowed to save.'
    ],
    bestPractices: [
      'Use official Telegram Web for any Telegram sign-in.',
      'Do not paste private Telegram links into unknown downloader websites.',
      'Download only files you are allowed to keep.',
      'For large Telegram files, keep Chrome open and use a stable connection.',
      'Organize saved files responsibly, especially when content is private or sensitive.'
    ],
    comparisonRows: [
      { need: 'Large videos and files', telegram: 'telegramComparison', whatsapp: 'whatsappComparison' },
      { need: 'Desktop browser workflow', telegram: 'telegramComparison', whatsapp: 'whatsappComparison' },
      { need: 'Private access', telegram: 'privateComparison', whatsapp: 'privateComparison' }
    ],
    telegramStrengths: ['Channels and archives', 'Desktop-friendly saving', 'Multiple file types', 'Batch organization'],
    whatsappStrengths: ['Simple personal chats', 'Built-in manual saves', 'Phone-first behavior', 'Different tool category'],
    extensionFeatureTitles: ['Video and file saving', 'Batch workflow', 'No site-side parser', 'Clear product scope'],
    extensionLandingFeatures: [
      'Telegram video downloader extension',
      'Videos, photos, audio, and files',
      'Single and batch downloads',
      'No TGVideoDown account required',
      'Works with Telegram Web in Chrome',
      'Built for personal organization'
    ],
    chromeLandingUseCases: [
      'Download Telegram videos on desktop Chrome',
      'Save media from Telegram Web chats and channels',
      'Use one workflow for videos, photos, audio, and files',
      'Avoid paste-link downloader forms'
    ],
    troubleshooting: [
      {
        problem: 'The download button does not appear',
        solution: 'Refresh Telegram Web, confirm the extension is enabled, and open the media message again.'
      },
      {
        problem: 'A private video is not available',
        solution: 'Confirm you can view the content in official Telegram Web. The extension cannot unlock unavailable content.'
      },
      {
        problem: 'Large files are slow',
        solution: 'Use a stable connection and keep Chrome open until the file finishes downloading.'
      }
    ]
  },
  faqs: {
    downloader: [
      {
        question: 'Is TGVideoDown an online Telegram video downloader?',
        answer: 'No. TGVideoDown is a companion website for a Chrome extension. Downloads happen in Chrome while you browse Telegram Web.'
      },
      {
        question: 'Can I download Telegram videos without logging in to TGVideoDown?',
        answer: 'Yes. TGVideoDown does not require a website account. Private Telegram content may still require official Telegram Web access.'
      },
      {
        question: 'Does TGVideoDown support Telegram files besides videos?',
        answer: 'Yes. The extension is positioned for videos, images, GIFs, audio, documents, and files when those items are available in Telegram Web.'
      },
      {
        question: 'Can I use it for batch Telegram downloads?',
        answer: 'Yes. The extension supports single and batch selection for supported Telegram media workflows.'
      }
    ],
    privateChannel: [
      {
        question: 'Can I download a private Telegram channel video?',
        answer: 'Yes, if the video is visible to your Telegram account in Telegram Web and you are allowed to save it. TGVideoDown cannot bypass access restrictions.'
      },
      {
        question: 'Do I need a TGVideoDown account?',
        answer: 'No. TGVideoDown does not require a website account. Private Telegram content may still require official Telegram Web sign-in.'
      },
      {
        question: 'Can TGVideoDown unlock private channels?',
        answer: 'No. It only helps save supported media that you can already view in Telegram Web.'
      }
    ],
    telegramWeb: [
      {
        question: 'Can Telegram Web download files through TGVideoDown?',
        answer: 'Yes. TGVideoDown works in Chrome while Telegram Web is open and can help save supported videos, images, audio, documents, and files.'
      },
      {
        question: 'Do I need to log in to TGVideoDown?',
        answer: 'No. You do not need a TGVideoDown website account. Private Telegram files may still require official Telegram Web access.'
      },
      {
        question: 'Can I batch download Telegram Web files?',
        answer: 'TGVideoDown supports batch selection when supported files are detected in the Telegram Web workflow.'
      }
    ],
    comparison: [
      {
        question: 'Is Telegram better than WhatsApp for media downloads?',
        answer: 'Telegram is often better for channels, larger files, and desktop organization. WhatsApp is simpler for personal chat media.'
      },
      {
        question: 'Does TGVideoDown download WhatsApp media?',
        answer: 'No. TGVideoDown is for Telegram Web in Chrome, not WhatsApp.'
      },
      {
        question: 'Can I download private Telegram media?',
        answer: 'Only media you can already access in official Telegram Web and are allowed to save. TGVideoDown cannot bypass permissions.'
      }
    ],
    extensionLanding: [
      {
        question: 'What is a Telegram video downloader extension?',
        answer: 'It is a browser extension that helps save supported Telegram videos and media while you use Telegram Web in Chrome.'
      },
      {
        question: 'Does TGVideoDown support more than videos?',
        answer: 'Yes. TGVideoDown is built for Telegram videos, photos, audio, GIFs, documents, and other supported files visible in Telegram Web.'
      },
      {
        question: 'Can I batch download Telegram media?',
        answer: 'Yes. TGVideoDown supports single downloads and batch selection when supported Telegram media is detected.'
      },
      {
        question: 'Do I need a TGVideoDown account?',
        answer: 'No. You do not need a TGVideoDown website account. Private Telegram access still belongs to official Telegram Web.'
      }
    ],
    chromeLanding: [
      {
        question: 'How do I download Telegram videos on Chrome?',
        answer: 'Install TGVideoDown from the Chrome Web Store, open Telegram Web in Chrome, select the Telegram video, and use the extension to save it locally.'
      },
      {
        question: 'Is TGVideoDown a Chrome extension?',
        answer: 'Yes. TGVideoDown is a Chrome extension for saving Telegram media from Telegram Web.'
      },
      {
        question: 'Can it download Telegram files without login on this site?',
        answer: 'Yes. TGVideoDown does not require a website login. Private Telegram content may still require official Telegram Web sign-in.'
      },
      {
        question: 'Does the Chrome workflow support batch downloads?',
        answer: 'Yes. Batch selection is supported when multiple compatible Telegram media items are available in the extension workflow.'
      }
    ]
  }
}

const localePacks = {
  en,
  cn: {
    common: {
      updated: '更新于',
      dateText: '2026 年 7 月 8 日',
      installStore: '从 Chrome 网上应用店安装',
      readGuide: '阅读指南',
      home: '首页',
      blog: '博客',
      chromeWebStore: 'Chrome 网上应用店',
      getTgvideodown: '获取 TGVideoDown',
      stepLabels: ['步骤 1', '步骤 2', '步骤 3', '步骤 4', '步骤 5']
    },
    titles: {
      downloader: 'Telegram 视频下载器',
      mainGuide: 'Telegram 视频下载器指南',
      howTo: '如何下载 Telegram 视频',
      extensionGuide: 'Telegram 视频下载器 Chrome 扩展指南',
      noLogin: '无需登录下载 Telegram 文件',
      privateChannel: '下载 Telegram 私密频道视频',
      telegramWeb: 'Telegram Web 下载文件',
      comparison: 'Telegram 与 WhatsApp 媒体下载对比'
    },
    descriptions: {
      downloader: 'TGVideoDown 帮你在 Chrome 的 Telegram Web 中保存视频、文件、图片、音频和 GIF，无需登录 TGVideoDown 账号。',
      noLogin: '使用 Chrome 扩展下载 Telegram 文件无需 TGVideoDown 网站账号。私密文件仍通过官方 Telegram Web 访问。'
    },
    labels: {
      extensionEyebrow: 'TGVideoDown Chrome 扩展',
      tutorial: '教程',
      privateGuide: '私密频道指南',
      webGuide: 'Telegram Web 指南',
      comparison: '媒体下载对比',
      privacyGuide: '隐私指南',
      chromeGuide: 'Chrome 扩展指南',
      whyDifferent: 'TGVideoDown 有什么不同',
      downloadWorkflow: '下载流程',
      learnWorkflow: '学习正确的下载方式',
      downloaderFaq: 'Telegram 视频下载器常见问题',
      quickAnswer: '快速答案',
      beforeStart: '开始之前',
      stepWorkflow: '分步下载流程',
      multiDownload: '下载单个视频或多个文件',
      safetyNotes: '安全提醒',
      nextReads: '继续阅读',
      importantAccessNote: '重要访问说明',
      whenWorks: '什么时候可用',
      doDont: '应该做和避免做',
      goodPractice: '推荐做法',
      avoid: '避免',
      whyExtension: '为什么 Chrome 扩展更合适',
      fileTypes: '此流程可帮助保存的文件类型',
      howWebFiles: '如何下载 Telegram Web 文件',
      noTgLogin: '无需 TGVideoDown 登录',
      largeTips: '大文件下载提示',
      relatedGuides: '相关指南',
      shortVersion: '简短结论',
      telegramStronger: 'Telegram 更适合的地方',
      whatsappSimpler: 'WhatsApp 更简单的地方',
      bestWorkflow: 'Telegram 媒体的最佳流程',
      continueReading: '继续阅读',
      whatExtensionFor: '这个扩展适合做什么',
      coreFeatures: '核心功能',
      recommendedSetup: '推荐设置',
      privacyLogin: '隐私与登录方式',
      troubleshooting: '故障排查',
      guideLinks: '指南链接',
      clarification: '重要说明',
      whatCanDownload: '可以下载什么',
      noLoginWorkflow: '免网站登录流程',
      whyPasswordForm: '为什么比密码表单更好',
      bestPractices: '最佳实践'
    },
    body: {
      downloaderIntro: 'TGVideoDown 是一个轻量的 Chrome 扩展，可从 Telegram Web 保存视频、图片、音频、文档和批量媒体。请只在拥有权限时用于个人备份和整理。',
      downloaderCaption: '在浏览 Telegram Web 时直接在 Chrome 中下载。本网站只介绍扩展，不解析你粘贴的链接。',
      whyDifferent: 'TGVideoDown 的定位是授权本地保存的 Chrome 扩展，不是公开粘贴链接下载器。访问由官方 Telegram Web 完成，下载流程留在浏览器里。',
      workflowText: '在 Telegram 内容已经出现的地方使用扩展：Chrome 中的 Telegram Web。私密聊天和频道只通过官方 Telegram 流程登录。',
      guidesIntro: '这些指南回答安装下载器前最常见的问题：设置、私密频道、Telegram Web 文件以及不同平台的差异。',
      howToIntro: '本指南说明如何使用 TGVideoDown 下载 Telegram 视频。安装扩展，打开 Telegram Web，然后从 Chrome 保存视频到本地。',
      howToCaption: '先从 Chrome 网上应用店安装，然后在浏览 Telegram Web 时使用扩展。',
      howToCtaTitle: '安装 TGVideoDown 并按步骤操作',
      howToCtaDescription: '桌面端最快的流程很简单：安装 Chrome 扩展，打开 Telegram Web，然后保存你账号可见的视频或文件。',
      quickHowTo: '在 Chrome 安装 TGVideoDown，打开 Telegram Web，进入视频所在聊天或频道，再用扩展控件保存到本地。',
      beforeHowTo: '请使用桌面版 Chrome，并确认该 Telegram 视频是你有权保存的内容。私密聊天或频道只通过官方 Telegram Web 登录。',
      multiDownload: 'TGVideoDown 支持单个下载，也会在检测到支持媒体时支持批量选择，包括视频、图片、音频、文档和其他文件。',
      workflowCaption: '下载流程发生在打开 Telegram Web 的 Chrome 中。',
      safety: '避开要求 Telegram 密码或声称能解锁无权内容的网站。使用 TGVideoDown 做个人备份时，请尊重版权、频道规则和隐私。',
      privateIntro: '如果你已经能在 Telegram 私密频道中查看视频，TGVideoDown 可以帮助你从 Chrome 的 Telegram Web 保存它。本指南说明安全流程和限制。',
      privateNote: 'TGVideoDown 不会绕过私密频道、密码或 Telegram 权限。只用于你已经能在官方 Telegram Web 打开并有权保存的视频。',
      privateCaption: '先在 Telegram Web 打开私密频道，再在 Chrome 中使用扩展。',
      privateCtaTitle: '为 Telegram Web 安装 TGVideoDown',
      privateCtaDescription: '访问权限交给官方 Telegram Web，然后让 Chrome 扩展保存你账号可见的视频或文件。',
      privateWhen: '此流程适用于你的 Telegram 账号已经有权限查看视频的私密频道、群组和聊天。视频出现在 Telegram Web 后，扩展可帮助保存受支持媒体。',
      privateWhy: '私密 Telegram 媒体通常依赖你的 Telegram 会话。Chrome 扩展流程让 Telegram Web 处理访问权限，TGVideoDown 只负责保存浏览器中可见的媒体。',
      webIntro: 'Telegram Web 通常是桌面端保存媒体最方便的位置。本指南说明 TGVideoDown 如何在 Chrome 中帮助下载视频、文档、图片、音频和其他文件。',
      webCaption: '在 Chrome 浏览 Telegram Web 时使用 TGVideoDown。',
      webQuick: '安装 TGVideoDown，在 Chrome 打开 Telegram Web，进入包含文件的聊天或频道，再用扩展保存支持的媒体到本地。',
      webCtaTitle: '打开 Telegram Web 前先安装 TGVideoDown',
      webCtaDescription: '扩展面向桌面 Chrome。安装一次后，就可以在 Telegram Web 中保存你可访问的视频和文件。',
      webNoLogin: 'TGVideoDown 不需要本站账号。私密 Telegram 文件仍可能需要官方 Telegram Web 登录，但登录属于 Telegram，不属于第三方下载表单。',
      fileTypeDescription: '从 Telegram Web 保存支持的媒体，用于离线整理或个人备份。',
      comparisonIntro: 'Telegram 和 WhatsApp 都支持媒体分享，但桌面端下载方式不同。本指南比较什么时候 Telegram 下载器扩展更有用。',
      comparisonShort: 'Telegram 通常更适合大文件、公开频道、收藏消息和桌面媒体整理。WhatsApp 更适合个人聊天。TGVideoDown 专注 Telegram Web 流程。',
      comparisonCtaTitle: '配合 Telegram Web 使用 TGVideoDown',
      comparisonCtaDescription: '如果媒体在 Telegram 中，安装 Chrome 扩展并从 Telegram Web 下载视频或文件，无需使用粘贴链接网站。',
      noLoginIntro: '使用 Chrome 扩展下载 Telegram 文件不需要 TGVideoDown 账号。本指南解释免登录的含义，以及私密 Telegram 访问如何工作。',
      noLoginClarification: '免登录指无需 TGVideoDown 网站登录。如果文件在私密聊天、群组或频道中，Telegram 仍可能要求通过官方 Telegram Web 登录。',
      noLoginWhatCan: 'TGVideoDown 是 Telegram 视频下载器 Chrome 扩展，同时也可支持 Telegram Web 中可用的文件、图片、GIF、音频和其他媒体。',
      noLoginCaption: 'TGVideoDown 在你浏览 Telegram Web 时在 Chrome 中工作。说明网站不要求账号。',
      noLoginWhy: '要求 Telegram 密码的第三方网站会带来不必要风险。Chrome 扩展流程让 Telegram Web 处理访问，TGVideoDown 专注本地保存。',
      extensionIntro: 'TGVideoDown 适合需要清晰 Chrome 扩展流程来保存 Telegram 视频和文件的用户。本指南说明设置、范围、隐私和排查。',
      extensionWhat: 'TGVideoDown 可从 Chrome 的 Telegram Web 保存媒体，适用于你已经能访问的视频、图片、GIF、音频和文件。网站只链接到商店，不在服务器处理 Telegram 链接。',
      extensionCaption: 'TGVideoDown 面向桌面 Chrome 和 Telegram Web。',
      extensionPrivacy: '无需 TGVideoDown 网站账号。私密 Telegram 内容请使用官方 Telegram Web，因为访问权限由 Telegram 判断。不要把 Telegram 密码交给无关网站。',
      genericCardDescription: '把它作为 Chrome 中安全 Telegram Web 流程的一部分使用。',
      telegramComparison: 'Telegram 适合频道、大文件、文档和有组织的桌面保存。',
      whatsappComparison: 'WhatsApp 更适合日常聊天，但网页流程更偏手动保存，不适合归档式下载。',
      privateComparison: '两个平台的私密媒体都依赖账号会话，应通过官方网页应用处理。',
      telegramStrengthDescription: '当媒体对你的账号可见时，这让 Telegram 很适合 Chrome 扩展流程。',
      whatsappStrengthDescription: '这让 WhatsApp 适合简单个人媒体，但它属于不同的工具场景。'
    },
    steps: {
      install: { title: '在 Chrome 安装 TGVideoDown', description: '打开 Chrome 网上应用店页面，把 Telegram 视频下载器扩展添加到 Chrome。' },
      openWeb: { title: '打开 Telegram Web', description: '在 Chrome 使用官方 Telegram Web；如聊天或频道需要登录，只通过 Telegram 登录。' },
      chooseMedia: { title: '选择视频或文件', description: '打开你要保存的 Telegram 视频、图片、音频、文档或文件。' },
      saveLocal: { title: '保存到本地', description: '使用 TGVideoDown 下载到电脑，支持时可单选或批量选择。' },
      openPrivate: { title: '打开私密频道', description: '进入你已经加入的私密频道，并打开视频消息。' },
      saveVisible: { title: '保存可见视频', description: '使用 TGVideoDown 保存本地视频。扩展不能解锁不可访问内容。' },
      openFile: { title: '打开文件位置', description: '进入视频、图片、音频或文档所在的聊天、群组或频道。' },
      saveChrome: { title: '从 Chrome 下载', description: '从 Chrome 保存检测到的文件；支持时可使用批量选择。' },
      pinExtension: { title: '固定扩展', description: '如果经常使用，可以把 TGVideoDown 固定在 Chrome 工具栏。' },
      browseMedia: { title: '找到媒体', description: '打开 Telegram 媒体所在的聊天、频道、群组或消息。' },
      useControls: { title: '使用扩展控件', description: '通过扩展流程保存单个项目或多个受支持文件。' },
      respectRules: { title: '尊重权限', description: '只下载你有权保存的内容，并遵守版权、频道规则和隐私预期。' }
    },
    lists: {
      featureTitles: ['更快保存 Telegram 视频', '轻量扩展', '重视隐私的流程', '无需 TGVideoDown 登录', '批量下载', '多语言支持'],
      fileTypes: ['视频', '图片和 GIF', '音频', '文档', '大媒体文件', '批量选择'],
      goodPractice: ['只保存你有权限保留的内容。', '所有 Telegram 登录都使用 Telegram Web。', '大视频下载完成前保持 Chrome 打开。', '下载后妥善保存敏感文件。'],
      avoidItems: ['不要期待扩展解锁你不能加入的频道。', '不要把私密链接粘贴到陌生下载站。', '不要在非官方 Telegram 页面输入密码。', '不要未经允许传播私密频道视频。'],
      tips: ['使用桌面 Chrome 获得最稳定的扩展流程。', '下载完成前保持 Telegram Web 和 Chrome 打开。', '长视频或大压缩包使用稳定网络。', '找不到文件时检查 Chrome 下载文件夹。', '只下载你有权保存的媒体。'],
      bestPractices: ['任何 Telegram 登录都使用官方 Telegram Web。', '不要把私密 Telegram 链接粘贴到未知下载网站。', '只下载你被允许保留的文件。', '大文件下载时保持 Chrome 打开并使用稳定网络。', '特别是私密或敏感内容，要负责任地整理保存。'],
      comparisonRows: [
        { need: '大视频和文件', telegram: 'telegramComparison', whatsapp: 'whatsappComparison' },
        { need: '桌面浏览器流程', telegram: 'telegramComparison', whatsapp: 'whatsappComparison' },
        { need: '私密访问', telegram: 'privateComparison', whatsapp: 'privateComparison' }
      ],
      telegramStrengths: ['频道和归档', '适合桌面保存', '多种文件类型', '批量整理'],
      whatsappStrengths: ['简单个人聊天', '内置手动保存', '手机优先习惯', '不同工具类别'],
      extensionFeatureTitles: ['视频和文件保存', '批量流程', '无网站端解析器', '清晰的产品边界'],
      troubleshooting: [
        { problem: '下载按钮没有出现', solution: '刷新 Telegram Web，确认扩展已启用，并重新打开媒体消息。' },
        { problem: '私密视频不可用', solution: '确认你能在官方 Telegram Web 查看该内容。扩展不能解锁不可访问内容。' },
        { problem: '大文件很慢', solution: '使用稳定网络，并在文件下载完成前保持 Chrome 打开。' }
      ]
    },
    faqs: {
      downloader: [
        { question: 'TGVideoDown 是在线 Telegram 视频下载器吗？', answer: '不是。TGVideoDown 是 Chrome 扩展的说明网站。下载发生在你浏览 Telegram Web 的 Chrome 中。' },
        { question: '不登录 TGVideoDown 可以下载 Telegram 视频吗？', answer: '可以。TGVideoDown 不需要网站账号。私密 Telegram 内容仍可能需要官方 Telegram Web 访问。' },
        { question: '除了视频，还支持 Telegram 文件吗？', answer: '支持。扩展面向视频、图片、GIF、音频、文档和 Telegram Web 中可用的文件。' },
        { question: '可以批量下载 Telegram 媒体吗？', answer: '可以。扩展支持受支持 Telegram 媒体流程中的单个和批量选择。' }
      ],
      privateChannel: [
        { question: '可以下载 Telegram 私密频道视频吗？', answer: '可以，前提是视频对你的 Telegram 账号在 Telegram Web 中可见，并且你有权保存。TGVideoDown 不能绕过访问限制。' },
        { question: '需要 TGVideoDown 账号吗？', answer: '不需要。TGVideoDown 不要求网站账号。私密 Telegram 内容仍可能需要官方 Telegram Web 登录。' },
        { question: 'TGVideoDown 能解锁私密频道吗？', answer: '不能。它只能帮助保存你已经能在 Telegram Web 查看且受支持的媒体。' }
      ],
      telegramWeb: [
        { question: 'Telegram Web 可以通过 TGVideoDown 下载文件吗？', answer: '可以。TGVideoDown 在 Telegram Web 打开时在 Chrome 中工作，可帮助保存支持的视频、图片、音频、文档和文件。' },
        { question: '需要登录 TGVideoDown 吗？', answer: '不需要 TGVideoDown 网站账号。私密 Telegram 文件仍可能需要官方 Telegram Web 访问。' },
        { question: '可以批量下载 Telegram Web 文件吗？', answer: '当 Telegram Web 流程检测到受支持文件时，TGVideoDown 支持批量选择。' }
      ],
      comparison: [
        { question: 'Telegram 比 WhatsApp 更适合媒体下载吗？', answer: '对于频道、大文件和桌面整理，Telegram 通常更适合。WhatsApp 对个人聊天媒体更简单。' },
        { question: 'TGVideoDown 能下载 WhatsApp 媒体吗？', answer: '不能。TGVideoDown 用于 Chrome 中的 Telegram Web，不用于 WhatsApp。' },
        { question: '可以下载私密 Telegram 媒体吗？', answer: '只能下载你已经能在官方 Telegram Web 访问并被允许保存的媒体。TGVideoDown 不能绕过权限。' }
      ]
    }
  }
}

const localeAliases = {
  tw: {
    common: {
      updated: '更新於',
      dateText: '2026 年 7 月 8 日',
      installStore: '從 Chrome 線上應用程式商店安裝',
      readGuide: '閱讀指南',
      home: '首頁',
      blog: '部落格',
      chromeWebStore: 'Chrome 線上應用程式商店',
      getTgvideodown: '取得 TGVideoDown',
      stepLabels: ['步驟 1', '步驟 2', '步驟 3', '步驟 4', '步驟 5']
    },
    titles: {
      downloader: 'Telegram 影片下載器',
      mainGuide: 'Telegram 影片下載器指南',
      howTo: '如何下載 Telegram 影片',
      extensionGuide: 'Telegram 影片下載器 Chrome 擴充功能指南',
      noLogin: '免登入下載 Telegram 檔案',
      privateChannel: '下載 Telegram 私密頻道影片',
      telegramWeb: 'Telegram Web 下載檔案',
      comparison: 'Telegram 與 WhatsApp 媒體下載比較'
    }
  },
  ja: {
    common: {
      updated: '更新日',
      dateText: '2026年7月8日',
      installStore: 'Chrome ウェブストアからインストール',
      readGuide: 'ガイドを読む',
      home: 'ホーム',
      blog: 'ブログ',
      chromeWebStore: 'Chrome ウェブストア',
      getTgvideodown: 'TGVideoDown を入手',
      stepLabels: ['手順 1', '手順 2', '手順 3', '手順 4', '手順 5']
    },
    titles: {
      downloader: 'Telegram 動画ダウンローダー',
      mainGuide: 'Telegram 動画ダウンローダーガイド',
      howTo: 'Telegram 動画をダウンロードする方法',
      extensionGuide: 'Telegram 動画ダウンローダー Chrome 拡張機能ガイド',
      noLogin: 'ログインなしで Telegram ファイルをダウンロード',
      privateChannel: 'Telegram 非公開チャンネル動画をダウンロード',
      telegramWeb: 'Telegram Web でファイルをダウンロード',
      comparison: 'Telegram と WhatsApp のメディアダウンロード比較'
    },
    labels: {
      tutorial: 'チュートリアル',
      privateGuide: '非公開チャンネルガイド',
      webGuide: 'Telegram Web ガイド',
      comparison: 'メディアダウンロード比較',
      privacyGuide: 'プライバシーガイド',
      chromeGuide: 'Chrome 拡張機能ガイド',
      quickAnswer: 'クイック回答',
      beforeStart: '始める前に',
      stepWorkflow: 'ステップ別のダウンロード手順',
      safetyNotes: '安全メモ',
      relatedGuides: '関連ガイド',
      continueReading: '続きを読む',
      troubleshooting: 'トラブルシューティング'
    }
  },
  ko: {
    common: {
      updated: '업데이트',
      dateText: '2026년 7월 8일',
      installStore: 'Chrome 웹 스토어에서 설치',
      readGuide: '가이드 읽기',
      home: '홈',
      blog: '블로그',
      chromeWebStore: 'Chrome 웹 스토어',
      getTgvideodown: 'TGVideoDown 받기',
      stepLabels: ['1단계', '2단계', '3단계', '4단계', '5단계']
    },
    titles: {
      downloader: 'Telegram 동영상 다운로더',
      mainGuide: 'Telegram 동영상 다운로더 가이드',
      howTo: 'Telegram 동영상 다운로드 방법',
      extensionGuide: 'Telegram 동영상 다운로더 Chrome 확장 프로그램 가이드',
      noLogin: '로그인 없이 Telegram 파일 다운로드',
      privateChannel: 'Telegram 비공개 채널 동영상 다운로드',
      telegramWeb: 'Telegram Web 파일 다운로드',
      comparison: 'Telegram vs WhatsApp 미디어 다운로드 비교'
    }
  },
  es: {
    common: {
      updated: 'Actualizado',
      dateText: '8 de julio de 2026',
      installStore: 'Instalar desde Chrome Web Store',
      readGuide: 'Leer guía',
      home: 'Inicio',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Obtener TGVideoDown',
      stepLabels: ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5']
    },
    titles: {
      downloader: 'Descargador de videos de Telegram',
      mainGuide: 'Guía del descargador de videos de Telegram',
      howTo: 'Cómo descargar videos de Telegram',
      extensionGuide: 'Guía de la extensión Chrome para descargar videos de Telegram',
      noLogin: 'Descargar archivos de Telegram sin iniciar sesión',
      privateChannel: 'Descargar video de un canal privado de Telegram',
      telegramWeb: 'Descargar archivos desde Telegram Web',
      comparison: 'Descarga de medios en Telegram vs WhatsApp'
    }
  },
  de: {
    common: {
      updated: 'Aktualisiert',
      dateText: '8. Juli 2026',
      installStore: 'Aus dem Chrome Web Store installieren',
      readGuide: 'Anleitung lesen',
      home: 'Startseite',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'TGVideoDown holen',
      stepLabels: ['Schritt 1', 'Schritt 2', 'Schritt 3', 'Schritt 4', 'Schritt 5']
    },
    titles: {
      downloader: 'Telegram Video Downloader',
      mainGuide: 'Telegram Video Downloader Anleitung',
      howTo: 'So lädst du Telegram-Videos herunter',
      extensionGuide: 'Chrome-Erweiterung für Telegram Video Downloader',
      noLogin: 'Telegram-Dateien ohne Login herunterladen',
      privateChannel: 'Video aus privatem Telegram-Kanal herunterladen',
      telegramWeb: 'Telegram Web Dateien herunterladen',
      comparison: 'Telegram vs WhatsApp Mediendownload'
    }
  },
  fr: {
    common: {
      updated: 'Mis à jour',
      dateText: '8 juillet 2026',
      installStore: 'Installer depuis le Chrome Web Store',
      readGuide: 'Lire le guide',
      home: 'Accueil',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Obtenir TGVideoDown',
      stepLabels: ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4', 'Étape 5']
    },
    titles: {
      downloader: 'Téléchargeur de vidéos Telegram',
      mainGuide: 'Guide du téléchargeur de vidéos Telegram',
      howTo: 'Comment télécharger des vidéos Telegram',
      extensionGuide: 'Guide de l’extension Chrome Telegram Video Downloader',
      noLogin: 'Télécharger des fichiers Telegram sans connexion',
      privateChannel: 'Télécharger une vidéo de canal privé Telegram',
      telegramWeb: 'Télécharger des fichiers depuis Telegram Web',
      comparison: 'Téléchargement média Telegram vs WhatsApp'
    }
  },
  id: {
    common: {
      updated: 'Diperbarui',
      dateText: '8 Juli 2026',
      installStore: 'Instal dari Chrome Web Store',
      readGuide: 'Baca panduan',
      home: 'Beranda',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Dapatkan TGVideoDown',
      stepLabels: ['Langkah 1', 'Langkah 2', 'Langkah 3', 'Langkah 4', 'Langkah 5']
    },
    titles: {
      downloader: 'Pengunduh Video Telegram',
      mainGuide: 'Panduan Pengunduh Video Telegram',
      howTo: 'Cara Mengunduh Video Telegram',
      extensionGuide: 'Panduan Ekstensi Chrome Pengunduh Video Telegram',
      noLogin: 'Unduh File Telegram Tanpa Login',
      privateChannel: 'Unduh Video Channel Privat Telegram',
      telegramWeb: 'Unduh File Telegram Web',
      comparison: 'Unduhan Media Telegram vs WhatsApp'
    }
  },
  ar: {
    common: {
      dir: 'rtl',
      updated: 'تم التحديث',
      dateText: '8 يوليو 2026',
      installStore: 'التثبيت من سوق Chrome الإلكتروني',
      readGuide: 'قراءة الدليل',
      home: 'الرئيسية',
      blog: 'المدونة',
      chromeWebStore: 'سوق Chrome الإلكتروني',
      getTgvideodown: 'الحصول على TGVideoDown',
      stepLabels: ['الخطوة 1', 'الخطوة 2', 'الخطوة 3', 'الخطوة 4', 'الخطوة 5']
    },
    titles: {
      downloader: 'أداة تنزيل فيديو Telegram',
      mainGuide: 'دليل أداة تنزيل فيديو Telegram',
      howTo: 'كيفية تنزيل فيديوهات Telegram',
      extensionGuide: 'دليل إضافة Chrome لتنزيل فيديوهات Telegram',
      noLogin: 'تنزيل ملفات Telegram بدون تسجيل دخول',
      privateChannel: 'تنزيل فيديو من قناة Telegram خاصة',
      telegramWeb: 'تنزيل ملفات Telegram Web',
      comparison: 'تنزيل الوسائط في Telegram مقابل WhatsApp'
    }
  },
  pt: {
    common: {
      updated: 'Atualizado',
      dateText: '8 de julho de 2026',
      installStore: 'Instalar pela Chrome Web Store',
      readGuide: 'Ler guia',
      home: 'Início',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Obter TGVideoDown',
      stepLabels: ['Etapa 1', 'Etapa 2', 'Etapa 3', 'Etapa 4', 'Etapa 5']
    },
    titles: {
      downloader: 'Baixador de vídeos do Telegram',
      mainGuide: 'Guia do baixador de vídeos do Telegram',
      howTo: 'Como baixar vídeos do Telegram',
      extensionGuide: 'Guia da extensão Chrome para baixar vídeos do Telegram',
      noLogin: 'Baixar arquivos do Telegram sem login',
      privateChannel: 'Baixar vídeo de canal privado do Telegram',
      telegramWeb: 'Baixar arquivos do Telegram Web',
      comparison: 'Download de mídia no Telegram vs WhatsApp'
    }
  },
  tr: {
    common: {
      updated: 'Güncellendi',
      dateText: '8 Temmuz 2026',
      installStore: 'Chrome Web Store’dan yükle',
      readGuide: 'Kılavuzu oku',
      home: 'Ana sayfa',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'TGVideoDown’u al',
      stepLabels: ['Adım 1', 'Adım 2', 'Adım 3', 'Adım 4', 'Adım 5']
    },
    titles: {
      downloader: 'Telegram Video İndirici',
      mainGuide: 'Telegram Video İndirici Kılavuzu',
      howTo: 'Telegram Videoları Nasıl İndirilir',
      extensionGuide: 'Telegram Video İndirici Chrome Uzantısı Kılavuzu',
      noLogin: 'Telegram Dosyalarını Giriş Yapmadan İndir',
      privateChannel: 'Telegram Özel Kanal Videosu İndir',
      telegramWeb: 'Telegram Web Dosyalarını İndir',
      comparison: 'Telegram vs WhatsApp Medya İndirme'
    }
  },
  it: {
    common: {
      updated: 'Aggiornato',
      dateText: '8 luglio 2026',
      installStore: 'Installa dal Chrome Web Store',
      readGuide: 'Leggi guida',
      home: 'Home',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Ottieni TGVideoDown',
      stepLabels: ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4', 'Passo 5']
    },
    titles: {
      downloader: 'Downloader video Telegram',
      mainGuide: 'Guida al downloader video Telegram',
      howTo: 'Come scaricare video Telegram',
      extensionGuide: 'Guida estensione Chrome per downloader video Telegram',
      noLogin: 'Scaricare file Telegram senza login',
      privateChannel: 'Scaricare video da canale privato Telegram',
      telegramWeb: 'Scaricare file da Telegram Web',
      comparison: 'Download media Telegram vs WhatsApp'
    }
  },
  vi: {
    common: {
      updated: 'Cập nhật',
      dateText: '8 tháng 7, 2026',
      installStore: 'Cài từ Chrome Web Store',
      readGuide: 'Đọc hướng dẫn',
      home: 'Trang chủ',
      blog: 'Blog',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Nhận TGVideoDown',
      stepLabels: ['Bước 1', 'Bước 2', 'Bước 3', 'Bước 4', 'Bước 5']
    },
    titles: {
      downloader: 'Trình tải video Telegram',
      mainGuide: 'Hướng dẫn trình tải video Telegram',
      howTo: 'Cách tải video Telegram',
      extensionGuide: 'Hướng dẫn tiện ích Chrome tải video Telegram',
      noLogin: 'Tải file Telegram không cần đăng nhập',
      privateChannel: 'Tải video kênh riêng tư Telegram',
      telegramWeb: 'Tải file từ Telegram Web',
      comparison: 'Tải media Telegram vs WhatsApp'
    }
  },
  ru: {
    common: {
      updated: 'Обновлено',
      dateText: '8 июля 2026 г.',
      installStore: 'Установить из Chrome Web Store',
      readGuide: 'Читать руководство',
      home: 'Главная',
      blog: 'Блог',
      chromeWebStore: 'Chrome Web Store',
      getTgvideodown: 'Получить TGVideoDown',
      stepLabels: ['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Шаг 5']
    },
    titles: {
      downloader: 'Загрузчик видео Telegram',
      mainGuide: 'Руководство по загрузчику видео Telegram',
      howTo: 'Как скачать видео из Telegram',
      extensionGuide: 'Руководство по расширению Chrome для видео Telegram',
      noLogin: 'Скачать файлы Telegram без входа',
      privateChannel: 'Скачать видео из приватного канала Telegram',
      telegramWeb: 'Скачать файлы из Telegram Web',
      comparison: 'Загрузка медиа в Telegram и WhatsApp'
    }
  }
}

const nonEnglishShared = {
  descriptions: {
    downloader: 'TGVideoDown helps save Telegram videos, files, images, audio, and GIFs from Telegram Web in Chrome without a TGVideoDown website account.',
    noLogin: 'Use the Chrome extension without a TGVideoDown website login. Private Telegram files still use official Telegram Web access.'
  }
}

const titleOnlyLocales = Object.fromEntries(
  Object.entries(localeAliases).map(([locale, pack]) => [locale, mergeDeep(nonEnglishShared, pack)])
)

Object.assign(localePacks, titleOnlyLocales)

const landingTitleOverrides = {
  cn: {
    extensionLanding: 'Telegram 视频下载器扩展',
    chromeLanding: 'Telegram 视频下载器 Chrome'
  },
  tw: {
    extensionLanding: 'Telegram 影片下載器擴充功能',
    chromeLanding: 'Telegram 影片下載器 Chrome'
  },
  ja: {
    extensionLanding: 'Telegram 動画ダウンローダー拡張機能',
    chromeLanding: 'Telegram 動画ダウンローダー Chrome'
  },
  ko: {
    extensionLanding: 'Telegram 동영상 다운로더 확장 프로그램',
    chromeLanding: 'Telegram 동영상 다운로더 Chrome'
  },
  es: {
    extensionLanding: 'Extensión para descargar videos de Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  de: {
    extensionLanding: 'Telegram Video Downloader Erweiterung',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  fr: {
    extensionLanding: 'Extension de téléchargement vidéo Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  id: {
    extensionLanding: 'Ekstensi Pengunduh Video Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  ar: {
    extensionLanding: 'إضافة تنزيل فيديو Telegram',
    chromeLanding: 'تنزيل فيديو Telegram على Chrome'
  },
  pt: {
    extensionLanding: 'Extensão para baixar vídeos do Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  tr: {
    extensionLanding: 'Telegram Video İndirici Uzantısı',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  it: {
    extensionLanding: 'Estensione downloader video Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  vi: {
    extensionLanding: 'Tiện ích tải video Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  },
  ru: {
    extensionLanding: 'Расширение для скачивания видео Telegram',
    chromeLanding: 'Telegram Video Downloader Chrome'
  }
}

const useGuideDerivedCopy = (pack, blog, locale) => {
  if (locale === 'en' || locale === 'cn') {
    return pack
  }

  const guide = blog.guide
  const useCases = guide.useCases?.length ? guide.useCases : en.guide?.useCases || []
  const troubleshooting = guide.troubleshooting?.length ? guide.troubleshooting : en.lists.troubleshooting
  const faqs = guide.faqs?.length ? guide.faqs : en.faqs.downloader
  const guideSteps = guide.steps?.length ? guide.steps : en.guide?.steps || []
  const guideStep = (index, fallbackKey) => {
    const source = guideSteps[index]
    if (!source) {
      return pack.steps[fallbackKey]
    }
    return {
      title: source.title,
      description: source.description
    }
  }

  return mergeDeep(pack, {
    descriptions: {
      downloader: `${pack.titles.downloader}. ${guide.quickText}`,
      noLogin: guide.whatText
    },
    labels: {
      extensionEyebrow: guide.eyebrow,
      tutorial: guide.navHowTo,
      privateGuide: guide.navPrivate,
      webGuide: guide.navFiles,
      comparison: pack.titles.comparison,
      privacyGuide: pack.titles.noLogin,
      chromeGuide: pack.titles.extensionGuide,
      whyDifferent: guide.whyTitle,
      downloadWorkflow: guide.howTitle,
      learnWorkflow: blog.index.allTitle,
      downloaderFaq: `${pack.titles.downloader} FAQ`,
      quickAnswer: guide.quickTitle,
      beforeStart: guide.whatTitle,
      stepWorkflow: guide.howTitle,
      multiDownload: guide.useCasesTitle,
      safetyNotes: guide.whyTitle,
      nextReads: guide.relatedTitle,
      importantAccessNote: guide.whyTitle,
      whenWorks: guide.whatTitle,
      doDont: guide.whyTitle,
      goodPractice: guide.useCasesTitle,
      avoid: guide.troubleshootingTitle,
      whyExtension: guide.whyTitle,
      fileTypes: guide.navFiles,
      howWebFiles: guide.navFiles,
      noTgLogin: guide.whatTitle,
      largeTips: guide.troubleshootingTitle,
      relatedGuides: guide.relatedTitle,
      shortVersion: guide.quickTitle,
      telegramStronger: 'Telegram',
      whatsappSimpler: 'WhatsApp',
      bestWorkflow: guide.howTitle,
      continueReading: guide.relatedTitle,
      whatExtensionFor: guide.whatTitle,
      coreFeatures: guide.useCasesTitle,
      recommendedSetup: guide.howTitle,
      privacyLogin: guide.whyTitle,
      troubleshooting: guide.troubleshootingTitle,
      guideLinks: guide.guideIndexTitle,
      clarification: guide.quickTitle,
      whatCanDownload: guide.whatTitle,
      noLoginWorkflow: guide.howTitle,
      whyPasswordForm: guide.whyTitle,
      bestPractices: guide.useCasesTitle
    },
    body: {
      downloaderIntro: blog.index.intro,
      downloaderCaption: guide.caption,
      whyDifferent: guide.whyText,
      workflowText: guide.quickText,
      guidesIntro: blog.index.allIntro,
      howToIntro: guide.intro,
      howToCaption: guide.caption,
      howToCtaTitle: guide.ctaTitle,
      howToCtaDescription: guide.ctaDescription,
      quickHowTo: guide.quickText,
      beforeHowTo: guide.whatText,
      multiDownload: useCases.map((item) => `${item.title}: ${item.description}`).join(' '),
      workflowCaption: guide.caption,
      safety: guide.whyText,
      privateIntro: guide.faqs?.[2]?.answer || guide.whyText,
      privateNote: guide.faqs?.[2]?.answer || guide.whyText,
      privateCaption: guide.caption,
      privateCtaTitle: guide.ctaTitle,
      privateCtaDescription: guide.ctaDescription,
      privateWhen: guide.whatText,
      privateWhy: guide.whyText,
      webIntro: guide.whatText,
      webCaption: guide.caption,
      webQuick: guide.quickText,
      webCtaTitle: guide.ctaTitle,
      webCtaDescription: guide.ctaDescription,
      webNoLogin: guide.whatText,
      fileTypeDescription: guide.whatText,
      comparisonIntro: blog.index.articles.find((article) => article.path === telegramPagePaths.comparison)?.description || guide.whyText,
      comparisonShort: guide.whyText,
      comparisonCtaTitle: guide.ctaTitle,
      comparisonCtaDescription: guide.ctaDescription,
      noLoginIntro: guide.whatText,
      noLoginClarification: guide.whatText,
      noLoginWhatCan: guide.whatText,
      noLoginCaption: guide.caption,
      noLoginWhy: guide.whyText,
      extensionIntro: blog.index.articles.find((article) => article.path === telegramPagePaths.extensionGuide)?.description || guide.intro,
      extensionWhat: guide.whatText,
      extensionCaption: guide.caption,
      extensionPrivacy: guide.whyText,
      genericCardDescription: guide.whatText,
      telegramComparison: guide.whatText,
      whatsappComparison: guide.whyText,
      privateComparison: guide.faqs?.[2]?.answer || guide.whyText,
      telegramStrengthDescription: guide.whatText,
      whatsappStrengthDescription: guide.whyText
    },
    steps: {
      install: guideStep(0, 'install'),
      openWeb: guideStep(1, 'openWeb'),
      chooseMedia: guideStep(2, 'chooseMedia'),
      saveLocal: guideStep(3, 'saveLocal'),
      openPrivate: guideStep(2, 'openPrivate'),
      saveVisible: guideStep(3, 'saveVisible'),
      openFile: guideStep(2, 'openFile'),
      saveChrome: guideStep(3, 'saveChrome'),
      pinExtension: guideStep(0, 'pinExtension'),
      browseMedia: guideStep(2, 'browseMedia'),
      useControls: guideStep(3, 'useControls'),
      respectRules: {
        title: guide.whyTitle,
        description: guide.whyText
      }
    },
    lists: {
      featureTitles: useCases.map((item) => item.title),
      fileTypes: useCases.map((item) => item.title),
      goodPractice: useCases.map((item) => item.description),
      avoidItems: troubleshooting.map((item) => item.solution),
      tips: troubleshooting.map((item) => item.solution),
      bestPractices: useCases.map((item) => item.description),
      comparisonRows: [
        { need: guide.navFiles, telegram: 'telegramComparison', whatsapp: 'whatsappComparison' },
        { need: guide.navPrivate, telegram: 'privateComparison', whatsapp: 'privateComparison' },
        { need: guide.navHowTo, telegram: 'telegramComparison', whatsapp: 'whatsappComparison' }
      ],
      telegramStrengths: useCases.map((item) => item.title),
      whatsappStrengths: useCases.map((item) => item.title),
      extensionFeatureTitles: useCases.map((item) => item.title),
      troubleshooting
    },
    faqs: {
      downloader: faqs,
      privateChannel: faqs,
      telegramWeb: faqs,
      comparison: faqs
    }
  })
}

const useLandingDerivedCopy = (pack, blog, locale) => {
  if (locale === 'en') {
    return pack
  }

  const guide = blog.guide
  const useCases = guide.useCases?.length ? guide.useCases : en.guide?.useCases || []
  const troubleshooting = guide.troubleshooting?.length ? guide.troubleshooting : en.lists.troubleshooting
  const faqs = guide.faqs?.length ? guide.faqs : en.faqs.downloader
  const titles = landingTitleOverrides[locale] || {}
  const extensionTitle = titles.extensionLanding || `${pack.titles.downloader} Extension`
  const chromeTitle = titles.chromeLanding || `${pack.titles.downloader} Chrome`
  const listTitles = useCases.map((item) => item.title).filter(Boolean)
  const listDescriptions = useCases.map((item) => item.description).filter(Boolean)

  return mergeDeep(pack, {
    titles: {
      extensionLanding: extensionTitle,
      chromeLanding: chromeTitle
    },
    descriptions: {
      extensionLanding: guide.whatText,
      chromeLanding: guide.quickText
    },
    labels: {
      builtForChromeUsers: guide.eyebrow,
      whyExtensionLanding: guide.whyTitle,
      supportedMedia: guide.useCasesTitle,
      singleBatchDownloads: listTitles[3] || guide.useCasesTitle,
      installSteps: guide.howTitle,
      extensionVsOnline: guide.whyTitle,
      chromeHowTitle: guide.howTitle,
      chromeUseCases: guide.useCasesTitle,
      extensionFaq: `${extensionTitle} FAQ`,
      chromeFaq: `${chromeTitle} FAQ`,
      extensionPage: extensionTitle,
      chromePage: chromeTitle
    },
    body: {
      extensionLandingIntro: guide.intro,
      extensionLandingCaption: guide.caption,
      extensionLandingWhy: guide.whyText,
      extensionLandingBatch: listDescriptions.join(' '),
      extensionLandingVsOnline: guide.whyText,
      extensionLandingCtaTitle: guide.ctaTitle,
      extensionLandingCtaDescription: guide.ctaDescription,
      chromeLandingIntro: guide.quickText,
      chromeLandingCaption: guide.caption,
      chromeLandingHow: guide.quickText,
      chromeLandingUseCases: guide.whatText,
      chromeLandingCtaTitle: guide.ctaTitle,
      chromeLandingCtaDescription: guide.ctaDescription
    },
    lists: {
      extensionLandingFeatures: listTitles.length ? listTitles : pack.lists.extensionLandingFeatures,
      chromeLandingUseCases: listDescriptions.length ? listDescriptions : troubleshooting.map((item) => item.solution)
    },
    faqs: {
      extensionLanding: faqs,
      chromeLanding: faqs
    }
  })
}

const getBlogArticle = (blog, path, fallback) => {
  const article = blog.index.articles.find((item) => item.path === path)
  return {
    title: article?.title || fallback.title,
    path,
    description: article?.description || fallback.description
  }
}

const step = (pack, key, index) => ({
  number: pack.common.stepLabels[index],
  ...pack.steps[key]
})

const articleSeo = (title, description, keywords) => ({
  seoTitle: title.includes('TGVideoDown') ? title : `${title} | TGVideoDown`,
  seoDescription: description,
  ogTitle: title,
  ogDescription: description,
  keywords
})

const withCardDescription = (pack, titles, descriptionKey = 'genericCardDescription') =>
  titles.map((title) => ({
    title,
    description: pack.body[descriptionKey]
  }))

const makeComparisonRows = (pack) =>
  pack.lists.comparisonRows.map((row) => ({
    need: row.need,
    telegram: pack.body[row.telegram],
    whatsapp: pack.body[row.whatsapp]
  }))

export const getTelegramPageLocaleContent = (locale = 'en') => {
  const blog = getBlogLocaleContent(locale)
  const pack = useLandingDerivedCopy(useGuideDerivedCopy(mergeDeep(en, localePacks[locale] || {}), blog, locale), blog, locale)

  const articles = {
    downloader: {
      title: pack.titles.downloader,
      path: telegramPagePaths.downloader,
      description: pack.descriptions.downloader
    },
    extensionLanding: {
      title: pack.titles.extensionLanding,
      path: telegramPagePaths.extensionLanding,
      description: pack.descriptions.extensionLanding
    },
    chromeLanding: {
      title: pack.titles.chromeLanding,
      path: telegramPagePaths.chromeLanding,
      description: pack.descriptions.chromeLanding
    },
    mainGuide: getBlogArticle(blog, telegramPagePaths.mainGuide, {
      title: pack.titles.mainGuide,
      description: pack.body.guidesIntro
    }),
    howTo: getBlogArticle(blog, telegramPagePaths.howTo, {
      title: pack.titles.howTo,
      description: pack.body.howToIntro
    }),
    extensionGuide: getBlogArticle(blog, telegramPagePaths.extensionGuide, {
      title: pack.titles.extensionGuide,
      description: pack.body.extensionIntro
    }),
    noLogin: {
      title: pack.titles.noLogin,
      path: telegramPagePaths.noLogin,
      description: pack.descriptions.noLogin
    },
    privateChannel: getBlogArticle(blog, telegramPagePaths.privateChannel, {
      title: pack.titles.privateChannel,
      description: pack.body.privateIntro
    }),
    telegramWeb: getBlogArticle(blog, telegramPagePaths.telegramWeb, {
      title: pack.titles.telegramWeb,
      description: pack.body.webIntro
    }),
    comparison: getBlogArticle(blog, telegramPagePaths.comparison, {
      title: pack.titles.comparison,
      description: pack.body.comparisonIntro
    })
  }

  const guideArticles = [
    articles.extensionLanding,
    articles.chromeLanding,
    articles.mainGuide,
    articles.howTo,
    articles.extensionGuide,
    articles.noLogin,
    articles.privateChannel,
    articles.telegramWeb,
    articles.comparison
  ]

  return {
    common: {
      ...pack.common,
      dateMachine: pageDate
    },
    articles,
    extensionLanding: {
      path: telegramPagePaths.extensionLanding,
      eyebrow: pack.labels.builtForChromeUsers,
      title: articles.extensionLanding.title,
      intro: pack.body.extensionLandingIntro,
      imageAlt: `${articles.extensionLanding.title} workflow`,
      caption: pack.body.extensionLandingCaption,
      ctaTitle: pack.body.extensionLandingCtaTitle,
      ctaDescription: pack.body.extensionLandingCtaDescription,
      ctaSecondary: articles.chromeLanding.title,
      supportTitle: pack.labels.supportedMedia,
      supportText: pack.body.noLoginWhatCan,
      features: withCardDescription(pack, pack.lists.extensionLandingFeatures),
      mediaTypes: pack.lists.fileTypes.map((title) => ({
        title,
        description: pack.body.fileTypeDescription
      })),
      whyTitle: pack.labels.whyExtensionLanding,
      whyText: pack.body.extensionLandingWhy,
      batchTitle: pack.labels.singleBatchDownloads,
      batchText: pack.body.extensionLandingBatch,
      comparisonTitle: pack.labels.extensionVsOnline,
      comparisonText: pack.body.extensionLandingVsOnline,
      stepsTitle: pack.labels.installSteps,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'chooseMedia', 2), step(pack, 'saveLocal', 3)],
      relatedTitle: pack.labels.relatedGuides,
      relatedLinks: [articles.chromeLanding, articles.howTo, articles.noLogin, articles.telegramWeb, articles.extensionGuide],
      faqTitle: pack.labels.extensionFaq,
      faqs: pack.faqs.extensionLanding,
      seoTitle:
        locale === 'en'
          ? 'Telegram Video Downloader Extension - Chrome Media Downloader'
          : `${articles.extensionLanding.title} - TGVideoDown`,
      seoDescription:
        locale === 'en'
          ? 'TGVideoDown is a Telegram video downloader extension for Chrome. Download Telegram videos, photos, audio, and files with fast single and batch downloads.'
          : articles.extensionLanding.description,
      ogTitle:
        locale === 'en'
          ? 'Telegram Video Downloader Extension - Chrome Media Downloader'
          : `${articles.extensionLanding.title} - TGVideoDown`,
      ogDescription:
        locale === 'en'
          ? 'TGVideoDown is a Telegram video downloader extension for Chrome. Download Telegram videos, photos, audio, and files with fast single and batch downloads.'
          : articles.extensionLanding.description,
      keywords: 'telegram video downloader extension, telegram downloader extension, telegram chrome extension, TGVideoDown'
    },
    chromeLanding: {
      path: telegramPagePaths.chromeLanding,
      eyebrow: pack.labels.chromeGuide,
      title: locale === 'en' ? 'Telegram Video Downloader Chrome Extension' : articles.chromeLanding.title,
      intro: pack.body.chromeLandingIntro,
      imageAlt: `${articles.chromeLanding.title} workflow`,
      caption: pack.body.chromeLandingCaption,
      ctaTitle: pack.body.chromeLandingCtaTitle,
      ctaDescription: pack.body.chromeLandingCtaDescription,
      ctaSecondary: articles.extensionLanding.title,
      howTitle: pack.labels.chromeHowTitle,
      howText: pack.body.chromeLandingHow,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'chooseMedia', 2), step(pack, 'saveLocal', 3)],
      useCasesTitle: pack.labels.chromeUseCases,
      useCasesText: pack.body.chromeLandingUseCases,
      useCases: pack.lists.chromeLandingUseCases.map((description, index) => ({
        title: pack.lists.extensionLandingFeatures[index] || `${pack.common.stepLabels[index] || ''}`.trim() || description,
        description
      })),
      mediaTitle: pack.labels.supportedMedia,
      mediaTypes: pack.lists.fileTypes.map((title) => ({
        title,
        description: pack.body.fileTypeDescription
      })),
      relatedTitle: pack.labels.relatedGuides,
      relatedLinks: [articles.extensionLanding, articles.howTo, articles.telegramWeb, articles.noLogin, articles.extensionGuide],
      faqTitle: pack.labels.chromeFaq,
      faqs: pack.faqs.chromeLanding,
      seoTitle:
        locale === 'en' ? 'Telegram Video Downloader Chrome - Free Extension' : `${articles.chromeLanding.title} - TGVideoDown`,
      seoDescription:
        locale === 'en'
          ? 'Free Telegram video downloader Chrome extension for saving Telegram videos, photos, audio, and files from Telegram Web. Install TGVideoDown and download media locally.'
          : articles.chromeLanding.description,
      ogTitle:
        locale === 'en' ? 'Telegram Video Downloader Chrome - Free Extension' : `${articles.chromeLanding.title} - TGVideoDown`,
      ogDescription:
        locale === 'en'
          ? 'Free Telegram video downloader Chrome extension for saving Telegram videos, photos, audio, and files from Telegram Web. Install TGVideoDown and download media locally.'
          : articles.chromeLanding.description,
      keywords: 'telegram video downloader chrome, telegram video downloader chrome extension, TGVideoDown'
    },
    downloader: {
      path: telegramPagePaths.downloader,
      eyebrow: pack.labels.extensionEyebrow,
      title: articles.downloader.title,
      intro: pack.body.downloaderIntro,
      imageAlt: `${articles.downloader.title} workflow`,
      caption: pack.body.downloaderCaption,
      ctaSecondary: articles.howTo.title,
      whyTitle: pack.labels.whyDifferent,
      whyText: pack.body.whyDifferent,
      features: withCardDescription(pack, pack.lists.featureTitles),
      workflowEyebrow: pack.labels.downloadWorkflow,
      workflowTitle: articles.howTo.title,
      workflowText: pack.body.workflowText,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'saveLocal', 2)],
      guidesEyebrow: pack.labels.relatedGuides,
      guidesTitle: pack.labels.learnWorkflow,
      guidesIntro: pack.body.guidesIntro,
      guideArticles,
      faqTitle: pack.labels.downloaderFaq,
      faqs: pack.faqs.downloader,
      ...articleSeo(
        `${articles.downloader.title} - TGVideoDown`,
        pack.descriptions.downloader,
        'telegram video downloader, download telegram videos, TGVideoDown, telegram downloader chrome extension'
      )
    },
    howTo: {
      path: telegramPagePaths.howTo,
      eyebrow: pack.labels.tutorial,
      title: articles.howTo.title,
      intro: pack.body.howToIntro,
      imageAlt: pack.body.howToCtaTitle,
      caption: pack.body.howToCaption,
      ctaTitle: pack.body.howToCtaTitle,
      ctaDescription: pack.body.howToCtaDescription,
      ctaSecondary: articles.mainGuide.title,
      quickTitle: pack.labels.quickAnswer,
      quickText: pack.body.quickHowTo,
      beforeTitle: pack.labels.beforeStart,
      beforeText: pack.body.beforeHowTo,
      stepsTitle: pack.labels.stepWorkflow,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'chooseMedia', 2), step(pack, 'saveLocal', 3)],
      multiTitle: pack.labels.multiDownload,
      multiText: pack.body.multiDownload,
      workflowAlt: articles.downloader.title,
      workflowCaption: pack.body.workflowCaption,
      safetyTitle: pack.labels.safetyNotes,
      safetyText: pack.body.safety,
      relatedTitle: pack.labels.nextReads,
      relatedLinks: guideArticles,
      ...articleSeo(
        articles.howTo.title,
        pack.body.howToIntro,
        'how to download telegram videos, download telegram video, telegram video downloader, TGVideoDown'
      )
    },
    privateChannel: {
      path: telegramPagePaths.privateChannel,
      eyebrow: pack.labels.privateGuide,
      title: articles.privateChannel.title,
      intro: pack.body.privateIntro,
      noteTitle: pack.labels.importantAccessNote,
      noteText: pack.body.privateNote,
      imageAlt: articles.privateChannel.title,
      caption: pack.body.privateCaption,
      ctaEyebrow: pack.labels.privateGuide,
      ctaTitle: pack.body.privateCtaTitle,
      ctaDescription: pack.body.privateCtaDescription,
      ctaSecondary: articles.mainGuide.title,
      whenTitle: pack.labels.whenWorks,
      whenText: pack.body.privateWhen,
      stepsTitle: articles.privateChannel.title,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'openPrivate', 2), step(pack, 'saveVisible', 3)],
      doTitle: pack.labels.doDont,
      goodTitle: pack.labels.goodPractice,
      avoidTitle: pack.labels.avoid,
      goodPractice: pack.lists.goodPractice,
      avoidItems: pack.lists.avoidItems,
      whyTitle: pack.labels.whyExtension,
      whyText: pack.body.privateWhy,
      relatedTitle: pack.labels.nextReads,
      relatedLinks: [articles.howTo, articles.telegramWeb, articles.noLogin, articles.mainGuide],
      faqs: pack.faqs.privateChannel,
      ...articleSeo(
        articles.privateChannel.title,
        pack.body.privateIntro,
        'download telegram private channel video, telegram private video downloader, save telegram channel video'
      )
    },
    telegramWeb: {
      path: telegramPagePaths.telegramWeb,
      eyebrow: pack.labels.webGuide,
      title: articles.telegramWeb.title,
      intro: pack.body.webIntro,
      imageAlt: articles.telegramWeb.title,
      caption: pack.body.webCaption,
      quickTitle: pack.labels.quickAnswer,
      quickText: pack.body.webQuick,
      ctaEyebrow: pack.labels.webGuide,
      ctaTitle: pack.body.webCtaTitle,
      ctaDescription: pack.body.webCtaDescription,
      ctaSecondary: articles.extensionGuide.title,
      fileTypesTitle: pack.labels.fileTypes,
      fileTypes: pack.lists.fileTypes.map((title) => ({
        title,
        description: pack.body.fileTypeDescription
      })),
      stepsTitle: pack.labels.howWebFiles,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'openFile', 2), step(pack, 'saveChrome', 3)],
      noLoginTitle: pack.labels.noTgLogin,
      noLoginText: pack.body.webNoLogin,
      tipsTitle: pack.labels.largeTips,
      tips: pack.lists.tips,
      relatedTitle: pack.labels.relatedGuides,
      relatedLinks: [articles.mainGuide, articles.howTo, articles.privateChannel, articles.noLogin],
      faqs: pack.faqs.telegramWeb,
      ...articleSeo(
        articles.telegramWeb.title,
        pack.body.webIntro,
        'telegram web download files, download files from telegram web, telegram web video downloader'
      )
    },
    comparison: {
      path: telegramPagePaths.comparison,
      eyebrow: pack.labels.comparison,
      title: articles.comparison.title,
      intro: pack.body.comparisonIntro,
      shortTitle: pack.labels.shortVersion,
      shortText: pack.body.comparisonShort,
      columns: {
        need: locale === 'en' ? 'Need' : pack.labels.fileTypes,
        telegram: 'Telegram',
        whatsapp: 'WhatsApp'
      },
      comparisonRows: makeComparisonRows(pack),
      ctaEyebrow: 'Telegram',
      ctaTitle: pack.body.comparisonCtaTitle,
      ctaDescription: pack.body.comparisonCtaDescription,
      ctaSecondary: articles.howTo.title,
      telegramTitle: pack.labels.telegramStronger,
      telegramStrengths: withCardDescription(pack, pack.lists.telegramStrengths, 'telegramStrengthDescription'),
      whatsappTitle: pack.labels.whatsappSimpler,
      whatsappStrengths: withCardDescription(pack, pack.lists.whatsappStrengths, 'whatsappStrengthDescription'),
      workflowTitle: pack.labels.bestWorkflow,
      workflowSteps: [
        pack.steps.install.description,
        pack.steps.openWeb.description,
        pack.steps.browseMedia.description,
        pack.steps.saveLocal.description,
        pack.steps.respectRules.description
      ],
      relatedTitle: pack.labels.continueReading,
      relatedLinks: [articles.mainGuide, articles.telegramWeb, articles.privateChannel, articles.downloader],
      faqs: pack.faqs.comparison,
      ...articleSeo(
        articles.comparison.title,
        pack.body.comparisonIntro,
        'telegram vs whatsapp media download, telegram media downloader, whatsapp media download'
      )
    },
    noLogin: {
      path: telegramPagePaths.noLogin,
      eyebrow: pack.labels.privacyGuide,
      title: articles.noLogin.title,
      intro: pack.body.noLoginIntro,
      clarificationTitle: pack.labels.clarification,
      clarificationText: pack.body.noLoginClarification,
      whatTitle: pack.labels.whatCanDownload,
      whatText: pack.body.noLoginWhatCan,
      imageAlt: articles.noLogin.title,
      caption: pack.body.noLoginCaption,
      stepsTitle: pack.labels.noLoginWorkflow,
      steps: [step(pack, 'install', 0), step(pack, 'openWeb', 1), step(pack, 'openFile', 2), step(pack, 'saveChrome', 3)],
      whyTitle: pack.labels.whyPasswordForm,
      whyText: pack.body.noLoginWhy,
      practicesTitle: pack.labels.bestPractices,
      practices: pack.lists.bestPractices,
      relatedTitle: pack.labels.relatedGuides,
      relatedLinks: [articles.extensionLanding, articles.chromeLanding, articles.downloader, articles.howTo, articles.extensionGuide, articles.telegramWeb, articles.privateChannel, articles.mainGuide],
      ...articleSeo(
        articles.noLogin.title,
        pack.body.noLoginIntro,
        'download telegram files without login, telegram file downloader, telegram video downloader without login'
      )
    },
    extensionGuide: {
      path: telegramPagePaths.extensionGuide,
      eyebrow: pack.labels.chromeGuide,
      title: articles.extensionGuide.title,
      intro: pack.body.extensionIntro,
      whatTitle: pack.labels.whatExtensionFor,
      whatText: pack.body.extensionWhat,
      featuresTitle: pack.labels.coreFeatures,
      features: withCardDescription(pack, pack.lists.extensionFeatureTitles),
      setupTitle: pack.labels.recommendedSetup,
      setupSteps: [
        pack.steps.install.description,
        pack.steps.pinExtension.description,
        pack.steps.openWeb.description,
        pack.steps.browseMedia.description,
        pack.steps.useControls.description
      ],
      imageAlt: articles.extensionGuide.title,
      caption: pack.body.extensionCaption,
      privacyTitle: pack.labels.privacyLogin,
      privacyText: pack.body.extensionPrivacy,
      troubleshootingTitle: pack.labels.troubleshooting,
      troubleshooting: pack.lists.troubleshooting,
      guideLinksTitle: pack.labels.guideLinks,
      guideLinks: [articles.extensionLanding, articles.chromeLanding, articles.mainGuide, articles.downloader, articles.howTo, articles.telegramWeb, articles.privateChannel, articles.noLogin],
      ...articleSeo(
        articles.extensionGuide.title,
        pack.body.extensionIntro,
        'telegram video downloader chrome extension, telegram downloader extension, TGVideoDown guide'
      )
    }
  }
}
