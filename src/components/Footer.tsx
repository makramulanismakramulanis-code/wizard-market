import { Wand2, ArrowUp, Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Shop Collections', href: '#categories' },
    { name: 'Bestsellers', href: '#bestsellers' },
    { name: 'Our Story', href: '#story' },
    { name: 'Store Hours & Map', href: '#visit' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Inquiry Form', href: '#inquiry-form' },
  ];

  return (
    <footer className="bg-[#0A0C10] text-[#F9F8F6] border-t border-[#D4AF37]/25 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2.5 text-2xl font-bold tracking-wider font-cinzel text-[#F1D77A] group"
            >
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#2C183B]/80 text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Wand2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="text-[#F9F8F6] group-hover:text-[#F1D77A] transition-colors">
                Wizard <span className="text-[#D4AF37]">Market</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              Toronto&apos;s premier boutique realm of magic and wonder. Specializing in handcrafted wands, grimoires, potions, and enchanted collectibles for dreamers of all ages.
            </p>
            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A1526] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] hover:text-[#FFF] hover:border-[#F1D77A] hover:bg-[#2C183B] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                aria-label="Follow Wizard Market on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1A1526] border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] hover:text-[#FFF] hover:border-[#F1D77A] hover:bg-[#2C183B] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                aria-label="Follow Wizard Market on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-cinzel font-bold tracking-widest text-[#F1D77A] uppercase mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#F1D77A] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location */}
          <div>
            <h4 className="text-xs font-cinzel font-bold tracking-widest text-[#F1D77A] uppercase mb-4">
              Location & Access
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>346B Dundas St W, Lower Level<br />Toronto, ON M5T 1G5, Canada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+14165195477" className="hover:text-white transition-colors">
                  +1 (416) 519-5477
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Steps from the Art Gallery of Ontario & OCAD University.
              </p>
            </div>
          </div>

          {/* Col 4: Shop Hours */}
          <div>
            <h4 className="text-xs font-cinzel font-bold tracking-widest text-[#F1D77A] uppercase mb-4">
              Weekly Sanctuary Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Wednesday:</span>
                <span className="font-mono text-[#F1D77A]">12:00 PM – 6:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Friday:</span>
                <span className="font-mono text-[#F1D77A]">12:00 PM – 6:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Saturday:</span>
                <span className="font-mono text-[#F1D77A]">12:00 PM – 6:00 PM</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 italic">
                Hours may vary seasonally. Please call ahead to confirm.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Wizard Market. All rights reserved. This is a design demo.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] hover:text-[#FFF] hover:border-[#F1D77A] hover:bg-[#2C183B] transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
