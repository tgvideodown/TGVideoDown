<template>
  <ExtensionLanding :product="product" />
</template>

<script setup>
import { extensionProducts } from '~/data/extensionProducts.js'

const product = extensionProducts.igFollowerExport
const localePath = useLocalePath()
const config = useRuntimeConfig()

const canonical = computed(() => `${config.public.siteUrl}${localePath('/ig-follower-export-tool')}`)

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
