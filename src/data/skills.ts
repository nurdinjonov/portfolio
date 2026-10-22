import type { SkillCategory, TimelineMilestone } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Dasturlash Tili & Asosiy Platformalar',
    icon: 'Terminal',
    description: 'Chuqur C# tili imkoniyatlari, asinxron dasturlash va ko\'p oqimli xotira boshqaruvi',
    skills: [
      { name: 'C# 12 / 13', level: 'Ilg\'or', tags: ['Pattern Matching', 'Records', 'Async/Await', 'Memory Optimization'], highlight: true },
      { name: '.NET 9 & MAUI', level: 'Ilg\'or', tags: ['Android Native', 'Desktop', 'XAML', 'Custom Handlers'], highlight: true },
      { name: 'ASP.NET Core', level: 'O\'rta-Yuqori', tags: ['REST API', 'Middleware', 'Dependency Injection', 'Minimal APIs'] },
      { name: 'LINQ & Collections', level: 'Ilg\'or', tags: ['High-Performance Queries', 'Lazy Loading', 'Generics'] }
    ]
  },
  {
    title: 'Arxitektura & Dasturiy Dizayn',
    icon: 'Layers',
    description: 'Sanoat darajasidagi toza arxitektura, zaif bog\'lanish (loose coupling) va kengayuvchanlik',
    skills: [
      { name: 'Clean Architecture', level: 'Ilg\'or', tags: ['Domain-Driven', 'Decoupled Layers', 'Testable Code'], highlight: true },
      { name: 'MVVM Pattern', level: 'Ilg\'or', tags: ['CommunityToolkit.Mvvm', 'Two-Way Binding', 'Commands'], highlight: true },
      { name: 'SOLID & Clean Code', level: 'Ilg\'or', tags: ['Single Responsibility', 'Open-Closed', 'Interface Segregation'] },
      { name: 'Repository & Unit of Work', level: 'Ilg\'or', tags: ['Data Abstraction', 'Isolation', 'Consistency'] }
    ]
  },
  {
    title: 'Ma\'lumotlar Bazasi & Xotira',
    icon: 'Database',
    description: 'Tranzaksiyaviy xavfsizlik, so\'rovlar tezligi va nol xotira oqishi (Zero Memory Leak)',
    skills: [
      { name: 'SQLite (C# Native)', level: 'Ilg\'or', tags: ['sqlite-net-pcl', 'bundle_green', 'Local Encrypted DB'], highlight: true },
      { name: 'PostgreSQL', level: 'O\'rta-Yuqori', tags: ['Relational Schema', 'Indexing', 'Transactions'] },
      { name: 'Entity Framework Core', level: 'O\'rta-Yuqori', tags: ['Code-First', 'Migrations', 'Relationships'] },
      { name: 'JSON & File Protocols', level: 'Ilg\'or', tags: ['Serialization', 'Data Backup', 'Schema Validation'] }
    ]
  },
  {
    title: 'DevOps, Infratuzilma & Linux',
    icon: 'Server',
    description: 'Linux serverlari boshqaruvi, avtomatlashtirish, Docker va versiyalar nazorati',
    skills: [
      { name: 'Linux / Ubuntu Server', level: 'Ilg\'or', tags: ['Oracle Cloud VPS', 'SWAP Engine', 'Systemd Services'], highlight: true },
      { name: 'Git & GitHub Workflow', level: 'Ilg\'or', tags: ['Atomic Commits', 'Git Flow', 'Release Tagging'], highlight: true },
      { name: 'Docker & Containers', level: 'O\'rta', tags: ['Dockerfile', 'Compose', 'Multi-stage Builds'] },
      { name: 'Telegram Bot Infrastructure', level: 'Ilg\'or', tags: ['Async Engines', 'Multi-Session Automation', 'Webhooks'] }
    ]
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '2024 - Hozirgi kun',
    period: '2-kurs Talabasi',
    title: 'PDP Universiteti — Software Development & Programming (C#)',
    role: 'Software Engineering Student',
    institution: 'PDP University, Toshkent',
    description: 
      'Dasturiy injenerlik, chuqur C# dasturlash tili, ma\'lumotlar tuzilmalari, algoritmlar va yuqori darajadagi kompyuter fanlari asoslarini o\'rganish.',
    achievements: [
      'Clean Architecture va Enterprise andozalar bo\'yicha amaliy loyihalar yaratish',
      'C# .NET MAUI orqali murakkab mobil ilovalar ekotizimini ishlab chiqish',
      'Algoritmik masalalar va yuqori yuklamali tizimlar tahlili'
    ],
    badges: ['C#', '.NET 9', 'Clean Architecture', 'OOP', 'Data Structures']
  },
  {
    year: '2025 - 2026',
    period: 'Portfolio Flagman Loyihasi',
    title: 'DailyPlanner & Focus Ilovasi Arxitekturasi',
    role: 'Lead Mobile & Architecture Engineer',
    institution: 'Mustaqil Muhandislik Loyihasi',
    description: 
      'To\'liq mustaqil holda Android platformasi uchun sanoat standartidagi rejalashtiruvchi mobil ilovani yaratish va AOT yordamida imzolangan APK formatida chiqarish.',
    achievements: [
      'Android 13/14+ talab qiluvchi yuqori prioritetli bildirishnomalar va fon taymerlarini barqaror ishlatish',
      'Google Calendar uslubidagi 42 katakli oylik to\'r va Duolingo streak logikasini joriy etish',
      'Xotira oqishini (Memory Leaks) nolga tushirib, 31.5 MB lik optimal hajmga erishish'
    ],
    badges: ['.NET MAUI', 'SQLite', 'MVVM', 'Push Notifications', 'AOT']
  },
  {
    year: '2026',
    period: 'Infratuzilma & Avtomatlashtirish',
    title: 'Bulutli Tizimlar va Linux Server Muhandisligi',
    role: 'Systems & DevOps Enthusiast',
    institution: 'Oracle Cloud & Linux muhiti',
    description: 
      'Linux Ubuntu operatsion tizimida 4 GB virtual SWAP xotirasi bilan jihozlangan, bir vaqtning o\'zida 1000+ avtomatlashtirilgan jarayonlarni boshqaruvchi mustahkam bulut serverini sozlash.',
    achievements: [
      'Nginx, Systemd va xavfsiz tarmoq konfiguratsiyalarini o\'rnatish',
      'Server xotirasini tejash va doimiy monitoring jarayonlarini joriy qilish'
    ],
    badges: ['Linux Ubuntu', 'Oracle Cloud', 'SWAP Engine', 'Nginx', 'DevOps']
  }
];
