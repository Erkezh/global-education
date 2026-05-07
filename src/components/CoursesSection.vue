<script setup>
const courses = [
  {
    title: 'NIS Preparation',
    grades: 'Grades 5-6',
    description: 'Comprehensive preparation for Nazarbayev Intellectual Schools entrance exams focusing on logic, math, and languages.',
    outcome: 'High probability of admission with full scholarship.',
  },
  {
    title: 'RFMS Preparation',
    grades: 'Grades 6-7',
    description: 'Intensive math and physics training designed specifically for the Republican Physics and Mathematics School format.',
    outcome: 'Advanced problem-solving skills and guaranteed readiness.',
  },
  {
    title: 'BIL / KTL Preparation',
    grades: 'Grades 5-6',
    description: 'Specialized program for Bilim-Innovation Lyceums focusing on logical reasoning, mathematics, and critical thinking.',
    outcome: 'Strong academic foundation and exam success.',
  }
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Educational Tracks</h2>
        <p class="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">Choose the path that best fits your child's academic goals.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(course, index) in courses" :key="index" class="border border-gray-100 rounded-2xl p-8 hover:border-primary-500 transition-colors bg-white shadow-sm hover:shadow-lg">
          <div class="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            {{ course.grades }}
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ course.title }}</h3>
          <p class="text-gray-600 mb-6 flex-grow">{{ course.description }}</p>
          <div class="pt-6 border-t border-gray-100">
            <h4 class="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Outcome</h4>
            <p class="text-gray-900 font-medium">{{ course.outcome }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
