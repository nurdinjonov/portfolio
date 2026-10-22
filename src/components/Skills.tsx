import React from 'react';
import { useApp } from '../context/AppContext';
import { soundFX } from '../utils/audio';

export const Skills: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      
      {/* CLI Section Header: # skills */}
      <div className="mb-10">
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="text-emerald-500">#</span>
          <span>skills</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Categorized Skills (Terminal / Dotted Style inspired by gomuhandis.uz) */}
      <div className="space-y-8">
        {t.skills.categories.map((cat) => (
          <div key={cat.key} className="space-y-2.5 font-mono">
            {/* Category Label */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="text-emerald-500">//</span>
              <span>{cat.title}</span>
            </div>

            {/* Skill rows with dotted connecting line */}
            <div className="p-4 sm:p-5 rounded-2xl border transition-all border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl space-y-2.5 shadow-sm">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => soundFX.playClick(1050, 0.015)}
                  className="flex items-center justify-between text-xs sm:text-sm group hover:text-emerald-500 transition-colors"
                >
                  <span className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-emerald-500 transition-colors shrink-0">
                    {item.name}
                  </span>

                  {/* Dotted connector */}
                  <span className="flex-1 mx-3 border-b border-dotted border-slate-300 dark:border-slate-700/60 opacity-60" />

                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
