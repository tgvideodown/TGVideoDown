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
    icon: 'puzzle',
    title: 'howItWorks.step1.title',
    description: 'howItWorks.step1.description'
  },
  {
    icon: 'globe',
    title: 'howItWorks.step2.title',
    description: 'howItWorks.step2.description'
  },
  {
    icon: 'download',
    title: 'howItWorks.step3.title',
    description: 'howItWorks.step3.description'
  }
]

const iconSvgs = {
  puzzle: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>',
  globe: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  download: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>'
}

const getIconSvg = (iconName) => {
  return iconSvgs[iconName] || iconSvgs.puzzle
}
</script>
