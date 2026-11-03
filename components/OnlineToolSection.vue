<template>
  <section id="online-tool" class="relative pb-10 md:pb-12 -mt-2">
    <div class="absolute inset-0 bg-gradient-to-b from-primary-50/40 via-white to-white pointer-events-none"></div>
    <div class="container-custom relative z-10">
      <div class="max-w-3xl mx-auto rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
        <div class="px-5 pt-5 pb-4 sm:px-6 sm:pt-6">
          <div class="flex items-start justify-between gap-3 mb-3">
            <p class="text-sm font-semibold text-primary">{{ $t('onlineTool.kicker') }}</p>
            <span class="inline-flex items-center rounded-full bg-green-50 text-green-700 border border-green-200 px-2.5 py-0.5 text-xs font-semibold">
              {{ $t('onlineTool.freeBadge') }}
            </span>
          </div>

          <h2 class="text-xl sm:text-2xl font-heading font-bold text-text leading-tight mb-2">
            {{ $t('onlineTool.title') }}
          </h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-5">
            {{ $t('onlineTool.lead') }}
          </p>

          <label class="block text-sm font-semibold text-text mb-2" for="tg-post-url">
            {{ $t('onlineTool.inputLabel') }}
          </label>

          <div class="flex flex-col sm:flex-row gap-2.5">
            <div
              class="flex-1 flex items-center gap-2 min-h-11 rounded-xl border bg-slate-50 px-3"
              :class="errorKey ? 'border-red-300' : 'border-border focus-within:border-primary/50 focus-within:bg-white'"
            >
              <input
                id="tg-post-url"
                v-model="url"
                type="url"
                inputmode="url"
                autocomplete="off"
                spellcheck="false"
                class="flex-1 min-w-0 bg-transparent py-2.5 text-sm text-text outline-none placeholder:text-gray-400"
                :placeholder="$t('onlineTool.placeholder')"
                :disabled="phase === 'loading'"
                @keydown.enter.prevent="submit"
              />
              <button
                v-if="url && phase !== 'loading'"
                type="button"
                class="shrink-0 p-1.5 rounded-md text-gray-400 hover:text-text hover:bg-gray-100 cursor-pointer"
                :aria-label="$t('onlineTool.clear')"
                @click="clearInput"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                type="button"
                class="shrink-0 inline-flex items-center gap-1 rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs font-semibold text-text hover:bg-gray-50 cursor-pointer disabled:opacity-50"
                :disabled="phase === 'loading'"
                @click="pasteFromClipboard"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {{ $t('onlineTool.paste') }}
              </button>
            </div>

            <button
              type="button"
              class="btn-secondary min-h-11 px-5 inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-wait"
              :disabled="phase === 'loading'"
              @click="submit"
            >
              <span v-if="phase === 'loading'" class="online-tool-spinner" aria-hidden="true" />
              {{ phase === 'loading' ? $t('onlineTool.loadingCta') : $t('onlineTool.submit') }}
            </button>
          </div>

          <p v-if="errorKey" class="mt-2 text-sm text-red-600">{{ $t(errorKey) }}</p>

          <div v-if="phase === 'loading'" class="mt-4" role="status" aria-live="polite">
            <div class="flex items-center justify-between text-xs font-semibold text-gray-500 mb-1.5">
              <span>{{ $t('onlineTool.loadingLabel') }}</span>
              <span>{{ progress }}%</span>
            </div>
            <div class="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                class="h-full rounded-full bg-primary transition-[width] duration-200 ease-linear"
                :style="{ width: `${progress}%` }"
              />
            </div>
            <p class="mt-2 text-sm text-gray-500">{{ $t('onlineTool.loadingHint') }}</p>
          </div>

          <div class="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
            <p class="inline-flex items-center gap-1.5 text-gray-500">
              <svg class="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              {{ $t('onlineTool.privacyNote') }}
            </p>
            <button
              type="button"
              class="text-primary font-semibold hover:underline cursor-pointer text-left disabled:opacity-50"
              :disabled="phase === 'loading'"
              @click="useSample"
            >
              {{ $t('onlineTool.trySample') }}
            </button>
          </div>

          <div
            v-if="phase === 'result'"
            class="mt-5 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-4 text-left"
          >
            <div class="flex gap-3">
              <span class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700" aria-hidden="true">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="min-w-0">
                <p class="font-heading font-bold text-text mb-1">{{ $t('onlineTool.resultTitle') }}</p>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ $t('onlineTool.resultBody') }}</p>
                <a
                  :href="extensionStoreUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 11H19V7a2 2 0 00-2-2h-4V3.5a1.5 1.5 0 00-3 0V5H6a2 2 0 00-2 2v4H2.5a1.5 1.5 0 000 3H4v4a2 2 0 002 2h4v1.5a1.5 1.5 0 003 0V18h4a2 2 0 002-2v-4h1.5a1.5 1.5 0 000-3z" />
                  </svg>
                  {{ $t('onlineTool.resultCta') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-900 text-white px-5 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div class="flex gap-3 min-w-0 flex-1">
            <span class="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-200" aria-hidden="true">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 11H17V7.5a1 1 0 00-1-1h-3.5V3a1 1 0 00-1-1H10a1 1 0 00-1 1v3.5H5.5a1 1 0 00-1 1V11H1a1 1 0 00-1 1v2a1 1 0 001 1h3.5v3.5a1 1 0 001 1H9V23a1 1 0 001 1h1.5a1 1 0 001-1v-3.5H16a1 1 0 001-1V15H20.5a1 1 0 001-1v-2a1 1 0 00-1-1z" />
              </svg>
            </span>
            <div class="min-w-0">
              <p class="text-sm font-semibold leading-snug">{{ $t('onlineTool.bannerTitle') }}</p>
              <p class="mt-1 text-xs text-slate-300 leading-relaxed">{{ $t('onlineTool.bannerBody') }}</p>
            </div>
          </div>
          <a
            :href="extensionStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="shrink-0 text-sm font-semibold text-primary-200 hover:text-white transition-colors cursor-pointer"
          >
            {{ $t('onlineTool.bannerCta') }} →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const SAMPLE_URL = 'https://t.me/durov/444'
const LOADING_MS = 10000

const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl

const url = ref('')
const phase = ref('idle') // idle | loading | result
const errorKey = ref('')
const progress = ref(0)

let loadingTimer = null
let progressTimer = null

onBeforeUnmount(() => {
  stopLoading()
})

function clearInput() {
  url.value = ''
  errorKey.value = ''
  if (phase.value !== 'loading') phase.value = 'idle'
}

function useSample() {
  url.value = SAMPLE_URL
  errorKey.value = ''
  if (phase.value !== 'loading') phase.value = 'idle'
}

async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    if (text) {
      url.value = text.trim()
      errorKey.value = ''
      if (phase.value !== 'loading') phase.value = 'idle'
    }
  } catch {
    errorKey.value = 'onlineTool.pasteFailed'
  }
}

function isValidTelegramPostUrl(raw) {
  const value = String(raw || '').trim()
  if (!value) return false
  let parsed
  try {
    parsed = new URL(value.includes('://') ? value : `https://${value}`)
  } catch {
    return false
  }
  const host = parsed.hostname.replace(/^www\./, '').toLowerCase()
  if (!['t.me', 'telegram.me', 'telegram.dog'].includes(host)) return false
  const parts = parsed.pathname.split('/').filter(Boolean)
  if (parts.length < 2) return false
  if (parts[0] === 'c' || parts[0] === 's') {
    return parts.length >= 3 && /^\d+$/.test(parts[parts.length - 1].split('?')[0])
  }
  // /username/123 or /+hash/123 — last segment should look like a message id
  const last = parts[parts.length - 1].split('?')[0]
  return /^\d+$/.test(last)
}

function stopLoading() {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
  if (progressTimer) {
    clearInterval(progressTimer)
    progressTimer = null
  }
}

function startLoading() {
  stopLoading()
  phase.value = 'loading'
  progress.value = 0
  const started = Date.now()
  progressTimer = setInterval(() => {
    const elapsed = Date.now() - started
    progress.value = Math.min(99, Math.round((elapsed / LOADING_MS) * 100))
  }, 120)
  loadingTimer = setTimeout(() => {
    stopLoading()
    progress.value = 100
    phase.value = 'result'
  }, LOADING_MS)
}

function submit() {
  errorKey.value = ''
  const value = url.value.trim()
  if (!value) {
    errorKey.value = 'onlineTool.errorEmpty'
    phase.value = 'idle'
    return
  }
  if (!isValidTelegramPostUrl(value)) {
    errorKey.value = 'onlineTool.errorInvalid'
    phase.value = 'idle'
    return
  }
  url.value = value.includes('://') ? value : `https://${value}`
  startLoading()
}
</script>

<style scoped>
.online-tool-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: online-tool-spin 0.7s linear infinite;
}

@keyframes online-tool-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .online-tool-spinner {
    animation: none;
  }
}
</style>
