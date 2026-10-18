import { STORE_INTERIOR_IMAGE } from '../data/storeData';
import { Sparkles, Users, Gift, Scroll } from 'lucide-react';

export function AboutStory() {
  const highlights = [
    {
      icon: Scroll,
      number: '1,000+',
      label: 'Curated Magical Items',
      desc: 'Wands, grimoires, apparel, and apothecary treasures hand-selected for collectors.',
    },
    {
      icon: Gift,
      number: '100%',
      label: 'Gifts for Every Fan',
      desc: 'From thoughtful tokens to heirloom replica artifacts for enthusiasts of all ages.',
    },
    {
      icon: Users,
      number: '5★ Rated',
      label: 'Friendly Wizards on Staff',
      desc: 'Knowledgeable, passionate guides who love talking lore and finding the perfect match.',
    },
  ];

  return (
    <section id="story" className="py-20 lg:py-28 parchment-pattern text-[#1B1B22] relative overflow-hidden">
      {/* Subtle border transitions */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#11141D] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with offset gold frame */}
          <div className="lg:col-span-6 relative">
            {/* Offset decorative gold frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37] rounded-3xl -z-0 transform -rotate-1 hidden sm:block" />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-[#0E1117]">
              <img
                src={STORE_INTERIOR_IMAGE}
                alt="Inside Wizard Market lower level sanctuary on Dundas Street West"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#0E1117]/90 backdrop-blur-md border border-[#D4AF37]/50 rounded-2xl p-4 shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2C183B] border border-[#D4AF37] flex items-center justify-center text-[#F1D77A] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-cinzel font-bold text-[#F1D77A] tracking-wider uppercase block">
                    Since Day One
                  </span>
                  <span className="text-sm font-semibold text-[#F9F8F6]">
                    Pure Magic & Community
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold tracking-widest text-[#7A1E2E] uppercase mb-3">
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1B1B22] tracking-tight leading-tight">
              More Than a Shop — A Magical Destination
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                Tucked discreetly into the lower level of 346B Dundas Street West, steps from the Art Gallery of Ontario, Wizard Market was founded as a cozy sanctuary for fans of the fantastical, the historical, and the extraordinary.
              </p>
              <p>
                As you descend into our shop, the clamor of the downtown city street fades, replaced by soft lantern light, the aroma of beeswax and old paper, and shelves stacked with heirloom-grade wands, wax seals, illuminated grimoires, and house regalia. Our staff are genuine storytellers dedicated to helping you discover meaningful keepsakes.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-black/10 flex items-center gap-4 text-sm font-cinzel text-slate-800">
              <span className="font-semibold text-[#7A1E2E]">Welcoming Fans of All Ages</span>
              <span className="text-[#D4AF37] font-sans">✦</span>
              <span>Authentic Curations</span>
              <span className="text-[#D4AF37] font-sans">✦</span>
              <span>Toronto Local</span>
            </div>
          </div>
        </div>

        {/* 3 Animated Counters / Features */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2C183B] text-[#F1D77A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-cinzel text-[#1B1B22]">
                  {item.number}
                </div>
                <h3 className="mt-2 text-base font-semibold font-cinzel text-[#7A1E2E]">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
