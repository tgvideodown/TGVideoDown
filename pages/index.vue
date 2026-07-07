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
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- Testimonials -->
    <TestimonialsSection />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const ogImageUrl = `${config.public.siteUrl}/og-image.png`

useSeoMeta({
  title: 'Telegram Video Downloader - Download Telegram Videos with TGVideoDown',
  description:
    'TGVideoDown is a Telegram Video Downloader Chrome extension for saving Telegram videos, images, audio, and files locally. Fast, lightweight, privacy-minded, no site login, and batch downloads.',
  ogTitle: 'Telegram Video Downloader - Download Telegram Videos with TGVideoDown',
  ogDescription:
    'Download Telegram videos and media with TGVideoDown. Chrome extension for fast, lightweight, no-login-on-site, single and batch downloads.',
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  keywords:
    'telegram video downloader, download telegram videos, TGVideoDown, telegram downloader chrome extension, telegram media downloader, download telegram files without login, batch telegram download'
})

useHead({
  link: [
    { rel: 'canonical', href: config.public.siteUrl }
  ]
})
</script>
