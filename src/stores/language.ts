import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentLang = ref('English')
  const languages = ['English', 'Русский', 'Қазақша']

  const translations: Record<string, any> = {
    'English': {
      nav: {
        about: 'About',
        features: 'Features',
        process: 'Process',
        app: 'App',
        contact: 'Contact'
      },
      hero: {
        badge: "Kazakhstan's Top Exam Prep",
        title1: "Global",
        title2: "Education",
        description: "Prepare for NIS, RFMSH and BIL exams with intensive training — combining expert offline instruction with a powerful mobile learning app."
      }
    },
    'Русский': {
      nav: {
        about: 'О нас',
        features: 'Преимущества',
        process: 'Процесс',
        app: 'Приложение',
        contact: 'Контакты'
      },
      hero: {
        badge: "Лучшая подготовка к экзаменам в Казахстане",
        title1: "Global",
        title2: "Education",
        description: "Готовьтесь к экзаменам в НИШ, РФМШ и БИЛ с интенсивным обучением — сочетающим экспертные офлайн-занятия с мощным мобильным приложением."
      }
    },
    'Қазақша': {
      nav: {
        about: 'Біз туралы',
        features: 'Ерекшеліктер',
        process: 'Процесс',
        app: 'Қосымша',
        contact: 'Байланыс'
      },
      hero: {
        badge: "Қазақстандағы ең үздік емтиханға дайындық",
        title1: "Global",
        title2: "Education",
        description: "НИШ, РФМШ және БИЛ емтихандарына қарқынды дайындық — сарапшылық офлайн-сабақтарды қуатты мобильді қосымшамен біріктіре отырып."
      }
    }
  }

  const t = computed(() => translations[currentLang.value])

  const setLanguage = (lang: string) => {
    currentLang.value = lang
  }

  return {
    currentLang,
    languages,
    t,
    setLanguage
  }
})
