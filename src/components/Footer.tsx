import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenBespoke: () => void;
  onOpenRingSizer: () => void;
  onOpenCare: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBespoke,
  onOpenRingSizer,
  onOpenCare,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2E2A27]">
          
          {/* Brand & Narrative */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-2xl font-serif tracking-[0.25em] text-[#FAF8F5] block font-light">
              AURELIA
            </span>
            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm font-light">
              Handcrafted fine jewels forged in recycled 18k solid gold, sterling silver, and ethically unearthed raw gemstones. Hand-hammered at the jeweler's bench in Bristol and Florence.
            </p>
            <div className="text-[11px] text-[#78716C] tracking-wide pt-2">
              Assay Office Registered · London & Edinburgh Hallmark Hallmarks
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-medium">
              Collection
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <button 
                  onClick={() => onSelectCategory('necklaces')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Raw Gem Pendants
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('rings')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Molten Signets & Bands
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('earrings')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Baroque Pearl Drops
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('bracelets')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Sculpted Bark Cuffs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Complete Archive
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-medium">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <button onClick={onOpenBespoke} className="hover:text-[#FAF8F5] transition-colors text-left">
                  Bespoke Commissions
                </button>
              </li>
              <li>
                <button onClick={onOpenRingSizer} className="hover:text-[#FAF8F5] transition-colors text-left">
                  Ring Size Guide
                </button>
              </li>
              <li>
                <button onClick={onOpenCare} className="hover:text-[#FAF8F5] transition-colors text-left">
                  Jewel Care & Hallmarks
                </button>
              </li>
              <li>
                <span className="text-[#78716C] block">Complimentary Insured Delivery</span>
              </li>
              <li>
                <span className="text-[#78716C] block">Lifetime Bench Polishing</span>
              </li>
            </ul>
          </div>

          {/* Small Batch Dispatch Notice / Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-medium">
              Small-Batch Pour Announcements
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              We release fewer than 20 pieces each lunar cycle. Receive private bench dispatch notices 24 hours prior to public release.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#292524] border border-[#3E3835] px-3 py-2 text-xs text-[#FAF8F5] placeholder:text-[#78716C] focus:outline-none focus:border-[#C8A358] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#FAF8F5] text-[#1C1917] px-4 py-2 text-xs uppercase tracking-wider font-medium hover:bg-[#E8DFC8] transition-colors shrink-0 flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 p-2 bg-[#292524] text-xs text-[#FAF8F5]">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You have been added to the private bench ledger.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <div>
            © {new Date().getFullYear()} Aurelia Studio Ltd. All rights reserved. Registered Bench Goldsmiths.
          </div>
          <div className="flex items-center gap-6">
            <span>Bristol Benchmark 017</span>
            <span>·</span>
            <span>Florence Bench No. 04</span>
            <span>·</span>
            <span>Ethical Responsible Jewellery Council Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
