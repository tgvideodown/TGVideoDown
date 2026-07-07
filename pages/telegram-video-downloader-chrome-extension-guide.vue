<template>
  <div class="pt-16 bg-white">
    <article class="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div class="container-custom max-w-4xl">
        <header class="mb-12 max-w-3xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Chrome extension guide</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            Telegram Video Downloader Chrome Extension Guide
          </h1>
          <p class="text-lg leading-relaxed text-gray-700">
            TGVideoDown is built for users who want a clear Chrome extension workflow for saving Telegram videos and files.
            This guide explains what the extension does, when to use it, and how it differs from online paste-link downloaders.
          </p>
        </header>

        <div class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div class="space-y-8 text-gray-700">
            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">What the extension is for</h2>
              <p class="leading-relaxed">
                TGVideoDown helps save Telegram media from Telegram Web in Chrome. It is useful for videos, images, GIFs,
                audio, and files that you can already access in Telegram. The website introduces the extension and links to
                the Chrome Web Store; it does not process Telegram links on a server.
              </p>
            </section>

            <section>
              <h2 class="mb-4 text-2xl font-heading font-bold text-text">Core features</h2>
              <div class="grid gap-4 sm:grid-cols-2">
                <article v-for="feature in features" :key="feature.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ feature.title }}</h3>
                  <p class="text-sm leading-relaxed text-gray-600">{{ feature.description }}</p>
                </article>
              </div>
            </section>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">Recommended setup</h2>
              <ol class="list-decimal space-y-3 pl-6 leading-relaxed">
                <li>Install TGVideoDown from the Chrome Web Store.</li>
                <li>Pin the extension in Chrome if you use it often.</li>
                <li>Open official Telegram Web in Chrome and sign in through Telegram.</li>
                <li>Browse to the video, channel, group, or chat where the media appears.</li>
                <li>Use the extension controls to save one item or multiple supported files.</li>
              </ol>
            </section>

            <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
              <img
                :src="imgGuide"
                alt="Telegram Video Downloader Chrome extension guide screenshot"
                class="h-auto w-full object-contain"
                loading="lazy"
                width="800"
                height="450"
              />
              <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
                TGVideoDown is intended for Chrome desktop with Telegram Web.
              </figcaption>
            </figure>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">Privacy and login model</h2>
              <p class="leading-relaxed">
                The key distinction is simple: no TGVideoDown website account is required. For private Telegram content,
                use official Telegram Web because Telegram itself needs to know what you can access. Do not share your
                Telegram password with unrelated sites.
              </p>
            </section>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">Troubleshooting</h2>
              <div class="space-y-4">
                <article v-for="item in troubleshooting" :key="item.problem" class="rounded-lg border border-border bg-white p-5">
                  <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ item.problem }}</h3>
                  <p class="leading-relaxed text-gray-600">{{ item.solution }}</p>
                </article>
              </div>
            </section>
          </div>

          <aside class="rounded-lg border border-border bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 class="mb-4 text-xl font-heading font-bold text-text">Guide links</h2>
            <nav class="space-y-3">
              <NuxtLink :to="localePath('/telegram-video-downloader')" class="block font-semibold text-primary hover:underline">
                Telegram Video Downloader
              </NuxtLink>
              <NuxtLink :to="localePath('/how-to-download-telegram-videos')" class="block font-semibold text-primary hover:underline">
                How to Download Telegram Videos
              </NuxtLink>
              <NuxtLink :to="localePath('/download-telegram-files-without-login')" class="block font-semibold text-primary hover:underline">
                Download Telegram Files Without Login
              </NuxtLink>
              <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="block font-semibold text-primary hover:underline">
                Chrome Web Store
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgGuide from '~/assets/10.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl
const canonical = `${siteUrl}/telegram-video-downloader-chrome-extension-guide`

const features = [
  {
    title: 'Video and file saving',
    description: 'Save Telegram videos and other supported media from Telegram Web to your computer.'
  },
  {
    title: 'Batch workflow',
    description: 'Select multiple detected items when the Telegram page and extension workflow support it.'
  },
  {
    title: 'No site-side parser',
    description: 'The companion website does not collect Telegram links or run downloads on a remote server.'
  },
  {
    title: 'Clear product scope',
    description: 'Use Chrome desktop, Telegram Web, and content you have permission to save.'
  }
]

const troubleshooting = [
  {
    problem: 'The download button does not appear',
    solution: 'Refresh Telegram Web, confirm the extension is enabled, and open the media message again.'
  },
  {
    problem: 'A private video is not available',
    solution: 'Confirm you can view the content in official Telegram Web. The extension cannot unlock content you cannot access.'
  },
  {
    problem: 'Large files are slow',
    solution: 'Use a stable connection and keep Chrome open until the file finishes downloading.'
  }
]

useSeoMeta({
  title: 'Telegram Video Downloader Chrome Extension Guide | TGVideoDown',
  description:
    'Complete TGVideoDown Chrome extension guide for downloading Telegram videos, files, images, audio, and GIFs from Telegram Web. Learn setup, features, privacy, and troubleshooting.',
  ogTitle: 'Telegram Video Downloader Chrome Extension Guide',
  ogDescription:
    'Setup and feature guide for the TGVideoDown Telegram Video Downloader Chrome extension.',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
  keywords:
    'telegram video downloader chrome extension, telegram downloader extension, TGVideoDown guide, telegram web video downloader'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Telegram Video Downloader Chrome Extension Guide',
        description:
          'Guide to installing and using the TGVideoDown Telegram Video Downloader Chrome extension.',
        author: {
          '@type': 'Organization',
          name: 'TGVideoDown'
        },
        publisher: {
          '@type': 'Organization',
          name: 'TGVideoDown'
        },
        dateModified: '2026-07-07',
        mainEntityOfPage: canonical
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
            item: `${siteUrl}/telegram-video-downloader`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Chrome Extension Guide',
            item: canonical
          }
        ]
      })
    }
  ]
})
</script>
