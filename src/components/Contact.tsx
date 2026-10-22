import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';

// Custom Sharp SVG Icons for Platforms
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText('xnurdinjonov@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-80 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Hamkorlik & Aloqa</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Men Bilan Bog'laning
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          C# .NET va mobil loyihalar, yangi g'oyalar yoki professional takliflar bo'yicha suhbatga doim tayyorman.
        </p>
      </div>

      {/* 5 Social & Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        
        {/* 1. Telegram Card */}
        <a
          href="https://t.me/nurdinjonov"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(800, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-sky-500/50 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between hover:scale-[1.02]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-110 transition-transform">
              <Send className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-mono">Telegram</div>
            <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors truncate">
              @nurdinjonov
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Tez javob</span>
          </div>
        </a>

        {/* 2. Instagram Card */}
        <a
          href="https://instagram.com/nurdinjonov_"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(850, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-pink-500/50 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between hover:scale-[1.02]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-110 transition-transform">
              <InstagramIcon />
            </div>
            <div className="text-xs text-slate-400 font-mono">Instagram</div>
            <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors truncate">
              @nurdinjonov_
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-4">
            <span>Profilni ko'rish</span>
            <ExternalLink className="w-3 h-3 text-pink-400" />
          </div>
        </a>

        {/* 3. GitHub Card */}
        <a
          href="https://github.com/nurdinjonov"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(800, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-indigo-500/50 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between hover:scale-[1.02]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-3 group-hover:scale-110 transition-transform">
              <GithubIcon />
            </div>
            <div className="text-xs text-slate-400 font-mono">GitHub</div>
            <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
              nurdinjonov
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-4">
            <span>Repozitoriyalar</span>
            <ExternalLink className="w-3 h-3 text-indigo-400" />
          </div>
        </a>

        {/* 4. LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/nurdinjonov"
          target="_blank"
          rel="noreferrer"
          onClick={() => soundFX.playClick(800, 0.03)}
          className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-blue-500/50 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between hover:scale-[1.02]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <LinkedinIcon />
            </div>
            <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
            <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
              in/nurdinjonov
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-4">
            <span>Ulanish</span>
            <ExternalLink className="w-3 h-3 text-blue-400" />
          </div>
        </a>

        {/* 5. Email Card */}
        <div
          onClick={handleCopyEmail}
          className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-emerald-500/50 bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between cursor-pointer hover:scale-[1.02]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-400 font-mono">Email</div>
            <div className="text-xs font-bold text-white truncate group-hover:text-emerald-300 transition-colors">
              xnurdinjonov@gmail.com
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono mt-4">
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold">Nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Nusxa olish</span>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Main Action Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 via-slate-900/80 to-purple-950/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Birgalikda ajoyib loyihalar yarataylik!
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Har qanday savol, amaliyot yoki jamoaga qo'shilish bo'yicha takliflar bo'lsa, Telegram orqali xabar qoldiring.
          </p>
        </div>

        <a
          href="https://t.me/nurdinjonov"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-indigo-950/60 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          <Send className="w-4 h-4" />
          <span>Telegramda Yozish</span>
        </a>
      </div>
    </section>
  );
};
