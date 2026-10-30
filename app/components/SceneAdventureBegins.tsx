'use client';

import { useState } from 'react';
import { Compass, Star, Wind, Waves, Bird, Navigation } from 'lucide-react';

const WAYFINDING_PILLARS = [
  {
    id: 'stars',
    title: 'The Star Compass (Kāpehu Whetū)',
    subtitle: 'Astronomical Navigation',
    icon: Star,
    color: 'from-amber-400 to-yellow-500',
    details:
      'Wayfinders memorize 32 houses of the horizon where stars rise and set. By aligning their canoe with Maui’s Fish Hook (the constellation Scorpius) and the Southern Cross, they maintain precise cardinal heading across pitch-black open ocean.',
    quote: '"If you know who you are, you know where to steer."',
  },
  {
    id: 'swells',
    title: 'Ocean Swells & Wave Energy',
    subtitle: 'Kinesthetic Sensing',
    icon: Waves,
    color: 'from-cyan-400 to-teal-500',
    details:
      'Even when clouds obscure the sky, master navigators lie inside the canoe’s hull to feel deep ocean swells generated thousands of miles away. Distortions in wave rhythm reveal distant islands long before they are visible on the horizon.',
    quote: '"Feel the water move. The canoe is your compass."',
  },
  {
    id: 'winds',
    title: 'The Trade Winds (Matangi)',
    subtitle: 'Atmospheric Vectoring',
    icon: Wind,
    color: 'from-sky-400 to-indigo-500',
    details:
      'The predictable Easterly Trade Winds provide both propulsion and directional cues. Wayfinders read cloud coloration, stacked cumulus clouds over island lagoons, and the shifts of seasonal air currents.',
    quote: '"Read the wind on your sail and the salt on your brow."',
  },
  {
    id: 'wildlife',
    title: 'Flight of the Seabirds',
    subtitle: 'Bio-indicator Navigation',
    icon: Bird,
    color: 'from-emerald-400 to-teal-500',
    details:
      'Certain pelagic seabirds, such as the fairy tern (Manu o Kū), leave island roosts at dawn to fish at sea and fly straight back at sunset. Observing their flight bearing at dusk guarantees the exact direction of nearby land.',
    quote: '"Follow the bird as the sun descends."',
  },
];

export default function SceneAdventureBegins() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const active = WAYFINDING_PILLARS[selectedPillar];
  const IconComponent = active.icon;

  return (
    <section
      id="wayfinding"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#020e1a] via-[#051f38] to-[#020e1a] overflow-hidden"
    >
      {/* Night Sky Constellation Background Simulation */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#fff]" />
        <div className="absolute top-20 left-1/3 w-1.5 h-1.5 bg-teal-200 rounded-full shadow-[0_0_10px_#00d4aa]" />
        <div className="absolute top-36 right-1/4 w-2 h-2 bg-amber-200 rounded-full shadow-[0_0_12px_#fbbf24]" />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-sky-200 rounded-full shadow-[0_0_8px_#38bdf8]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-[0.25em]">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Scene 03 &middot; Ancient Science</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            We Were <span className="text-ocean-gradient">Voyagers</span>
          </h2>

          <p className="font-serif-story italic text-sky-200/90 text-lg sm:text-xl">
            &ldquo;We read the wind and the sky when the sun is high. We sail the length of the seas on the ocean breeze.&rdquo;
          </p>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            Centuries before modern compasses or satellite GPS existed, ancient Polynesian voyagers sailed thousands of
            miles across the world&rsquo;s largest ocean using non-instrument navigation: Wayfinding.
          </p>
        </div>

        {/* Interactive Wayfinding Star Compass Module */}
        <div className="mt-16 bg-slate-950/70 border border-teal-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left: Star Compass Disc Visual */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0 flex items-center justify-center">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-teal-500/20 border-dashed animate-spin [animation-duration:90s]" />
              {/* Middle star ring */}
              <div className="absolute inset-4 rounded-full border border-[#00d4aa]/30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#00d4aa]/5 pointer-events-none" />
              </div>
              {/* Radial tick marks */}
              <div className="absolute inset-8 rounded-full border border-slate-700/60 flex items-center justify-center">
                <div className="w-full h-[1px] bg-teal-500/30 absolute" />
                <div className="h-full w-[1px] bg-teal-500/30 absolute" />
                <div className="w-full h-[1px] bg-teal-500/20 absolute rotate-45" />
                <div className="w-full h-[1px] bg-teal-500/20 absolute -rotate-45" />
              </div>

              {/* Center Canoe & Glowing Compass Star */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-teal-950/90 border border-[#00d4aa] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,212,170,0.4)]">
                <Navigation className="w-8 h-8 text-[#00d4aa] animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-teal-300 -mt-0.5">
                  WAYFINDER
                </span>
              </div>

              {/* 4 Interactive Compass Nodes */}
              {WAYFINDING_PILLARS.map((p, idx) => {
                const angle = idx * 90;
                const radians = (angle * Math.PI) / 180;
                const radius = 110;
                const x = Math.cos(radians) * radius;
                const y = Math.sin(radians) * radius;
                const isCurrent = selectedPillar === idx;

                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPillar(idx)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    aria-label={`Select wayfinding pillar: ${p.title}`}
                    className={`absolute z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                      isCurrent
                        ? 'bg-[#00d4aa] text-slate-950 scale-125 ring-4 ring-[#00d4aa]/30'
                        : 'bg-slate-900 border border-teal-500/40 text-teal-300 hover:scale-110 hover:border-teal-300'
                    }`}
                  >
                    <p.icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>

            {/* Right: Wayfinding Pillar Exploration Info */}
            <div className="flex-1 space-y-6">
              {/* Category Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {WAYFINDING_PILLARS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPillar(i)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPillar === i
                        ? 'bg-teal-950/60 border-[#00d4aa] text-white'
                        : 'bg-slate-900/40 border-teal-500/15 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block">
                      Element 0{i + 1}
                    </span>
                    <span className="font-display text-xs font-semibold truncate block mt-0.5">
                      {p.subtitle}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-teal-500/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-950 border border-teal-500/40 text-[#00d4aa]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-400">
                      {active.subtitle}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <blockquote className="border-l-2 border-teal-400 pl-4 italic text-teal-200/90 font-serif-story text-sm sm:text-base">
                  {active.quote}
                </blockquote>

                <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
                  {active.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
