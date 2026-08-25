<template>
  <ExtensionPrivacyPage :policy="policy" privacy-path="/ig-dm-bot-privacy" />
</template>

<script setup>
import { extensionPrivacyPolicies } from '~/data/extensionPrivacyPolicies.js'

const policy = extensionPrivacyPolicies.igDmBot
</script>
