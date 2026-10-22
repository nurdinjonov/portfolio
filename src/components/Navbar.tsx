import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sun, Moon } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { useApp } from '../context/AppContext';
import type { Language } from '../data/translations';

export const Navbar: React.FC = () => {
  const { lang, setLang, theme, toggleTheme, t } = useApp();
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

  const handleThemeToggle = () => {
    soundFX.playClick(950, 0.03);
    toggleTheme();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 backdrop-blur-xl border-b transition-colors duration-300 bg-white/80 border-slate-200/80 dark:bg-slate-950/80 dark:border-white/5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand: nurdinjonov _ */}
        <a 
          href="#home" 
          onClick={handleNavClick}
          className="flex items-center gap-1.5 group font-mono text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="text-emerald-500 font-extrabold">&gt;</span>
          <span className="group-hover:text-emerald-500 transition-colors">nurdinjonov</span>
          <span className="animate-pulse text-emerald-500 font-extrabold">_</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
          <a href="#about" onClick={handleNavClick} className="hover:text-emerald-500 transition-colors">
            {t.nav.about}
          </a>
          <a href="#experience" onClick={handleNavClick} className="hover:text-emerald-500 transition-colors">
            {t.nav.experience}
          </a>
          <a href="#skills" onClick={handleNavClick} className="hover:text-emerald-500 transition-colors">
            {t.nav.skills}
          </a>
          <a href="#projects" onClick={handleNavClick} className="hover:text-emerald-500 transition-colors">
            {t.nav.projects}
          </a>
          <a href="#contact" onClick={handleNavClick} className="hover:text-emerald-500 transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Right Action Elements: Languages + Theme + Sound */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-1 px-1.5 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60">
            {(['uz', 'en', 'ru'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={`px-1.5 py-0.5 rounded transition-all text-[11px] uppercase ${
                  lang === l
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-emerald-950/80 shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme Switcher: [dark] / [light] */}
          <button
            onClick={handleThemeToggle}
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            title={theme === 'dark' ? "Light rejimga o'tish" : "Dark rejimga o'tish"}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline text-[11px] text-slate-400">[light]</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline text-[11px] text-slate-600">[dark]</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Ovozlarni o'chirish" : "Ovozlarni yoqish"}
            className="w-7 h-7 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-500" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-7 h-7 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60 flex items-center justify-center text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 shadow-2xl flex flex-col gap-3 font-mono text-xs text-slate-800 dark:text-slate-200">
          <a href="#about" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
            # {t.nav.about}
          </a>
          <a href="#experience" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
            # {t.nav.experience}
          </a>
          <a href="#skills" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
            # {t.nav.skills}
          </a>
          <a href="#projects" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
            # {t.nav.projects}
          </a>
          <a href="#contact" onClick={handleNavClick} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
            # {t.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
};
