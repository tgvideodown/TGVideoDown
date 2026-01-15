<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-cta-50 opacity-50"></div>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-semibold">{{ $t('hero.badge') }}</span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-text mb-6 leading-tight">
          {{ $t('hero.title') }}
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <NuxtLink to="/download" class="btn-primary text-lg px-8 py-4">
            {{ $t('hero.ctaPrimary') }}
          </NuxtLink>
          <NuxtLink to="/features" class="btn-outline text-lg px-8 py-4">
            {{ $t('hero.ctaSecondary') }}
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm md:text-base text-gray-600">
              {{ $t(stat.label) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-0"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl -z-0"></div>
  </section>
</template>

<script setup>
const stats = [
  { value: '10M+', label: 'hero.stats.downloads' },
  { value: '100K+', label: 'hero.stats.users' },
  { value: '99.9%', label: 'hero.stats.uptime' }
]
</script>
