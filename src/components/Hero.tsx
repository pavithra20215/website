import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Flame, Gem } from 'lucide-react';
import heroImg from '../assets/images/hero_artisan_jewels_1791177601146.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onBespokeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBespokeClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-[#E6DFD5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C7355] font-medium">
              <span className="w-6 h-[1px] bg-[#8C7355]"></span>
              <span>Bespoke & Bench-Forged</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1917] font-normal leading-[1.1] tracking-tight [text-wrap:balance]">
              Slow-crafted jewels forged with intention.
            </h1>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-light [text-wrap:balance]">
              We melt recycled 18k solid gold, hammer tactile molten borders, and set unheated raw gemstones one at a time. No mass casting; each piece carries the distinct touch of the artisan bench.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-sm flex items-center justify-center gap-2 active:scale-98 cursor-pointer rounded-none"
              >
                <span>Discover Collection</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onBespokeClick}
                className="px-6 py-3.5 border border-[#1C1917] text-[#1C1917] hover:bg-[#F3EDE2] text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer rounded-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C8A358]" />
                <span>Bespoke Commission</span>
              </button>
            </div>

            {/* Micro Details / Trust */}
            <div className="pt-6 border-t border-[#E6DFD5] flex items-center gap-6 text-xs text-[#78716C]">
              <div>
                <span className="font-serif text-lg font-medium text-[#1C1917] block tabular-nums">100%</span>
                <span>Recycled 18K & 925</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E6DFD5]"></div>
              <div>
                <span className="font-serif text-lg font-medium text-[#1C1917] block tabular-nums">Zero</span>
                <span>Automated Casting</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E6DFD5]"></div>
              <div>
                <span className="font-serif text-lg font-medium text-[#1C1917] block tabular-nums">Lifetime</span>
                <span>Bench Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Fidelity Imagery */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="overflow-hidden bg-[#F3EDE2] aspect-[16/10] sm:aspect-[16/10] relative shadow-md">
                <img
                  src={heroImg}
                  alt="Handcrafted fine jewelry arranged on natural travertine stone with natural morning sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  onError={(e) => {
                    // Styled graceful fallback container
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'p-12', 'text-center');
                      parent.innerHTML = '<div class="space-y-2"><div class="font-serif text-2xl text-[#1C1917]">Aurelia Bench Studio</div><p class="text-sm text-[#78716C]">Hand-forged fine jewelry in recycled 18k solid gold & natural gemstones</p></div>';
                    }
                  }}
                />
                
                {/* Subtle Floating Editorial Caption */}
                <div className="absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 border border-[#E6DFD5]/70 text-[11px] text-[#44403C]">
                  <span className="font-serif italic mr-1">No. 14 Archive:</span>
                  <span>Melted Gold & Raw Colombian Emeralds</span>
                </div>
              </div>

              {/* Decorative Subtle Underlay Border */}
              <div className="absolute -bottom-2 -left-2 w-full h-full border border-[#D5CBBF] -z-10 pointer-events-none hidden sm:block"></div>
            </div>
          </div>

        </div>

        {/* 3 Pillars strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-14 mt-12 border-t border-[#E6DFD5]/80">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#F3EDE2] text-[#8C7355] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#1C1917] tracking-wide">Cold-Forged & Annealed by Hand</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Repeatedly heated over torch flames and hammered on antique steel anvils for deep structural grain and durability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#F3EDE2] text-[#8C7355] shrink-0">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#1C1917] tracking-wide">Ethically Sourced Raw Minerals</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Untreated Colombian emeralds, cosmic salt & pepper diamonds, and organic wild baroque freshwater pearls.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#F3EDE2] text-[#8C7355] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#1C1917] tracking-wide">Certified Hallmarking & Care</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Independently assayed and stamped with registered studio hallmark. Complimentary lifetime bench polishing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
