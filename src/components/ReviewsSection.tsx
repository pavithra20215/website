import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C7355] font-medium block mb-2">
              Verified Patron Reflections
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal">
              Stories from those who wear our craft
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <ShieldCheck className="w-4 h-4 text-[#8C7355]" />
            <span>100% Verified Bench Commission Reviews</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F3EDE2]/60 border border-[#E6DFD5] p-6 sm:p-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5 quiet stars */}
                <div className="flex items-center gap-1 text-[#8C7355]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#8C7355]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed italic font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E6DFD5]/80 text-xs">
                <div className="font-serif text-base text-[#1C1917] font-medium">
                  {review.author}
                </div>
                <div className="text-[11px] text-[#78716C] mt-0.5 flex items-center justify-between">
                  <span>{review.location}</span>
                  <span className="text-[#8C7355]">{review.date}</span>
                </div>
                <div className="text-[11px] text-[#57534E] mt-1 font-mono">
                  Piece: {review.jewel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
