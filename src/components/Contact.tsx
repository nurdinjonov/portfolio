import React, { useState } from 'react';
import { Send, Copy, Check, ExternalLink } from 'lucide-react';
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
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      label: 'telegram',
      value: '@nurdinjonov',
      href: 'https://t.me/nurdinjonov',
      action: 'link',
      color: 'text-sky-600 dark:text-sky-400',
    },
    {
      label: 'github',
      value: 'nurdinjonov',
      href: 'https://github.com/nurdinjonov',
      action: 'link',
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      label: 'linkedin',
      value: 'nurdinjonov',
      href: 'https://www.linkedin.com/in/nurdinjonov',
      action: 'link',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'instagram',
      value: '@nurdinjonov_',
      href: 'https://instagram.com/nurdinjonov_',
      action: 'link',
      color: 'text-pink-600 dark:text-pink-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto relative z-10 font-mono">
      
      {/* CLI Section Header: # contact */}
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="text-emerald-500">#</span>
          <span>contact</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Developer Links List (inspired by gomuhandis.uz) */}
      <div className="p-6 sm:p-8 rounded-2xl border transition-all border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none space-y-4">
        {contactLinks.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-slate-100 dark:border-white/5 last:border-0 group"
          >
            {/* Label */}
            <span className="w-24 sm:w-32 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
              {item.label}
            </span>

            {/* Dotted connector */}
            <span className="flex-1 mx-3 border-b border-dotted border-slate-300 dark:border-slate-700/60 opacity-60 hidden sm:block" />

            {/* Value & Action */}
            {item.action === 'copy' ? (
              <button
                onClick={item.onClick}
                className={`flex items-center gap-2 font-medium ${item.color} hover:underline transition-colors cursor-pointer`}
              >
                <span>{item.value}</span>
                {item.isCopied ? (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1 font-sans">
                    <Check className="w-3 h-3" />
                    <span>{t.contact.copied}</span>
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick(800, 0.02)}
                className={`flex items-center gap-1.5 font-medium ${item.color} hover:underline transition-all`}
              >
                <span>{item.value}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Quick Action Prompt Banner */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-mono">
          <span className="text-emerald-500 font-bold">$ </span>
          <span>{t.contact.quickMsg}</span>
        </div>
        <a
          href="https://t.me/nurdinjonov"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{t.contact.sendTelegram}</span>
        </a>
      </div>

    </section>
  );
};
