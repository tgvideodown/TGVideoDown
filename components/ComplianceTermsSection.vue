<template>
  <section
    id="terms"
    :class="[
      'section-padding border-t border-border',
      embedded ? 'bg-transparent px-0 py-0 border-0' : 'bg-white'
    ]"
  >
    <div :class="embedded ? '' : 'container-custom max-w-3xl mx-auto'">
      <h2
        :class="
          embedded
            ? 'text-2xl font-heading font-bold text-text mb-2'
            : 'text-2xl md:text-3xl font-heading font-bold text-text mb-2'
        "
      >
        {{ t('compliance.title') }}
      </h2>
      <p class="text-gray-700 mb-8">{{ intro }}</p>

      <div class="space-y-8">
        <div
          v-for="item in items"
          :key="item.id"
          class="rounded-xl border border-border bg-slate-50/80 px-5 py-5"
        >
          <h3 class="text-lg font-heading font-semibold text-text mb-3">{{ item.title }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ item.body }}</p>
          <p v-if="item.hasEmail" class="mt-3">
            <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
          </p>
        </div>
      </div>

      <p v-if="showFooterLinks" class="mt-8 text-sm text-gray-600">
        {{ t('footer.support') }}:
        <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
        ·
        <NuxtLink :to="localePath('/support')" class="text-primary font-semibold hover:underline">
          {{ t('footer.support') }}
        </NuxtLink>
        ·
        <NuxtLink :to="localePath('/privacy')" class="text-primary font-semibold hover:underline">
          {{ t('footer.privacy') }}
        </NuxtLink>
        ·
        <NuxtLink :to="localePath('/terms')" class="text-primary font-semibold hover:underline">
          {{ t('footer.terms') }}
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  /** Optional product name for intro text */
  productName: {
    type: String,
    default: ''
  },
  /** When true, omit outer container padding (for nesting inside another prose page) */
  embedded: {
    type: Boolean,
    default: false
  },
  showFooterLinks: {
    type: Boolean,
    default: true
  }
})

const localePath = useLocalePath()
const { t } = useI18n()
const { email, mailto } = useSupportEmail()

const itemIds = ['copyright', 'access', 'dmca', 'platform', 'privacy']

const intro = computed(() => {
  if (!props.productName) return t('compliance.introDefault')
  return t('compliance.intro', { product: props.productName })
})

const items = computed(() =>
  itemIds.map((id) => ({
    id,
    title: t(`compliance.items.${id}.title`),
    body: t(`compliance.items.${id}.body`, { email: email.value }),
    hasEmail: id === 'dmca'
  }))
)
</script>
