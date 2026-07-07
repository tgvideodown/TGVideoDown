<template>
  <div class="pt-16">
    <article class="section-padding bg-white">
      <div class="container-custom max-w-3xl mx-auto">
        <header class="mb-12 text-center">
          <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Tutorial</p>
          <h1 class="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
            How to Download Telegram Video (with the Chrome extension)
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed">
            This site is a <strong>companion to the Telegram Media Downloader Chrome extension</strong> — there is no online “paste link”
            downloader here. Below is how to save videos and other media using the extension in Chrome, in line with the product description on the Chrome Web Store.
          </p>
        </header>

        <div class="text-gray-700 space-y-6 leading-relaxed">
          <p>
            <strong>Telegram Media Downloader</strong> is a free, fast Chrome extension that helps you save videos, images, audio, and files from
            Telegram to your computer. It supports one-click and batch selection, with no login required on this website. Use it for personal
            organization and backup — and only for content you are allowed to save.
          </p>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Step 1 — Install from the Chrome Web Store</h2>
          <p>
            Open the store listing and add the extension to Chrome. This companion site only links to the store; it does not run downloads itself.
          </p>
          <figure class="my-8 rounded-xl overflow-hidden border border-border bg-white shadow-sm">
            <img
              :src="imgStep1"
              alt="Install the Chrome extension from the store"
              class="w-full h-auto object-contain bg-gray-50"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="px-4 py-3 text-sm text-gray-600 bg-gray-100">
              Figure 1 — Install the extension; downloads happen in the browser, not on this domain.
            </figcaption>
          </figure>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Step 2 — Open Telegram Web in Chrome</h2>
          <p>
            Go to the official Telegram Web experience in Chrome and sign in using Telegram’s normal login flow. Never enter your Telegram password
            on unrelated third-party sites.
          </p>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Step 3 — Save video or other media</h2>
          <p>
            Navigate to the channel, group, or chat where the media appears. Use the extension’s actions to download a single file or select multiple
            items for batch saving — matching the “one-click / batch” and multi-type support described for the product.
          </p>
          <figure class="my-8 rounded-xl overflow-hidden border border-border bg-gray-50">
            <img
              :src="imgStep2"
              alt="Use the extension on Telegram Web"
              class="w-full h-auto object-contain"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="px-4 py-3 text-sm text-gray-600 bg-gray-100">
              Figure 2 — Use the extension while viewing Telegram in Chrome (illustrative screenshot).
            </figcaption>
          </figure>

          <h2 class="text-2xl font-heading font-bold text-text pt-4">Private channels and large files</h2>
          <p>
            For content you can only see while logged in, the extension works in the browser session where Telegram already shows the media. Large
            files (including 1GB+) are supported when your connection allows. For more context see
            <NuxtLink :to="localePath('/download-telegram-private-video')" class="text-primary font-semibold hover:underline">private / restricted videos</NuxtLink>
            and the
            <NuxtLink :to="localePath('/telegram-video-downloader-chrome-extension-guide')" class="text-primary font-semibold hover:underline">Chrome extension guide</NuxtLink>.
          </p>

          <p class="pt-6 border-t border-border">
            <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline">Chrome Web Store — TGVideoDown</a>
            ·
            <NuxtLink :to="localePath('/telegram-video-downloader')" class="text-primary font-semibold hover:underline">Telegram Video Downloader</NuxtLink>
            ·
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
import imgStep1 from '~/assets/8.png'
import imgStep2 from '~/assets/11.png'

const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const canonical = `${siteUrl}/how-to-download-telegram-videos`

useSeoMeta({
  title: 'How to Download Telegram Videos - TGVideoDown Guide',
  description:
    'Companion tutorial for Telegram Media Downloader: install the Chrome extension, use Telegram Web, save videos and files locally. No online downloader on this site.',
  ogTitle: 'How to Download Telegram Videos',
  ogDescription: 'Step-by-step for the TGVideoDown Chrome extension — companion site, not an online parser.',
  ogUrl: canonical
})

useHead({
  link: [{ rel: 'canonical', href: canonical }]
})
</script>
