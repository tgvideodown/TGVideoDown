<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 via-white to-white">
      <div class="container-custom max-w-3xl mx-auto">
        <div class="text-center">
          <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            {{ t('tgUninstall.kicker') }}
          </p>
          <img
            src="/logo.png"
            alt="Telegram Video Downloader"
            width="128"
            height="128"
            class="w-16 h-16 mx-auto mb-4 rounded-2xl"
          />
          <h1 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4 leading-tight">
            {{ t('tgUninstall.title') }}
          </h1>
          <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {{ t('tgUninstall.lead') }}
          </p>
          <a
            :href="storeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary mt-8 inline-flex items-center justify-center min-h-11 px-8"
          >
            {{ t('tgUninstall.cta') }}
          </a>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-heading font-bold text-text text-center mb-5">
            {{ t('tgUninstall.pointsTitle') }}
          </h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            <li
              v-for="(point, i) in points"
              :key="i"
              class="flex gap-3 rounded-2xl border border-border bg-white px-4 py-4 shadow-sm"
            >
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.75 11.836l6.543-6.543a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="text-gray-700 leading-relaxed">{{ point }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-10 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 class="text-xl font-heading font-bold text-text mb-4">
            {{ t('tgUninstall.stepsTitle') }}
          </h2>
          <ol class="space-y-3">
            <li
              v-for="(step, i) in steps"
              :key="i"
              class="flex gap-3 rounded-xl bg-slate-50 px-4 py-3 text-gray-700"
            >
              <span class="font-heading font-bold text-primary shrink-0">{{ i + 1 }}</span>
              <span class="leading-relaxed">{{ step }}</span>
            </li>
          </ol>
          <a
            :href="storeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary mt-6 inline-flex items-center justify-center min-h-11 px-8"
          >
            {{ t('tgUninstall.cta') }}
          </a>
        </div>

        <div class="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 class="text-xl font-heading font-bold text-text mb-2">
            {{ t('tgUninstall.helpTitle') }}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            {{ t('tgUninstall.helpBody') }}
          </p>
          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <a :href="mailto" class="btn-secondary inline-flex items-center justify-center min-h-11 px-6">
              {{ t('tgUninstall.helpCta') }}
            </a>
            <NuxtLink :to="localePath('/support')" class="text-primary font-semibold hover:underline">
              {{ t('footer.supportPage') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const localePath = useLocalePath()
const { t, tm, locale } = useI18n()
const { mailto } = useSupportEmail()

const storeUrl = useLegacyExtensionStoreUrl()

const canonical = computed(
  () => `${config.public.siteUrl}${localePath('/uninstall')}`,
)

function messageList(key) {
  return computed(() => {
    void locale.value
    const raw = tm(key)
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => t(`${key}.${i}`))
  })
}

const points = messageList('tgUninstall.points')
const steps = messageList('tgUninstall.steps')

useSeoMeta({
  title: () => t('tgUninstall.seoTitle'),
  description: () => t('tgUninstall.seoDescription'),
  robots: 'noindex, nofollow',
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))
</script>
