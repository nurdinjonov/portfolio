import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { soundFX } from '../utils/audio';
import confetti from 'canvas-confetti';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-emerald-400 font-bold">
            ⚡ Xojiakbar Nurdinjonov (xnurd) — Interactive Engineering CLI [Version 2.4.0-CLR]
          </div>
          <div>Mavjud buyruqlarni ko'rish uchun <span className="text-indigo-400 font-bold">help</span> deb yozing yoki tugmalardan foydalaning.</div>
        </div>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    soundFX.playClick(600, 0.03);

    if (!cmd) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <div className="text-indigo-400 font-bold">Mavjud buyruqlar ro'yxati:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
              <div><span className="text-emerald-400 font-bold">about</span> - Xojiakbar haqida ma'lumot</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Texnologiyalar va arxitektura steki</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Loyihalar (DailyPlanner v1.2.1)</div>
              <div><span className="text-emerald-400 font-bold">apk</span> - DailyPlanner APK faylini yuklab olish</div>
              <div><span className="text-emerald-400 font-bold">architecture</span> - Clean Architecture qatlamlari</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Aloqa kanallari va ijtimoiy tarmoqlar</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Konsol ekranini tozalash</div>
              <div><span className="text-emerald-400 font-bold">sudo</span> - Root huquqlarini sinab ko'rish</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-white font-bold">Xojiakbar Nurdinjonov (@xnurd)</div>
            <div>• PDP Universiteti, 2-kurs Software Development & Programming (C#) talabasi.</div>
            <div>• Asosiy qiziqish: Clean Architecture, .NET 9 MAUI, yuqori yuklamali tizimlar va Linux serverlari.</div>
            <div>• Falsafa: Ortiqcha yozuvlarsiz toza kod, nol xotira oqishi (Zero-leak) va mustahkam intizom.</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-indigo-400 font-bold">Muhandislik Steki:</div>
            <div>• <strong className="text-white">C# / .NET:</strong> C# 12/13, .NET 9 MAUI, ASP.NET Core Web API, LINQ, Async/Await</div>
            <div>• <strong className="text-white">Arxitektura:</strong> Clean Architecture, MVVM, Repository Pattern, SOLID, DI</div>
            <div>• <strong className="text-white">Ma'lumotlar:</strong> SQLite (bundle_green), PostgreSQL, EF Core, JSON</div>
            <div>• <strong className="text-white">Infratuzilma:</strong> Ubuntu Linux, Oracle Cloud VPS, SWAP optimizatsiyasi, Git Flow, Docker</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-emerald-400 font-bold">1. DailyPlanner & Focus [v1.2.1 Signed Release]</div>
            <div>• Framework: .NET 9.0 MAUI (Android & Desktop)</div>
            <div>• Arxitektura: Clean Architecture + MVVM + SQLite</div>
            <div>• Funksiyalar: 42 katakli oylik taqvim, NLP qidiruv, Pomodoro taymeri, Duolingo streaks, Push bildirishnomalar</div>
            <div>• Yuklab olish uchun: <span className="text-indigo-300 font-bold">apk</span> buyrug'ini tering.</div>
          </div>
        );
        break;

      case 'apk':
        soundFX.playSuccess();
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
        });

        // Trigger download
        const link = document.createElement('a');
        link.href = '/DailyPlanner.apk';
        link.download = 'DailyPlanner-v1.2.1-Signed.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        output = (
          <div className="space-y-1 text-xs text-emerald-300">
            <div>[INFO] Fetching DailyPlanner v1.2.1 Signed APK...</div>
            <div className="font-mono text-indigo-400">[====================] 100% (31.57 MB)</div>
            <div className="text-emerald-400 font-bold">✓ DailyPlanner.apk brauzeringizga muvaffaqiyatli yuklandi!</div>
          </div>
        );
        break;

      case 'architecture':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
            <div className="text-indigo-400 font-bold">DailyPlanner Clean Architecture:</div>
            <div>├── 1. Presentation (Views, ViewModels, Converters)</div>
            <div>│   └── AppShell, MainPage, CalendarPage, PomodoroPage, HabitsPage, ProfilePage</div>
            <div>├── 2. Core Domain (Models, Business Rules)</div>
            <div>│   └── PlanTask, Habit, PomodoroSession, TaskCompletionRecord</div>
            <div>└── 3. Infrastructure (SQLite Data & Platform Services)</div>
            <div>    └── DatabaseContext, PlanRepository, NotificationService (Android 14 Alarms)</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-indigo-400 font-bold">Aloqa Kanallari:</div>
            <div>• Telegram: <a href="https://t.me/xnurd" target="_blank" rel="noreferrer" className="text-emerald-400 underline">@xnurd</a></div>
            <div>• Email: <span className="text-white font-mono">xnurdinjonov@gmail.com</span></div>
            <div>• GitHub: <a href="https://github.com/xnurd" target="_blank" rel="noreferrer" className="text-indigo-300 underline">github.com/xnurd</a></div>
            <div>• Manzil: Toshkent, O'zbekiston</div>
          </div>
        );
        break;

      case 'sudo':
        output = (
          <div className="text-xs text-amber-400">
            🚫 Permission denied: You cannot sudo someone who builds with C# on bare-metal. Try <span className="text-white font-bold">contact</span> instead! 😉
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Buyruq topilmadi: '{cmd}'. Barcha buyruqlar uchun <span className="text-white font-bold underline">help</span> deb yozing.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section id="terminal" className="py-24 px-4 max-w-4xl mx-auto relative">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-3">
          <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Brauzer Ichidagi Muhandislik Konsoli</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Interaktiv CLI Terminal
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Klaviaturada buyruq terib rezyume, loyihalar va aloqa ma'lumotlarini oling.
        </p>
      </div>

      {/* Terminal Window Frame */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-xl cursor-text"
      >
        {/* Terminal Title Bar */}
        <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[11px] text-slate-400 truncate max-w-xs sm:max-w-md">
            xnurd@pdp-workstation: ~/portfolio (zsh) — .NET 9.0 CLR
          </div>
          <div className="w-10 text-right text-[10px] text-slate-500">TTY: 01</div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="bg-slate-900/40 px-4 py-2 border-b border-slate-800/60 flex flex-wrap gap-2 text-[10px]">
          <span className="text-slate-500">Tezkor buyruqlar:</span>
          {['help', 'about', 'skills', 'projects', 'apk', 'contact'].map((pill) => (
            <button
              key={pill}
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(pill);
              }}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
            >
              ${pill}
            </button>
          ))}
        </div>

        {/* Output Area */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto leading-relaxed">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400">
                <span className="text-emerald-400">xnurd@pdp:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-indigo-500/20">{item.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold shrink-0">xnurd@pdp:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Buyruq yozing (masalan, help, apk, about)..."
              className="w-full bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-slate-600"
              autoFocus
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
};
