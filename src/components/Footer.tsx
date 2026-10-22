import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('uz-UZ', {
          timeZone: 'Asia/Tashkent',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFX.playClick(900, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur-xl py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="font-sans text-white font-bold tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>Xojiakbar Nurdinjonov</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div>© 2026 Barcha huquqlar himoyalangan.</div>
        </div>

        {/* Center: Live Tashkent Time */}
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-emerald-400">●</span>
            <span>Toshkent: {time || '12:00:00'} (UTC+5)</span>
          </div>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors text-xs font-mono"
        >
          <span>Tepaga</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
