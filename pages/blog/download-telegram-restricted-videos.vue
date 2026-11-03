<template>
  <div class="pt-16 bg-white">
    <article class="section-padding">
      <div class="container-custom max-w-3xl">
        <header class="mb-12 text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{{ article.eyebrow }}</p>
          <h1 class="mb-6 text-3xl font-heading font-bold leading-tight text-text md:text-5xl">
            {{ article.title }}
          </h1>
          <p class="text-lg leading-relaxed text-gray-700">
            {{ article.intro }}
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {{ updatedLabel }}
            <time :datetime="meta.dateMachine">{{ dateLabel }}</time>
          </p>
        </header>

        <figure class="mb-10 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <img
            :src="figures[0].src"
            :alt="figures[0].alt"
            class="h-auto w-full object-cover max-h-[420px]"
            width="1400"
            height="900"
          />
          <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
            {{ figures[0].caption }}
            <span v-if="figures[0].credit" class="block text-xs text-gray-400 mt-1">{{ figures[0].credit }}</span>
          </figcaption>
        </figure>

        <div class="mb-10">
          <ArticleInstallCta
            :title="article.ctaTitle"
            :description="article.ctaDescription"
            :primary-label="installLabel"
            :secondary-label="article.ctaSecondary"
            secondary-path="/blog/telegram-video-downloader-guide"
          />
        </div>

        <div class="space-y-10 text-gray-700">
          <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ article.quickTitle }}</h2>
            <p class="leading-relaxed">{{ article.quickText }}</p>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ article.whyTitle }}</h2>
            <p class="mb-4 leading-relaxed">{{ article.whyLead }}</p>
            <ul class="list-disc space-y-2 pl-6 leading-relaxed">
              <li v-for="item in article.whyItems" :key="item">{{ item }}</li>
            </ul>
            <p class="mt-4 leading-relaxed">{{ article.whyClose }}</p>
          </section>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="figures[1].src"
              :alt="figures[1].alt"
              class="h-auto w-full object-cover max-h-[380px]"
              loading="lazy"
              width="1400"
              height="900"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              {{ figures[1].caption }}
              <span v-if="figures[1].credit" class="block text-xs text-gray-400 mt-1">{{ figures[1].credit }}</span>
            </figcaption>
          </figure>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ article.scenesTitle }}</h2>
            <p class="mb-6 leading-relaxed">{{ article.scenesIntro }}</p>
            <div class="space-y-6">
              <article
                v-for="scene in article.scenes"
                :key="scene.title"
                class="rounded-lg border border-border bg-white p-5 shadow-sm"
              >
                <h3 class="mb-3 text-xl font-heading font-semibold text-text">{{ scene.title }}</h3>
                <p class="leading-relaxed">{{ scene.body }}</p>
              </article>
            </div>
          </section>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="figures[2].src"
              :alt="figures[2].alt"
              class="h-auto w-full object-contain"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              {{ figures[2].caption }}
            </figcaption>
          </figure>

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ article.stepsTitle }}</h2>
            <ol class="space-y-4">
              <li
                v-for="step in article.steps"
                :key="step.title"
                class="rounded-lg border border-border bg-white p-5 shadow-sm"
              >
                <p class="mb-2 text-sm font-semibold text-primary">{{ step.number }}</p>
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ step.title }}</h3>
                <p class="leading-relaxed">{{ step.description }}</p>
              </li>
            </ol>
          </section>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="figures[3].src"
              :alt="figures[3].alt"
              class="h-auto w-full object-cover max-h-[380px]"
              loading="lazy"
              width="1400"
              height="900"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              {{ figures[3].caption }}
              <span v-if="figures[3].credit" class="block text-xs text-gray-400 mt-1">{{ figures[3].credit }}</span>
            </figcaption>
          </figure>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ article.compareTitle }}</h2>
            <p class="mb-4 leading-relaxed">{{ article.compareLead }}</p>
            <div class="grid gap-4 sm:grid-cols-3">
              <article
                v-for="row in article.compareRows"
                :key="row.title"
                class="rounded-lg border border-border bg-white p-5 shadow-sm"
              >
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ row.title }}</h3>
                <p class="text-sm leading-relaxed text-gray-600">{{ row.body }}</p>
              </article>
            </div>
          </section>

          <figure class="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <img
              :src="figures[4].src"
              :alt="figures[4].alt"
              class="h-auto w-full object-contain"
              loading="lazy"
              width="800"
              height="450"
            />
            <figcaption class="border-t border-border bg-gray-50 px-4 py-3 text-sm text-gray-600">
              {{ figures[4].caption }}
            </figcaption>
          </figure>

          <section>
            <h2 class="mb-4 text-2xl font-heading font-bold text-text">{{ article.faqTitle }}</h2>
            <div class="space-y-4">
              <article
                v-for="faq in article.faqs"
                :key="faq.question"
                class="rounded-lg border border-border bg-white p-5"
              >
                <h3 class="mb-2 text-lg font-heading font-semibold text-text">{{ faq.question }}</h3>
                <p class="leading-relaxed text-gray-600">{{ faq.answer }}</p>
              </article>
            </div>
          </section>

          <section>
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ article.closeTitle }}</h2>
            <p class="leading-relaxed">{{ article.closeText }}</p>
          </section>

          <div>
            <ArticleInstallCta
              :title="article.ctaTitle"
              :description="article.ctaDescription"
              :primary-label="installLabel"
              :secondary-label="article.ctaSecondary"
              secondary-path="/blog/telegram-video-downloader-guide"
            />
          </div>

          <section class="rounded-lg border border-primary/20 bg-primary-50/60 p-5">
            <h2 class="mb-3 text-2xl font-heading font-bold text-text">{{ article.relatedTitle }}</h2>
            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink
                v-for="link in article.relatedLinks"
                :key="link.path"
                :to="localePath(link.path)"
                class="font-semibold text-primary hover:underline"
              >
                {{ link.title }}
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import imgGuide from '~/assets/10.png'
import imgWorkflow from '~/assets/11.png'
import {
  RESTRICTED_VIDEO_BLOG_PATH,
  getRestrictedVideoBlog,
  restrictedVideoBlog
} from '~/data/restrictedVideoBlog.js'
import { getBlogLocaleContent } from '~/data/blogLocaleContent'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()
const siteUrl = config.public.siteUrl

const meta = restrictedVideoBlog
const article = computed(() => getRestrictedVideoBlog(locale.value))
const blogCopy = computed(() => getBlogLocaleContent(locale.value))
const installLabel = computed(() => blogCopy.value.common.installStore)
const updatedLabel = computed(() => blogCopy.value.common.updated)
const dateLabel = computed(() =>
  locale.value === 'cn' ? meta.dateTextCn : meta.dateTextEn
)
const canonical = computed(() => `${siteUrl}${localePath(RESTRICTED_VIDEO_BLOG_PATH)}`)

const figures = computed(() => {
  const list = article.value.figures.map((item) => ({ ...item }))
  if (list[2]) list[2].src = imgGuide
  if (list[4]) list[4].src = imgWorkflow
  return list
})

useSeoMeta({
  title: () => article.value.seoTitle,
  description: () => article.value.seoDescription,
  ogTitle: () => article.value.seoTitle,
  ogDescription: () => article.value.seoDescription,
  ogUrl: () => canonical.value,
  twitterCard: 'summary_large_image',
  keywords: () => article.value.keywords
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
          headline: article.value.title,
          description: article.value.seoDescription,
          author: { '@type': 'Organization', name: 'TGVideoDown' },
          publisher: { '@type': 'Organization', name: 'TGVideoDown' },
          dateModified: meta.dateMachine,
          mainEntityOfPage: canonical.value
        })
    },
    {
      type: 'application/ld+json',
      children: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: article.value.title,
          totalTime: 'PT4M',
          step: article.value.steps.map((step) => ({
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
          mainEntity: article.value.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            {
              '@type': 'ListItem',
              position: 2,
              name: blogCopy.value.index.breadcrumb,
              item: `${siteUrl}${localePath('/blog/')}`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: article.value.title,
              item: canonical.value
            }
          ]
        })
    }
  ]
})
</script>
