<template>
  <div class="pt-16 bg-white">
    <article class="section-padding">
      <div class="container-custom max-w-4xl">
        <header class="mb-12 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ guide.eyebrow }}</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            {{ guide.title }}
          </h1>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ guide.intro }}
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {{ copy.common.updated }} <time datetime="2026-07-08">{{ copy.common.dateText }}</time>
          </p>
        </header>

        <figure class="mb-10 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <img
            :src="imgGuide"
            :alt="guide.imageAlt"
            class="h-auto w-full object-contain"
            width="800"
            height="450"
          />
          <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
            {{ guide.caption }}
          </figcaption>
        </figure>

        <div class="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div class="space-y-8 text-gray-700">
            <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ guide.quickTitle }}</h2>
              <p class="leading-relaxed">
                {{ guide.quickText }}
              </p>
            </section>

            <ArticleInstallCta
              :title="guide.ctaTitle"
              :description="guide.ctaDescription"
              :primary-label="copy.common.installStore"
              :secondary-label="guide.ctaSecondary"
              secondary-path="/how-to-download-telegram-videos"
            />

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ guide.whatTitle }}</h2>
              <p class="leading-relaxed">
                {{ guide.whatText }}
              </p>
            </section>

            <section>
              <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ guide.howTitle }}</h2>
              <ol class="space-y-4">
                <li v-for="step in guide.steps" :key="step.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <p class="mb-2 text-sm font-semibold text-primary">{{ step.number }}</p>
                  <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ step.title }}</h3>
                  <p class="leading-relaxed">{{ step.description }}</p>
                </li>
              </ol>
            </section>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ guide.whyTitle }}</h2>
              <p class="leading-relaxed">
                {{ guide.whyText }}
              </p>
            </section>

            <section>
              <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ guide.useCasesTitle }}</h2>
              <div class="grid gap-4 sm:grid-cols-2">
                <article v-for="useCase in guide.useCases" :key="useCase.title" class="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ useCase.title }}</h3>
                  <p class="text-sm leading-relaxed text-gray-600">{{ useCase.description }}</p>
                </article>
              </div>
            </section>

            <section>
              <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ guide.troubleshootingTitle }}</h2>
              <div class="space-y-4">
                <article v-for="item in guide.troubleshooting" :key="item.problem" class="rounded-lg border border-border bg-white p-5">
                  <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ item.problem }}</h3>
                  <p class="leading-relaxed text-gray-600">{{ item.solution }}</p>
                </article>
              </div>
            </section>

            <section class="rounded-lg border border-border bg-white p-5 shadow-sm">
              <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ guide.relatedTitle }}</h2>
              <div class="grid gap-3 sm:grid-cols-2">
                <NuxtLink
                  v-for="related in guide.relatedGuides"
                  :key="related.path"
                  :to="localePath(related.path)"
                  class="font-semibold text-primary hover:underline"
                >
                  {{ related.title }}
                </NuxtLink>
              </div>
            </section>
          </div>

          <aside class="rounded-lg border border-border bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 class="mb-4 text-xl font-heading font-bold text-text">{{ guide.guideIndexTitle }}</h2>
            <nav class="space-y-3">
              <NuxtLink :to="localePath('/how-to-download-telegram-videos')" class="block font-semibold text-primary hover:underline">
                {{ guide.navHowTo }}
              </NuxtLink>
              <NuxtLink :to="localePath('/download-telegram-private-channel-video')" class="block font-semibold text-primary hover:underline">
                {{ guide.navPrivate }}
              </NuxtLink>
              <NuxtLink :to="localePath('/telegram-web-download-files')" class="block font-semibold text-primary hover:underline">
                {{ guide.navFiles }}
              </NuxtLink>
              <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="block font-semibold text-primary hover:underline">
                {{ copy.common.chromeWebStore }}
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgGuide from '~/assets/10.png'
import { getBlogLocaleContent } from '~/data/blogLocaleContent'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl
const extensionStoreUrl = config.public.extensionStoreUrl
const copy = computed(() => getBlogLocaleContent(locale.value))
const guide = computed(() => copy.value.guide)
const canonical = computed(() => `${siteUrl}${localePath('/blog/telegram-video-downloader-guide')}`)

useSeoMeta({
  title: () => guide.value.seoTitle,
  description: () => guide.value.seoDescription,
  ogTitle: () => guide.value.seoTitle,
  ogDescription: () => guide.value.seoDescription,
  ogUrl: () => canonical.value,
  twitterCard: 'summary_large_image',
  keywords:
    'telegram video downloader guide, how to download telegram video, download telegram videos, TGVideoDown, telegram web downloader'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.value.title,
          description: guide.value.schemaDescription,
          author: {
            '@type': 'Organization',
            name: 'TGVideoDown'
          },
          publisher: {
            '@type': 'Organization',
            name: 'TGVideoDown'
          },
          dateModified: '2026-07-08',
          mainEntityOfPage: canonical.value
        })
    },
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: guide.value.howToName,
          totalTime: 'PT3M',
          step: guide.value.steps.map((step) => ({
            '@type': 'HowToStep',
            name: step.title,
            text: step.description
          }))
        })
    },
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: guide.value.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
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
              item: `${siteUrl}${localePath('/blog/')}`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: guide.value.title,
              item: canonical.value
            }
          ]
        })
    }
  ]
})
</script>
