import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExplore,
}) => {
  if (!isOpen) return null;

  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 350;
  const differenceToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E6DFD5] shadow-2xl flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E6DFD5] bg-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-xl font-normal text-[#1C1917]">Atelier Bag</h2>
              <span className="text-xs font-mono text-[#78716C] bg-[#F3EDE2] px-2 py-0.5 rounded-full">
                {cart.reduce((n, item) => n + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Threshold Progress */}
          <div className="bg-[#F3EDE2] px-6 py-3 border-b border-[#E6DFD5] text-xs">
            {differenceToFreeShipping === 0 ? (
              <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>You have unlocked complimentary insured worldwide delivery</span>
              </div>
            ) : (
              <div>
                <p className="text-[#57534E]">
                  Add <span className="font-medium text-[#1C1917] tabular-nums">${differenceToFreeShipping}</span> more for complimentary insured delivery
                </p>
                <div className="w-full bg-[#E6DFD5] h-1.5 mt-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#8C7355] h-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E6DFD5]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F3EDE2] flex items-center justify-center text-[#8C7355]">
                  <Gift className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#1C1917]">Your atelier bag is empty</h3>
                  <p className="text-xs text-[#78716C] mt-1 max-w-xs">
                    Each jewel is handcrafted in limited runs. Explore our small-batch archives.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onExplore();
                  }}
                  className="px-6 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#292524] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartItemId} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-[#F3EDE2] overflow-hidden border border-[#E6DFD5] shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base text-[#1C1917] leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-[#A8A29E] hover:text-rose-700 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Selected Variants */}
                      <div className="text-[11px] text-[#78716C] mt-1 space-y-0.5">
                        <p>{item.selectedMetal}</p>
                        {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                        {item.customInscription && (
                          <p className="italic text-[#8C7355]">
                            Inscription: "{item.customInscription}"
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Steppers & Line Total */}
                    <div className="flex items-center justify-between mt-3 pt-2">
                      <div className="flex items-center border border-[#E6DFD5] bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                          className="p-1 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE2] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono tabular-nums text-[#1C1917]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                          className="p-1 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EDE2] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-medium text-[#1C1917] tabular-nums">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Module */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E6DFD5] bg-[#FAF8F5] space-y-4">
              {/* Complimentary Presentation Box Checkbox */}
              <label className="flex items-start gap-3 p-3 bg-[#F3EDE2] border border-[#E6DFD5] text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeGiftWrap}
                  onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                  className="mt-0.5 accent-[#8C7355]"
                />
                <div className="text-[#57534E]">
                  <span className="font-medium text-[#1C1917] block">Complimentary Silk Velvet Keepsake Box</span>
                  <span>Handmade wooden box with hand-lettered calligraphy certificate</span>
                </div>
              </label>

              {/* Subtotal & Breakdown */}
              <div className="space-y-1.5 text-xs text-[#78716C]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif text-sm text-[#1C1917] tabular-nums font-medium">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Courier Delivery</span>
                  <span>{differenceToFreeShipping === 0 ? 'Complimentary' : '$25'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E6DFD5] text-sm text-[#1C1917] font-medium">
                  <span>Estimated Total</span>
                  <span className="font-serif text-base tabular-nums font-semibold">
                    ${subtotal + (differenceToFreeShipping === 0 ? 0 : 25)}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-4 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] text-center text-[#A8A29E]">
                Payment processed in encrypted 256-bit SSL · Insured door-to-door transit
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
