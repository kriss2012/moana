'use client';

import { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import { Compass, Menu, X, Waves } from 'lucide-react';

interface NavbarProps {
  onOpenPrologue?: () => void;
}

const NAV_ITEMS = [
  { label: 'Story', href: '#story' },
  { label: 'The Islands', href: '#islands' },
  { label: 'Wayfinding', href: '#wayfinding' },
  { label: 'The Voyage', href: '#voyage' },
  { label: 'Heart of Te Fiti', href: '#te-fiti' },
  { label: 'Characters', href: '#characters' },
];

export default function Navbar({ onOpenPrologue }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Check current visible section
      const sections = ['characters', 'te-fiti', 'voyage', 'wayfinding', 'islands', 'story'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-slate-900/40">
        <div
          className="h-full bg-gradient-to-r from-[#00d4aa] via-sky-400 to-[#10b981] transition-all duration-150 ease-out shadow-[0_0_8px_#00d4aa]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#020e1a]/85 backdrop-blur-md border-b border-teal-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-gradient-to-b from-[#020e1a]/80 via-[#020e1a]/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 cursor-pointer"
          >
            {/* Glowing Polynesian Spiral Icon */}
            <div className="relative w-8 h-8 rounded-full bg-teal-950/80 border border-[#00d4aa]/40 flex items-center justify-center group-hover:border-[#00d4aa] transition-colors shadow-[0_0_15px_rgba(0,212,170,0.3)]">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#00d4aa] group-hover:rotate-45 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10c0-3.5-2.5-6.5-6-6.5S9.5 8 9.5 11s2 4.5 4 4.5 3-1 3-2.5" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#00d4aa]/20 blur-sm pointer-events-none animate-pulse-glow" />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-lg tracking-[0.28em] font-extrabold text-white group-hover:text-teal-200 transition-colors drop-shadow-[0_0_16px_rgba(0,212,170,0.5)]">
                MOANA
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-teal-400/80 -mt-0.5">
                The Ocean Journey
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-500/15">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-teal-500/25 to-sky-500/20 border border-[#00d4aa]/40 shadow-[0_0_12px_rgba(0,212,170,0.25)]'
                      : 'text-slate-300/80 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00d4aa] shadow-[0_0_8px_#00d4aa]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Audio + Prologue CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <AudioPlayer />

            {onOpenPrologue && (
              <button
                onClick={onOpenPrologue}
                className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#00d4aa] to-teal-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,212,170,0.4)]"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Prologue</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2 rounded-full bg-slate-900/60 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-950/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-[#020e1a]/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all animate-in fade-in duration-300"
          style={{ height: '100dvh' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-950 border border-[#00d4aa]/40 flex items-center justify-center">
                <Waves className="w-4 h-4 text-[#00d4aa]" />
              </div>
              <span className="font-display text-lg tracking-[0.25em] font-extrabold text-white">
                MOANA
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
              className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 my-auto py-6">
            {NAV_ITEMS.map((item, idx) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-left font-display tracking-widest text-base transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-950 to-slate-900 text-teal-300 border border-teal-500/40'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-teal-500/70">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <Compass className="w-4 h-4 text-teal-400 opacity-60" />
                </button>
              );
            })}
          </div>

          {/* Footer of Mobile Menu */}
          <div className="border-t border-teal-500/20 pt-4 flex flex-col gap-3">
            {onOpenPrologue && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrologue();
                }}
                className="w-full py-3 rounded-xl font-display font-bold tracking-widest text-sm uppercase bg-gradient-to-r from-[#00d4aa] to-teal-400 text-slate-950 text-center shadow-[0_0_20px_rgba(0,212,170,0.4)]"
              >
                Watch Cinematic Prologue
              </button>
            )}
            <p className="text-center font-mono text-[10px] tracking-widest text-teal-400/60 uppercase">
              The Ocean Is Calling · Te Moana
            </p>
          </div>
        </div>
      )}
    </>
  );
}
