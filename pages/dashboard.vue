<script setup>
/**
 * Hidden ops gate — not linked in nav/footer.
 * Redirects to the authenticated product-ops Worker.
 */
definePageMeta({
  layout: false,
})

const OPS_CONSOLE_URL = 'https://product-ops.leorock8808.workers.dev/login'

useSeoMeta({
  title: 'Ops',
  robots: 'noindex, nofollow',
})

useHead({
  meta: [{ 'http-equiv': 'refresh', content: `0;url=${OPS_CONSOLE_URL}` }],
})
</script>

<template>
  <div class="gate">
    <p>Redirecting to ops console…</p>
    <p>
      <a :href="OPS_CONSOLE_URL">Continue</a>
    </p>
  </div>
</template>

<style scoped>
.gate {
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 8px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  background: #0b1224;
  color: #e5e7eb;
  text-align: center;
}
a {
  color: #38bdf8;
}
</style>
