<template>
  <div class="pt-16 bg-white" :dir="common.dir">
    <article class="section-padding bg-gradient-to-b from-primary-50/50 to-white">
      <div class="container-custom max-w-5xl">
        <header class="mb-12 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ page.eyebrow }}</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            {{ page.title }}
          </h1>
          <p class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            {{ page.intro }}
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {{ common.updated }} <time :datetime="common.dateMachine">{{ common.dateText }}</time>
          </p>
        </header>

        <div class="space-y-10 text-gray-700">
          <section class="rounded-lg border border-border bg-white p-5 shadow-sm md:p-6">
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ page.shortTitle }}</h2>
            <p class="leading-relaxed">{{ page.shortText }}</p>
          </section>

          <div class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-border text-left">
                <thead class="bg-slate-50">
                  <tr>
                    <th class="px-4 py-3 text-sm font-semibold text-text">{{ page.columns.need }}</th>
                    <th class="px-4 py-3 text-sm font-semibold text-text">{{ page.columns.telegram }}</th>
                    <th class="px-4 py-3 text-sm font-semibold text-text">{{ page.columns.whatsapp }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border">
                  <tr v-for="row in page.comparisonRows" :key="row.need">
                    <td class="px-4 py-4 align-top font-semibold text-text">{{ row.need }}</td>
                    <td class="px-4 py-4 align-top leading-relaxed text-gray-700">{{ row.telegram }}</td>
                    <td class="px-4 py-4 align-top leading-relaxed text-gray-700">{{ row.whatsapp }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <ArticleInstallCta
            :eyebrow="page.ctaEyebrow"
            :title="page.ctaTitle"
            :description="page.ctaDescription"
            :primary-label="common.installStore"
            :secondary-label="page.ctaSecondary"
            secondary-path="/how-to-download-telegram-videos"
          />

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ page.telegramTitle }}</h2>
            <div class="grid gap-4 md:grid-cols-2">
              <article v-for="item in page.telegramStrengths" :key="item.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ item.title }}</h3>
                <p class="leading-relaxed text-gray-600">{{ item.description }}</p>
              </article>
            </div>
          </section>

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ page.whatsappTitle }}</h2>
            <div class="grid gap-4 md:grid-cols-2">
              <article v-for="item in page.whatsappStrengths" :key="item.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ item.title }}</h3>
                <p class="leading-relaxed text-gray-600">{{ item.description }}</p>
              </article>
            </div>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.workflowTitle }}</h2>
            <ol class="list-decimal space-y-3 pl-6 leading-relaxed">
              <li v-for="item in page.workflowSteps" :key="item">{{ item }}</li>
            </ol>
          </section>

          <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.relatedTitle }}</h2>
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
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { getTelegramPageLocaleContent } from '~/data/telegramArticleLocaleContent'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl

const content = computed(() => getTelegramPageLocaleContent(locale.value))
const page = computed(() => content.value.comparison)
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
          { '@type': 'ListItem', position: 2, name: common.value.blog, item: `${siteUrl}${localePath('/blog/')}` },
          { '@type': 'ListItem', position: 3, name: page.value.title, item: canonical.value }
        ]
      })
    }
  ]
}))
</script>
