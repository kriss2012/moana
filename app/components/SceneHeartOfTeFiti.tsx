'use client';

import { useState } from 'react';
import { Sparkles, Flame, Heart, Sun, Trees, ShieldAlert } from 'lucide-react';

export default function SceneHeartOfTeFiti() {
  const [isRestored, setIsRestored] = useState(true);

  return (
    <section
      id="te-fiti"
      className={`relative min-h-screen py-24 sm:py-32 transition-colors duration-1000 overflow-hidden ${
        isRestored
          ? 'bg-gradient-to-b from-[#020e1a] via-[#022822] to-[#020e1a]'
          : 'bg-gradient-to-b from-[#020e1a] via-[#2c0808] to-[#020e1a]'
      }`}
    >
      {/* Dynamic Ambient Glow depending on state */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000 ${
          isRestored ? 'bg-emerald-500/20' : 'bg-rose-600/25'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono uppercase tracking-[0.25em] transition-colors duration-500 ${
              isRestored
                ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/80 border-rose-500/40 text-rose-300'
            }`}
          >
            {isRestored ? (
              <>
                <Heart className="w-3.5 h-3.5 text-emerald-400" />
                <span>Scene 05 &middot; Life Restored</span>
              </>
            ) : (
              <>
                <Flame className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                <span>Scene 05 &middot; The Wrath of Te Kā</span>
              </>
            )}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            {isRestored ? (
              <>
                The Heart of <span className="text-tefiti-gradient">Te Fiti</span>
              </>
            ) : (
              <>
                The Fury of <span className="text-lava-gradient">Te K&amacr;</span>
              </>
            )}
          </h2>

          <p
            className={`font-serif-story italic text-lg sm:text-xl transition-colors duration-500 ${
              isRestored ? 'text-emerald-200' : 'text-rose-200'
            }`}
          >
            &ldquo;They have stolen the heart from inside you. But this does not define you. You know who you are.&rdquo;
          </p>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Te Fiti and Te K&amacr; were never two separate beings. Without the heart that gave her peace and the power
            of creation, the gentle mother island mutated into a weeping titan of burning ash, magma, and sorrow.
          </p>
        </div>

        {/* Dual Interactive Transformation Switch */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-950/80 border border-teal-500/30 backdrop-blur-md">
            <button
              onClick={() => setIsRestored(true)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold tracking-wider uppercase transition-all duration-500 ${
                isRestored
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Restored Te Fiti</span>
            </button>

            <button
              onClick={() => setIsRestored(false)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold tracking-wider uppercase transition-all duration-500 ${
                !isRestored
                  ? 'bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Molten Te K&amacr;</span>
            </button>
          </div>
        </div>

        {/* Interactive Showcase Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className={`relative p-8 sm:p-12 rounded-3xl border backdrop-blur-2xl transition-all duration-700 shadow-2xl overflow-hidden ${
              isRestored
                ? 'bg-slate-950/80 border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.2)]'
                : 'bg-slate-950/90 border-rose-500/40 shadow-[0_0_80px_rgba(244,63,94,0.25)]'
            }`}
          >
            {/* Center Sacred Spiral Interactive Orb */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div
                onClick={() => setIsRestored(!isRestored)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsRestored(!isRestored);
                }}
                className={`group relative w-28 h-28 sm:w-36 sm:h-36 rounded-full cursor-pointer flex items-center justify-center transition-all duration-700 ${
                  isRestored
                    ? 'bg-gradient-to-tr from-emerald-600 via-teal-400 to-[#00d4aa] shadow-[0_0_60px_rgba(16,185,129,0.7)] animate-pulse-glow'
                    : 'bg-gradient-to-tr from-rose-800 via-red-600 to-amber-500 shadow-[0_0_60px_rgba(239,68,68,0.7)]'
                }`}
              >
                {/* Ancient Sacred Spiral SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className={`w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-700 ${
                    isRestored ? 'text-slate-950 group-hover:rotate-90' : 'text-white group-hover:rotate-90'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                >
                  <path d="M 50,50 m 0,-5 a 5,5 0 0,1 5,5 a 10,10 0 0,1 -10,10 a 16,16 0 0,1 -16,-16 a 24,24 0 0,1 24,-24 a 34,34 0 0,1 34,34 a 45,45 0 0,1 -45,45" />
                </svg>

                <div className="absolute -bottom-3 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono tracking-widest uppercase text-slate-300 group-hover:border-teal-400">
                  Click To Toggle
                </div>
              </div>

              <div className="space-y-3 max-w-2xl">
                <span
                  className={`font-mono text-xs uppercase tracking-[0.3em] font-semibold ${
                    isRestored ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {isRestored ? 'State: Island Reborn' : 'State: Volcanic Tempest'}
                </span>

                <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                  {isRestored
                    ? 'The Green Spiral Reclaimed'
                    : 'The Embers of Betrayal'}
                </h3>

                <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
                  {isRestored
                    ? 'With the green stone restored to her chest, Te Fiti’s molten carapace crumbles into fertile emerald moss, blooming floral vines, and crystal clear waterfalls that spread life throughout the ocean.'
                    : 'Stripped of her heart by Maui, Te Fiti burned in agonizing grief. Molten magma flows scorched the ocean waters, casting volcanic ash over the Pacific trade routes for ten centuries.'}
                </p>
              </div>

              {/* Attributes comparison row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-teal-500/15 text-left">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    Primary Element
                  </span>
                  <span
                    className={`font-display text-sm font-semibold flex items-center gap-1.5 ${
                      isRestored ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isRestored ? (
                      <>
                        <Trees className="w-4 h-4" /> Flora & Oceanic Life
                      </>
                    ) : (
                      <>
                        <Flame className="w-4 h-4" /> Magma & Obsidian
                      </>
                    )}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    Cosmic State
                  </span>
                  <span
                    className={`font-display text-sm font-semibold flex items-center gap-1.5 ${
                      isRestored ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isRestored ? (
                      <>
                        <Sun className="w-4 h-4" /> Serenity & Creation
                      </>
                    ) : (
                      <>
                        <ShieldAlert className="w-4 h-4" /> Destructive Torment
                      </>
                    )}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    The Healer
                  </span>
                  <span className="font-display text-sm font-semibold text-teal-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Moana of Motunui
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
