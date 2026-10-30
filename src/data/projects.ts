import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'daily-planner',
    title: 'DailyPlanner & Focus',
    tagline: 'Sanoat darajasidagi C# .NET MAUI unumdorlik va rejalashtirish ekotizimi',
    category: 'Mobil & Desktop Ilova',
    version: 'v1.2.3 Signed Release',
    status: 'Production',
    description: 
      'Clean Architecture va MVVM andozalari asosida qurilgan, SQLite bilan xavfsiz ishlovchi, 61 kunlik silliq interaktiv kalendar slayderi (bugungi sanaga avtomatik markazlanish), 6 ta bo\'limli to\'liq pastki menyu (Rejalar, Taqvim, Fokus, Odatlar, Tahlil, Profil), Duolingo-style streak odatlar, ovozli eslatmalar, Pomodoro taymeri va tabiiy matnni (NLP) tahlil qiluvchi flagman mobil ilova.',
    keyFeatures: [
      '61 kunlik silliq gorizontal kalendar slayderi va bugungi sanaga avto-markazlanish',
      '6 ta to\'g\'ridan-to\'g\'ri bo\'limli zamonaviy pastki navigatsiya paneli (ortiqcha "More" menyusisiz)',
      'SMS uslubidagi ovozli va tebranishli aniq vaqtdagi eslatmalar (RTC_WAKEUP Exact Alarms)',
      'Mukammallashtirilgan odatlar zanjiri (Streaks), 7 kunlik haftalik vizual tracker va jami kunlar hisobi',
      'Google Calendar oylik interaktiv to\'ri (42 kunlik jadval va ko\'p rangli vazifa nuqtalari)',
      'Natural Language Parser (Regex orqali "Ertaga 16:30 da C# darsi #PDP !yuqori" matnidan parametrlarni avtomatik ajratish)',
      'Pomodoro Focus Timer (25/5/15 daqiqalik chuqur diqqat va tanaffus rejimlari)',
      'GitHub-Style Productivity Heatmap (So\'nggi 35 kunlik faollikning zumrad matritsasi)',
      'Yangi zamonaviy vektor kiber-reticle ilova logotipi va UI/UX optimizatsiyasi'
    ],
    techStack: [
      'C# 12',
      '.NET 9 MAUI',
      'CommunityToolkit.Mvvm',
      'SQLite (bundle_green)',
      'Clean Architecture',
      'Android Alarms & Notifications',
      'ILLink AOT Tree-Shaking'
    ],
    apkFileName: 'DailyPlanner.apk',
    apkSize: '31.57 MB',
    githubUrl: 'https://github.com/nurdinjonov/DailyPlanner',
    featured: true,
    metrics: [
      { label: 'Hajmi (AOT)', value: '31.5 MB' },
      { label: 'Xotira Oqishi', value: '0 Leak' },
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
