import { Sparkles, Shield, Gift, Sparkle } from 'lucide-react';

export function WhyVisit() {
  const cards = [
    {
      icon: Shield,
      title: 'Curated, Authentic Items',
      description:
        'Every wand, journal, and collector item is vetted for tactile quality, solid materials, and authentic fantasy detail. No cheap plastic trinkets.',
    },
    {
      icon: Gift,
      title: 'Perfect Gift Ideas',
      description:
        'Whether for birthdays, holidays, or personal collections, our team specializes in custom gift packaging, wax-sealed tokens, and thoughtful recommendations.',
    },
    {
      icon: Sparkles,
      title: 'Immersive Store Atmosphere',
      description:
        'Step out of the city hustle and into our candle-lit lower-level den. Ambient acoustic melodies and enchanted decor make browsing an experience in itself.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#231330] via-[#2C183B] to-[#1E1029] text-[#F9F8F6] relative border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest text-[#F1D77A] uppercase mb-3">
            <Sparkle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Wizard Market Difference</span>
            <Sparkle className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel tracking-tight text-[#F9F8F6]">
            Why Visit Us in Toronto
          </h2>
          <p className="mt-4 text-base text-purple-200/80">
            A specialized boutique designed from top to bottom for wonder, connection, and craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 bg-[#1A0E23]/80 border border-[#D4AF37]/30 shadow-xl hover:border-[#F1D77A]/70 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0E1117] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:text-[#F1D77A] transition-all duration-300 mb-6 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-cinzel text-[#F9F8F6] group-hover:text-[#F1D77A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center gap-2 text-xs text-[#D4AF37] font-cinzel">
                  <span>In-Person Experience</span>
                  <span className="text-[10px] font-sans">✦</span>
                  <span>Lower Level Haven</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
