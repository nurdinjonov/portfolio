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
    <footer className="border-t py-12 px-4 sm:px-8 font-mono text-xs sm:text-sm border-white/5 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
        
        {/* Left: CLI deployment status */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-emerald-400 font-bold">$</span>
          <span>deployed with docker • vite • tls — © 2026 nurdinjonov</span>
        </div>

        {/* Center: Live Tashkent Time */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-slate-900/80 text-xs sm:text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.footer.tashkent}: {time || '17:00:00'} (UTC+5)</span>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer text-xs sm:text-sm font-semibold"
        >
          <span>{t.footer.top}</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
