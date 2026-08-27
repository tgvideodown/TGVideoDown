<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- How to use (steps + screenshots) -->
    <HowToUseSection />

    <!-- FAQ -->
    <FAQSection />

    <!-- More Chrome extensions -->
    <OurExtensionsSection />
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- Testimonials -->
    <TestimonialsSection />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const ogImageUrl = `${config.public.siteUrl}/og-image.png`
const localePath = useLocalePath()
const { t } = useI18n()
const siteUrl = config.public.siteUrl
const canonical = computed(() => {
  const base = String(siteUrl).replace(/\/$/, '')
  const path = localePath('/')
  return path === '/' ? base : `${base}${path}`
})

useSeoMeta({
  title: () => t('homeSeo.title'),
  description: () => t('homeSeo.description'),
  ogTitle: () => t('homeSeo.ogTitle'),
  ogDescription: () => t('homeSeo.ogDescription'),
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  keywords: () => t('homeSeo.keywords')
})

useHead(() => ({
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
        url: config.public.extensionStoreUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '136',
          bestRating: '5',
          worstRating: '1'
        }
      })
    }
  ]
}))
</script>
