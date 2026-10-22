import React from 'react';
import { useApp } from '../context/AppContext';
import { soundFX } from '../utils/audio';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-5xl mx-auto relative z-10 font-mono">
      
      {/* CLI Section Header: # skills & proficiency */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-400 mb-3">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>Texnik Stek & Darajalar</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white flex items-center gap-2.5">
          <span className="text-emerald-400">#</span>
          <span>{t.skills.title}</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Categorized Skills Grid with Status / Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.skills.categories.map((cat) => (
          <div
            key={cat.key}
            className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-xl hover:border-indigo-500/30 transition-all space-y-5"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <span>//</span>
                <span>{cat.title}</span>
              </span>
              <span className="text-xs text-slate-400">
                {cat.items.length} ta texnologiya
              </span>
            </div>

            {/* Skill rows with Animated Glowing Status Bars */}
            <div className="space-y-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => soundFX.playClick(1050, 0.02)}
                  className="space-y-1.5 group"
                >
                  {/* Skill Name & Level percentage */}
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">
                      {item.level}
                    </span>
                  </div>

                  {/* Visual Status / Progress Bar (Daraja Chizig'i) */}
                  <div className="w-full h-2 rounded-full bg-slate-950/80 border border-white/5 overflow-hidden p-[1px]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-teal-400 to-emerald-400 transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
