<script setup>
import IntensiveLearningIcon from '@/assets/svg/intensive-learning.svg'
import MobileTestingIcon from '@/assets/svg/mobile-testing.svg'
import TrackProgressIcon from '@/assets/svg/track-progress.svg'
import StudentRankingIcon from '@/assets/svg/student-ranking.svg'

const features = [
  {
    title: 'Intensive Learning',
    description: 'Expert instructors and structured programs to help you master every subject',
    icon: IntensiveLearningIcon
  },
  {
    title: 'Mobile Testing',
    description: 'Practice anytime, anywhere with our powerful and easy to use app',
    icon: MobileTestingIcon
  },
  {
    title: 'Track Progress',
    description: 'Monitor your results, strengths and weaknesses to improve faster',
    icon: TrackProgressIcon
  },
  {
    title: 'Student Ranking',
    description: 'Compete with other students and see your ranking on the leaderboard',
    icon: StudentRankingIcon
  }
]
</script>

<template>
  <section class="py-24 " id="advantages">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-100 shadow-[0px_2px_8px_0px_rgba(16,24,40,0.04)] bg-white mb-6">
          <svg class="w-4 h-4 text-[#008A1B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          </svg>
          <span class="text-sm font-semibold text-[#008A1B]">Features</span>
        </div>
        
        <h2 class="text-[40px] font-bold text-[#111827] mb-4 tracking-tight leading-tight">Everything you need to succeed</h2>
        <p class="text-lg text-[#6B7280]">Powerful tools and structured learning to help you achieve top results.</p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white rounded-[11px] px-[32px] py-[40px] text-center border border-gray-100 shadow-[0px_4px_20px_0px_rgba(16,24,40,0.03)] hover:shadow-[0px_8px_30px_0px_rgba(16,24,40,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-[24px]"
        >
          <!-- Icon Circle -->
          <div class="w-[120px] h-[120px] rounded-full bg-[#E5F7E9] flex items-center justify-center text-[#008A1B] mb-6">
            <img :src="feature.icon" :alt="feature.title" />
          </div>
          
          <h3 class="text-[24px] font-bold text-[#111827] mb-3">{{ feature.title }}</h3>
          <p class="text-black text-[18px] leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
      
    </div>
  </section>
</template>
