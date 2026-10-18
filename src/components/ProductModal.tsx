import { useEffect } from 'react';
import { X, Star, CheckCircle, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAskAvailability: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAskAvailability }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#14121E] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0E1117]/80 border border-[#D4AF37]/30 text-slate-300 hover:text-[#FFF] hover:border-[#D4AF37] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-black/50 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14121E] via-transparent to-transparent md:hidden" />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/85 border border-emerald-500/50 text-emerald-300 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                In Store Now
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-cinzel tracking-wider uppercase text-[#D4AF37] block">
                {product.category}
              </span>
              <h3
                id="modal-product-title"
                className="mt-1 text-2xl font-bold font-cinzel text-[#F9F8F6]"
              >
                {product.name}
              </h3>

              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex items-center text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-200">5.0 Star Rating</span>
                <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
              </div>

              <div className="mt-4">
                <span className="text-xs text-slate-400 block">In-Store Price</span>
                <span className="text-2xl font-bold font-mono tabular-nums text-[#F1D77A]">
                  ${product.priceCad.toFixed(2)}{' '}
                  <span className="text-xs font-sans text-slate-400">CAD</span>
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Specifications / Highlights */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Item Details & Craft
                </h4>
                <div className="grid grid-cols-1 gap-1.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-5 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onAskAvailability(product)}
                className="w-full py-3 px-4 text-xs sm:text-sm font-semibold tracking-wider uppercase font-cinzel gold-gradient-btn rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#0E1117]" />
                Ask About Availability
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Visit 346B Dundas St W (Lower Level) for direct in-person purchase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
