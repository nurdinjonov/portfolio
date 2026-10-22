import React, { useState } from 'react';
import { Download, ChevronRight, Send, Sparkles, ArrowDown, Smartphone } from 'lucide-react';
import { soundFX } from '../utils/audio';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadApk = () => {
    soundFX.playSuccess();
    setDownloading(true);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#10b981', '#f59e0b', '#38bdf8'],
    });

    if ('vibrate' in navigator) {
      navigator.vibrate([30, 50, 40]);
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
    <section id="home" className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center px-4 overflow-hidden z-10">
      
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* University & Degree Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-6 shadow-lg shadow-indigo-950/30 hover:border-indigo-500/60 transition-all hover:scale-105">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>PDP Universiteti • 2-kurs C# Yo'nalishi</span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3 leading-[1.1]">
          Salom, men{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
            Xojiakbar Nurdinjonov
          </span>
        </h1>

        {/* Role Subheading */}
        <h2 className="text-xl sm:text-3xl font-bold text-slate-200 mb-6 tracking-tight flex items-center justify-center gap-2">
          <span>C# .NET & Fullstack Dasturchi</span>
        </h2>

        {/* Authentic & Inspiring Bio */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-10">
          Men zamonaviy mobil ilovalar (<strong className="text-white font-semibold">.NET MAUI</strong>), toza arxitektura (<strong className="text-white font-semibold">Clean Architecture</strong>) va yuqori samaradorlikka ega dasturiy mahsulotlar yarataman. Har bir loyihamda toza kod, mukammal dizayn va foydalanuvchi qulayligi mening bosh mezonimdir.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          
          {/* Primary: Download APK */}
          <button
            onClick={handleDownloadApk}
            disabled={downloading}
            className="group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-2xl shadow-emerald-950/60 hover:shadow-emerald-900/80 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>{downloading ? 'Yuklanmoqda...' : 'DailyPlanner v1.2.1 APK'}</span>
            <span className="text-[11px] bg-emerald-900/60 px-2 py-0.5 rounded font-mono border border-emerald-400/30">
              31.5 MB
            </span>
          </button>

          {/* Secondary: Projects */}
          <a
            href="#projects"
            onClick={() => soundFX.playClick(600, 0.03)}
            className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-sm sm:text-base flex items-center gap-2 border border-slate-700/80 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
          >
            <Smartphone className="w-4 h-4 text-indigo-400" />
            <span>Loyihalarim</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          {/* Tertiary: Telegram */}
          <a
            href="https://t.me/nurdinjonov"
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFX.playClick(750, 0.03)}
            className="px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-sky-400 hover:text-sky-300 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-[1.03] shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>Telegram</span>
          </a>
        </div>

        {/* Clean Highlights Bento */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-left">
          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-colors bg-slate-900/50">
            <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">Ta'lim</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">PDP University</div>
            <div className="text-[11px] text-slate-400 mt-0.5">2-kurs C# Dasturlash</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-colors bg-slate-900/50">
            <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">Asosiy Platforma</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">.NET 9 & MAUI</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Android & Cross-platform</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors bg-slate-900/50">
            <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-semibold">Arxitektura</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">Clean + MVVM</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Sanoat standarti</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-colors bg-slate-900/50">
            <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">Flagman Loyiha</div>
            <div className="text-sm sm:text-base font-bold text-white mt-1">DailyPlanner</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Signed APK v1.2.1</div>
          </div>
        </div>

      </div>

      {/* Down indicator */}
      <a
        href="#projects"
        className="mt-14 text-slate-500 hover:text-indigo-400 transition-colors animate-bounce flex flex-col items-center gap-1.5 text-xs font-mono"
      >
        <span>Ko'proq ma'lumot</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
