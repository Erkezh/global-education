<script setup>
const steps = [
  { id: '01', name: 'Submit Application', description: 'Fill out our simple online form to express your interest.' },
  { id: '02', name: 'Consultation', description: 'We will contact you to discuss goals and schedule an initial assessment.' },
  { id: '03', name: 'Attend Classes', description: 'Start attending our interactive and comprehensive offline classes.' },
  { id: '04', name: 'App Testing', description: 'Regularly take tests in our mobile app to track learning.' },
  { id: '05', name: 'Achieve Goals', description: 'See continuous improvement and ace the final entrance exams.' },
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
        <p class="mt-4 text-xl text-gray-500">Your journey to success in five simple steps.</p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100" aria-hidden="true"></div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div v-for="step in steps" :key="step.id" class="relative text-center">
            <div class="w-24 h-24 mx-auto bg-white border-4 border-primary-50 rounded-full flex items-center justify-center relative z-10 shadow-sm">
              <span class="text-2xl font-bold text-primary-600">{{ step.id }}</span>
            </div>
            <h3 class="mt-6 text-lg font-bold text-gray-900">{{ step.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
