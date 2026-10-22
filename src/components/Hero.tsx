import React from 'react';
import { ArrowDown, ChevronRight, Send } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="home" className="relative min-h-[92vh] pt-36 pb-20 flex flex-col justify-center items-start px-4 sm:px-8 max-w-5xl mx-auto z-10 font-sans">
      
      {/* CLI Greeting Prompt: $ hello, guest. welcome to my portfolio website. */}
      <div className="font-mono text-sm sm:text-base text-emerald-400 mb-5 flex items-center gap-2 select-none">
        <span className="text-emerald-500 font-bold">$</span>
        <span>{t.hero.greeting}</span>
      </div>

      {/* Name Title */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-[1.05]">
        Xojiakbar{' '}
        <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
          Nurdinjonov
        </span>
      </h1>

      {/* Animated Prompt Role: > c#_fullstack_engineer_ */}
      <div className="font-mono text-xl sm:text-3xl text-slate-200 font-bold mb-7 flex items-center gap-2.5">
        <span className="text-emerald-400">&gt;</span>
        <span className="text-indigo-400 font-mono tracking-tight">
          {t.hero.role}
        </span>
        <span className="w-2.5 h-6 bg-emerald-400 animate-pulse ml-1 inline-block" />
      </div>

      {/* Bio Tagline */}
      <p className="max-w-3xl text-slate-300 text-base sm:text-lg sm:leading-relaxed mb-10 font-normal">
        {t.hero.bio}
      </p>

      {/* Developer Overview Metadata Table */}
      <div className="w-full max-w-3xl p-6 sm:p-7 rounded-2xl font-mono text-xs sm:text-sm border transition-all mb-10 border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-2xl space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-2 border-b border-white/5 items-center">
          <div className="sm:col-span-3 text-slate-400 font-semibold uppercase tracking-wider text-xs">
            {t.hero.studyLabel}
          </div>
          <div className="sm:col-span-9 text-slate-100 font-medium text-sm sm:text-base">
            {t.hero.studyValue}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-2 border-b border-white/5 items-center">
          <div className="sm:col-span-3 text-slate-400 font-semibold uppercase tracking-wider text-xs">
            {t.hero.focusLabel}
          </div>
          <div className="sm:col-span-9 text-emerald-400 font-medium text-sm sm:text-base">
            {t.hero.focusValue}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-2 items-center">
          <div className="sm:col-span-3 text-slate-400 font-semibold uppercase tracking-wider text-xs">
            {t.hero.locationLabel}
          </div>
          <div className="sm:col-span-9 text-slate-200 font-medium text-sm sm:text-base">
            {t.hero.locationValue}
          </div>
        </div>
      </div>

      {/* Clean Quick CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <a
          href="#projects"
          onClick={() => soundFX.playClick(600, 0.03)}
          className="px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm sm:text-base font-bold flex items-center gap-2.5 shadow-xl shadow-indigo-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{t.hero.btnProjects}</span>
          <ChevronRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          onClick={() => soundFX.playClick(750, 0.03)}
          className="px-7 py-4 rounded-xl border border-white/10 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-mono text-sm sm:text-base font-semibold flex items-center gap-2.5 transition-all hover:scale-[1.02]"
        >
          <Send className="w-4 h-4 text-emerald-400" />
          <span>{t.hero.btnContact}</span>
        </a>
      </div>

      {/* Down indicator */}
      <a
        href="#about"
        className="mt-6 text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono text-xs sm:text-sm"
      >
        <span className="text-emerald-400">#</span>
        <span>scroll down</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
