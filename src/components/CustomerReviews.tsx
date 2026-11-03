import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, MessageSquarePlus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { indianReviewsList } from '../data/servicesData';
import { getWhatsAppBookingUrl } from '../data/config';
import { fadeInUp } from '../utils/motion';

export const CustomerReviews: React.FC = () => {
  const { language, openBookingModal } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F8F9FB] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Controls and No Total Counts */}
        <motion.div
          variants={fadeInUp(0, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 max-w-6xl mx-auto"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3 shadow-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold ml-1">4.9 ★</span>
              <span className="text-slate-500 font-normal">| {language === 'en' ? 'Verified Experience' : 'सत्यापित अनुभव'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              {language === 'en' ? (
                <>
                  What Our Customers Say Across <br />
                  <span className="text-blue-600">Gurugram & Delhi NCR</span>
                </>
              ) : (
                <>
                  गुरुग्राम एवं दिल्ली एनसीआर के <br />
                  <span className="text-blue-600">ग्राहकों के अनुभव</span>
                </>
              )}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
              {language === 'en'
                ? 'Authentic feedback from homeowners, corporate offices, and facilities serviced by our technicians.'
                : 'हमारे तकनीशियनों द्वारा सेवा प्राप्त घरों, दफ्तरों और फैक्ट्रियों की वास्तविक समीक्षाएं।'}
            </p>
          </div>

          {/* Carousel Left / Right Arrow Controls */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <motion.button
              type="button"
              onClick={() => scroll('left')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center text-navy-900 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scroll('right')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center text-navy-900 transition-colors shadow-sm cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Track of All Reviews */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 px-1 max-w-6xl mx-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {indianReviewsList.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              transition={{ duration: 0.25 }}
              className="w-[320px] sm:w-[380px] shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header: Customer Info + Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                      {rev.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900 leading-tight">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-200 text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Service Tag & AC Model */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {rev.service}
                  </span>
                  <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    {rev.acType}
                  </span>
                </div>

                {/* Review Comment */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "{language === 'en' ? rev.reviewEn : rev.reviewHi}"
                </p>
              </div>

              {/* Bottom Verification & Date */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {language === 'en' ? 'Verified Service' : 'सत्यापित सेवा'}
                </span>
                <span>{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Book or Share Feedback */}
        <motion.div
          variants={fadeInUp(0.15, 16)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-xl mx-auto mt-8 space-y-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={() => openBookingModal()}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow transition-colors whitespace-nowrap cursor-pointer"
            >
              {language === 'en' ? 'Book AC Service Today' : 'आज ही एसी सर्विस बुक करें'}
            </motion.button>
            <motion.a
              href={getWhatsAppBookingUrl('Hello KVS team, I would like to share feedback regarding my recent AC service.')}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === 'en' ? 'Share Your Experience' : 'अपना अनुभव साझा करें'}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
