<template>
  <div />
</template>

<script setup>
const localePath = useLocalePath()

await navigateTo(localePath('/download-telegram-private-channel-video'), { redirectCode: 301 })
</script>
