import { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { BESTSELLERS } from '../data/storeData';
import { Product } from '../types';

interface BestsellersShowcaseProps {
  onQuickPreview: (product: Product) => void;
  selectedFilter: string;
  onFilterChange: (category: string) => void;
}

export function BestsellersShowcase({
  onQuickPreview,
  selectedFilter,
  onFilterChange,
}: BestsellersShowcaseProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const filterOptions = [
    'All Items',
    'Wands & Collectibles',
    'Apparel & House Gear',
    'Books, Stationery & Seals',
    'Home Decor & Gifts',
  ];

  const filteredProducts =
    selectedFilter === 'All Items'
      ? BESTSELLERS
      : BESTSELLERS.filter((p) => p.category === selectedFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = 320;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="bestsellers" className="py-20 lg:py-28 bg-[#11141D] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] uppercase mb-2">
              <span>Boutique Favorites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#F9F8F6] tracking-tight">
              Bestsellers in Store Now
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Authentic artifacts and crafted pieces in high demand. Available for purchase in person at our Dundas Street shop.
            </p>
          </div>

          {/* Slider navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#D4AF37]/40 bg-[#0E1117] text-[#D4AF37] hover:border-[#F1D77A] hover:text-[#FFF] hover:bg-[#2C183B] flex items-center justify-center transition-all cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#D4AF37]/40 bg-[#0E1117] text-[#D4AF37] hover:border-[#F1D77A] hover:text-[#FFF] hover:bg-[#2C183B] flex items-center justify-center transition-all cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onFilterChange(opt)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-cinzel whitespace-nowrap shrink-0 transition-all cursor-pointer border ${
                selectedFilter === opt
                  ? 'bg-[#2C183B] text-[#F1D77A] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#0E1117]/60 text-slate-300 border-white/10 hover:border-[#D4AF37]/40 hover:text-[#F9F8F6]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Horizontal Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
          tabIndex={0}
          aria-label="Bestsellers product showcase"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-[#D4AF37]/25 group"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle top gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-black/20" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      In Store Now
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-slate-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      CAD
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[11px] font-cinzel uppercase tracking-wider text-[#D4AF37]">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold font-cinzel text-[#F9F8F6] group-hover:text-[#F1D77A] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Star Rating */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs">
                    <div className="flex items-center text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="font-semibold text-slate-200">5.0</span>
                    <span className="text-slate-400 text-[11px]">({product.reviewCount})</span>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">Price</span>
                    <span className="text-lg font-bold font-mono tabular-nums text-[#F1D77A]">
                      ${product.priceCad.toFixed(2)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onQuickPreview(product)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold font-cinzel tracking-wider text-[#0E1117] bg-[#D4AF37] hover:bg-[#F1D77A] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
