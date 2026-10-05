import React, { useState } from 'react';
import { X, Ruler, HelpCircle, Check } from 'lucide-react';

interface RingSizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIZES_DATA = [
  { us: '4', uk: 'H', eu: '47', diameterMm: 14.9, circumMm: 46.8 },
  { us: '5', uk: 'J 1/2', eu: '49', diameterMm: 15.7, circumMm: 49.3 },
  { us: '6', uk: 'L 1/2', eu: '52', diameterMm: 16.5, circumMm: 51.9 },
  { us: '7', uk: 'N 1/2', eu: '54', diameterMm: 17.3, circumMm: 54.4 },
  { us: '8', uk: 'P 1/2', eu: '57', diameterMm: 18.1, circumMm: 57.0 },
  { us: '9', uk: 'R 1/2', eu: '59', diameterMm: 19.0, circumMm: 59.5 },
  { us: '10', uk: 'T 1/2', eu: '62', diameterMm: 19.8, circumMm: 62.1 },
  { us: '11', uk: 'V 1/2', eu: '65', diameterMm: 20.6, circumMm: 64.6 },
  { us: '12', uk: 'Y', eu: '67', diameterMm: 21.4, circumMm: 67.2 },
];

export const RingSizerModal: React.FC<RingSizerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'chart' | 'slider'>('chart');
  const [selectedUsSize, setSelectedUsSize] = useState('7');

  const selectedSizeInfo = SIZES_DATA.find((s) => s.us === selectedUsSize) || SIZES_DATA[3];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-2xl border border-[#E6DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-[#8C7355]" />
            <h2 className="font-serif text-xl font-normal text-[#1C1917]">Handmade Ring Sizing Guide</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-[#8C7355] font-medium">
              Precision Atelier Fit
            </p>
            <h3 className="font-serif text-2xl text-[#1C1917]">
              Find your ideal ring profile
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Because our solid gold and sterling rings feature hand-carved comfort curves, they slide smoothly over the knuckle and seat naturally at the finger base.
            </p>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex border-b border-[#E6DFD5] text-xs">
            <button
              onClick={() => setActiveTab('chart')}
              className={`py-2 px-4 border-b-2 font-medium tracking-wide transition-colors ${
                activeTab === 'chart'
                  ? 'border-[#1C1917] text-[#1C1917]'
                  : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              International Conversion Matrix
            </button>
            <button
              onClick={() => setActiveTab('slider')}
              className={`py-2 px-4 border-b-2 font-medium tracking-wide transition-colors ${
                activeTab === 'slider'
                  ? 'border-[#1C1917] text-[#1C1917]'
                  : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Visual Diameter Tester
            </button>
          </div>

          {activeTab === 'chart' ? (
            <div className="space-y-4">
              <div className="overflow-x-auto border border-[#E6DFD5] bg-[#FAF8F5]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F3EDE2] text-[#44403C] uppercase tracking-wider text-[11px] border-b border-[#E6DFD5]">
                    <tr>
                      <th className="p-3">US / Canada</th>
                      <th className="p-3">UK / Australia</th>
                      <th className="p-3">Europe</th>
                      <th className="p-3">Inside Diameter</th>
                      <th className="p-3">Circumference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6DFD5] font-mono tabular-nums text-[#1C1917]">
                    {SIZES_DATA.map((row) => (
                      <tr 
                        key={row.us}
                        onClick={() => setSelectedUsSize(row.us)}
                        className={`hover:bg-[#F3EDE2]/60 cursor-pointer transition-colors ${
                          selectedUsSize === row.us ? 'bg-[#F3EDE2] font-semibold' : ''
                        }`}
                      >
                        <td className="p-3 font-medium">US {row.us}</td>
                        <td className="p-3 text-[#57534E]">{row.uk}</td>
                        <td className="p-3 text-[#57534E]">{row.eu}</td>
                        <td className="p-3">{row.diameterMm} mm</td>
                        <td className="p-3 text-[#78716C]">{row.circumMm} mm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 bg-[#F3EDE2] border border-[#E6DFD5] text-xs text-[#57534E] space-y-1">
                <span className="font-medium text-[#1C1917] block">Complimentary First Resizing Guarantee:</span>
                <p>
                  Every Aurelia ring includes one complimentary resizing within 30 days of receipt, covering fully insured return carriage.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center p-8 bg-[#F3EDE2] border border-[#E6DFD5] text-center">
                <div 
                  className="rounded-full border-2 border-[#1C1917] flex items-center justify-center bg-[#FAF8F5] shadow-sm transition-all duration-300"
                  style={{
                    width: `${selectedSizeInfo.diameterMm * 4.2}px`,
                    height: `${selectedSizeInfo.diameterMm * 4.2}px`,
                  }}
                >
                  <span className="text-xs font-mono font-medium text-[#1C1917]">
                    {selectedSizeInfo.diameterMm} mm
                  </span>
                </div>
                <p className="text-xs text-[#78716C] mt-4">
                  Visual representation of US Size {selectedSizeInfo.us} (UK {selectedSizeInfo.uk} · EU {selectedSizeInfo.eu})
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#57534E]">
                  Select US Ring Size to Compare:
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-9 gap-1.5">
                  {SIZES_DATA.map((row) => (
                    <button
                      key={row.us}
                      onClick={() => setSelectedUsSize(row.us)}
                      className={`py-2 text-xs border text-center transition-all ${
                        selectedUsSize === row.us
                          ? 'border-[#1C1917] bg-[#1C1917] text-[#FAF8F5] font-medium'
                          : 'border-[#E6DFD5] text-[#57534E] hover:border-[#1C1917]'
                      }`}
                    >
                      {row.us}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sizing Tips */}
          <div className="space-y-2 pt-2 border-t border-[#E6DFD5] text-xs text-[#57534E]">
            <span className="font-medium text-[#1C1917] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#8C7355]" />
              Artisan Bench Sizing Tips
            </span>
            <ul className="list-disc pl-5 space-y-1 text-[#78716C]">
              <li>Measure your finger at the end of the day when hands are warmest.</li>
              <li>For wider bands (like the Terra Signet 9mm), we recommend sizing up by a half size.</li>
              <li>Stacking multiple bands together requires a quarter to half size extra breathing room.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E6DFD5] bg-[#FAF8F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#292524] cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
