import React from 'react';
import { GraduationCap, BookOpen, Brain, Zap, CheckCircle2 } from 'lucide-react';
import { timelineMilestones } from '../data/skills';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
          <span>Ta'lim & Muhandislik Yo'li</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          PDP Universiteti & Shaxsiyat
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Nazariya va amaliyot uyg'unligi — har bir dars va loyiha orqali professional muhandislik darajasiga ko'tarilish.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-32 space-y-12 mb-16">
        {timelineMilestones.map((item, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Timeline bullet */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

            {/* Year tag for larger screens */}
            <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right font-mono text-xs text-indigo-400 font-bold">
              {item.year}
            </div>

            {/* Content card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all bg-slate-900/50">
              <div className="sm:hidden font-mono text-xs text-indigo-400 font-bold mb-1">
                {item.year}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">
                  {item.period}
                </span>
              </div>

              <div className="text-xs font-semibold text-emerald-400 mb-2">{item.institution}</div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>

              {/* Achievements */}
              <div className="space-y-1.5 border-t border-white/5 pt-3 mb-4">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {item.badges.map((b) => (
                  <span
                    key={b}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50"
                  >
                    #{b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Philosophy Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-slate-900/40">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
            <Brain className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white mb-2">Obsidian Second Brain</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Har bir muammo, arxitekturaviy qaror va tizimli yechimlar Obsidian xotira bazasida Markdown formatida doimiy qayd qilinadi. Hech bir tajriba yo'qolmaydi.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-slate-900/40">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white mb-2">No-Bloat & Zero-Leak</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Har bir bayt xotira va protsessor sikli hisobda. Ortiqcha kutubxonasiz toza yozilgan kod va AOT tree-shaking — mening asosiy ustuvorligim.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-slate-900/40">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white mb-2">Uzluksiz O'rganish</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            PDP Universitetidagi darslar bilan cheklanmay, xalqaro C# jamiyati, Clean Architecture andozalari va chuqur tizimli dasturlashni har kuni o'rganaman.
          </p>
        </div>
      </div>
    </section>
  );
};
