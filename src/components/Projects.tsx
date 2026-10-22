import React, { useState } from 'react';
import { Download, ExternalLink, GitBranch, Layers, Check, ShieldCheck, X, ChevronRight } from 'lucide-react';
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
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-3">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Ishlab Chiqilgan Dasturiy Mahsulotlar</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Mobil & Backend Yechimlari
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Clean Architecture asosidagi, har bir qatori toza va sinovdan o'tgan flagman loyihalar.
        </p>
      </div>

      {/* Primary Project Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-gradient-to-b from-slate-900/60 to-slate-950/80 shadow-2xl">
        
        {/* Top bar info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-lg font-bold text-white shadow-lg">
              DP
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{primaryProject.title}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {primaryProject.version}
                </span>
              </div>
              <div className="text-xs text-slate-400">{primaryProject.category}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
              <GitBranch className="w-3.5 h-3.5 text-indigo-400" /> master: 70097d3
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-semibold">
              Signed APK
            </span>
          </div>
        </div>

        {/* Main 2-column showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
          
          {/* Left Column: 3D Smartphone Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <DeviceSimulator3D activeScreenId={activeScreen} onScreenChange={setActiveScreen} />
            <div className="mt-2 text-center text-xs text-slate-400">
              Yuqoridagi smartfon ekranini aylantiring yoki pastki tugmalaridan bo'limlarni almashtiring.
            </div>
          </div>

          {/* Right Column: Engineering Highlights & Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Tagline & Overview */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                {primaryProject.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {primaryProject.description}
              </p>
            </div>

            {/* Solved Engineering Challenges */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Yechilgan Muhandislik Masalalari:</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Google Calendar Uslubidagi 42 Katakli Oylik Taqvim:</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Dushanbadan boshlanuvchi to'liq oylik to'r, kunlik ko'p rangli vazifa indikator nuqtalari (dots) va kun tanlanganda uning vazifalari ro'yxatini uzluksiz ochish logikasi.
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Natural Language Parser (NLP Leksik Tahlil):</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Foydalanuvchi yozgan bitta jumlani ("Ertaga 16:30 da C# darsi #PDP !yuqori") Regex orqali tahlil qilib, sana, vaqt, toifa va prioritetni avtomatik ajratib olish.
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Android Crash Bartaraf Etilishi & Xavfsiz Mavzu Dispetcheri:</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Mavzu (Kun/Tun) almashishida Android rendererining animasiya kolliziyasini UI Dispatcher bilan bartaraf etish hamda ilova ochilishidayoq saqlangan rejimni 0-millisekundda yuklash.
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">ILLink & AOT Optimizatsiyasi:</strong>
                    <span className="text-slate-400 block mt-0.5">
                      Keraksiz kutubxonalarni avtomatik kesish orqali 70+ MB bo'lishi mumkin bo'lgan dasturni 31.57 MB ga tushirish va xotira oqishini (memory leak) nolga yetkazish.
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
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-indigo-200 bg-indigo-950/60 hover:bg-indigo-900/70 border border-indigo-500/40 px-3.5 py-2 rounded-xl transition-all"
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

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleDownloadApk}
                disabled={downloading}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/70 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Yuklanmoqda...' : '📱 APK Yuklab Olish (31.5 MB)'}</span>
              </button>

              <a
                href={primaryProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick(800, 0.03)}
                className="px-5 py-3 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>💻 GitHub Repozitoriy</span>
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
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
                <div className="font-bold text-indigo-300 flex justify-between items-center">
                  <span>1. Presentation Layer (Views & ViewModels)</span>
                  <span className="text-[10px] bg-indigo-900/60 px-2 py-0.5 rounded text-indigo-200">MAUI UI</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  • <code>MainPage</code>, <code>CalendarPage</code>, <code>PomodoroPage</code>, <code>HabitsPage</code>, <code>ProfilePage</code>
                </div>
                <div className="text-[11px] text-slate-400">
                  • <code>CommunityToolkit.Mvvm</code> (<code>[ObservableProperty]</code>, <code>[RelayCommand]</code>)
                </div>
              </div>

              {/* Core / Domain Layer */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <div className="font-bold text-emerald-300 flex justify-between items-center">
                  <span>2. Core Domain Layer (Models & Business Logic)</span>
                  <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-200">Pure C#</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  • <code>PlanTask</code>, <code>Habit</code>, <code>TaskCompletionRecord</code>, <code>PomodoroSession</code>
                </div>
                <div className="text-[11px] text-slate-400">
                  • Hech qanday tashqi freymvorkka bog'lanmagan toza biznes qoidalari.
                </div>
              </div>

              {/* Infrastructure Layer */}
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30">
                <div className="font-bold text-purple-300 flex justify-between items-center">
                  <span>3. Infrastructure Layer (Data & Native Platform Services)</span>
                  <span className="text-[10px] bg-purple-900/60 px-2 py-0.5 rounded text-purple-200">SQLite & Android</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  • <code>DatabaseContext</code>, <code>PlanRepository</code>, <code>HabitRepository</code>
                </div>
                <div className="text-[11px] text-slate-400">
                  • <code>NotificationService</code> (Android 13/14+ <code>NotificationChannel</code>, <code>USE_EXACT_ALARM</code>)
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowArchModal(false)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Tushundim
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
