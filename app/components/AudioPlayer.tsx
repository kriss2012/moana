'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const initAudio = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        setIsSupported(false);
        return;
      }

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise generator for realistic oceanic swells
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Ocean wave filter (lowpass filter simulating rolling surf)
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      // LFO for wave swells (every 5-7 seconds)
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8 sec wave period
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(220, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Swell volume modulator
      const swellGain = ctx.createGain();
      const volLfo = ctx.createOscillator();
      volLfo.frequency.setValueAtTime(0.12, ctx.currentTime);
      const volLfoGain = ctx.createGain();
      volLfoGain.gain.setValueAtTime(0.15, ctx.currentTime);
      volLfo.connect(volLfoGain);
      volLfoGain.connect(swellGain.gain);

      whiteNoise.connect(filter);
      filter.connect(swellGain);
      swellGain.connect(masterGain);

      // Add gentle harmonic drone (Polynesian oceanic chord in Pentatonic D: D - A - C - D)
      const freqs = [146.83, 220.0, 261.63, 293.66];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.015 / (idx + 1), ctx.currentTime);

        // Slow pulsing pan / timbre
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (panner) {
          panner.pan.setValueAtTime((idx % 2 === 0 ? -1 : 1) * 0.35, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(panner);
          panner.connect(masterGain);
        } else {
          osc.connect(oscGain);
          oscGain.connect(masterGain);
        }

        osc.start();
      });

      whiteNoise.start();
      lfo.start();
      volLfo.start();
    } catch {
      setIsSupported(false);
    }
  };

  const togglePlay = async () => {
    if (!audioCtxRef.current) {
      initAudio();
    }

    if (!audioCtxRef.current) return;

    if (audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    if (isPlaying) {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
      }
      setIsPlaying(false);
    } else {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0.25, audioCtxRef.current.currentTime, 0.4);
      }
      setIsPlaying(true);
    }
  };

  if (!isSupported) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute Ocean Ambience' : 'Play Ocean Ambience'}
        className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/60 hover:bg-[#02455b]/70 border border-teal-500/30 hover:border-[#00d4aa]/60 transition-all duration-300 text-xs text-teal-200"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-0.5 h-3 bg-[#00d4aa] rounded-full animate-pulse" />
              <span className="w-0.5 h-2 bg-sky-400 rounded-full animate-pulse delay-75" />
              <span className="w-0.5 h-4 bg-teal-300 rounded-full animate-pulse delay-150" />
              <span className="w-0.5 h-2.5 bg-[#00d4aa] rounded-full animate-pulse delay-100" />
            </div>
            <Volume2 className="w-3.5 h-3.5 text-[#00d4aa]" />
            <span className="hidden sm:inline font-mono text-[10px] tracking-widest uppercase text-teal-300">
              Ocean Audio: On
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 transition-colors" />
            <span className="hidden sm:inline font-mono text-[10px] tracking-widest uppercase text-slate-400 group-hover:text-teal-300 transition-colors">
              Sound Ambient
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500/40 animate-ping" />
          </>
        )}
      </button>
    </div>
  );
}
