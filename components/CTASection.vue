<template>
  <section class="section-padding bg-gradient-to-r from-primary to-primary-700 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-cta rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">
          {{ $t('cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-primary-100">
          {{ $t('cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/download" class="bg-cta hover:bg-cta-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 cursor-pointer text-lg">
            {{ $t('cta.button') }}
          </NuxtLink>
          <!-- <NuxtLink to="/pricing" class="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 cursor-pointer text-lg border-2 border-white/30">
            {{ $t('cta.secondary') }}
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </section>
</template>
