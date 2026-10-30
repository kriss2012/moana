'use client';

import { useState } from 'react';
import { Users, Compass, Sparkles, Anchor } from 'lucide-react';

const CHARACTERS = [
  {
    id: 'moana',
    name: 'Moana',
    title: 'The Wayfinder of Motunui',
    role: 'Protagonist & Future Chieftain',
    accent: 'from-[#00d4aa] to-teal-500',
    border: 'border-[#00d4aa]/50',
    tagColor: 'text-[#00d4aa]',
    bgTint: 'bg-teal-950/40',
    quote: '"I am Moana of Motunui. You will board my boat, sail across the sea, and restore the heart of Te Fiti."',
    bio:
      'Curious, resolute, and bound to the tides, Moana possesses an innate empathy and daring spirit. Rather than rule safely from the shores, she embraces her ancestral heritage of oceanic navigation to deliver her people from calamity.',
    traits: ['Intuitive Navigator', 'Fearless Leader', 'Chosen by the Ocean', 'Empathetic Heart'],
    relic: 'The Pounamu Heart of Te Fiti & The Carved Steering Oar',
  },
  {
    id: 'maui',
    name: 'Maui',
    title: 'Demigod of the Wind & Sea',
    role: 'Hero to Men & Shapeshifter',
    accent: 'from-amber-400 to-orange-500',
    border: 'border-amber-500/50',
    tagColor: 'text-amber-400',
    bgTint: 'bg-amber-950/40',
    quote: '"What can I say except you’re welcome? For the tides, the sun, the sky!"',
    bio:
      'Born human and cast into the sea, Maui was saved by the gods who gifted him a magical fish hook carved from the jawbone of his ancestor. Capable of shifting into a giant hawk, shark, or lizard, he pulled islands from the ocean floor.',
    traits: ['Superhuman Strength', 'Shapeshifting', 'Sentient Tatau Tattoos', 'Vulnerable Heart'],
    relic: 'The Great Bone Fish Hook (Manaiakalani)',
  },
  {
    id: 'tala',
    name: 'Gramma Tala',
    title: 'Keeper of Ancient Lore',
    role: 'Village Elder & Spiritual Guide',
    accent: 'from-sky-400 to-cyan-500',
    border: 'border-sky-400/50',
    tagColor: 'text-sky-300',
    bgTint: 'bg-sky-950/40',
    quote: '"When I die, I’m going to come back as one of these. Or I chose the wrong tattoo."',
    bio:
      'The eccentric village elder who dances with the water at dusk. Gramma Tala preserved the forbidden history of the voyagers, guarded the Heart of Te Fiti, and returned in spirit as a luminous, majestic golden-blue manta ray.',
    traits: ['Ancient Oral Historian', 'Spiritual Medium', 'Ancestral Guide', 'Spirit Manta Ray'],
    relic: 'Manta Ray Amulet & The Ancient Wayfinder Caves',
  },
  {
    id: 'heihei-pua',
    name: 'Heihei & Pua',
    title: 'The Unlikely Voyagers',
    role: 'Loyal Companions',
    accent: 'from-emerald-400 to-teal-500',
    border: 'border-emerald-500/50',
    tagColor: 'text-emerald-400',
    bgTint: 'bg-emerald-950/40',
    quote: '"Sometimes our strengths lie beneath the surface... far beneath."',
    bio:
      'Pua is Moana’s affectionate pot-bellied pig who fears the treacherous reef surf, while Heihei is an oblivious rooster who stows away in Moana’s canoe. Despite swallowing rocks and wandering overboard, Heihei inadvertently saves the Heart at crucial moments.',
    traits: ['Comedic Resilience', 'Unintentional Heroism', 'Pure Loyalty', 'Rooster Intuition'],
    relic: 'The Stowed Canoe Basket',
  },
  {
    id: 'tamatoa',
    name: 'Tamatoa',
    title: 'The Glutton of Lalotai',
    role: 'Giant Decapod of the Deep',
    accent: 'from-purple-400 to-pink-500',
    border: 'border-purple-500/50',
    tagColor: 'text-purple-300',
    bgTint: 'bg-purple-950/40',
    quote: '"Did your granny say listen to your heart? I’d rather be shiny!"',
    bio:
      'A flamboyant, 50-foot coconut crab inhabiting the sunken underworld of Lalotai. Obsessed with self-adornment, he hoards glittering gold relics, jewels, and Maui’s prized fish hook upon his colossal glowing shell.',
    traits: ['Bioluminescent Glamour', 'Crushing Pincers', 'Vain Theatrics', 'Hoarder of Relics'],
    relic: 'Gold-Encrusted Carapace & Bioluminescent Lure',
  },
  {
    id: 'tefiti',
    name: 'Te Fiti / Te Kā',
    title: 'Mother Goddess of Creation',
    role: 'Source of All Island Life',
    accent: 'from-emerald-400 via-rose-500 to-orange-500',
    border: 'border-emerald-400/50',
    tagColor: 'text-emerald-300',
    bgTint: 'bg-emerald-950/40',
    quote: '"This is not who you are. You know who you are."',
    bio:
      'The primordial mother island whose spiral heart birthed flora, fauna, and mankind across Oceania. When robbed of her heart, her anguish transformed her into Te Kā, a towering demon of incandescent volcanic fury until Moana recognized her true essence.',
    traits: ['Primordial Creation', 'Volcanic Incarnation', 'Verdant Flora Spores', 'Cosmic Motherhood'],
    relic: 'The Verdant Island of Te Fiti & Spiral Core',
  },
];

export default function CharacterShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const character = CHARACTERS[selectedIdx];

  return (
    <section
      id="characters"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#020e1a] via-[#041a2e] to-[#020e1a] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-[0.25em]">
            <Users className="w-3.5 h-3.5 text-[#00d4aa]" />
            <span>The Character Codex</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            Legends Of The <span className="text-ocean-gradient">Deep</span>
          </h2>

          <p className="font-serif-story italic text-teal-200/90 text-lg sm:text-xl">
            &ldquo;We are the sum of those who came before us.&rdquo;
          </p>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            From seafaring wayfinders and demigods of myth to ancient island elders and titanic monsters of the abyss,
            explore the figures that shape the legend of Moana.
          </p>
        </div>

        {/* Character Navigation Tabs */}
        <div className="mt-14 flex items-center justify-center gap-2 flex-wrap">
          {CHARACTERS.map((c, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-display text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                  isSelected
                    ? `bg-slate-900 border-[#00d4aa] text-white shadow-[0_0_20px_rgba(0,212,170,0.3)] scale-105`
                    : 'bg-slate-950/50 border-teal-500/15 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] opacity-70" />
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Character Dossier Card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div
            className={`p-8 sm:p-12 rounded-3xl bg-slate-950/80 border ${character.border} backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-8`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-500/20 pb-6">
              <div>
                <span className={`font-mono text-xs uppercase tracking-[0.25em] ${character.tagColor}`}>
                  {character.role}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-black text-white mt-1">
                  {character.name}
                </h3>
                <p className="font-display text-base text-slate-300 mt-0.5">
                  {character.title}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-teal-500/20 flex items-center gap-3 self-start sm:self-auto">
                <Compass className="w-5 h-5 text-[#00d4aa]" />
                <div className="text-left">
                  <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block mb-0.5">
                    Affiliation
                  </span>
                  <span className="font-display text-xs font-semibold text-slate-200">
                    Polynesian Lore
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 border-[#00d4aa] pl-4 italic text-teal-100 font-serif-story text-base sm:text-xl leading-relaxed">
              {character.quote}
            </blockquote>

            <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
              {character.bio}
            </p>

            {/* Character Traits Badges */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
                Defining Virtues & Traits:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {character.traits.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/25 text-xs font-mono text-slate-200 flex items-center gap-2"
                  >
                    <Sparkles className="w-3 h-3 text-[#00d4aa]" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Sacred Relic / Artifact */}
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-950/30 border border-teal-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-teal-950 border border-teal-500/40 text-[#00d4aa]">
                  <Anchor className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest block">
                    Associated Artifact / Weapon
                  </span>
                  <span className="font-display text-sm font-semibold text-white">
                    {character.relic}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-teal-400/80 uppercase tracking-wider self-start sm:self-auto">
                Polynesian Cultural Relic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
