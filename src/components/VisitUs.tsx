import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { calculateStoreStatus, StoreStatus } from '../utils/storeHours';
import { InquiryData, Product } from '../types';

interface VisitUsProps {
  selectedProductForInquiry: Product | null;
  onClearSelectedProduct: () => void;
}

export function VisitUs({
  selectedProductForInquiry,
  onClearSelectedProduct,
}: VisitUsProps) {
  const [storeStatus, setStoreStatus] = useState<StoreStatus>({
    isOpen: false,
    statusText: 'Checking...',
    detailText: '',
    nextOpenDayText: '',
  });

  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compute live store hours status
  useEffect(() => {
    setStoreStatus(calculateStoreStatus(new Date()));
    const timer = setInterval(() => {
      setStoreStatus(calculateStoreStatus(new Date()));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Update product interest if selected from modal
  useEffect(() => {
    if (selectedProductForInquiry) {
      setFormData((prev) => ({
        ...prev,
        productInterest: selectedProductForInquiry.name,
        message: prev.message
          ? prev.message
          : `Hello Wizard Market team, I would like to inquire about the in-store availability of the ${selectedProductForInquiry.name} ($${selectedProductForInquiry.priceCad.toFixed(2)} CAD).`,
      }));
    }
  }, [selectedProductForInquiry]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or moniker.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please let us know how we can assist your magical journey.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating graceful submission dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      productInterest: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    onClearSelectedProduct();
  };

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=346B+Dundas+St+W,+Lower+Level,+Toronto,+ON+M5T+1G5';

  return (
    <section id="visit" className="py-20 lg:py-28 bg-[#0E1117] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            <span>Downtown Toronto Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#F9F8F6] tracking-tight">
            Visit Our Sanctuary
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Located in the artistic core of Toronto on Dundas Street West. Descend to the lower level and enter a realm of wonder.
          </p>
        </div>

        {/* Split Layout: Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Details & Live Status (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              {/* Live Status Badge */}
              <div className="p-4 rounded-xl bg-[#1A1526] border border-[#D4AF37]/35 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        storeStatus.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
                      }`}
                    />
                    <span className="text-xs font-cinzel font-bold tracking-wider uppercase text-slate-300">
                      Store Status:
                    </span>
                    <span
                      className={`text-xs font-bold font-cinzel tracking-wider uppercase ${
                        storeStatus.isOpen ? 'text-emerald-400' : 'text-amber-300'
                      }`}
                    >
                      {storeStatus.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 pl-4.5">
                    {storeStatus.detailText}
                  </p>
                </div>

                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C183B] border border-[#D4AF37]/40 flex items-center justify-center text-[#F1D77A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-cinzel font-bold text-[#F1D77A] uppercase tracking-wider">
                    Our Address
                  </h3>
                  <p className="text-sm font-medium text-[#F9F8F6] mt-1 leading-snug">
                    346B Dundas St W, Lower Level
                  </p>
                  <p className="text-xs text-slate-400">Toronto, ON M5T 1G5, Canada</p>
                  <p className="text-[11px] text-[#D4AF37] mt-1">
                    (Adjacent to the Art Gallery of Ontario · Look for the gold lantern)
                  </p>
                </div>
              </div>

              {/* Phone (Click-to-call) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C183B] border border-[#D4AF37]/40 flex items-center justify-center text-[#F1D77A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-cinzel font-bold text-[#F1D77A] uppercase tracking-wider">
                    Telephone Inquiry
                  </h3>
                  <a
                    href="tel:+14165195477"
                    className="text-base font-semibold text-[#F9F8F6] hover:text-[#F1D77A] transition-colors mt-1 inline-block"
                  >
                    +1 (416) 519-5477
                  </a>
                  <p className="text-xs text-slate-400">Available during shop hours</p>
                </div>
              </div>

              {/* Weekly Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C183B] border border-[#D4AF37]/40 flex items-center justify-center text-[#F1D77A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-cinzel font-bold text-[#F1D77A] uppercase tracking-wider">
                    Boutique Hours
                  </h3>
                  <div className="mt-2 space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between py-0.5 border-b border-white/5">
                      <span className="font-medium text-[#F9F8F6]">Wednesday</span>
                      <span className="font-mono text-[#F1D77A]">12:00 PM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-white/5">
                      <span className="font-medium text-[#F9F8F6]">Friday</span>
                      <span className="font-mono text-[#F1D77A]">12:00 PM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-white/5">
                      <span className="font-medium text-[#F9F8F6]">Saturday</span>
                      <span className="font-mono text-[#F1D77A]">12:00 PM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-0.5 text-slate-400">
                      <span>Mon, Tue, Thu, Sun</span>
                      <span className="italic">Closed for curation</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 italic">
                    Hours may vary seasonally. Please call to confirm before traveling.
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold tracking-wider uppercase font-cinzel gold-gradient-btn rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
              >
                <Navigation className="w-4 h-4 text-[#0E1117]" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right Card: Interactive Map (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative min-h-[380px] lg:min-h-[460px] bg-[#16131F] flex flex-col">
            <iframe
              title="Wizard Market Location Map"
              src="https://maps.google.com/maps?q=346B%20Dundas%20St%20W,%20Toronto,%20ON%20M5T%201G5&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0 filter contrast-[1.05] brightness-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Stylized Floating Info Card over map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0E1117]/95 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-3.5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#F1D77A]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Wizard Market — Lower Level</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                Steps from Dundas & McCaul. Easy transit via 505 Dundas streetcar & St. Patrick subway station.
              </p>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section Below */}
        <div id="inquiry-form" className="mt-16 lg:mt-20">
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/35 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest text-[#D4AF37] uppercase mb-2">
                <span>Direct In-Store Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-[#F9F8F6]">
                Ask About Availability or Special Inquiries
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Wondering if a specific wand, grimoire, or potion lamp is waiting on our shelves? Send us a missive.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-[#2C183B]/80 rounded-2xl border border-[#D4AF37]/50 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#0E1117] border-2 border-[#D4AF37] flex items-center justify-center text-[#F1D77A] mx-auto mb-4 shadow-lg shadow-[#D4AF37]/20">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="text-2xl font-bold font-cinzel text-[#F9F8F6] flex items-center justify-center gap-2">
                  <span>Your owl is on its way</span>
                  <span className="font-sans text-[#F1D77A]">✦</span>
                </h4>
                <p className="mt-3 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#F1D77A] font-semibold">{formData.name}</span>. Our friendly wizards have received your missive and will inspect our apothecary shelves before replying to <span className="text-white underline">{formData.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="mt-6 px-6 py-2.5 rounded-xl text-xs font-semibold font-cinzel gold-outline-btn cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wider mb-2"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alistair Thorne"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0E1117]/80 border text-sm text-[#F9F8F6] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                        errors.name ? 'border-rose-500' : 'border-[#D4AF37]/30'
                      }`}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wider mb-2"
                    >
                      Owl / Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alistair@spells.ca"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0E1117]/80 border text-sm text-[#F9F8F6] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                        errors.email ? 'border-rose-500' : 'border-[#D4AF37]/30'
                      }`}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone (Optional) */}
                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-xs font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (416) 555-0199"
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1117]/80 border border-[#D4AF37]/30 text-sm text-[#F9F8F6] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Product of Interest */}
                  <div>
                    <label
                      htmlFor="inquiry-product"
                      className="block text-xs font-cinzel font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Item of Interest
                    </label>
                    <input
                      id="inquiry-product"
                      type="text"
                      value={formData.productInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, productInterest: e.target.value })
                      }
                      placeholder="e.g. Elder Oak Spell Wand"
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1117]/80 border border-[#D4AF37]/30 text-sm text-[#F9F8F6] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-cinzel font-semibold text-[#D4AF37] uppercase tracking-wider mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell us about the item or visit you are planning..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0E1117]/80 border text-sm text-[#F9F8F6] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                      errors.message ? 'border-rose-500' : 'border-[#D4AF37]/30'
                    }`}
                    aria-required="true"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase font-cinzel gold-gradient-btn rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin text-[#0E1117]" />
                        Dispatching Missive...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 text-[#0E1117]" />
                        <span>Ask About Availability</span>
                        <span className="font-sans text-xs">✦</span>
                      </span>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-3">
                    We typically answer customer owls within 24 hours during shop operating days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
