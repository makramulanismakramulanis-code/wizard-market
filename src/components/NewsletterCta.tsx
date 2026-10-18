import { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export function NewsletterCta() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-16 bg-[#0E1117] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#2C183B] via-[#1E1129] to-[#0E1117] border border-[#D4AF37]/35 shadow-2xl relative overflow-hidden">
          {/* Subtle gold radial shimmer */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#0E1117] border border-[#D4AF37]/40 text-[#F1D77A] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="w-6 h-6 text-[#D4AF37]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-[#F9F8F6] tracking-tight">
              Join the Inner Circle: Magical Updates & Exclusive Drops
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Receive invitations to after-hours collector gatherings, artisan wand unveilings, and seasonal seasonal store releases. No spam — only pure enchantment.
            </p>

            {subscribed ? (
              <div className="mt-6 p-4 rounded-xl bg-[#0E1117]/80 border border-[#D4AF37]/50 inline-flex items-center gap-2.5 text-sm text-[#F1D77A] animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>You are now inscribed in the Inner Circle registry. Welcome!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 max-w-md mx-auto" noValidate>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0E1117] border text-sm text-[#F9F8F6] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                        error ? 'border-rose-500' : 'border-[#D4AF37]/40'
                      }`}
                      aria-label="Email for newsletter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider font-cinzel gold-gradient-btn rounded-xl whitespace-nowrap shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#0E1117]" />
                    <span>Subscribe</span>
                  </button>
                </div>
                {error && <p className="mt-2 text-xs text-rose-400">{error}</p>}
                <p className="mt-3 text-[11px] text-slate-400">
                  We respect your privacy. Unsubscribe at any time with a single click.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
