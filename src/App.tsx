/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { FeaturedCategories } from './components/FeaturedCategories';
import { BestsellersShowcase } from './components/BestsellersShowcase';
import { ProductModal } from './components/ProductModal';
import { AboutStory } from './components/AboutStory';
import { WhyVisit } from './components/WhyVisit';
import { VisitUs } from './components/VisitUs';
import { CustomerReviews } from './components/CustomerReviews';
import { NewsletterCta } from './components/NewsletterCta';
import { Footer } from './components/Footer';
import { SparkleCursor } from './components/SparkleCursor';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [bestsellersFilter, setBestsellersFilter] = useState('All Items');

  const scrollToSection = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });
    }
  };

  const handleCategorySelect = (categoryName: string) => {
    setBestsellersFilter(categoryName);
    scrollToSection('bestsellers');
  };

  const handleAskAvailability = (product: Product) => {
    setSelectedProduct(null);
    setInquiryProduct(product);
    setTimeout(() => {
      scrollToSection('inquiry-form', 100);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#0E1117] text-[#F9F8F6] selection:bg-[#D4AF37]/30 selection:text-[#F1D77A] flex flex-col font-sans">
      {/* Subtle Desktop Cursor Sparkle */}
      <SparkleCursor />

      {/* Sticky Top Navigation */}
      <Navbar onPlanVisit={() => scrollToSection('visit')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A & B. Hero */}
        <Hero
          onExplore={() => scrollToSection('categories')}
          onVisit={() => scrollToSection('visit')}
        />

        {/* C. Marquee Strip */}
        <MarqueeStrip />

        {/* D. Featured Categories */}
        <FeaturedCategories onSelectCategory={handleCategorySelect} />

        {/* E. Bestsellers Showcase */}
        <BestsellersShowcase
          onQuickPreview={(product) => setSelectedProduct(product)}
          selectedFilter={bestsellersFilter}
          onFilterChange={(cat) => setBestsellersFilter(cat)}
        />

        {/* F. About / The Experience */}
        <AboutStory />

        {/* G. Why Visit Us */}
        <WhyVisit />

        {/* H. Visit Us, Map & Inquiry Form */}
        <VisitUs
          selectedProductForInquiry={inquiryProduct}
          onClearSelectedProduct={() => setInquiryProduct(null)}
        />

        {/* I. Customer Reviews */}
        <CustomerReviews />

        {/* J. Newsletter CTA Banner */}
        <NewsletterCta />
      </main>

      {/* K. Footer */}
      <Footer />

      {/* Quick Preview Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAskAvailability={handleAskAvailability}
      />
    </div>
  );
}
