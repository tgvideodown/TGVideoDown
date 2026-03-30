<template>
  <div class="pt-16">
    <article class="section-padding bg-gradient-to-b from-primary-50/40 to-white">
      <div class="container-custom max-w-3xl mx-auto">
        <header class="mb-12 text-center">
          <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Guide</p>
          <h1 class="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
            Telegram Video Download Guide (Chrome extension)
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed">
            <strong>TGVideoDown.com</strong> is a companion site for the <strong>Telegram Media Downloader</strong> Chrome extension listed on the store.
            There is no standalone “online downloader” feature on this domain — the product is the extension: free, fast, one-click and batch, supporting
            video, images, GIFs, music, audiobooks, and files, with stable large-file downloads when conditions allow.
          </p>
        </header>

        <div class="text-gray-700 space-y-6 leading-relaxed">
          <h2 class="text-2xl font-heading font-bold text-text pt-4">What you get</h2>
          <p>
            The extension helps you save Telegram media to your local computer for personal use and organization. The same feature bullets you see on the
            store — free without login on our site, batch selection, multiple media types, 1GB+ stability, simple UI, compatibility with common channel
            layouts — describe the extension, not a web form on this server.
          </p>

          <figure class="my-8 rounded-xl overflow-hidden border border-border bg-white shadow-sm">
            <img
              :src="imgGuide"
              alt="Telegram Media Downloader workflow overview"
              class="w-full h-auto object-contain bg-gray-50"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="px-4 py-3 text-sm text-gray-600">
              Figure 1 — Product workflow is experienced in Chrome with Telegram Web (illustrative).
            </figcaption>
          </figure>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Quick checklist</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Install from the <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline">Chrome Web Store</a>.</li>
            <li>Use Chrome and Telegram Web for the intended experience.</li>
            <li>Prefer Wi‑Fi for very large downloads.</li>
            <li>Only download content you are authorized to keep.</li>
          </ul>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">More articles</h2>
          <p>
            Step-by-step:
            <NuxtLink :to="localePath('/how-to-download-telegram-video')" class="text-primary font-semibold hover:underline">How to download Telegram video</NuxtLink>.
            Private or restricted contexts:
            <NuxtLink :to="localePath('/download-telegram-private-video')" class="text-primary font-semibold hover:underline">Private video notes</NuxtLink>.
          </p>

          <p class="pt-6 border-t border-border">
            <NuxtLink :to="localePath('/download')" class="text-primary font-semibold hover:underline">Install page</NuxtLink>
            ·
            <NuxtLink :to="localePath('/')" class="text-primary font-semibold hover:underline">Home</NuxtLink>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgGuide from '~/assets/10.png'

const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const canonical = `${siteUrl}/telegram-video-download-guide`

useSeoMeta({
  title: 'Telegram Video Download Guide | TGVideoDown Extension',
  description:
    'Overview of Telegram Media Downloader: Chrome extension for Telegram video and media — companion site, no online parser.',
  ogTitle: 'Telegram Video Download Guide',
  ogDescription: 'TGVideoDown companion site and Chrome extension overview.',
  ogUrl: canonical
})

useHead({
  link: [{ rel: 'canonical', href: canonical }]
})
</script>
