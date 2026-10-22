import type { SkillCategory, TimelineMilestone } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'C# .NET & Mobil Dasturlash',
    icon: 'Cpu',
    description: 'Asosiy yo\'nalish: Yuqori samaradorlikka ega cross-platform mobil va desktop ilovalar',
    skills: [
      { name: 'C# (.NET 9)', level: 'Asosiy Til', tags: ['OOP', 'Async/Await', 'LINQ', 'Clean Code'], highlight: true },
      { name: '.NET MAUI', level: 'Ilg\'or', tags: ['Android Native', 'Desktop', 'XAML', 'Custom Handlers'], highlight: true },
      { name: 'Clean Architecture & MVVM', level: 'Ilg\'or', tags: ['Domain-Driven', 'Decoupled Layers', 'Toolkit.Mvvm'], highlight: true },
      { name: 'SQLite (C# Native)', level: 'Ilg\'or', tags: ['sqlite-net-pcl', 'bundle_green', 'Local DB'], highlight: true }
    ]
  },
  {
    title: 'Fullstack & Backend Tizimlari',
    icon: 'Server',
    description: 'Server arxitekturasi, API xizmatlari va ma\'lumotlar almashinuvi',
    skills: [
      { name: 'Python', level: 'Tajribali', tags: ['Skriptlar', 'Avtomatlashtirish', 'Data Structures'] },
      { name: 'Node.js & Express.js', level: 'Tajribali', tags: ['REST API', 'Middleware', 'Asinxron Backend'] },
      { name: 'ASP.NET Core', level: 'O\'rganilmoqda', tags: ['Web API', 'Dependency Injection', 'Minimal APIs'], highlight: true },
      { name: 'PostgreSQL & SQL', level: 'Tajribali', tags: ['Relatsion Baza', 'Indekslash', 'Tranzaksiyalar'] }
    ]
  },
  {
    title: 'Frontend & Veb Texnologiyalari',
    icon: 'Layers',
    description: 'Zamonaviy, tezkor va interaktiv foydalanuvchi interfeyslari',
    skills: [
      { name: 'React & TypeScript', level: 'Tajribali', tags: ['Hooks', 'SPA', 'Komponentlar Arxitekturasi'], highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Mustahkam', tags: ['DOM', 'Promises', 'Event Loop', 'Async'] },
      { name: 'HTML5 & CSS3', level: 'Mukammal', tags: ['Flexbox', 'Grid', 'Responsiv Dizayn'] },
      { name: 'Tailwind CSS', level: 'Ilg\'or', tags: ['Modern UI', 'Glassmorphism', 'Dark Mode'] }
    ]
  },
  {
    title: 'DevOps & Muhandislik Vositalari',
    icon: 'Terminal',
    description: 'Versiyalar nazorati, bulutli serverlar va rivojlantirish vositalari',
    skills: [
      { name: 'Git & GitHub', level: 'Ilg\'or', tags: ['Git Flow', 'Versiyalash', 'Repozitoriyalar'], highlight: true },
      { name: 'Linux / Ubuntu Server', level: 'Tajribali', tags: ['Oracle Cloud VPS', 'SWAP xotira', 'Bash'], highlight: true },
      { name: 'Docker', level: 'Asosiy', tags: ['Konteynerlashtirish', 'Dockerfile'] },
      { name: 'Visual Studio & VS Code', level: 'Doimiy muhit', tags: ['Debugging', 'Profiling', 'CLI'] }
    ]
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: '2026 - 2027',
    period: '2-kurs (Hozirgi kun)',
    title: 'PDP Universiteti — 2-kurs C# Yo\'nalishi',
    role: 'Software Development & Programming (C#)',
    institution: 'PDP University, Toshkent',
    description: 
      'C# dasturlash tili, .NET 9 platformasi, .NET MAUI mobil tizimlari, Clean Architecture, ma\'lumotlar tuzilmalari, chuqur OOP va murakkab algoritmlarni o\'rganish va amaliy loyihalarda qo\'llash.',
    achievements: [
      'DailyPlanner & Focus (C# .NET MAUI) to\'liq sanoat darajasidagi mobil ilovasini yaratish',
      'Clean Architecture va MVVM andozalari asosida SQLite xotira qatlamini qurish',
      'Android 13/14+ tizimlarida fon taymerlari va yuqori prioritetli bildirishnomalarni boshqarish'
    ],
    badges: ['C# .NET 9', '.NET MAUI', 'Clean Architecture', 'MVVM', 'SQLite']
  },
  {
    year: '2025 - 2026',
    period: '1-kurs Foundation',
    title: 'PDP Universiteti — 1-kurs Foundation',
    role: 'Web Development & Fullstack Programming',
    institution: 'PDP University, Toshkent',
    description: 
      'Dasturlash asoslari (Foundation), Web development, Python tili, algoritmik fikrlash va Node.js hamda Express.js yordamida Fullstack dasturlashni chuqur o\'rganish.',
    achievements: [
      'Python dasturlash tilida murakkab mantiqiy masalalar va avtomatlashtirish skriptlari',
      'Node.js va Express.js yordamida RESTful API backend xizmatlarini ishlab chiqish',
      'Frontend va Backend o\'rtasidagi tarmoq va ma\'lumotlar integratsiyasini to\'liq o\'zlashtirish'
    ],
    badges: ['Python', 'Node.js', 'Express.js', 'Fullstack', 'Web Development']
  },
  {
    year: '2024 - 2025',
    period: 'Boshlang\'ich bosqich',
    title: 'Frontend Dasturlash Asoslari & Amaliyot',
    role: 'Frontend Developer',
    institution: 'Zamonaviy Veb Kursi',
    description: 
      'Zamonaviy veb-texnologiyalari: HTML, CSS, JavaScript va React freymvorkini o\'rganish orqali dasturlash olamiga ilk jiddiy va amaliy qadamlar qo\'yish.',
    achievements: [
      'Semantik HTML5 va murakkab CSS3 responsiv dizaynlarni noldan yaratish',
      'JavaScript (ES6+) yordamida dinamik va asinxron interfeyslar qurish',
      'React ekotizimida komponentlar, statelar va zamonaviy SPA ilovalari yaratish'
    ],
    badges: ['HTML5 / CSS3', 'JavaScript', 'React', 'Tailwind CSS']
  }
];
