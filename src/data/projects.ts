import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'daily-planner',
    title: 'DailyPlanner & Focus',
    tagline: 'C# .NET MAUI texnologiyasida yaratilgan shaxsiy rejalashtirish va fokus ilovasi',
    category: 'Mobil Ilova',
    version: 'v1.2.6 Signed Release',
    status: 'Production',
    description: 
      'Clean Architecture va MVVM andozalari asosida qurilgan, SQLite bilan avtonom ishlovchi, rejalarni to\'liq tahrirlash (Edit), 61 kunlik interaktiv kalendar slayderi, 6 ta asosiy bo\'lim, streak odatlar, fon rejimida ovozli eslatmalar, Pomodoro taymeri va tabiiy matnni (NLP) tahlil qiluvchi mobil yordamchi.',
    keyFeatures: [
      'Rejalarni to\'liq tahrirlash (Edit ✏️) va xavfsiz boshqarish',
      'Takroriy rejalarni faqat bitta kun yoki kelgusi barchasi uchun alohida o\'zgartirish/o\'chirish (RFC 5545 standarti)',
      '61 kunlik silliq gorizontal kalendar slayderi va bugungi sanaga avto-markazlanish',
      '6 ta to\'g\'ridan-to\'g\'ri bo\'limli qulay pastki navigatsiya paneli',
      'Aniq vaqtdagi ovozli va tebranishli eslatmalar (RTC_WAKEUP Exact Alarms)',
      'Odatlar zanjiri (Streaks), 7 kunlik haftalik vizual tracker va jami kunlar hisobi',
      'Google Calendar oylik interaktiv to\'ri (42 kunlik jadval va rangli vazifa nuqtalari)',
      'Natural Language Parser (Regex orqali "Ertaga 16:30 da C# darsi #PDP !yuqori" matnidan parametrlarni avtomatik ajratish)',
      'Pomodoro Focus Timer (25/5/15 daqiqalik chuqur diqqat va tanaffus rejimlari)',
      'GitHub-Style Productivity Heatmap (So\'nggi 35 kunlik faollik matritsasi)',
      'Vektor kiber-reticle ilova logotipi va optimallashtirilgan UI/UX dizayn'
    ],
    techStack: [
      'C# 12',
      '.NET 9 MAUI',
      'CommunityToolkit.Mvvm',
      'SQLite (bundle_green)',
      'Clean Architecture',
      'Android Alarms & Notifications',
      'ILLink AOT'
    ],
    apkFileName: 'DailyPlanner.apk',
    apkSize: '31.57 MB',
    githubUrl: 'https://github.com/nurdinjonov/dailyPlanner',
    featured: true,
    metrics: [
      { label: 'Hajmi (AOT)', value: '31.5 MB' },
      { label: 'Ma\'lumotlar Bazasi', value: 'SQLite Offline' },
      { label: 'SDK Framework', value: '.NET 9.0' },
      { label: 'Android Versiya', value: 'Android 8.0 - 15' }
    ],
    screens: [
      {
        id: 'tasks',
        title: 'Mening Rejalarim',
        badge: 'Natural Input & Recurrence',
        description: 'Vazifalar, ustuvorliklar va takrorlanuvchi dars jadvallarini boshqarish.',
        highlights: ['Takrorlanuvchi haftalik darslar', 'Filtrlash va tezkor qidiruv', 'Aniq eslatma vaqtlari']
      },
      {
        id: 'calendar',
        title: 'Oylik Interaktiv Taqvim',
        badge: 'Google Calendar Grid',
        description: '42 katakli to\'liq oylik to\'r va kunlar ustidagi dinamik vazifa indikatorlari.',
        highlights: ['Kun bo\'yicha saralash', 'Rangli task indikator nuqtalari', 'Bajarildi deb belgilash']
      },
      {
        id: 'pomodoro',
        title: 'Fokus Taymeri',
        badge: '25m Pomodoro Engine',
        description: 'Diqqatni bir joyga jamlash, tanaffuslar davriyligi va kunlik fokus daqiqalari.',
        highlights: ['Katta neon taymer', 'Kunlik fokus rekordi', 'Fon rejimida ovozli signal']
      },
      {
        id: 'stats',
        title: 'Odatlar & GitHub Heatmap',
        badge: 'Activity Heatmap Matrix',
        description: '35 kunlik umumiy intizom va unumdorlik faolligi xaritasi.',
        highlights: ['Duolingo streak olovi', '4 xil yashil zumrad intensivligi', 'Unumdorlik foizi tahlili']
      }
    ]
  }
];
