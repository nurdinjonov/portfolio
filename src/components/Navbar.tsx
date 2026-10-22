import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { useApp } from '../context/AppContext';
import type { Language } from '../data/translations';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useApp();
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

  const handleLangChange = (l: Language) => {
    soundFX.playClick(850, 0.03);
    setLang(l);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 backdrop-blur-xl border-b border-white/5 bg-slate-950/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand: > nurdinjonov _ */}
        <a 
          href="#home" 
          onClick={handleNavClick}
          className="flex items-center gap-1.5 group font-mono text-base sm:text-lg font-bold tracking-tight text-white"
        >
          <span className="text-emerald-400 font-extrabold">&gt;</span>
          <span className="group-hover:text-emerald-400 transition-colors">nurdinjonov</span>
          <span className="animate-pulse text-emerald-400 font-extrabold">_</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-slate-400">
          <a href="#about" onClick={handleNavClick} className="hover:text-emerald-400 transition-colors">
            {t.nav.about}
          </a>
          <a href="#about" onClick={handleNavClick} className="hover:text-emerald-400 transition-colors">
            {t.nav.roadmap}
          </a>
          <a href="#skills" onClick={handleNavClick} className="hover:text-emerald-400 transition-colors">
            {t.nav.skills}
          </a>
          <a href="#projects" onClick={handleNavClick} className="hover:text-emerald-400 transition-colors">
            {t.nav.projects}
          </a>
          <a href="#contact" onClick={handleNavClick} className="hover:text-emerald-400 transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Right Action Elements: Languages (UZ / EN / RU) + Sound */}
        <div className="flex items-center gap-3 text-xs font-mono">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-xl border border-white/10 bg-slate-900/80 shadow-inner">
            {(['uz', 'en', 'ru'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={`px-2 py-0.5 rounded-lg transition-all text-xs uppercase cursor-pointer ${
                  lang === l
                    ? 'text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/30 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Ovozlarni o'chirish" : "Ovozlarni yoqish"}
            className="w-8 h-8 rounded-xl border border-white/10 bg-slate-900/80 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-xl border border-white/10 bg-slate-900/80 flex items-center justify-center text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl flex flex-col gap-3.5 font-mono text-sm text-slate-200">
          <a href="#about" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-900">
            # {t.nav.about}
          </a>
          <a href="#about" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-900">
            # {t.nav.roadmap}
          </a>
          <a href="#skills" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-900">
            # {t.nav.skills}
          </a>
          <a href="#projects" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-900">
            # {t.nav.projects}
          </a>
          <a href="#contact" onClick={handleNavClick} className="p-2.5 rounded-xl hover:bg-slate-900">
            # {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
};
