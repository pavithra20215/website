import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Download, ArrowLeft, Lock, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    fullName: 'Lady Eleanor Sterling',
    email: 'eleanor.sterling@fineart.org',
    phone: '+44 7700 900481',
    address: '14 Kensington Church Street',
    city: 'London',
    postalCode: 'W8 4EP',
    country: 'United Kingdom',
    deliveryMethod: 'insured-express',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4281',
    cardExp: '11/28',
    cardCvc: '•••',
  });

  const [orderReference, setOrderReference] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = subtotal >= 350 ? 0 : 25;
  const total = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderReference(generatedRef);
      setIsSubmitting(false);
      setStep('confirmed');
      onOrderComplete();
    }, 1200);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-3xl border border-[#E6DFD5] shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#FAF8F5] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-serif tracking-widest text-lg text-[#1C1917]">AURELIA</span>
            <span className="text-xs uppercase tracking-widest text-[#78716C]">
              · {step === 'form' ? 'Insured Atelier Checkout' : 'Order Confirmed'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              
              {/* Security Banner */}
              <div className="flex items-center gap-2 p-3 bg-[#F3EDE2] border border-[#E6DFD5] text-xs text-[#57534E]">
                <Lock className="w-4 h-4 text-[#8C7355] shrink-0" />
                <span>Encrypted Atelier Checkout · Each package is individually insured and requires physical signature</span>
              </div>

              {/* Delivery Details */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-[#1C1917] border-b border-[#E6DFD5] pb-2">
                  01. Client & Shipping Address
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                      Email for Tracking & Certificate
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                      Postal Code / Zip
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg text-[#1C1917] border-b border-[#E6DFD5] pb-2">
                  02. Atelier Payment
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 text-xs border text-left flex flex-col justify-between ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                        : 'border-[#E6DFD5] text-[#57534E]'
                    }`}
                  >
                    <span>Credit / Debit Card</span>
                    <span className="text-[10px] text-[#78716C] mt-2">Visa, Mastercard, Amex</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'apple' })}
                    className={`p-3 text-xs border text-left flex flex-col justify-between ${
                      formData.paymentMethod === 'apple'
                        ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                        : 'border-[#E6DFD5] text-[#57534E]'
                    }`}
                  >
                    <span>Apple Pay</span>
                    <span className="text-[10px] text-[#78716C] mt-2">Biometric Instant Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'wire' })}
                    className={`p-3 text-xs border text-left flex flex-col justify-between ${
                      formData.paymentMethod === 'wire'
                        ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                        : 'border-[#E6DFD5] text-[#57534E]'
                    }`}
                  >
                    <span>Private Bank Wire</span>
                    <span className="text-[10px] text-[#78716C] mt-2">Direct Atelier Transfer</span>
                  </button>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="p-4 bg-[#FAF8F5] border border-[#E6DFD5] space-y-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#57534E] mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        defaultValue="4242 •••• •••• 4281"
                        className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#57534E] mb-1">
                          Expires
                        </label>
                        <input
                          type="text"
                          defaultValue="08/29"
                          className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#57534E] mb-1">
                          Security Code (CVV)
                        </label>
                        <input
                          type="text"
                          defaultValue="892"
                          className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary & Primary CTA */}
              <div className="pt-4 border-t border-[#E6DFD5] space-y-4">
                <div className="space-y-1.5 text-xs text-[#57534E]">
                  <div className="flex justify-between">
                    <span>Jewel subtotal ({cart.length} item{cart.length > 1 ? 's' : ''})</span>
                    <span className="font-serif text-sm text-[#1C1917] tabular-nums">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insured priority courier delivery</span>
                    <span>{shippingFee === 0 ? 'Complimentary' : `$${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#E6DFD5] text-base text-[#1C1917] font-medium">
                    <span>Total Due</span>
                    <span className="font-serif text-xl tabular-nums font-semibold">${total} USD</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-[#FAF8F5] border-t-transparent rounded-full animate-spin"></span>
                      <span>Authorizing Secure Transaction...</span>
                    </span>
                  ) : (
                    <span>Confirm & Authorize Order · ${total}</span>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Order Confirmed Post-Order State */
            <div className="text-center py-6 sm:py-10 space-y-6">
              <div className="w-16 h-16 bg-[#F3EDE2] text-[#8C7355] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8 stroke-[1.5]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C7355] font-medium block mb-1">
                  Bench Record Registered
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
                  Order {orderReference} Confirmed
                </h2>
                <p className="text-sm text-[#57534E] mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.fullName}. Your handcrafted jewelry pieces have been placed in our workbench queue. A master artisan certificate and dispatch tracking will be sent to {formData.email}.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="max-w-md mx-auto bg-[#F3EDE2] border border-[#E6DFD5] p-6 text-left space-y-4 text-xs">
                <div className="flex justify-between border-b border-[#E6DFD5] pb-2 font-medium text-[#1C1917]">
                  <span>Order Reference</span>
                  <span className="font-mono">{orderReference}</span>
                </div>
                <div className="flex justify-between text-[#57534E]">
                  <span>Delivery Address</span>
                  <span className="text-right">{formData.address}, {formData.city}, {formData.postalCode}</span>
                </div>
                <div className="flex justify-between text-[#57534E]">
                  <span>Estimated Bench Dispatch</span>
                  <span className="text-[#1C1917] font-medium">3–5 Business Days</span>
                </div>
                <div className="flex justify-between border-t border-[#E6DFD5] pt-2 text-sm text-[#1C1917] font-semibold">
                  <span>Paid Total</span>
                  <span className="font-serif text-base tabular-nums">${total} USD</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handlePrintReceipt}
                  className="px-6 py-2.5 border border-[#1C1917] text-[#1C1917] hover:bg-[#F3EDE2] text-xs uppercase tracking-wider font-medium flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print Receipt</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#292524] cursor-pointer"
                >
                  Return to Atelier Boutique
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
