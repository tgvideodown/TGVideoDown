<template>
  <footer class="bg-text text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <img src="~/assets/logo.png" alt="TGVideoDown Logo" class="w-12 h-12 rounded-lg object-contain" />
            <span class="font-heading font-bold text-xl">TGVideoDown</span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-heading font-semibold mb-4">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-2">
            <!-- <li>
              <NuxtLink to="/features" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('nav.features') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/pricing" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('nav.pricing') }}
              </NuxtLink>
            </li> -->
            <li>
              <NuxtLink :to="localePath('/about')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/blog')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Guides -->
        <div>
          <h3 class="font-heading font-semibold mb-4">{{ $t('footer.guides') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/download-telegram-private-channel-video')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('footer.guidePrivate') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/how-to-download-telegram-videos')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('footer.guideHowTo') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/blog/telegram-video-downloader-guide')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('footer.guideAlt') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Our Extensions -->
        <div>
          <h3 class="font-heading font-semibold mb-4">{{ $t('footer.extensions') }}</h3>
          <ul class="space-y-2">
            <li v-for="item in extensionLinks" :key="item.path">
              <NuxtLink
                :to="localePath(item.path)"
                class="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {{ $t(item.labelKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="font-heading font-semibold mb-4">{{ $t('footer.support') }}</h3>
          <ul class="space-y-2">
            <li>
              <a :href="mailto" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ email }}
              </a>
            </li>
            <li>
              <NuxtLink :to="localePath('/support')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('footer.supportPage') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/terms')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('footer.terms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {{ $t('footer.privacy') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="Twitter">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { siteExtensionsFooter } from '~/data/siteExtensions.js'

const localePath = useLocalePath()
const { email, mailto } = useSupportEmail()

const extensionLinks = siteExtensionsFooter
</script>
