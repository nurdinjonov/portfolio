import React, { useState } from 'react';
import { Download, ChevronRight, Terminal as TerminalIcon, Sparkles, ArrowDown } from 'lucide-react';
import { HeroSpatialCore } from './3d/HeroSpatialCore';
import { soundFX } from '../utils/audio';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadApk = () => {
    soundFX.playSuccess();
    setDownloading(true);

    // Fire festive confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#10b981', '#f59e0b', '#38bdf8'],
    });

    if ('vibrate' in navigator) {
      navigator.vibrate([30, 50, 40]);
    }

    // Direct download anchor
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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* Top Student & Discipline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-6 backdrop-blur-md shadow-lg hover:border-indigo-500/60 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>PDP University • 2nd-Year Software Engineering (C#)</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Arxitekturaviy Intizom.{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
            Zamonaviy .NET 9 & C#.
          </span>{' '}
          Mukammal Yechimlar.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          Salom, men <strong className="text-white font-semibold">Xojiakbar Nurdinjonov (xnurd)</strong>. Clean Architecture, .NET MAUI, yuqori yuklamali avtomatlashtirilgan tizimlar va Linux serverlari ekotizimida sanoat darajasidagi toza va ishonchli dasturiy yechimlar yaratuvchi injenerman.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          {/* Direct APK Download Button with Confetti */}
          <button
            onClick={handleDownloadApk}
            disabled={downloading}
            className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm flex items-center gap-2.5 shadow-xl shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>{downloading ? 'APK Yuklanmoqda...' : '📱 DailyPlanner v1.2.1 APK (31.5 MB)'}</span>
            <span className="text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded font-mono border border-emerald-400/30">
              Signed
            </span>
          </button>

          {/* Explore Projects Button */}
          <a
            href="#projects"
            onClick={() => soundFX.playClick(600, 0.03)}
            className="px-5 py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Loyihani Ko'rish</span>
            <ChevronRight className="w-4 h-4 text-indigo-400" />
          </a>

          {/* Terminal CLI Trigger Button */}
          <a
            href="#terminal"
            onClick={() => soundFX.playClick(750, 0.03)}
            className="px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-indigo-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>$ xnurd --cli</span>
          </a>
        </div>

        {/* 3D Spatial Canvas Core */}
        <div className="w-full max-w-3xl my-2">
          <HeroSpatialCore />
        </div>

        {/* Telemetry Bar (Real Engineering Signals) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-left">
          <div className="glass-panel p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-mono text-indigo-400 uppercase">Framework</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">.NET 9.0 MAUI</div>
            <div className="text-[10px] text-slate-500">Android & Desktop</div>
          </div>

          <div className="glass-panel p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-mono text-emerald-400 uppercase">Arxitektura</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Clean + MVVM</div>
            <div className="text-[10px] text-slate-500">Decoupled Domain</div>
          </div>

          <div className="glass-panel p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-mono text-amber-400 uppercase">Lokal DB</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">SQLite Green</div>
            <div className="text-[10px] text-slate-500">Zero-Leak Context</div>
          </div>

          <div className="glass-panel p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-mono text-cyan-400 uppercase">Rejimi</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Dual Theme</div>
            <div className="text-[10px] text-slate-500">Safe Dispatcher</div>
          </div>
        </div>

      </div>

      {/* Down indicator */}
      <a
        href="#projects"
        className="mt-12 text-slate-500 hover:text-indigo-400 transition-colors animate-bounce flex flex-col items-center gap-1 text-[11px] font-mono"
      >
        <span>Showcase</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </a>
    </section>
  );
};
