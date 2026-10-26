import React, { useState } from 'react';
import { CheckCircle2, Flame, Clock, Calendar, Sparkles } from 'lucide-react';

interface DeviceSimulatorProps {
  activeScreenId?: string;
  onScreenChange?: (screenId: string) => void;
}

export const DeviceSimulator3D: React.FC<DeviceSimulatorProps> = ({
  activeScreenId = 'tasks',
  onScreenChange,
}) => {
  const [currentTab, setCurrentTab] = useState<'tasks' | 'calendar' | 'pomodoro' | 'stats'>(
    (activeScreenId as 'tasks' | 'calendar' | 'pomodoro' | 'stats') || 'tasks'
  );

  React.useEffect(() => {
    if (activeScreenId && ['tasks', 'calendar', 'pomodoro', 'stats'].includes(activeScreenId)) {
      setCurrentTab(activeScreenId as 'tasks' | 'calendar' | 'pomodoro' | 'stats');
    }
  }, [activeScreenId]);

  const [rotation, setRotation] = useState({ x: 8, y: -12 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleTabChange = (tab: 'tasks' | 'calendar' | 'pomodoro' | 'stats') => {
    setCurrentTab(tab);
    if (onScreenChange) onScreenChange(tab);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - dragStart.x) * 0.4;
    const deltaY = (e.clientY - dragStart.y) * 0.4;

    setRotation((prev) => ({
      x: Math.max(-25, Math.min(25, prev.x - deltaY)),
      y: Math.max(-35, Math.min(35, prev.y + deltaX)),
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetAngle = () => {
    setRotation({ x: 8, y: -12 });
  };

  return (
    <div className="flex flex-col items-center">
      {/* 3D Smartphone Container */}
      <div
        className="relative perspective-1000 py-6 select-none cursor-grab active:cursor-grabbing transition-transform duration-100 ease-out"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative w-[280px] sm:w-[320px] h-[580px] rounded-[44px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-4 border-slate-700/80 shadow-2xl transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            boxShadow: '0 25px 60px -15px rgba(99, 102, 241, 0.35), 0 0 30px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Subtle phone side volume/power buttons simulation */}
          <div className="absolute -left-[7px] top-28 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
          <div className="absolute -left-[7px] top-44 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
          <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-sm" />

          {/* Inner Screen Bezel */}
          <div className="relative w-full h-full bg-[#0F172A] rounded-[36px] overflow-hidden flex flex-col border border-slate-800">
            {/* Dynamic Island / Notch */}
            <div className="w-full pt-3 pb-1 flex justify-center items-center bg-[#0F172A] z-20">
              <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-950/80 border border-indigo-500/40" />
              </div>
            </div>

            {/* Simulated Live Notification Toast */}
            <div className="mx-3 mt-1 p-2 rounded-xl bg-slate-800/90 border border-indigo-500/30 text-[10px] text-slate-200 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-emerald-400">🔔</span>
                <span className="font-semibold text-white">DailyPlanner</span>
                <span className="text-slate-400 truncate">• 16:30 C# OOP darsi</span>
              </div>
              <span className="text-[9px] text-indigo-400 font-mono">hozir</span>
            </div>

            {/* Screen Content by Tab */}
            <div className="flex-1 p-3 overflow-y-auto font-sans text-xs flex flex-col justify-between">
              {currentTab === 'tasks' && (
                <div className="space-y-2.5 animate-fadeIn">
                  <div className="flex justify-between items-center pt-1">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bugun, Payshanba</div>
                      <div className="text-sm font-bold text-white">Mening Rejalarim</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-[10px] font-bold text-indigo-300">
                      XN
                    </div>
                  </div>

                  {/* Quick Add with NLP demo */}
                  <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-400" /> Natural Input AI
                    </div>
                    <div className="bg-slate-900/90 rounded-lg p-1.5 text-[10px] text-indigo-300 font-mono border border-indigo-500/20 truncate">
                      Ertaga 16:30 da C# OOP darsi #PDP !yuqori
                    </div>
                  </div>

                  {/* Task Items */}
                  <div className="space-y-1.5 pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 text-[10px]">
                          ✓
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-300 line-through">Clean Architecture Repozitoriy</div>
                          <div className="text-[9px] text-slate-500">09:00 • #Dasturlash</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">Tugadi</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-indigo-500/40 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-700 border border-indigo-500 flex items-center justify-center text-indigo-400 text-[10px]">
                          ○
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-white">C# .NET MAUI Release APK</div>
                          <div className="text-[9px] text-indigo-400">14:00 • #PDP • !Yuqori</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">Jarayonda</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 text-[10px]">
                          ○
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-200">Algoritmik Masalalar Yechish</div>
                          <div className="text-[9px] text-slate-400">19:00 • #Amaliyot</div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">Kutilmoqda</span>
                    </div>
                  </div>
                </div>
              )}

              {currentTab === 'calendar' && (
                <div className="space-y-2.5 animate-fadeIn">
                  <div className="flex justify-between items-center pt-1">
                    <div className="text-sm font-bold text-white">Oylik Taqvim</div>
                    <div className="text-[10px] text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded-md border border-indigo-500/30">
                      Oktabr 2026
                    </div>
                  </div>

                  {/* 42-day calendar mini grid */}
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-slate-400 font-bold pb-1 mb-1 border-b border-slate-700/50">
                      <span>Du</span><span>Se</span><span>Ch</span><span>Pa</span><span>Ju</span><span>Sh</span><span>Ya</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[9px]">
                      {Array.from({ length: 35 }).map((_, i) => {
                        const day = i - 2; // Offset
                        const isCurrentMonth = day > 0 && day <= 31;
                        const isToday = day === 22;
                        const hasTasks = [5, 12, 16, 21, 22, 26, 29].includes(day);

                        return (
                          <div
                            key={i}
                            className={`h-6 rounded flex flex-col items-center justify-center ${
                              isToday
                                ? 'bg-indigo-600 text-white font-bold ring-1 ring-white/50'
                                : isCurrentMonth
                                ? 'text-slate-300 hover:bg-slate-700'
                                : 'text-slate-600'
                            }`}
                          >
                            <span>{isCurrentMonth ? day : day <= 0 ? 30 + day : day - 31}</span>
                            {hasTasks && (
                              <div className="flex gap-0.5 mt-0.5">
                                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                                {day === 22 && <span className="w-1 h-1 rounded-full bg-amber-400" />}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected date preview */}
                  <div className="p-2 rounded-xl bg-slate-800/90 border border-indigo-500/30">
                    <div className="text-[10px] font-bold text-indigo-300 mb-1">22-Oktabr vazifalari (3 ta):</div>
                    <div className="text-[9px] text-slate-300">• 10:00 DailyPlanner v1.2.2 Release</div>
                    <div className="text-[9px] text-slate-300">• 16:30 PDP C# OOP Seminar</div>
                  </div>
                </div>
              )}

              {currentTab === 'pomodoro' && (
                <div className="space-y-4 animate-fadeIn text-center pt-2">
                  <div className="text-xs font-bold text-slate-300">Fokus Taymeri (Pomodoro)</div>

                  {/* Big Circular Timer */}
                  <div className="relative w-36 h-36 mx-auto rounded-full border-4 border-indigo-500/30 flex flex-col items-center justify-center shadow-lg bg-slate-800/50">
                    <div className="text-3xl font-extrabold text-white tracking-wider font-mono">24:45</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Chuqur Fokus</div>
                    <div className="absolute inset-0 rounded-full border-4 border-t-emerald-500 border-r-indigo-500 border-b-transparent border-l-transparent animate-spin-slow" />
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 bg-emerald-600 text-white font-bold text-[10px] rounded-lg">
                      ▶ Boshlash
                    </button>
                    <button className="px-3 py-1 bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg">
                      ⏸ To'xtatish
                    </button>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800/70 border border-slate-700 text-[10px] text-slate-400">
                    Bugun jami: <span className="text-amber-400 font-bold">125 daqiqa</span> fokus vaqti
                  </div>
                </div>
              )}

              {currentTab === 'stats' && (
                <div className="space-y-2.5 animate-fadeIn">
                  <div className="flex justify-between items-center pt-1">
                    <div className="text-sm font-bold text-white">Intizom & Odatlar</div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-500/30">
                      <Flame className="w-3 h-3 text-amber-400" /> 7 kun
                    </div>
                  </div>

                  {/* GitHub Heatmap Grid Preview */}
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-[10px] font-bold text-slate-300 mb-1.5 flex justify-between">
                      <span>35 Kunlik Faollik (Heatmap)</span>
                      <span className="text-emerald-400">Yuqori</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[
                        3, 4, 2, 4, 3, 4, 4,
                        2, 3, 4, 4, 3, 2, 4,
                        4, 3, 4, 3, 4, 4, 4,
                        1, 2, 4, 3, 4, 3, 4,
                        4, 4, 3, 4, 4, 4, 4
                      ].map((level, i) => {
                        const bgColors = [
                          'bg-slate-700/60',
                          'bg-emerald-950',
                          'bg-emerald-800',
                          'bg-emerald-600',
                          'bg-emerald-400',
                        ];
                        return (
                          <div
                            key={i}
                            className={`h-3 rounded-sm ${bgColors[level]} transition-colors`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Habit checklist */}
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 flex justify-between items-center text-[10px]">
                      <span className="text-slate-200">📚 C# & Algoritmlar (2 soat)</span>
                      <span className="text-emerald-400 font-bold">✓ 14 kun</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700 flex justify-between items-center text-[10px]">
                      <span className="text-slate-200">💧 2.5 Litr Suv Ichish</span>
                      <span className="text-emerald-400 font-bold">✓ 21 kun</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Tab Bar of the Phone */}
              <div className="mt-2 pt-2 border-t border-slate-800 grid grid-cols-4 gap-1 text-center text-[9px] text-slate-400">
                <button
                  onClick={() => handleTabChange('tasks')}
                  className={`py-1 rounded flex flex-col items-center ${
                    currentTab === 'tasks' ? 'text-indigo-400 font-bold' : 'hover:text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 mb-0.5" />
                  <span>Rejalar</span>
                </button>
                <button
                  onClick={() => handleTabChange('calendar')}
                  className={`py-1 rounded flex flex-col items-center ${
                    currentTab === 'calendar' ? 'text-indigo-400 font-bold' : 'hover:text-slate-200'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 mb-0.5" />
                  <span>Taqvim</span>
                </button>
                <button
                  onClick={() => handleTabChange('pomodoro')}
                  className={`py-1 rounded flex flex-col items-center ${
                    currentTab === 'pomodoro' ? 'text-indigo-400 font-bold' : 'hover:text-slate-200'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 mb-0.5" />
                  <span>Fokus</span>
                </button>
                <button
                  onClick={() => handleTabChange('stats')}
                  className={`py-1 rounded flex flex-col items-center ${
                    currentTab === 'stats' ? 'text-indigo-400 font-bold' : 'hover:text-slate-200'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 mb-0.5" />
                  <span>Odatlar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Helper controls underneath */}
      <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 font-mono">
        <button
          onClick={resetAngle}
          className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] transition-colors"
        >
          🔄 Burchakni Tiklash
        </button>
        <span className="text-[11px] text-slate-500">
          * Sichqoncha orqali 3D aylantiring
        </span>
      </div>
    </div>
  );
};
