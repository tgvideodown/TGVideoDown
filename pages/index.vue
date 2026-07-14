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
  title: 'Telegram Video Downloader Chrome Extension - TGVideoDown',
  description:
    'TGVideoDown is a Chrome extension for downloading Telegram videos, photos, audio and files. Save Telegram media easily with fast single and batch downloads. No account required.',
  ogTitle: 'Telegram Video Downloader Chrome Extension - TGVideoDown',
  ogDescription:
    'TGVideoDown is a Chrome extension for downloading Telegram videos, photos, audio and files. Save Telegram media easily with fast single and batch downloads. No account required.',
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
