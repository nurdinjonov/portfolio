export type Language = 'uz' | 'en' | 'ru';

export interface SkillItem {
  name: string;
  percent: number;
  level: string;
}

export interface SkillCategory {
  key: string;
  title: string;
  items: SkillItem[];
}

export interface TimelineItem {
  step: string;
  year: string;
  title: string;
  institution: string;
  status: string;
  isActive?: boolean;
  description: string;
  skills: string[];
}

export interface Translations {
  nav: {
    about: string;
    roadmap: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    studyLabel: string;
    studyValue: string;
    focusLabel: string;
    focusValue: string;
    locationLabel: string;
    locationValue: string;
    btnProjects: string;
    btnContact: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    bio: string;
    timeline: TimelineItem[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    dailyPlannerTagline: string;
    dailyPlannerDesc: string;
    tabs: {
      tasks: string;
      calendar: string;
      pomodoro: string;
      heatmap: string;
    };
    downloadApk: string;
    downloadSub: string;
    downloading: string;
    architectureBtn: string;
    githubBtn: string;
    archTitle: string;
    archLayers: {
      title: string;
      tech: string;
      desc: string;
    }[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    copied: string;
    copy: string;
    quickMsg: string;
    sendTelegram: string;
  };
  footer: {
    cliLine: string;
    tashkent: string;
    top: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      about: 'men haqimda',
      roadmap: 'tajriba yo\'li',
      skills: 'ko\'nikmalar',
      projects: 'loyihalar',
      contact: 'aloqa',
    },
    hero: {
      greeting: 'salom, mehmon. mening portfolio saytimga xush kelibsiz.',
      role: 'c#_fullstack_engineer_',
      bio: 'Men C# .NET 9, .NET MAUI mobil tizimlari va Clean Architecture asosida yuqori unumdorlikka ega, mustahkam dasturiy mahsulotlar yarataman.',
      studyLabel: 'ta\'lim',
      studyValue: 'PDP Universiteti — 2-kurs (Dasturiy ta\'minot muhandisligi)',
      focusLabel: 'yo\'nalish',
      focusValue: 'C# • .NET 9 • MAUI • Fullstack • Clean Architecture',
      locationLabel: 'manzil',
      locationValue: 'Toshkent, O\'zbekiston',
      btnProjects: 'Loyihalarim',
      btnContact: 'Bog\'lanish',
    },
    about: {
      sectionTag: '# about & roadmap',
      title: 'Ta\'lim va Rivojlanish Xaritasi',
      subtitle: 'Boshlang\'ich qadamlardan zamonaviy C# .NET ekotizimigacha bo\'lgan muhandislik bosqichlari:',
      bio: 'Dasturchi muhandis. PDP Universiteti 2-kurs talabasi, C# va .NET ekotizimi bo\'yicha chuqur ixtisoslashgan. Nazariya va amaliyot uyg\'unligi orqali toza kod va barqaror arxitekturaviy yechimlar yaratish — mening bosh mezonim.',
      timeline: [
        {
          step: '01',
          year: '2024 — 2025',
          title: 'Frontend Dasturlash Asoslari & Amaliyot',
          institution: 'Frontend Course & Amaliy Loyihalar',
          status: 'Boshlang\'ich Poya',
          description: 'HTML5, CSS3, JavaScript ES6+, React ekotizimi, moslashuvchan va chiroyli veb-interfeyslar yaratish amaliyoti. DOM arxitekturasi va asinxron so\'rovlar.',
          skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Git'],
        },
        {
          step: '02',
          year: '2025 — 2026',
          title: 'PDP Universiteti — 1-kurs Foundation',
          institution: 'PDP University (Toshkent)',
          status: 'Tizimli Dasturlash',
          description: 'Web development, Algoritmlar va ma\'lumotlar tuzilmasi, Python dasturlash, Node.js va Express.js Fullstack tizimlar, REST API va relyatsion ma\'lumotlar bazalari.',
          skills: ['Python', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'Algorithms'],
        },
        {
          step: '03',
          year: '2026 — 2027',
          title: 'PDP Universiteti — 2-kurs C# Yo\'nalishi',
          institution: 'PDP University (Toshkent)',
          status: 'Hozirgi Bosqich • Professional Chuqurlashuv',
          isActive: true,
          description: 'Software Development & Programming, C# .NET 9, .NET MAUI kross-platform mobil tizimlari, OOP andozalari, Clean Architecture, SQLite lokal xotira va production-level loyihalar.',
          skills: ['C#', '.NET 9', '.NET MAUI', 'Clean Architecture', 'SQLite', 'MVVM', 'Android Native'],
        },
      ],
    },
    skills: {
      sectionTag: '# skills & proficiency',
      title: 'Texnik Ko\'nikmalar va Darajalar',
      subtitle: 'Har bir texnologiya bo\'yicha amaliy daraja va bilim ko\'rsatkichi:',
      categories: [
        {
          key: 'backend',
          title: 'backend & programming',
          items: [
            { name: 'C# (.NET 9)', percent: 95, level: 'Ilg\'or • 95%' },
            { name: 'SQLite', percent: 92, level: 'Ilg\'or • 92%' },
            { name: 'REST API & JSON', percent: 90, level: 'Ilg\'or • 90%' },
            { name: 'ASP.NET Core', percent: 82, level: 'Yaxshi • 82%' },
            { name: 'Python', percent: 80, level: 'Yaxshi • 80%' },
            { name: 'Node.js / Express', percent: 78, level: 'Yaxshi • 78%' },
            { name: 'PostgreSQL', percent: 76, level: 'Amaliy • 76%' },
          ],
        },
        {
          key: 'mobile',
          title: 'mobile systems',
          items: [
            { name: '.NET MAUI', percent: 94, level: 'Ilg\'or • 94%' },
            { name: 'Android Native APK (Signed)', percent: 92, level: 'Ilg\'or • 92%' },
            { name: 'MVVM Architecture', percent: 90, level: 'Ilg\'or • 90%' },
            { name: 'Android 14+ Notifications', percent: 88, level: 'Ilg\'or • 88%' },
            { name: 'Local Cache & Storage (SQLite)', percent: 92, level: 'Ilg\'or • 92%' },
          ],
        },
        {
          key: 'frontend',
          title: 'frontend & web',
          items: [
            { name: 'HTML5 & CSS3', percent: 95, level: 'Ilg\'or • 95%' },
            { name: 'Tailwind CSS', percent: 92, level: 'Ilg\'or • 92%' },
            { name: 'JavaScript (ES6+)', percent: 90, level: 'Ilg\'or • 90%' },
            { name: 'React.js', percent: 84, level: 'Yaxshi • 84%' },
            { name: 'TypeScript', percent: 80, level: 'Yaxshi • 80%' },
          ],
        },
        {
          key: 'devops',
          title: 'devops & engineering tools',
          items: [
            { name: 'Git & GitHub', percent: 90, level: 'Ilg\'or • 90%' },
            { name: 'Postman', percent: 85, level: 'Yaxshi • 85%' },
            { name: 'Linux / Bash', percent: 75, level: 'Amaliy • 75%' },
            { name: 'Docker', percent: 68, level: 'Boshlang\'ich • 68%' },
            { name: 'Nginx', percent: 65, level: 'Boshlang\'ich • 65%' },
          ],
        },
      ],
    },
    projects: {
      sectionTag: '# projects',
      title: 'Loyihalarim',
      subtitle: 'Haqiqiy foydalanuvchilar va sanoat talablari uchun yaratilgan mobil va veb tizimlar.',
      dailyPlannerTagline: 'C# .NET MAUI & Clean Architecture asosidagi kundalik reja va fokus ekotizimi',
      dailyPlannerDesc: 'Google Calendar uslubidagi 42 katakli oylik taqvim, takrorlanuvchi vazifalar (har dushanba, haftalik, kunlik), 25 daqiqalik Pomodoro taymeri, GitHub uslubidagi faollik Heatmap\'i, ovozli push bildirishnomalar va SQLite bilan to\'liq avtonom ishlovchi mobil ilova.',
      tabs: {
        tasks: 'Rejalar',
        calendar: 'Oylik Taqvim',
        pomodoro: 'Pomodoro',
        heatmap: 'Heatmap',
      },
      downloadApk: 'DailyPlanner.apk Yuklab Olish',
      downloadSub: 'v1.2.2 Signed APK • 31.57 MB',
      downloading: 'APK Yuklanmoqda...',
      architectureBtn: '📐 Clean Architecture Qatlamlari',
      githubBtn: 'GitHub Repozitoriy',
      archTitle: 'DailyPlanner Qatlamlar Arxitekturasi',
      archLayers: [
        {
          title: '1. Presentation Layer (Views & ViewModels)',
          tech: 'MAUI UI • CommunityToolkit.Mvvm',
          desc: 'MainPage, CalendarPage, PomodoroPage, HabitsPage, ProfilePage. Reaktiv UI va hodisalar.',
        },
        {
          title: '2. Core Domain Layer (Models & Rules)',
          tech: 'Pure C# .NET 9',
          desc: 'PlanTask, Habit, PomodoroSession. Tashqi freymvorklarga bog\'lanmagan sof biznes mantiq.',
        },
        {
          title: '3. Infrastructure Layer (Data & Platform)',
          tech: 'SQLite & Android Native',
          desc: 'DatabaseContext, PlanRepository, Android 14 NotificationChannel va fonda eslatish servisi.',
        },
      ],
    },
    contact: {
      sectionTag: '# contact',
      title: 'Bog\'lanish',
      subtitle: 'Loyiha, amaliyot yoki hamkorlik bo\'yicha xabar qoldiring.',
      copied: 'Nusxalandi!',
      copy: 'Nusxa olish',
      quickMsg: 'Birgalikda yuqori samarali dasturiy yechimlar yarataylik!',
      sendTelegram: 'Telegramda Yozish',
    },
    footer: {
      cliLine: '$ deployed with docker • vite • tls — © 2026 nurdinjonov',
      tashkent: 'Toshkent',
      top: '^ tepaga',
    },
  },
  en: {
    nav: {
      about: 'about',
      roadmap: 'roadmap',
      skills: 'skills',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      greeting: 'hello, guest. welcome to my portfolio website.',
      role: 'c#_fullstack_engineer_',
      bio: 'I build high-performance cross-platform mobile apps with C# .NET 9 & MAUI, and scalable backends using Clean Architecture.',
      studyLabel: 'study',
      studyValue: 'PDP University — 2nd year (Software Development & Programming)',
      focusLabel: 'focus',
      focusValue: 'C# • .NET 9 • MAUI • Fullstack • Clean Architecture',
      locationLabel: 'location',
      locationValue: 'Tashkent, Uzbekistan',
      btnProjects: 'Featured Projects',
      btnContact: 'Get in Touch',
    },
    about: {
      sectionTag: '# about & roadmap',
      title: 'Education & Engineering Roadmap',
      subtitle: 'From foundational programming blocks to advanced C# .NET mobile engineering:',
      bio: 'Software engineer. 2nd-year student at PDP University, specializing in C# and the .NET ecosystem. I bridge academic computer science principles with production-ready software engineering, focusing on clean code, performance, and solid architectures.',
      timeline: [
        {
          step: '01',
          year: '2024 — 2025',
          title: 'Frontend Development & Core Foundations',
          institution: 'Frontend Course & Hands-on Projects',
          status: 'Foundation Roots',
          description: 'HTML5, CSS3, modern JavaScript ES6+, React ecosystem, asynchronous APIs, responsive web interfaces, and modern layout principles.',
          skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Git'],
        },
        {
          step: '02',
          year: '2025 — 2026',
          title: 'PDP University — 1st Year Foundation',
          institution: 'PDP University (Tashkent)',
          status: 'Systems Foundations',
          description: 'Web development, Algorithms & Data Structures, Python programming, Node.js and Express.js Fullstack backends, REST APIs and relational databases.',
          skills: ['Python', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'Algorithms'],
        },
        {
          step: '03',
          year: '2026 — 2027',
          title: 'PDP University — 2nd Year (C# Specialization)',
          institution: 'PDP University (Tashkent)',
          status: 'Active Stage • Advanced C# & Mobile Systems',
          isActive: true,
          description: 'Software Development & Programming, C# .NET 9, .NET MAUI mobile systems, OOP principles, Clean Architecture, SQLite local persistence, and production Android apps.',
          skills: ['C#', '.NET 9', '.NET MAUI', 'Clean Architecture', 'SQLite', 'MVVM', 'Android Native'],
        },
      ],
    },
    skills: {
      sectionTag: '# skills & proficiency',
      title: 'Technical Skills & Proficiency',
      subtitle: 'Measured proficiency levels across core software engineering technologies:',
      categories: [
        {
          key: 'backend',
          title: 'backend & programming',
          items: [
            { name: 'C# (.NET 9)', percent: 95, level: 'Advanced • 95%' },
            { name: 'SQLite', percent: 92, level: 'Advanced • 92%' },
            { name: 'REST API & JSON', percent: 90, level: 'Advanced • 90%' },
            { name: 'ASP.NET Core', percent: 82, level: 'Proficient • 82%' },
            { name: 'Python', percent: 80, level: 'Proficient • 80%' },
            { name: 'Node.js / Express', percent: 78, level: 'Proficient • 78%' },
            { name: 'PostgreSQL', percent: 76, level: 'Practical • 76%' },
          ],
        },
        {
          key: 'mobile',
          title: 'mobile systems',
          items: [
            { name: '.NET MAUI', percent: 94, level: 'Advanced • 94%' },
            { name: 'Android Native APK (Signed)', percent: 92, level: 'Advanced • 92%' },
            { name: 'MVVM Architecture', percent: 90, level: 'Advanced • 90%' },
            { name: 'Android 14+ Notifications', percent: 88, level: 'Advanced • 88%' },
            { name: 'Local Cache & Storage (SQLite)', percent: 92, level: 'Advanced • 92%' },
          ],
        },
        {
          key: 'frontend',
          title: 'frontend & web',
          items: [
            { name: 'HTML5 & CSS3', percent: 95, level: 'Advanced • 95%' },
            { name: 'Tailwind CSS', percent: 92, level: 'Advanced • 92%' },
            { name: 'JavaScript (ES6+)', percent: 90, level: 'Advanced • 90%' },
            { name: 'React.js', percent: 84, level: 'Proficient • 84%' },
            { name: 'TypeScript', percent: 80, level: 'Proficient • 80%' },
          ],
        },
        {
          key: 'devops',
          title: 'devops & engineering tools',
          items: [
            { name: 'Git & GitHub', percent: 90, level: 'Advanced • 90%' },
            { name: 'Postman', percent: 85, level: 'Proficient • 85%' },
            { name: 'Linux / Bash', percent: 75, level: 'Practical • 75%' },
            { name: 'Docker', percent: 68, level: 'Foundational • 68%' },
            { name: 'Nginx', percent: 65, level: 'Foundational • 65%' },
          ],
        },
      ],
    },
    projects: {
      sectionTag: '# projects',
      title: 'Featured Projects',
      subtitle: 'Production-grade mobile and web applications built for real users and real-world utility.',
      dailyPlannerTagline: 'Personal planner & focus ecosystem built with C# .NET MAUI & Clean Architecture',
      dailyPlannerDesc: 'Google Calendar-style 42-grid monthly view, recurring task scheduler (daily, weekly, custom days), 25-minute Pomodoro timer, GitHub-style activity Heatmap, high-priority audio push notifications, and zero-latency local SQLite persistence.',
      tabs: {
        tasks: 'Tasks',
        calendar: 'Monthly Calendar',
        pomodoro: 'Pomodoro',
        heatmap: 'Heatmap',
      },
      downloadApk: 'Download DailyPlanner.apk',
      downloadSub: 'v1.2.2 Signed APK • 31.57 MB',
      downloading: 'Downloading APK...',
      architectureBtn: '📐 Clean Architecture Layers',
      githubBtn: 'GitHub Repository',
      archTitle: 'DailyPlanner Clean Architecture Blueprint',
      archLayers: [
        {
          title: '1. Presentation Layer (Views & ViewModels)',
          tech: 'MAUI UI • CommunityToolkit.Mvvm',
          desc: 'MainPage, CalendarPage, PomodoroPage, HabitsPage, ProfilePage. Reactive UI binding.',
        },
        {
          title: '2. Core Domain Layer (Models & Rules)',
          tech: 'Pure C# .NET 9',
          desc: 'PlanTask, Habit, PomodoroSession. Pure decoupled domain entities and business rules.',
        },
        {
          title: '3. Infrastructure Layer (Data & Platform)',
          tech: 'SQLite & Android Native',
          desc: 'DatabaseContext, PlanRepository, Android 14 NotificationChannel and exact alarm scheduler.',
        },
      ],
    },
    contact: {
      sectionTag: '# contact',
      title: 'Contact',
      subtitle: 'Got a project, partnership, or internship opportunity? Drop a line anytime.',
      copied: 'Copied!',
      copy: 'Copy',
      quickMsg: 'Let\'s build high-performance software systems together!',
      sendTelegram: 'Message on Telegram',
    },
    footer: {
      cliLine: '$ deployed with docker • vite • tls — © 2026 nurdinjonov',
      tashkent: 'Tashkent',
      top: '^ top',
    },
  },
  ru: {
    nav: {
      about: 'обо мне',
      roadmap: 'роадмап',
      skills: 'навыки',
      projects: 'проекты',
      contact: 'контакты',
    },
    hero: {
      greeting: 'привет, гость. добро пожаловать на мой сайт-портфолио.',
      role: 'c#_fullstack_engineer_',
      bio: 'Разрабатываю высокопроизводительные кроссплатформенные мобильные приложения на C# .NET 9 & MAUI и масштабируемые бэкенды на Clean Architecture.',
      studyLabel: 'учёба',
      studyValue: 'PDP Университет — 2 курс (Разработка ПО и программирование)',
      focusLabel: 'фокус',
      focusValue: 'C# • .NET 9 • MAUI • Fullstack • Clean Architecture',
      locationLabel: 'локация',
      locationValue: 'Ташкент, Узбекистан',
      btnProjects: 'Мои Проекты',
      btnContact: 'Связаться',
    },
    about: {
      sectionTag: '# about & roadmap',
      title: 'История Обучения и Роадмап',
      subtitle: 'От фундаментальных основ программирования до мобильной разработки на C# .NET:',
      bio: 'Инженер-программист. Студент 2 курса PDP Университета, специализируюсь на стеке C# и платформе .NET. Сочетаю академические основы с промышленной разработкой, ориентируясь на чистый код, надежную архитектуру и максимальную производительность.',
      timeline: [
        {
          step: '01',
          year: '2024 — 2025',
          title: 'Основы Frontend Разработки & Практика',
          institution: 'Frontend Course & Практические проекты',
          status: 'Фундаментальная База',
          description: 'HTML5, CSS3, JavaScript ES6+, экосистема React, создание современных адаптивных интерфейсов, асинхронные запросы и DOM архитектура.',
          skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Git'],
        },
        {
          step: '02',
          year: '2025 — 2026',
          title: 'PDP Университет — 1 курс Foundation',
          institution: 'PDP University (Ташкент)',
          status: 'Системное Программирование',
          description: 'Веб-разработка, алгоритмы и структуры данных, язык Python, Node.js и Express.js Fullstack разработка, REST API и реляционные базы данных.',
          skills: ['Python', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'Algorithms'],
        },
        {
          step: '03',
          year: '2026 — 2027',
          title: 'PDP Университет — 2 курс (C# направление)',
          institution: 'PDP University (Ташкент)',
          status: 'Текущий Этап • Углубление в C#',
          isActive: true,
          description: 'Software Development & Programming, C# .NET 9, мобильные системы .NET MAUI, ООП, Clean Architecture, локальное хранилище SQLite и production приложения.',
          skills: ['C#', '.NET 9', '.NET MAUI', 'Clean Architecture', 'SQLite', 'MVVM', 'Android Native'],
        },
      ],
    },
    skills: {
      sectionTag: '# skills & proficiency',
      title: 'Технические Навыки и Уровни',
      subtitle: 'Показатели владения ключевыми технологиями разработки:',
      categories: [
        {
          key: 'backend',
          title: 'backend & programming',
          items: [
            { name: 'C# (.NET 9)', percent: 95, level: 'Продвинутый • 95%' },
            { name: 'SQLite', percent: 92, level: 'Продвинутый • 92%' },
            { name: 'REST API & JSON', percent: 90, level: 'Продвинутый • 90%' },
            { name: 'ASP.NET Core', percent: 82, level: 'Хороший • 82%' },
            { name: 'Python', percent: 80, level: 'Хороший • 80%' },
            { name: 'Node.js / Express', percent: 78, level: 'Хороший • 78%' },
            { name: 'PostgreSQL', percent: 76, level: 'Практический • 76%' },
          ],
        },
        {
          key: 'mobile',
          title: 'mobile systems',
          items: [
            { name: '.NET MAUI', percent: 94, level: 'Продвинутый • 94%' },
            { name: 'Android Native APK (Signed)', percent: 92, level: 'Продвинутый • 92%' },
            { name: 'MVVM Architecture', percent: 90, level: 'Продвинутый • 90%' },
            { name: 'Android 14+ Notifications', percent: 88, level: 'Продвинутый • 88%' },
            { name: 'Local Cache & Storage (SQLite)', percent: 92, level: 'Продвинутый • 92%' },
          ],
        },
        {
          key: 'frontend',
          title: 'frontend & web',
          items: [
            { name: 'HTML5 & CSS3', percent: 95, level: 'Продвинутый • 95%' },
            { name: 'Tailwind CSS', percent: 92, level: 'Продвинутый • 92%' },
            { name: 'JavaScript (ES6+)', percent: 90, level: 'Продвинутый • 90%' },
            { name: 'React.js', percent: 84, level: 'Хороший • 84%' },
            { name: 'TypeScript', percent: 80, level: 'Хороший • 80%' },
          ],
        },
        {
          key: 'devops',
          title: 'devops & engineering tools',
          items: [
            { name: 'Git & GitHub', percent: 90, level: 'Продвинутый • 90%' },
            { name: 'Postman', percent: 85, level: 'Хороший • 85%' },
            { name: 'Linux / Bash', percent: 75, level: 'Практический • 75%' },
            { name: 'Docker', percent: 68, level: 'Базовый • 68%' },
            { name: 'Nginx', percent: 65, level: 'Базовый • 65%' },
          ],
        },
      ],
    },
    projects: {
      sectionTag: '# projects',
      title: 'Мои Проекты',
      subtitle: 'Мобильные и веб-системы, созданные для решения реальных задач.',
      dailyPlannerTagline: 'Экосистема ежедневного планирования и фокуса на базе C# .NET MAUI & Clean Architecture',
      dailyPlannerDesc: '42-клеточный ежемесячный календарь в стиле Google Calendar, повторяющиеся задачи (каждый понедельник, еженедельно, ежедневно), 25-минутный таймер Pomodoro, Heatmap активности в стиле GitHub, звуковые пуш-уведомления и локальное хранилище SQLite.',
      tabs: {
        tasks: 'Задачи',
        calendar: 'Календарь',
        pomodoro: 'Pomodoro',
        heatmap: 'Heatmap',
      },
      downloadApk: 'Скачать DailyPlanner.apk',
      downloadSub: 'v1.2.2 Signed APK • 31.57 MB',
      downloading: 'Загрузка APK...',
      architectureBtn: '📐 Архитектурные Слои Clean Architecture',
      githubBtn: 'Репозиторий GitHub',
      archTitle: 'Архитектура DailyPlanner (Clean Architecture)',
      archLayers: [
        {
          title: '1. Presentation Layer (Views & ViewModels)',
          tech: 'MAUI UI • CommunityToolkit.Mvvm',
          desc: 'MainPage, CalendarPage, PomodoroPage, HabitsPage, ProfilePage. Реактивный UI.',
        },
        {
          title: '2. Core Domain Layer (Models & Rules)',
          tech: 'Pure C# .NET 9',
          desc: 'PlanTask, Habit, PomodoroSession. Чистая бизнес-логика без внешних зависимостей.',
        },
        {
          title: '3. Infrastructure Layer (Data & Platform)',
          tech: 'SQLite & Android Native',
          desc: 'DatabaseContext, PlanRepository, Android 14 NotificationChannel и точный сервис уведомлений.',
        },
      ],
    },
    contact: {
      sectionTag: '# contact',
      title: 'Контакты',
      subtitle: 'Есть проект, предложение о работе или сотрудничестве? Напишите мне.',
      copied: 'Скопировано!',
      copy: 'Скопировать',
      quickMsg: 'Давайте создавать надежные программные решения вместе!',
      sendTelegram: 'Написать в Telegram',
    },
    footer: {
      cliLine: '$ deployed with docker • vite • tls — © 2026 nurdinjonov',
      tashkent: 'Ташкент',
      top: '^ наверх',
    },
  },
};
