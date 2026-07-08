<template>
  <section class="rounded-lg border border-primary/20 bg-primary-50/70 p-5 shadow-sm md:p-6">
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">{{ eyebrow }}</p>
    <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ title }}</h2>
    <p class="mb-5 max-w-2xl leading-relaxed text-gray-700">
      {{ description }}
    </p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <a
        :href="extensionStoreUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary text-center"
      >
        {{ primaryLabel }}
      </a>
      <NuxtLink :to="localePath(secondaryPath)" class="btn-outline text-center">
        {{ secondaryLabel }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: 'Get TGVideoDown'
  },
  title: {
    type: String,
    default: 'Ready to download Telegram videos?'
  },
  description: {
    type: String,
    default:
      'Install TGVideoDown, open Telegram Web in Chrome, and save videos or files you are allowed to access.'
  },
  secondaryLabel: {
    type: String,
    default: 'Read setup guide'
  },
  primaryLabel: {
    type: String,
    default: 'Install from Chrome Web Store'
  },
  secondaryPath: {
    type: String,
    default: '/telegram-video-downloader-chrome-extension-guide'
  }
})

const config = useRuntimeConfig()
const localePath = useLocalePath()
const extensionStoreUrl = config.public.extensionStoreUrl
</script>
