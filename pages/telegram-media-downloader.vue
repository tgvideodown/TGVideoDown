<template>
  <div class="pt-16 bg-white" :dir="common.dir">
    <section class="section-padding bg-gradient-to-b from-primary-50/80 to-white">
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
              <NuxtLink :to="localePath('/download-telegram-photos')" class="btn-outline text-center">
                {{ page.ctaSecondary }}
              </NuxtLink>
            </div>
            <p class="mt-5 text-sm text-gray-500">
              {{ common.updated }} <time :datetime="common.dateMachine">{{ common.dateText }}</time>
            </p>
          </div>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="imgMedia"
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
          <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.supportTitle }}</h2>
          <p class="text-lg leading-relaxed text-gray-700">{{ page.supportText }}</p>
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
        <div class="grid gap-10 lg:grid-cols-2">
          <section>
            <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.whyTitle }}</h2>
            <p class="leading-relaxed text-gray-700">{{ page.whyText }}</p>
          </section>

          <section>
            <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.batchTitle }}</h2>
            <p class="leading-relaxed text-gray-700">{{ page.batchText }}</p>
          </section>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ page.stepsTitle }}</h2>
            <p class="leading-relaxed text-gray-700">{{ page.ctaDescription }}</p>
          </div>

          <ol class="grid gap-4 md:grid-cols-2">
            <li v-for="step in page.steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
              <p class="mb-3 text-sm font-semibold text-primary">{{ step.number }}</p>
              <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ step.title }}</h3>
              <p class="text-sm leading-relaxed text-gray-600">{{ step.description }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <section>
            <h2 class="mb-5 text-3xl font-heading font-bold text-text">{{ page.mediaTitle }}</h2>
            <div class="grid gap-4 sm:grid-cols-2">
              <article v-for="media in page.mediaTypes" :key="media.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ media.title }}</h3>
                <p class="text-sm leading-relaxed text-gray-600">{{ media.description }}</p>
              </article>
            </div>
          </section>

          <ArticleInstallCta
            :eyebrow="common.getTgvideodown"
            :title="page.ctaTitle"
            :description="page.ctaDescription"
            :primary-label="common.installStore"
            :secondary-label="page.ctaSecondary"
            secondary-path="/download-telegram-photos"
          />
        </div>
      </div>
    </section>

    <section class="section-padding bg-slate-50">
      <div class="container-custom">
        <h2 class="mb-8 text-3xl font-heading font-bold text-text">{{ page.relatedTitle }}</h2>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="article in page.relatedLinks"
            :key="article.path"
            :to="localePath(article.path)"
            class="rounded-lg border border-border bg-white p-5 shadow-sm transition-colors duration-200 hover:border-primary cursor-pointer"
          >
            <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ article.title }}</h3>
            <p class="text-sm leading-relaxed text-gray-600">{{ article.description }}</p>
          </NuxtLink>
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
import imgMedia from '~/assets/10.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl

const content = computed(() => getTelegramPageLocaleContent(locale.value))
const page = computed(() => content.value.mediaDownloader)
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
        '@type': 'HowTo',
        name: page.value.title,
        totalTime: 'PT3M',
        tool: [{ '@type': 'HowToTool', name: 'TGVideoDown Chrome Extension' }],
        step: page.value.steps.map((step) => ({
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
          { '@type': 'ListItem', position: 2, name: content.value.articles.downloader.title, item: `${siteUrl}${localePath(content.value.articles.downloader.path)}` },
          { '@type': 'ListItem', position: 3, name: page.value.title, item: canonical.value }
        ]
      })
    }
  ]
}))
</script>
