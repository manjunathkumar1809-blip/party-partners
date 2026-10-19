'use client';

import { motion } from 'framer-motion';

export default function TrustBar() {
  return (
    <section className="bg-obsidian-deep/80 border-y border-gold/15 py-10 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 text-center sm:text-left">

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 bg-obsidian/60 backdrop-blur-xl border border-gold/20 rounded-2xl"
          >
            <span className="text-3xl md:text-4xl font-bold text-gold-bright">★★★★★ 4.9</span>
            <div className="text-white/70 text-sm">
              <p className="font-semibold text-white">450+ Verified Google Reviews</p>
              <p className="text-xs text-white/50">Consistently rated 5-star for luxury event setups</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 bg-obsidian/60 backdrop-blur-xl border border-gold/20 rounded-2xl"
          >
            <span className="text-2xl">📍</span>
            <div className="text-white/70 text-sm">
              <p className="font-semibold text-white">Banashankari 3rd Stage, Bengaluru</p>
              <p className="text-xs text-white/50">Studio visits by appointment only</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {/* Starting Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 bg-obsidian/60 backdrop-blur-xl border border-gold/20 rounded-2xl"
          >
            <span className="text-2xl">💰</span>
            <div className="text-white/70 text-sm">
              <p className="font-bold text-gold-bright text-xl md:text-2xl">From ₹4,000</p>
              <p className="text-xs text-white/50">Custom quotes for every celebration</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}