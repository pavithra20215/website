import React, { useState } from 'react';
import { Heart, Sparkles, Eye, Plus } from 'lucide-react';
import { JewelProduct } from '../types';

interface ProductCardProps {
  product: JewelProduct;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: JewelProduct) => void;
  onQuickAdd: (product: JewelProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="group flex flex-col bg-[#FAF8F5] border border-[#E6DFD5] transition-all duration-300 hover:border-[#C8A358]/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* 65-75% Card Height Image Area */}
      <div 
        className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#F3EDE2] cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          /* Styled Fallback Container (Zero-Broken-Image Policy) */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F3EDE2]">
            <Sparkles className="w-8 h-8 text-[#8C7355] mb-2 stroke-[1.5]" />
            <span className="font-serif text-base text-[#1C1917]">{product.name}</span>
            <span className="text-xs text-[#78716C] mt-1">{product.stone}</span>
          </div>
        )}

        {/* Quiet Top Kicker / Edition (NO PILLS) */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="text-[11px] uppercase tracking-wider text-[#57534E] bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 border border-[#E6DFD5]/80">
            {product.edition.split('·')[0]}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          className="absolute top-3 right-3 p-2 bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#E6DFD5]/80 text-[#44403C] hover:text-[#1C1917] transition-transform active:scale-90"
        >
          <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-[#C8A358] text-[#C8A358]' : ''}`} />
        </button>

        {/* Hover Quick Action Drawer Bar */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 bg-[#FAF8F5] text-[#1C1917] text-xs font-medium tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Examine Details</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            className="p-2 bg-[#1C1917] text-[#FAF8F5] hover:bg-[#292524] transition-colors shadow-sm"
            title="Add to Bag"
            aria-label="Add to bag"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-[#FAF8F5]">
        <div>
          {/* Category & Material Unboxed Text */}
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#8C7355] font-medium mb-1.5 flex items-center gap-1.5">
            <span>{product.category}</span>
            <span aria-hidden="true" className="text-[#C8A358]">·</span>
            <span>{product.stone.split('(')[0]}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-lg sm:text-xl font-normal text-[#1C1917] hover:text-[#8C7355] transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Subtitle / Tactile Note */}
          <p className="text-xs text-[#78716C] mt-1.5 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Bottom Baseline: Price & Action */}
        <div className="pt-4 mt-3 border-t border-[#E6DFD5]/70 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg text-[#1C1917] tabular-nums font-medium">
              ${product.price}
            </span>
            <span className="text-[11px] text-[#A8A29E] tracking-tight">
              USD
            </span>
          </div>

          <button
            onClick={() => onQuickView(product)}
            className="text-xs font-medium text-[#1C1917] underline underline-offset-4 decoration-[#C8A358] hover:text-[#8C7355] transition-colors py-1 cursor-pointer"
          >
            Customize & Order
          </button>
        </div>
      </div>
    </div>
  );
};
