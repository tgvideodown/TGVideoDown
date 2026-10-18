<template>
  <a
    :href="reviewsUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="block max-w-3xl mx-auto mb-8 rounded-2xl border border-primary/15 bg-white/90 px-5 py-5 sm:px-6 sm:py-6 text-left shadow-sm hover:border-primary/40 transition-colors"
  >
    <div class="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
      <div class="flex items-center gap-4 sm:pr-8 sm:border-r sm:border-border">
        <p class="text-5xl font-heading font-bold text-text leading-none">{{ ratingValue }}</p>
        <div>
          <div class="flex items-center gap-0.5" :aria-label="ratingValue">
            <span v-for="star in 5" :key="star" class="relative inline-block w-5 h-5">
              <svg class="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                class="absolute inset-0 w-5 h-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                :style="{ clipPath: `inset(0 ${100 - starFill(star)}% 0 0)` }"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
          <p class="mt-1 text-sm text-gray-600">{{ ratingValue }} {{ $t('hero.trustStats.scoreCaption') }}</p>
          <p class="text-sm font-semibold text-text">{{ $t('hero.trustStats.reviewsValue') }} {{ $t('hero.trustStats.reviewsLabel') }}</p>
        </div>
      </div>
      <div>
        <p class="text-3xl font-heading font-bold text-text leading-none">{{ $t('hero.trustStats.usersValue') }}</p>
        <p class="mt-2 text-sm text-gray-600">{{ $t('hero.trustStats.usersLabel') }}</p>
      </div>
    </div>

    <p class="mt-5 mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
      {{ $t('hero.trustStats.recentTitle') }}
    </p>
    <div class="grid gap-3 sm:grid-cols-3">
      <blockquote
        v-for="review in reviews"
        :key="review.name"
        class="rounded-xl bg-gray-50 px-3 py-3"
      >
        <p class="text-sm text-gray-700 leading-relaxed">“{{ review.text }}”</p>
        <footer class="mt-2 text-xs text-gray-500">{{ review.name }}</footer>
      </blockquote>
    </div>
    <p class="mt-4 text-sm font-semibold text-primary">{{ $t('hero.trustStats.seeAll') }} →</p>
  </a>
</template>

<script setup>
const config = useRuntimeConfig()
const { t } = useI18n()

const reviewsUrl = `${config.public.extensionStoreUrl}/reviews`
const ratingValue = computed(() => t('hero.trustStats.ratingValue'))

const reviews = [
  { name: 'Paulo Cruz', text: 'awesome extension' },
  { name: 'Mansour Achkar', text: 'Perfect!' },
  { name: 'Mustafa Hasancık', text: 'good' }
]

function starFill(index) {
  const score = 4.9
  const fill = Math.min(Math.max(score - (index - 1), 0), 1)
  return Math.round(fill * 100)
}
</script>
