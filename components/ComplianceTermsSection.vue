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
        {{ terms.title }}
      </h2>
      <p class="text-sm font-semibold text-gray-500 mb-4">{{ terms.titleCn }}</p>
      <p class="text-gray-700 mb-2">{{ terms.intro }}</p>
      <p class="text-gray-600 mb-8 text-sm">{{ terms.introCn }}</p>

      <div class="space-y-8">
        <div
          v-for="(item, i) in terms.items"
          :key="i"
          class="rounded-xl border border-border bg-slate-50/80 px-5 py-5"
        >
          <h3 class="text-lg font-heading font-semibold text-text mb-1">{{ item.title }}</h3>
          <p class="text-sm font-medium text-gray-500 mb-3">{{ item.titleCn }}</p>
          <p class="text-gray-700 leading-relaxed mb-3">{{ fillEmail(item.body) }}</p>
          <p class="text-gray-700 leading-relaxed text-sm border-t border-border/60 pt-3">
            {{ fillEmail(item.bodyCn) }}
          </p>
          <p v-if="item.hasEmail" class="mt-3">
            <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
          </p>
        </div>
      </div>

      <p v-if="showFooterLinks" class="mt-8 text-sm text-gray-600">
        Support /
        <span class="text-gray-500">支持：</span>
        <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
        ·
        <NuxtLink :to="localePath('/support')" class="text-primary font-semibold hover:underline">
          Support
        </NuxtLink>
        ·
        <NuxtLink :to="localePath('/privacy')" class="text-primary font-semibold hover:underline">
          Privacy Policy
        </NuxtLink>
        ·
        <NuxtLink :to="localePath('/terms')" class="text-primary font-semibold hover:underline">
          Terms of Use
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup>
import { getComplianceTerms } from '~/data/complianceTerms.js'

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
const { email, mailto } = useSupportEmail()

const terms = computed(() => getComplianceTerms(props.productName || undefined))

function fillEmail(text) {
  return String(text || '').replace(/\{\{supportEmail\}\}/g, email.value)
}
</script>
