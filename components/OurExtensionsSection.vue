<template>
  <section class="section-padding bg-gradient-to-b from-white to-slate-50">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
          {{ $t('extensionsSection.title') }}
        </h2>
        <p class="text-lg text-gray-600">
          {{ $t('extensionsSection.subtitle') }}
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <NuxtLink
          v-for="item in siteExtensions"
          :key="item.path"
          :to="localePath(item.path)"
          class="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md cursor-pointer"
        >
          <h3 class="text-lg font-heading font-semibold text-text mb-2 group-hover:text-primary transition-colors">
            {{ $t(item.titleKey) }}
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            {{ $t(item.descKey) }}
          </p>
          <span class="text-sm font-semibold text-primary group-hover:underline">
            {{ $t('extensionsSection.learnMore') }} →
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteExtensions } from '~/data/siteExtensions.js'

const localePath = useLocalePath()
</script>
