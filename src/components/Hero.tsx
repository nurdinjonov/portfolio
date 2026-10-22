import React from 'react';
import { ArrowDown, ChevronRight, Send } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center items-start px-4 sm:px-6 max-w-4xl mx-auto z-10">
      
      {/* CLI Greeting Prompt: $ hello, guest. welcome to my portfolio. */}
      <div className="font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2 select-none">
        <span className="text-emerald-500 font-bold">$</span>
        <span>{t.hero.greeting}</span>
      </div>

      {/* Name Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-3 leading-tight">
        Xojiakbar Nurdinjonov
      </h1>

      {/* Animated Prompt Role: > c#_fullstack_engineer_ */}
      <div className="font-mono text-base sm:text-xl text-slate-700 dark:text-slate-300 font-semibold mb-6 flex items-center gap-2">
        <span className="text-emerald-500">&gt;</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-mono">
          {t.hero.role}
        </span>
      </div>

      {/* Bio Tagline */}
      <p className="max-w-2xl text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
        {t.hero.bio}
      </p>

      {/* Developer Overview Metadata Table (inspired by gomuhandis.uz) */}
      <div className="w-full max-w-2xl p-5 sm:p-6 rounded-2xl font-mono text-xs sm:text-sm border transition-all mb-8 border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-2 border-b border-slate-200 dark:border-white/5">
          <div className="sm:col-span-3 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
            {t.hero.studyLabel}
          </div>
          <div className="sm:col-span-9 text-slate-900 dark:text-slate-200 font-medium">
            {t.hero.studyValue}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-2 border-b border-slate-200 dark:border-white/5">
          <div className="sm:col-span-3 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
            {t.hero.focusLabel}
          </div>
          <div className="sm:col-span-9 text-emerald-600 dark:text-emerald-400 font-medium">
            {t.hero.focusValue}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-2">
          <div className="sm:col-span-3 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
            {t.hero.locationLabel}
          </div>
          <div className="sm:col-span-9 text-slate-900 dark:text-slate-200 font-medium">
            {t.hero.locationValue}
          </div>
        </div>
      </div>

      {/* Clean Quick CTA Buttons (Projects & Contact) */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <a
          href="#projects"
          onClick={() => soundFX.playClick(600, 0.03)}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{t.hero.btnProjects}</span>
          <ChevronRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          onClick={() => soundFX.playClick(750, 0.03)}
          className="px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
        >
          <Send className="w-4 h-4 text-emerald-500" />
          <span>{t.hero.btnContact}</span>
        </a>
      </div>

      {/* Down indicator */}
      <a
        href="#about"
        className="mt-6 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono text-xs"
      >
        <span className="text-emerald-500">#</span>
        <span>scroll down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
