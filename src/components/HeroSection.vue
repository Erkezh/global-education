<template>
  <section class="relative w-full min-h-[600px] flex items-center pt-4 pb-32 overflow-hidden">
    <!-- Aurora Background (made semi-transparent to blend with white) -->
    <div class="absolute inset-0 z-0 opacity-80">
      <Aurora
        :color-stops="['#7cff67', '#008A1B', '#7cff67']"
        :amplitude="1.0"
        :blend="0.5"
        :speed="1.0"
        :intensity="1.0"
        class="w-full h-full"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side: Text -->
        <div class="flex flex-col items-start space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-white rounded-full px-5 py-2.5 shadow-[0px_2px_8px_0px_rgba(16,24,40,0.04)]">
            <span class="w-2.5 h-2.5 rounded-full bg-[#008A1B]"></span>
            <span class="text-[#008A1B] font-normal text-sm sm:text-base">{{ t.hero.badge }}</span>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-6xl sm:text-7xl md:text-[80px] font-semibold leading-[1.1] text-black flex flex-col h-[2.2em]">
            <TextType 
              :text="t.hero.title1" 
              :typingSpeed="100" 
              :showCursor="showFirstCursor" 
              cursorCharacter="|"
              cursorClassName="text-black/50"
              :loop="false"
              as="div"
              className="h-[1.1em] flex items-center"
              :key="t.hero.title1"
            />
            <TextType 
              :text="t.hero.title2" 
              :typingSpeed="100" 
              :initialDelay="800"
              :showCursor="showSecondCursor" 
              cursorCharacter="|"
              cursorClassName="text-black/50"
              :loop="false"
              as="div"
              className="h-[1.1em] flex items-center text-[#008A1B]"
              :key="t.hero.title2"
            />
          </h1>
          
          <!-- Description -->
          <p class="text-black font-semibold text-lg sm:text-xl max-w-lg leading-relaxed mt-4">
            {{ t.hero.description }}
          </p>
        </div>
        
        <!-- Right Side: 3D Model -->
        <div class="relative flex justify-center lg:justify-end w-full h-[500px] lg:h-[700px] animate-fade-in-up">
          <PhoneModel />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Aurora from "./Aurora.vue";
import TextType from "@/component/TextType/TextType.vue";
import PhoneModel from "./PhoneModel.vue";
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

const langStore = useLanguageStore();
const { t, currentLang } = storeToRefs(langStore);

const showFirstCursor = ref(true);
const showSecondCursor = ref(false);

const startAnimation = () => {
  showFirstCursor.value = true;
  showSecondCursor.value = false;
  setTimeout(() => {
    showFirstCursor.value = false;
    showSecondCursor.value = true;
  }, 800);
};

onMounted(() => {
  startAnimation();
});

watch(currentLang, () => {
  startAnimation();
});
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}
</style>
