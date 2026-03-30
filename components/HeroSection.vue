<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-cta-50 opacity-50"></div>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full mb-8">
          <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-semibold">{{ $t('hero.badge') }}</span>
        </div>

        <!-- H1 Main Headline -->
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-text mb-4 leading-tight whitespace-pre-line">
          {{ $t('hero.title') }}
        </h1>

        <!-- H2 Subtitle -->
        <h2 class="text-xl md:text-2xl font-heading font-semibold text-primary mb-4 max-w-2xl mx-auto">
          {{ $t('hero.h2') }}
        </h2>
        
        <!-- Description -->
        <p class="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Trust Badges -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span class="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-full text-sm font-medium">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t('hero.trust.noLogin') }}
          </span>
          <span class="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-full text-sm font-medium">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t('hero.trust.noData') }}
          </span>
          <span class="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1.5 rounded-full text-sm font-medium">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {{ $t('hero.trust.safe') }}
          </span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4 inline-block">
            {{ $t('hero.ctaPrimary') }}
          </a>
          <!-- <NuxtLink to="/features" class="btn-outline text-lg px-8 py-4"> -->
            <!-- {{ $t('hero.ctaSecondary') }}
          </NuxtLink> -->
        </div>

        <!-- Plugin highlights（非统计数据） -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div v-for="h in highlights" :key="h.titleKey" class="text-center rounded-xl border border-primary/15 bg-white/80 px-4 py-4 shadow-sm">
            <div class="text-sm md:text-base font-heading font-semibold text-primary mb-1">
              {{ $t(h.titleKey) }}
            </div>
            <div class="text-xs md:text-sm text-gray-600 leading-snug">
              {{ $t(h.descKey) }}
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
const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl

const highlights = [
  { titleKey: 'hero.highlights.free.title', descKey: 'hero.highlights.free.description' },
  { titleKey: 'hero.highlights.batch.title', descKey: 'hero.highlights.batch.description' },
  { titleKey: 'hero.highlights.large.title', descKey: 'hero.highlights.large.description' }
]
</script>
