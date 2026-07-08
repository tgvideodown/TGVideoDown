<template>
  <div />
</template>

<script setup>
const localePath = useLocalePath()

await navigateTo(localePath('/how-to-download-telegram-videos'), { redirectCode: 301 })
</script>
