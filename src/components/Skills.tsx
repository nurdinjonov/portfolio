import React from 'react';
import { Terminal, Layers, Database, Server, Code2, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { soundFX } from '../utils/audio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>Arxitekturaviy Kompetentsiyalar</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Texnologik Stek & Standartlar
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Shunchaki sintaksis emas, balki xotirani tejash, barqarorlik va sanoat talablari asosidagi modulli arxitektura.
        </p>
      </div>

      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            onMouseEnter={() => soundFX.playClick(1000, 0.02)}
            className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 relative group overflow-hidden bg-slate-900/40 hover:bg-slate-900/70"
          >
            {/* Header of the Quadrant */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
                {getCategoryIcon(category.icon)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400">{category.description}</p>
              </div>
            </div>

            {/* Skill Items */}
            <div className="space-y-3.5 mt-5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-xl border transition-all ${
                    skill.highlight
                      ? 'bg-slate-800/70 border-indigo-500/30 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-2">
                      {skill.name}
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800">
                      {skill.level}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400 font-mono bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
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
