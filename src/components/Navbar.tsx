import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    soundFX.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      soundFX.playClick(900, 0.05);
    }
  };

  const handleNavClick = () => {
    soundFX.playClick(700, 0.03);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 max-w-6xl mx-auto">
      <nav className="glass-panel px-4 sm:px-6 py-3 rounded-2xl flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl bg-slate-950/70">
        
        {/* Brand: Xojiakbar Nurdinjonov */}
        <a 
          href="#home" 
          onClick={handleNavClick}
          className="flex items-center gap-2.5 group font-sans text-sm sm:text-base font-extrabold text-white tracking-tight"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-950/50 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-indigo-400">
              XN
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="leading-tight group-hover:text-indigo-300 transition-colors">Xojiakbar Nurdinjonov</span>
            <span className="text-[10px] text-slate-400 font-normal font-mono">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-300">
          <a href="#projects" onClick={handleNavClick} className="hover:text-white transition-colors">
            Loyihalar
          </a>
          <a href="#skills" onClick={handleNavClick} className="hover:text-white transition-colors">
            Texnologiyalar
          </a>
          <a href="#about" onClick={handleNavClick} className="hover:text-white transition-colors">
            Men Haqimda
          </a>
          <a href="#contact" onClick={handleNavClick} className="hover:text-white transition-colors">
            Bog'lanish
          </a>
        </div>

        {/* Right Action Elements */}
        <div className="flex items-center gap-3">
          {/* Status Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-300 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Opportunities</span>
          </div>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Ovozlarni o'chirish" : "Ovozlarni yoqish"}
            className="w-8 h-8 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-indigo-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel border border-white/10 bg-slate-950/95 shadow-2xl flex flex-col gap-3 text-sm text-slate-200">
          <a href="#projects" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-800 font-medium">
            📱 Loyihalar (DailyPlanner)
          </a>
          <a href="#skills" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-800 font-medium">
            🛠 Texnologiyalar
          </a>
          <a href="#about" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-800 font-medium">
            🎓 PDP Universiteti & Men Haqimda
          </a>
          <a href="#contact" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-800 font-medium">
            📬 Bog'lanish
          </a>
        </div>
      )}
    </header>
  );
};
