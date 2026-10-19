'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Elegant gold ambient sparkle particle canvas (pure 2D Canvas - ultra fast, no Three.js glitches)
function GoldDustCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle array
    const particleCount = 65;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedY: number;
      speedX: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.7 + 0.2,
        speedY: -(Math.random() * 0.4 + 0.15), // Slow upward drift
        speedX: (Math.random() - 0.5) * 0.25,
        pulse: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.03 + 0.015,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        // Wrap around top/bottom
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = Math.max(0.1, p.alpha * (0.6 + 0.4 * Math.sin(p.pulse)));

        // Golden glowing shimmer particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, `rgba(245, 197, 66, ${currentAlpha})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${currentAlpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 248, 220, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.8, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}

export default function Party3DHero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-obsidian flex items-center justify-center overflow-hidden">
      {/* 1. Cinematic Background Video with Soft Atmospheric Treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 filter brightness-90 scale-105"
          poster="/og-party-partners.png"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* 2. Very subtle dark vignette (lets the video shine through clearly) */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-obsidian/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0B0C10/60)]" />
      </div>

      {/* 3. Ambient Gold Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-gold-bright/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 4. Gold Shimmer Dust Canvas */}
      <GoldDustCanvas />

      {/* 5. Hero Content (Typography & Actions) */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Top: 4.9★ Social Proof Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-obsidian-deep/80 backdrop-blur-xl border border-gold/30 shadow-lg shadow-black/60 mb-6"
        >
          <span className="text-gold-bright text-xs tracking-wider">★★★★★</span>
          <span className="text-white font-bold text-xs tracking-wider">4.9 / 5.0</span>
          <span className="text-white/30">|</span>
          <span className="text-xs text-white/70">450+ Verified Bengaluru Reviews</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl"
        >
          Transform Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-bright to-gold">
            Celebrations
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="mt-5 text-base sm:text-xl text-white/75 max-w-2xl font-light leading-relaxed"
        >
          Luxury event decor, bespoke backdrops, and cinematic special effects — crafted for birthdays, naming ceremonies, and receptions across Bengaluru.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://wa.me/919916300704?text=Hi%20Party%20Partners,%20I%20would%20like%20to%20book%20a%20luxury%20event%20setup."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-bright to-gold text-obsidian font-bold text-xs uppercase tracking-wider shadow-xl shadow-gold/25 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Book Your Setup Now</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#catalog"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-gold/30 hover:border-gold/60 hover:bg-gold/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xl transition-all duration-300"
          >
            <span>Explore Catalog</span>
            <span className="text-gold font-bold">from ₹4,000</span>
          </a>
        </motion.div>

        {/* Location & Studio hours subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 inline-flex items-center gap-2 text-xs text-white/50"
        >
          <span>📍</span>
          <span>Banashankari 3rd Stage, Bengaluru • Mon–Sat 12:30 PM – 8:00 PM</span>
        </motion.div>
      </div>
    </section>
  );
}
