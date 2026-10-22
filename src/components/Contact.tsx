import React, { useState } from 'react';
import { Send, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';
import { useApp } from '../context/AppContext';

export const Contact: React.FC = () => {
  const { t } = useApp();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText('xnurdinjonov@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactLinks = [
    {
      label: 'email',
      value: 'xnurdinjonov@gmail.com',
      action: 'copy',
      onClick: handleCopyEmail,
      isCopied: copiedEmail,
      color: 'text-emerald-400',
    },
    {
      label: 'telegram',
      value: '@nurdinjonov',
      href: 'https://t.me/nurdinjonov',
      action: 'link',
      color: 'text-sky-400',
    },
    {
      label: 'github',
      value: 'nurdinjonov',
      href: 'https://github.com/nurdinjonov',
      action: 'link',
      color: 'text-indigo-400',
    },
    {
      label: 'linkedin',
      value: 'nurdinjonov',
      href: 'https://www.linkedin.com/in/nurdinjonov',
      action: 'link',
      color: 'text-blue-400',
    },
    {
      label: 'instagram',
      value: '@nurdinjonov_',
      href: 'https://instagram.com/nurdinjonov_',
      action: 'link',
      color: 'text-pink-400',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-5xl mx-auto relative z-10 font-mono">
      
      {/* CLI Section Header: # contact */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>To'g'ridan-to'g'ri Muloqot</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white flex items-center gap-2.5">
          <span className="text-emerald-400">#</span>
          <span>{t.contact.title}</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Developer Links List */}
      <div className="p-7 sm:p-9 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-2xl space-y-4">
        {contactLinks.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-sm sm:text-base py-3 border-b border-white/5 last:border-0 group"
          >
            {/* Label */}
            <span className="w-28 sm:w-36 text-slate-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
              {item.label}
            </span>

            {/* Dotted connector */}
            <span className="flex-1 mx-4 border-b border-dotted border-slate-700/80 opacity-70 hidden sm:block" />

            {/* Value & Action */}
            {item.action === 'copy' ? (
              <button
                onClick={item.onClick}
                className="flex items-center gap-2.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <span>{item.value}</span>
                {item.isCopied ? (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 font-sans">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.contact.copied}</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick(800, 0.02)}
                className={`flex items-center gap-2 font-semibold ${item.color} hover:underline transition-all`}
              >
                <span>{item.value}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Quick Action Prompt Banner */}
      <div className="mt-10 p-6 sm:p-7 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-sm sm:text-base text-slate-200 font-mono">
          <span className="text-emerald-400 font-bold">$ </span>
          <span>{t.contact.quickMsg}</span>
        </div>
        <a
          href="https://t.me/nurdinjonov"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0 shadow-lg shadow-emerald-950/50"
        >
          <Send className="w-4 h-4" />
          <span>{t.contact.sendTelegram}</span>
        </a>
      </div>

    </section>
  );
};
