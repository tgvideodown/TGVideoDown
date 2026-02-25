<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- How It Works -->
    <HowItWorksSection />
    
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
  title: 'TGVideoDown - Download Telegram Videos Easily',
  description: 'Download videos from Telegram quickly and easily. Free, fast, and secure video downloader for Telegram.',
  ogTitle: 'TGVideoDown - Download Telegram Videos',
  ogDescription: 'Download videos from Telegram quickly and easily.',
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image'
})
</script>
