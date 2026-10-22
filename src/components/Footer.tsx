import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { t } = useApp();
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
    <footer className="border-t py-10 px-4 sm:px-6 transition-colors duration-300 font-mono text-xs border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-slate-500 dark:text-slate-400">
        
        {/* Left: CLI deployment status */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-emerald-500 font-bold">$</span>
          <span>deployed with docker • vite • tls — © 2026 nurdinjonov</span>
        </div>

        {/* Center: Live Tashkent Time */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t.footer.tashkent}: {time || '16:50:00'} (UTC+5)</span>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer"
        >
          <span>{t.footer.top}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
