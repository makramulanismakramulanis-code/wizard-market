export function MarqueeStrip() {
  const items = [
    'Handcrafted Wands',
    'Magical Collectibles',
    'House Apparel & Cloaks',
    'Spellbound Books & Grimoires',
    'Brass Wax Seals',
    'Bioluminescent Potions',
    'Enchanted Gifts',
    'Alchemical Home Decor',
  ];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-[#2C183B] via-[#3B1F50] to-[#2C183B] border-y border-[#D4AF37]/30 py-3.5"
      aria-label="Store collections marquee ticker"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Double array to ensure seamless looping */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <span
            key={idx}
            className="mx-4 sm:mx-6 inline-flex items-center text-xs sm:text-sm font-cinzel font-semibold tracking-wider text-[#F1D77A]/95 hover:text-[#FFF] transition-colors"
          >
            <span className="font-cinzel">{text}</span>
            <span className="ml-4 sm:ml-6 text-[#D4AF37] opacity-70 text-xs font-sans">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
