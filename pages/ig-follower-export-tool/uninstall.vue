<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 via-white to-white">
      <div class="container-custom max-w-xl mx-auto text-center">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {{ $t('igExportUninstall.kicker') }}
        </p>
        <h1 class="text-3xl md:text-4xl font-heading font-bold text-text mb-4 leading-tight">
          {{ $t('igExportUninstall.title') }}
        </h1>
        <p class="text-gray-600 leading-relaxed mb-8">
          {{ $t('igExportUninstall.lead') }}
        </p>

        <div class="rounded-2xl border border-border bg-white p-6 text-left shadow-sm">
          <p class="text-sm font-semibold text-text mb-1">
            {{ $t('igExportUninstall.codeLabel') }}
          </p>
          <p class="text-sm text-gray-500 mb-4">
            {{ $t('igExportUninstall.codeHint') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <code
              class="flex-1 rounded-lg border border-border bg-slate-50 px-4 py-3 text-center text-xl font-heading font-bold tracking-[0.18em] text-text"
            >{{ promoCode }}</code>
            <button
              type="button"
              class="btn-primary min-h-11 px-5"
              @click="copyCode"
            >
              {{ copied ? $t('igExportUninstall.copied') : $t('igExportUninstall.copy') }}
            </button>
          </div>
        </div>

        <a
          :href="storeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary mt-6 inline-flex items-center justify-center min-h-11 px-8"
        >
          {{ $t('igExportUninstall.cta') }}
        </a>

        <ol class="mt-10 space-y-3 text-left text-gray-700">
          <li
            v-for="(step, i) in steps"
            :key="i"
            class="flex gap-3 rounded-xl border border-border bg-white px-4 py-3"
          >
            <span class="font-heading font-bold text-primary shrink-0">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>
import { extensionProducts } from '~/data/extensionProducts.js'

const PROMO_CODE = 'IGTOOLS30'
const storeUrl = extensionProducts.igFollowerExport.storeUrl
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { t, tm, locale } = useI18n()

const promoCode = PROMO_CODE
const copied = ref(false)
let copiedTimer = null

const canonical = computed(
  () => `${config.public.siteUrl}${localePath('/ig-follower-export-tool/uninstall')}`,
)

const steps = computed(() => {
  void locale.value
  const raw = tm('igExportUninstall.steps')
  if (!Array.isArray(raw)) return []
  return raw.map((_, i) => t(`igExportUninstall.steps.${i}`))
})

useSeoMeta({
  title: () => t('igExportUninstall.seoTitle'),
  description: () => t('igExportUninstall.seoDescription'),
  robots: 'noindex, nofollow',
})

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
}))

async function copyCode() {
  try {
    await navigator.clipboard.writeText(PROMO_CODE)
  } catch {
    const input = document.createElement('textarea')
    input.value = PROMO_CODE
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
  copied.value = true
  clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
