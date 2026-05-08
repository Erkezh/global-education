<script setup>
import { ref, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { storeToRefs } from 'pinia'

const langStore = useLanguageStore()
const { t } = storeToRefs(langStore)

const formData = ref({
  name: '',
  phone: '',
  grade: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const isFormValid = computed(() => {
  return formData.value.name.trim().length > 0 &&
         formData.value.phone.trim().length > 0 &&
         formData.value.grade !== ''
})

const submitForm = async () => {
  if (!isFormValid.value) return
  
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    const response = await fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })
    
    if (response.ok) {
      isSuccess.value = true
      formData.value = { name: '', phone: '', grade: '' }
    } else {
      const errorData = await response.json()
      errorMessage.value = errorData.detail || t.value.form.errorDefault
    }
  } catch (error) {
    errorMessage.value = t.value.form.errorNetwork
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-primary-900 rounded-3xl shadow-2xl overflow-hidden">
        <div class="lg:grid lg:grid-cols-2">
          <div class="p-10 lg:p-12 text-white flex flex-col justify-center">
            <h2 class="text-3xl font-extrabold mb-4">{{ t.form.title }}</h2>
            <p class="text-primary-100 text-lg mb-8">{{ t.form.description }}</p>
            <ul class="space-y-4 text-primary-100">
              <li v-for="bullet in t.form.bullets" :key="bullet" class="flex items-center">
                <svg class="h-6 w-6 text-primary-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                {{ bullet }}
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-10 lg:p-12">
            <div v-if="isSuccess" class="h-full flex flex-col items-center justify-center text-center">
              <div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t.form.successTitle }}</h3>
              <p class="text-gray-500">{{ t.form.successMessage }}</p>
              <button @click="isSuccess = false" class="mt-8 text-primary-600 font-medium hover:text-primary-700">{{ t.form.submitAnother }}</button>
            </div>
            
            <form v-else @submit.prevent="submitForm" class="space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ t.form.formTitle }}</h3>
              
              <div v-if="errorMessage" class="p-4 bg-red-50 text-red-700 rounded-lg text-sm mb-4">
                {{ errorMessage }}
              </div>
              
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">{{ t.form.namePlaceholder }}</label>
                <input type="text" id="name" v-model="formData.name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="John Doe">
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">{{ t.form.phonePlaceholder }}</label>
                <input type="tel" id="phone" v-model="formData.phone" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="+7 (___) ___-__-__">
              </div>
              
              <div>
                <label for="grade" class="block text-sm font-medium text-gray-700">{{ t.form.gradePlaceholder }}</label>
                <select id="grade" v-model="formData.grade" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-primary-500 focus:border-primary-500 bg-white transition-colors">
                  <option value="" disabled>{{ t.form.gradeDefault }}</option>
                  <option v-for="grade in t.form.grades" :key="grade" :value="grade">{{ grade }}</option>
                </select>
              </div>
              
              <button type="submit" :disabled="!isFormValid || isLoading" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <span v-if="isLoading">{{ t.form.submitting }}</span>
                <span v-else>{{ t.form.submitBtn }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
