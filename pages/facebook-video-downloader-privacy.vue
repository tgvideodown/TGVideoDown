<template>
  <ExtensionPrivacyPage :policy="policy" privacy-path="/facebook-video-downloader-privacy" />
</template>

<script setup>
import { extensionPrivacyPolicies } from '~/data/extensionPrivacyPolicies.js'

const policy = extensionPrivacyPolicies.facebookVideoDownloader
</script>
