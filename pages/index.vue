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
  title: 'Telegram Video Downloader — Chrome Extension | TGVideoDown',
  description:
    'Telegram video downloader for private groups, channels, and chats: save videos, images, audio, and files locally with our free Chrome extension. One-click and batch downloads — no login on this site.',
  ogTitle: 'Telegram Video Downloader — Chrome Extension | TGVideoDown',
  ogDescription:
    'Telegram downloader for private groups and channels: download Telegram videos and media fast. Chrome extension — one-click, batch, local saves. Info site linking to Chrome Web Store.',
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  keywords:
    'telegram video downloader, telegram downloader, telegram private group, telegram channel, download telegram video, telegram media download, chrome extension'
})

useHead({
  link: [
    { rel: 'canonical', href: config.public.siteUrl }
  ]
})
</script>
