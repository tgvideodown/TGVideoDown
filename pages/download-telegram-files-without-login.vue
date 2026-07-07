<template>
  <div class="pt-16 bg-white">
    <article class="section-padding">
      <div class="container-custom max-w-3xl">
        <header class="mb-12 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Privacy guide</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            Download Telegram Files Without Login
          </h1>
          <p class="text-lg leading-relaxed text-gray-700">
            You do not need a TGVideoDown account to download Telegram files with the Chrome extension. This guide explains
            what "without login" means, how private Telegram access works, and how to keep the workflow safer.
          </p>
        </header>

        <div class="space-y-8 text-gray-700">
          <section class="rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-900">
            <h2 class="mb-2 text-xl font-heading font-bold">Important clarification</h2>
            <p class="leading-relaxed">
              "Without login" means no TGVideoDown website login. If the Telegram file is inside a private chat, group, or
              channel, Telegram may still require you to sign in through official Telegram Web.
            </p>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">What you can download</h2>
            <p class="leading-relaxed">
              TGVideoDown is positioned as a Telegram Video Downloader Chrome extension, but the workflow can also support
              files, images, GIFs, audio, and other media that appear in Telegram Web and are available to your account.
            </p>
          </section>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="imgFiles"
              alt="Download Telegram files with TGVideoDown in Chrome"
              class="h-auto w-full object-contain"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              TGVideoDown works in Chrome while you browse Telegram Web. The companion site does not require an account.
            </figcaption>
          </figure>

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">No-login workflow</h2>
            <ol class="space-y-4">
              <li v-for="step in steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                <p class="mb-2 text-sm font-semibold text-primary">{{ step.number }}</p>
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ step.title }}</h3>
                <p class="leading-relaxed">{{ step.description }}</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Why this is better than a password form</h2>
            <p class="leading-relaxed">
              A third-party website that asks for your Telegram password creates unnecessary risk. A Chrome extension workflow
              lets you use Telegram Web directly, so Telegram handles access and TGVideoDown focuses on local saving from the
              browser interface.
            </p>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Best practices</h2>
            <ul class="list-disc space-y-2 pl-6 leading-relaxed">
              <li>Use official Telegram Web for any Telegram sign-in.</li>
              <li>Do not paste private Telegram links into unknown downloader websites.</li>
              <li>Download only files you are allowed to keep.</li>
              <li>For large Telegram files, keep Chrome open and use a stable connection.</li>
              <li>Organize saved files responsibly, especially when content is private or sensitive.</li>
            </ul>
          </section>

          <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Related guides</h2>
            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink :to="localePath('/telegram-video-downloader')" class="font-semibold text-primary hover:underline">
                Telegram Video Downloader
              </NuxtLink>
              <NuxtLink :to="localePath('/how-to-download-telegram-videos')" class="font-semibold text-primary hover:underline">
                How to Download Telegram Videos
              </NuxtLink>
              <NuxtLink :to="localePath('/telegram-video-downloader-chrome-extension-guide')" class="font-semibold text-primary hover:underline">
                Chrome Extension Guide
              </NuxtLink>
              <NuxtLink :to="localePath('/download-telegram-private-video')" class="font-semibold text-primary hover:underline">
                Private Telegram Video Notes
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgFiles from '~/assets/9.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const canonical = `${siteUrl}/download-telegram-files-without-login`

const steps = [
  {
    number: 'Step 1',
    title: 'Install the Chrome extension',
    description: 'Add TGVideoDown from the Chrome Web Store. You do not need to create an account on this website.'
  },
  {
    number: 'Step 2',
    title: 'Open Telegram Web',
    description: 'Use official Telegram Web in Chrome. If the file is private, sign in only through Telegram.'
  },
  {
    number: 'Step 3',
    title: 'Find the file',
    description: 'Open the chat, channel, or group where the video, image, audio, or document appears.'
  },
  {
    number: 'Step 4',
    title: 'Save from Chrome',
    description: 'Use TGVideoDown to save supported Telegram files locally, with single or batch selection when available.'
  }
]

useSeoMeta({
  title: 'Download Telegram Files Without Login | TGVideoDown',
  description:
    'Download Telegram files without a TGVideoDown website login. Learn how the Chrome extension works with Telegram Web for videos, files, images, audio, and batch downloads.',
  ogTitle: 'Download Telegram Files Without Login',
  ogDescription:
    'No TGVideoDown account required. Use official Telegram Web in Chrome and save supported Telegram files with the extension.',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
  keywords:
    'download telegram files without login, telegram file downloader, telegram video downloader without login, TGVideoDown, telegram chrome extension'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Download Telegram Files Without Login',
        description:
          'Explains how to download Telegram files without a TGVideoDown website login using the Chrome extension and official Telegram Web.',
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
            name: 'Download Telegram Files Without Login',
            item: canonical
          }
        ]
      })
    }
  ]
})
</script>
