export type Language = 'uz' | 'en' | 'ru';
export type Theme = 'dark' | 'light';

export interface Translations {
  nav: {
    about: string;
    experience: string;
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
    bio: string;
    timeline: {
      year: string;
      title: string;
      institution: string;
      description: string;
      skills: string[];
    }[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    categories: {
      key: string;
      title: string;
      items: { name: string; level: string }[];
    }[];
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
      experience: 'tajriba',
      skills: 'ko\'nikmalar',
      projects: 'loyihalar',
      contact: 'aloqa',
    },
    hero: {
      greeting: 'salom, mehmon. mening portfolio saytimga xush kelibsiz.',
      role: 'c#_fullstack_engineer_',
      bio: 'Men C# .NET 9, .NET MAUI mobil ilovalari va Clean Architecture asosida yuqori samaradorlikka ega dasturiy tizimlar yarataman.',
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
      sectionTag: '# about & experience',
      title: 'Men Haqimda & Ta\'lim Tarixi',
      bio: 'Dasturchi muhandis. PDP Universiteti 2-kurs talabasi, C# va .NET ekotizimi bo\'yicha ixtisoslashgan. Nazariya va amaliyot uyg\'unligi orqali toza kod va mustahkam arxitekturaviy yechimlar yaratish — mening bosh mezonim.',
      timeline: [
        {
          year: '2026 — 2027',
          title: 'PDP Universiteti — 2-kurs C# yo\'nalishi',
          institution: 'PDP University (Toshkent)',
          description: 'Software Development & Programming, C# .NET 9, .NET MAUI mobil tizimlari, OOP, Algoritmlar va ma\'lumotlar tuzilmalari, Clean Architecture, SQLite.',
          skills: ['C#', '.NET 9', '.NET MAUI', 'Clean Architecture', 'SQLite', 'MVVM'],
        },
        {
          year: '2025 — 2026',
          title: 'PDP Universiteti — 1-kurs Foundation',
          institution: 'PDP University (Toshkent)',
          description: 'Web development, Dasturlash asoslari, Python dasturlash, Node.js va Express.js Fullstack dasturlash, REST API va SQL.',
          skills: ['Python', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API'],
        },
        {
          year: '2024 — 2025',
          title: 'Frontend Dasturlash Asoslari & Amaliyot',
          institution: 'Frontend Course & Amaliy Loyihalar',
          description: 'HTML5, CSS3, JavaScript ES6+, React ekotizimi, zamonaviy va moslashuvchan veb-interfeyslar yaratish amaliyoti.',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
        },
      ],
    },
    skills: {
      sectionTag: '# skills',
      title: 'Texnik Ko\'nikmalar',
      subtitle: 'Men muntazam ishlatadigan va amaliy loyihalarda qo\'llaydigan texnologiyalar:',
      categories: [
        {
          key: 'backend',
          title: 'backend & programming',
          items: [
            { name: 'C# (.NET 9)', level: 'Asosiy' },
            { name: 'ASP.NET Core', level: 'O\'rta' },
            { name: 'Python', level: 'Yaxshi' },
            { name: 'Node.js / Express', level: 'Yaxshi' },
            { name: 'PostgreSQL', level: 'Amaliy' },
            { name: 'SQLite', level: 'Ilg\'or' },
            { name: 'REST API & JSON', level: 'Ilg\'or' },
          ],
        },
        {
          key: 'mobile',
          title: 'mobile systems',
          items: [
            { name: '.NET MAUI', level: 'Ilg\'or' },
            { name: 'Android Native APK', level: 'Signed v1.2.1' },
            { name: 'MVVM Architecture', level: 'Standart' },
            { name: 'Android 14+ Notifications', level: 'Amaliy' },
            { name: 'Local Database (SQLite)', level: 'Ilg\'or' },
          ],
        },
        {
          key: 'frontend',
          title: 'frontend & web',
          items: [
            { name: 'React.js', level: 'Amaliy' },
            { name: 'TypeScript', level: 'Yaxshi' },
            { name: 'JavaScript (ES6+)', level: 'Ilg\'or' },
            { name: 'HTML5 & CSS3', level: 'Ilg\'or' },
            { name: 'Tailwind CSS', level: 'Ilg\'or' },
          ],
        },
        {
          key: 'devops',
          title: 'devops & tools',
          items: [
            { name: 'Git & GitHub', level: 'Doimiy' },
            { name: 'Docker', level: 'Boshlang\'ich' },
            { name: 'Linux / Bash', level: 'Amaliy' },
            { name: 'Nginx', level: 'Boshlang\'ich' },
            { name: 'Postman', level: 'Amaliy' },
          ],
        },
      ],
    },
    projects: {
      sectionTag: '# projects',
      title: 'Loyihalarim',
      subtitle: 'Haqiqiy foydalanuvchilar va sanoat talablari uchun yaratilgan mobil va veb tizimlar.',
      dailyPlannerTagline: 'C# .NET MAUI & Clean Architecture asosidagi kundalik reja va fokus ekotizimi',
      dailyPlannerDesc: 'Google Calendar uslubidagi 42 katakli oylik taqvim, takrorlanuvchi vazifalar (har kuni, har hafta, ma\'lum kunlarda), 25 daqiqalik Pomodoro taymeri, GitHub uslubidagi faollik Heatmap\'i, ovozli push bildirishnomalar va SQLite bilan to\'liq avtonom ishlovchi mobil ilova.',
      tabs: {
        tasks: 'Rejalar',
        calendar: 'Oylik Taqvim',
        pomodoro: 'Pomodoro',
        heatmap: 'Heatmap',
      },
      downloadApk: 'DailyPlanner.apk Yuklab Olish',
      downloadSub: 'v1.2.1 Signed APK • 31.57 MB',
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
      subtitle: 'Loyiha, amaliyot yoki jamoaga qo\'shilish taklifi bormi? Xabar qoldiring.',
      copied: 'Nusxalandi!',
      copy: 'Nusxa olish',
      quickMsg: 'Birgalikda ajoyib dasturiy yechimlar yarataylik!',
      sendTelegram: 'Telegramda Yozish',
    },
    footer: {
      cliLine: '$ deployed with docker • vite • tls — © 2026 nurdinjonov.dev',
      tashkent: 'Toshkent',
      top: '^ tepaga',
    },
  },
  en: {
    nav: {
      about: 'about',
      experience: 'experience',
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
      sectionTag: '# about & experience',
      title: 'About Me & Education Timeline',
      bio: 'Software engineer. 2nd-year student at PDP University, specializing in C# and the .NET ecosystem. I bridge academic computer science principles with production-ready software engineering, focusing on clean code, performance, and solid architectures.',
      timeline: [
        {
          year: '2026 — 2027',
          title: 'PDP University — 2nd Year (C# Track)',
          institution: 'PDP University (Tashkent)',
          description: 'Software Development & Programming, C# .NET 9, .NET MAUI mobile systems, OOP, Algorithms & Data Structures, Clean Architecture, SQLite.',
          skills: ['C#', '.NET 9', '.NET MAUI', 'Clean Architecture', 'SQLite', 'MVVM'],
        },
        {
          year: '2025 — 2026',
          title: 'PDP University — 1st Year Foundation',
          institution: 'PDP University (Tashkent)',
          description: 'Web development, Programming Fundamentals, Python programming, Node.js and Express.js Fullstack, REST APIs and SQL databases.',
          skills: ['Python', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API'],
        },
        {
          year: '2024 — 2025',
          title: 'Frontend Development & Practical Projects',
          institution: 'Frontend Course & Practical Projects',
          description: 'HTML5, CSS3, JavaScript ES6+, React ecosystem, modern responsive web UI development.',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
        },
      ],
    },
    skills: {
      sectionTag: '# skills',
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I use on a regular basis for production and academic projects:',
      categories: [
        {
          key: 'backend',
          title: 'backend & programming',
          items: [
            { name: 'C# (.NET 9)', level: 'Primary' },
            { name: 'ASP.NET Core', level: 'Intermediate' },
            { name: 'Python', level: 'Proficient' },
            { name: 'Node.js / Express', level: 'Proficient' },
            { name: 'PostgreSQL', level: 'Practical' },
            { name: 'SQLite', level: 'Advanced' },
            { name: 'REST API & JSON', level: 'Advanced' },
          ],
        },
        {
          key: 'mobile',
          title: 'mobile systems',
          items: [
            { name: '.NET MAUI', level: 'Advanced' },
            { name: 'Android Native APK', level: 'Signed v1.2.1' },
            { name: 'MVVM Architecture', level: 'Standard' },
            { name: 'Android 14+ Notifications', level: 'Practical' },
            { name: 'Local Database (SQLite)', level: 'Advanced' },
          ],
        },
        {
          key: 'frontend',
          title: 'frontend & web',
          items: [
            { name: 'React.js', level: 'Practical' },
            { name: 'TypeScript', level: 'Proficient' },
            { name: 'JavaScript (ES6+)', level: 'Advanced' },
            { name: 'HTML5 & CSS3', level: 'Advanced' },
            { name: 'Tailwind CSS', level: 'Advanced' },
          ],
        },
        {
          key: 'devops',
          title: 'devops & tools',
          items: [
            { name: 'Git & GitHub', level: 'Daily' },
            { name: 'Docker', level: 'Foundational' },
            { name: 'Linux / Bash', level: 'Practical' },
            { name: 'Nginx', level: 'Foundational' },
            { name: 'Postman', level: 'Practical' },
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
      downloadSub: 'v1.2.1 Signed APK • 31.57 MB',
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
      cliLine: '$ deployed with docker • vite • tls — © 2026 nurdinjonov.dev',
      tashkent: 'Tashkent',
      top: '^ top',
    },
  },
  ru: {
    nav: {
      about: 'обо мне',
      experience: 'опыт',
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
      sectionTag: '# about & experience',
      title: 'Обо Мне & История Обучения',
      bio: 'Инженер-программист. Студент 2 курса PDP Университета, специализируюсь на стеке C# и платформе .NET. Сочетаю академические основы с промышленной разработкой, ориентируясь на чистый код, надежную архитектуру и максимальную производительность.',
      timeline: [
        {
          year: '2026 — 2027',
          title: 'PDP Университет — 2 курс (C# направление)',
          institution: 'PDP University (Ташкент)',
          description: 'Software Development & Programming, C# .NET 9, мобильные системы .NET MAUI, ООП, Алгоритмы и структуры данных, Clean Architecture, SQLite.',
          skills: ['C#', '.NET 9', '.NET MAUI', 'Clean Architecture', 'SQLite', 'MVVM'],
        },
        {
          year: '2025 — 2026',
          title: 'PDP Университет — 1 курс Foundation',
          institution: 'PDP University (Ташкент)',
          description: 'Веб-разработка, основы алгоритмизации, язык Python, Node.js и Express.js Fullstack разработка, REST API и SQL.',
          skills: ['Python', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API'],
        },
        {
          year: '2024 — 2025',
          title: 'Основы Frontend Разработки & Практика',
          institution: 'Frontend Course & Практические проекты',
          description: 'HTML5, CSS3, JavaScript ES6+, экосистема React, создание современных адаптивных интерфейсов.',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
        },
      ],
    },
    skills: {
      sectionTag: '# skills',
      title: 'Технические Навыки',
      subtitle: 'Технологии и инструменты, которые я регулярно применяю в разработке:',
      categories: [
        {
          key: 'backend',
          title: 'backend & programming',
          items: [
            { name: 'C# (.NET 9)', level: 'Основной' },
            { name: 'ASP.NET Core', level: 'Средний' },
            { name: 'Python', level: 'Хороший' },
            { name: 'Node.js / Express', level: 'Хороший' },
            { name: 'PostgreSQL', level: 'Практический' },
            { name: 'SQLite', level: 'Продвинутый' },
            { name: 'REST API & JSON', level: 'Продвинутый' },
          ],
        },
        {
          key: 'mobile',
          title: 'mobile systems',
          items: [
            { name: '.NET MAUI', level: 'Продвинутый' },
            { name: 'Android Native APK', level: 'Signed v1.2.1' },
            { name: 'MVVM Architecture', level: 'Стандарт' },
            { name: 'Android 14+ Notifications', level: 'Практический' },
            { name: 'Local Database (SQLite)', level: 'Продвинутый' },
          ],
        },
        {
          key: 'frontend',
          title: 'frontend & web',
          items: [
            { name: 'React.js', level: 'Практический' },
            { name: 'TypeScript', level: 'Хороший' },
            { name: 'JavaScript (ES6+)', level: 'Продвинутый' },
            { name: 'HTML5 & CSS3', level: 'Продвинутый' },
            { name: 'Tailwind CSS', level: 'Продвинутый' },
          ],
        },
        {
          key: 'devops',
          title: 'devops & tools',
          items: [
            { name: 'Git & GitHub', level: 'Постоянно' },
            { name: 'Docker', level: 'Базовый' },
            { name: 'Linux / Bash', level: 'Практический' },
            { name: 'Nginx', level: 'Базовый' },
            { name: 'Postman', level: 'Практический' },
          ],
        },
      ],
    },
    projects: {
      sectionTag: '# projects',
      title: 'Мои Проекты',
      subtitle: 'Мобильные и веб-системы, созданные для решения реальных задач.',
      dailyPlannerTagline: 'Экосистема ежедневного планирования и фокуса на базе C# .NET MAUI & Clean Architecture',
      dailyPlannerDesc: '42-клеточный ежемесячный календарь в стиле Google Calendar, повторяющиеся задачи (каждый день, еженедельно, по дням недели), 25-минутный таймер Pomodoro, Heatmap активности в стиле GitHub, звуковые пуш-уведомления и локальное хранилище SQLite.',
      tabs: {
        tasks: 'Задачи',
        calendar: 'Календарь',
        pomodoro: 'Pomodoro',
        heatmap: 'Heatmap',
      },
      downloadApk: 'Скачать DailyPlanner.apk',
      downloadSub: 'v1.2.1 Signed APK • 31.57 MB',
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
      quickMsg: 'Давайте создавать качественные программные решения вместе!',
      sendTelegram: 'Написать в Telegram',
    },
    footer: {
      cliLine: '$ deployed with docker • vite • tls — © 2026 nurdinjonov.dev',
      tashkent: 'Ташкент',
      top: '^ наверх',
    },
  },
};
