<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 via-white to-white">
      <div class="container-custom max-w-xl mx-auto text-center">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {{ $t('tgUninstall.kicker') }}
        </p>
        <img
          src="/logo.png"
          alt="Telegram Video Downloader"
          width="128"
          height="128"
          class="w-16 h-16 mx-auto mb-4 rounded-2xl"
        />
        <h1 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4 leading-tight">
          {{ $t('tgUninstall.title') }}
        </h1>
        <p class="text-gray-600 leading-relaxed mb-8">
          {{ $t('tgUninstall.lead') }}
        </p>
        <a
          :href="storeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary inline-flex items-center justify-center min-h-11 px-8"
        >
          {{ $t('tgUninstall.cta') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const localePath = useLocalePath()
const { t } = useI18n()

const storeUrl = config.public.extensionStoreUrl

const canonical = computed(
  () => `${config.public.siteUrl}${localePath('/uninstall')}`,
)

useSeoMeta({
  title: () => t('tgUninstall.seoTitle'),
  description: () => t('tgUninstall.seoDescription'),
  robots: 'noindex, nofollow',
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))
</script>
