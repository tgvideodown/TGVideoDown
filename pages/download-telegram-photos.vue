<template>
  <div class="pt-16 bg-white" :dir="common.dir">
    <article class="section-padding">
      <div class="container-custom max-w-4xl">
        <header class="mb-12 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ page.eyebrow }}</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            {{ page.title }}
          </h1>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ page.intro }}
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {{ common.updated }} <time :datetime="common.dateMachine">{{ common.dateText }}</time>
          </p>
        </header>

        <figure class="mb-10 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <img
            :src="imgPhotos"
            :alt="page.imageAlt"
            class="h-auto w-full object-contain"
            width="800"
            height="450"
          />
          <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
            {{ page.caption }}
          </figcaption>
        </figure>

        <div class="space-y-8 text-gray-700">
          <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.quickTitle }}</h2>
            <p class="leading-relaxed">{{ page.quickText }}</p>
          </section>

          <ArticleInstallCta
            :eyebrow="page.ctaEyebrow"
            :title="page.ctaTitle"
            :description="page.ctaDescription"
            :primary-label="common.installStore"
            :secondary-label="page.ctaSecondary"
            secondary-path="/telegram-media-downloader"
          />

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.whatTitle }}</h2>
            <p class="leading-relaxed">{{ page.whatText }}</p>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.albumsTitle }}</h2>
            <p class="leading-relaxed">{{ page.albumsText }}</p>
          </section>

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ page.stepsTitle }}</h2>
            <ol class="space-y-4">
              <li v-for="step in page.steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                <p class="mb-2 text-sm font-semibold text-primary">{{ step.number }}</p>
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ step.title }}</h3>
                <p class="leading-relaxed">{{ step.description }}</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.practicesTitle }}</h2>
            <ul class="list-disc space-y-2 pl-6 leading-relaxed">
              <li v-for="item in page.practices" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section class="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ page.relatedTitle }}</h2>
            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink
                v-for="article in page.relatedLinks"
                :key="article.path"
                :to="localePath(article.path)"
                class="font-semibold text-primary hover:underline"
              >
                {{ article.title }}
              </NuxtLink>
            </div>
          </section>

          <section>
            <h2 class="mb-6 text-2xl font-heading font-bold text-text">{{ page.faqTitle }}</h2>
            <div class="divide-y divide-border rounded-lg border border-border bg-white">
              <div v-for="faq in page.faqs" :key="faq.question" class="p-5">
                <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ faq.question }}</h3>
                <p class="leading-relaxed text-gray-700">{{ faq.answer }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { getTelegramPageLocaleContent } from '~/data/telegramArticleLocaleContent'
import imgPhotos from '~/assets/11.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl

const content = computed(() => getTelegramPageLocaleContent(locale.value))
const page = computed(() => content.value.photos)
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
        '@type': 'Article',
        headline: page.value.title,
        description: page.value.seoDescription,
        author: { '@type': 'Organization', name: 'TGVideoDown' },
        publisher: { '@type': 'Organization', name: 'TGVideoDown' },
        dateModified: common.value.dateMachine,
        mainEntityOfPage: canonical.value
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
          { '@type': 'ListItem', position: 2, name: content.value.articles.mediaDownloader.title, item: `${siteUrl}${localePath(content.value.articles.mediaDownloader.path)}` },
          { '@type': 'ListItem', position: 3, name: page.value.title, item: canonical.value }
        ]
      })
    }
  ]
}))
</script>
