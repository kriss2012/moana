'use client';

import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, Compass, Heart, Flame } from 'lucide-react';

interface PrologueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAPTERS = [
  {
    number: '01',
    subtitle: 'The Mother Island',
    title: 'The Creation of Te Fiti',
    icon: Sparkles,
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300',
    content:
      'In the beginning, there was only ocean until the mother island emerged: Te Fiti. Her heart held the greatest power ever known—it could create life itself. And Te Fiti shared it with the world, bringing forth lush islands, turquoise atolls, and thriving sea life across the endless blue.',
    quote: '"Her heart held the power to create life itself."',
  },
  {
    number: '02',
    subtitle: 'The Demigod & The Theft',
    title: 'Maui Takes The Heart',
    icon: Compass,
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-300',
    content:
      'Yet some sought Te Fiti’s heart for themselves. Maui, demigod of the wind and sea, shapeshifter and hero to all, used his magical fish hook to cross the treacherous waves and pry the pounamu heart from its sanctuary—believing it would grant humanity everlasting power.',
    quote: '"A demigod sought the heart to give mortals the power of creation."',
  },
  {
    number: '03',
    subtitle: 'The Demon of Earth & Fire',
    title: 'Awakening of Te Kā',
    icon: Flame,
    color: 'from-rose-500/20 to-red-500/10 border-rose-500/40 text-rose-300',
    content:
      'Without her heart, Te Fiti crumbled into darkness, giving birth to a monstrous demon of molten rock and ash: Te Kā. Maui was struck from the sky; his magical fish hook and the heart of Te Fiti were lost to the depths of the sea. A creeping rot began to consume island after island.',
    quote: '"Darkness poisoned the seas, and the monsters of the deep awoke."',
  },
  {
    number: '04',
    subtitle: 'The Destiny of Motunui',
    title: 'The Ocean Calls Moana',
    icon: Heart,
    color: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/40 text-cyan-300',
    content:
      'For a thousand years, the voyagers of Motunui hid their canoes and forgot the open sea. But the ocean did not forget. It chose Moana, daughter of Chief Tui, bestowing upon her the returned Heart. Her mission: sail past the reef, locate Maui, and restore the heart to heal the living earth.',
    quote: '"The ocean chose you for a reason. Restore what was stolen."',
  },
];

export default function PrologueModal({ isOpen, onClose }: PrologueModalProps) {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveChapter((prev) => (prev + 1) % CHAPTERS.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveChapter((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = CHAPTERS[activeChapter];
  const IconComponent = current.icon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prologue-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#020e1a]/90 backdrop-blur-2xl animate-in fade-in duration-300"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4aa]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#10b981]/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-4xl bg-slate-950/90 border border-teal-500/30 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,212,170,0.2)] flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-teal-500/20 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00d4aa] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold">
              The Ancient Legend &middot; Chapter {current.number} of 04
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Prologue"
            className="p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-teal-400 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter Tabs */}
        <div className="grid grid-cols-4 border-b border-teal-500/15 bg-slate-950/50">
          {CHAPTERS.map((chap, idx) => (
            <button
              key={chap.number}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 sm:p-4 text-left transition-all border-b-2 flex flex-col gap-1 ${
                activeChapter === idx
                  ? 'border-[#00d4aa] bg-teal-950/40 text-teal-200'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-teal-500/80">
                PART {chap.number}
              </span>
              <span className="font-display text-xs sm:text-sm font-semibold truncate">
                {chap.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300">
              <IconComponent className="w-4 h-4 text-[#00d4aa]" />
              <span className="font-mono text-xs uppercase tracking-widest">
                {current.subtitle}
              </span>
            </div>

            <h2
              id="prologue-title"
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide"
            >
              {current.title}
            </h2>

            <blockquote className="border-l-2 border-[#00d4aa] pl-4 italic text-teal-200/90 font-serif-story text-base sm:text-lg">
              {current.quote}
            </blockquote>

            <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {current.content}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-teal-500/20 flex items-center justify-between">
            <button
              onClick={() => setActiveChapter((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-[#00d4aa] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>

            <div className="flex items-center gap-1.5">
              {CHAPTERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveChapter(i)}
                  aria-label={`Go to chapter ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeChapter === i ? 'w-6 bg-[#00d4aa]' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                if (activeChapter === CHAPTERS.length - 1) {
                  onClose();
                } else {
                  setActiveChapter((prev) => prev + 1);
                }
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#00d4aa] to-teal-500 text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,212,170,0.3)]"
            >
              <span>{activeChapter === CHAPTERS.length - 1 ? 'Begin Journey' : 'Next Chapter'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
