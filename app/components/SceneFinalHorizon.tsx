'use client';

import { ArrowUp, Compass, Waves, Sparkles, Navigation } from 'lucide-react';

interface FinalHorizonProps {
  onOpenPrologue?: () => void;
}

export default function SceneFinalHorizon({ onOpenPrologue }: FinalHorizonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#020e1a] via-[#041c30] to-[#01080e] overflow-hidden">
      {/* Sunset Golden Oceanic Horizon Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />

      {/* Polynesian Tatau Pattern Border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00d4aa] to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10">
        {/* Cinematic Closing Message */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-[0.25em]">
            <Navigation className="w-3.5 h-3.5 text-[#00d4aa]" />
            <span>The Horizon Awaits</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-tight">
            We Were Voyagers. <br />
            <span className="text-gold-gradient">We Are Voyagers Still.</span>
          </h2>

          <p className="font-body text-slate-300 text-base sm:xl font-light leading-relaxed max-w-2xl mx-auto">
            The voyaging spirit does not end at the shore. Across the Pacific and around the globe, the tradition
            of reading the stars, honoring the living ocean, and journeying beyond the horizon lives on.
          </p>

          {/* Call to Actions */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-bold tracking-[0.2em] text-xs sm:text-sm uppercase bg-gradient-to-r from-[#00d4aa] via-teal-400 to-[#10b981] text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] flex items-center justify-center gap-2.5"
            >
              <ArrowUp className="w-4 h-4 text-slate-950" />
              <span>Restart The Journey</span>
            </button>

            {onOpenPrologue && (
              <button
                onClick={onOpenPrologue}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-display font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase bg-slate-950/70 hover:bg-slate-900 border border-teal-500/30 hover:border-teal-400 text-teal-100 backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <Compass className="w-4 h-4 text-[#00d4aa]" />
                <span>Read Ancient Lore</span>
              </button>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-teal-500/15" />

        {/* Footer Meta & Cultural Notes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Col 1: Brand & Lore */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-950 border border-[#00d4aa]/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,170,0.3)]">
                <Waves className="w-4 h-4 text-[#00d4aa]" />
              </div>
              <span className="font-display text-xl tracking-[0.25em] font-extrabold text-white">
                MOANA
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              An interactive cinematic tribute to Polynesian voyaging culture, oceanic wayfinding, and the timeless
              tales of Te Moana and Te Fiti. Crafted with high-performance WebGL canvas, smooth momentum physics,
              and atmospheric audio synthesis.
            </p>

            <div className="pt-2 text-[11px] font-mono text-teal-400/80 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#00d4aa]" />
              <span>Dedicated to the seafaring voyagers of Oceania</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block font-semibold">
              The Journey Map
            </span>
            <ul className="space-y-2 text-xs sm:text-sm font-display text-slate-300">
              <li>
                <a href="#hero" className="hover:text-[#00d4aa] transition-colors">
                  01. The Horizon & Turntable
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#00d4aa] transition-colors">
                  02. The Ocean Awakens
                </a>
              </li>
              <li>
                <a href="#islands" className="hover:text-[#00d4aa] transition-colors">
                  03. The Island of Motunui
                </a>
              </li>
              <li>
                <a href="#wayfinding" className="hover:text-[#00d4aa] transition-colors">
                  04. Ancient Wayfinding
                </a>
              </li>
              <li>
                <a href="#voyage" className="hover:text-[#00d4aa] transition-colors">
                  05. The Great Voyage
                </a>
              </li>
              <li>
                <a href="#te-fiti" className="hover:text-[#00d4aa] transition-colors">
                  06. Heart of Te Fiti
                </a>
              </li>
              <li>
                <a href="#characters" className="hover:text-[#00d4aa] transition-colors">
                  07. Character Codex
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cultural & Legal Disclaimer */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block font-semibold">
              Heritage & Attribution
            </span>
            <p className="font-body text-xs text-slate-400 leading-relaxed">
              This interactive experience is an independent creative and educational portfolio tribute inspired by
              Polynesian mythology and Disney&rsquo;s <em>Moana</em>.
            </p>
            <p className="font-body text-xs text-slate-500 leading-relaxed">
              All film titles, characters, and associated trademarks belong to Disney Enterprises, Inc. This project is
              not affiliated with, authorized, or endorsed by The Walt Disney Company.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="mt-16 pt-8 border-t border-teal-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>&copy; {new Date().getFullYear()} MOANA Interactive Odyssey. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-teal-400/70">
            <span>Sailing by the Stars</span> &middot; <span>Te Moana Nui a Kiwa</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
