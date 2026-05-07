<script setup>
const features = [
  {
    title: 'Intensive Learning',
    description: 'Expert instructors and structured programs to help you master every subject',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  {
    title: 'Mobile Testing',
    description: 'Practice anytime, anywhere with our powerful and easy to use app',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`
  },
  {
    title: 'Track Progress',
    description: 'Monitor your results, strengths and weaknesses to improve faster',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="m3 14 6-6 4 4 8-8"/></svg>`
  },
  {
    title: 'Student Ranking',
    description: 'Compete with other students and see your ranking on the leaderboard',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`
  }
]
</script>

<template>
  <section class="py-24 bg-[#FAFAFA]" id="advantages">
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white rounded-[24px] p-8 text-center border border-gray-100 shadow-[0px_4px_20px_0px_rgba(16,24,40,0.03)] hover:shadow-[0px_8px_30px_0px_rgba(16,24,40,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
        >
          <!-- Icon Circle -->
          <div class="w-24 h-24 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#008A1B] mb-6">
            <div v-html="feature.icon"></div>
          </div>
          
          <h3 class="text-xl font-bold text-[#111827] mb-3">{{ feature.title }}</h3>
          <p class="text-[#6B7280] text-[15px] leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
      
    </div>
  </section>
</template>
