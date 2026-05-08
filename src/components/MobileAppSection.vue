<script setup>
import { useLanguageStore } from '@/stores/language'
import { storeToRefs } from 'pinia'

const langStore = useLanguageStore()
const { t } = storeToRefs(langStore)
</script>

<template>
  <section class="py-24 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div class="mb-12 lg:mb-0 order-2 lg:order-1 flex justify-center">
          <!-- Mobile app mockup -->
          <div class="relative mx-auto w-full max-w-xs">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 shadow-2xl transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative bg-white shadow-lg rounded-3xl p-4 border border-gray-100 flex flex-col h-[600px]">
              <div class="h-12 w-full bg-gray-100 rounded-t-2xl mb-4 flex items-center justify-center">
                <div class="w-16 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-lg p-4 flex flex-col space-y-4">
                <div class="h-8 bg-primary-100 rounded w-3/4"></div>
                <div class="h-32 bg-white shadow-sm border border-gray-100 rounded-lg"></div>
                <div class="h-32 bg-white shadow-sm border border-gray-100 rounded-lg"></div>
                <div class="h-32 bg-white shadow-sm border border-gray-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">{{ t.app.title }}</h2>
          <p class="text-xl text-gray-500 mb-8">{{ t.app.description }}</p>
          
          <dl class="space-y-6">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ t.app.items[0].title }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ t.app.items[0].description }}</dd>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ t.app.items[1].title }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ t.app.items[1].description }}</dd>
            </div>

            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ t.app.items[2].title }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ t.app.items[2].description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
