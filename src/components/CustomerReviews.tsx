import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data/storeData';

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#11141D] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with 5.0 Star score */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C183B]/80 border border-[#D4AF37]/35 text-[#F1D77A] text-xs font-cinzel font-semibold tracking-wider mb-4">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span>5.0 Rated by our visitors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#F9F8F6] tracking-tight">
            Whispers from Fellow Travelers
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Real stories from visitors who stepped into our underground sanctuary on Dundas Street.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-[#D4AF37]/25 flex flex-col justify-between shadow-xl relative group"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37]/15 pointer-events-none group-hover:text-[#D4AF37]/25 transition-colors" />

              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold font-cinzel text-[#F9F8F6]">
                    {review.author}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{review.role}</p>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
