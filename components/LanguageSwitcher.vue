<template>
  <div class="relative" ref="containerRef">
    <button
      @click="toggleMenu"
      class="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span class="text-sm font-medium text-text">{{ currentName }}</span>
      <svg class="w-4 h-4 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
    >
      <button
        v-for="item in allLocales"
        :key="item.code"
        type="button"
        @click="selectLocale(item.code)"
        class="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between"
        :class="{ 'bg-blue-50 text-blue-600': item.code === currentCode }"
      >
        <span>{{ item.name }}</span>
        <svg v-if="item.code === currentCode" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const router = useRouter()

const isOpen = ref(false)
const containerRef = ref(null)

// 当前语言信息
const currentCode = computed(() => locale.value)
const currentName = computed(() => {
  const found = locales.value?.find(l => l.code === locale.value)
  return found?.name || 'English'
})

// 所有可用语言
const allLocales = computed(() => {
  return locales.value || []
})

// 切换菜单显示
const toggleMenu = (e) => {
  e?.stopPropagation()
  console.log('🔵 点击按钮，当前状态:', isOpen.value)
  isOpen.value = !isOpen.value
  console.log('🔵 切换后状态:', isOpen.value)
}

// 选择语言
const selectLocale = async (code) => {
  console.log('🟢 选择语言:', code, '当前语言:', locale.value)
  
  if (code === locale.value) {
    console.log('🟡 相同语言，关闭菜单')
    isOpen.value = false
    return
  }
  
  try {
    console.log('🟢 开始切换语言到:', code)
    
    // 获取当前路径（去掉语言前缀）
    let currentPath = router.currentRoute.value.path
    
    // 移除现有语言前缀
    if (currentPath.startsWith('/cn/') || currentPath.startsWith('/es/')) {
      currentPath = currentPath.replace(/^\/[^/]+/, '') || '/'
    }
    
    // 生成新路径
    let newPath = currentPath
    if (code === 'en') {
      // 默认语言不需要前缀
      newPath = currentPath || '/'
    } else {
      // 其他语言需要前缀
      newPath = `/${code}${currentPath === '/' ? '' : currentPath}`
    }
    
    console.log('🟢 当前路径:', router.currentRoute.value.path)
    console.log('🟢 新路径:', newPath)
    
    // 设置语言并导航
    await setLocale(code)
    console.log('🟢 setLocale 完成，新语言:', locale.value)
    
    // 如果路径不同，才导航
    if (newPath !== router.currentRoute.value.path) {
      await navigateTo(newPath)
      console.log('🟢 导航完成')
    }
    
    isOpen.value = false
  } catch (error) {
    console.error('❌ 切换语言失败:', error)
    // 回退：只设置语言，不导航
    try {
      await setLocale(code)
      isOpen.value = false
    } catch (e) {
      console.error('❌ setLocale 也失败:', e)
    }
  }
}

// 点击外部关闭
onMounted(() => {
  console.log('✅ LanguageSwitcher 已挂载，当前语言:', locale.value)
  
  const handleClick = (e) => {
    if (containerRef.value && !containerRef.value.contains(e.target)) {
      isOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClick)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
})
</script>
