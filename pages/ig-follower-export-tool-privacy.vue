<template>
  <ExtensionPrivacyPage :policy="policy" privacy-path="/ig-follower-export-tool-privacy" />
</template>

<script setup>
import { extensionPrivacyPolicies } from '~/data/extensionPrivacyPolicies.js'

const policy = extensionPrivacyPolicies.igFollowerExport
</script>
