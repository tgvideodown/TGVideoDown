<template>
  <ExtensionLanding :product="product" />
</template>

<script setup>
import { extensionProducts } from '~/data/extensionProducts.js'

const localePath = useLocalePath()
const config = useRuntimeConfig()

const product = {
  ...extensionProducts.igCommentExporter,
  storeUrl:
    config.public.igCommentExporterStoreUrl || extensionProducts.igCommentExporter.storeUrl
}

const canonical = computed(() => `${config.public.siteUrl}${localePath('/ig-comment-exporter')}`)

useSeoMeta({
  title: product.seo.title,
  description: product.seo.description,
  ogTitle: product.seo.title,
  ogDescription: product.seo.description,
  ogUrl: canonical,
  keywords: product.seo.keywords
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>
