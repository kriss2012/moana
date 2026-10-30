'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { Compass, Sparkles, MoveHorizontal, Play } from 'lucide-react';

const FRAME_COUNT = 181;
const FOLDER = 'moana';
const MIDDLE = Math.round((FRAME_COUNT - 1) / 2);

interface HeroProps {
  onOpenPrologue?: () => void;
}

export default function Hero({ onOpenPrologue }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const frameRef = useRef(MIDDLE);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(MIDDLE);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const draw = useCallback((i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images.current[i];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover scale maintaining aspect ratio
    const s = Math.max(cw / iw, ch / ih);
    const ox = (cw - iw * s) / 2;
    const oy = (ch - ih * s) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, ox, oy, iw * s, ih * s);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(frameRef.current);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Preload frames
    images.current = new Array(FRAME_COUNT).fill(null);
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/${FOLDER}/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;
      img.onload = () => {
        images.current[i] = img;
        loadedCount++;

        if (loadedCount === 1) {
          draw(i);
        }
        if (i === frameRef.current) {
          draw(i);
        }
      };
    }

    // Mouse scrubber
    const onMove = (e: MouseEvent) => {
      if (!section) return;
      const r = section.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) return;
      const ratio = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      const idx = Math.round(ratio * (FRAME_COUNT - 1));
      if (idx !== frameRef.current) {
        frameRef.current = idx;
        setCurrentFrameDisplay(idx);
        draw(idx);
      }
    };

    // Touch scrubber for mobile/tablet
    const onTouch = (e: TouchEvent) => {
      if (!section || e.touches.length === 0) return;
      const touch = e.touches[0];
      const r = section.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (touch.clientX - r.left) / r.width));
      const idx = Math.round(ratio * (FRAME_COUNT - 1));
      if (idx !== frameRef.current) {
        frameRef.current = idx;
        setCurrentFrameDisplay(idx);
        draw(idx);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    // GSAP Cinematic Entrance Sequence
    const ctxTimeline = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        canvasRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.3'
        );
    }, sectionRef);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      ctxTimeline.revert();
    };
  }, [draw]);

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-[100dvh] overflow-hidden bg-[#020e1a] select-none flex items-center justify-center"
    >
      {/* 360 Head-Tracking Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Cinematic Vignette & Ocean Lighting Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#020e1a]/90 via-[#020e1a]/40 to-[#020e1a]/90 sm:from-[#020e1a]/85 sm:via-[#020e1a]/30 sm:to-[#020e1a]/80" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#020e1a]/80 via-transparent to-[#020e1a]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,14,26,0.85)_100%)]" />

      {/* Floating Ocean Mist & Bioluminescent Sparks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#00d4aa] blur-[1px] animate-float opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-sky-300 blur-[2px] animate-float-delayed opacity-60" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-emerald-300 blur-[1px] animate-float opacity-50" />
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 rounded-full bg-teal-200 blur-[1px] animate-float-delayed opacity-80" />
      </div>

      {/* Turntable Interactive Cue Pill */}
      <div className="absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/65 backdrop-blur-md border border-teal-500/30 text-teal-300/90 text-[11px] font-mono tracking-widest uppercase shadow-[0_0_20px_rgba(0,212,170,0.2)]">
        <MoveHorizontal className="w-3.5 h-3.5 text-[#00d4aa] animate-pulse" />
        <span className="hidden sm:inline">Move cursor / swipe to turn</span>
        <span className="sm:hidden">Swipe to turn</span>
        <span className="text-teal-400 font-bold">
          {Math.round(((currentFrameDisplay + 1) / FRAME_COUNT) * 360)}°
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12 sm:mt-8">
        {/* Subtle Eyebrow Badge */}
        <div
          ref={headlineRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-4 shadow-[0_0_25px_rgba(0,212,170,0.25)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00d4aa]" />
          <span>An Extraordinary Polynesian Odyssey</span>
        </div>

        {/* Monumental MOANA Title */}
        <h1
          ref={titleRef}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.12em] text-white uppercase leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
        >
          <span className="text-ocean-gradient glow-text-cyan">MOANA</span>
        </h1>

        {/* Compelling Headline */}
        <div className="mt-4 sm:mt-6 space-y-3 max-w-2xl">
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-teal-100 tracking-wider">
            THE OCEAN IS CALLING.
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg text-slate-300/90 font-light leading-relaxed">
            An extraordinary journey beyond the horizon. Chosen by the sea itself to restore
            what was lost, awaken ancient wayfinders, and heal the heart of the world.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToStory}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-bold tracking-[0.2em] text-xs sm:text-sm uppercase bg-gradient-to-r from-[#00d4aa] via-teal-400 to-[#10b981] text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,212,170,0.5)] flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>EXPLORE THE JOURNEY</span>
          </button>

          <button
            onClick={onOpenPrologue}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase bg-slate-950/60 hover:bg-slate-900/80 border border-teal-500/40 hover:border-teal-400 text-teal-100 backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          >
            <Play className="w-4 h-4 text-[#00d4aa]" />
            <span>DISCOVER THE STORY</span>
          </button>
        </div>

        {/* Bottom Feature Badges */}
        <div
          ref={statsRef}
          className="mt-12 hidden md:grid grid-cols-3 gap-6 max-w-3xl w-full pt-6 border-t border-teal-500/15"
        >
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs text-[#00d4aa] tracking-widest uppercase">
              The Legend
            </span>
            <span className="font-display text-sm font-semibold text-slate-200 mt-0.5">
              Heart of Te Fiti
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-teal-500/15 px-4">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">
              Ancient Art
            </span>
            <span className="font-display text-sm font-semibold text-slate-200 mt-0.5">
              Ocean Wayfinding
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
              Homeland
            </span>
            <span className="font-display text-sm font-semibold text-slate-200 mt-0.5">
              The Island of Motunui
            </span>
          </div>
        </div>
      </div>

      {/* Layered Animated Wave Crest at Section Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 text-[#020e1a] preserve-3d"
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
            fillOpacity="0.8"
          />
          <path
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        onClick={scrollToStory}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 cursor-pointer flex flex-col items-center gap-1 group"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-teal-400/80 group-hover:text-teal-200 transition-colors">
          Scroll To Begin
        </span>
        <div className="w-5 h-8 rounded-full border border-teal-500/40 flex items-start justify-center p-1 group-hover:border-[#00d4aa] transition-colors">
          <div className="w-1 h-2 rounded-full bg-[#00d4aa] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
