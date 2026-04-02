<template>
  <section class="section-padding bg-gradient-to-b from-white via-primary-50/25 to-white">
    <div class="container-custom">
      <div class="text-center mb-14 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
          {{ $t('howItWorks.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('howItWorks.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <figure
          v-for="(step, i) in steps"
          :key="i"
          class="text-left rounded-xl border border-border bg-white/90 shadow-sm overflow-hidden flex flex-col"
        >
          <div class="overflow-hidden border-b border-border bg-gray-50">
            <img
              :src="step.img"
              :alt="$t(step.altKey)"
              class="w-full h-auto object-contain"
              loading="lazy"
              width="800"
              height="450"
            />
          </div>
          <figcaption class="p-5 md:p-6 flex-1 flex flex-col">
            <span class="text-xs font-semibold uppercase tracking-wide text-primary">{{ $t(step.labelKey) }}</span>
            <h3 class="mt-2 text-xl font-heading font-semibold text-text">
              {{ $t(step.titleKey) }}
            </h3>
            <p class="mt-2 text-gray-600 leading-relaxed text-sm md:text-base flex-1">
              {{ $t(step.descKey) }}
            </p>
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
  {
    img: demoImg1,
    labelKey: 'demo.step1Label',
    titleKey: 'howItWorks.step1.title',
    descKey: 'howItWorks.step1.description',
    altKey: 'demo.step1Alt'
  },
  {
    img: demoImg2,
    labelKey: 'demo.step2Label',
    titleKey: 'howItWorks.step2.title',
    descKey: 'howItWorks.step2.description',
    altKey: 'demo.step2Alt'
  },
  {
    img: demoImg3,
    labelKey: 'demo.step3Label',
    titleKey: 'howItWorks.step3.title',
    descKey: 'howItWorks.step3.description',
    altKey: 'demo.step3Alt'
  }
]
</script>
