<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            {{ $t('download.hero.title') }}
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            {{ $t('download.hero.subtitle') }}
          </p>

          <!-- Chrome 扩展安装 -->
          <div class="glass-card p-6 md:p-8">
            <p class="text-gray-600 mb-6">
              {{ $t('download.hero.extensionHint') }}
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                :href="extensionStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {{ $t('download.form.installExtension') }}
              </a>
              <span class="text-sm text-gray-500">{{ $t('download.form.version') }} {{ extensionVersion }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding">
      <div class="container-custom">
        <h2 class="text-3xl font-heading font-bold text-text text-center mb-12">
          {{ $t('download.features.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-heading font-semibold text-text mb-2">
              {{ $t('download.features.fast.title') }}
            </h3>
            <p class="text-gray-600">{{ $t('download.features.fast.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-heading font-semibold text-text mb-2">
              {{ $t('download.features.secure.title') }}
            </h3>
            <p class="text-gray-600">{{ $t('download.features.secure.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-heading font-semibold text-text mb-2">
              {{ $t('download.features.free.title') }}
            </h3>
            <p class="text-gray-600">{{ $t('download.features.free.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructions Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-heading font-bold text-text text-center mb-8">
            {{ $t('download.instructions.title') }}
          </h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-4 glass-card p-4">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                1
              </div>
              <p class="text-gray-600 pt-1">{{ $t('download.instructions.step1') }}</p>
            </div>
            <div class="flex items-start space-x-4 glass-card p-4">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                2
              </div>
              <p class="text-gray-600 pt-1">{{ $t('download.instructions.step2') }}</p>
            </div>
            <div class="flex items-start space-x-4 glass-card p-4">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                3
              </div>
              <p class="text-gray-600 pt-1">{{ $t('download.instructions.step3') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl
const extensionVersion = config.public.extensionVersion

useSeoMeta({
  title: 'Download - TGVideoDown',
  description: 'Download videos from Telegram easily and quickly. Free, fast, and secure video downloader.',
  ogTitle: 'Download Telegram Videos - TGVideoDown',
  ogDescription: 'Download videos from Telegram easily and quickly.',
})
</script>
