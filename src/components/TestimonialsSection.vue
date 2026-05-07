<script setup>
const testimonials = [
  {
    content: "Global Edu completely transformed my child's approach to learning. The combination of offline classes and the mobile app is genius.",
    author: "Aizhan S.",
    role: "Parent of a 6th Grader"
  },
  {
    content: "The teachers here are amazing. They explain difficult math problems so easily, and the app helps me remember everything.",
    author: "Dias K.",
    role: "Admitted to NIS"
  },
  {
    content: "I loved the competitive ranking in the app. It pushed me to study harder every day and eventually get into RFMS.",
    author: "Madina T.",
    role: "Admitted to RFMS"
  }
]
</script>

<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Success Stories</h2>
        <p class="mt-4 text-xl text-gray-500">Hear from our students and parents.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
          <div class="text-primary-300 absolute top-6 right-8">
            <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 0C6.044 0 0 6.044 0 13.5V36H18V13.5H9C9 8.529 13.029 4.5 18 4.5V0H13.5ZM40.5 0C33.044 0 27 6.044 27 13.5V36H45V13.5H36C36 8.529 40.029 4.5 45 4.5V0H40.5Z" />
            </svg>
          </div>
          <p class="text-gray-600 text-lg italic mb-6 mt-4 relative z-10">"{{ testimonial.content }}"</p>
          <div>
            <p class="text-gray-900 font-bold">{{ testimonial.author }}</p>
            <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
