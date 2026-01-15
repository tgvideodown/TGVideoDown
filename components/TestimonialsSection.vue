<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="glass-card p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <!-- Stars -->
          <div class="flex items-center space-x-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "{{ $t(testimonial.quote) }}"
          </p>

          <!-- Author -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span class="text-primary font-semibold">{{ testimonial.initials }}</span>
            </div>
            <div>
              <div class="font-semibold text-text">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Alex Chen',
    initials: 'AC',
    role: 'Content Creator',
    quote: 'testimonials.user1.quote'
  },
  {
    name: 'Maria Garcia',
    initials: 'MG',
    role: 'Video Editor',
    quote: 'testimonials.user2.quote'
  },
  {
    name: 'John Smith',
    initials: 'JS',
    role: 'Social Media Manager',
    quote: 'testimonials.user3.quote'
  }
]
</script>
