<template>
  <div class="pt-16 bg-white" :dir="common.dir">
    <section class="section-padding bg-gradient-to-b from-primary-50/50 to-white">
      <div class="container-custom">
        <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ page.eyebrow }}</p>
            <h1 class="mb-6 text-4xl font-heading font-bold leading-tight text-text md:text-5xl">
              {{ page.title }}
            </h1>
            <p class="mb-8 max-w-2xl text-lg leading-relaxed text-gray-700">
              {{ page.intro }}
            </p>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-center">
                {{ common.installStore }}
              </a>
              <NuxtLink :to="localePath('/how-to-download-telegram-videos')" class="btn-outline text-center">
                {{ page.ctaSecondary }}
              </NuxtLink>
            </div>
          </div>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="imgOverview"
              :alt="page.imageAlt"
              class="h-auto w-full object-contain"
              width="800"
              height="450"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              {{ page.caption }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="mb-10 max-w-3xl">
          <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.whyTitle }}</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ page.whyText }}
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="feature in page.features" :key="feature.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
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
            <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ page.workflowEyebrow }}</p>
            <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.workflowTitle }}</h2>
            <p class="leading-relaxed text-gray-700">
              {{ page.workflowText }}
            </p>
          </div>

          <ol class="grid gap-4 md:grid-cols-3">
            <li v-for="step in page.steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
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
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ page.guidesEyebrow }}</p>
          <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.guidesTitle }}</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ page.guidesIntro }}
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article v-for="article in page.guideArticles" :key="article.path" class="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h3 class="mb-3 text-xl font-heading font-semibold text-text">{{ article.title }}</h3>
            <p class="mb-4 leading-relaxed text-gray-600">{{ article.description }}</p>
            <NuxtLink :to="localePath(article.path)" class="font-semibold text-primary hover:underline">
              {{ common.readGuide }}
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom max-w-4xl">
        <h2 class="mb-8 text-3xl font-heading font-bold text-text">{{ page.faqTitle }}</h2>
        <div class="divide-y divide-border rounded-lg border border-border bg-white">
          <div v-for="faq in page.faqs" :key="faq.question" class="p-5">
            <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ faq.question }}</h3>
            <p class="leading-relaxed text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getTelegramPageLocaleContent } from '~/data/telegramArticleLocaleContent'
import imgOverview from '~/assets/10.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl

const content = computed(() => getTelegramPageLocaleContent(locale.value))
const page = computed(() => content.value.downloader)
const common = computed(() => content.value.common)
const canonical = computed(() => `${siteUrl}${localePath(page.value.path)}`)

useSeoMeta({
  title: () => page.value.seoTitle,
  description: () => page.value.seoDescription,
  ogTitle: () => page.value.ogTitle,
  ogDescription: () => page.value.ogDescription,
  ogUrl: () => canonical.value,
  twitterCard: 'summary_large_image',
  keywords: () => page.value.keywords
})

useHead(() => ({
  htmlAttrs: { dir: common.value.dir },
  link: [{ rel: 'canonical', href: canonical.value }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'TGVideoDown',
        applicationCategory: 'BrowserApplication',
        operatingSystem: 'Chrome',
        url: canonical.value,
        downloadUrl: extensionStoreUrl,
        description: page.value.seoDescription,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.value.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: common.value.home, item: `${siteUrl}${localePath('/')}` },
          { '@type': 'ListItem', position: 2, name: page.value.title, item: canonical.value }
        ]
      })
    }
  ]
}))
</script>
