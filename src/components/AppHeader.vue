<script setup>
import { ref, computed } from 'vue'

const isLangMenuOpen = ref(false)
const currentLang = ref('English')
const languages = ['English', 'Русский', 'Қазақша']

const translations = {
  'English': {
    about: 'About',
    features: 'Features',
    process: 'Process',
    app: 'App',
    contact: 'Contact'
  },
  'Русский': {
    about: 'О нас',
    features: 'Преимущества',
    process: 'Процесс',
    app: 'Приложение',
    contact: 'Контакты'
  },
  'Қазақша': {
    about: 'Біз туралы',
    features: 'Ерекшеліктер',
    process: 'Процесс',
    app: 'Қосымша',
    contact: 'Байланыс'
  }
}

const t = computed(() => translations[currentLang.value])

const selectLanguage = (lang) => {
  currentLang.value = lang
  isLangMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-[999]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="@/assets/logo/logo-g.svg" alt="Logo" class="h-10 w-auto" />
      </a>
      
      <!-- Navigation Menu -->
      <nav class="hidden lg:flex space-x-8 items-center rounded-full border border-gray-200 shadow-[0px_2px_8px_0px_rgba(16,24,40,0.04)] px-[24px] h-[52px] bg-white absolute left-1/2 -translate-x-1/2">
        <a href="#about" class="text-black hover:text-[#008A1B] font-semibold transition">{{ t.about }}</a>
        <a href="#advantages" class="text-black hover:text-[#008A1B] font-semibold transition">{{ t.features }}</a>
        <a href="#how-it-works" class="text-black hover:text-[#008A1B] font-semibold transition">{{ t.process }}</a>
        <a href="#app" class="text-black hover:text-[#008A1B] font-semibold transition">{{ t.app }}</a>
        <a href="#contacts" class="text-black hover:text-[#008A1B] font-semibold transition">{{ t.contact }}</a>
      </nav>

      <!-- Right Side Actions -->
      <div class="flex items-center space-x-4">
        <!-- Language Switcher Dropdown -->
        <div class="relative">
          <button 
            @click="isLangMenuOpen = !isLangMenuOpen" 
            class="flex items-center justify-center space-x-1 text-black hover:text-[#008A1B] font-semibold focus:outline-none rounded-full border border-gray-200 shadow-[0px_2px_8px_0px_rgba(16,24,40,0.04)] px-[20px] h-[52px] bg-white"
          >
            <img src="@/assets/svg/lang.svg" alt="Language" class="h-5 w-5 mr-1" />
            <span>{{ currentLang }}</span>
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <!-- Dropdown Menu -->
          <div 
            v-if="isLangMenuOpen" 
            class="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden z-50"
          >
            <div class="py-1">
              <button 
                v-for="lang in languages" 
                :key="lang"
                @click="selectLanguage(lang)"
                class="block w-full text-left px-4 py-3 text-sm text-black hover:bg-[#e6f3e8] hover:text-[#008A1B] bg-white"
                :class="{ 'bg-[#e6f3e8] text-[#008A1B] font-bold': currentLang === lang }"
              >
                {{ lang }}
              </button>
            </div>
          </div>
        </div>

        
        <!-- Mobile Menu Button (Optional, just icon) -->
        <button class="lg:hidden text-gray-600 hover:text-[#008A1B] focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
