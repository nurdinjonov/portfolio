import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ChevronDown } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const About: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* CLI Section Header: # about & roadmap */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 font-mono text-xs text-emerald-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ta'lim & Muhandislik Xaritasi</span>
        </div>
        <h2 className="font-mono text-2xl sm:text-4xl font-extrabold text-white flex items-center gap-2.5">
          <span className="text-emerald-400">#</span>
          <span>{t.about.title}</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-3xl">
          {t.about.bio}
        </p>
      </div>

      {/* Chronological Roadmap Stepper (Eskidan yangiga: 01 -> 02 -> 03) */}
      <div className="space-y-6 relative">
        
        {t.about.timeline.map((item, idx) => (
          <React.Fragment key={item.step}>
            
            {/* Step Card */}
            <div
              onMouseEnter={() => soundFX.playClick(950, 0.02)}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative group overflow-hidden ${
                item.isActive
                  ? 'border-emerald-500/60 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-indigo-950/40 shadow-2xl shadow-emerald-950/40'
                  : 'border-white/10 bg-slate-900/60 hover:border-indigo-500/40'
              }`}
            >
              {/* Active pulsing glow for current stage */}
              {item.isActive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              )}

              {/* Top row: Step number, Year & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-bold text-sm shadow-md ${
                    item.isActive
                      ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-emerald-950/80 ring-2 ring-emerald-400/50'
                      : 'bg-slate-800 text-indigo-300 border border-slate-700'
                  }`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-emerald-400 mt-0.5">
                      {item.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                    item.isActive
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-xs'
                      : 'bg-slate-800 text-slate-300 border-slate-700/60'
                  }`}>
                    {item.status}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-semibold hidden sm:inline">
                    [{item.year}]
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5 font-sans">
                {item.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-950/70 text-slate-300 border border-white/5 group-hover:border-emerald-500/30 transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Connecting Neon Directional Arrow (if not last step) */}
            {idx < t.about.timeline.length - 1 && (
              <div className="flex justify-center items-center py-1">
                <div className="flex flex-col items-center gap-1 group">
                  <div className="w-[2px] h-6 bg-gradient-to-b from-indigo-500 to-emerald-400 opacity-60" />
                  <div className="w-7 h-7 rounded-full bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/50">
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                  </div>
                  <div className="w-[2px] h-6 bg-gradient-to-b from-emerald-400 to-indigo-500 opacity-60" />
                </div>
              </div>
            )}

          </React.Fragment>
        ))}

      </div>

    </section>
  );
};
