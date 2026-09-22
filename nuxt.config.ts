// https://nuxt.com/docs/api/configuration/nuxt-config

/** Landing pages merged into homepage to stop keyword cannibalization */
const MERGE_TO_HOME_PATHS = [
  '/telegram-video-downloader-chrome',
  '/telegram-video-downloader-extension',
  '/telegram-media-downloader',
  '/download-telegram-photos'
] as const

const I18N_PREFIX_LOCALES = [
  'ja',
  'ko',
  'ru',
  'es',
  'tw',
  'cn',
  'de',
  'fr',
  'id',
  'ar',
  'pt',
  'tr',
  'it',
  'vi'
] as const

function buildMergeToHomeRouteRules() {
  const rules: Record<string, { redirect: { to: string; statusCode: number } }> = {}

  for (const path of MERGE_TO_HOME_PATHS) {
    rules[path] = { redirect: { to: '/', statusCode: 301 } }
    for (const locale of I18N_PREFIX_LOCALES) {
      rules[`/${locale}${path}`] = { redirect: { to: `/${locale}`, statusCode: 301 } }
    }
  }

  return rules
}

const mergedPageExcludeList = MERGE_TO_HOME_PATHS.flatMap((path) => [
  path,
  ...I18N_PREFIX_LOCALES.map((locale) => `/${locale}${path}`)
])

export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/how-to-download-telegram-video': {
      redirect: { to: '/how-to-download-telegram-videos', statusCode: 301 }
    },
    '/telegram-video-download-guide': {
      redirect: { to: '/blog/telegram-video-downloader-guide', statusCode: 301 }
    },
    '/telegram-video-downloader-guide': {
      redirect: { to: '/blog/telegram-video-downloader-guide', statusCode: 301 }
    },
    '/download-telegram-private-video': {
      redirect: { to: '/download-telegram-private-channel-video', statusCode: 301 }
    },
    '/ops-x9f2a7': {
      redirect: { to: '/dashboard', statusCode: 301 }
    },
    ...Object.fromEntries(
      I18N_PREFIX_LOCALES.map((locale) => [
        `/${locale}/ops-x9f2a7`,
        { redirect: { to: `/${locale}/dashboard`, statusCode: 301 } }
      ])
    ),
    ...buildMergeToHomeRouteRules()
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tgvideodown.com',
      extensionStoreUrl: 'https://chromewebstore.google.com/detail/telegram-video-downloader/lmblmgpljbjhkbicffecgngnfnkckopm',
      facebookExtensionStoreUrl:
        'https://chromewebstore.google.com/detail/video-downloader-download/jgeifchelmmplfbglkigaljkidfgpdmb',
      igDmBotStoreUrl:
        'https://chromewebstore.google.com/detail/ig-dm-bot-%E2%80%93-bulk-instagra/iocffhjpcgaeefodaacffhidgobhdcjk',
      igFollowerExportStoreUrl:
        'https://chromewebstore.google.com/detail/ig-follower-export-tool-i/ncmdkkkbcmjiicgjfakjoigklahnnbih',
      /** Replace with the published Chrome Web Store listing when the ID is ready */
      igCommentExporterStoreUrl:
        'https://chromewebstore.google.com/search/Instagram%20Comment%20Exporter',
      extensionVersion: '5.2.0',
      /** Google Analytics 4 Measurement ID (gtag.js) */
      gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-DSKQVQZQY6',
      supportEmail: 'support@tgvideodown.com'
    }
  },

  site: {
    url: process.env.NUXT_SITE_URL || process.env.NUXT_PUBLIC_SITE_URL || 'https://tgvideodown.com'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ja', language: 'ja-JP', name: '日本語', file: 'ja.json' },
      { code: 'ko', language: 'ko-KR', name: '한국어', file: 'ko.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'tw', language: 'zh-TW', name: '繁體中文', file: 'tw.json' },
      { code: 'cn', language: 'zh-CN', name: '中文', file: 'cn.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'id', language: 'id-ID', name: 'Indonesia', file: 'id.json' },
      { code: 'ar', language: 'ar-SA', name: 'العربية', file: 'ar.json' },
      { code: 'pt', language: 'pt-BR', name: 'Português', file: 'pt.json' },
      { code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'tr.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'vi', language: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' }
    ],
    defaultLocale: 'en',
    fallbackLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',  // 使用根目录 locales/
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    },
    compilation: {
      strictMessage: false
    }
  },

  devServer: {
    host: '0.0.0.0',  // 允许局域网/外网访问
    port: 5173        // 若 5173 被占用可改为 3000 等
  },

  app: {
    head: {
      title: 'Telegram Video Downloader - Download Telegram Videos with TGVideoDown',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msvalidate.01', content: '937D79DE13AC2EF3D392D947D295A3FD' },
        {
          name: 'description',
          content:
            'TGVideoDown is a Telegram Video Downloader Chrome extension for saving Telegram videos, files, images, and audio from private groups, channels, and chats. Fast, lightweight, privacy-minded, and no login on this site.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  sitemap: {
    exclude: [
      ...mergedPageExcludeList,
      '/dashboard',
      '/ops-x9f2a7',
      ...I18N_PREFIX_LOCALES.flatMap((l) => [`/${l}/dashboard`, `/${l}/ops-x9f2a7`])
    ]
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config'
  },

  nitro: {
    preset: 'static',
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true, // 保持自动爬取以生成所有页面
      ignore: [
        '/pricing',
        '/features',
        '/cn/pricing',
        '/cn/features',
        '/es/pricing',
        '/es/features',
        ...mergedPageExcludeList
      ]
    }
  }
})
