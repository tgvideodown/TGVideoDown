<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            {{ t('termsPage.title') }}
          </h1>
          <p class="text-gray-600">
            {{ t('termsPage.updated') }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto">
        <p class="text-gray-700 leading-relaxed mb-10">
          {{ t('termsPage.intro') }}
        </p>

        <ComplianceTermsSection :show-footer-links="false" embedded />

        <div class="mt-12 pt-8 border-t border-border text-gray-700">
          <h2 class="text-xl font-heading font-bold text-text mb-3">{{ t('termsPage.contactTitle') }}</h2>
          <p class="mb-2">
            {{ t('termsPage.emailLabel') }}
            <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
          </p>
          <p>
            <NuxtLink :to="localePath('/privacy')" class="text-primary font-semibold hover:underline">
              {{ t('footer.privacy') }}
            </NuxtLink>
            ·
            <NuxtLink :to="localePath('/support')" class="text-primary font-semibold hover:underline">
              {{ t('footer.support') }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { t } = useI18n()
const { email, mailto } = useSupportEmail()

const canonical = computed(() => `${config.public.siteUrl}${localePath('/terms')}`)

useSeoMeta({
  title: () => t('termsPage.seoTitle'),
  description: () => t('termsPage.seoDescription'),
  ogTitle: () => t('termsPage.seoTitle'),
  ogDescription: () => t('termsPage.seoDescription')
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>
