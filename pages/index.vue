<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- How It Works -->
    <HowItWorksSection />

    <!-- Demo / screenshots -->
    <DemoSection />

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
  title: 'Telegram Media Downloader — Chrome Extension | TGVideoDown',
  description:
    'Companion site for the free Telegram Media Downloader Chrome extension: save Telegram videos, images, audio, and files locally. One-click and batch, no login on this site.',
  ogTitle: 'Telegram Media Downloader — Chrome Extension',
  ogDescription:
    'Free, fast Chrome extension for Telegram groups and channels. This site is informational and links to the Chrome Web Store.',
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  keywords: 'telegram video downloader, telegram chrome extension, download telegram video, telegram media downloader'
})

useHead({
  link: [
    { rel: 'canonical', href: config.public.siteUrl }
  ]
})
</script>
