<template>
  <div class="pt-16">
    <!-- Hero -->
    <section class="section-padding bg-gradient-to-b from-primary-50 via-white to-white">
      <div class="container-custom max-w-4xl mx-auto text-center">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {{ $t('facebookPage.badge') }}
        </p>
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-text mb-6 leading-tight">
          {{ $t('facebookPage.title') }}
        </h1>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-4 max-w-3xl mx-auto">
          {{ $t('facebookPage.heroLead') }}
        </p>
        <p class="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          {{ $t('facebookPage.heroSub') }}
        </p>
        <a
          :href="facebookStoreUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {{ $t('facebookPage.ctaInstall') }}
        </a>
      </div>
    </section>

    <!-- Intro -->
    <section class="pb-12 md:pb-16">
      <div class="container-custom max-w-3xl mx-auto">
        <p class="text-gray-700 leading-relaxed text-center">
          {{ $t('facebookPage.intro') }}
        </p>
        <figure class="mt-10 rounded-xl overflow-hidden border border-border bg-white shadow-sm">
          <img
            :src="imgHero"
            :alt="$t('facebookPage.heroImgAlt')"
            class="w-full h-auto object-contain bg-gray-50"
            loading="eager"
            width="1200"
            height="675"
          />
        </figure>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="section-padding bg-gradient-to-b from-white to-primary-50/30">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
          {{ $t('facebookPage.whyTitle') }}
        </h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          {{ $t('facebookPage.whyIntro') }}
        </p>
        <ul class="space-y-3 text-gray-700">
          <li v-for="(item, i) in whyItems" :key="i" class="flex gap-3">
            <span class="text-green-600 font-bold shrink-0">✔</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto space-y-14">
        <div>
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-6">
            {{ $t('facebookPage.featuresTitle') }}
          </h2>
        </div>

        <div>
          <h3 class="text-xl font-heading font-semibold text-text mb-3">
            {{ $t('facebookPage.videosTitle') }}
          </h3>
          <p class="text-gray-700 mb-4">{{ $t('facebookPage.videosIntro') }}</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li v-for="(item, i) in videoSources" :key="i">{{ item }}</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-heading font-semibold text-text mb-3">
            {{ $t('facebookPage.imagesTitle') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('facebookPage.imagesBody') }}
          </p>
        </div>

        <div>
          <h3 class="text-xl font-heading font-semibold text-text mb-3">
            {{ $t('facebookPage.embeddedTitle') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('facebookPage.embeddedBody') }}
          </p>
        </div>

        <div>
          <h3 class="text-xl font-heading font-semibold text-text mb-3">
            {{ $t('facebookPage.qualityTitle') }}
          </h3>
          <p class="text-gray-700 mb-4">{{ $t('facebookPage.qualityIntro') }}</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li v-for="(item, i) in qualityOptions" :key="i">{{ item }}</li>
          </ul>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('facebookPage.qualityOutro') }}
          </p>
        </div>

        <div>
          <h3 class="text-xl font-heading font-semibold text-text mb-3">
            {{ $t('facebookPage.progressTitle') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('facebookPage.progressBody') }}
          </p>
        </div>

        <div>
          <h3 class="text-xl font-heading font-semibold text-text mb-3">
            {{ $t('facebookPage.designedTitle') }}
          </h3>
          <p class="text-gray-700 mb-4">{{ $t('facebookPage.designedIntro') }}</p>
          <p class="text-gray-700 font-medium">{{ $t('facebookPage.designedTags') }}</p>
        </div>
      </div>
    </section>

    <!-- Who Is It For -->
    <section class="section-padding bg-gradient-to-b from-primary-50/30 to-white">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
          {{ $t('facebookPage.whoTitle') }}
        </h2>
        <p class="text-gray-700 mb-6">{{ $t('facebookPage.whoIntro') }}</p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li
            v-for="(item, i) in whoItems"
            :key="i"
            class="rounded-xl border border-border bg-white px-4 py-3 text-gray-700 shadow-sm"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-6">
          {{ $t('facebookPage.benefitsTitle') }}
        </h2>
        <ul class="space-y-2 text-gray-700">
          <li v-for="(item, i) in benefitsItems" :key="i" class="flex gap-3">
            <span class="text-primary shrink-0">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- How to Use -->
    <section class="section-padding bg-gradient-to-b from-white to-primary-50/25">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-8 text-center">
          {{ $t('facebookPage.howTitle') }}
        </h2>
        <ol class="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li v-for="(step, i) in howSteps" :key="i">{{ step }}</li>
        </ol>
        <p class="text-sm text-gray-600 mb-10 text-center">
          <strong>{{ $t('facebookPage.howTip') }}</strong> {{ $t('facebookPage.howTipBody') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <figure v-for="(step, i) in howToSteps" :key="i" class="text-center">
            <div class="rounded-xl overflow-hidden border border-border bg-white shadow-sm mb-3">
              <img
                :src="step.img"
                :alt="step.alt"
                class="w-full h-auto object-contain bg-gray-50"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
            <figcaption class="text-sm text-gray-600">{{ step.caption }}</figcaption>
          </figure>
        </div>

        <div class="mt-12 text-center">
          <a
            :href="facebookStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary px-8 py-4 inline-flex items-center gap-2"
          >
            {{ $t('facebookPage.ctaGet') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Privacy -->
    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
          {{ $t('facebookPage.privacyTitle') }}
        </h2>
        <p class="text-gray-700 mb-6">{{ $t('facebookPage.privacyIntro') }}</p>
        <ul class="space-y-3 text-gray-700 mb-6">
          <li v-for="(item, i) in privacyItems" :key="i" class="flex gap-3">
            <span class="text-green-600 font-bold shrink-0">✔</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('facebookPage.privacyOutro') }}
        </p>
      </div>
    </section>

    <!-- Notice -->
    <section class="pb-16 md:pb-24">
      <div class="container-custom max-w-3xl mx-auto">
        <div class="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-950 text-sm leading-relaxed">
          <p class="font-semibold mb-2">{{ $t('facebookPage.noticeTitle') }}</p>
          <p class="mb-3">{{ $t('facebookPage.noticeBody1') }}</p>
          <p>{{ $t('facebookPage.noticeBody2') }}</p>
        </div>

        <p class="mt-10 pt-6 border-t border-border text-center text-sm text-gray-600">
          <a
            :href="facebookStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary font-semibold hover:underline"
          >
            {{ $t('facebookPage.storeLink') }}
          </a>
          ·
          <NuxtLink :to="localePath('/')" class="text-primary font-semibold hover:underline">
            {{ $t('facebookPage.homeLink') }}
          </NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import imgHero from '~/assets/facebook/Telegram Download.webp'
import imgStep1 from '~/assets/facebook/step1.webp'
import imgStep2 from '~/assets/facebook/step2.webp'
import imgStep3 from '~/assets/facebook/step3.webp'

const config = useRuntimeConfig()
const facebookStoreUrl = config.public.facebookExtensionStoreUrl
const localePath = useLocalePath()
const siteUrl = config.public.siteUrl
const { t, tm, locale } = useI18n()

/** tm() returns compiled AST for JSON arrays — use indexed t() for display strings */
function i18nList(key) {
  return computed(() => {
    void locale.value
    const raw = tm(key)
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => t(`${key}.${i}`))
  })
}

const whyItems = i18nList('facebookPage.whyItems')
const videoSources = i18nList('facebookPage.videoSources')
const qualityOptions = i18nList('facebookPage.qualityOptions')
const whoItems = i18nList('facebookPage.whoItems')
const benefitsItems = i18nList('facebookPage.benefitsItems')
const howSteps = i18nList('facebookPage.howSteps')
const privacyItems = i18nList('facebookPage.privacyItems')

const howToSteps = computed(() => [
  {
    img: imgStep1,
    alt: t('facebookPage.steps.1.alt'),
    caption: t('facebookPage.steps.1.caption')
  },
  {
    img: imgStep2,
    alt: t('facebookPage.steps.2.alt'),
    caption: t('facebookPage.steps.2.caption')
  },
  {
    img: imgStep3,
    alt: t('facebookPage.steps.3.alt'),
    caption: t('facebookPage.steps.3.caption')
  }
])

const canonical = computed(() => `${siteUrl}${localePath('/facebook-video-download')}`)

useSeoMeta({
  title: () => t('facebookPage.seo.title'),
  description: () => t('facebookPage.seo.description'),
  ogTitle: () => t('facebookPage.seo.ogTitle'),
  ogDescription: () => t('facebookPage.seo.ogDescription'),
  ogUrl: () => canonical.value,
  keywords: () => t('facebookPage.seo.keywords')
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>
