<template>
  <ExtensionLanding :product="product" />
</template>

<script setup>
import { extensionProducts } from '~/data/extensionProducts.js'

const baseProduct = extensionProducts.igFollowerExport
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { t, tm, locale } = useI18n()

function list(key) {
  void locale.value
  const raw = tm(key)
  if (!Array.isArray(raw)) return []
  return raw.map((_, i) => t(`${key}.${i}`))
}

const product = computed(() => ({
  ...baseProduct,
  badge: t('igExportPage.badge'),
  title: t('igExportPage.title'),
  heroLead: t('igExportPage.heroLead'),
  heroSub: t('igExportPage.heroSub'),
  intro: t('igExportPage.intro'),
  featuresTitle: t('igExportPage.featuresTitle'),
  featureGroups: [
    { title: t('igExportPage.groups.modes.title'), items: list('igExportPage.groups.modes.items') },
    { title: t('igExportPage.groups.columns.title'), items: list('igExportPage.groups.columns.items') },
    { title: t('igExportPage.groups.reliability.title'), items: list('igExportPage.groups.reliability.items') }
  ],
  howTitle: t('igExportPage.howTitle'),
  howSteps: list('igExportPage.howSteps'),
  privacyTitle: t('igExportPage.privacyTitle'),
  privacyIntro: t('igExportPage.privacyIntro'),
  privacyItems: list('igExportPage.privacyItems'),
  noticeTitle: t('igExportPage.noticeTitle'),
  noticeBody1: t('igExportPage.noticeBody1'),
  noticeBody2: t('igExportPage.noticeBody2'),
  logo: { ...baseProduct.logo, alt: t('igExportPage.logoAlt') },
  heroImage: { ...baseProduct.heroImage, alt: t('igExportPage.heroAlt') },
  howImage: { ...baseProduct.howImage, alt: t('igExportPage.howAlt') },
  seo: {
    title: t('igExportPage.seo.title'),
    description: t('igExportPage.seo.description'),
    keywords: t('igExportPage.seo.keywords')
  }
}))

const canonical = computed(() => `${config.public.siteUrl}${localePath('/ig-follower-export-tool')}`)
const ogImage = computed(() => {
  const base = String(config.public.siteUrl).replace(/\/$/, '')
  return `${base}${baseProduct.heroImage.src}`
})

useSeoMeta({
  title: () => product.value.seo.title,
  description: () => product.value.seo.description,
  ogTitle: () => product.value.seo.title,
  ogDescription: () => product.value.seo.description,
  ogUrl: canonical,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
  keywords: () => product.value.seo.keywords
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: product.value.name,
        applicationCategory: 'BrowserApplication',
        operatingSystem: 'Chrome',
        description: product.value.seo.description,
        image: ogImage.value,
        url: canonical.value,
        installUrl: product.value.storeUrl,
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '9.99',
          highPrice: '79.99',
          priceCurrency: 'USD',
          offerCount: 2
        }
      })
    }
  ]
}))
</script>
