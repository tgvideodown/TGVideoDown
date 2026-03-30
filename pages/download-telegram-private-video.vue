<template>
  <div class="pt-16">
    <article class="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div class="container-custom max-w-3xl mx-auto">
        <header class="mb-12 text-center">
          <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Advanced</p>
          <h1 class="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
            Private Telegram Video (extension in Chrome)
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed">
            This page is part of the <strong>Telegram Media Downloader</strong> companion site. Saving media you can only see after logging into Telegram
            is best done <strong>inside the browser</strong> where you already use Telegram Web — not by pasting links into a third-party “online downloader.”
          </p>
        </header>

        <div class="text-gray-700 space-y-6 leading-relaxed">
          <div class="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm">
            <strong>Important:</strong> Only save media you are allowed to access. Respect group rules, copyright, and Telegram’s Terms of Service.
          </div>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Why a companion site doesn’t “paste” private links</h2>
          <p>
            A marketing site that doesn’t run its own parser cannot see your private chats. The Chrome extension, by design, works while you browse
            Telegram in Chrome — where your session already has access. That matches the product positioning: free, fast, one-click or batch, no login on
            this website.
          </p>

          <figure class="my-8 rounded-xl overflow-hidden border border-border bg-white shadow-sm">
            <img
              :src="imgFig"
              alt="Telegram Web with extension for private media"
              class="w-full h-auto object-contain bg-gray-50"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="px-4 py-3 text-sm text-gray-600">
              Figure 1 — Use Telegram Web in Chrome with the extension; avoid unknown sites that ask for your Telegram password.
            </figcaption>
          </figure>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Recommended flow</h2>
          <ol class="list-decimal pl-6 space-y-3">
            <li>Install <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline">Telegram Media Downloader from the Chrome Web Store</a>.</li>
            <li>Open Telegram Web in Chrome and complete Telegram’s official login.</li>
            <li>Open the private chat or channel where you have permission to view the video.</li>
            <li>Use the extension to download — single file or batch, as supported by the product.</li>
            <li>Store files responsibly if the content is sensitive.</li>
          </ol>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Safety</h2>
          <p>
            Do not type your Telegram password into random websites. This companion domain is for documentation and store links only; downloading is
            handled by the extension in Chrome when you use Telegram Web.
          </p>

          <p class="pt-6 border-t border-border">
            Related:
            <NuxtLink :to="localePath('/how-to-download-telegram-video')" class="text-primary font-semibold hover:underline">How to download Telegram video</NuxtLink>
            ·
            <NuxtLink :to="localePath('/telegram-video-download-guide')" class="text-primary font-semibold hover:underline">Download guide</NuxtLink>
            ·
            <NuxtLink :to="localePath('/download')" class="text-primary font-semibold hover:underline">Install</NuxtLink>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgFig from '~/assets/9.png'

const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const canonical = `${siteUrl}/download-telegram-private-video`

useSeoMeta({
  title: 'Private Telegram Video | Chrome Extension (TGVideoDown)',
  description:
    'Why private Telegram video is handled in Chrome with the extension — not via an online paste box. Safe workflow with Telegram Web.',
  ogTitle: 'Private Telegram Video',
  ogDescription: 'Companion site for Telegram Media Downloader — use Telegram Web + extension.',
  ogUrl: canonical
})

useHead({
  link: [{ rel: 'canonical', href: canonical }]
})
</script>
