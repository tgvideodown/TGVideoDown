<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 via-white to-white">
      <div class="container-custom max-w-4xl mx-auto text-center">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {{ product.badge }}
        </p>
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-text mb-6 leading-tight">
          {{ product.title }}
        </h1>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-4 max-w-3xl mx-auto">
          {{ product.heroLead }}
        </p>
        <p class="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          {{ product.heroSub }}
        </p>
        <a
          :href="product.storeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Install from Chrome Web Store
        </a>
      </div>
    </section>

    <section class="pb-12 md:pb-16">
      <div class="container-custom max-w-3xl mx-auto">
        <p class="text-gray-700 leading-relaxed text-center">{{ product.intro }}</p>
      </div>
    </section>

    <section class="section-padding bg-gradient-to-b from-white to-primary-50/30">
      <div class="container-custom max-w-3xl mx-auto space-y-10">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text">
          {{ product.featuresTitle }}
        </h2>
        <div v-for="(group, i) in product.featureGroups" :key="i">
          <h3 class="text-xl font-heading font-semibold text-text mb-3">{{ group.title }}</h3>
          <ul class="space-y-2 text-gray-700">
            <li v-for="(item, j) in group.items" :key="j" class="flex gap-3">
              <span class="text-green-600 font-bold shrink-0">✔</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-6">
          {{ product.howTitle }}
        </h2>
        <ol class="list-decimal pl-6 space-y-3 text-gray-700">
          <li v-for="(step, i) in product.howSteps" :key="i">{{ step }}</li>
        </ol>
      </div>
    </section>

    <section class="section-padding bg-gradient-to-b from-primary-50/30 to-white">
      <div class="container-custom max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
          {{ product.privacyTitle }}
        </h2>
        <p class="text-gray-700 mb-6">{{ product.privacyIntro }}</p>
        <ul class="space-y-3 text-gray-700 mb-6">
          <li v-for="(item, i) in product.privacyItems" :key="i" class="flex gap-3">
            <span class="text-green-600 font-bold shrink-0">✔</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <NuxtLink
          :to="localePath(`/${product.privacySlug}`)"
          class="text-primary font-semibold hover:underline"
        >
          Read full Privacy Policy →
        </NuxtLink>
      </div>
    </section>

    <!-- Payment-platform audit / Terms of Use compliance -->
    <ComplianceTermsSection :product-name="product.title" />

    <section class="pb-16 md:pb-24">
      <div class="container-custom max-w-3xl mx-auto">
        <div class="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-950 text-sm leading-relaxed">
          <p class="font-semibold mb-2">{{ product.noticeTitle }}</p>
          <p class="mb-3">{{ product.noticeBody1 }}</p>
          <p>{{ product.noticeBody2 }}</p>
        </div>
        <p class="mt-10 pt-6 border-t border-border text-center text-sm text-gray-600">
          <a
            :href="product.storeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary font-semibold hover:underline"
          >
            Chrome Web Store
          </a>
          ·
          <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
          ·
          <NuxtLink :to="localePath('/terms')" class="text-primary font-semibold hover:underline">
            Terms
          </NuxtLink>
          ·
          <NuxtLink :to="localePath('/')" class="text-primary font-semibold hover:underline">
            TGVideoDown Home
          </NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const localePath = useLocalePath()
const { email, mailto } = useSupportEmail()
</script>
