'use client';

import { useState } from 'react';
import { Anchor, Skull, Shield, Sparkles, Navigation, Waves, Wind } from 'lucide-react';

const VOYAGE_MILESTONES = [
  {
    id: 'reef-crossing',
    phase: 'Milestone 01',
    title: 'Breaching The Outer Reef',
    location: 'Motunui Lagoon Boundary',
    icon: Waves,
    badge: 'The First Crossing',
    summary:
      'With Heihei accidentally aboard, Moana mounts her traditional voyaging canoe (Camakau), navigates through crashing breaker walls, and leaves the safety of her home island forever.',
    detail:
      'The ocean throws waves larger than coconut palms, testing Moana’s resolve as she capsizes, learns to read wave rhythms, and earns the open sea’s respect.',
    quote: '"See the line where the sky meets the sea? It calls me."',
    stats: { distance: '40 Nautical Miles', status: 'Reef Cleared' },
  },
  {
    id: 'maui-isle',
    phase: 'Milestone 02',
    title: 'The Demigod of Wind & Sea',
    location: 'Barren Spire of Maui',
    icon: Navigation,
    badge: 'Ancient Warrior',
    summary:
      'Marooned for a millennium, Maui shapeshifter and hero to men tries to steal Moana’s canoe, but the living ocean refuses to let him abandon his destined wayfinder.',
    detail:
      'A reluctant partnership is struck: Moana will help Maui retrieve his magical fish hook from Lalotai in exchange for his wayfinding guidance to Te Fiti.',
    quote: '"I am not a princess. I am the daughter of the chief."',
    stats: { distance: '480 Nautical Miles', status: 'Demigod Recruited' },
  },
  {
    id: 'kakamora',
    phase: 'Milestone 03',
    title: 'Attack of the Kakamora',
    location: 'Deep Water Flotilla',
    icon: Shield,
    badge: 'Armored Pirates',
    summary:
      'A ferocious armada of tiny, coconut-armored pirates emerges from the mist aboard massive tribal war rafts, deploying dart blowpipes and grappling hooks to steal the Heart.',
    detail:
      'Through daring high-seas maneuvering and pole-vaulting between hostile pirate decks, Moana and Maui reclaim the stolen rooster and slip through the pirate blockade.',
    quote: '"They’re kind of cute... until they try to murder you."',
    stats: { distance: '1,120 Nautical Miles', status: 'Blockade Evaded' },
  },
  {
    id: 'lalotai',
    phase: 'Milestone 04',
    title: 'Lalotai — Realm of Monsters',
    location: 'Subterranean Deep Abyss',
    icon: Skull,
    badge: 'Abyssal Depth',
    summary:
      'A chasm at the ocean floor leads into Lalotai: a surreal, bioluminescent underworld teeming with titanic predators, where the laws of nature are warped by ancient magic.',
    detail:
      'Moana and Maui leap into the abyss, descending thousands of fathoms past luminous angler monstrosities to infiltrate Tamatoa’s glittering cavern.',
    quote: '"Never jump into the monster realm without a distraction."',
    stats: { distance: 'Sub-oceanic Trench', status: 'Abyss Infiltrated' },
  },
  {
    id: 'tamatoa',
    phase: 'Milestone 05',
    title: 'The Lair of Shiny Tamatoa',
    location: 'Lalotai Sunken Hoard',
    icon: Sparkles,
    badge: 'Crustacean Titan',
    summary:
      'Tamatoa, a vain 50-foot crab encrusted in gold and bioluminescent trinkets, flaunts Maui’s lost fish hook like a royal crown upon his glittering carapace.',
    detail:
      'While Tamatoa belts out his dazzling anthem of decadence, Moana crafts a luminescent decoy with barnacles and algae, allowing Maui to reclaim his mystical weapon.',
    quote: '"I’d rather be shiny! Like a treasure from a sunken pirate wreck."',
    stats: { distance: 'Deep Trench Floor', status: 'Fish Hook Retrieved' },
  },
];

export default function SceneGreatVoyage() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const current = VOYAGE_MILESTONES[activeMilestone];
  const IconComponent = current.icon;

  return (
    <section
      id="voyage"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#020e1a] via-[#04192b] to-[#020e1a] overflow-hidden"
    >
      {/* Bioluminescent deep water background particle accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#00d4aa]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-[0.25em]">
            <Anchor className="w-3.5 h-3.5 text-[#00d4aa]" />
            <span>Scene 04 &middot; The Voyage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            Across The <span className="text-ocean-gradient">Great Sea</span>
          </h2>

          <p className="font-serif-story italic text-teal-200/90 text-lg sm:text-xl">
            &ldquo;There is no turning back. The ocean called, and we answered.&rdquo;
          </p>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            The Pacific Ocean spans sixty million square miles. Sailing beyond the reef required traversing pirate
            flotillas, monster realms, and uncharted waters to reach the shattered cradle of creation.
          </p>
        </div>

        {/* Milestone Horizontal Progress Timeline */}
        <div className="mt-14 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center gap-3 min-w-[700px] border-b border-teal-500/20 pb-4">
            {VOYAGE_MILESTONES.map((m, idx) => {
              const isSelected = activeMilestone === idx;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestone(idx)}
                  className={`flex-1 p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-1 ${
                    isSelected
                      ? 'bg-teal-950/70 border-[#00d4aa] shadow-[0_0_20px_rgba(0,212,170,0.3)]'
                      : 'bg-slate-950/40 border-teal-500/15 hover:bg-slate-900/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest">
                    {m.phase}
                  </span>
                  <span
                    className={`font-display text-xs font-bold truncate ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Detail Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Story Card */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-teal-500/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/40 text-[#00d4aa] text-xs font-mono uppercase tracking-widest">
                <IconComponent className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Location: {current.location}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              {current.title}
            </h3>

            <blockquote className="border-l-2 border-[#00d4aa] pl-4 italic text-teal-200 font-serif-story text-base sm:text-lg">
              {current.quote}
            </blockquote>

            <div className="space-y-3 font-body text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{current.summary}</p>
              <p className="text-slate-400">{current.detail}</p>
            </div>

            {/* Expedition Telemetry Stats */}
            <div className="pt-6 border-t border-teal-500/20 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-teal-500/15">
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block">
                  Log Distance
                </span>
                <span className="font-display text-sm font-semibold text-white mt-0.5 block">
                  {current.stats.distance}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-teal-500/15">
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block">
                  Voyage Status
                </span>
                <span className="font-display text-sm font-semibold text-[#00d4aa] mt-0.5 block">
                  {current.stats.status}
                </span>
              </div>

              <div className="hidden sm:block p-3.5 rounded-xl bg-slate-900/60 border border-teal-500/15">
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block">
                  Vessel Type
                </span>
                <span className="font-display text-sm font-semibold text-white mt-0.5 block">
                  Outrigger Wa&rsquo;a
                </span>
              </div>
            </div>
          </div>

          {/* Right Voyaging Canoe Illustration & Artifact Specs */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-teal-950/40 to-slate-950/60 border border-teal-500/20 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-950 border border-teal-500/40 flex items-center justify-center text-[#00d4aa] mb-4">
                <Wind className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-white">
                The Voyaging Wa&rsquo;a Kaulua
              </h4>
              <p className="text-xs text-slate-300 font-body leading-relaxed mt-2">
                Engineered with woven pandanus crab-claw sails, lashings of sennit coconut fiber cordage,
                and twin buoyant hulls carved from sacred koa and breadfruit trees.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs text-teal-300/80 border-t border-teal-500/20 pt-4">
              <div className="flex justify-between">
                <span>Sail Rigging:</span>
                <span className="text-white">Crab Claw (Pe&rsquo;a)</span>
              </div>
              <div className="flex justify-between">
                <span>Hull Structure:</span>
                <span className="text-white">Carved Monoxylon</span>
              </div>
              <div className="flex justify-between">
                <span>Steering Oar:</span>
                <span className="text-white">Hoe Uli</span>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('te-fiti');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-[#00d4aa] to-teal-500 text-slate-950 hover:brightness-110 transition-all text-center"
            >
              Approach Te Fiti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
