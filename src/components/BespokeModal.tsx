import React, { useState } from 'react';
import { X, Sparkles, Check, Send, Gem, Flame, Clock } from 'lucide-react';
import { BespokeInquiry } from '../types';

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BespokeInquiry>({
    jewelType: 'Engagement / Alternative Solitaire Ring',
    metalPreference: '18K Recycled Solid Yellow Gold',
    stonePreference: 'Raw / Uncut Untreated Gemstone',
    budgetRange: '$1,500 – $3,000 USD',
    timeline: '6–8 weeks (Standard Artisan Lead)',
    story: 'Looking for an organic, textured ring that feels ancient and hand-melted, rather than standard commercial jewelry.',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-2xl border border-[#E6DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C8A358]" />
            <h2 className="font-serif text-xl font-normal text-[#1C1917]">Bespoke Commission Studio</h2>
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
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#8C7355] font-medium">
                  One-of-a-Kind Collaboration
                </p>
                <h3 className="font-serif text-2xl text-[#1C1917]">
                  Commission your personal heirloom
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Collaborate directly with our master goldsmiths. Every bespoke commission begins with a wax carving or hand-drawn billet, shaped exclusively for your story.
                </p>
              </div>

              {/* Step 1: Jewel Type */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-medium">
                  01. Silhouette / Jewel Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Engagement / Alternative Solitaire Ring',
                    'Heavy Molten Signet or Band',
                    'Raw Gemstone Talisman Pendant',
                    'Sculpted Bough Cuff Bracelet',
                    'Ceremonial Wedding Band Pair',
                    'Heirloom Remelt & Stone Reset'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, jewelType: type })}
                      className={`p-3 text-left border transition-all ${
                        formData.jewelType === type
                          ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                          : 'border-[#E6DFD5] text-[#57534E] hover:border-[#A8A29E]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Precious Metal */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-medium">
                  02. Precious Metal Alloy
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    '18K Recycled Solid Yellow Gold',
                    '18K Warm Rose Gold',
                    '18K Palladium White Gold',
                    '950 Pure Platinum',
                    '925 Heavy Sterling Silver'
                  ].map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      onClick={() => setFormData({ ...formData, metalPreference: metal })}
                      className={`p-2.5 text-left border transition-all ${
                        formData.metalPreference === metal
                          ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                          : 'border-[#E6DFD5] text-[#57534E] hover:border-[#A8A29E]'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Primary Gemstone */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-medium">
                  03. Gemstone Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Raw / Uncut Untreated Gemstone',
                    'Cosmic Salt & Pepper Diamond',
                    'Colombian Muzo Raw Emerald',
                    'Unheated Montana / Ceylon Sapphire',
                    'Wild Luminous Baroque Pearl',
                    'Pure Sculpted Metal (No Stone)'
                  ].map((gem) => (
                    <button
                      key={gem}
                      type="button"
                      onClick={() => setFormData({ ...formData, stonePreference: gem })}
                      className={`p-2.5 text-left border transition-all ${
                        formData.stonePreference === gem
                          ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-medium'
                          : 'border-[#E6DFD5] text-[#57534E] hover:border-[#A8A29E]'
                      }`}
                    >
                      {gem}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                    Anticipated Budget (USD)
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none"
                  >
                    <option>$800 – $1,500 USD</option>
                    <option>$1,500 – $3,000 USD</option>
                    <option>$3,000 – $6,000 USD</option>
                    <option>$6,000+ USD (Masterwork)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none"
                  >
                    <option>Flexible / Whenever ready</option>
                    <option>4–6 weeks</option>
                    <option>6–8 weeks (Standard Artisan Lead)</option>
                    <option>Specific Anniversary / Wedding date</option>
                  </select>
                </div>
              </div>

              {/* Step 5: Personal Story & Vision */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                  Tell us about your vision, meaning, or symbolism
                </label>
                <textarea
                  rows={3}
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  placeholder="Share any special motifs, textures, finger sizes, or heirloom stones you would like remelted..."
                  className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none"
                />
              </div>

              {/* Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E6DFD5]">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clara Devereux"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#57534E] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="clara@atelier.com"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E6DFD5] px-3 py-2 text-xs text-[#1C1917] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1C1917] hover:bg-[#292524] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Bespoke Commission Dossier</span>
              </button>

            </form>
          ) : (
            /* Submission Received State */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#F3EDE2] text-[#8C7355] rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[1.5]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C7355] font-medium block mb-1">
                  Commission Inquiry Logged
                </span>
                <h3 className="font-serif text-3xl text-[#1C1917]">
                  Thank you, {formData.clientName || 'fellow jewelry lover'}
                </h3>
                <p className="text-xs text-[#57534E] mt-2 max-w-md mx-auto leading-relaxed">
                  Our head bench jeweler, Matteo, will personally review your {formData.jewelType} inquiry and prepare preliminary hand sketches and stone options within 48 hours.
                </p>
              </div>

              {/* Summary of selections */}
              <div className="max-w-md mx-auto bg-[#F3EDE2] border border-[#E6DFD5] p-5 text-left text-xs space-y-2.5">
                <div className="flex justify-between text-[#57534E]">
                  <span className="font-medium text-[#1C1917]">Silhouette:</span>
                  <span>{formData.jewelType}</span>
                </div>
                <div className="flex justify-between text-[#57534E]">
                  <span className="font-medium text-[#1C1917]">Precious Alloy:</span>
                  <span>{formData.metalPreference}</span>
                </div>
                <div className="flex justify-between text-[#57534E]">
                  <span className="font-medium text-[#1C1917]">Primary Mineral:</span>
                  <span>{formData.stonePreference}</span>
                </div>
                <div className="flex justify-between text-[#57534E]">
                  <span className="font-medium text-[#1C1917]">Budget Scope:</span>
                  <span>{formData.budgetRange}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#292524] cursor-pointer"
              >
                Return to Boutique
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
