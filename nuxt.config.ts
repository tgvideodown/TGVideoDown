// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/how-to-download-telegram-videos': { redirect: '/how-to-download-telegram-video' }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tgvideodown.com',
      extensionStoreUrl: 'https://chromewebstore.google.com/detail/telegram-video-downloader/lmblmgpljbjhkbicffecgngnfnkckopm',
      facebookExtensionStoreUrl:
        'https://chromewebstore.google.com/detail/facebook-video-downloader/jgeifchelmmplfbglkigaljkidfgpdmb',
      extensionVersion: '5.2.0',
      /** Google Analytics 4 Measurement ID (gtag.js) */
      gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-DSKQVQZQY6'
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
      title: 'TGVideoDown - Download Telegram Videos',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Companion site for the Telegram Media Downloader Chrome extension — install from the Chrome Web Store.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
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
      ignore: ['/pricing', '/features', '/cn/pricing', '/cn/features', '/es/pricing', '/es/features']
    }
}
})
