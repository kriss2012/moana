'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import SceneOceanAwakens from './components/SceneOceanAwakens';
import SceneMotunui from './components/SceneMotunui';
import SceneAdventureBegins from './components/SceneAdventureBegins';
import SceneGreatVoyage from './components/SceneGreatVoyage';
import SceneHeartOfTeFiti from './components/SceneHeartOfTeFiti';
import CharacterShowcase from './components/CharacterShowcase';
import SceneFinalHorizon from './components/SceneFinalHorizon';
import PrologueModal from './components/PrologueModal';
import SmoothScroll from './components/SmoothScroll';

// Dynamically import Hero with ssr: false for canvas performance and no SSR mismatches
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });

export default function Home() {
  const [isPrologueOpen, setIsPrologueOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#020e1a] text-slate-100 selection:bg-[#00d4aa]/30 selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenPrologue={() => setIsPrologueOpen(true)} />

        <main className="relative">
          {/* Hero Section with 181-frame Turntable Canvas */}
          <Hero onOpenPrologue={() => setIsPrologueOpen(true)} />

          {/* Scene 01: The Ocean Awakens & Living Water */}
          <SceneOceanAwakens />

          {/* Scene 02: The Island of Motunui & Reef Barrier */}
          <SceneMotunui />

          {/* Scene 03: Ancient Wayfinding & Star Compass */}
          <SceneAdventureBegins />

          {/* Scene 04: The Great Voyage & Monster Realms */}
          <SceneGreatVoyage />

          {/* Scene 05: The Heart of Te Fiti & The Wrath of Te Kā */}
          <SceneHeartOfTeFiti />

          {/* The Character Codex Showcase */}
          <CharacterShowcase />

          {/* Scene 06: Final Horizon & Cultural Legacy Footer */}
          <SceneFinalHorizon onOpenPrologue={() => setIsPrologueOpen(true)} />
        </main>

        {/* Ancient Legend Prologue Modal */}
        <PrologueModal
          isOpen={isPrologueOpen}
          onClose={() => setIsPrologueOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
