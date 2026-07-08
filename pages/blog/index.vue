<template>
  <div class="pt-16 bg-white">
    <section class="section-padding bg-gradient-to-b from-primary-50/60 to-white">
      <div class="container-custom">
        <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ copy.index.eyebrow }}</p>
            <h1 class="mb-6 text-4xl font-heading font-bold leading-tight text-text md:text-5xl">
              {{ copy.index.title }}
            </h1>
            <p class="mb-8 max-w-2xl text-lg leading-relaxed text-gray-700">
              {{ copy.index.intro }}
            </p>
            <div class="flex flex-col gap-3 sm:flex-row">
              <NuxtLink :to="localePath('/blog/telegram-video-downloader-guide')" class="btn-primary text-center">
                {{ copy.index.primaryCta }}
              </NuxtLink>
              <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-outline text-center">
                {{ copy.common.install }}
              </a>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="article in featuredArticles"
              :key="article.path"
              class="rounded-lg border border-border bg-white p-5 shadow-sm"
            >
              <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">{{ article.category }}</p>
              <h2 class="mb-3 text-xl font-heading font-bold text-text">{{ article.title }}</h2>
              <p class="mb-4 text-sm leading-relaxed text-gray-600">{{ article.description }}</p>
              <NuxtLink :to="localePath(article.path)" class="font-semibold text-primary hover:underline">
                {{ copy.common.readGuide }}
              </NuxtLink>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="mb-10 max-w-3xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ copy.index.allEyebrow }}</p>
          <h2 class="mb-4 text-3xl font-heading font-bold text-text">{{ copy.index.allTitle }}</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ copy.index.allIntro }}
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="article in articles"
            :key="article.path"
            class="rounded-lg border border-border bg-white p-5 shadow-sm"
          >
            <p class="mb-2 text-sm font-semibold text-primary">{{ article.intent }}</p>
            <h3 class="mb-3 text-xl font-heading font-semibold text-text">{{ article.title }}</h3>
            <p class="mb-5 leading-relaxed text-gray-600">{{ article.description }}</p>
            <NuxtLink :to="localePath(article.path)" class="font-semibold text-primary hover:underline">
              {{ copy.common.openArticle }}
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-slate-50">
      <div class="container-custom max-w-4xl">
        <ArticleInstallCta
          :title="copy.index.ctaTitle"
          :description="copy.index.ctaDescription"
          :primary-label="copy.common.installStore"
          :secondary-label="copy.index.ctaSecondary"
          secondary-path="/how-to-download-telegram-videos"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { getBlogLocaleContent } from '~/data/blogLocaleContent'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl
const copy = computed(() => getBlogLocaleContent(locale.value))
const articles = computed(() => copy.value.index.articles)
const featuredArticles = computed(() => articles.value.slice(0, 4))
const canonical = computed(() => `${siteUrl}${localePath('/blog/')}`)

useSeoMeta({
  title: () => copy.value.index.seoTitle,
  description: () => copy.value.index.seoDescription,
  ogTitle: () => copy.value.index.seoTitle,
  ogDescription: () => copy.value.index.seoDescription,
  ogUrl: () => canonical.value,
  twitterCard: 'summary_large_image',
  keywords:
    'telegram video downloader blog, how to download telegram video, telegram web download files, download telegram private channel video'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: copy.value.index.seoTitle,
          url: canonical.value,
          description: copy.value.index.schemaDescription
        })
    },
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: articles.value.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: article.title,
            url: `${siteUrl}${localePath(article.path)}`
          }))
        })
    },
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: copy.value.index.breadcrumb,
              item: canonical.value
            }
          ]
        })
    }
  ]
})
</script>
