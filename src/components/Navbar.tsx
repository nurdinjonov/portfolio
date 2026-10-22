import React, { useState } from 'react';
import { Volume2, VolumeX, GitBranch, Menu, X } from 'lucide-react';
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
      <nav className="glass-panel px-4 py-2.5 rounded-2xl flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl bg-slate-950/70">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={handleNavClick}
          className="flex items-center gap-2 group font-mono text-sm tracking-tight text-white font-bold"
        >
          <span className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 group-hover:scale-105 transition-all">
            ⚡
          </span>
          <span className="tracking-wider">xnurd<span className="text-indigo-400">.dev</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#projects" onClick={handleNavClick} className="hover:text-white transition-colors">
            Loyihalar
          </a>
          <a href="#skills" onClick={handleNavClick} className="hover:text-white transition-colors">
            Texnologiyalar
          </a>
          <a href="#terminal" onClick={handleNavClick} className="hover:text-white transition-colors flex items-center gap-1">
            <span className="text-indigo-400">$</span> Terminal
          </a>
          <a href="#about" onClick={handleNavClick} className="hover:text-white transition-colors">
            Men Haqimda
          </a>
          <a href="#contact" onClick={handleNavClick} className="hover:text-white transition-colors">
            Aloqa
          </a>
        </div>

        {/* Right Action Elements */}
        <div className="flex items-center gap-2.5">
          {/* Status Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Work</span>
          </div>

          {/* Git Commit Hash Pill */}
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
            <GitBranch className="w-3 h-3 text-indigo-400" />
            <span>70097d3</span>
          </div>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Ovozlarni o'chirish" : "Ovozlarni yoqish"}
            className="w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-indigo-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel border border-white/10 bg-slate-950/95 shadow-2xl flex flex-col gap-3 text-sm text-slate-200">
          <a href="#projects" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-800">
            📱 Loyihalar (DailyPlanner)
          </a>
          <a href="#skills" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-800">
            🛠 Texnologiyalar & Arxitektura
          </a>
          <a href="#terminal" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-800">
            💻 Terminal CLI
          </a>
          <a href="#about" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-800">
            🎓 PDP Universiteti & Men Haqimda
          </a>
          <a href="#contact" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-800">
            📬 Bog'lanish
          </a>
        </div>
      )}
    </header>
  );
};
