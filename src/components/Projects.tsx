import React, { useState } from 'react';
import { Download, ExternalLink, Layers, Check, X, ChevronRight } from 'lucide-react';
import { DeviceSimulator3D } from './3d/DeviceSimulator3D';
import { soundFX } from '../utils/audio';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';

export const Projects: React.FC = () => {
  const { t } = useApp();
  const [activeScreen, setActiveScreen] = useState('tasks');
  const [showArchModal, setShowArchModal] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadApk = () => {
    soundFX.playSuccess();
    setDownloading(true);

    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.5 },
      colors: ['#10b981', '#6366f1', '#38bdf8', '#f59e0b'],
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
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      
      {/* CLI Section Header: # projects */}
      <div className="mb-10">
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="text-emerald-500">#</span>
          <span>projects</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Primary Project Card: DailyPlanner & Focus */}
      <div className="rounded-3xl p-6 sm:p-8 border transition-all border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
        
        {/* Header row of the card */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow-md">
              DP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  DailyPlanner & Focus
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  v1.2.1 Signed APK
                </span>
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                C# .NET 9 • MAUI • Android & Cross-Platform
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
              Clean Architecture
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              SQLite
            </span>
          </div>
        </div>

        {/* 2-Column Responsive Showcase: 3D Smartphone on left, Details on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* Left Column: 3D Smartphone Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Screen switcher tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-3 font-mono text-xs">
              {[
                { id: 'tasks', label: t.projects.tabs.tasks },
                { id: 'calendar', label: t.projects.tabs.calendar },
                { id: 'pomodoro', label: t.projects.tabs.pomodoro },
                { id: 'stats', label: t.projects.tabs.heatmap },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick(800, 0.03);
                    setActiveScreen(tab.id);
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeScreen === tab.id
                      ? 'bg-emerald-600 text-white font-bold shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 3D Device Canvas */}
            <DeviceSimulator3D activeScreenId={activeScreen} onScreenChange={setActiveScreen} />
            
            <div className="mt-2 text-center text-[11px] font-mono text-slate-400">
              * Smartfonni sichqoncha / barmoq bilan 3D aylantirishingiz mumkin
            </div>
          </div>

          {/* Right Column: Project Highlights & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 font-mono">
                {t.projects.dailyPlannerTagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {t.projects.dailyPlannerDesc}
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2 text-xs font-mono">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-slate-950/50 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-sans">
                  <strong className="text-slate-900 dark:text-white font-semibold">42-Katakli Oylik Taqvim:</strong> Dushanbadan boshlanuvchi to'liq oylik kalendar, kunlik vazifalar nuqtalari va tezkor boshqaruv.
                </span>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-slate-950/50 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-sans">
                  <strong className="text-slate-900 dark:text-white font-semibold">Takrorlanish & Bildirishnomalar:</strong> Har dushanba, haftalik yoki kunlik takrorlanishlar hamda Android 14+ fon signallari.
                </span>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-slate-950/50 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-sans">
                  <strong className="text-slate-900 dark:text-white font-semibold">Pomodoro & GitHub Heatmap:</strong> 25 daqiqalik fokus sessiyalari va so'nggi 35 kunlik faollik matritsasi.
                </span>
              </div>
            </div>

            {/* Architecture Modal Trigger */}
            <div>
              <button
                onClick={() => {
                  soundFX.playClick(650, 0.03);
                  setShowArchModal(true);
                }}
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-700 dark:text-indigo-300 hover:underline bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-500/40 px-3.5 py-1.5 rounded-lg transition-all"
              >
                <span>{t.projects.architectureBtn}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct APK Download Button (The only place APK is hosted) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleDownloadApk}
                disabled={downloading}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-mono text-xs sm:text-sm font-bold flex items-center gap-3 shadow-xl shadow-emerald-600/20 dark:shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <div className="flex flex-col text-left">
                  <span>{downloading ? t.projects.downloading : t.projects.downloadApk}</span>
                  <span className="text-[10px] text-emerald-100 font-normal">{t.projects.downloadSub}</span>
                </div>
              </button>

              <a
                href="https://github.com/nurdinjonov"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick(800, 0.03)}
                className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <span>{t.projects.githubBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Clean Architecture Modal Drawer */}
      {showArchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left font-mono">
            <button
              onClick={() => setShowArchModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 mb-1">
              <Layers className="w-4 h-4" />
              <span>Clean Architecture & MVVM</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
              {t.projects.archTitle}
            </h3>

            {/* Architecture Diagram */}
            <div className="space-y-3 text-xs">
              {t.projects.archLayers.map((layer, lIdx) => (
                <div key={lIdx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300 flex justify-between items-center">
                    <span>{layer.title}</span>
                    <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">{layer.tech}</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-sans">
                    {layer.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowArchModal(false)}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
