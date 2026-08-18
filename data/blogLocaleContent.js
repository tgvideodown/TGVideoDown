const articlePaths = {
  main: '/blog/telegram-video-downloader-guide',
  howTo: '/how-to-download-telegram-videos',
  privateChannel: '/download-telegram-private-channel-video',
  telegramWeb: '/telegram-web-download-files',
  comparison: '/telegram-vs-whatsapp-media-download',
  extensionGuide: '/telegram-video-downloader-chrome-extension-guide'
}

export const blogLocaleContent = {
  en: {
    common: {
      install: 'Install the extension',
      installStore: 'Install from Chrome Web Store',
      readGuide: 'Read guide',
      openArticle: 'Open article',
      updated: 'Updated',
      dateText: 'July 8, 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Telegram downloader blog',
      title: 'Practical guides for downloading Telegram videos and files',
      intro:
        'Learn how to save Telegram videos, private channel media, and Telegram Web files with a Chrome extension workflow. Each guide explains what is possible, what is safe, and when to install TGVideoDown.',
      primaryCta: 'Start with the main guide',
      allEyebrow: 'All guides',
      allTitle: 'Telegram media download topics',
      allIntro:
        'These pages cover the real questions people ask before installing a Telegram video downloader: setup, Telegram Web files, private channels, and how Telegram compares with other messaging apps.',
      ctaTitle: 'Use the guides, then install TGVideoDown',
      ctaDescription:
        'The articles explain the workflow first. When you are ready, install the Chrome extension and use it with Telegram Web for videos and files you are allowed to save.',
      ctaSecondary: 'How to download videos',
      seoTitle: 'Telegram Video Downloader Blog | TGVideoDown Guides',
      seoDescription:
        'Telegram video downloader guides for Chrome users. Learn how to download Telegram videos, private channel media, Telegram Web files, and install TGVideoDown.',
      schemaDescription: 'Practical guides for downloading Telegram videos and files with TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        {
          category: 'Start here',
          intent: 'Main guide',
          title: 'Telegram Video Downloader Guide',
          path: articlePaths.main,
          description:
            'A complete guide to installing TGVideoDown, opening Telegram Web, and saving videos or files from Chrome.'
        },
        {
          category: 'Tutorial',
          intent: 'How-to',
          title: 'How to Download Telegram Videos',
          path: articlePaths.howTo,
          description: 'Step-by-step instructions for users searching how to download Telegram video on desktop Chrome.'
        },
        {
          category: 'Private channels',
          intent: 'Private media',
          title: 'Download Telegram Private Channel Video',
          path: articlePaths.privateChannel,
          description: 'Safe guidance for saving videos from private Telegram channels you can already access.'
        },
        {
          category: 'Telegram Web',
          intent: 'Files',
          title: 'Telegram Web Download Files',
          path: articlePaths.telegramWeb,
          description: 'How to save videos, documents, images, audio, and other files while using Telegram Web in Chrome.'
        },
        {
          category: 'Comparison',
          intent: 'Telegram vs WhatsApp',
          title: 'Telegram vs WhatsApp Media Download',
          path: articlePaths.comparison,
          description: 'A practical comparison of media saving workflows, file access, and desktop browser limitations.'
        },
        {
          category: 'Setup',
          intent: 'Chrome extension',
          title: 'Telegram Video Downloader Chrome Extension Guide',
          path: articlePaths.extensionGuide,
          description: 'Install, permissions, troubleshooting, and batch download notes for the TGVideoDown Chrome extension.'
        }
      ]
    },
    guide: {
      eyebrow: 'Telegram video downloader guide',
      title: 'Telegram Video Downloader Guide',
      intro:
        'This guide explains how to download Telegram videos with TGVideoDown, why the Chrome extension workflow is different from online paste-link sites, and how to save media from Telegram Web responsibly.',
      imageAlt: 'TGVideoDown Chrome extension used as a Telegram video downloader',
      caption: 'TGVideoDown is used inside Chrome while Telegram Web is open.',
      quickTitle: 'Quick answer',
      quickText:
        'To download Telegram videos on desktop, install TGVideoDown from the Chrome Web Store, open Telegram Web in Chrome, go to the chat or channel where the video appears, and use the extension controls to save the video locally.',
      ctaTitle: 'Install the Telegram video downloader',
      ctaDescription:
        'Read the guide first, then install TGVideoDown when you are ready to save videos and files from Telegram Web in Chrome.',
      ctaSecondary: 'View step-by-step tutorial',
      whatTitle: 'What TGVideoDown does',
      whatText:
        'TGVideoDown is a Chrome extension for saving Telegram videos, images, GIFs, audio, documents, and other supported files from Telegram Web. The website is a companion site with guides and store links. It does not ask you to paste private Telegram links into a server-side downloader.',
      howTitle: 'How to download Telegram videos',
      whyTitle: 'Why not use a paste-link downloader?',
      whyText:
        'Telegram media often depends on your Telegram session, especially in private groups and channels. A random website that asks for links or passwords can create privacy risk. TGVideoDown keeps the workflow in Chrome: Telegram handles access through official Telegram Web, and the extension helps save media visible in your browser.',
      useCasesTitle: 'Common use cases',
      troubleshootingTitle: 'Troubleshooting',
      relatedTitle: 'Related guides',
      guideIndexTitle: 'Guide index',
      navHowTo: 'How to download videos',
      navPrivate: 'Private channel videos',
      navFiles: 'Telegram Web files',
      seoTitle: 'Telegram Video Downloader Guide | Download Telegram Videos',
      seoDescription:
        'Complete Telegram video downloader guide. Learn how to download Telegram videos with TGVideoDown, use Telegram Web in Chrome, save files, and install the extension.',
      schemaDescription: 'Guide to downloading Telegram videos with TGVideoDown and Telegram Web in Chrome.',
      howToName: 'How to Download Telegram Videos with TGVideoDown',
      steps: [
        {
          number: 'Step 1',
          title: 'Install TGVideoDown',
          description: 'Open the Chrome Web Store listing and add the Telegram video downloader extension to Chrome.'
        },
        {
          number: 'Step 2',
          title: 'Open Telegram Web',
          description: 'Use official Telegram Web in Chrome and sign in through Telegram if the chat or channel requires it.'
        },
        {
          number: 'Step 3',
          title: 'Find the video',
          description: 'Open the message, channel post, or group thread where the Telegram video appears.'
        },
        {
          number: 'Step 4',
          title: 'Download locally',
          description:
            'Use the extension controls to save the video, or select multiple supported media files when batch download is available.'
        }
      ],
      useCases: [
        {
          title: 'Save channel videos',
          description: 'Archive videos from channels you can access, including long videos and repeated posts you need to organize.'
        },
        {
          title: 'Download Telegram Web files',
          description: 'Save documents, images, audio, and other files shown in Telegram Web without creating a TGVideoDown account.'
        },
        {
          title: 'Personal backups',
          description: 'Keep local copies of permitted media for offline reference, research, or personal organization.'
        },
        {
          title: 'Batch media selection',
          description: 'When supported items are detected, select multiple files instead of repeating the same action one by one.'
        }
      ],
      troubleshooting: [
        {
          problem: 'The extension does not detect a video',
          solution: 'Refresh Telegram Web, reopen the media message, and confirm the TGVideoDown extension is enabled in Chrome.'
        },
        {
          problem: 'A private channel video is missing',
          solution:
            'Confirm that you can view the video in official Telegram Web. The extension cannot unlock content you cannot access.'
        },
        {
          problem: 'Downloads are slow',
          solution: 'Keep Chrome open, use a stable connection, and avoid closing Telegram Web until large files finish downloading.'
        }
      ],
      relatedGuides: [
        { title: 'How to Download Telegram Videos', path: articlePaths.howTo },
        { title: 'Download Telegram Private Channel Video', path: articlePaths.privateChannel },
        { title: 'Telegram Web Download Files', path: articlePaths.telegramWeb },
        { title: 'Telegram vs WhatsApp Media Download', path: articlePaths.comparison }
      ],
      faqs: [
        {
          question: 'Can I download Telegram videos with TGVideoDown?',
          answer:
            'Yes. Install the Chrome extension, open Telegram Web, and use TGVideoDown to save videos you are allowed to access.'
        },
        {
          question: 'Do I need to paste Telegram links on this website?',
          answer:
            'No. TGVideoDown works as a Chrome extension while you browse Telegram Web. The website provides guides and store links.'
        },
        {
          question: 'Can it download private Telegram channel videos?',
          answer:
            'It can help save videos that are visible to your Telegram account in Telegram Web. It cannot bypass Telegram access rules.'
        }
      ]
    }
  },
  cn: {
    common: {
      install: '安装扩展',
      installStore: '从 Chrome 网上应用店安装',
      readGuide: '阅读指南',
      openArticle: '打开文章',
      updated: '更新于',
      dateText: '2026 年 7 月 8 日',
      chromeWebStore: 'Chrome 网上应用店'
    },
    index: {
      eyebrow: 'Telegram 下载器博客',
      title: '下载 Telegram 视频和文件的实用指南',
      intro:
        '了解如何通过 Chrome 扩展保存 Telegram 视频、私密频道媒体和 Telegram Web 文件。每篇指南都会说明能做什么、怎样更安全，以及什么时候安装 TGVideoDown。',
      primaryCta: '从主指南开始',
      allEyebrow: '全部指南',
      allTitle: 'Telegram 媒体下载主题',
      allIntro:
        '这些页面覆盖用户在安装 Telegram 视频下载器前真正会问的问题：安装流程、Telegram Web 文件、私密频道，以及 Telegram 和其他通讯应用的下载差异。',
      ctaTitle: '先看指南，再安装 TGVideoDown',
      ctaDescription:
        '文章会先解释完整流程。准备好后，安装 Chrome 扩展，并在 Telegram Web 中保存你有权限保存的视频和文件。',
      ctaSecondary: '如何下载视频',
      seoTitle: 'Telegram 视频下载器博客 | TGVideoDown 指南',
      seoDescription:
        '面向 Chrome 用户的 Telegram 视频下载器指南。学习如何下载 Telegram 视频、私密频道媒体、Telegram Web 文件并安装 TGVideoDown。',
      schemaDescription: '使用 TGVideoDown 下载 Telegram 视频和文件的实用指南。',
      breadcrumb: '博客',
      articles: [
        {
          category: '从这里开始',
          intent: '主指南',
          title: 'Telegram 视频下载器指南',
          path: articlePaths.main,
          description: '完整说明如何安装 TGVideoDown、打开 Telegram Web，并从 Chrome 保存视频或文件。'
        },
        {
          category: '教程',
          intent: '操作步骤',
          title: '如何下载 Telegram 视频',
          path: articlePaths.howTo,
          description: '给搜索如何在桌面 Chrome 下载 Telegram 视频的用户看的分步教程。'
        },
        {
          category: '私密频道',
          intent: '私密媒体',
          title: '下载 Telegram 私密频道视频',
          path: articlePaths.privateChannel,
          description: '安全保存你已经有权限访问的 Telegram 私密频道视频。'
        },
        {
          category: 'Telegram Web',
          intent: '文件',
          title: 'Telegram Web 下载文件',
          path: articlePaths.telegramWeb,
          description: '在 Chrome 的 Telegram Web 中保存视频、文档、图片、音频和其他文件。'
        },
        {
          category: '对比',
          intent: 'Telegram vs WhatsApp',
          title: 'Telegram 与 WhatsApp 媒体下载对比',
          path: articlePaths.comparison,
          description: '对比两种通讯应用的媒体保存流程、文件访问方式和桌面浏览器限制。'
        },
        {
          category: '安装',
          intent: 'Chrome 扩展',
          title: 'Telegram 视频下载器 Chrome 扩展指南',
          path: articlePaths.extensionGuide,
          description: '说明 TGVideoDown 扩展的安装、权限、故障排查和批量下载注意事项。'
        }
      ]
    },
    guide: {
      eyebrow: 'Telegram 视频下载器指南',
      title: 'Telegram 视频下载器指南',
      intro:
        '本指南解释如何使用 TGVideoDown 下载 Telegram 视频，为什么 Chrome 扩展流程不同于在线粘贴链接网站，以及如何更负责地保存 Telegram Web 媒体。',
      imageAlt: '作为 Telegram 视频下载器使用的 TGVideoDown Chrome 扩展',
      caption: 'TGVideoDown 在打开 Telegram Web 的 Chrome 中使用。',
      quickTitle: '快速答案',
      quickText:
        '在桌面端下载 Telegram 视频：先从 Chrome 网上应用店安装 TGVideoDown，然后在 Chrome 打开 Telegram Web，进入视频所在聊天或频道，再用扩展控件保存到本地。',
      ctaTitle: '安装 Telegram 视频下载器',
      ctaDescription: '先阅读指南，准备好后再安装 TGVideoDown，用它在 Chrome 的 Telegram Web 中保存视频和文件。',
      ctaSecondary: '查看分步教程',
      whatTitle: 'TGVideoDown 能做什么',
      whatText:
        'TGVideoDown 是用于从 Telegram Web 保存视频、图片、GIF、音频、文档和其他支持文件的 Chrome 扩展。这个网站是说明和商店入口，不会要求你把私密 Telegram 链接粘贴到服务器下载器。',
      howTitle: '如何下载 Telegram 视频',
      whyTitle: '为什么不建议使用粘贴链接下载器？',
      whyText:
        'Telegram 媒体经常依赖你的 Telegram 会话，尤其是私密群组和频道。要求粘贴链接或密码的陌生网站会增加隐私风险。TGVideoDown 把流程留在 Chrome 中：Telegram Web 负责访问权限，扩展帮助保存浏览器里可见的媒体。',
      useCasesTitle: '常见使用场景',
      troubleshootingTitle: '故障排查',
      relatedTitle: '相关指南',
      guideIndexTitle: '指南目录',
      navHowTo: '如何下载视频',
      navPrivate: '私密频道视频',
      navFiles: 'Telegram Web 文件',
      seoTitle: 'Telegram 视频下载器指南 | 下载 Telegram 视频',
      seoDescription:
        '完整 Telegram 视频下载器指南。学习如何使用 TGVideoDown 下载 Telegram 视频，在 Chrome 中使用 Telegram Web 保存文件并安装扩展。',
      schemaDescription: '使用 TGVideoDown 和 Chrome Telegram Web 下载 Telegram 视频的指南。',
      howToName: '如何使用 TGVideoDown 下载 Telegram 视频',
      steps: [
        { number: '步骤 1', title: '安装 TGVideoDown', description: '打开 Chrome 网上应用店页面，将 Telegram 视频下载器扩展添加到 Chrome。' },
        { number: '步骤 2', title: '打开 Telegram Web', description: '在 Chrome 中使用官方 Telegram Web；如果聊天或频道需要登录，只通过 Telegram 官方流程登录。' },
        { number: '步骤 3', title: '找到视频', description: '打开视频所在的消息、频道帖子或群组对话。' },
        { number: '步骤 4', title: '下载到本地', description: '使用扩展控件保存视频；检测到支持媒体时，也可以选择多个文件批量下载。' }
      ],
      useCases: [
        { title: '保存频道视频', description: '归档你有权限访问的频道视频，包括长视频和需要整理的重复内容。' },
        { title: '下载 Telegram Web 文件', description: '无需 TGVideoDown 账号，也能保存 Telegram Web 中出现的文档、图片、音频和其他文件。' },
        { title: '个人备份', description: '为离线查看、研究或个人整理保存有权限保留的媒体副本。' },
        { title: '批量选择媒体', description: '检测到支持项目时，可以一次选择多个文件，减少重复操作。' }
      ],
      troubleshooting: [
        { problem: '扩展没有检测到视频', solution: '刷新 Telegram Web，重新打开媒体消息，并确认 TGVideoDown 扩展已在 Chrome 中启用。' },
        { problem: '私密频道视频不可用', solution: '确认你能在官方 Telegram Web 中查看该视频。扩展不能解锁你无权访问的内容。' },
        { problem: '下载速度较慢', solution: '保持 Chrome 打开，使用稳定网络，大文件下载完成前不要关闭 Telegram Web。' }
      ],
      relatedGuides: [
        { title: '如何下载 Telegram 视频', path: articlePaths.howTo },
        { title: '下载 Telegram 私密频道视频', path: articlePaths.privateChannel },
        { title: 'Telegram Web 下载文件', path: articlePaths.telegramWeb },
        { title: 'Telegram 与 WhatsApp 媒体下载对比', path: articlePaths.comparison }
      ],
      faqs: [
        { question: '可以用 TGVideoDown 下载 Telegram 视频吗？', answer: '可以。安装 Chrome 扩展，打开 Telegram Web，然后保存你有权限访问的视频。' },
        { question: '需要在这个网站粘贴 Telegram 链接吗？', answer: '不需要。TGVideoDown 是在你浏览 Telegram Web 时工作的 Chrome 扩展，这个网站只提供指南和商店入口。' },
        { question: '可以下载 Telegram 私密频道视频吗？', answer: '如果视频对你的 Telegram 账号在 Telegram Web 中可见，扩展可以帮助保存；它不能绕过访问限制。' }
      ]
    }
  },
  tw: {
    common: {
      install: '安裝擴充功能',
      installStore: '從 Chrome 線上應用程式商店安裝',
      readGuide: '閱讀指南',
      openArticle: '開啟文章',
      updated: '更新於',
      dateText: '2026 年 7 月 8 日',
      chromeWebStore: 'Chrome 線上應用程式商店'
    },
    index: {
      eyebrow: 'Telegram 下載器部落格',
      title: '下載 Telegram 影片與檔案的實用指南',
      intro:
        '了解如何透過 Chrome 擴充功能保存 Telegram 影片、私人頻道媒體與 Telegram Web 檔案。每篇指南都會說明可行範圍、安全做法，以及何時安裝 TGVideoDown。',
      primaryCta: '從主指南開始',
      allEyebrow: '全部指南',
      allTitle: 'Telegram 媒體下載主題',
      allIntro:
        '這些頁面涵蓋使用者在安裝 Telegram 影片下載器前真正會問的問題：設定、Telegram Web 檔案、私人頻道，以及 Telegram 與其他通訊軟體的差異。',
      ctaTitle: '先閱讀指南，再安裝 TGVideoDown',
      ctaDescription:
        '文章會先解釋流程。準備好後，安裝 Chrome 擴充功能，並在 Telegram Web 保存你有權限保存的影片和檔案。',
      ctaSecondary: '如何下載影片',
      seoTitle: 'Telegram 影片下載器部落格 | TGVideoDown 指南',
      seoDescription:
        '面向 Chrome 使用者的 Telegram 影片下載器指南。學習如何下載 Telegram 影片、私人頻道媒體、Telegram Web 檔案並安裝 TGVideoDown。',
      schemaDescription: '使用 TGVideoDown 下載 Telegram 影片和檔案的實用指南。',
      breadcrumb: '部落格',
      articles: [
        { category: '從這裡開始', intent: '主指南', title: 'Telegram 影片下載器指南', path: articlePaths.main, description: '完整說明如何安裝 TGVideoDown、開啟 Telegram Web，並從 Chrome 保存影片或檔案。' },
        { category: '教學', intent: '操作步驟', title: '如何下載 Telegram 影片', path: articlePaths.howTo, description: '給搜尋桌面 Chrome 如何下載 Telegram 影片的使用者看的分步教學。' },
        { category: '私人頻道', intent: '私人媒體', title: '下載 Telegram 私人頻道影片', path: articlePaths.privateChannel, description: '安全保存你已經有權限存取的 Telegram 私人頻道影片。' },
        { category: 'Telegram Web', intent: '檔案', title: 'Telegram Web 下載檔案', path: articlePaths.telegramWeb, description: '在 Chrome 的 Telegram Web 中保存影片、文件、圖片、音訊和其他檔案。' },
        { category: '比較', intent: 'Telegram vs WhatsApp', title: 'Telegram 與 WhatsApp 媒體下載比較', path: articlePaths.comparison, description: '比較媒體保存流程、檔案存取方式與桌面瀏覽器限制。' },
        { category: '設定', intent: 'Chrome 擴充功能', title: 'Telegram 影片下載器 Chrome 擴充功能指南', path: articlePaths.extensionGuide, description: '安裝、權限、疑難排解與批次下載注意事項。' }
      ]
    },
    guide: {}
  },
  ja: {
    common: {
      install: '拡張機能をインストール',
      installStore: 'Chrome ウェブストアからインストール',
      readGuide: 'ガイドを読む',
      openArticle: '記事を開く',
      updated: '更新日',
      dateText: '2026年7月8日',
      chromeWebStore: 'Chrome ウェブストア'
    },
    index: {
      eyebrow: 'Telegram ダウンローダーブログ',
      title: 'Telegram の動画とファイルを保存する実用ガイド',
      intro:
        'Chrome 拡張機能を使って Telegram の動画、プライベートチャンネルのメディア、Telegram Web のファイルを保存する方法を解説します。各ガイドでは、できること、安全な使い方、TGVideoDown をインストールするタイミングを説明します。',
      primaryCta: 'メインガイドから始める',
      allEyebrow: 'すべてのガイド',
      allTitle: 'Telegram メディア保存トピック',
      allIntro:
        '設定、Telegram Web のファイル、プライベートチャンネル、他のメッセージアプリとの違いなど、インストール前に知りたい疑問をまとめています。',
      ctaTitle: 'ガイドを読んでから TGVideoDown をインストール',
      ctaDescription:
        'まず記事で流れを確認し、準備できたら Chrome 拡張機能をインストールして、保存を許可された動画やファイルを Telegram Web から保存します。',
      ctaSecondary: '動画の保存方法',
      seoTitle: 'Telegram 動画ダウンローダーブログ | TGVideoDown ガイド',
      seoDescription:
        'Chrome ユーザー向けの Telegram 動画ダウンローダーガイド。Telegram 動画、プライベートチャンネルのメディア、Telegram Web ファイルの保存と TGVideoDown のインストール方法。',
      schemaDescription: 'TGVideoDown で Telegram の動画とファイルを保存する実用ガイド。',
      breadcrumb: 'ブログ',
      articles: [
        { category: '最初に読む', intent: 'メインガイド', title: 'Telegram 動画ダウンローダーガイド', path: articlePaths.main, description: 'TGVideoDown のインストール、Telegram Web の開き方、Chrome で動画やファイルを保存する流れを解説します。' },
        { category: 'チュートリアル', intent: '手順', title: 'Telegram 動画をダウンロードする方法', path: articlePaths.howTo, description: 'デスクトップ Chrome で Telegram 動画を保存したいユーザー向けの手順ガイド。' },
        { category: 'プライベートチャンネル', intent: '非公開メディア', title: 'Telegram プライベートチャンネル動画を保存', path: articlePaths.privateChannel, description: 'アクセス権のあるプライベートチャンネル動画を安全に保存するための説明。' },
        { category: 'Telegram Web', intent: 'ファイル', title: 'Telegram Web でファイルを保存', path: articlePaths.telegramWeb, description: 'Chrome の Telegram Web で動画、文書、画像、音声などを保存する方法。' },
        { category: '比較', intent: 'Telegram vs WhatsApp', title: 'Telegram と WhatsApp のメディア保存比較', path: articlePaths.comparison, description: 'メディア保存の流れ、ファイルアクセス、デスクトップブラウザでの違いを比較します。' },
        { category: '設定', intent: 'Chrome 拡張機能', title: 'Telegram 動画ダウンローダー Chrome 拡張機能ガイド', path: articlePaths.extensionGuide, description: 'インストール、権限、トラブルシューティング、バッチ保存の注意点。' }
      ]
    },
    guide: {}
  },
  ko: {
    common: {
      install: '확장 프로그램 설치',
      installStore: 'Chrome 웹 스토어에서 설치',
      readGuide: '가이드 읽기',
      openArticle: '문서 열기',
      updated: '업데이트',
      dateText: '2026년 7월 8일',
      chromeWebStore: 'Chrome 웹 스토어'
    },
    index: {
      eyebrow: 'Telegram 다운로더 블로그',
      title: 'Telegram 동영상과 파일을 저장하는 실용 가이드',
      intro:
        'Chrome 확장 프로그램으로 Telegram 동영상, 비공개 채널 미디어, Telegram Web 파일을 저장하는 방법을 알아보세요. 각 가이드는 가능한 범위, 안전한 사용법, TGVideoDown 설치 시점을 설명합니다.',
      primaryCta: '메인 가이드부터 보기',
      allEyebrow: '모든 가이드',
      allTitle: 'Telegram 미디어 다운로드 주제',
      allIntro:
        '설정, Telegram Web 파일, 비공개 채널, Telegram과 다른 메신저의 차이처럼 설치 전에 궁금한 질문을 다룹니다.',
      ctaTitle: '가이드를 읽고 TGVideoDown 설치하기',
      ctaDescription:
        '먼저 문서에서 흐름을 확인하세요. 준비되면 Chrome 확장 프로그램을 설치하고 Telegram Web에서 저장 권한이 있는 동영상과 파일을 저장합니다.',
      ctaSecondary: '동영상 다운로드 방법',
      seoTitle: 'Telegram 동영상 다운로더 블로그 | TGVideoDown 가이드',
      seoDescription:
        'Chrome 사용자를 위한 Telegram 동영상 다운로더 가이드. Telegram 동영상, 비공개 채널 미디어, Telegram Web 파일 저장과 TGVideoDown 설치 방법.',
      schemaDescription: 'TGVideoDown으로 Telegram 동영상과 파일을 저장하는 실용 가이드.',
      breadcrumb: '블로그',
      articles: [
        { category: '여기서 시작', intent: '메인 가이드', title: 'Telegram 동영상 다운로더 가이드', path: articlePaths.main, description: 'TGVideoDown 설치, Telegram Web 열기, Chrome에서 동영상이나 파일을 저장하는 전체 흐름.' },
        { category: '튜토리얼', intent: '방법', title: 'Telegram 동영상 다운로드 방법', path: articlePaths.howTo, description: '데스크톱 Chrome에서 Telegram 동영상을 저장하려는 사용자를 위한 단계별 안내.' },
        { category: '비공개 채널', intent: '비공개 미디어', title: 'Telegram 비공개 채널 동영상 다운로드', path: articlePaths.privateChannel, description: '이미 접근 권한이 있는 비공개 Telegram 채널 동영상을 안전하게 저장하는 방법.' },
        { category: 'Telegram Web', intent: '파일', title: 'Telegram Web 파일 다운로드', path: articlePaths.telegramWeb, description: 'Chrome의 Telegram Web에서 동영상, 문서, 이미지, 오디오 등을 저장하는 방법.' },
        { category: '비교', intent: 'Telegram vs WhatsApp', title: 'Telegram과 WhatsApp 미디어 다운로드 비교', path: articlePaths.comparison, description: '미디어 저장 흐름, 파일 접근 방식, 데스크톱 브라우저 제한 비교.' },
        { category: '설정', intent: 'Chrome 확장 프로그램', title: 'Telegram 동영상 다운로더 Chrome 확장 가이드', path: articlePaths.extensionGuide, description: '설치, 권한, 문제 해결, 일괄 다운로드 참고사항.' }
      ]
    },
    guide: {}
  },
  es: {
    common: {
      install: 'Instalar la extensión',
      installStore: 'Instalar desde Chrome Web Store',
      readGuide: 'Leer guía',
      openArticle: 'Abrir artículo',
      updated: 'Actualizado',
      dateText: '8 de julio de 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Blog del descargador de Telegram',
      title: 'Guías prácticas para descargar videos y archivos de Telegram',
      intro:
        'Aprende a guardar videos de Telegram, medios de canales privados y archivos de Telegram Web con una extensión de Chrome. Cada guía explica qué es posible, qué es seguro y cuándo instalar TGVideoDown.',
      primaryCta: 'Empezar con la guía principal',
      allEyebrow: 'Todas las guías',
      allTitle: 'Temas de descarga de medios de Telegram',
      allIntro:
        'Estas páginas cubren las dudas reales antes de instalar un descargador de videos de Telegram: configuración, archivos de Telegram Web, canales privados y comparación con otras apps.',
      ctaTitle: 'Lee las guías y luego instala TGVideoDown',
      ctaDescription:
        'Los artículos explican primero el flujo de trabajo. Cuando estés listo, instala la extensión de Chrome y úsala con Telegram Web para guardar videos y archivos permitidos.',
      ctaSecondary: 'Cómo descargar videos',
      seoTitle: 'Blog de Telegram Video Downloader | Guías TGVideoDown',
      seoDescription:
        'Guías de Telegram video downloader para Chrome. Aprende a descargar videos de Telegram, medios privados, archivos de Telegram Web e instalar TGVideoDown.',
      schemaDescription: 'Guías prácticas para descargar videos y archivos de Telegram con TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Empieza aquí', intent: 'Guía principal', title: 'Guía de Telegram Video Downloader', path: articlePaths.main, description: 'Guía completa para instalar TGVideoDown, abrir Telegram Web y guardar videos o archivos desde Chrome.' },
        { category: 'Tutorial', intent: 'Cómo hacerlo', title: 'Cómo descargar videos de Telegram', path: articlePaths.howTo, description: 'Instrucciones paso a paso para usuarios que buscan descargar videos de Telegram en Chrome de escritorio.' },
        { category: 'Canales privados', intent: 'Medios privados', title: 'Descargar video de un canal privado de Telegram', path: articlePaths.privateChannel, description: 'Guía segura para guardar videos de canales privados a los que ya tienes acceso.' },
        { category: 'Telegram Web', intent: 'Archivos', title: 'Descargar archivos de Telegram Web', path: articlePaths.telegramWeb, description: 'Cómo guardar videos, documentos, imágenes, audio y otros archivos en Telegram Web con Chrome.' },
        { category: 'Comparación', intent: 'Telegram vs WhatsApp', title: 'Descarga de medios: Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Comparación práctica de flujos de guardado, acceso a archivos y límites del navegador.' },
        { category: 'Configuración', intent: 'Extensión de Chrome', title: 'Guía de la extensión Chrome para Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Instalación, permisos, solución de problemas y notas sobre descarga por lotes.' }
      ]
    },
    guide: {}
  },
  de: {
    common: {
      install: 'Erweiterung installieren',
      installStore: 'Aus dem Chrome Web Store installieren',
      readGuide: 'Anleitung lesen',
      openArticle: 'Artikel öffnen',
      updated: 'Aktualisiert',
      dateText: '8. Juli 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Telegram Downloader Blog',
      title: 'Praktische Anleitungen zum Herunterladen von Telegram-Videos und Dateien',
      intro:
        'Erfahre, wie du Telegram-Videos, Medien aus privaten Kanälen und Dateien aus Telegram Web mit einer Chrome-Erweiterung speicherst. Jede Anleitung erklärt Möglichkeiten, sichere Nutzung und den richtigen Zeitpunkt zur Installation von TGVideoDown.',
      primaryCta: 'Mit der Hauptanleitung starten',
      allEyebrow: 'Alle Anleitungen',
      allTitle: 'Themen zum Telegram-Mediendownload',
      allIntro:
        'Diese Seiten beantworten typische Fragen vor der Installation eines Telegram Video Downloaders: Einrichtung, Telegram-Web-Dateien, private Kanäle und Unterschiede zu anderen Messengern.',
      ctaTitle: 'Anleitungen lesen, dann TGVideoDown installieren',
      ctaDescription:
        'Die Artikel erklären zuerst den Ablauf. Danach installierst du die Chrome-Erweiterung und nutzt sie mit Telegram Web für Videos und Dateien, die du speichern darfst.',
      ctaSecondary: 'Videos herunterladen',
      seoTitle: 'Telegram Video Downloader Blog | TGVideoDown Anleitungen',
      seoDescription:
        'Telegram Video Downloader Anleitungen für Chrome. Lerne Telegram-Videos, private Kanalmedien und Telegram-Web-Dateien zu speichern und TGVideoDown zu installieren.',
      schemaDescription: 'Praktische Anleitungen zum Speichern von Telegram-Videos und Dateien mit TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Hier starten', intent: 'Hauptanleitung', title: 'Telegram Video Downloader Anleitung', path: articlePaths.main, description: 'Komplette Anleitung zur Installation von TGVideoDown, zum Öffnen von Telegram Web und zum Speichern von Videos oder Dateien in Chrome.' },
        { category: 'Tutorial', intent: 'Schritt für Schritt', title: 'Telegram-Videos herunterladen', path: articlePaths.howTo, description: 'Schritt-für-Schritt-Anleitung für Nutzer, die Telegram-Videos auf Desktop-Chrome speichern möchten.' },
        { category: 'Private Kanäle', intent: 'Private Medien', title: 'Video aus privatem Telegram-Kanal herunterladen', path: articlePaths.privateChannel, description: 'Sichere Hinweise zum Speichern von Videos aus privaten Kanälen, auf die du bereits Zugriff hast.' },
        { category: 'Telegram Web', intent: 'Dateien', title: 'Dateien aus Telegram Web herunterladen', path: articlePaths.telegramWeb, description: 'Videos, Dokumente, Bilder, Audio und weitere Dateien in Telegram Web mit Chrome speichern.' },
        { category: 'Vergleich', intent: 'Telegram vs WhatsApp', title: 'Mediendownload: Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Praktischer Vergleich von Speicherabläufen, Dateizugriff und Desktop-Browser-Grenzen.' },
        { category: 'Einrichtung', intent: 'Chrome-Erweiterung', title: 'Chrome-Erweiterung für Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Installation, Berechtigungen, Fehlerbehebung und Hinweise zu Batch-Downloads.' }
      ]
    },
    guide: {}
  },
  fr: {
    common: {
      install: 'Installer l’extension',
      installStore: 'Installer depuis le Chrome Web Store',
      readGuide: 'Lire le guide',
      openArticle: 'Ouvrir l’article',
      updated: 'Mis à jour',
      dateText: '8 juillet 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Blog du téléchargeur Telegram',
      title: 'Guides pratiques pour télécharger des vidéos et fichiers Telegram',
      intro:
        'Découvrez comment enregistrer des vidéos Telegram, des médias de canaux privés et des fichiers Telegram Web avec une extension Chrome. Chaque guide explique ce qui est possible, ce qui est sûr et quand installer TGVideoDown.',
      primaryCta: 'Commencer par le guide principal',
      allEyebrow: 'Tous les guides',
      allTitle: 'Sujets de téléchargement des médias Telegram',
      allIntro:
        'Ces pages répondent aux vraies questions avant d’installer un téléchargeur vidéo Telegram : configuration, fichiers Telegram Web, canaux privés et comparaison avec d’autres apps.',
      ctaTitle: 'Lisez les guides, puis installez TGVideoDown',
      ctaDescription:
        'Les articles expliquent d’abord le flux de travail. Ensuite, installez l’extension Chrome et utilisez-la avec Telegram Web pour les vidéos et fichiers que vous êtes autorisé à conserver.',
      ctaSecondary: 'Comment télécharger des vidéos',
      seoTitle: 'Blog Telegram Video Downloader | Guides TGVideoDown',
      seoDescription:
        'Guides Telegram video downloader pour Chrome. Apprenez à télécharger des vidéos Telegram, médias privés, fichiers Telegram Web et installer TGVideoDown.',
      schemaDescription: 'Guides pratiques pour télécharger des vidéos et fichiers Telegram avec TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Commencer ici', intent: 'Guide principal', title: 'Guide Telegram Video Downloader', path: articlePaths.main, description: 'Guide complet pour installer TGVideoDown, ouvrir Telegram Web et enregistrer vidéos ou fichiers depuis Chrome.' },
        { category: 'Tutoriel', intent: 'Mode d’emploi', title: 'Comment télécharger des vidéos Telegram', path: articlePaths.howTo, description: 'Instructions étape par étape pour télécharger une vidéo Telegram sur Chrome desktop.' },
        { category: 'Canaux privés', intent: 'Médias privés', title: 'Télécharger une vidéo de canal privé Telegram', path: articlePaths.privateChannel, description: 'Conseils sûrs pour enregistrer les vidéos de canaux privés auxquels vous avez déjà accès.' },
        { category: 'Telegram Web', intent: 'Fichiers', title: 'Télécharger des fichiers Telegram Web', path: articlePaths.telegramWeb, description: 'Enregistrer vidéos, documents, images, audio et autres fichiers dans Telegram Web avec Chrome.' },
        { category: 'Comparaison', intent: 'Telegram vs WhatsApp', title: 'Téléchargement média : Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Comparaison pratique des flux de sauvegarde, accès aux fichiers et limites desktop.' },
        { category: 'Configuration', intent: 'Extension Chrome', title: 'Guide de l’extension Chrome Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Installation, permissions, dépannage et notes sur le téléchargement par lot.' }
      ]
    },
    guide: {}
  },
  id: {
    common: {
      install: 'Instal ekstensi',
      installStore: 'Instal dari Chrome Web Store',
      readGuide: 'Baca panduan',
      openArticle: 'Buka artikel',
      updated: 'Diperbarui',
      dateText: '8 Juli 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Blog pengunduh Telegram',
      title: 'Panduan praktis untuk mengunduh video dan file Telegram',
      intro:
        'Pelajari cara menyimpan video Telegram, media channel privat, dan file Telegram Web dengan alur ekstensi Chrome. Setiap panduan menjelaskan apa yang bisa dilakukan, apa yang aman, dan kapan memasang TGVideoDown.',
      primaryCta: 'Mulai dari panduan utama',
      allEyebrow: 'Semua panduan',
      allTitle: 'Topik unduhan media Telegram',
      allIntro:
        'Halaman ini menjawab pertanyaan sebelum memasang pengunduh video Telegram: pengaturan, file Telegram Web, channel privat, dan perbandingan dengan aplikasi pesan lain.',
      ctaTitle: 'Baca panduan, lalu instal TGVideoDown',
      ctaDescription:
        'Artikel menjelaskan alurnya terlebih dahulu. Saat siap, instal ekstensi Chrome dan gunakan dengan Telegram Web untuk menyimpan video dan file yang boleh kamu simpan.',
      ctaSecondary: 'Cara mengunduh video',
      seoTitle: 'Blog Telegram Video Downloader | Panduan TGVideoDown',
      seoDescription:
        'Panduan Telegram video downloader untuk pengguna Chrome. Pelajari cara mengunduh video Telegram, media privat, file Telegram Web, dan memasang TGVideoDown.',
      schemaDescription: 'Panduan praktis untuk mengunduh video dan file Telegram dengan TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Mulai di sini', intent: 'Panduan utama', title: 'Panduan Telegram Video Downloader', path: articlePaths.main, description: 'Panduan lengkap untuk memasang TGVideoDown, membuka Telegram Web, dan menyimpan video atau file dari Chrome.' },
        { category: 'Tutorial', intent: 'Langkah-langkah', title: 'Cara mengunduh video Telegram', path: articlePaths.howTo, description: 'Instruksi bertahap untuk pengguna yang ingin menyimpan video Telegram di Chrome desktop.' },
        { category: 'Channel privat', intent: 'Media privat', title: 'Download Video Telegram Privat', path: articlePaths.privateChannel, description: 'Panduan aman untuk download video Telegram privat dari channel dan grup yang sudah dapat kamu akses di Telegram Web.' },
        { category: 'Telegram Web', intent: 'File', title: 'Unduh file Telegram Web', path: articlePaths.telegramWeb, description: 'Cara menyimpan video, dokumen, gambar, audio, dan file lain di Telegram Web dengan Chrome.' },
        { category: 'Perbandingan', intent: 'Telegram vs WhatsApp', title: 'Unduhan media Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Perbandingan alur penyimpanan media, akses file, dan batasan browser desktop.' },
        { category: 'Pengaturan', intent: 'Ekstensi Chrome', title: 'Panduan ekstensi Chrome Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Instalasi, izin, pemecahan masalah, dan catatan unduhan batch.' }
      ]
    },
    guide: {}
  },
  ar: {
    common: {
      install: 'تثبيت الإضافة',
      installStore: 'التثبيت من متجر Chrome',
      readGuide: 'قراءة الدليل',
      openArticle: 'فتح المقال',
      updated: 'تم التحديث',
      dateText: '8 يوليو 2026',
      chromeWebStore: 'متجر Chrome'
    },
    index: {
      eyebrow: 'مدونة تنزيل Telegram',
      title: 'أدلة عملية لتنزيل فيديوهات وملفات Telegram',
      intro:
        'تعرّف على طريقة حفظ فيديوهات Telegram ووسائط القنوات الخاصة وملفات Telegram Web باستخدام إضافة Chrome. يوضح كل دليل ما يمكن فعله وما هو أكثر أمانا ومتى تثبت TGVideoDown.',
      primaryCta: 'ابدأ بالدليل الرئيسي',
      allEyebrow: 'كل الأدلة',
      allTitle: 'موضوعات تنزيل وسائط Telegram',
      allIntro:
        'تغطي هذه الصفحات الأسئلة الحقيقية قبل تثبيت أداة تنزيل فيديو Telegram: الإعداد، ملفات Telegram Web، القنوات الخاصة، والمقارنة مع تطبيقات المراسلة الأخرى.',
      ctaTitle: 'اقرأ الأدلة ثم ثبت TGVideoDown',
      ctaDescription:
        'تشرح المقالات سير العمل أولا. عندما تكون جاهزا، ثبت إضافة Chrome واستخدمها مع Telegram Web لحفظ الفيديوهات والملفات المسموح لك بحفظها.',
      ctaSecondary: 'كيفية تنزيل الفيديوهات',
      seoTitle: 'مدونة Telegram Video Downloader | أدلة TGVideoDown',
      seoDescription:
        'أدلة Telegram video downloader لمستخدمي Chrome. تعلم تنزيل فيديوهات Telegram ووسائط القنوات الخاصة وملفات Telegram Web وتثبيت TGVideoDown.',
      schemaDescription: 'أدلة عملية لتنزيل فيديوهات وملفات Telegram باستخدام TGVideoDown.',
      breadcrumb: 'المدونة',
      articles: [
        { category: 'ابدأ هنا', intent: 'الدليل الرئيسي', title: 'دليل Telegram Video Downloader', path: articlePaths.main, description: 'دليل كامل لتثبيت TGVideoDown وفتح Telegram Web وحفظ الفيديوهات أو الملفات من Chrome.' },
        { category: 'شرح', intent: 'خطوات', title: 'كيفية تنزيل فيديوهات Telegram', path: articlePaths.howTo, description: 'خطوات واضحة لمن يبحث عن حفظ فيديو Telegram على Chrome للحاسوب.' },
        { category: 'قنوات خاصة', intent: 'وسائط خاصة', title: 'تنزيل فيديو من قناة Telegram خاصة', path: articlePaths.privateChannel, description: 'إرشادات آمنة لحفظ فيديوهات القنوات الخاصة التي يمكنك الوصول إليها بالفعل.' },
        { category: 'Telegram Web', intent: 'ملفات', title: 'تنزيل ملفات Telegram Web', path: articlePaths.telegramWeb, description: 'حفظ الفيديوهات والمستندات والصور والصوت والملفات الأخرى في Telegram Web عبر Chrome.' },
        { category: 'مقارنة', intent: 'Telegram vs WhatsApp', title: 'تنزيل الوسائط: Telegram مقابل WhatsApp', path: articlePaths.comparison, description: 'مقارنة عملية بين سير حفظ الوسائط والوصول إلى الملفات وقيود متصفح سطح المكتب.' },
        { category: 'إعداد', intent: 'إضافة Chrome', title: 'دليل إضافة Chrome لأداة Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'التثبيت والأذونات وحل المشكلات وملاحظات التنزيل الجماعي.' }
      ]
    },
    guide: {}
  },
  pt: {
    common: {
      install: 'Instalar a extensão',
      installStore: 'Instalar pela Chrome Web Store',
      readGuide: 'Ler guia',
      openArticle: 'Abrir artigo',
      updated: 'Atualizado',
      dateText: '8 de julho de 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Blog do downloader do Telegram',
      title: 'Guias práticos para baixar vídeos e arquivos do Telegram',
      intro:
        'Aprenda a salvar vídeos do Telegram, mídias de canais privados e arquivos do Telegram Web com uma extensão do Chrome. Cada guia explica o que é possível, o que é seguro e quando instalar o TGVideoDown.',
      primaryCta: 'Começar pelo guia principal',
      allEyebrow: 'Todos os guias',
      allTitle: 'Tópicos de download de mídia do Telegram',
      allIntro:
        'Estas páginas cobrem perguntas reais antes de instalar um downloader de vídeo do Telegram: configuração, arquivos do Telegram Web, canais privados e comparação com outros apps.',
      ctaTitle: 'Leia os guias e depois instale o TGVideoDown',
      ctaDescription:
        'Os artigos explicam o fluxo primeiro. Quando estiver pronto, instale a extensão do Chrome e use com o Telegram Web para salvar vídeos e arquivos permitidos.',
      ctaSecondary: 'Como baixar vídeos',
      seoTitle: 'Blog Telegram Video Downloader | Guias TGVideoDown',
      seoDescription:
        'Guias de Telegram video downloader para Chrome. Aprenda a baixar vídeos do Telegram, mídias privadas, arquivos do Telegram Web e instalar o TGVideoDown.',
      schemaDescription: 'Guias práticos para baixar vídeos e arquivos do Telegram com TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Comece aqui', intent: 'Guia principal', title: 'Guia do Telegram Video Downloader', path: articlePaths.main, description: 'Guia completo para instalar o TGVideoDown, abrir o Telegram Web e salvar vídeos ou arquivos pelo Chrome.' },
        { category: 'Tutorial', intent: 'Como fazer', title: 'Como baixar vídeos do Telegram', path: articlePaths.howTo, description: 'Instruções passo a passo para salvar vídeo do Telegram no Chrome desktop.' },
        { category: 'Canais privados', intent: 'Mídia privada', title: 'Baixar vídeo de canal privado do Telegram', path: articlePaths.privateChannel, description: 'Orientação segura para salvar vídeos de canais privados aos quais você já tem acesso.' },
        { category: 'Telegram Web', intent: 'Arquivos', title: 'Baixar arquivos do Telegram Web', path: articlePaths.telegramWeb, description: 'Como salvar vídeos, documentos, imagens, áudio e outros arquivos no Telegram Web pelo Chrome.' },
        { category: 'Comparação', intent: 'Telegram vs WhatsApp', title: 'Download de mídia: Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Comparação prática de fluxos de salvamento, acesso a arquivos e limites do navegador desktop.' },
        { category: 'Configuração', intent: 'Extensão Chrome', title: 'Guia da extensão Chrome Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Instalação, permissões, solução de problemas e notas sobre download em lote.' }
      ]
    },
    guide: {}
  },
  tr: {
    common: {
      install: 'Uzantıyı yükle',
      installStore: 'Chrome Web Mağazası’ndan yükle',
      readGuide: 'Kılavuzu oku',
      openArticle: 'Makaleyi aç',
      updated: 'Güncellendi',
      dateText: '8 Temmuz 2026',
      chromeWebStore: 'Chrome Web Mağazası'
    },
    index: {
      eyebrow: 'Telegram indirici blogu',
      title: 'Telegram video ve dosyalarını indirmek için pratik kılavuzlar',
      intro:
        'Chrome uzantısı iş akışıyla Telegram videolarını, özel kanal medyalarını ve Telegram Web dosyalarını nasıl kaydedeceğinizi öğrenin. Her kılavuz neyin mümkün olduğunu, neyin güvenli olduğunu ve TGVideoDown ne zaman kurulur açıklar.',
      primaryCta: 'Ana kılavuzla başla',
      allEyebrow: 'Tüm kılavuzlar',
      allTitle: 'Telegram medya indirme konuları',
      allIntro:
        'Bu sayfalar Telegram video indirici kurmadan önce sorulan gerçek soruları kapsar: kurulum, Telegram Web dosyaları, özel kanallar ve diğer mesajlaşma uygulamalarıyla farklar.',
      ctaTitle: 'Kılavuzları oku, sonra TGVideoDown yükle',
      ctaDescription:
        'Makaleler önce iş akışını anlatır. Hazır olduğunuzda Chrome uzantısını yükleyin ve Telegram Web ile izinli video ve dosyaları kaydedin.',
      ctaSecondary: 'Video indirme yöntemi',
      seoTitle: 'Telegram Video Downloader Blog | TGVideoDown Kılavuzları',
      seoDescription:
        'Chrome kullanıcıları için Telegram video downloader kılavuzları. Telegram videolarını, özel kanal medyalarını, Telegram Web dosyalarını indirmeyi ve TGVideoDown kurulumunu öğrenin.',
      schemaDescription: 'TGVideoDown ile Telegram video ve dosyalarını indirmek için pratik kılavuzlar.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Buradan başla', intent: 'Ana kılavuz', title: 'Telegram Video Downloader Kılavuzu', path: articlePaths.main, description: 'TGVideoDown kurma, Telegram Web açma ve Chrome’dan video veya dosya kaydetme rehberi.' },
        { category: 'Eğitim', intent: 'Nasıl yapılır', title: 'Telegram videoları nasıl indirilir', path: articlePaths.howTo, description: 'Masaüstü Chrome’da Telegram video indirmek isteyen kullanıcılar için adım adım talimatlar.' },
        { category: 'Özel kanallar', intent: 'Özel medya', title: 'Telegram özel kanal videosu indir', path: articlePaths.privateChannel, description: 'Erişiminiz olan özel Telegram kanallarındaki videoları güvenli kaydetme rehberi.' },
        { category: 'Telegram Web', intent: 'Dosyalar', title: 'Telegram Web dosyaları indir', path: articlePaths.telegramWeb, description: 'Chrome’da Telegram Web üzerinden video, belge, görsel, ses ve diğer dosyaları kaydetme.' },
        { category: 'Karşılaştırma', intent: 'Telegram vs WhatsApp', title: 'Telegram vs WhatsApp medya indirme', path: articlePaths.comparison, description: 'Medya kaydetme akışları, dosya erişimi ve masaüstü tarayıcı sınırlarının karşılaştırması.' },
        { category: 'Kurulum', intent: 'Chrome uzantısı', title: 'Telegram Video Downloader Chrome uzantısı kılavuzu', path: articlePaths.extensionGuide, description: 'Kurulum, izinler, sorun giderme ve toplu indirme notları.' }
      ]
    },
    guide: {}
  },
  it: {
    common: {
      install: 'Installa l’estensione',
      installStore: 'Installa dal Chrome Web Store',
      readGuide: 'Leggi la guida',
      openArticle: 'Apri articolo',
      updated: 'Aggiornato',
      dateText: '8 luglio 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Blog del downloader Telegram',
      title: 'Guide pratiche per scaricare video e file da Telegram',
      intro:
        'Scopri come salvare video Telegram, media di canali privati e file di Telegram Web con un’estensione Chrome. Ogni guida spiega cosa è possibile, cosa è sicuro e quando installare TGVideoDown.',
      primaryCta: 'Inizia dalla guida principale',
      allEyebrow: 'Tutte le guide',
      allTitle: 'Argomenti sul download dei media Telegram',
      allIntro:
        'Queste pagine coprono le domande reali prima di installare un downloader video Telegram: configurazione, file Telegram Web, canali privati e confronto con altre app.',
      ctaTitle: 'Leggi le guide, poi installa TGVideoDown',
      ctaDescription:
        'Gli articoli spiegano prima il flusso di lavoro. Quando sei pronto, installa l’estensione Chrome e usala con Telegram Web per salvare video e file consentiti.',
      ctaSecondary: 'Come scaricare video',
      seoTitle: 'Blog Telegram Video Downloader | Guide TGVideoDown',
      seoDescription:
        'Guide Telegram video downloader per Chrome. Impara a scaricare video Telegram, media privati, file Telegram Web e installare TGVideoDown.',
      schemaDescription: 'Guide pratiche per scaricare video e file Telegram con TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Inizia qui', intent: 'Guida principale', title: 'Guida Telegram Video Downloader', path: articlePaths.main, description: 'Guida completa per installare TGVideoDown, aprire Telegram Web e salvare video o file da Chrome.' },
        { category: 'Tutorial', intent: 'Procedura', title: 'Come scaricare video Telegram', path: articlePaths.howTo, description: 'Istruzioni passo passo per chi vuole scaricare video Telegram su Chrome desktop.' },
        { category: 'Canali privati', intent: 'Media privati', title: 'Scaricare video da canale privato Telegram', path: articlePaths.privateChannel, description: 'Indicazioni sicure per salvare video da canali privati a cui hai già accesso.' },
        { category: 'Telegram Web', intent: 'File', title: 'Scaricare file da Telegram Web', path: articlePaths.telegramWeb, description: 'Come salvare video, documenti, immagini, audio e altri file in Telegram Web con Chrome.' },
        { category: 'Confronto', intent: 'Telegram vs WhatsApp', title: 'Download media: Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Confronto pratico di flussi di salvataggio, accesso ai file e limiti del browser desktop.' },
        { category: 'Configurazione', intent: 'Estensione Chrome', title: 'Guida estensione Chrome Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Installazione, permessi, risoluzione problemi e note sui download batch.' }
      ]
    },
    guide: {}
  },
  vi: {
    common: {
      install: 'Cài tiện ích',
      installStore: 'Cài từ Chrome Web Store',
      readGuide: 'Đọc hướng dẫn',
      openArticle: 'Mở bài viết',
      updated: 'Cập nhật',
      dateText: '8 tháng 7, 2026',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Blog trình tải Telegram',
      title: 'Hướng dẫn thực tế để tải video và tệp Telegram',
      intro:
        'Tìm hiểu cách lưu video Telegram, media trong kênh riêng tư và tệp Telegram Web bằng quy trình tiện ích Chrome. Mỗi hướng dẫn giải thích điều gì làm được, điều gì an toàn và khi nào nên cài TGVideoDown.',
      primaryCta: 'Bắt đầu với hướng dẫn chính',
      allEyebrow: 'Tất cả hướng dẫn',
      allTitle: 'Chủ đề tải media Telegram',
      allIntro:
        'Các trang này trả lời những câu hỏi thật trước khi cài trình tải video Telegram: thiết lập, tệp Telegram Web, kênh riêng tư và so sánh với ứng dụng nhắn tin khác.',
      ctaTitle: 'Đọc hướng dẫn rồi cài TGVideoDown',
      ctaDescription:
        'Bài viết giải thích quy trình trước. Khi sẵn sàng, hãy cài tiện ích Chrome và dùng với Telegram Web để lưu video và tệp bạn được phép lưu.',
      ctaSecondary: 'Cách tải video',
      seoTitle: 'Blog Telegram Video Downloader | Hướng dẫn TGVideoDown',
      seoDescription:
        'Hướng dẫn Telegram video downloader cho Chrome. Học cách tải video Telegram, media riêng tư, tệp Telegram Web và cài TGVideoDown.',
      schemaDescription: 'Hướng dẫn thực tế để tải video và tệp Telegram bằng TGVideoDown.',
      breadcrumb: 'Blog',
      articles: [
        { category: 'Bắt đầu ở đây', intent: 'Hướng dẫn chính', title: 'Hướng dẫn Telegram Video Downloader', path: articlePaths.main, description: 'Hướng dẫn đầy đủ để cài TGVideoDown, mở Telegram Web và lưu video hoặc tệp từ Chrome.' },
        { category: 'Hướng dẫn', intent: 'Cách làm', title: 'Cách tải video Telegram', path: articlePaths.howTo, description: 'Hướng dẫn từng bước cho người muốn tải video Telegram trên Chrome máy tính.' },
        { category: 'Kênh riêng tư', intent: 'Media riêng tư', title: 'Tải Video Telegram Riêng Tư', path: articlePaths.privateChannel, description: 'Cách tải video Telegram riêng tư từ kênh và nhóm mà bạn đã có quyền xem trên Telegram Web.' },
        { category: 'Telegram Web', intent: 'Tệp', title: 'Tải tệp Telegram Web', path: articlePaths.telegramWeb, description: 'Cách lưu video, tài liệu, hình ảnh, âm thanh và tệp khác trong Telegram Web bằng Chrome.' },
        { category: 'So sánh', intent: 'Telegram vs WhatsApp', title: 'Tải media Telegram vs WhatsApp', path: articlePaths.comparison, description: 'So sánh quy trình lưu media, quyền truy cập tệp và giới hạn trình duyệt desktop.' },
        { category: 'Thiết lập', intent: 'Tiện ích Chrome', title: 'Hướng dẫn tiện ích Chrome Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Cài đặt, quyền, xử lý lỗi và ghi chú tải hàng loạt.' }
      ]
    },
    guide: {}
  },
  ru: {
    common: {
      install: 'Установить расширение',
      installStore: 'Установить из Chrome Web Store',
      readGuide: 'Читать руководство',
      openArticle: 'Открыть статью',
      updated: 'Обновлено',
      dateText: '8 июля 2026 г.',
      chromeWebStore: 'Chrome Web Store'
    },
    index: {
      eyebrow: 'Блог загрузчика Telegram',
      title: 'Практические руководства по скачиванию видео и файлов Telegram',
      intro:
        'Узнайте, как сохранять видео Telegram, медиа из приватных каналов и файлы Telegram Web с помощью расширения Chrome. Каждое руководство объясняет возможности, безопасный подход и когда устанавливать TGVideoDown.',
      primaryCta: 'Начать с главного руководства',
      allEyebrow: 'Все руководства',
      allTitle: 'Темы скачивания медиа Telegram',
      allIntro:
        'Эти страницы отвечают на реальные вопросы перед установкой загрузчика видео Telegram: настройка, файлы Telegram Web, приватные каналы и сравнение с другими мессенджерами.',
      ctaTitle: 'Прочитайте руководства, затем установите TGVideoDown',
      ctaDescription:
        'Сначала статьи объясняют процесс. Когда будете готовы, установите расширение Chrome и используйте его с Telegram Web для разрешенных видео и файлов.',
      ctaSecondary: 'Как скачать видео',
      seoTitle: 'Блог Telegram Video Downloader | Руководства TGVideoDown',
      seoDescription:
        'Руководства Telegram video downloader для Chrome. Узнайте, как скачивать видео Telegram, приватные медиа, файлы Telegram Web и установить TGVideoDown.',
      schemaDescription: 'Практические руководства по скачиванию видео и файлов Telegram с TGVideoDown.',
      breadcrumb: 'Блог',
      articles: [
        { category: 'Начните здесь', intent: 'Главное руководство', title: 'Руководство Telegram Video Downloader', path: articlePaths.main, description: 'Полное руководство по установке TGVideoDown, открытию Telegram Web и сохранению видео или файлов из Chrome.' },
        { category: 'Инструкция', intent: 'Как сделать', title: 'Как скачать видео из Telegram', path: articlePaths.howTo, description: 'Пошаговая инструкция для пользователей, которые хотят скачать видео Telegram в настольном Chrome.' },
        { category: 'Приватные каналы', intent: 'Приватные медиа', title: 'Скачать видео из приватного канала Telegram', path: articlePaths.privateChannel, description: 'Безопасные рекомендации для сохранения видео из приватных каналов, к которым у вас уже есть доступ.' },
        { category: 'Telegram Web', intent: 'Файлы', title: 'Скачать файлы из Telegram Web', path: articlePaths.telegramWeb, description: 'Как сохранять видео, документы, изображения, аудио и другие файлы в Telegram Web через Chrome.' },
        { category: 'Сравнение', intent: 'Telegram vs WhatsApp', title: 'Скачивание медиа: Telegram vs WhatsApp', path: articlePaths.comparison, description: 'Практическое сравнение процессов сохранения, доступа к файлам и ограничений браузера.' },
        { category: 'Настройка', intent: 'Расширение Chrome', title: 'Руководство по расширению Chrome Telegram Video Downloader', path: articlePaths.extensionGuide, description: 'Установка, разрешения, устранение проблем и заметки о пакетной загрузке.' }
      ]
    },
    guide: {}
  }
}

const guideTranslations = {
  tw: {
    imageAlt: '作為 Telegram 影片下載器使用的 TGVideoDown Chrome 擴充功能',
    caption: 'TGVideoDown 會在開啟 Telegram Web 的 Chrome 中使用。',
    quickTitle: '快速答案',
    quickText:
      '在桌面下載 Telegram 影片：從 Chrome 線上應用程式商店安裝 TGVideoDown，在 Chrome 開啟 Telegram Web，進入影片所在聊天或頻道，然後用擴充功能保存到本機。',
    whatTitle: 'TGVideoDown 能做什麼',
    whatText:
      'TGVideoDown 是用於從 Telegram Web 保存影片、圖片、GIF、音訊、文件與其他支援檔案的 Chrome 擴充功能。此網站提供指南與商店入口，不會要求你把私人 Telegram 連結貼到伺服器下載器。',
    howTitle: '如何下載 Telegram 影片',
    whyTitle: '為什麼不建議使用貼上連結下載器？',
    whyText:
      'Telegram 媒體常依賴你的 Telegram 工作階段，尤其是私人群組和頻道。要求貼上連結或密碼的陌生網站可能帶來隱私風險。TGVideoDown 將流程留在 Chrome 中：Telegram Web 負責存取權限，擴充功能協助保存瀏覽器中可見的媒體。',
    useCasesTitle: '常見使用情境',
    troubleshootingTitle: '疑難排解',
    relatedTitle: '相關指南',
    guideIndexTitle: '指南目錄',
    navHowTo: '如何下載影片',
    navPrivate: '私人頻道影片',
    navFiles: 'Telegram Web 檔案',
    steps: [
      { number: '步驟 1', title: '安裝 TGVideoDown', description: '開啟 Chrome 線上應用程式商店頁面，將 Telegram 影片下載器擴充功能加入 Chrome。' },
      { number: '步驟 2', title: '開啟 Telegram Web', description: '在 Chrome 使用官方 Telegram Web；若聊天或頻道需要登入，只透過 Telegram 官方流程登入。' },
      { number: '步驟 3', title: '找到影片', description: '開啟影片所在的訊息、頻道貼文或群組對話。' },
      { number: '步驟 4', title: '下載到本機', description: '使用擴充功能控件保存影片；偵測到支援媒體時，也可選擇多個檔案批次下載。' }
    ],
    useCases: [
      { title: '保存頻道影片', description: '歸檔你可存取的頻道影片，包括長影片和需要整理的重複內容。' },
      { title: '下載 Telegram Web 檔案', description: '不需要 TGVideoDown 帳號，也能保存 Telegram Web 中出現的文件、圖片、音訊與其他檔案。' },
      { title: '個人備份', description: '為離線查看、研究或個人整理保存有權保留的媒體副本。' },
      { title: '批次選擇媒體', description: '偵測到支援項目時，可一次選擇多個檔案，減少重複操作。' }
    ],
    troubleshooting: [
      { problem: '擴充功能沒有偵測到影片', solution: '重新整理 Telegram Web，重新開啟媒體訊息，並確認 TGVideoDown 已在 Chrome 啟用。' },
      { problem: '私人頻道影片不可用', solution: '確認你能在官方 Telegram Web 中查看該影片。擴充功能不能解鎖你無權存取的內容。' },
      { problem: '下載速度較慢', solution: '保持 Chrome 開啟，使用穩定網路，大檔案下載完成前不要關閉 Telegram Web。' }
    ],
    faqs: [
      { question: '可以用 TGVideoDown 下載 Telegram 影片嗎？', answer: '可以。安裝 Chrome 擴充功能，開啟 Telegram Web，然後保存你有權限存取的影片。' },
      { question: '需要在此網站貼上 Telegram 連結嗎？', answer: '不需要。TGVideoDown 是在你瀏覽 Telegram Web 時運作的 Chrome 擴充功能，此網站只提供指南和商店入口。' },
      { question: '可以下載 Telegram 私人頻道影片嗎？', answer: '若影片對你的 Telegram 帳號在 Telegram Web 中可見，擴充功能可協助保存；它不能繞過存取限制。' }
    ]
  },
  ja: {
    imageAlt: 'Telegram 動画ダウンローダーとして使う TGVideoDown Chrome 拡張機能',
    caption: 'TGVideoDown は Telegram Web を開いた Chrome 内で使用します。',
    quickTitle: 'クイック回答',
    quickText:
      'デスクトップで Telegram 動画を保存するには、Chrome ウェブストアから TGVideoDown をインストールし、Chrome で Telegram Web を開き、動画があるチャットまたはチャンネルで拡張機能を使ってローカルに保存します。',
    whatTitle: 'TGVideoDown でできること',
    whatText:
      'TGVideoDown は Telegram Web から動画、画像、GIF、音声、文書などの対応ファイルを保存するための Chrome 拡張機能です。このサイトはガイドとストアリンクを提供する補助サイトで、プライベートな Telegram リンクをサーバー側ダウンローダーに貼り付ける必要はありません。',
    howTitle: 'Telegram 動画をダウンロードする方法',
    whyTitle: 'リンク貼り付け型ダウンローダーを避ける理由',
    whyText:
      'Telegram のメディアは、特に非公開グループやチャンネルでは Telegram セッションに依存します。リンクやパスワードを求める不明なサイトはプライバシーリスクになります。TGVideoDown は Chrome 内で動作し、アクセス管理は公式 Telegram Web が行い、拡張機能はブラウザに表示されているメディアの保存を補助します。',
    useCasesTitle: 'よくある用途',
    troubleshootingTitle: 'トラブルシューティング',
    relatedTitle: '関連ガイド',
    guideIndexTitle: 'ガイド一覧',
    navHowTo: '動画の保存方法',
    navPrivate: 'プライベートチャンネル動画',
    navFiles: 'Telegram Web ファイル',
    steps: [
      { number: 'ステップ 1', title: 'TGVideoDown をインストール', description: 'Chrome ウェブストアのページを開き、Telegram 動画ダウンローダー拡張機能を Chrome に追加します。' },
      { number: 'ステップ 2', title: 'Telegram Web を開く', description: 'Chrome で公式 Telegram Web を使います。チャットやチャンネルでログインが必要な場合は Telegram の公式手順だけを使ってください。' },
      { number: 'ステップ 3', title: '動画を見つける', description: '動画が表示されているメッセージ、チャンネル投稿、またはグループスレッドを開きます。' },
      { number: 'ステップ 4', title: 'ローカルに保存', description: '拡張機能の操作で動画を保存します。対応メディアが検出された場合は複数ファイルを選択できます。' }
    ],
    useCases: [
      { title: 'チャンネル動画の保存', description: 'アクセスできるチャンネルの長い動画や整理したい投稿をアーカイブします。' },
      { title: 'Telegram Web ファイルの保存', description: 'TGVideoDown アカウントを作らずに、Telegram Web に表示される文書、画像、音声などを保存します。' },
      { title: '個人バックアップ', description: '許可されたメディアをオフライン参照、調査、個人整理用に保存します。' },
      { title: '一括メディア選択', description: '対応項目が検出されたときは、同じ操作を繰り返さず複数ファイルを選択できます。' }
    ],
    troubleshooting: [
      { problem: '拡張機能が動画を検出しない', solution: 'Telegram Web を更新し、メディアメッセージを開き直し、TGVideoDown が Chrome で有効になっていることを確認してください。' },
      { problem: 'プライベートチャンネル動画が表示されない', solution: '公式 Telegram Web でその動画を見られるか確認してください。拡張機能はアクセスできないコンテンツを解除できません。' },
      { problem: 'ダウンロードが遅い', solution: 'Chrome を開いたままにし、安定した接続を使い、大きなファイルが完了するまで Telegram Web を閉じないでください。' }
    ],
    faqs: [
      { question: 'TGVideoDown で Telegram 動画を保存できますか？', answer: 'はい。Chrome 拡張機能をインストールし、Telegram Web を開いて、アクセス権のある動画を保存できます。' },
      { question: 'このサイトに Telegram リンクを貼り付ける必要がありますか？', answer: 'いいえ。TGVideoDown は Telegram Web を閲覧している Chrome 内で動作します。このサイトはガイドとストアリンクを提供します。' },
      { question: '非公開 Telegram チャンネルの動画も保存できますか？', answer: 'Telegram Web であなたのアカウントに表示される動画なら保存を補助できます。アクセス制限を回避するものではありません。' }
    ]
  },
  ko: {
    imageAlt: 'Telegram 동영상 다운로더로 사용하는 TGVideoDown Chrome 확장 프로그램',
    caption: 'TGVideoDown은 Telegram Web을 연 Chrome 안에서 사용합니다.',
    quickTitle: '빠른 답변',
    quickText:
      '데스크톱에서 Telegram 동영상을 다운로드하려면 Chrome 웹 스토어에서 TGVideoDown을 설치하고, Chrome에서 Telegram Web을 연 뒤 동영상이 있는 채팅이나 채널에서 확장 프로그램으로 로컬에 저장합니다.',
    whatTitle: 'TGVideoDown이 하는 일',
    whatText:
      'TGVideoDown은 Telegram Web에서 동영상, 이미지, GIF, 오디오, 문서 및 기타 지원 파일을 저장하는 Chrome 확장 프로그램입니다. 이 웹사이트는 안내와 스토어 링크를 제공하며, 비공개 Telegram 링크를 서버형 다운로더에 붙여 넣도록 요구하지 않습니다.',
    howTitle: 'Telegram 동영상 다운로드 방법',
    whyTitle: '링크 붙여넣기 다운로더를 피해야 하는 이유',
    whyText:
      'Telegram 미디어는 특히 비공개 그룹과 채널에서 Telegram 세션에 의존하는 경우가 많습니다. 링크나 비밀번호를 요구하는 임의 사이트는 개인정보 위험이 있습니다. TGVideoDown은 Chrome 안에서 동작하며, 접근 권한은 공식 Telegram Web이 처리하고 확장 프로그램은 브라우저에 보이는 미디어 저장을 돕습니다.',
    useCasesTitle: '일반적인 사용 사례',
    troubleshootingTitle: '문제 해결',
    relatedTitle: '관련 가이드',
    guideIndexTitle: '가이드 목차',
    navHowTo: '동영상 다운로드 방법',
    navPrivate: '비공개 채널 동영상',
    navFiles: 'Telegram Web 파일',
    steps: [
      { number: '1단계', title: 'TGVideoDown 설치', description: 'Chrome 웹 스토어 목록을 열고 Telegram 동영상 다운로더 확장 프로그램을 Chrome에 추가합니다.' },
      { number: '2단계', title: 'Telegram Web 열기', description: 'Chrome에서 공식 Telegram Web을 사용합니다. 채팅이나 채널에 로그인이 필요하면 Telegram 공식 절차만 이용하세요.' },
      { number: '3단계', title: '동영상 찾기', description: '동영상이 표시되는 메시지, 채널 게시물 또는 그룹 대화를 엽니다.' },
      { number: '4단계', title: '로컬로 다운로드', description: '확장 프로그램 컨트롤로 동영상을 저장하고, 지원 미디어가 감지되면 여러 파일도 선택할 수 있습니다.' }
    ],
    useCases: [
      { title: '채널 동영상 저장', description: '접근 가능한 채널의 긴 동영상이나 정리해야 할 반복 게시물을 보관합니다.' },
      { title: 'Telegram Web 파일 다운로드', description: 'TGVideoDown 계정 없이 Telegram Web에 표시되는 문서, 이미지, 오디오 등 파일을 저장합니다.' },
      { title: '개인 백업', description: '허용된 미디어를 오프라인 참고, 조사 또는 개인 정리를 위해 로컬로 보관합니다.' },
      { title: '미디어 일괄 선택', description: '지원 항목이 감지되면 같은 작업을 반복하지 않고 여러 파일을 선택할 수 있습니다.' }
    ],
    troubleshooting: [
      { problem: '확장 프로그램이 동영상을 감지하지 못함', solution: 'Telegram Web을 새로고침하고 미디어 메시지를 다시 열며 TGVideoDown이 Chrome에서 활성화되어 있는지 확인하세요.' },
      { problem: '비공개 채널 동영상이 없음', solution: '공식 Telegram Web에서 해당 동영상을 볼 수 있는지 확인하세요. 확장 프로그램은 접근할 수 없는 콘텐츠를 열 수 없습니다.' },
      { problem: '다운로드가 느림', solution: 'Chrome을 열어 두고 안정적인 연결을 사용하며 큰 파일이 끝날 때까지 Telegram Web을 닫지 마세요.' }
    ],
    faqs: [
      { question: 'TGVideoDown으로 Telegram 동영상을 다운로드할 수 있나요?', answer: '네. Chrome 확장 프로그램을 설치하고 Telegram Web을 열어 접근 권한이 있는 동영상을 저장할 수 있습니다.' },
      { question: '이 웹사이트에 Telegram 링크를 붙여넣어야 하나요?', answer: '아니요. TGVideoDown은 Telegram Web을 보는 Chrome 안에서 작동하며, 이 사이트는 가이드와 스토어 링크를 제공합니다.' },
      { question: '비공개 Telegram 채널 동영상도 가능한가요?', answer: 'Telegram Web에서 내 계정에 보이는 동영상은 저장을 도울 수 있습니다. 접근 제한을 우회하지는 않습니다.' }
    ]
  },
  es: {
    imageAlt: 'Extensión de Chrome TGVideoDown usada como descargador de video de Telegram',
    caption: 'TGVideoDown se usa dentro de Chrome mientras Telegram Web está abierto.',
    quickTitle: 'Respuesta rápida',
    quickText:
      'Para descargar videos de Telegram en escritorio, instala TGVideoDown desde Chrome Web Store, abre Telegram Web en Chrome, entra al chat o canal donde aparece el video y usa la extensión para guardarlo localmente.',
    whatTitle: 'Qué hace TGVideoDown',
    whatText:
      'TGVideoDown es una extensión de Chrome para guardar videos, imágenes, GIF, audio, documentos y otros archivos compatibles desde Telegram Web. El sitio es un complemento con guías y enlaces a la tienda; no pide pegar enlaces privados de Telegram en un descargador del servidor.',
    howTitle: 'Cómo descargar videos de Telegram',
    whyTitle: 'Por qué no usar un descargador de enlaces pegados',
    whyText:
      'Los medios de Telegram suelen depender de tu sesión, especialmente en grupos y canales privados. Un sitio desconocido que pide enlaces o contraseñas crea riesgo de privacidad. TGVideoDown mantiene el flujo en Chrome: Telegram Web gestiona el acceso y la extensión ayuda a guardar los medios visibles en el navegador.',
    useCasesTitle: 'Casos de uso comunes',
    troubleshootingTitle: 'Solución de problemas',
    relatedTitle: 'Guías relacionadas',
    guideIndexTitle: 'Índice de la guía',
    navHowTo: 'Cómo descargar videos',
    navPrivate: 'Videos de canales privados',
    navFiles: 'Archivos de Telegram Web',
    steps: [
      { number: 'Paso 1', title: 'Instala TGVideoDown', description: 'Abre la página de Chrome Web Store y añade la extensión de descargador de video de Telegram a Chrome.' },
      { number: 'Paso 2', title: 'Abre Telegram Web', description: 'Usa Telegram Web oficial en Chrome e inicia sesión solo mediante Telegram si el chat o canal lo requiere.' },
      { number: 'Paso 3', title: 'Encuentra el video', description: 'Abre el mensaje, publicación de canal o conversación donde aparece el video de Telegram.' },
      { number: 'Paso 4', title: 'Descarga localmente', description: 'Usa los controles de la extensión para guardar el video o selecciona varios medios compatibles cuando haya descarga por lotes.' }
    ],
    useCases: [
      { title: 'Guardar videos de canales', description: 'Archiva videos de canales a los que tienes acceso, incluidos videos largos y publicaciones repetidas que necesitas organizar.' },
      { title: 'Descargar archivos de Telegram Web', description: 'Guarda documentos, imágenes, audio y otros archivos de Telegram Web sin crear una cuenta de TGVideoDown.' },
      { title: 'Copias personales', description: 'Conserva copias locales de medios permitidos para consulta sin conexión, investigación u organización personal.' },
      { title: 'Selección por lotes', description: 'Cuando se detecten elementos compatibles, selecciona varios archivos en lugar de repetir la misma acción.' }
    ],
    troubleshooting: [
      { problem: 'La extensión no detecta un video', solution: 'Actualiza Telegram Web, vuelve a abrir el mensaje multimedia y confirma que TGVideoDown esté habilitado en Chrome.' },
      { problem: 'Falta un video de canal privado', solution: 'Confirma que puedes ver el video en Telegram Web oficial. La extensión no desbloquea contenido sin acceso.' },
      { problem: 'Las descargas son lentas', solution: 'Mantén Chrome abierto, usa una conexión estable y no cierres Telegram Web hasta que terminen los archivos grandes.' }
    ],
    faqs: [
      { question: '¿Puedo descargar videos de Telegram con TGVideoDown?', answer: 'Sí. Instala la extensión de Chrome, abre Telegram Web y guarda videos a los que tienes permiso de acceso.' },
      { question: '¿Debo pegar enlaces de Telegram en este sitio?', answer: 'No. TGVideoDown funciona como extensión de Chrome mientras navegas Telegram Web. El sitio ofrece guías y enlaces a la tienda.' },
      { question: '¿Puede descargar videos de canales privados?', answer: 'Puede ayudar a guardar videos visibles para tu cuenta en Telegram Web. No puede saltarse las reglas de acceso.' }
    ]
  }
}

Object.assign(guideTranslations, {
  de: {
    imageAlt: 'TGVideoDown Chrome-Erweiterung als Telegram Video Downloader',
    caption: 'TGVideoDown wird in Chrome verwendet, während Telegram Web geöffnet ist.',
    quickTitle: 'Kurzantwort',
    quickText:
      'Installiere TGVideoDown aus dem Chrome Web Store, öffne Telegram Web in Chrome, gehe zum Chat oder Kanal mit dem Video und speichere es mit der Erweiterung lokal.',
    whatTitle: 'Was TGVideoDown macht',
    whatText:
      'TGVideoDown ist eine Chrome-Erweiterung zum Speichern von Telegram-Videos, Bildern, GIFs, Audio, Dokumenten und unterstützten Dateien aus Telegram Web. Diese Website bietet Anleitungen und Store-Links, aber kein serverseitiges Link-Formular.',
    howTitle: 'Telegram-Videos herunterladen',
    whyTitle: 'Warum kein Link-Einfüge-Downloader?',
    whyText:
      'Telegram-Medien hängen oft von deiner Telegram-Sitzung ab, besonders in privaten Gruppen und Kanälen. Unbekannte Websites, die Links oder Passwörter verlangen, können riskant sein. TGVideoDown bleibt in Chrome: Telegram Web regelt den Zugriff, die Erweiterung speichert sichtbare Medien.',
    useCasesTitle: 'Häufige Anwendungsfälle',
    troubleshootingTitle: 'Fehlerbehebung',
    relatedTitle: 'Verwandte Anleitungen',
    guideIndexTitle: 'Guide-Index',
    navHowTo: 'Videos herunterladen',
    navPrivate: 'Private Kanalvideos',
    navFiles: 'Telegram-Web-Dateien',
    steps: [
      { number: 'Schritt 1', title: 'TGVideoDown installieren', description: 'Öffne den Chrome Web Store und füge die Telegram-Video-Downloader-Erweiterung zu Chrome hinzu.' },
      { number: 'Schritt 2', title: 'Telegram Web öffnen', description: 'Nutze offizielles Telegram Web in Chrome und melde dich nur über Telegram an, falls es nötig ist.' },
      { number: 'Schritt 3', title: 'Video finden', description: 'Öffne die Nachricht, den Kanalbeitrag oder die Gruppe, in der das Video erscheint.' },
      { number: 'Schritt 4', title: 'Lokal speichern', description: 'Speichere das Video über die Erweiterung oder wähle mehrere unterstützte Medien für Batch-Downloads aus.' }
    ],
    useCases: [
      { title: 'Kanalvideos speichern', description: 'Archiviere Videos aus Kanälen, auf die du Zugriff hast.' },
      { title: 'Telegram-Web-Dateien speichern', description: 'Speichere Dokumente, Bilder, Audio und Dateien ohne TGVideoDown-Konto.' },
      { title: 'Persönliche Backups', description: 'Bewahre erlaubte Medien für Offline-Nutzung und Organisation lokal auf.' },
      { title: 'Batch-Auswahl', description: 'Wähle mehrere erkannte Dateien aus, statt jeden Download einzeln zu starten.' }
    ],
    troubleshooting: [
      { problem: 'Die Erweiterung erkennt kein Video', solution: 'Aktualisiere Telegram Web, öffne die Nachricht erneut und prüfe, ob TGVideoDown in Chrome aktiviert ist.' },
      { problem: 'Privates Kanalvideo fehlt', solution: 'Prüfe, ob du es in offiziellem Telegram Web ansehen kannst. Die Erweiterung entsperrt keine Inhalte.' },
      { problem: 'Downloads sind langsam', solution: 'Lass Chrome geöffnet, nutze eine stabile Verbindung und schließe Telegram Web erst nach großen Downloads.' }
    ],
    faqs: [
      { question: 'Kann ich Telegram-Videos mit TGVideoDown herunterladen?', answer: 'Ja. Installiere die Chrome-Erweiterung, öffne Telegram Web und speichere Videos, auf die du Zugriff hast.' },
      { question: 'Muss ich Telegram-Links auf dieser Website einfügen?', answer: 'Nein. TGVideoDown arbeitet als Chrome-Erweiterung in Telegram Web. Diese Website bietet Anleitungen und Store-Links.' },
      { question: 'Funktionieren private Telegram-Kanalvideos?', answer: 'Nur wenn das Video für dein Konto in Telegram Web sichtbar ist. Zugriffsbeschränkungen werden nicht umgangen.' }
    ]
  },
  fr: {
    imageAlt: 'Extension Chrome TGVideoDown utilisée comme téléchargeur vidéo Telegram',
    caption: 'TGVideoDown s’utilise dans Chrome lorsque Telegram Web est ouvert.',
    quickTitle: 'Réponse rapide',
    quickText:
      'Installez TGVideoDown depuis le Chrome Web Store, ouvrez Telegram Web dans Chrome, allez dans le chat ou le canal où apparaît la vidéo, puis utilisez l’extension pour l’enregistrer localement.',
    whatTitle: 'Ce que fait TGVideoDown',
    whatText:
      'TGVideoDown est une extension Chrome pour enregistrer vidéos, images, GIF, audio, documents et fichiers compatibles depuis Telegram Web. Le site fournit des guides et liens de boutique, pas un téléchargeur serveur où coller des liens privés.',
    howTitle: 'Comment télécharger des vidéos Telegram',
    whyTitle: 'Pourquoi éviter les téléchargeurs par lien collé ?',
    whyText:
      'Les médias Telegram dépendent souvent de votre session, surtout dans les groupes et canaux privés. Les sites qui demandent liens ou mots de passe peuvent créer un risque. TGVideoDown reste dans Chrome : Telegram Web gère l’accès et l’extension aide à sauvegarder les médias visibles.',
    useCasesTitle: 'Cas d’usage courants',
    troubleshootingTitle: 'Dépannage',
    relatedTitle: 'Guides liés',
    guideIndexTitle: 'Index du guide',
    navHowTo: 'Télécharger des vidéos',
    navPrivate: 'Vidéos de canaux privés',
    navFiles: 'Fichiers Telegram Web',
    steps: [
      { number: 'Étape 1', title: 'Installer TGVideoDown', description: 'Ouvrez le Chrome Web Store et ajoutez l’extension Telegram video downloader à Chrome.' },
      { number: 'Étape 2', title: 'Ouvrir Telegram Web', description: 'Utilisez Telegram Web officiel dans Chrome et connectez-vous uniquement via Telegram si nécessaire.' },
      { number: 'Étape 3', title: 'Trouver la vidéo', description: 'Ouvrez le message, le post de canal ou la discussion où la vidéo apparaît.' },
      { number: 'Étape 4', title: 'Télécharger localement', description: 'Utilisez l’extension pour sauvegarder la vidéo ou sélectionner plusieurs médias compatibles.' }
    ],
    useCases: [
      { title: 'Sauvegarder des vidéos de canal', description: 'Archivez les vidéos des canaux auxquels vous avez accès.' },
      { title: 'Télécharger des fichiers Telegram Web', description: 'Enregistrez documents, images, audio et fichiers sans compte TGVideoDown.' },
      { title: 'Sauvegardes personnelles', description: 'Gardez des copies locales de médias autorisés pour consultation ou organisation.' },
      { title: 'Sélection par lot', description: 'Sélectionnez plusieurs fichiers détectés au lieu de répéter l’action.' }
    ],
    troubleshooting: [
      { problem: 'L’extension ne détecte pas de vidéo', solution: 'Actualisez Telegram Web, rouvrez le message et vérifiez que TGVideoDown est activé dans Chrome.' },
      { problem: 'Une vidéo de canal privé manque', solution: 'Vérifiez que vous pouvez la voir dans Telegram Web officiel. L’extension ne débloque pas le contenu.' },
      { problem: 'Les téléchargements sont lents', solution: 'Gardez Chrome ouvert, utilisez une connexion stable et ne fermez pas Telegram Web avant la fin.' }
    ],
    faqs: [
      { question: 'Puis-je télécharger des vidéos Telegram avec TGVideoDown ?', answer: 'Oui. Installez l’extension Chrome, ouvrez Telegram Web et sauvegardez les vidéos autorisées.' },
      { question: 'Dois-je coller des liens Telegram sur ce site ?', answer: 'Non. TGVideoDown fonctionne comme extension Chrome pendant l’utilisation de Telegram Web.' },
      { question: 'Les vidéos de canaux privés sont-elles prises en charge ?', answer: 'Seulement si elles sont visibles pour votre compte dans Telegram Web. L’extension ne contourne pas les permissions.' }
    ]
  },
  id: {
    imageAlt: 'Ekstensi Chrome TGVideoDown sebagai pengunduh video Telegram',
    caption: 'TGVideoDown digunakan di Chrome saat Telegram Web terbuka.',
    quickTitle: 'Jawaban singkat',
    quickText:
      'Instal TGVideoDown dari Chrome Web Store, buka Telegram Web di Chrome, masuk ke chat atau channel tempat video muncul, lalu gunakan ekstensi untuk menyimpan video secara lokal.',
    whatTitle: 'Apa fungsi TGVideoDown',
    whatText:
      'TGVideoDown adalah ekstensi Chrome untuk menyimpan video, gambar, GIF, audio, dokumen, dan file yang didukung dari Telegram Web. Situs ini berisi panduan dan tautan toko, bukan kotak unduhan server untuk tautan privat.',
    howTitle: 'Cara mengunduh video Telegram',
    whyTitle: 'Mengapa tidak memakai pengunduh tempel tautan?',
    whyText:
      'Media Telegram sering bergantung pada sesi Telegram, terutama di grup dan channel privat. Situs asing yang meminta tautan atau sandi berisiko. TGVideoDown tetap bekerja di Chrome: Telegram Web mengatur akses, ekstensi membantu menyimpan media yang terlihat.',
    useCasesTitle: 'Kasus penggunaan umum',
    troubleshootingTitle: 'Pemecahan masalah',
    relatedTitle: 'Panduan terkait',
    guideIndexTitle: 'Indeks panduan',
    navHowTo: 'Cara mengunduh video',
    navPrivate: 'Video channel privat',
    navFiles: 'File Telegram Web',
    steps: [
      { number: 'Langkah 1', title: 'Instal TGVideoDown', description: 'Buka Chrome Web Store dan tambahkan ekstensi pengunduh video Telegram ke Chrome.' },
      { number: 'Langkah 2', title: 'Buka Telegram Web', description: 'Gunakan Telegram Web resmi di Chrome dan login hanya melalui Telegram jika diperlukan.' },
      { number: 'Langkah 3', title: 'Temukan video', description: 'Buka pesan, posting channel, atau grup tempat video Telegram muncul.' },
      { number: 'Langkah 4', title: 'Unduh lokal', description: 'Gunakan kontrol ekstensi untuk menyimpan video atau memilih beberapa media yang didukung.' }
    ],
    useCases: [
      { title: 'Simpan video channel', description: 'Arsipkan video dari channel yang dapat kamu akses.' },
      { title: 'Unduh file Telegram Web', description: 'Simpan dokumen, gambar, audio, dan file tanpa akun TGVideoDown.' },
      { title: 'Cadangan pribadi', description: 'Simpan salinan lokal media yang boleh kamu simpan.' },
      { title: 'Pilihan batch', description: 'Pilih beberapa file yang terdeteksi tanpa mengulang tindakan satu per satu.' }
    ],
    troubleshooting: [
      { problem: 'Ekstensi tidak mendeteksi video', solution: 'Segarkan Telegram Web, buka ulang pesan media, dan pastikan TGVideoDown aktif di Chrome.' },
      { problem: 'Video channel privat tidak muncul', solution: 'Pastikan kamu bisa melihatnya di Telegram Web resmi. Ekstensi tidak membuka konten tanpa akses.' },
      { problem: 'Unduhan lambat', solution: 'Biarkan Chrome terbuka, gunakan koneksi stabil, dan jangan tutup Telegram Web sebelum file besar selesai.' }
    ],
    faqs: [
      { question: 'Bisakah mengunduh video Telegram dengan TGVideoDown?', answer: 'Bisa. Instal ekstensi Chrome, buka Telegram Web, dan simpan video yang boleh kamu akses.' },
      { question: 'Perlukah menempel tautan Telegram di situs ini?', answer: 'Tidak. TGVideoDown bekerja sebagai ekstensi Chrome saat kamu memakai Telegram Web.' },
      { question: 'Apakah video channel privat bisa diunduh?', answer: 'Bisa dibantu jika video terlihat oleh akunmu di Telegram Web. Ekstensi tidak melewati batas akses.' }
    ]
  },
  ar: {
    imageAlt: 'إضافة TGVideoDown في Chrome كأداة لتنزيل فيديو Telegram',
    caption: 'يتم استخدام TGVideoDown داخل Chrome أثناء فتح Telegram Web.',
    quickTitle: 'إجابة سريعة',
    quickText:
      'ثبّت TGVideoDown من متجر Chrome، وافتح Telegram Web في Chrome، ثم انتقل إلى الدردشة أو القناة التي يظهر فيها الفيديو واستخدم الإضافة لحفظه محليا.',
    whatTitle: 'ماذا يفعل TGVideoDown',
    whatText:
      'TGVideoDown إضافة Chrome لحفظ فيديوهات Telegram والصور وملفات GIF والصوت والمستندات والملفات المدعومة من Telegram Web. هذا الموقع يقدم أدلة وروابط متجر، ولا يطلب لصق روابط Telegram الخاصة في أداة تنزيل على الخادم.',
    howTitle: 'كيفية تنزيل فيديوهات Telegram',
    whyTitle: 'لماذا لا تستخدم أداة لصق الروابط؟',
    whyText:
      'تعتمد وسائط Telegram غالبا على جلسة Telegram الخاصة بك، خصوصا في المجموعات والقنوات الخاصة. المواقع المجهولة التي تطلب روابط أو كلمات مرور قد تشكل خطرا. يبقي TGVideoDown العملية داخل Chrome: يدير Telegram Web الوصول وتساعد الإضافة في حفظ الوسائط الظاهرة.',
    useCasesTitle: 'استخدامات شائعة',
    troubleshootingTitle: 'استكشاف الأخطاء',
    relatedTitle: 'أدلة ذات صلة',
    guideIndexTitle: 'فهرس الدليل',
    navHowTo: 'كيفية تنزيل الفيديوهات',
    navPrivate: 'فيديوهات القنوات الخاصة',
    navFiles: 'ملفات Telegram Web',
    steps: [
      { number: 'الخطوة 1', title: 'تثبيت TGVideoDown', description: 'افتح متجر Chrome وأضف إضافة تنزيل فيديو Telegram إلى Chrome.' },
      { number: 'الخطوة 2', title: 'فتح Telegram Web', description: 'استخدم Telegram Web الرسمي في Chrome وسجل الدخول عبر Telegram فقط عند الحاجة.' },
      { number: 'الخطوة 3', title: 'العثور على الفيديو', description: 'افتح الرسالة أو منشور القناة أو المجموعة التي يظهر فيها الفيديو.' },
      { number: 'الخطوة 4', title: 'التنزيل محليا', description: 'استخدم عناصر الإضافة لحفظ الفيديو أو اختيار عدة ملفات مدعومة.' }
    ],
    useCases: [
      { title: 'حفظ فيديوهات القنوات', description: 'أرشف الفيديوهات من القنوات التي يمكنك الوصول إليها.' },
      { title: 'تنزيل ملفات Telegram Web', description: 'احفظ المستندات والصور والصوت والملفات دون حساب TGVideoDown.' },
      { title: 'نسخ احتياطية شخصية', description: 'احتفظ بنسخ محلية من الوسائط المسموح لك بحفظها.' },
      { title: 'اختيار جماعي', description: 'حدد عدة ملفات مكتشفة بدلا من تكرار العملية.' }
    ],
    troubleshooting: [
      { problem: 'الإضافة لا تكتشف الفيديو', solution: 'حدّث Telegram Web وافتح رسالة الوسائط مرة أخرى وتأكد من تفعيل TGVideoDown في Chrome.' },
      { problem: 'فيديو قناة خاصة غير ظاهر', solution: 'تأكد من أنك تستطيع مشاهدته في Telegram Web الرسمي. الإضافة لا تفتح محتوى بلا إذن.' },
      { problem: 'التنزيل بطيء', solution: 'أبق Chrome مفتوحا واستخدم اتصالا مستقرا ولا تغلق Telegram Web قبل انتهاء الملفات الكبيرة.' }
    ],
    faqs: [
      { question: 'هل يمكن تنزيل فيديوهات Telegram باستخدام TGVideoDown؟', answer: 'نعم. ثبّت إضافة Chrome وافتح Telegram Web واحفظ الفيديوهات التي لديك إذن للوصول إليها.' },
      { question: 'هل يجب لصق روابط Telegram في هذا الموقع؟', answer: 'لا. يعمل TGVideoDown كإضافة Chrome أثناء استخدام Telegram Web.' },
      { question: 'هل تعمل مع فيديوهات القنوات الخاصة؟', answer: 'تساعد فقط إذا كان الفيديو ظاهرا لحسابك في Telegram Web. لا تتجاوز قيود الوصول.' }
    ]
  },
  pt: {
    imageAlt: 'Extensão Chrome TGVideoDown usada como downloader de vídeo do Telegram',
    caption: 'TGVideoDown é usado dentro do Chrome enquanto o Telegram Web está aberto.',
    quickTitle: 'Resposta rápida',
    quickText:
      'Instale o TGVideoDown pela Chrome Web Store, abra o Telegram Web no Chrome, entre no chat ou canal onde o vídeo aparece e use a extensão para salvar localmente.',
    whatTitle: 'O que o TGVideoDown faz',
    whatText:
      'TGVideoDown é uma extensão Chrome para salvar vídeos, imagens, GIFs, áudio, documentos e arquivos compatíveis do Telegram Web. O site oferece guias e links da loja, não um downloader em servidor para colar links privados.',
    howTitle: 'Como baixar vídeos do Telegram',
    whyTitle: 'Por que não usar um downloader de link colado?',
    whyText:
      'Mídias do Telegram muitas vezes dependem da sua sessão, especialmente em grupos e canais privados. Sites desconhecidos que pedem links ou senhas podem ser arriscados. TGVideoDown fica no Chrome: Telegram Web controla o acesso e a extensão salva a mídia visível.',
    useCasesTitle: 'Usos comuns',
    troubleshootingTitle: 'Solução de problemas',
    relatedTitle: 'Guias relacionados',
    guideIndexTitle: 'Índice do guia',
    navHowTo: 'Como baixar vídeos',
    navPrivate: 'Vídeos de canais privados',
    navFiles: 'Arquivos do Telegram Web',
    steps: [
      { number: 'Passo 1', title: 'Instale o TGVideoDown', description: 'Abra a Chrome Web Store e adicione a extensão de downloader de vídeo do Telegram ao Chrome.' },
      { number: 'Passo 2', title: 'Abra o Telegram Web', description: 'Use o Telegram Web oficial no Chrome e faça login apenas pelo Telegram se necessário.' },
      { number: 'Passo 3', title: 'Encontre o vídeo', description: 'Abra a mensagem, postagem de canal ou grupo onde o vídeo aparece.' },
      { number: 'Passo 4', title: 'Baixe localmente', description: 'Use os controles da extensão para salvar o vídeo ou selecionar várias mídias compatíveis.' }
    ],
    useCases: [
      { title: 'Salvar vídeos de canais', description: 'Arquive vídeos de canais aos quais você tem acesso.' },
      { title: 'Baixar arquivos do Telegram Web', description: 'Salve documentos, imagens, áudio e arquivos sem conta TGVideoDown.' },
      { title: 'Backups pessoais', description: 'Mantenha cópias locais de mídias permitidas para consulta ou organização.' },
      { title: 'Seleção em lote', description: 'Selecione vários arquivos detectados em vez de repetir a mesma ação.' }
    ],
    troubleshooting: [
      { problem: 'A extensão não detecta vídeo', solution: 'Atualize o Telegram Web, reabra a mensagem e confirme que o TGVideoDown está ativado no Chrome.' },
      { problem: 'Vídeo de canal privado ausente', solution: 'Confirme que você consegue vê-lo no Telegram Web oficial. A extensão não desbloqueia conteúdo.' },
      { problem: 'Downloads lentos', solution: 'Mantenha o Chrome aberto, use conexão estável e não feche o Telegram Web antes do fim.' }
    ],
    faqs: [
      { question: 'Posso baixar vídeos do Telegram com TGVideoDown?', answer: 'Sim. Instale a extensão Chrome, abra o Telegram Web e salve vídeos que você pode acessar.' },
      { question: 'Preciso colar links do Telegram neste site?', answer: 'Não. TGVideoDown funciona como extensão Chrome enquanto você usa o Telegram Web.' },
      { question: 'Funciona com vídeos de canais privados?', answer: 'Ajuda apenas se o vídeo estiver visível para sua conta no Telegram Web. Não ignora permissões.' }
    ]
  },
  tr: {
    imageAlt: 'Telegram video indirici olarak kullanılan TGVideoDown Chrome uzantısı',
    caption: 'TGVideoDown, Telegram Web açıkken Chrome içinde kullanılır.',
    quickTitle: 'Kısa cevap',
    quickText:
      'TGVideoDown’u Chrome Web Mağazası’ndan yükleyin, Chrome’da Telegram Web’i açın, videonun bulunduğu sohbet veya kanala gidin ve uzantı ile yerel olarak kaydedin.',
    whatTitle: 'TGVideoDown ne yapar',
    whatText:
      'TGVideoDown, Telegram Web’den video, görsel, GIF, ses, belge ve desteklenen dosyaları kaydetmeye yarayan bir Chrome uzantısıdır. Bu site rehberler ve mağaza bağlantıları sunar; özel Telegram bağlantılarını sunucuya yapıştırmanızı istemez.',
    howTitle: 'Telegram videoları nasıl indirilir',
    whyTitle: 'Neden link yapıştırma indiricisi kullanılmamalı?',
    whyText:
      'Telegram medyası çoğu zaman oturumunuza bağlıdır, özellikle özel grup ve kanallarda. Link veya şifre isteyen bilinmeyen siteler risklidir. TGVideoDown süreci Chrome içinde tutar: Telegram Web erişimi yönetir, uzantı görünür medyayı kaydetmeye yardım eder.',
    useCasesTitle: 'Yaygın kullanım alanları',
    troubleshootingTitle: 'Sorun giderme',
    relatedTitle: 'İlgili kılavuzlar',
    guideIndexTitle: 'Kılavuz dizini',
    navHowTo: 'Video indirme yöntemi',
    navPrivate: 'Özel kanal videoları',
    navFiles: 'Telegram Web dosyaları',
    steps: [
      { number: 'Adım 1', title: 'TGVideoDown’u yükleyin', description: 'Chrome Web Mağazası sayfasını açın ve Telegram video indirici uzantısını Chrome’a ekleyin.' },
      { number: 'Adım 2', title: 'Telegram Web’i açın', description: 'Chrome’da resmi Telegram Web’i kullanın ve gerekirse yalnızca Telegram üzerinden giriş yapın.' },
      { number: 'Adım 3', title: 'Videoyu bulun', description: 'Videonun göründüğü mesajı, kanal gönderisini veya grubu açın.' },
      { number: 'Adım 4', title: 'Yerel indirin', description: 'Uzantı kontrolleriyle videoyu kaydedin veya desteklenen birden fazla medyayı seçin.' }
    ],
    useCases: [
      { title: 'Kanal videolarını kaydetme', description: 'Erişebildiğiniz kanallardaki videoları arşivleyin.' },
      { title: 'Telegram Web dosyalarını indirme', description: 'TGVideoDown hesabı olmadan belge, görsel, ses ve dosya kaydedin.' },
      { title: 'Kişisel yedekler', description: 'İzinli medyanın yerel kopyalarını saklayın.' },
      { title: 'Toplu seçim', description: 'Algılanan birden çok dosyayı tek tek indirmek yerine seçin.' }
    ],
    troubleshooting: [
      { problem: 'Uzantı video algılamıyor', solution: 'Telegram Web’i yenileyin, medya mesajını tekrar açın ve TGVideoDown’un Chrome’da etkin olduğunu kontrol edin.' },
      { problem: 'Özel kanal videosu yok', solution: 'Videoyu resmi Telegram Web’de görebildiğinizi doğrulayın. Uzantı erişimsiz içeriği açmaz.' },
      { problem: 'İndirme yavaş', solution: 'Chrome’u açık tutun, stabil bağlantı kullanın ve büyük dosyalar bitmeden Telegram Web’i kapatmayın.' }
    ],
    faqs: [
      { question: 'TGVideoDown ile Telegram videoları indirilebilir mi?', answer: 'Evet. Chrome uzantısını yükleyin, Telegram Web’i açın ve erişebildiğiniz videoları kaydedin.' },
      { question: 'Bu siteye Telegram linki yapıştırmalı mıyım?', answer: 'Hayır. TGVideoDown, Telegram Web kullanırken Chrome uzantısı olarak çalışır.' },
      { question: 'Özel kanal videolarında çalışır mı?', answer: 'Video Telegram Web’de hesabınıza görünüyorsa yardımcı olur. Erişim kısıtlarını aşmaz.' }
    ]
  },
  it: {
    imageAlt: 'Estensione Chrome TGVideoDown usata come downloader video Telegram',
    caption: 'TGVideoDown si usa dentro Chrome mentre Telegram Web è aperto.',
    quickTitle: 'Risposta rapida',
    quickText:
      'Installa TGVideoDown dal Chrome Web Store, apri Telegram Web in Chrome, vai alla chat o al canale dove appare il video e usa l’estensione per salvarlo localmente.',
    whatTitle: 'Cosa fa TGVideoDown',
    whatText:
      'TGVideoDown è un’estensione Chrome per salvare video, immagini, GIF, audio, documenti e file supportati da Telegram Web. Il sito offre guide e link allo store, non un downloader server dove incollare link privati.',
    howTitle: 'Come scaricare video Telegram',
    whyTitle: 'Perché evitare downloader con link incollato?',
    whyText:
      'I media Telegram dipendono spesso dalla sessione, soprattutto in gruppi e canali privati. Siti sconosciuti che chiedono link o password sono rischiosi. TGVideoDown resta in Chrome: Telegram Web gestisce l’accesso e l’estensione salva i media visibili.',
    useCasesTitle: 'Casi d’uso comuni',
    troubleshootingTitle: 'Risoluzione problemi',
    relatedTitle: 'Guide correlate',
    guideIndexTitle: 'Indice guida',
    navHowTo: 'Come scaricare video',
    navPrivate: 'Video canali privati',
    navFiles: 'File Telegram Web',
    steps: [
      { number: 'Passo 1', title: 'Installa TGVideoDown', description: 'Apri il Chrome Web Store e aggiungi a Chrome l’estensione Telegram video downloader.' },
      { number: 'Passo 2', title: 'Apri Telegram Web', description: 'Usa Telegram Web ufficiale in Chrome e accedi solo tramite Telegram se necessario.' },
      { number: 'Passo 3', title: 'Trova il video', description: 'Apri il messaggio, il post del canale o il gruppo in cui appare il video.' },
      { number: 'Passo 4', title: 'Scarica localmente', description: 'Usa i controlli dell’estensione per salvare il video o selezionare più media supportati.' }
    ],
    useCases: [
      { title: 'Salvare video di canali', description: 'Archivia video dai canali a cui puoi accedere.' },
      { title: 'Scaricare file Telegram Web', description: 'Salva documenti, immagini, audio e file senza account TGVideoDown.' },
      { title: 'Backup personali', description: 'Conserva copie locali di media che puoi salvare.' },
      { title: 'Selezione batch', description: 'Seleziona più file rilevati invece di ripetere la stessa azione.' }
    ],
    troubleshooting: [
      { problem: 'L’estensione non rileva un video', solution: 'Aggiorna Telegram Web, riapri il messaggio e verifica che TGVideoDown sia attivo in Chrome.' },
      { problem: 'Manca un video di canale privato', solution: 'Verifica di poterlo vedere in Telegram Web ufficiale. L’estensione non sblocca contenuti.' },
      { problem: 'Download lenti', solution: 'Tieni Chrome aperto, usa una connessione stabile e non chiudere Telegram Web prima della fine.' }
    ],
    faqs: [
      { question: 'Posso scaricare video Telegram con TGVideoDown?', answer: 'Sì. Installa l’estensione Chrome, apri Telegram Web e salva i video a cui puoi accedere.' },
      { question: 'Devo incollare link Telegram su questo sito?', answer: 'No. TGVideoDown funziona come estensione Chrome mentre usi Telegram Web.' },
      { question: 'Funziona con video di canali privati?', answer: 'Aiuta solo se il video è visibile al tuo account in Telegram Web. Non aggira i permessi.' }
    ]
  },
  vi: {
    imageAlt: 'Tiện ích Chrome TGVideoDown dùng như trình tải video Telegram',
    caption: 'TGVideoDown được dùng trong Chrome khi Telegram Web đang mở.',
    quickTitle: 'Trả lời nhanh',
    quickText:
      'Cài TGVideoDown từ Chrome Web Store, mở Telegram Web trong Chrome, vào chat hoặc kênh có video và dùng tiện ích để lưu video về máy.',
    whatTitle: 'TGVideoDown làm gì',
    whatText:
      'TGVideoDown là tiện ích Chrome để lưu video, ảnh, GIF, âm thanh, tài liệu và tệp được hỗ trợ từ Telegram Web. Website này cung cấp hướng dẫn và liên kết cửa hàng, không yêu cầu dán liên kết Telegram riêng tư vào máy chủ tải xuống.',
    howTitle: 'Cách tải video Telegram',
    whyTitle: 'Vì sao không nên dùng trình tải dán liên kết?',
    whyText:
      'Media Telegram thường phụ thuộc vào phiên đăng nhập, nhất là trong nhóm và kênh riêng tư. Website lạ yêu cầu liên kết hoặc mật khẩu có thể rủi ro. TGVideoDown giữ quy trình trong Chrome: Telegram Web quản lý quyền truy cập, tiện ích giúp lưu media đang hiển thị.',
    useCasesTitle: 'Trường hợp sử dụng phổ biến',
    troubleshootingTitle: 'Khắc phục sự cố',
    relatedTitle: 'Hướng dẫn liên quan',
    guideIndexTitle: 'Mục lục hướng dẫn',
    navHowTo: 'Cách tải video',
    navPrivate: 'Video kênh riêng tư',
    navFiles: 'Tệp Telegram Web',
    steps: [
      { number: 'Bước 1', title: 'Cài TGVideoDown', description: 'Mở Chrome Web Store và thêm tiện ích tải video Telegram vào Chrome.' },
      { number: 'Bước 2', title: 'Mở Telegram Web', description: 'Dùng Telegram Web chính thức trong Chrome và chỉ đăng nhập qua Telegram khi cần.' },
      { number: 'Bước 3', title: 'Tìm video', description: 'Mở tin nhắn, bài đăng kênh hoặc nhóm nơi video xuất hiện.' },
      { number: 'Bước 4', title: 'Tải về máy', description: 'Dùng điều khiển tiện ích để lưu video hoặc chọn nhiều media được hỗ trợ.' }
    ],
    useCases: [
      { title: 'Lưu video kênh', description: 'Lưu trữ video từ các kênh bạn có thể truy cập.' },
      { title: 'Tải tệp Telegram Web', description: 'Lưu tài liệu, ảnh, âm thanh và tệp mà không cần tài khoản TGVideoDown.' },
      { title: 'Sao lưu cá nhân', description: 'Giữ bản sao cục bộ của media bạn được phép lưu.' },
      { title: 'Chọn hàng loạt', description: 'Chọn nhiều tệp được phát hiện thay vì lặp lại từng thao tác.' }
    ],
    troubleshooting: [
      { problem: 'Tiện ích không phát hiện video', solution: 'Làm mới Telegram Web, mở lại tin nhắn media và kiểm tra TGVideoDown đã bật trong Chrome.' },
      { problem: 'Thiếu video kênh riêng tư', solution: 'Hãy chắc rằng bạn xem được video trong Telegram Web chính thức. Tiện ích không mở khóa nội dung không có quyền.' },
      { problem: 'Tải chậm', solution: 'Giữ Chrome mở, dùng kết nối ổn định và không đóng Telegram Web trước khi tệp lớn tải xong.' }
    ],
    faqs: [
      { question: 'Có thể tải video Telegram bằng TGVideoDown không?', answer: 'Có. Cài tiện ích Chrome, mở Telegram Web và lưu video bạn có quyền truy cập.' },
      { question: 'Có cần dán liên kết Telegram vào website này không?', answer: 'Không. TGVideoDown hoạt động như tiện ích Chrome khi bạn dùng Telegram Web.' },
      { question: 'Có tải được video kênh riêng tư không?', answer: 'Chỉ khi video hiển thị với tài khoản của bạn trong Telegram Web. Tiện ích không vượt quyền truy cập.' }
    ]
  },
  ru: {
    imageAlt: 'Расширение Chrome TGVideoDown как загрузчик видео Telegram',
    caption: 'TGVideoDown используется в Chrome при открытом Telegram Web.',
    quickTitle: 'Краткий ответ',
    quickText:
      'Установите TGVideoDown из Chrome Web Store, откройте Telegram Web в Chrome, перейдите в чат или канал с видео и сохраните его локально через расширение.',
    whatTitle: 'Что делает TGVideoDown',
    whatText:
      'TGVideoDown — расширение Chrome для сохранения видео, изображений, GIF, аудио, документов и поддерживаемых файлов из Telegram Web. Сайт содержит руководства и ссылки на магазин, а не серверную форму для приватных ссылок.',
    howTitle: 'Как скачать видео из Telegram',
    whyTitle: 'Почему не использовать загрузчик с вставкой ссылки?',
    whyText:
      'Медиа Telegram часто зависят от вашей сессии, особенно в приватных группах и каналах. Неизвестные сайты, запрашивающие ссылки или пароли, рискованны. TGVideoDown работает в Chrome: Telegram Web управляет доступом, расширение помогает сохранить видимые медиа.',
    useCasesTitle: 'Типичные сценарии',
    troubleshootingTitle: 'Устранение проблем',
    relatedTitle: 'Связанные руководства',
    guideIndexTitle: 'Содержание',
    navHowTo: 'Как скачать видео',
    navPrivate: 'Видео приватных каналов',
    navFiles: 'Файлы Telegram Web',
    steps: [
      { number: 'Шаг 1', title: 'Установите TGVideoDown', description: 'Откройте Chrome Web Store и добавьте расширение Telegram video downloader в Chrome.' },
      { number: 'Шаг 2', title: 'Откройте Telegram Web', description: 'Используйте официальный Telegram Web в Chrome и входите только через Telegram при необходимости.' },
      { number: 'Шаг 3', title: 'Найдите видео', description: 'Откройте сообщение, пост канала или группу, где отображается видео.' },
      { number: 'Шаг 4', title: 'Скачайте локально', description: 'Используйте расширение для сохранения видео или выбора нескольких поддерживаемых медиа.' }
    ],
    useCases: [
      { title: 'Сохранение видео каналов', description: 'Архивируйте видео из каналов, к которым у вас есть доступ.' },
      { title: 'Скачивание файлов Telegram Web', description: 'Сохраняйте документы, изображения, аудио и файлы без аккаунта TGVideoDown.' },
      { title: 'Личные резервные копии', description: 'Храните локальные копии разрешенных медиа.' },
      { title: 'Пакетный выбор', description: 'Выбирайте несколько обнаруженных файлов вместо повторения действий.' }
    ],
    troubleshooting: [
      { problem: 'Расширение не видит видео', solution: 'Обновите Telegram Web, заново откройте сообщение и проверьте, что TGVideoDown включен в Chrome.' },
      { problem: 'Нет видео из приватного канала', solution: 'Проверьте, что видео видно в официальном Telegram Web. Расширение не открывает закрытый контент.' },
      { problem: 'Скачивание медленное', solution: 'Оставьте Chrome открытым, используйте стабильное соединение и не закрывайте Telegram Web до завершения.' }
    ],
    faqs: [
      { question: 'Можно ли скачать видео Telegram с TGVideoDown?', answer: 'Да. Установите расширение Chrome, откройте Telegram Web и сохраните видео, к которым у вас есть доступ.' },
      { question: 'Нужно ли вставлять ссылки Telegram на этом сайте?', answer: 'Нет. TGVideoDown работает как расширение Chrome при использовании Telegram Web.' },
      { question: 'Работает ли с видео приватных каналов?', answer: 'Только если видео видно вашему аккаунту в Telegram Web. Ограничения доступа не обходятся.' }
    ]
  }
})

const guideFromIndex = (localePack, locale) => {
  if (Object.keys(localePack.guide || {}).length) {
    return localePack.guide
  }

  const enGuide = blogLocaleContent.en.guide
  const articles = localePack.index.articles
  const articleTitle = (path) => articles.find((article) => article.path === path)?.title || ''

  const localizedGuide = guideTranslations[locale] || {}

  return {
    ...enGuide,
    ...localizedGuide,
    eyebrow: localePack.index.articles[0].title,
    title: localePack.index.articles[0].title,
    intro: localePack.index.intro,
    ctaTitle: localePack.index.ctaTitle,
    ctaDescription: localePack.index.ctaDescription,
    ctaSecondary: localePack.index.ctaSecondary,
    relatedGuides: [
      { title: articleTitle(articlePaths.howTo), path: articlePaths.howTo },
      { title: articleTitle(articlePaths.privateChannel), path: articlePaths.privateChannel },
      { title: articleTitle(articlePaths.telegramWeb), path: articlePaths.telegramWeb },
      { title: articleTitle(articlePaths.comparison), path: articlePaths.comparison }
    ],
    seoTitle: localePack.index.articles[0].title,
    seoDescription: localePack.index.articles[0].description,
    schemaDescription: localePack.index.articles[0].description,
    howToName: articleTitle(articlePaths.howTo)
  }
}

export const getBlogLocaleContent = (locale) => {
  const localePack = blogLocaleContent[locale] || blogLocaleContent.en
  const fallback = blogLocaleContent.en

  return {
    common: {
      ...fallback.common,
      ...localePack.common
    },
    index: {
      ...fallback.index,
      ...localePack.index
    },
    guide: {
      ...fallback.guide,
      ...guideFromIndex(localePack, locale)
    }
  }
}
