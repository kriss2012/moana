'use client';

import { useState } from 'react';
import { Mountain, Trees, ShieldAlert, Sparkles, MapPin, Eye, Compass } from 'lucide-react';

const ISLAND_HOTSPOTS = [
  {
    id: 'village',
    title: 'The Village of Motunui',
    desc: 'A thriving community where everyone has their role—weaving baskets, harvesting coconuts, and dancing to ancient rhythms. Yet their peace is threatened by the dying crops and blackened fruit.',
    tag: 'Cultural Heart',
    badge: 'Communal Life',
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300',
  },
  {
    id: 'reef',
    title: 'The Barrier Reef',
    desc: 'The sacred boundary established by Chief Tui. Beyond the reef lies the open ocean, where violent waves and ancient demons await anyone daring enough to challenge the chief’s decree.',
    tag: 'Strict Decree',
    badge: '"No One Goes Beyond"',
    color: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-300',
  },
  {
    id: 'summit',
    title: 'The Sacred Mountain Summit',
    desc: 'The peak where generations of Motunui chiefs have placed flat ceremonial stones atop one another, symbolizing the stability and permanence of the community.',
    tag: 'Chief Heritage',
    badge: 'Stones of the Chiefs',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
  },
  {
    id: 'cave',
    title: 'The Hidden Cavern of Wayfinders',
    desc: 'Concealed behind a waterfall of vines, Gramma Tala reveals Motunui’s deepest secret: massive double-hulled voyaging canoes and the heritage of ancient seafaring voyagers.',
    tag: 'Ancestral Secret',
    badge: 'We Were Voyagers',
    color: 'from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-300',
  },
];

export default function SceneMotunui() {
  const [activeSpot, setActiveSpot] = useState(0);

  return (
    <section
      id="islands"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#020e1a] via-[#032034] to-[#020e1a] overflow-hidden"
    >
      {/* Visual Ambient Tropical Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-[0.25em]">
            <Mountain className="w-3.5 h-3.5 text-emerald-400" />
            <span>Scene 02 &middot; The Homeland</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            The Island of <span className="text-tefiti-gradient">Motunui</span>
          </h2>

          <p className="font-serif-story italic text-emerald-200/90 text-lg sm:text-xl">
            &ldquo;There comes a day when you’re gonna look around and realize happiness is where you are.&rdquo;
          </p>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Ringed by white coral sands, turquoise lagoons, and volcanic mountain spires, Motunui is an idyllic
            Polynesian paradise. But beneath the idyllic surface, the life force of the island is fading as the
            curse of Te Kā creeps closer.
          </p>
        </div>

        {/* Interactive Island Explorer Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hotspot Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-teal-400 mb-2">
              Select An Island Sanctuary:
            </span>
            {ISLAND_HOTSPOTS.map((spot, idx) => {
              const isSelected = activeSpot === idx;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-slate-900/90 border-[#00d4aa] shadow-[0_0_25px_rgba(0,212,170,0.25)] translate-x-2'
                      : 'bg-slate-950/40 border-teal-500/15 hover:bg-slate-900/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-teal-400/90 font-semibold tracking-wider">
                      ZONE 0{idx + 1}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        isSelected
                          ? 'border-[#00d4aa] text-[#00d4aa] bg-teal-950/50'
                          : 'border-slate-700 text-slate-500'
                      }`}
                    >
                      {spot.badge}
                    </span>
                  </div>
                  <h3
                    className={`font-display text-lg font-bold ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {spot.title}
                  </h3>
                  <span className="text-xs text-teal-300/70 font-mono tracking-widest uppercase">
                    {spot.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Spotlight Display Panel */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-teal-500/30 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Background Atmospheric Watermark */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
                <Mountain className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest">
                  <MapPin className="w-3.5 h-3.5 text-[#00d4aa]" />
                  <span>{ISLAND_HOTSPOTS[activeSpot].tag}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {ISLAND_HOTSPOTS[activeSpot].title}
                </h3>

                <p className="font-body text-slate-200 text-base sm:text-lg leading-relaxed">
                  {ISLAND_HOTSPOTS[activeSpot].desc}
                </p>

                {/* Cultural Insights Grid */}
                <div className="pt-6 border-t border-teal-500/20 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-500/15">
                    <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block mb-1">
                      Environmental Status
                    </span>
                    <span className="font-display text-sm font-semibold text-slate-100 flex items-center gap-1.5">
                      <Trees className="w-4 h-4 text-emerald-400" />
                      Tropical Canopy
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-500/15">
                    <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block mb-1">
                      Voyaging Barrier
                    </span>
                    <span className="font-display text-sm font-semibold text-slate-100 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      Outer Reef Swells
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-teal-400/80 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#00d4aa]" />
                    Coordinates: 13.9° S, 171.8° W
                  </span>
                  <span>Polynesian Archipelago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

