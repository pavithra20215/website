import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, Sparkles, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  wishlist: string[];
  onOpenCart: () => void;
  onOpenBespoke: () => void;
  onOpenRingSizer: () => void;
  onOpenCare: () => void;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  wishlist,
  onOpenCart,
  onOpenBespoke,
  onOpenRingSizer,
  onOpenCare,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DFD5]/80 transition-all">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-1.5 px-4 text-center tracking-widest uppercase font-light">
        <span className="opacity-90">Small-Batch Pour No. 14 · Complimentary Worldwide Insured Delivery over $350</span>
      </div>

      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 nav links) — Zone 3 (Primary Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#1C1917] font-normal hover:opacity-80 transition-opacity shrink-0"
        >
          AURELIA
        </a>

        {/* Zone 2: 4–6 nav links, single-line text */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-[#44403C]">
          <button
            onClick={() => {
              onSelectCategory('all');
              scrollToSection('collection-section');
            }}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Collection
          </button>
          <button
            onClick={() => scrollToSection('atelier-story')}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            The Atelier
          </button>
          <button
            onClick={onOpenBespoke}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A358]" />
            Bespoke Studio
          </button>
          <button
            onClick={onOpenRingSizer}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Ring Sizer
          </button>
          <button
            onClick={onOpenCare}
            className="hover:text-[#1C1917] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Care & Hallmarks
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Search, Wishlist, Cart Drawer) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Search Bar or Toggle */}
          <div className="relative flex items-center">
            {showSearchInput ? (
              <div className="flex items-center bg-[#F3EDE2] rounded-full px-3 py-1.5 border border-[#E6DFD5] animate-in fade-in duration-200">
                <Search className="w-3.5 h-3.5 text-[#78716C] mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search gems, gold, rings..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="bg-transparent text-xs text-[#1C1917] placeholder:text-[#A8A29E] outline-none w-36 sm:w-48"
                />
                <button
                  onClick={() => {
                    setShowSearchInput(false);
                    onSearchChange('');
                  }}
                  className="text-xs text-[#78716C] hover:text-[#1C1917] ml-1 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-[#44403C] hover:text-[#1C1917] transition-colors"
                title="Search jewels"
                aria-label="Search jewels"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Wishlist Indicator */}
          <button
            onClick={() => {
              onSelectCategory('wishlist');
              scrollToSection('collection-section');
            }}
            className="relative p-2 text-[#44403C] hover:text-[#1C1917] transition-colors"
            title="Saved jewels"
            aria-label="Wishlist"
          >
            <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-[#C8A358] text-[#C8A358]' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 bg-[#1C1917] text-[#FAF8F5] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Atelier Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all shadow-sm active:scale-95"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Bag</span>
            <span className="font-mono tabular-nums text-[11px] bg-[#FAF8F5]/20 px-1.5 py-0.5 rounded-full">
              {totalCartCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#44403C] hover:text-[#1C1917]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E6DFD5] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#44403C]">
            <button
              onClick={() => handleNavClick(() => {
                onSelectCategory('all');
                scrollToSection('collection-section');
              })}
              className="text-left py-2 border-b border-[#F3EDE2]"
            >
              Explore Collection
            </button>
            <button
              onClick={() => handleNavClick(() => scrollToSection('atelier-story'))}
              className="text-left py-2 border-b border-[#F3EDE2]"
            >
              The Atelier & Philosophy
            </button>
            <button
              onClick={() => handleNavClick(onOpenBespoke)}
              className="text-left py-2 border-b border-[#F3EDE2] flex items-center justify-between text-[#8C7355]"
            >
              <span>Custom Bespoke Studio</span>
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNavClick(onOpenRingSizer)}
              className="text-left py-2 border-b border-[#F3EDE2]"
            >
              Interactive Ring Sizer
            </button>
            <button
              onClick={() => handleNavClick(onOpenCare)}
              className="text-left py-2"
            >
              Jewel Care & UK Hallmarks
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
