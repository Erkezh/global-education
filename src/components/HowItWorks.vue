<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

gsap.registerPlugin(ScrollTrigger);

const langStore = useLanguageStore();
const { t } = storeToRefs(langStore);

const stepMeta = [
  {
    id: '01',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
    colorClass: 'bg-[#EFF6FF] text-[#2563EB]'
  },
  {
    id: '02',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    colorClass: 'bg-[#FFF7ED] text-[#F97316]'
  },
  {
    id: '03',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 10h8l-8 4h8"/></svg>`,
    colorClass: 'bg-[#FAF5FF] text-[#A855F7]'
  },
  {
    id: '04',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    colorClass: 'bg-[#FFF7ED] text-[#F97316]'
  }
]

const steps = computed(() =>
  t.value.howItWorks.steps.map((step, i) => ({
    ...step,
    ...stepMeta[i]
  }))
)

const stepElements = ref([]);

onMounted(() => {
  stepElements.value.forEach((el, index) => {
    if (!el) return;
    
    const isLeft = index % 2 === 0;
    
    gsap.fromTo(
      el,
      { opacity: 0, x: isLeft ? -100 : 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<template>
  <section class="py-24 bg-white" id="how-it-works">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-100 shadow-[0px_2px_8px_0px_rgba(16,24,40,0.04)] bg-white mb-6">
          <svg class="w-4 h-4 text-[#008A1B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          <span class="text-sm font-semibold text-[#008A1B]">{{ t.howItWorks.badge }}</span>
        </div>
        
        <h2 class="text-[40px] font-bold text-[#111827] mb-4 tracking-tight leading-tight">{{ t.howItWorks.title }}</h2>
        <p class="text-lg text-[#6B7280]">{{ t.howItWorks.subtitle }}</p>
      </div>

      <!-- Steps Column -->
      <div class="max-w-[1000px] mx-auto flex flex-col gap-6 px-4 md:px-8 overflow-hidden py-4">
        <div 
          v-for="(step, index) in steps" 
          :key="step.id"
          :ref="el => { if (el) stepElements[index] = el }"
          class="flex items-center w-full opacity-0"
          :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <!-- Number (15%) -->
          <div 
            class="hidden md:flex w-[15%] shrink-0 items-center"
            :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
          >
            <span class="text-[120px] font-bold text-gray-200 leading-none select-none tracking-tighter">{{ step.id }}</span>
          </div>
          
          <!-- Card (85%) -->
          <div 
            :class="[
              'w-full md:w-[85%] bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_0_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_0_rgba(0,0,0,0.06)] transition-all duration-300 px-8 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 z-10',
              index % 2 === 0 ? 'hover:translate-x-3 hover:-translate-y-1' : 'hover:-translate-x-3 hover:-translate-y-1'
            ]"
          >
            <div :class="['w-16 h-16 rounded-full flex items-center justify-center shrink-0', step.colorClass]">
              <div v-html="step.icon"></div>
            </div>
            <div>
              <h3 class="text-[20px] font-bold text-gray-900 mb-1">{{ step.title }}</h3>
              <p class="text-gray-500 text-[16px] leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
