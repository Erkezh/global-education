<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AdvantagesSection from '@/components/AdvantagesSection.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import GradualBlur from '@/component/GradualBlur/GradualBlur.vue'
</script>

<template>
  <main class="w-full min-h-screen relative">
    <!-- Blur overlay directly behind the fixed header to fade out scrolling content -->
    <GradualBlur
      target="page"
      position="top"
      height="6rem"
      :strength="2.5"
      :zIndex="800"
      :divCount="5"
      curve="bezier"
      :exponential="true"
      class="pointer-events-none"
    />
    <AppHeader />
    <HeroSection />
    <AdvantagesSection />
    <HowItWorks />

  </main>
</template>
