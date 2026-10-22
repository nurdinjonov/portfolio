import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText('xnurdinjonov@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-72 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Hamkorlik & Karyera</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Keling, Bog'lanamiz!
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Yangi loyihalar, stajirovka, C# / .NET bo'yicha takliflar yoki professional hamkorlik uchun doim ochiqman.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        
        {/* Telegram Card */}
        <a
          href="https://t.me/xnurd"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(800, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-indigo-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-110 transition-transform">
              <Send className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-mono">Telegram</div>
            <div className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">@xnurd</div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Tez javob beraman</span>
          </div>
        </a>

        {/* Email Card with Copy button */}
        <div
          onClick={handleCopyEmail}
          className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-indigo-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all group flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-mono">Elektron Pochta</div>
            <div className="text-sm font-bold text-white truncate group-hover:text-indigo-300 transition-colors">
              xnurdinjonov@gmail.com
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-indigo-400 font-mono mt-4">
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Nusxa olish uchun bosing</span>
              </>
            )}
          </div>
        </div>

        {/* GitHub Card */}
        <a
          href="https://github.com/xnurd"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(800, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-indigo-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="text-xs text-slate-400 font-mono">GitHub Repozitoriy</div>
            <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">github.com/xnurd</div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-4">
            <span>Ochiq kodlar</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com/in/xnurd"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(800, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-indigo-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
            <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Xojiakbar N.</div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-4">
            <span>Professional profil</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </a>

      </div>

      {/* Main Direct Message Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            Savol yoki hamkorlik taklifingiz bormi?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
            Telegram orqali to'g'ridan-to'g'ri yozishingiz mumkin. Har qanday texnik yoki kasbiy takliflarga ochiqman.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://t.me/xnurd"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-950/60 transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Telegramda Yozish</span>
          </a>
        </div>
      </div>
    </section>
  );
};
