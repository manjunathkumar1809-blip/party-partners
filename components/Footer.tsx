import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/15 relative overflow-hidden pt-16 pb-24 text-white/80">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Info & Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-black border border-gold/40 flex-shrink-0 shadow-lg shadow-black">
                <Image
                  src="/logo.png"
                  alt="Party Partners Official Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-gold tracking-tight">
                  Party Partners
                </h3>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Event Rentals & Decorations
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Bengaluru&apos;s premier event decoration and rental destination. Specializing in luxury golden hoops, balloon arches, fluted pedestals, custom neon signage, and indoor safe cold pyro effects.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-gold/30">
              <span className="text-gold font-bold text-sm">★ 4.9</span>
              <span className="text-white/40">|</span>
              <span className="text-xs text-white/80">450+ Verified Google Reviews</span>
              <span className="text-white/40">|</span>
              <span className="text-xs text-gold">Backdrops from ₹4,000</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wider uppercase text-xs">
              Collections
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#catalog" className="hover:text-gold transition-colors">
                  Home Birthday Setups
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-gold transition-colors">
                  Naming Ceremony Stages
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-gold transition-colors">
                  Baby Shower Backdrops
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-gold transition-colors">
                  Wedding Reception Decor
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-gold transition-colors">
                  Fluted Plinths & Props
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-gold transition-colors">
                  Cold Fire Pyro Fountains
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wider uppercase text-xs">
              Visit Studio / Contact
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <span className="text-gold">📍</span>
                <span>Banashankari 3rd Stage, Bengaluru, Karnataka, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">📞</span>
                <a href="tel:+919916300704" className="hover:text-gold font-semibold text-white">
                  +91 9916300704
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">💬</span>
                <a
                  href="https://wa.me/919916300704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold text-white/90"
                >
                  WhatsApp Quick Chat
                </a>
              </p>

              {/* Business Hours */}
              <div className="pt-2 border-t border-white/10 mt-2">
                <p className="text-xs text-white/50 mb-2">Business Hours</p>
                <div className="space-y-1 text-xs text-white/70 font-mono">
                  <p>Mon–Sat: <span className="text-gold">12:30 PM – 8:00 PM</span></p>
                  <p>Sunday: <span className="text-white/50">Closed</span></p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/Party-Partners-Rate-Card.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-bright transition-colors"
                >
                  <span>Download Complete Rate Card (PDF)</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wider uppercase text-xs">
              We Serve
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-gold-bright">✦</span>
                Banashankari & South Bengaluru
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-bright">✦</span>
                Koramangala, HSR, BTM Layout
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-bright">✦</span>
                Indiranagar, Whitefield, Marathahalli
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-bright">✦</span>
                Jayanagar, JP Nagar, Electronic City
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-bright">✦</span>
                +30km radius from studio
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Party Partners Event Rentals. All rights reserved.</p>
          <p>Banashankari 3rd Stage, Bengaluru • Crafted with Luxury Obsidian & Metallic Gold</p>
        </div>
      </div>
    </footer>
  );
}