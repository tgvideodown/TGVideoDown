<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            {{ $t('about.hero.title') }}
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            {{ $t('about.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
              {{ $t('about.mission.title') }}
            </h2>
            <p class="text-lg text-gray-600">
              {{ $t('about.mission.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text text-center mb-12">
          {{ $t('about.values.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="glass-card p-6 text-center"
          >
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t(`about.values.${value.key}.title`) }}
            </h3>
            <p class="text-gray-600">
              {{ $t(`about.values.${value.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
                {{ $t('about.story.title') }}
              </h2>
              <p class="text-gray-600 mb-4" v-html="$t('about.story.paragraph1')"></p>
              <p class="text-gray-600 mb-4" v-html="$t('about.story.paragraph2')"></p>
              <p class="text-gray-600" v-html="$t('about.story.paragraph3')"></p>
            </div>
            <div class="glass-card p-8">
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 class="font-heading font-semibold text-text mb-2">
                      {{ $t('about.story.step1.title') }}
                    </h4>
                    <p class="text-gray-600">{{ $t('about.story.step1.description') }}</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 class="font-heading font-semibold text-text mb-2">
                      {{ $t('about.story.step2.title') }}
                    </h4>
                    <p class="text-gray-600">{{ $t('about.story.step2.description') }}</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 class="font-heading font-semibold text-text mb-2">
                      {{ $t('about.story.step3.title') }}
                    </h4>
                    <p class="text-gray-600">{{ $t('about.story.step3.description') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
          {{ $t('about.cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-primary-100">
          {{ $t('about.cta.description') }}
        </p>
        <NuxtLink :to="localePath('/')" class="btn-secondary bg-white text-primary hover:bg-gray-100 inline-block">
          {{ $t('about.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath()

const values = [
  {
    key: 'simplicity',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    key: 'security',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    key: 'innovation',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

useSeoMeta({
  title: 'About Us - TGVideoDown',
  description: 'Learn about TGVideoDown, our mission, values, and commitment to providing the best Telegram video downloading experience.',
  ogTitle: 'About Us - TGVideoDown',
  ogDescription: 'Learn about TGVideoDown and our mission.',
})
</script>
