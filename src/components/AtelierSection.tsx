import React from 'react';
import { ARTISAN_STORY } from '../data/products';
import { Sparkles, Hammer, Compass, Award } from 'lucide-react';

export const AtelierSection: React.FC = () => {
  return (
    <section id="atelier-story" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quote Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C7355] font-medium block">
            The Philosophy of Slow Craft
          </span>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1C1917] font-normal leading-snug [text-wrap:balance]">
            "{ARTISAN_STORY.quote}"
          </blockquote>
          <div className="pt-2 text-xs text-[#78716C] tracking-wide">
            <span className="font-serif italic text-base text-[#1C1917] block sm:inline mr-2">
              {ARTISAN_STORY.founder}
            </span>
            <span>— {ARTISAN_STORY.role} · {ARTISAN_STORY.location}</span>
          </div>
        </div>

        {/* 3 Pillars Grid with Claim-to-Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E6DFD5]">
          {ARTISAN_STORY.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="space-y-3 bg-[#FAF8F5]">
              <div className="text-xs font-mono text-[#8C7355] tracking-widest">
                0{idx + 1}.
              </div>
              <h3 className="font-serif text-xl text-[#1C1917] font-normal">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Bench Detail Banner */}
        <div className="mt-16 bg-[#F3EDE2] border border-[#E6DFD5] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7355] font-medium">
              <Hammer className="w-4 h-4" />
              <span>Studio Visit & Bench Appointments</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1917]">
              Visit our bench in Bristol or Florence
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-2xl">
              Clients are welcome by private appointment to inspect loose raw emeralds, try on one-of-a-kind signets, or discuss custom wedding bands over espresso at the jeweler's bench.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 bg-[#FAF8F5] border border-[#E6DFD5] text-xs text-[#57534E] space-y-1 w-full sm:w-auto text-left">
              <span className="font-medium text-[#1C1917] block">Appointments:</span>
              <p>Tuesday – Saturday · By reservation</p>
              <p className="text-[#8C7355] font-mono">concierge@aureliajewels.com</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
