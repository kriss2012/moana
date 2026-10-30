'use client';

import { useEffect, useRef, useState } from 'react';
import { Waves, Sparkles, Droplets, Shell, Compass } from 'lucide-react';

export default function SceneOceanAwakens() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive wave / ripple effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const render = () => {
      step += 0.02;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw multi-layered sine waves
      const waves = [
        { color: 'rgba(0, 212, 170, 0.08)', amp: 30, freq: 0.008, speed: 0.03, yOffset: h * 0.75 },
        { color: 'rgba(56, 189, 248, 0.1)', amp: 20, freq: 0.012, speed: 0.02, yOffset: h * 0.8 },
        { color: 'rgba(2, 69, 91, 0.3)', amp: 25, freq: 0.006, speed: 0.015, yOffset: h * 0.85 },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 10) {
          const y =
            Math.sin(x * wave.freq + step * wave.speed * 40) * wave.amp +
            Math.cos(x * 0.003 + step * 0.5) * 15 +
            wave.yOffset;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // Ambient bioluminescent floating specks
      for (let i = 0; i < 18; i++) {
        const px = (Math.sin(step + i * 2) * 0.5 + 0.5) * w;
        const py = (Math.cos(step * 0.7 + i * 1.5) * 0.3 + 0.5) * h;
        const radius = Math.sin(step * 2 + i) * 1.5 + 2;

        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, radius), 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(0, 212, 170, 0.4)' : 'rgba(56, 189, 248, 0.35)';
        ctx.shadowColor = '#00d4aa';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="story"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#020e1a] via-[#041c32] to-[#020e1a] overflow-hidden"
    >
      {/* Background Ripple Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />

      {/* Polynesian background pattern accents */}
      <div className="absolute inset-0 pointer-events-none polynesian-border opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-[0.25em]">
            <Waves className="w-3.5 h-3.5 text-[#00d4aa]" />
            <span>Scene 01 &middot; The Awakening</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            The Living <span className="text-ocean-gradient">Ocean</span>
          </h2>

          <p className="font-serif-story italic text-teal-200/90 text-lg sm:text-xl">
            &ldquo;The ocean doesn&rsquo;t separate our islands. It connects them all.&rdquo;
          </p>

          <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
            In Polynesian tradition, <em>Te Moana</em> is not an inanimate void of brine, but a conscious,
            sentient guardian with an ancient memory. It was the living ocean that parted its waters for a child,
            entrusting humanity&rsquo;s salvation to the heart that would brave the deep.
          </p>
        </div>

        {/* 3 Interactive Story Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative p-8 rounded-3xl bg-slate-950/50 hover:bg-slate-900/60 border border-teal-500/20 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-[#00d4aa] mb-6 group-hover:scale-110 transition-transform">
              <Droplets className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
              Phase I
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-2 mb-3">
              The Parting Waves
            </h3>
            <p className="font-body text-slate-300/80 text-sm leading-relaxed">
              When toddler Moana rescues a baby sea turtle on the shore, the ocean recognizes her selfless spirit.
              The water recedes, building translucent walls of living turquoise to guide her steps.
            </p>
            <div className="mt-6 pt-4 border-t border-teal-500/10 flex items-center gap-2 text-xs font-mono text-teal-400/70">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Living Water Manifestation</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-teal-950/40 to-slate-950/60 hover:from-teal-950/60 hover:to-slate-900/70 border border-[#00d4aa]/30 hover:border-[#00d4aa] transition-all duration-500 hover:-translate-y-2 shadow-[0_0_30px_rgba(0,212,170,0.15)]">
            <div className="w-12 h-12 rounded-2xl bg-[#00d4aa]/20 border border-[#00d4aa]/60 flex items-center justify-center text-[#00d4aa] mb-6 group-hover:scale-110 transition-transform">
              <Shell className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs text-[#00d4aa] tracking-widest uppercase font-semibold">
              Phase II &middot; The Sacred Relic
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-2 mb-3">
              The Pounamu Stone
            </h3>
            <p className="font-body text-slate-300/80 text-sm leading-relaxed">
              Deep within the parting waves, the ocean deposits a luminous green spiraling gemstone: the stolen
              Heart of Te Fiti. Though taken by her father, Gramma Tala keeps it safe until the voyage begins.
            </p>
            <div className="mt-6 pt-4 border-t border-teal-500/10 flex items-center gap-2 text-xs font-mono text-[#00d4aa]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Source of Creation</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-3xl bg-slate-950/50 hover:bg-slate-900/60 border border-teal-500/20 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">
              Phase III
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-2 mb-3">
              The Unbroken Bond
            </h3>
            <p className="font-body text-slate-300/80 text-sm leading-relaxed">
              Throughout her voyage, the ocean acts as a playful companion and lifesaver—tossing her back aboard her
              canoe, calming treacherous squalls, and nudging the wayward demigod into place.
            </p>
            <div className="mt-6 pt-4 border-t border-teal-500/10 flex items-center gap-2 text-xs font-mono text-sky-400/70">
              <Waves className="w-3.5 h-3.5" />
              <span>Sentient Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

