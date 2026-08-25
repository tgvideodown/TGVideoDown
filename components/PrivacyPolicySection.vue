<template>
  <div>
    <h2 class="text-2xl font-heading font-bold text-text mt-10 mb-4">{{ section.title }}</h2>
    <p
      v-for="(paragraph, pi) in section.paragraphs || []"
      :key="`p-${pi}`"
      class="text-gray-700"
      :class="{ 'mb-4': pi < (section.paragraphs?.length || 0) - 1 }"
    >
      {{ paragraph }}
    </p>

    <template v-if="section.subsections">
      <div v-for="(sub, si) in section.subsections" :key="`sub-${si}`">
        <h3 class="text-xl font-heading font-semibold text-text mt-6 mb-3">{{ sub.title }}</h3>
        <p
          v-for="(paragraph, pi) in sub.paragraphs || []"
          :key="`sp-${pi}`"
          class="text-gray-700"
        >
          {{ paragraph }}
        </p>
        <ul v-if="sub.list" class="list-disc pl-6 text-gray-700 space-y-2 my-4">
          <li v-for="(item, li) in sub.list" :key="`li-${li}`">{{ item }}</li>
        </ul>
        <p v-if="sub.after" class="text-gray-700">{{ sub.after }}</p>
      </div>
    </template>

    <ul v-if="section.list" class="list-disc pl-6 text-gray-700 space-y-2 my-4">
      <li v-for="(item, li) in section.list" :key="`l-${li}`">{{ item }}</li>
    </ul>

    <p v-if="section.contact || section.contactCn" class="text-gray-700 mt-4">
      <template v-if="section.contactCn">
        <strong>电子邮箱：</strong>
        <a :href="mailto" class="text-primary hover:underline">{{ email }}</a><br>
        <strong>网站：</strong>
        <a href="https://tgvideodown.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://tgvideodown.com</a>
      </template>
      <template v-else>
        <strong>Email:</strong>
        <a :href="mailto" class="text-primary hover:underline">{{ email }}</a><br>
        <strong>Website:</strong>
        <a href="https://tgvideodown.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://tgvideodown.com</a>
      </template>
    </p>
  </div>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true
  }
})

const { email, mailto } = useSupportEmail()
</script>
