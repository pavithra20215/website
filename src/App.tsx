/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { BespokeModal } from './components/BespokeModal';
import { RingSizerModal } from './components/RingSizerModal';
import { CareGuideModal } from './components/CareGuideModal';
import { AtelierSection } from './components/AtelierSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { JewelProduct, CartItem } from './types';
import { Filter, SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';

export default function App() {
  // Local storage persisted state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aurelia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aurelia_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMetalFilter, setSelectedMetalFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers state
  const [selectedProduct, setSelectedProduct] = useState<JewelProduct | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBespokeOpen, setIsBespokeOpen] = useState(false);
  const [isRingSizerOpen, setIsRingSizerOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('aurelia_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aurelia_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Wishlist handler
  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Cart operations
  const handleAddToCart = (
    product: JewelProduct,
    metal: string,
    size?: string,
    inscription?: string
  ) => {
    const cartItemId = `${product.id}-${metal}-${size || 'default'}-${inscription || 'none'}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            cartItemId,
            product,
            quantity: 1,
            selectedMetal: metal,
            selectedSize: size,
            customInscription: inscription,
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleOrderComplete = () => {
    setCart([]);
  };

  // Filtered & Sorted products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory === 'wishlist') {
        if (!wishlist.includes(item.id)) return false;
      } else if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Metal filter
      if (selectedMetalFilter !== 'all') {
        const matchesMetal = item.metalOptions.some((m) =>
          m.toLowerCase().includes(selectedMetalFilter.toLowerCase())
        );
        if (!matchesMetal) return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesStone = item.stone.toLowerCase().includes(query);
        const matchesSubtitle = item.subtitle.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesStone && !matchesSubtitle && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'batch') return a.name.localeCompare(b.name);
      // 'featured'
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedMetalFilter, sortBy, searchQuery, wishlist]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col selection:bg-[#E8DFC8] selection:text-[#1C1917]">
      
      {/* 3-Zone Navigation Header */}
      <Navbar
        cart={cart}
        wishlist={wishlist}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBespoke={() => setIsBespokeOpen(true)}
        onOpenRingSizer={() => setIsRingSizerOpen(true)}
        onOpenCare={() => setIsCareOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Campaign Hero Showcase */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('collection-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onBespokeClick={() => setIsBespokeOpen(true)}
        />

        {/* Featured Collection Section */}
        <section id="collection-section" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Interactive Filter Bar */}
          <div className="space-y-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C7355] font-medium block mb-1">
                  Atelier Archive
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] font-normal">
                  The Hand-Forged Collection
                </h2>
                <p className="text-xs sm:text-sm text-[#78716C] mt-1 font-light">
                  Melted, hammered, and finished at our jeweler's bench. Available in small lunar batches.
                </p>
              </div>

              {/* Sorting & Metal Filter */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                {/* Metal filter selector */}
                <div className="flex items-center gap-1.5 bg-[#F3EDE2] px-3 py-1.5 border border-[#E6DFD5]">
                  <span className="text-[#78716C]">Metal:</span>
                  <select
                    value={selectedMetalFilter}
                    onChange={(e) => setSelectedMetalFilter(e.target.value)}
                    className="bg-transparent font-medium text-[#1C1917] outline-none cursor-pointer"
                  >
                    <option value="all">All Precious Alloys</option>
                    <option value="gold">Solid Yellow Gold</option>
                    <option value="silver">925 Heavy Silver</option>
                    <option value="rose">Warm Rose Gold</option>
                  </select>
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-1.5 bg-[#F3EDE2] px-3 py-1.5 border border-[#E6DFD5]">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#78716C]" />
                  <span className="text-[#78716C]">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent font-medium text-[#1C1917] outline-none cursor-pointer"
                  >
                    <option value="featured">Featured Archive</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="batch">Artisan Series</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Interactive Segmented Controls / Category Tabs (BUTTONS, NO PILLS) */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-[#E6DFD5] text-xs">
              {[
                { id: 'all', label: 'All Hand-Forged Jewels' },
                { id: 'necklaces', label: 'Pendants & Torcs' },
                { id: 'rings', label: 'Artisan Molten Rings' },
                { id: 'earrings', label: 'Baroque Pearl & Hoops' },
                { id: 'bracelets', label: 'Sculpted Cuffs' },
                { id: 'wishlist', label: `Saved Pieces (${wishlist.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE2]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Results Counter & Search Indicator */}
            <div className="flex items-center justify-between text-xs text-[#78716C]">
              <span>
                Displaying <strong className="font-mono text-[#1C1917]">{filteredProducts.length}</strong> handcrafted pieces
              </span>
              {(searchQuery || selectedCategory !== 'all' || selectedMetalFilter !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedMetalFilter('all');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 text-[#8C7355] hover:text-[#1C1917] underline underline-offset-2"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Grid: 3-column desktop baseline */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onQuickView={(p) => setSelectedProduct(p)}
                  onQuickAdd={(p) => handleAddToCart(p, p.metalOptions[0], p.sizes?.[0])}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center bg-[#F3EDE2]/40 border border-[#E6DFD5] p-8 space-y-4 max-w-md mx-auto">
              <Sparkles className="w-8 h-8 text-[#8C7355] mx-auto stroke-[1.5]" />
              <h3 className="font-serif text-xl text-[#1C1917]">
                No handcrafted pieces found
              </h3>
              <p className="text-xs text-[#78716C] leading-relaxed">
                {selectedCategory === 'wishlist'
                  ? 'You have not saved any pieces to your atelier wishlist yet.'
                  : 'No pieces currently match your selected filters. Explore our full archive or commission a custom bespoke piece.'}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedMetalFilter('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#292524] transition-colors"
              >
                View Complete Archive
              </button>
            </div>
          )}

        </section>

        {/* The Atelier & Craftsmanship Section */}
        <AtelierSection />

        {/* Verified Patron Reflections / Reviews */}
        <ReviewsSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenBespoke={() => setIsBespokeOpen(true)}
        onOpenRingSizer={() => setIsRingSizerOpen(true)}
        onOpenCare={() => setIsCareOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('collection-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modals & Slide-over Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenRingSizer={() => setIsRingSizerOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        onExplore={() => {
          const el = document.getElementById('collection-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderComplete={handleOrderComplete}
      />

      <BespokeModal
        isOpen={isBespokeOpen}
        onClose={() => setIsBespokeOpen(false)}
      />

      <RingSizerModal
        isOpen={isRingSizerOpen}
        onClose={() => setIsRingSizerOpen(false)}
      />

      <CareGuideModal
        isOpen={isCareOpen}
        onClose={() => setIsCareOpen(false)}
      />

    </div>
  );
}
