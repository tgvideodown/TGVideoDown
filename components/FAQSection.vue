<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
          {{ $t('faq.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('faq.subtitle') }}
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(item, index) in faqKeys"
          :key="index"
          class="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            class="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            @click="toggle(index)"
          >
            <span class="font-heading font-semibold text-text pr-4">
              {{ $t(`faq.${item}.question`) }}
            </span>
            <svg
              class="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-show="openIndex === index"
            class="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50"
          >
            {{ $t(`faq.${item}.answer`) }}
          </div>
        </div>
      </div>

      <!-- Bottom trust note -->
      <div class="mt-12 text-center">
        <div class="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-green-50 border border-green-200 rounded-2xl px-6 md:px-8 py-4 max-w-full">
          <div class="flex items-center gap-2 text-green-700 text-sm font-medium">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t('hero.trust.noLogin') }}
          </div>
          <div class="flex items-center gap-2 text-green-700 text-sm font-medium">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t('hero.trust.noData') }}
          </div>
          <div class="flex items-center gap-2 text-green-700 text-sm font-medium">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t('hero.trust.safeShort') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']
const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
