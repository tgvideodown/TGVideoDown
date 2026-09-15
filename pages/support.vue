<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-4">Support</h1>
          <p class="text-lg text-gray-600 mb-2">支持与帮助</p>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Need help with TGVideoDown or our Chrome extensions? Contact us below.
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto space-y-10">
        <div class="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 class="text-xl font-heading font-bold text-text mb-3">Contact Us / 联系我们</h2>
          <p class="text-gray-700 mb-4">
            For product support, copyright / DMCA notices, or privacy questions, email:
          </p>
          <a
            :href="mailto"
            class="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            {{ email }}
          </a>
          <p class="mt-4 text-sm text-gray-600">
            产品支持、版权/DMCA 投诉或隐私相关问题，请发送邮件至上述地址。
          </p>
        </div>

        <div>
          <h2 class="text-xl font-heading font-bold text-text mb-4">Related pages / 相关页面</h2>
          <ul class="space-y-2 text-gray-700">
            <li>
              <NuxtLink :to="localePath('/terms')" class="text-primary font-semibold hover:underline">
                Terms of Use / 使用条款
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy')" class="text-primary font-semibold hover:underline">
                Privacy Policy / 隐私政策
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')" class="text-primary font-semibold hover:underline">
                About / 关于我们
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
const { email, mailto } = useSupportEmail()

const canonical = computed(() => `${config.public.siteUrl}${localePath('/support')}`)

useSeoMeta({
  title: 'Support - TGVideoDown',
  description:
    'Contact TGVideoDown support at support@tgvideodown.com for product help, DMCA, and privacy questions.',
  ogTitle: 'Support - TGVideoDown',
  ogDescription: 'Get help with TGVideoDown Chrome extensions. Email support@tgvideodown.com.'
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>
