import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/storeData';
import { Category } from '../types';

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export function FeaturedCategories({ onSelectCategory }: FeaturedCategoriesProps) {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#0E1117] relative">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2C183B]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            <span>Curated Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#F9F8F6] tracking-tight">
            Treasures of the Realm
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Hand-selected magical artifacts, artisan tools, and apparel awaiting your discovery in our Toronto sanctuary.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 opacity-60">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-sans">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        {/* 4 Cards (2x2 on desktop/tablet, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORIES.map((cat: Category) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/20 bg-[#16131F] transition-all duration-500 hover:border-[#F1D77A]/70 hover:shadow-[0_0_35px_rgba(212,175,55,0.22)] flex flex-col min-h-[380px] sm:min-h-[420px]"
            >
              {/* Full-bleed background image with 1.08x zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Dark gradient overlay for pristine contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/65 to-black/25 transition-opacity duration-300 group-hover:via-[#0E1117]/55" />
              </div>

              {/* Sparkle badge on hover */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="text-xs font-medium tracking-wider text-[#F1D77A]/80 bg-[#0E1117]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  {cat.itemsCount}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#2C183B]/80 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-4 h-4 text-[#F1D77A]" />
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="relative z-10 mt-auto p-6 sm:p-8 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#F9F8F6] group-hover:text-[#F1D77A] transition-colors flex items-center gap-2">
                  <span>{cat.name}</span>
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-300 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#D4AF37] group-hover:text-[#F1D77A]">
                  <span className="flex items-center gap-1.5">
                    Browse Collection
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-sans group-hover:text-slate-300">
                    In Stock at Lower Level
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
