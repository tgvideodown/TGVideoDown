<template>
  <section class="section-padding bg-gradient-to-b from-white to-primary-50/30">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
          {{ $t('howItWorks.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('howItWorks.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative text-center"
        >
          <!-- Step Number -->
          <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-6 relative z-10">
            {{ index + 1 }}
          </div>
          
          <!-- Connecting Line (Desktop) -->
          <div
            v-if="index < steps.length - 1"
            class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30"
            style="left: 50%; transform: translateX(50%);"
          ></div>

          <!-- Step Content -->
          <div class="glass-card p-6">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div v-html="getIconSvg(step.icon)" class="w-6 h-6 text-primary"></div>
            </div>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t(step.title) }}
            </h3>
            <p class="text-gray-600">
              {{ $t(step.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: 'link',
    title: 'howItWorks.step1.title',
    description: 'howItWorks.step1.description'
  },
  {
    icon: 'download',
    title: 'howItWorks.step2.title',
    description: 'howItWorks.step2.description'
  },
  {
    icon: 'check',
    title: 'howItWorks.step3.title',
    description: 'howItWorks.step3.description'
  }
]

const iconSvgs = {
  link: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>',
  download: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>',
  check: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
}

const getIconSvg = (iconName) => {
  return iconSvgs[iconName] || iconSvgs.link
}
</script>
