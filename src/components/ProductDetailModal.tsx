import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles, Ruler, Flame, Heart, Info } from 'lucide-react';
import { JewelProduct } from '../types';

interface ProductDetailModalProps {
  product: JewelProduct | null;
  onClose: () => void;
  onAddToCart: (product: JewelProduct, metal: string, size?: string, inscription?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onOpenRingSizer: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onOpenRingSizer,
}) => {
  if (!product) return null;

  const [selectedMetal, setSelectedMetal] = useState<string>(product.metalOptions[0]);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : ''
  );
  const [customInscription, setCustomInscription] = useState<string>('');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState<'craft' | 'origin' | 'dimensions'>('craft');

  const handleAddToCart = () => {
    onAddToCart(product, selectedMetal, selectedSize, customInscription);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-5xl border border-[#E6DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#FAF8F5] shrink-0">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#78716C]">
            <span>Atelier Archive</span>
            <span aria-hidden="true">·</span>
            <span className="font-serif italic text-[#1C1917] capitalize">{product.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors"
              title="Save to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C8A358] text-[#C8A358]' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Contiguous Purchase Module */}
        <div className="overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Gallery (6 cols) */}
          <div className="lg:col-span-6 bg-[#F3EDE2] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E6DFD5]">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#FAF8F5] shadow-sm border border-[#E6DFD5]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 border border-[#E6DFD5] text-[11px] text-[#44403C]">
                {selectedMetal}
              </div>
            </div>

            {/* Tactile Craft Notes below image */}
            <div className="mt-6 pt-4 border-t border-[#E6DFD5]/80 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span className="uppercase tracking-wider">Bench Assay Hallmark</span>
                <span className="font-serif italic text-[#1C1917]">{product.hallmark}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span className="uppercase tracking-wider">Mineral Setting</span>
                <span className="font-serif italic text-[#1C1917]">{product.stone}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span className="uppercase tracking-wider">Edition Record</span>
                <span className="text-[#8C7355] font-medium">{product.edition}</span>
              </div>
            </div>
          </div>

          {/* Right Contiguous Purchase Module (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5] space-y-6">
            
            <div className="space-y-4">
              {/* Category & Status */}
              <div className="flex items-center justify-between text-xs text-[#8C7355] uppercase tracking-widest">
                <span>{product.category}</span>
                <span className="flex items-center gap-1 text-[#1C1917] normal-case tracking-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                  In Small-Batch Production
                </span>
              </div>

              {/* Title & Price */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal leading-tight">
                  {product.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-2xl font-serif text-[#1C1917] tabular-nums font-medium">
                    ${product.price}
                  </span>
                  <span className="text-xs text-[#78716C] tracking-wide">
                    USD · Includes certified gemstone provenance card
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#57534E] leading-relaxed font-light">
                {product.description}
              </p>

              {/* Metal Alloy Selector */}
              <div className="pt-2 border-t border-[#E6DFD5]">
                <label className="block text-xs uppercase tracking-wider text-[#44403C] font-medium mb-2.5">
                  Select Precious Metal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {product.metalOptions.map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      onClick={() => setSelectedMetal(metal)}
                      className={`px-3 py-2 text-xs border text-left transition-all ${
                        selectedMetal === metal
                          ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                          : 'border-[#E6DFD5] hover:border-[#A8A29E] text-[#57534E]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{metal}</span>
                        {selectedMetal === metal && <Check className="w-3 h-3 text-[#1C1917] shrink-0 ml-1" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size / Length Selector if applicable */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider text-[#44403C] font-medium">
                      {product.category === 'rings' ? 'Ring Size' : product.category === 'necklaces' ? 'Chain Length' : 'Size / Fit'}
                    </label>
                    {product.category === 'rings' && (
                      <button
                        type="button"
                        onClick={onOpenRingSizer}
                        className="text-xs text-[#8C7355] hover:text-[#1C1917] flex items-center gap-1 underline underline-offset-2"
                      >
                        <Ruler className="w-3 h-3" />
                        <span>Ring Size Guide</span>
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 text-xs border transition-all ${
                          selectedSize === size
                            ? 'border-[#1C1917] bg-[#1C1917] text-[#FAF8F5]'
                            : 'border-[#E6DFD5] hover:border-[#1C1917] text-[#44403C]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Complimentary Hand-Stamped Inscription */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#44403C] font-medium">
                    Complimentary Inscription (Optional)
                  </label>
                  <span className="text-[11px] text-[#A8A29E]">Up to 16 chars</span>
                </div>
                <input
                  type="text"
                  maxLength={16}
                  value={customInscription}
                  onChange={(e) => setCustomInscription(e.target.value)}
                  placeholder="e.g. Initials, date, or Roman numerals"
                  className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                />
              </div>

              {/* Editorial Detail Accordion Tabs */}
              <div className="pt-4 border-t border-[#E6DFD5]">
                <div className="flex items-center border-b border-[#E6DFD5] text-xs">
                  <button
                    onClick={() => setActiveTab('craft')}
                    className={`py-2 px-3 border-b-2 font-medium tracking-wide transition-colors ${
                      activeTab === 'craft'
                        ? 'border-[#1C1917] text-[#1C1917]'
                        : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
                    }`}
                  >
                    The Craft
                  </button>
                  <button
                    onClick={() => setActiveTab('origin')}
                    className={`py-2 px-3 border-b-2 font-medium tracking-wide transition-colors ${
                      activeTab === 'origin'
                        ? 'border-[#1C1917] text-[#1C1917]'
                        : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
                    }`}
                  >
                    Gem Provenance
                  </button>
                  <button
                    onClick={() => setActiveTab('dimensions')}
                    className={`py-2 px-3 border-b-2 font-medium tracking-wide transition-colors ${
                      activeTab === 'dimensions'
                        ? 'border-[#1C1917] text-[#1C1917]'
                        : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
                    }`}
                  >
                    Dimensions
                  </button>
                </div>

                <div className="py-3 text-xs text-[#57534E] leading-relaxed">
                  {activeTab === 'craft' && (
                    <p>{product.description}</p>
                  )}
                  {activeTab === 'origin' && (
                    <p>{product.story}</p>
                  )}
                  {activeTab === 'dimensions' && (
                    <p>{product.dimensions}</p>
                  )}
                </div>
              </div>

            </div>

            {/* Buy CTA & Immediate Feedback */}
            <div className="pt-4 border-t border-[#E6DFD5] space-y-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 shadow-sm ${
                  addedAnimation
                    ? 'bg-emerald-800 text-white'
                    : 'bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5]'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Atelier Bag</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#C8A358]" />
                    <span>Add to Atelier Bag · ${product.price}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 text-[11px] text-[#78716C] text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8C7355]" />
                  Insured Courier Delivery
                </span>
                <span>·</span>
                <span>Complimentary 30-Day Resizing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
