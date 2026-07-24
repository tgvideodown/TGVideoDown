<template>
  <header ref="headerRef" class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center space-x-2 cursor-pointer">
          <img src="~/assets/logo.png" alt="TGVideoDown Logo" class="w-12 h-12 rounded-lg object-contain" />
          <span class="font-heading font-bold text-xl text-text">TGVideoDown</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="localePath(item.path)"
            class="text-text hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            {{ item.text || $t(item.label) }}
          </NuxtLink>

          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-1 text-text hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              aria-haspopup="true"
              :aria-expanded="guideMenuOpen"
              aria-controls="desktop-guides-menu"
              @click.stop="guideMenuOpen = !guideMenuOpen"
              @keydown.escape="guideMenuOpen = false"
            >
              <span>{{ $t('footer.guides') }}</span>
              <svg
                class="h-4 w-4 transition-transform duration-200"
                :class="{ 'rotate-180': guideMenuOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-if="guideMenuOpen"
              id="desktop-guides-menu"
              class="absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-lg border border-border bg-white shadow-lg"
            >
              <NuxtLink
                v-for="item in guideItems"
                :key="item.path"
                :to="localePath(item.path)"
                class="block px-4 py-3 text-sm text-text transition-colors duration-200 hover:bg-primary-50 hover:text-primary cursor-pointer focus:outline-none focus-visible:bg-primary-50 focus-visible:text-primary"
                @click="closeMenus"
              >
                {{ item.text }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Language Switcher & CTA -->
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <a :href="extensionStoreUrl" target="_blank" rel="noopener noreferrer" class="btn-primary hidden sm:inline-block">
            {{ $t('nav.download') }}
          </a>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-text hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden pb-4 space-y-2"
      >
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path"
          :to="localePath(item.path)"
          @click="mobileMenuOpen = false"
          class="block py-2 text-text hover:text-primary transition-colors cursor-pointer"
        >
          {{ item.text || $t(item.label) }}
        </NuxtLink>

        <button
          type="button"
          class="flex w-full items-center justify-between py-2 text-left text-text hover:text-primary transition-colors cursor-pointer"
          :aria-expanded="mobileGuidesOpen"
          aria-controls="mobile-guides-menu"
          @click="mobileGuidesOpen = !mobileGuidesOpen"
        >
          <span>{{ $t('footer.guides') }}</span>
          <svg
            class="h-4 w-4 transition-transform duration-200"
            :class="{ 'rotate-180': mobileGuidesOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="mobileGuidesOpen" id="mobile-guides-menu" class="space-y-1 border-l border-border pl-4">
          <NuxtLink
            v-for="item in guideItems"
            :key="item.path"
            :to="localePath(item.path)"
            @click="closeMenus"
            class="block py-2 text-sm text-gray-700 hover:text-primary transition-colors cursor-pointer"
          >
            {{ item.text }}
          </NuxtLink>
        </div>

        <a 
          :href="extensionStoreUrl" 
          target="_blank"
          rel="noopener noreferrer"
          @click="mobileMenuOpen = false"
          class="block btn-primary text-center mt-4"
        >
          {{ $t('nav.download') }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
const extensionStoreUrl = config.public.extensionStoreUrl
const localePath = useLocalePath()
const route = useRoute()

const mobileMenuOpen = ref(false)
const mobileGuidesOpen = ref(false)
const guideMenuOpen = ref(false)
const headerRef = ref(null)

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/telegram-video-downloader', text: 'Telegram Downloader' },
  { path: '/blog', text: 'Blog' },
  // { path: '/features', label: 'nav.features' },
  // { path: '/pricing', label: 'nav.pricing' },
  { path: '/about', label: 'nav.about' }
]

const guideItems = [
  { path: '/telegram-media-downloader', text: 'Telegram Media Downloader' },
  { path: '/download-telegram-photos', text: 'Download Telegram Photos' },
  { path: '/how-to-download-telegram-videos', text: 'How to Download Telegram Videos' },
  { path: '/telegram-web-download-files', text: 'Telegram Web Download Files' },
  { path: '/telegram-video-downloader-chrome-extension-guide', text: 'Chrome Extension Guide' },
  { path: '/download-telegram-files-without-login', text: 'Download Files Without Login' },
  { path: '/download-telegram-private-channel-video', text: 'Private Channel Video' },
  { path: '/telegram-vs-whatsapp-media-download', text: 'Telegram vs WhatsApp Media' }
]

const closeMenus = () => {
  guideMenuOpen.value = false
  mobileGuidesOpen.value = false
  mobileMenuOpen.value = false
}

const handleDocumentClick = (event) => {
  if (headerRef.value && !headerRef.value.contains(event.target)) {
    guideMenuOpen.value = false
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenus()
  }
)

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>
