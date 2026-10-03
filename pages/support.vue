<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-4">{{ t('supportPage.title') }}</h1>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{ t('supportPage.lead') }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto space-y-10">
        <div class="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 class="text-xl font-heading font-bold text-text mb-3">{{ t('supportPage.contactTitle') }}</h2>
          <p class="text-gray-700 mb-4">
            {{ t('supportPage.contactBody') }}
          </p>
          <a
            :href="mailto"
            class="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            {{ email }}
          </a>
        </div>

        <div>
          <h2 class="text-xl font-heading font-bold text-text mb-4">{{ t('supportPage.relatedTitle') }}</h2>
          <ul class="space-y-2 text-gray-700">
            <li>
              <NuxtLink :to="localePath('/terms')" class="text-primary font-semibold hover:underline">
                {{ t('footer.terms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy')" class="text-primary font-semibold hover:underline">
                {{ t('footer.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')" class="text-primary font-semibold hover:underline">
                {{ t('nav.about') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <ComplianceTermsSection product-name="TGVideoDown" embedded />
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { t } = useI18n()
const { email, mailto } = useSupportEmail()

const canonical = computed(() => `${config.public.siteUrl}${localePath('/support')}`)

useSeoMeta({
  title: () => t('supportPage.seoTitle'),
  description: () => t('supportPage.seoDescription'),
  ogTitle: () => t('supportPage.seoTitle'),
  ogDescription: () => t('supportPage.seoDescription')
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>
