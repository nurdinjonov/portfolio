import React from 'react';
import { useApp } from '../context/AppContext';

export const About: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      
      {/* CLI Section Header: # about & experience */}
      <div className="mb-8">
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="text-emerald-500">#</span>
          <span>about & experience</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          {t.about.bio}
        </p>
      </div>

      {/* Experience / Education Timeline Anchor */}
      <div id="experience" className="mt-12 space-y-6">
        {t.about.timeline.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl border transition-all border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl hover:border-emerald-500/40 shadow-sm"
          >
            {/* Header: Title + Period */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-white/5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {item.institution}
                </div>
              </div>
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                {item.year}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950/70 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
