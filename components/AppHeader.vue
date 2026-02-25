<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 cursor-pointer">
          <img src="~/assets/logo.png" alt="TGVideoDown Logo" class="w-12 h-12 rounded-lg object-contain" />
          <span class="font-heading font-bold text-xl text-text">TGVideoDown</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-text hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            {{ $t(item.label) }}
          </NuxtLink>
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
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="block py-2 text-text hover:text-primary transition-colors cursor-pointer"
        >
          {{ $t(item.label) }}
        </NuxtLink>
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

const mobileMenuOpen = ref(false)

const navItems = [
  { path: '/', label: 'nav.home' },
  // { path: '/features', label: 'nav.features' },
  // { path: '/pricing', label: 'nav.pricing' },
  { path: '/about', label: 'nav.about' }
]
</script>
