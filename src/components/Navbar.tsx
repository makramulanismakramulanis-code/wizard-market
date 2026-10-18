import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Wand2, Compass } from 'lucide-react';

interface NavbarProps {
  onPlanVisit: () => void;
}

export function Navbar({ onPlanVisit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#categories' },
    { name: 'Bestsellers', href: '#bestsellers' },
    { name: 'Our Story', href: '#story' },
    { name: 'Visit Us', href: '#visit' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1117]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-xl shadow-black/40 py-3.5'
            : 'bg-gradient-to-b from-[#0E1117]/95 via-[#0E1117]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-wider font-cinzel text-[#F1D77A] group whitespace-nowrap shrink-0"
            aria-label="Wizard Market - Home"
          >
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#2C183B]/80 text-[#D4AF37] group-hover:scale-110 group-hover:border-[#F1D77A] transition-all duration-200">
              <Wand2 className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <span className="text-[#F9F8F6] group-hover:text-[#F1D77A] transition-colors">
              Wizard <span className="text-[#D4AF37]">Market</span>
            </span>
          </a>

          {/* Zone 2: 4-5 concise nav links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F9F8F6]/85"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#F1D77A] transition-colors relative py-1 text-sm tracking-wide whitespace-nowrap shrink-0 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onPlanVisit}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase font-cinzel gold-gradient-btn rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              Plan Your Visit
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#F9F8F6] hover:text-[#D4AF37] hover:bg-[#2C183B]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#0E1117] border-l border-[#D4AF37]/30 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-2 text-lg font-cinzel font-bold text-[#F1D77A]">
                <Wand2 className="w-5 h-5 text-[#D4AF37]" />
                <span>Wizard Market</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-[#F1D77A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Close menu drawer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-cinzel text-[#F9F8F6] hover:text-[#F1D77A] hover:bg-[#2C183B]/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#D4AF37]/20 space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanVisit();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider font-cinzel gold-gradient-btn rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              Plan Your Visit
            </button>
            <p className="text-xs text-center text-slate-400">
              346B Dundas St W, Toronto · Wed, Fri, Sat
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
