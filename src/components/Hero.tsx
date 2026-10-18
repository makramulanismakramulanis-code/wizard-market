import { Sparkles, MapPin, Clock, Star, ChevronDown, Compass, Sparkle } from 'lucide-react';
import { SparkleCanvas } from './SparkleCanvas';
import { HERO_IMAGE } from '../data/storeData';

interface HeroProps {
  onExplore: () => void;
  onVisit: () => void;
}

export function Hero({ onExplore, onVisit }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0E1117]">
      {/* Background image with atmospheric scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Atmospheric interior of Wizard Market in Toronto"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep moody gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1117]/85 via-[#0E1117]/75 to-[#0E1117]" />
        <div className="absolute inset-0 candle-glow pointer-events-none" />
      </div>

      {/* Floating Canvas Sparkles */}
      <SparkleCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C183B]/80 border border-[#D4AF37]/35 text-[#F1D77A] text-xs font-cinzel font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-black/40">
          <Sparkle className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          <span>Toronto&apos;s Enchanted Shop</span>
          <Sparkle className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-cinzel tracking-tight text-[#F9F8F6] leading-[1.15] max-w-4xl text-balance">
          Step into Toronto&apos;s Premier Realm of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1D77A] via-[#D4AF37] to-[#F1D77A] drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
            Magic & Wonder
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed text-balance">
          Discover handcrafted wands, rare books, house gear, illuminated grimoires, and enchanting artifacts tucked inside our atmospheric lower-level boutique.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider uppercase font-cinzel gold-gradient-btn rounded-xl flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
          >
            <Sparkles className="w-4 h-4 text-[#0E1117]" />
            <span>Explore Collections</span>
          </button>

          <button
            type="button"
            onClick={onVisit}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wider uppercase font-cinzel gold-outline-btn rounded-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#F1D77A]" />
            <span>Visit the Store</span>
          </button>
        </div>

        {/* Ornamental divider */}
        <div className="mt-12 flex items-center justify-center gap-3 w-full max-w-xs opacity-60">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs font-sans">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="glass-card rounded-2xl py-4 px-6 border border-[#D4AF37]/25 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20 text-center text-xs sm:text-sm text-slate-200">
            <div className="flex items-center justify-center gap-2.5 py-1 md:py-0">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-medium text-[#F9F8F6]">346B Dundas St W, Lower Level</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1 md:py-0">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Wed, Fri & Sat · 12:00 PM – 6:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1 md:py-0">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="font-medium text-[#F9F8F6]">5-Star Rated by Local Fans</span>
            </div>
          </div>
        </div>

        {/* Animated scroll down indicator */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={onExplore}
            className="flex flex-col items-center text-xs font-cinzel text-slate-400 hover:text-[#F1D77A] transition-colors focus:outline-none group cursor-pointer"
            aria-label="Scroll down to featured categories"
          >
            <span className="tracking-widest uppercase text-[10px] text-slate-400 group-hover:text-[#F1D77A] transition-colors mb-1">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
