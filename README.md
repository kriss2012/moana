<div align="center">

# 🌊 MOANA — The Ocean Is Calling
### *An Award-Winning Cinematic & Interactive 3D Turntable Web Experience*

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.9-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88ce02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Lenis Smooth Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-00d4aa?style=for-the-badge)](https://lenis.darkroom.engineering/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-moana--pi.vercel.app-00d4aa?style=for-the-badge&logo=vercel&logoColor=white)](https://moana-pi.vercel.app/)

<p align="center">
  <b>Step into a living Polynesian odyssey. Journey across 60 million square miles of uncharted Pacific waters, master ancient non-instrument wayfinding, and restore the glowing spiral Heart of Te Fiti.</b>
</p>

### 🔗 Live Demo: [https://moana-pi.vercel.app/](https://moana-pi.vercel.app/)

[🌐 Launch Live Experience](https://moana-pi.vercel.app/) • [Feature Highlights](#-key-features--3d-interactions) • [Scene Walkthrough](#-the-six-storytelling-scenes) • [Vercel Deployment](#-deployment-on-vercel)

---

</div>

## 🌟 Overview

**MOANA: The Ocean Is Calling** transforms the traditional landing page into a **cinematic interactive narrative**. Combining an optimized **181-frame 360° interactive turntable canvas**, an algorithmic **Web Audio ocean synthesizer**, silky **Lenis momentum physics**, and **GSAP timeline animations**, the site immerses the visitor in the sacred lore of *Te Moana* (the living sea) and the ancient heritage of Polynesian seafaring navigators.

---

## ⚡ Key Features & 3D Interactions

### 🌀 1. 360° Interactive Turntable Canvas
- **Fluid Scrubber Engine:** Built upon a sequential high-resolution 181-frame buffer (`/moana/ezgif-frame-*.jpg`) rendered directly into an HTML5 Canvas with bilinear smoothing.
- **Desktop Cursor Scrubbing:** Moving the cursor across the viewport dynamically scrubs the perspective across $360^\circ$ with live angular heading telemetry.
- **Mobile Touch Orbit:** Full touch tracking support (`touchmove`) enables natural finger swiping on iOS and Android devices.
- **Aspect-Ratio Preserving Cover Math:** Custom viewport-clipping algorithm ensures high-fidelity scaling across ultra-wide monitors, 4K laptops, and compact smartphone screens.

### 🎵 2. Algorithmic Web Audio Ambient Surf Synthesizer
- **Zero External MP3 Assets:** Synthesizes realistic ocean surf and harmonic swells client-side with 0KB bandwidth overhead.
- **Realistic Wave Swells:** Generates modulated pink noise passed through a resonant lowpass biquad filter driven by a low-frequency oscillator (LFO) cycling every 8 seconds.
- **Polynesian Pentatonic Chords:** Blends a quad-oscillator harmonic drone in the key of D with spatial stereo panning.
- **Interactive Equalizer:** Accessible navbar button featuring pulsing audio visualizer bars, muting states, and auto-suspension cleanup.

### 🌌 3. Interactive Polynesian Star Compass (*Kāpehu Whetū*)
- **Astronomical Wayfinding:** Interactive 32-house compass ring demonstrating how master wayfinders navigate open ocean without magnetic instruments or GPS.
- **Kinesthetic Ocean Swells:** Explore how navigators read wave interference patterns deflected by distant islands.
- **Trade Winds & Biological Vectors:** Learn how fairy terns (*Manu o Kū*) and cloud formations pinpoint hidden atolls.

### 🌋 4. Te Fiti vs. Te Kā Environment Transformer
- **Dual Morphing States:** Real-time state transition shifting ambient lighting, particle colors, and typography between:
  - 🌿 **Restored Te Fiti:** Verdant emerald flora, crystal waterfalls, and peaceful ocean swells.
  - 🔥 **Molten Te Kā:** Scorched obsidian, incandescent magma flows, and volcanic embers.
- **Interactive Pounamu Spiral:** Click the central sacred core to trigger the restoration sequence.

### 📜 5. Ancient Legend Prologue Modal
- **Full-Screen Narrative Overlay:** 4 illustrated chapters tracing the creation of the mother island, the theft of the heart, the awakening of Te Kā, and the prophecy of the chosen wayfinder.
- **Full Keyboard Accessibility:** Seamlessly navigate chapters using `ArrowLeft`, `ArrowRight`, and close with `Escape`.

---

## 🗺️ The Six Storytelling Scenes

```
┌────────────────────────────────────────────────────────────────────────┐
│ SCENE 00 │ HERO TURNTABLE     │ 181-Frame 360° Interactive Canvas     │
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 01 │ THE OCEAN AWAKENS  │ Procedural Sine Wave Water Canvas      │
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 02 │ MOTUNUI HOMELAND   │ 4-Zone Sanctuary Explorer              │
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 03 │ ANCIENT WAYFINDING │ Interactive Star Compass Disc          │
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 04 │ THE GREAT VOYAGE   │ Ocean Milestones & Lalotai Monster Lair│
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 05 │ HEART OF TE FITI   │ Molten Te Kā vs. Verdant Te Fiti Switch│
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 06 │ THE CHARACTER CODEX│ 6 Interactive Character Dossiers       │
├──────────┼────────────────────┼────────────────────────────────────────┤
│ SCENE 07 │ THE FINAL HORIZON  │ Cultural Tribute & Legal Footer        │
└──────────┴────────────────────┴────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.2.9](https://nextjs.org/) (App Router) | React Server Components, Turbopack, static page generation |
| **UI Engine** | [React 19.2.4](https://react.dev/) | Concurrent rendering, responsive interaction states |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern high-performance engine, custom glassmorphism panels |
| **Motion** | [GSAP 3.15](https://greensock.com/) | Cinema-grade timeline entrance choreography |
| **Smooth Scroll**| [Lenis](https://lenis.darkroom.engineering/) | Smooth momentum scrolling with reduced-motion support |
| **Audio** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | Procedural pink noise oceanic waves & pentatonic harmonic pads |
| **Typography**| [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | `Cinzel` (ancient display) + `Plus Jakarta Sans` (clean body) |
| **Icons** | [Lucide React](https://lucide.dev/) | Crisp, lightweight geometric SVG icons |

---

## 📂 Repository Structure

```tree
moana/
├── app/
│   ├── components/
│   │   ├── AudioPlayer.tsx          # Web Audio procedural surf & harmonic drone
│   │   ├── CharacterShowcase.tsx    # 6-hero character dossiers & cultural relics
│   │   ├── Hero.tsx                 # 181-frame turntable 360° canvas scrubber
│   │   ├── Navbar.tsx               # Glassmorphic adaptive nav with progress bar
│   │   ├── PrologueModal.tsx        # 4-chapter interactive ancient legend modal
│   │   ├── SceneAdventureBegins.tsx # Interactive Wayfinding Star Compass disc
│   │   ├── SceneFinalHorizon.tsx    # Closing anthem, restart trigger, footer
│   │   ├── SceneGreatVoyage.tsx     # Milestone timeline, Lalotai & canoe specs
│   │   ├── SceneHeartOfTeFiti.tsx   # Dual Te Fiti / Te Kā transformation switch
│   │   ├── SceneMotunui.tsx         # 4-zone island exploration module
│   │   ├── SceneOceanAwakens.tsx    # Multi-layered procedural sine wave canvas
│   │   └── SmoothScroll.tsx         # Lenis momentum physics provider
│   ├── globals.css                  # Custom scrollbar, animations & gradients
│   ├── layout.tsx                   # SEO metadata, OpenGraph, next/font imports
│   └── page.tsx                     # Master composition & client mounting
├── public/
│   └── moana/                       # 181 high-res image sequence frames (001-181)
├── eslint.config.mjs                # Modern flat ESLint configuration
├── next.config.ts                   # Edge CDN cache headers & dev origins
├── package.json                     # Project scripts and dependencies
├── postcss.config.mjs               # Tailwind CSS v4 PostCSS plugin
├── README.md                        # Documentation
└── tsconfig.json                    # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or later (Node v20+ or v24+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kriss2012/moana.git
   cd moana
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Code Quality & Build Validation

```bash
# Run linting (0 errors, 0 warnings)
npm run lint

# Compile optimized production build
npm run build
```

---

## ☁️ Deployment on Vercel

The application is deployed and live at:

> 🌊 **Production URL:** [https://moana-pi.vercel.app/](https://moana-pi.vercel.app/)

This repository is optimized for continuous deployment on **Vercel**:

### Option 1: Via Vercel CLI
```bash
npx vercel
```
*Follow the interactive prompts to link and deploy your project.*

To deploy directly to production:
```bash
npx vercel --prod
```

### Option 2: Via Vercel Dashboard
1. Push your changes to your GitHub repository:
   ```bash
   git push origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your **`moana`** repository.
4. Framework Preset: **Next.js** (auto-detected).
5. Click **Deploy**.

> **Note on CDN Optimization:** In `next.config.ts`, custom headers are pre-configured to cache all 181 frame sequence images across Vercel’s global Edge Network with `public, max-age=31536000, immutable`.

---

## 📜 Cultural Heritage & Legal Notice

- **Polynesian Voyaging Society & Heritage:** This project is created as an artistic tribute to the historical seafaring navigators of Oceania who settled the vast Polynesian Triangle thousands of years ago.
- **Intellectual Property Disclaimer:** *Moana* and all related characters, titles, and trademarks are registered trademarks of **Disney Enterprises, Inc.** This project is an independent creative portfolio and educational experience. It is not affiliated with, endorsed by, or authorized by The Walt Disney Company.

---

<div align="center">
  <sub>Crafted with passion for the ocean · <i>"We know who we are."</i></sub>
</div>
