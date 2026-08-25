<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
            {{ $t('privacy.hero.title') }}
          </h1>
          <p class="text-lg text-gray-600">
            {{ $t('privacy.hero.lastUpdated') }}: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <!-- Introduction -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.introduction.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.introduction.content')"></p>
          </div>

          <!-- Information We Collect -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.collection.title') }}
            </h2>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t('privacy.sections.collection.subtitle1') }}
            </h3>
            <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.collection.item1')"></li>
              <li v-html="$t('privacy.sections.collection.item2')"></li>
            </ul>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t('privacy.sections.collection.subtitle2') }}
            </h3>
            <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.collection.item3')"></li>
              <li v-html="$t('privacy.sections.collection.item4')"></li>
            </ul>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t('privacy.sections.collection.subtitle3') }}
            </h3>
            <p class="text-gray-700" v-html="$t('privacy.sections.collection.cookies')"></p>
          </div>

          <!-- Use of Information -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.use.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.use.content')"></p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.use.item1')"></li>
              <li v-html="$t('privacy.sections.use.item2')"></li>
              <li v-html="$t('privacy.sections.use.item3')"></li>
              <li v-html="$t('privacy.sections.use.item4')"></li>
              <li v-html="$t('privacy.sections.use.item5')"></li>
            </ul>
          </div>

          <!-- Data Retention -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.retention.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.retention.content')"></p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.retention.item1')"></li>
              <li v-html="$t('privacy.sections.retention.item2')"></li>
              <li v-html="$t('privacy.sections.retention.item3')"></li>
            </ul>
          </div>

          <!-- Sharing & Disclosure -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.sharing.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.sharing.content')"></p>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t('privacy.sections.sharing.subtitle1') }}
            </h3>
            <ul class="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.sharing.item1')"></li>
              <li v-html="$t('privacy.sections.sharing.item2')"></li>
            </ul>
            <h3 class="text-xl font-heading font-semibold text-text mb-3">
              {{ $t('privacy.sections.sharing.subtitle2') }}
            </h3>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.sharing.item3')"></li>
              <li v-html="$t('privacy.sections.sharing.item4')"></li>
              <li v-html="$t('privacy.sections.sharing.item5')"></li>
            </ul>
          </div>

          <!-- Security -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.security.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.security.content')"></p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.security.item1')"></li>
              <li v-html="$t('privacy.sections.security.item2')"></li>
              <li v-html="$t('privacy.sections.security.item3')"></li>
            </ul>
            <p class="text-gray-700 mt-4" v-html="$t('privacy.sections.security.note')"></p>
          </div>

          <!-- User Rights -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.rights.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.rights.content')"></p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li v-html="$t('privacy.sections.rights.item1')"></li>
              <li v-html="$t('privacy.sections.rights.item2')"></li>
              <li v-html="$t('privacy.sections.rights.item3')"></li>
              <li v-html="$t('privacy.sections.rights.item4')"></li>
            </ul>
          </div>

          <!-- Children's Privacy -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.children.title') }}
            </h2>
            <p class="text-gray-700" v-html="$t('privacy.sections.children.content')"></p>
          </div>

          <!-- Changes to Policy -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.changes.title') }}
            </h2>
            <p class="text-gray-700" v-html="$t('privacy.sections.changes.content')"></p>
          </div>

          <!-- Contact -->
          <div class="mb-12">
            <h2 class="text-2xl font-heading font-bold text-text mb-4">
              {{ $t('privacy.sections.contact.title') }}
            </h2>
            <p class="text-gray-700 mb-4" v-html="$t('privacy.sections.contact.content')"></p>
            <p class="text-gray-700">
              <a :href="mailto" class="text-primary hover:underline">
                {{ email }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const lastUpdated = '2024-01-01'
const { email, mailto } = useSupportEmail()

useSeoMeta({
  title: 'Privacy Policy - TGVideoDown',
  description: 'Read TGVideoDown\'s privacy policy to understand how we collect, use, and protect your information.',
  ogTitle: 'Privacy Policy - TGVideoDown',
  ogDescription: 'Read our privacy policy to understand how we protect your data.',
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
