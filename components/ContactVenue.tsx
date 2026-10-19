'use client';

import { motion } from 'framer-motion';

export default function ContactVenue() {
  // Google Maps embed URL for Banashankari 3rd Stage, Bengaluru
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123456789012!2d77.556789!3d12.923456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a8b8c8d8e8%3A0x1234567890abcdef!2sBanashankari%203rd%20Stage%2C%20Bengaluru%2C%20Karnataka%20560085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="bg-obsidian py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-bright text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            Visit Us & Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">
            Studio & Venue Consultation
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg">
            Visit our Banashankari studio to experience materials firsthand, or book a virtual venue walkthrough. We serve all of Bengaluru and surrounding areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden bg-obsidian-deep border border-gold/15 shadow-2xl shadow-black/50"
          >
            <div className="aspect-[4/3] w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Party Partners Studio Location - Banashankari 3rd Stage, Bengaluru"
              />
            </div>

            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 left-6 z-10 bg-obsidian/90 backdrop-blur-xl border border-gold/30 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                  <span className="text-gold-bright text-xl">📍</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-gold">Party Partners Studio</p>
                  <p className="text-xs text-white/70">Banashankari 3rd Stage, Bengaluru</p>
                  <p className="text-xs text-gold/80">Studio visits by appointment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Primary CTA - WhatsApp */}
            <a
              href="https://wa.me/919916300704?text=Hi%20Party%20Partners,%20I%20would%20like%20to%20book%20a%20studio%20visit%20or%20virtual%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold via-gold-bright to-gold text-obsidian shadow-xl shadow-gold/25 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-gold/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-bright via-gold to-gold-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-obsidian/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-obsidian" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.57-.076 1.134-.224 1.504-.56.215-.194.293-.34.293-.56l.001-.095c0-.29-.149-.472-.347-.574-.198-.098-.372-.148-.569-.226-.198-.077-.52-.174-.792-.174h-.573v-.01zM20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H6.828l-2.286 2.287L4 20.714V4h16v16z"/>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">WhatsApp Consultation</h3>
                <p className="text-obsidian/80 text-sm max-w-xs">Instant replies, share venue photos, get custom quotes within minutes</p>
              </div>
            </a>

            {/* Secondary CTA - Call */}
            <a
              href="tel:+919916300704"
              className="group block relative overflow-hidden rounded-3xl bg-obsidian-deep border border-gold/20 text-white shadow-xl shadow-black/30 transition-all duration-300 hover:border-gold/50 hover:shadow-gold/10 hover:scale-[1.01]"
            >
              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold/25 transition-all">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">Direct Call</h3>
                <p className="text-white/70 text-sm max-w-xs">Speak directly with our design consultants — Mon–Sat, 12:30 PM to 8:00 PM</p>
              </div>
            </a>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 bg-obsidian-deep border border-white/10 rounded-2xl hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-3">
                  <span className="text-gold-bright text-lg">🕐</span>
                </div>
                <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                <p className="text-white/60 text-sm">Mon–Sat: 12:30 PM – 8:00 PM<br />Sunday: Closed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-5 bg-obsidian-deep border border-white/10 rounded-2xl hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-3">
                  <span className="text-gold-bright text-lg">🚗</span>
                </div>
                <h4 className="font-semibold text-white mb-1">Service Areas</h4>
                <p className="text-white/60 text-sm">All Bengaluru zones + 30km radius<br />Whitefield, Koramangala, Indiranagar</p>
              </motion.div>
            </div>

            {/* Studio Visit Note */}
            <div className="p-5 rounded-2xl bg-gold/5 border border-gold/20">
              <div className="flex items-start gap-3">
                <span className="text-gold text-xl mt-1">✨</span>
                <div>
                  <h4 className="font-semibold text-gold-bright mb-1">Studio Visits by Appointment</h4>
                  <p className="text-white/70 text-sm">
                    Experience gold hoops, balloon arches, fluted plinths, and cold pyro effects in person.
                    Book a 30-minute slot via WhatsApp or call — we'll prepare material samples for your theme.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}