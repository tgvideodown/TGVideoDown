<template>
  <section class="section-padding bg-gradient-to-b from-primary-50/40 to-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
          {{ $t('demo.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('demo.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <figure v-for="(step, i) in steps" :key="i" class="text-center">
          <div class="rounded-xl overflow-hidden border border-border bg-white shadow-sm mb-4">
            <img
              :src="step.img"
              :alt="$t(step.altKey)"
              class="w-full h-auto object-contain bg-gray-50"
              loading="lazy"
              width="800"
              height="450"
            />
          </div>
          <figcaption class="text-left">
            <span class="text-xs font-semibold uppercase tracking-wide text-primary">{{ $t(step.labelKey) }}</span>
            <p class="mt-1 text-gray-700 leading-relaxed">{{ $t(step.captionKey) }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import demoImg1 from '~/assets/8.png'
import demoImg2 from '~/assets/9.png'
import demoImg3 from '~/assets/10.png'

const steps = [
  { img: demoImg1, labelKey: 'demo.step1Label', captionKey: 'demo.step1Caption', altKey: 'demo.step1Alt' },
  { img: demoImg2, labelKey: 'demo.step2Label', captionKey: 'demo.step2Caption', altKey: 'demo.step2Alt' },
  { img: demoImg3, labelKey: 'demo.step3Label', captionKey: 'demo.step3Caption', altKey: 'demo.step3Alt' }
]
</script>
