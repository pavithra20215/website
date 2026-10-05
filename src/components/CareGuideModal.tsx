import React from 'react';
import { X, Sparkles, Shield, Droplets, Sun, Award } from 'lucide-react';

interface CareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareGuideModal: React.FC<CareGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-2xl border border-[#E6DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#8C7355]" />
            <h2 className="font-serif text-xl font-normal text-[#1C1917]">Jewel Care & Hallmarking Standards</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6 text-xs text-[#57534E]">
          
          <div className="space-y-1">
            <p className="uppercase tracking-widest text-[#8C7355] font-medium text-[11px]">
              Centuries of Preservation
            </p>
            <h3 className="font-serif text-2xl text-[#1C1917]">
              Caring for handcrafted precious pieces
            </h3>
            <p className="leading-relaxed">
              Hand-forged gold and silver pieces develop a rich personal patina over decades. With gentle care, they will endure to become treasured family heirlooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 bg-[#F3EDE2] border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#1C1917] font-medium">
                <Sun className="w-4 h-4 text-[#8C7355]" />
                <span>18K Solid Gold & Sterling</span>
              </div>
              <p className="leading-relaxed text-[#78716C]">
                Clean using lukewarm water, a dash of mild dish soap, and an extra-soft baby toothbrush. Pat dry with a microfiber jeweler cloth. Avoid chlorine pools and chemical cleansers.
              </p>
            </div>

            <div className="p-4 bg-[#F3EDE2] border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#1C1917] font-medium">
                <Droplets className="w-4 h-4 text-[#8C7355]" />
                <span>Raw Untreated Emeralds</span>
              </div>
              <p className="leading-relaxed text-[#78716C]">
                Natural emeralds contain organic internal 'jardin' inclusions. Never put emeralds or opals in ultrasonic or steam cleaners. Gentle room-temperature water only.
              </p>
            </div>

            <div className="p-4 bg-[#F3EDE2] border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#1C1917] font-medium">
                <Sparkles className="w-4 h-4 text-[#8C7355]" />
                <span>Wild Baroque Pearls</span>
              </div>
              <p className="leading-relaxed text-[#78716C]">
                Remember the golden rule: "Last on, first off." Apply perfumes, lotions, and hairspray before putting on your pearls to preserve their lustrous natural nacre.
              </p>
            </div>

            <div className="p-4 bg-[#F3EDE2] border border-[#E6DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#1C1917] font-medium">
                <Shield className="w-4 h-4 text-[#8C7355]" />
                <span>Lifetime Bench Refinishing</span>
              </div>
              <p className="leading-relaxed text-[#78716C]">
                Every Aurelia jewel comes with complimentary annual bench inspection, prong tightening, and texture re-hammering or satin refinishing at our studio.
              </p>
            </div>

          </div>

          {/* Hallmarking Section */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E6DFD5] space-y-3">
            <h4 className="font-serif text-base text-[#1C1917]">
              Independent Assay Hallmarking
            </h4>
            <p className="leading-relaxed text-[#78716C]">
              Every jewel crafted in precious metals over statutory weight thresholds is submitted to an independent Assay Office. Each piece is laser-struck or punched with four distinct marks:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] pt-1 text-center">
              <div className="p-2 bg-[#F3EDE2] border border-[#E6DFD5]">
                <span className="font-semibold block text-[#1C1917]">AUR</span>
                <span className="text-[#78716C]">Registered Sponsor's Mark</span>
              </div>
              <div className="p-2 bg-[#F3EDE2] border border-[#E6DFD5]">
                <span className="font-semibold block text-[#1C1917]">750 / 925</span>
                <span className="text-[#78716C]">Precious Metal Fineness</span>
              </div>
              <div className="p-2 bg-[#F3EDE2] border border-[#E6DFD5]">
                <span className="font-semibold block text-[#1C1917]">Leopard / Anchor</span>
                <span className="text-[#78716C]">Assay Office Mark</span>
              </div>
              <div className="p-2 bg-[#F3EDE2] border border-[#E6DFD5]">
                <span className="font-semibold block text-[#1C1917]">2026</span>
                <span className="text-[#78716C]">Year of Striking</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E6DFD5] bg-[#FAF8F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#292524] cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
