import React, { useState } from 'react';
import { Download, ExternalLink, Layers, Check, ShieldCheck, X, ChevronRight, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';
import { DeviceSimulator3D } from './3d/DeviceSimulator3D';
import { soundFX } from '../utils/audio';
import confetti from 'canvas-confetti';

export const Projects: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('tasks');
  const [showArchModal, setShowArchModal] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const primaryProject = projects[0];

  const handleDownloadApk = () => {
    soundFX.playSuccess();
    setDownloading(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#6366f1', '#10b981', '#f59e0b', '#ec4899'],
    });

    if ('vibrate' in navigator) {
      navigator.vibrate([30, 40, 30]);
    }

    const link = document.createElement('a');
    link.href = '/DailyPlanner.apk';
    link.download = 'DailyPlanner-v1.2.1-Signed.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2500);
  };

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-3">
          <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          <span>Flagman Mobil Loyiha</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          DailyPlanner & Focus (v1.2.1)
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Clean Architecture va MVVM andozalari asosidagi zamonaviy C# .NET MAUI ekotizimi.
        </p>
      </div>

      {/* Primary Project Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-b from-slate-900/70 to-slate-950/90 shadow-2xl">
        
        {/* Top bar info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-indigo-950/50">
              DP
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{primaryProject.title}</h3>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {primaryProject.version}
                </span>
              </div>
              <div className="text-xs text-slate-400">{primaryProject.category} • Android & Desktop</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-semibold">
              .NET 9 MAUI
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold">
              Signed APK
            </span>
          </div>
        </div>

        {/* Main 2-column showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
          
          {/* Left Column: 3D Smartphone Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Interactive Screen Switcher Chips above the phone */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-2">
              {[
                { id: 'tasks', label: 'Rejalar' },
                { id: 'calendar', label: 'Oylik Taqvim' },
                { id: 'pomodoro', label: 'Pomodoro' },
                { id: 'stats', label: 'Heatmap' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick(800, 0.03);
                    setActiveScreen(tab.id);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeScreen === tab.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <DeviceSimulator3D activeScreenId={activeScreen} onScreenChange={setActiveScreen} />
            
            <div className="mt-2 text-center text-xs text-slate-400">
              * Smartfonni sichqoncha bilan 3D aylantirib ko'rishingiz mumkin
            </div>
          </div>

          {/* Right Column: Engineering Highlights & Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Tagline & Overview */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {primaryProject.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {primaryProject.description}
              </p>
            </div>

            {/* Solved Engineering Challenges */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Asosiy Imkoniyatlar & Arxitektura:</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Google Calendar Uslubidagi 42 Katakli Oylik Taqvim:</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Dushanbadan boshlanuvchi to'liq oylik to'r, kunlar ustidagi ko'p rangli vazifa nuqtalari (dots) va har bir kunga tegishli vazifalar panelini ochish.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Natural Language Parser (AI Input):</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Oddiy yozilgan gapdan ("Ertaga 16:30 da C# darsi #PDP !yuqori") sana, vaqt, toifa va prioritetni Regex orqali bir zumda ajratib olish.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Pomodoro Taymeri, Streaks va GitHub Heatmap:</strong>
                    <span className="text-slate-400 block mt-0.5">
                      25 daqiqalik fokus rejimlar, Duolingo uslubidagi kundalik intizom zanjiri (🔥) va so'nggi 35 kunlik faollikning yashil matritsasi.
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Android 13/14+ Ovozli Push Bildirishnomalar:</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Yuqori prioritetli NotificationChannel, fon rejimida eslatuvchi signallar va AOT optimizatsiyasi orqali yengil 31.57 MB hajm.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Drawer Trigger */}
            <div className="pt-1">
              <button
                onClick={() => {
                  soundFX.playClick(650, 0.03);
                  setShowArchModal(true);
                }}
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-indigo-200 bg-indigo-950/70 hover:bg-indigo-900/80 border border-indigo-500/40 px-4 py-2 rounded-xl transition-all"
              >
                <span>📐 Clean Architecture Qatlamlari Diagrammasi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-2">Qo'llanilgan Texnologiyalar:</div>
              <div className="flex flex-wrap gap-1.5">
                {primaryProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-[11px] text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Big APK Download & GitHub Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={handleDownloadApk}
                disabled={downloading}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm sm:text-base flex items-center gap-3 shadow-2xl shadow-emerald-950/70 hover:shadow-emerald-900/90 transition-all hover:scale-[1.03] active:scale-[0.98] border border-emerald-400/30"
              >
                <Download className="w-5 h-5" />
                <div className="flex flex-col text-left">
                  <span>{downloading ? 'APK Yuklanmoqda...' : 'DailyPlanner.apk Yuklab Olish'}</span>
                  <span className="text-[10px] text-emerald-100 font-mono font-normal">v1.2.1 Signed • 31.57 MB</span>
                </div>
              </button>

              <a
                href={primaryProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick(800, 0.03)}
                className="px-5 py-3.5 rounded-2xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>GitHub Repozitoriy</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Clean Architecture Modal Drawer */}
      {showArchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setShowArchModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
              <Layers className="w-4 h-4" />
              <span>Clean Architecture & MVVM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              DailyPlanner Qatlamlar Arxitekturasi
            </h3>

            {/* Architecture Diagram */}
            <div className="space-y-3 font-mono text-xs">
              {/* Presentation Layer */}
              <div className="p-3.5 rounded-xl bg-indigo-950/50 border border-indigo-500/30">
                <div className="font-bold text-indigo-300 flex justify-between items-center">
                  <span>1. Presentation Layer (Views & ViewModels)</span>
                  <span className="text-[10px] bg-indigo-900/60 px-2 py-0.5 rounded text-indigo-200">MAUI UI</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  • <code>MainPage</code>, <code>CalendarPage</code>, <code>PomodoroPage</code>, <code>HabitsPage</code>, <code>ProfilePage</code>
                </div>
                <div className="text-[11px] text-slate-400">
                  • <code>CommunityToolkit.Mvvm</code> (<code>[ObservableProperty]</code>, <code>[RelayCommand]</code>)
                </div>
              </div>

              {/* Core / Domain Layer */}
              <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30">
                <div className="font-bold text-emerald-300 flex justify-between items-center">
                  <span>2. Core Domain Layer (Models & Business Rules)</span>
                  <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-200">Pure C#</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  • <code>PlanTask</code>, <code>Habit</code>, <code>TaskCompletionRecord</code>, <code>PomodoroSession</code>
                </div>
                <div className="text-[11px] text-slate-400">
                  • Tashqi freymvorklarga bog'lanmagan sof domen obyektlari.
                </div>
              </div>

              {/* Infrastructure Layer */}
              <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-500/30">
                <div className="font-bold text-purple-300 flex justify-between items-center">
                  <span>3. Infrastructure Layer (Data & Native Platform Services)</span>
                  <span className="text-[10px] bg-purple-900/60 px-2 py-0.5 rounded text-purple-200">SQLite & Android</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  • <code>DatabaseContext</code>, <code>PlanRepository</code>, <code>HabitRepository</code>
                </div>
                <div className="text-[11px] text-slate-400">
                  • <code>NotificationService</code> (Android 14 <code>NotificationChannel</code>, <code>USE_EXACT_ALARM</code>)
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowArchModal(false)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Tushunarli
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
