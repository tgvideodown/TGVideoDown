<template>
  <div class="pt-16 bg-white" :dir="common.dir">
    <article class="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div class="container-custom max-w-4xl">
        <header class="mb-12 max-w-3xl">
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

        <div class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div class="space-y-8 text-gray-700">
            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.whatTitle }}</h2>
              <p class="leading-relaxed">{{ page.whatText }}</p>
            </section>

            <section>
              <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ page.featuresTitle }}</h2>
              <div class="grid gap-4 sm:grid-cols-2">
                <article v-for="feature in page.features" :key="feature.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ feature.title }}</h3>
                  <p class="text-sm leading-relaxed text-gray-600">{{ feature.description }}</p>
                </article>
              </div>
            </section>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.setupTitle }}</h2>
              <ol class="list-decimal space-y-3 pl-6 leading-relaxed">
                <li v-for="item in page.setupSteps" :key="item">{{ item }}</li>
              </ol>
            </section>

            <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
              <img
                :src="imgGuide"
                :alt="page.imageAlt"
                class="h-auto w-full object-contain"
                loading="lazy"
                width="800"
                height="450"
              />
              <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
                {{ page.caption }}
              </figcaption>
            </figure>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.privacyTitle }}</h2>
              <p class="leading-relaxed">{{ page.privacyText }}</p>
            </section>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ page.troubleshootingTitle }}</h2>
              <div class="space-y-4">
                <article v-for="item in page.troubleshooting" :key="item.problem" class="rounded-lg border border-border bg-white p-5">
                  <h3 class="mb-2 font-heading text-lg font-semibold text-text">{{ item.problem }}</h3>
                  <p class="leading-relaxed text-gray-600">{{ item.solution }}</p>
                </article>
              </div>
            </section>
          </div>

          <aside class="rounded-lg border border-border bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 class="mb-4 text-xl font-heading font-bold text-text">{{ page.guideLinksTitle }}</h2>
            <nav class="space-y-3">
              <NuxtLink
                v-for="article in page.guideLinks"
                :key="article.path"
                :to="localePath(article.path)"
                class="block font-semibold text-primary hover:underline"
              >
                {{ article.title }}
              </NuxtLink>
              <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="block font-semibold text-primary hover:underline">
                {{ common.chromeWebStore }}
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { getTelegramPageLocaleContent } from '~/data/telegramArticleLocaleContent'
import imgGuide from '~/assets/10.png'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl

const content = computed(() => getTelegramPageLocaleContent(locale.value))
const page = computed(() => content.value.extensionGuide)
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
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: common.value.home, item: `${siteUrl}${localePath('/')}` },
          {
            '@type': 'ListItem',
            position: 2,
            name: content.value.articles.downloader.title,
            item: `${siteUrl}${localePath(content.value.articles.downloader.path)}`
          },
          { '@type': 'ListItem', position: 3, name: page.value.title, item: canonical.value }
        ]
      })
    }
  ]
}))
</script>
