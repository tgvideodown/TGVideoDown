<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            {{ policy.extensionName }}
          </p>
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-4">Privacy Policy</h1>
          <p class="text-lg text-gray-600">
            Operated by TGvideodown.com · Last updated: {{ policy.lastUpdated }}
          </p>
          <nav class="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <a href="#english" class="text-primary hover:underline">English</a>
            <a href="#chinese" class="text-primary hover:underline">简体中文</a>
          </nav>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom max-w-4xl mx-auto prose prose-lg">
        <article id="english" class="mb-16 scroll-mt-24">
          <p class="text-gray-700 leading-relaxed">{{ policy.en.intro }}</p>
          <PrivacyPolicySection
            v-for="(section, i) in policy.en.sections"
            :key="`en-${i}`"
            :section="section"
          />
        </article>

        <hr class="border-border my-16" />

        <article id="chinese" class="scroll-mt-24">
          <h2 class="text-3xl font-heading font-bold text-text mb-4">{{ policy.cn.title }}</h2>
          <p class="text-gray-600 mb-6">
            <strong>{{ policy.extensionNameCn }}</strong><br>
            运营方：TGvideodown.com<br>
            最后更新日期：{{ policy.lastUpdated }}
          </p>
          <p class="text-gray-700 leading-relaxed">{{ policy.cn.intro }}</p>
          <PrivacyPolicySection
            v-for="(section, i) in policy.cn.sections"
            :key="`cn-${i}`"
            :section="section"
          />
        </article>

        <p class="mt-12 pt-6 border-t border-border text-center text-sm text-gray-600">
          <NuxtLink
            :to="localePath(`/${policy.landingSlug}`)"
            class="text-primary font-semibold hover:underline"
          >
            {{ policy.extensionName }}
          </NuxtLink>
          ·
          <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
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
const props = defineProps({
  policy: {
    type: Object,
    required: true
  },
  privacyPath: {
    type: String,
    required: true
  }
})

const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const { email, mailto } = useSupportEmail()

const canonical = computed(() => `${siteUrl}${localePath(props.privacyPath)}`)

useSeoMeta({
  title: () => props.policy.seoTitle,
  description: () => props.policy.seoDescription,
  ogTitle: () => props.policy.seoTitle,
  ogDescription: () => props.policy.seoDescription,
  robots: 'index, follow'
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>

<style scoped>
.prose ul {
  @apply mb-4;
}
.prose li {
  @apply mb-2;
}
</style>
