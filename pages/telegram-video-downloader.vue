<template>
  <div class="pt-16 bg-white">
    <section class="section-padding bg-gradient-to-b from-primary-50/50 to-white">
      <div class="container-custom">
        <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">TGVideoDown Chrome Extension</p>
            <h1 class="mb-6 text-4xl font-heading font-bold leading-tight text-text md:text-5xl">
              Telegram Video Downloader Chrome Extension
            </h1>
            <p class="mb-8 max-w-2xl text-lg leading-relaxed text-gray-700">
              TGVideoDown helps you download Telegram videos, files, images, audio, and GIFs from Telegram Web in Chrome.
              It is built as a fast, lightweight, privacy-minded extension with no account login on this site, batch downloads,
              and multi-language support.
            </p>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-center">
                Install from Chrome Web Store
              </a>
              <NuxtLink :to="localePath('/how-to-download-telegram-videos')" class="btn-outline text-center">
                How to download videos
              </NuxtLink>
            </div>
          </div>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="imgOverview"
              alt="TGVideoDown Telegram Video Downloader Chrome extension workflow"
              class="h-auto w-full object-contain"
              width="800"
              height="450"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              Download inside Chrome while browsing Telegram Web. This website is the companion site, not a paste-link parser.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="mb-10 max-w-3xl">
          <h2 class="mb-4 text-3xl font-heading font-bold text-text">Why TGVideoDown is different</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            The domain builds a memorable brand while this page covers the downloader keywords users search for.
            The product positioning is clear: a Chrome extension for authorized personal saving, not a clone of another web downloader.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="feature in features" :key="feature.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ feature.title }}</h3>
            <p class="leading-relaxed text-gray-600">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-slate-50">
      <div class="container-custom">
        <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Download workflow</p>
            <h2 class="mb-4 text-3xl font-heading font-bold text-text">How to download Telegram videos</h2>
            <p class="leading-relaxed text-gray-700">
              Use the extension where Telegram content already appears: in Telegram Web on Chrome. For private chats and
              channels, sign in only through the official Telegram flow.
            </p>
          </div>

          <ol class="grid gap-4 md:grid-cols-3">
            <li v-for="step in steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
              <p class="mb-3 text-sm font-semibold text-primary">{{ step.number }}</p>
              <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ step.title }}</h3>
              <p class="text-sm leading-relaxed text-gray-600">{{ step.description }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="mb-10 max-w-3xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">SEO topic cluster</p>
          <h2 class="mb-4 text-3xl font-heading font-bold text-text">Telegram downloader guides</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            These articles support the main Telegram Video Downloader page and cover the search intent around downloading
            videos, using a Chrome extension, and saving files without creating a TGVideoDown account.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article v-for="article in articles" :key="article.path" class="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h3 class="mb-3 text-xl font-heading font-semibold text-text">{{ article.title }}</h3>
            <p class="mb-4 leading-relaxed text-gray-600">{{ article.description }}</p>
            <NuxtLink :to="localePath(article.path)" class="font-semibold text-primary hover:underline">
              Read guide
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom max-w-4xl">
        <h2 class="mb-8 text-3xl font-heading font-bold text-text">Telegram Video Downloader FAQ</h2>
        <div class="divide-y divide-border rounded-lg border border-border bg-white">
          <div v-for="faq in faqs" :key="faq.question" class="p-5">
            <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ faq.question }}</h3>
            <p class="leading-relaxed text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import imgOverview from '~/assets/10.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl
const canonical = `${siteUrl}/telegram-video-downloader`

const features = [
  {
    title: 'Faster Telegram video saving',
    description: 'Download from Telegram Web in Chrome with a direct extension workflow instead of copying links into a web form.'
  },
  {
    title: 'Lightweight extension',
    description: 'TGVideoDown keeps the interface simple so users can find files, select items, and save media without a heavy dashboard.'
  },
  {
    title: 'Privacy-minded workflow',
    description: 'The website does not ask for your Telegram password. Use official Telegram Web and let the extension work in your browser.'
  },
  {
    title: 'No TGVideoDown login',
    description: 'You do not need to create an account on this site to use the Chrome extension or read the guides.'
  },
  {
    title: 'Batch downloads',
    description: 'Save one Telegram video or select multiple media files when the extension detects supported items.'
  },
  {
    title: 'Multi-language support',
    description: 'The site and extension positioning support international users searching for a Telegram downloader.'
  }
]

const steps = [
  {
    number: 'Step 1',
    title: 'Install the extension',
    description: 'Open the Chrome Web Store listing and add TGVideoDown to Chrome.'
  },
  {
    number: 'Step 2',
    title: 'Open Telegram Web',
    description: 'Use Telegram Web in Chrome and go to the chat, channel, or group where the video appears.'
  },
  {
    number: 'Step 3',
    title: 'Download locally',
    description: 'Use the extension controls to save videos, files, images, or audio to your computer.'
  }
]

const articles = [
  {
    title: 'How to Download Telegram Videos',
    path: '/how-to-download-telegram-videos',
    description: 'A step-by-step tutorial for saving Telegram videos with the TGVideoDown Chrome extension.'
  },
  {
    title: 'Telegram Video Downloader Chrome Extension Guide',
    path: '/telegram-video-downloader-chrome-extension-guide',
    description: 'A product guide covering installation, permissions, batch downloads, file types, and troubleshooting.'
  },
  {
    title: 'Download Telegram Files Without Login',
    path: '/download-telegram-files-without-login',
    description: 'Clarifies that no TGVideoDown account is needed while private Telegram content still uses official Telegram Web login.'
  }
]

const faqs = [
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
    answer: 'Yes. The extension is positioned for videos, images, GIFs, audio, and files when those items are available in Telegram Web.'
  },
  {
    question: 'Can I use it for batch Telegram downloads?',
    answer: 'Yes. The extension supports single and batch selection for supported Telegram media workflows.'
  }
]

useSeoMeta({
  title: 'Telegram Video Downloader - Download Telegram Videos with TGVideoDown',
  description:
    'Telegram Video Downloader Chrome extension by TGVideoDown. Download Telegram videos, files, images, audio, and GIFs from Telegram Web. Fast, lightweight, no TGVideoDown login, batch downloads.',
  ogTitle: 'Telegram Video Downloader - TGVideoDown Chrome Extension',
  ogDescription:
    'Download Telegram videos and files with TGVideoDown, a fast and lightweight Chrome extension for Telegram Web.',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
  keywords:
    'telegram video downloader, download telegram videos, TGVideoDown, telegram downloader chrome extension, download telegram files, telegram batch downloader'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'TGVideoDown',
        applicationCategory: 'BrowserApplication',
        operatingSystem: 'Chrome',
        url: canonical,
        downloadUrl: extensionStoreUrl,
        description:
          'Telegram Video Downloader Chrome extension for saving Telegram videos, files, images, audio, and GIFs from Telegram Web.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Telegram Video Downloader',
            item: canonical
          }
        ]
      })
    }
  ]
})
</script>
