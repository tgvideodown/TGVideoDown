<template>
  <div class="pt-16">
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Terms of Use
          </h1>
          <p class="text-lg text-gray-600 mb-2">使用条款</p>
          <p class="text-gray-600">
            Operated by TGvideodown.com · Last updated: September 15, 2026
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom max-w-3xl mx-auto">
        <p class="text-gray-700 leading-relaxed mb-8">
          These Terms of Use apply to the TGVideoDown website and our Chrome extensions
          (including Telegram Video Downloader, Facebook Video Downloader, IG DM Bot,
          IG Follower Export Tool, and Instagram Comment Exporter). By installing or using our products, you agree to these terms.
        </p>
        <p class="text-gray-600 text-sm mb-10">
          本使用条款适用于 TGVideoDown 网站及我们的 Chrome 扩展（包括 Telegram 视频下载器、Facebook
          视频下载器、IG DM Bot、IG Follower Export Tool、Instagram 评论导出）。安装或使用我们的产品即表示您同意本条款。
        </p>

        <ComplianceTermsSection :show-footer-links="false" embedded />

        <div class="mt-12 pt-8 border-t border-border text-gray-700">
          <h2 class="text-xl font-heading font-bold text-text mb-3">Contact / 联系我们</h2>
          <p class="mb-2">
            Email:
            <a :href="mailto" class="text-primary font-semibold hover:underline">{{ email }}</a>
          </p>
          <p>
            <NuxtLink :to="localePath('/privacy')" class="text-primary font-semibold hover:underline">
              Privacy Policy
            </NuxtLink>
            ·
            <NuxtLink :to="localePath('/support')" class="text-primary font-semibold hover:underline">
              Support
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
const { email, mailto } = useSupportEmail()

const canonical = computed(() => `${config.public.siteUrl}${localePath('/terms')}`)

useSeoMeta({
  title: 'Terms of Use - TGVideoDown',
  description:
    'Terms of Use for TGVideoDown products: copyright, access restrictions, DMCA, platform disclaimer, and privacy.',
  ogTitle: 'Terms of Use - TGVideoDown',
  ogDescription: 'Terms of Use and compliance for TGVideoDown Chrome extensions and website.'
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }]
})
</script>
