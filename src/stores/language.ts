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
      },
      features: {
        badge: 'Features',
        title: 'Everything you need to succeed',
        subtitle: 'Powerful tools and structured learning to help you achieve top results.',
        items: [
          { title: 'Intensive Learning', description: 'Expert instructors and structured programs to help you master every subject' },
          { title: 'Mobile Testing', description: 'Practice anytime, anywhere with our powerful and easy to use app' },
          { title: 'Track Progress', description: 'Monitor your results, strengths and weaknesses to improve faster' },
          { title: 'Student Ranking', description: 'Compete with other students and see your ranking on the leaderboard' }
        ]
      },
      howItWorks: {
        badge: 'How it works',
        title: 'Simple steps to better results',
        subtitle: 'Attend offline classes, take tests in the app, and continuously improve your performance.',
        steps: [
          { title: 'Join the Program', description: 'Start your journey with structured offline classes guided by experienced teachers.' },
          { title: 'Learn and Practice', description: 'Build strong knowledge through intensive lessons and regular practice.' },
          { title: 'Take Tests in the App', description: 'Complete tests easily in the mobile app and check your understanding.' },
          { title: 'Track Progress and Improve', description: 'Monitor your results, earn points, and improve your performance over time.' }
        ]
      },
      about: {
        title: 'About Our Center',
        description: 'Global Education Center is a premium educational facility dedicated to preparing students for competitive schools through a rigorous curriculum and advanced technology.',
        items: [
          { title: 'Focused Tracks', description: 'Specialized preparation for NIS, RFMS, and BIL/KTL entrance exams with tailored materials.' },
          { title: 'Offline Excellence', description: 'High-quality offline teaching in modern, comfortable classrooms with experienced instructors.' },
          { title: 'Mobile Integration', description: 'Continuous assessment through our proprietary mobile app for tests, ranking, and progress tracking.' }
        ]
      },
      courses: {
        title: 'Our Educational Tracks',
        subtitle: "Choose the path that best fits your child's academic goals.",
        outcomeLabel: 'Outcome',
        items: [
          { title: 'NIS Preparation', grades: 'Grades 5-6', description: 'Comprehensive preparation for Nazarbayev Intellectual Schools entrance exams focusing on logic, math, and languages.', outcome: 'High probability of admission with full scholarship.' },
          { title: 'RFMS Preparation', grades: 'Grades 6-7', description: 'Intensive math and physics training designed specifically for the Republican Physics and Mathematics School format.', outcome: 'Advanced problem-solving skills and guaranteed readiness.' },
          { title: 'BIL / KTL Preparation', grades: 'Grades 5-6', description: 'Specialized program for Bilim-Innovation Lyceums focusing on logical reasoning, mathematics, and critical thinking.', outcome: 'Strong academic foundation and exam success.' }
        ]
      },
      app: {
        title: 'Our Proprietary Mobile App',
        description: 'Take learning beyond the classroom with our custom-built mobile application designed to reinforce knowledge and track progress.',
        items: [
          { title: 'Test-taking anytime', description: 'Access a vast library of practice tests mimicking real exam conditions directly from your phone.' },
          { title: 'Instant Results', description: 'Get immediate feedback on your performance with detailed explanations for every question.' },
          { title: 'Student Profile', description: 'A personalized dashboard showing strengths, weaknesses, and overall readiness for target schools.' }
        ]
      },
      testimonials: {
        title: 'Success Stories',
        subtitle: 'Hear from our students and parents.',
        items: [
          { content: "Global Edu completely transformed my child's approach to learning. The combination of offline classes and the mobile app is genius.", author: 'Aizhan S.', role: 'Parent of a 6th Grader' },
          { content: 'The teachers here are amazing. They explain difficult math problems so easily, and the app helps me remember everything.', author: 'Dias K.', role: 'Admitted to NIS' },
          { content: 'I loved the competitive ranking in the app. It pushed me to study harder every day and eventually get into RFMS.', author: 'Madina T.', role: 'Admitted to RFMS' }
        ]
      },
      contacts: {
        tagline: 'Empowering students to achieve their highest potential through innovative offline and online education.',
        contactTitle: 'Contact Us',
        linksTitle: 'Quick Links',
        chatTitle: 'Chat With Us',
        chatDescription: 'Have questions? We are available on WhatsApp.',
        links: { about: 'About Us', courses: 'Our Courses', advantages: 'Advantages' }
      },
      form: {
        title: 'Start Your Journey Today',
        description: 'Leave an application and our managers will contact you shortly to provide a free consultation.',
        bullets: ['Free initial assessment', 'Personalized study plan', 'Access to mobile app demo'],
        formTitle: 'Apply Now',
        namePlaceholder: 'Full Name *',
        phonePlaceholder: 'Phone Number *',
        gradePlaceholder: 'Current Grade *',
        gradeDefault: 'Select grade',
        grades: ['Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Other'],
        submitBtn: 'Apply Now',
        submitting: 'Submitting...',
        successTitle: 'Application Submitted!',
        successMessage: 'Thank you for your interest. We will be in touch soon.',
        submitAnother: 'Submit another',
        errorDefault: 'Failed to submit application. Please try again later.',
        errorNetwork: 'Network error. Please try again later.'
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
      },
      features: {
        badge: 'Возможности',
        title: 'Всё необходимое для успеха',
        subtitle: 'Мощные инструменты и структурированное обучение для достижения лучших результатов.',
        items: [
          { title: 'Интенсивное обучение', description: 'Опытные преподаватели и структурированные программы для освоения каждого предмета' },
          { title: 'Тестирование в приложении', description: 'Практикуйтесь в любое время и в любом месте с нашим мощным и удобным приложением' },
          { title: 'Отслеживание прогресса', description: 'Контролируйте свои результаты, сильные и слабые стороны для более быстрого улучшения' },
          { title: 'Рейтинг студентов', description: 'Соревнуйтесь с другими учениками и следите за своим местом в рейтинге' }
        ]
      },
      howItWorks: {
        badge: 'Как это работает',
        title: 'Простые шаги к лучшим результатам',
        subtitle: 'Посещайте офлайн-занятия, проходите тесты в приложении и непрерывно улучшайте свои показатели.',
        steps: [
          { title: 'Запись в программу', description: 'Начните своё обучение со структурированных офлайн-занятий под руководством опытных преподавателей.' },
          { title: 'Учись и практикуйся', description: 'Формируйте прочные знания через интенсивные уроки и регулярную практику.' },
          { title: 'Сдавай тесты в приложении', description: 'Легко проходи тесты в мобильном приложении и проверяй своё понимание материала.' },
          { title: 'Следи за прогрессом и совершенствуйся', description: 'Контролируй свои результаты, зарабатывай баллы и улучшай показатели с каждым днём.' }
        ]
      },
      about: {
        title: 'О нашем центре',
        description: 'Global Education Center — это премиальное учебное заведение, нацеленное на подготовку учеников к поступлению в конкурентные школы с помощью строгой учебной программы и передовых технологий.',
        items: [
          { title: 'Специализированные треки', description: 'Целенаправленная подготовка к вступительным экзаменам НИШ, РФМШ и БИЛ/КТЛ с адаптированными материалами.' },
          { title: 'Качественное офлайн-обучение', description: 'Высококачественное обучение в современных, комфортабельных классах с опытными преподавателями.' },
          { title: 'Мобильная интеграция', description: 'Непрерывная оценка знаний через наше фирменное мобильное приложение: тесты, рейтинг и прогресс.' }
        ]
      },
      courses: {
        title: 'Наши образовательные треки',
        subtitle: 'Выберите путь, который наилучшим образом соответствует академическим целям вашего ребёнка.',
        outcomeLabel: 'Результат',
        items: [
          { title: 'Подготовка к НИШ', grades: '5-6 класс', description: 'Комплексная подготовка к вступительным экзаменам в Назарбаев Интеллектуальные школы: логика, математика и языки.', outcome: 'Высокая вероятность поступления на полную стипендию.' },
          { title: 'Подготовка к РФМШ', grades: '6-7 класс', description: 'Интенсивная подготовка по математике и физике, разработанная специально для формата Республиканской физико-математической школы.', outcome: 'Развитые навыки решения задач и гарантированная готовность.' },
          { title: 'Подготовка к БИЛ / КТЛ', grades: '5-6 класс', description: 'Специализированная программа для Лицеев «Білім-Инновация», ориентированная на логическое мышление, математику и критическое мышление.', outcome: 'Крепкая академическая база и успех на экзаменах.' }
        ]
      },
      app: {
        title: 'Наше фирменное мобильное приложение',
        description: 'Выходи за пределы классной комнаты с нашим собственным мобильным приложением, созданным для закрепления знаний и отслеживания прогресса.',
        items: [
          { title: 'Тесты в любое время', description: 'Обширная библиотека практических тестов, воссоздающих реальные условия экзамена прямо на вашем телефоне.' },
          { title: 'Мгновенные результаты', description: 'Получайте немедленную обратную связь с подробными объяснениями к каждому вопросу.' },
          { title: 'Профиль ученика', description: 'Персонализированная панель, показывающая сильные, слабые стороны и общую готовность к поступлению.' }
        ]
      },
      testimonials: {
        title: 'Истории успеха',
        subtitle: 'Отзывы наших учеников и родителей.',
        items: [
          { content: 'Global Edu полностью изменил подход моего ребёнка к учёбе. Сочетание офлайн-занятий и мобильного приложения — это гениально.', author: 'Айжан С.', role: 'Мама ученика 6 класса' },
          { content: 'Учителя здесь потрясающие. Они так легко объясняют сложные задачи по математике, а приложение помогает всё запомнить.', author: 'Диас К.', role: 'Поступил в НИШ' },
          { content: 'Мне очень понравился соревновательный рейтинг в приложении. Он мотивировал меня учиться усерднее каждый день, и в итоге я поступил в РФМШ.', author: 'Мадина Т.', role: 'Поступила в РФМШ' }
        ]
      },
      contacts: {
        tagline: 'Помогаем ученикам раскрыть свой потенциал через инновационное офлайн и онлайн-образование.',
        contactTitle: 'Свяжитесь с нами',
        linksTitle: 'Быстрые ссылки',
        chatTitle: 'Напишите нам',
        chatDescription: 'Есть вопросы? Мы доступны в WhatsApp.',
        links: { about: 'О нас', courses: 'Наши курсы', advantages: 'Преимущества' }
      },
      form: {
        title: 'Начните своё обучение сегодня',
        description: 'Оставьте заявку, и наши менеджеры свяжутся с вами для бесплатной консультации.',
        bullets: ['Бесплатная первоначальная оценка', 'Персональный учебный план', 'Доступ к демо мобильного приложения'],
        formTitle: 'Подать заявку',
        namePlaceholder: 'Полное имя *',
        phonePlaceholder: 'Номер телефона *',
        gradePlaceholder: 'Текущий класс *',
        gradeDefault: 'Выберите класс',
        grades: ['4 класс', '5 класс', '6 класс', '7 класс', 'Другой'],
        submitBtn: 'Подать заявку',
        submitting: 'Отправка...',
        successTitle: 'Заявка отправлена!',
        successMessage: 'Спасибо за ваш интерес. Мы скоро свяжемся с вами.',
        submitAnother: 'Отправить ещё',
        errorDefault: 'Не удалось отправить заявку. Пожалуйста, попробуйте позже.',
        errorNetwork: 'Ошибка сети. Пожалуйста, попробуйте позже.'
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
      },
      features: {
        badge: 'Мүмкіндіктер',
        title: 'Жетістік үшін қажеттінің бәрі',
        subtitle: 'Ең жоғары нәтижеге жету үшін қуатты құралдар және құрылымдалған оқыту.',
        items: [
          { title: 'Қарқынды оқыту', description: 'Әр пәнді игеруге көмектесетін тәжірибелі оқытушылар мен құрылымдалған бағдарламалар' },
          { title: 'Мобильді тестілеу', description: 'Қуатты және қолдануға ыңғайлы қосымшамен кез-келген уақытта, кез-келген жерде жаттығыңыз' },
          { title: 'Прогресті бақылау', description: 'Тезірек жақсарту үшін нәтижелеріңізді, күшті және әлсіз жақтарыңызды бақылаңыз' },
          { title: 'Студенттер рейтингі', description: 'Басқа оқушылармен бәсекелесіп, көшбасшылар тізіміндегі орныңызды қараңыз' }
        ]
      },
      howItWorks: {
        badge: 'Қалай жұмыс істейді',
        title: 'Жақсы нәтижеге апаратын қарапайым қадамдар',
        subtitle: 'Офлайн сабақтарға қатысыңыз, қосымшада тест тапсырыңыз және үздіксіз жетілдіріңіз.',
        steps: [
          { title: 'Бағдарламаға тіркелу', description: 'Тәжірибелі мұғалімдердің жетекшілігімен құрылымдалған офлайн сабақтармен оқуды бастаңыз.' },
          { title: 'Үйреніп, жаттығыңыз', description: 'Қарқынды сабақтар мен тұрақты жаттығулар арқылы берік білім қалыптастырыңыз.' },
          { title: 'Қосымшада тест тапсырыңыз', description: 'Мобильді қосымшада тестілерді оңай өтіп, материалды қаншалықты меңгергеніңізді тексеріңіз.' },
          { title: 'Прогресті бақылап, жетіліңіз', description: 'Нәтижелеріңізді бақылаңыз, ұпайлар жинаңыз және уақыт өте нәтижелеріңізді жақсартыңыз.' }
        ]
      },
      about: {
        title: 'Орталығымыз туралы',
        description: 'Global Education Center — бұл қатаң оқу бағдарламасы мен озық технологиялар арқылы оқушыларды бәсекелес мектептерге дайындауға арналған премиум оқу орны.',
        items: [
          { title: 'Мамандандырылған бағыттар', description: 'НИШ, РФМШ және БІЛ/КТЛ кіру емтихандарына бейімделген материалдармен арнайы дайындық.' },
          { title: 'Офлайн оқытудың үздіктігі', description: 'Тәжірибелі оқытушылармен заманауи, ыңғайлы кабинеттерде жоғары сапалы офлайн оқыту.' },
          { title: 'Мобильді интеграция', description: 'Тесттер, рейтинг және прогресті бақылауға арналған фирмалық мобильді қосымша арқылы үздіксіз бағалау.' }
        ]
      },
      courses: {
        title: 'Біздің білім беру бағыттары',
        subtitle: 'Балаңыздың академиялық мақсаттарына сәйкес келетін жолды таңдаңыз.',
        outcomeLabel: 'Нәтиже',
        items: [
          { title: 'НИШ-ке дайындық', grades: '5-6 сынып', description: 'НИШ кіру емтихандарына жан-жақты дайындық: логика, математика және тілдер.', outcome: 'Толық стипендиямен оқуға түсу ықтималдығы жоғары.' },
          { title: 'РФМШ-ке дайындық', grades: '6-7 сынып', description: 'Республикалық физика-математика мектебінің форматына арнайы әзірленген математика мен физика бойынша қарқынды дайындық.', outcome: 'Жетілдірілген есеп шешу дағдылары және кепілдендірілген дайындық.' },
          { title: 'БіЛ / КТЛ-ге дайындық', grades: '5-6 сынып', description: 'Логикалық ойлауға, математикаға және сыни ойлауға бағытталған «Білім-Инновация» лицейлеріне арналған мамандандырылған бағдарлама.', outcome: 'Берік академиялық негіз және емтихандарда жетістік.' }
        ]
      },
      app: {
        title: 'Фирмалық мобильді қосымшамыз',
        description: 'Білімді нығайтуға және прогресті бақылауға арналған фирмалық мобильді қосымшамызбен оқуды сыныптан тыс жерде де жалғастырыңыз.',
        items: [
          { title: 'Кез-келген уақытта тест тапсыру', description: 'Телефоныңыздан тікелей нақты емтихан жағдайларын еліктейтін тәжірибелік тесттердің кең кітапханасына қол жеткізіңіз.' },
          { title: 'Лездік нәтижелер', description: 'Әр сұрақ бойынша толық түсіндірмемен бірге нәтижелеріңіз туралы бірден кері байланыс алыңыз.' },
          { title: 'Оқушы профилі', description: 'Мақсатты мектептерге дайындығыңыздың күшті, әлсіз жақтарын және жалпы деңгейін көрсететін жеке бақылау тақтасы.' }
        ]
      },
      testimonials: {
        title: 'Жетістік тарихтары',
        subtitle: 'Оқушылар мен ата-аналардың пікірлері.',
        items: [
          { content: 'Global Edu менің баламның оқуға деген көзқарасын мүлдем өзгертті. Офлайн сабақтар мен мобильді қосымшаның үйлесімі — керемет шешім.', author: 'Айжан С.', role: '6-сынып оқушысының анасы' },
          { content: 'Мұндағы мұғалімдер тамаша. Олар қиын математика есептерін өте оңай түсіндіреді, ал қосымша бәрін есте сақтауға көмектеседі.', author: 'Диас Қ.', role: 'НИШ-ке түсті' },
          { content: 'Мен қосымшадағы бәсекелі рейтингті өте ұнаттым. Ол мені күн сайын қаттырақ оқуға ынталандырды, нәтижесінде РФМШ-ке түстім.', author: 'Мадина Т.', role: 'РФМШ-ке түсті' }
        ]
      },
      contacts: {
        tagline: 'Инновациялық офлайн және онлайн білім беру арқылы оқушыларды өз мүмкіндіктерінің шыңына жеткіземіз.',
        contactTitle: 'Бізбен байланысыңыз',
        linksTitle: 'Жылдам сілтемелер',
        chatTitle: 'Бізбен чатта сөйлесіңіз',
        chatDescription: 'Сұрақтарыңыз бар ма? Біз WhatsApp-та қолжетімдіміз.',
        links: { about: 'Біз туралы', courses: 'Курстарымыз', advantages: 'Артықшылықтар' }
      },
      form: {
        title: 'Бүгін оқуды бастаңыз',
        description: 'Өтінім қалдырыңыз, менеджерлеріміз сізге тегін кеңес беру үшін жақын арада хабарласады.',
        bullets: ['Тегін бастапқы бағалау', 'Жеке оқу жоспары', 'Мобильді қосымша демосына қол жеткізу'],
        formTitle: 'Өтінім беру',
        namePlaceholder: 'Толық аты-жөні *',
        phonePlaceholder: 'Телефон нөмірі *',
        gradePlaceholder: 'Қазіргі сынып *',
        gradeDefault: 'Сыныпты таңдаңыз',
        grades: ['4-сынып', '5-сынып', '6-сынып', '7-сынып', 'Басқа'],
        submitBtn: 'Өтінім беру',
        submitting: 'Жіберілуде...',
        successTitle: 'Өтінім жіберілді!',
        successMessage: 'Қызығушылығыңызға рахмет. Жақын арада байланысамыз.',
        submitAnother: 'Тағы бір өтінім жіберу',
        errorDefault: 'Өтінімді жіберу мүмкін болмады. Кейінірек қайталап көріңіз.',
        errorNetwork: 'Желі қатесі. Кейінірек қайталап көріңіз.'
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
