<template>
  <div class="pt-16 bg-white">
    <article class="section-padding">
      <div class="container-custom max-w-3xl">
        <header class="mb-12 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Tutorial</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            How to Download Telegram Videos
          </h1>
          <p class="text-lg leading-relaxed text-gray-700">
            This guide shows how to download Telegram videos with TGVideoDown, a Telegram Video Downloader Chrome extension.
            The site does not ask you to paste private links or create an account. You install the extension, open Telegram Web,
            and save videos locally from Chrome.
          </p>
          <p class="mt-4 text-sm text-gray-500">
            Updated <time datetime="2026-07-07">July 7, 2026</time>
          </p>
        </header>

        <figure class="mb-10 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <img
            :src="imgInstall"
            alt="Install TGVideoDown from the Chrome Web Store"
            class="h-auto w-full object-contain"
            width="800"
            height="450"
          />
          <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
            Start with the Chrome Web Store listing, then use the extension while browsing Telegram Web.
          </figcaption>
        </figure>

        <div class="space-y-8 text-gray-700">
          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Before you start</h2>
            <p class="leading-relaxed">
              Make sure you are using Chrome on desktop and that the Telegram video is content you are allowed to save.
              For private chats, channels, or groups, sign in only through official Telegram Web. TGVideoDown does not need
              a separate website login.
            </p>
          </section>

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">Step-by-step download workflow</h2>
            <ol class="space-y-4">
              <li v-for="step in steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                <p class="mb-2 text-sm font-semibold text-primary">{{ step.number }}</p>
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ step.title }}</h3>
                <p class="leading-relaxed">{{ step.description }}</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Download one video or many files</h2>
            <p class="leading-relaxed">
              TGVideoDown is designed for simple single downloads and batch selection when supported media is detected.
              That makes it useful when a Telegram channel has multiple videos, images, audio files, or documents you need
              to organize locally.
            </p>
          </section>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="imgWorkflow"
              alt="Use TGVideoDown with Telegram Web in Chrome"
              class="h-auto w-full object-contain"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              The downloader workflow happens in Chrome while Telegram Web is open.
            </figcaption>
          </figure>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Safety notes</h2>
            <p class="leading-relaxed">
              Avoid websites that ask for your Telegram password or claim to unlock content you cannot access. Use TGVideoDown
              for personal backup and organization, respect copyright, and follow the rules of the Telegram groups or channels
              you belong to.
            </p>
          </section>

          <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">Next reads</h2>
            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink :to="localePath('/telegram-video-downloader')" class="font-semibold text-primary hover:underline">
                Telegram Video Downloader
              </NuxtLink>
              <NuxtLink :to="localePath('/telegram-video-downloader-chrome-extension-guide')" class="font-semibold text-primary hover:underline">
                Chrome extension guide
              </NuxtLink>
              <NuxtLink :to="localePath('/download-telegram-files-without-login')" class="font-semibold text-primary hover:underline">
                Download files without login
              </NuxtLink>
              <NuxtLink :to="localePath('/download-telegram-private-video')" class="font-semibold text-primary hover:underline">
                Private and restricted videos
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgInstall from '~/assets/8.png'
import imgWorkflow from '~/assets/11.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl
const canonical = `${siteUrl}/how-to-download-telegram-videos`

const steps = [
  {
    number: 'Step 1',
    title: 'Install TGVideoDown in Chrome',
    description: 'Open the Chrome Web Store listing and add the Telegram Video Downloader extension to Chrome.'
  },
  {
    number: 'Step 2',
    title: 'Open Telegram Web',
    description: 'Go to official Telegram Web in Chrome and open the chat, channel, or group where the video appears.'
  },
  {
    number: 'Step 3',
    title: 'Choose the video or files',
    description: 'Use the extension controls to select the Telegram video, image, audio, or file you want to save.'
  },
  {
    number: 'Step 4',
    title: 'Save locally',
    description: 'Download to your computer through Chrome, using single or batch selection when available.'
  }
]

useSeoMeta({
  title: 'How to Download Telegram Videos - TGVideoDown Guide',
  description:
    'Learn how to download Telegram videos with TGVideoDown, a Telegram Video Downloader Chrome extension. Install, open Telegram Web, select videos or files, and save locally.',
  ogTitle: 'How to Download Telegram Videos',
  ogDescription:
    'Step-by-step guide for downloading Telegram videos and files with the TGVideoDown Chrome extension.',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
  keywords:
    'how to download telegram videos, download telegram video, telegram video downloader, TGVideoDown, telegram chrome extension'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Download Telegram Videos',
        description:
          'Step-by-step guide for downloading Telegram videos with the TGVideoDown Chrome extension.',
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
        '@type': 'HowTo',
        name: 'How to Download Telegram Videos',
        totalTime: 'PT3M',
        tool: [
          {
            '@type': 'HowToTool',
            name: 'TGVideoDown Chrome Extension'
          }
        ],
        step: steps.map((step) => ({
          '@type': 'HowToStep',
          name: step.title,
          text: step.description
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
            item: `${siteUrl}/telegram-video-downloader`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'How to Download Telegram Videos',
            item: canonical
          }
        ]
      })
    }
  ]
})
</script>
