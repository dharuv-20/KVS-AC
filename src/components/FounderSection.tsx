import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, CheckCircle2, MessageSquare, Sparkles, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';
import { fadeInUp, staggerContainer } from '../utils/motion';

interface FounderSectionProps {
  variant?: 'light' | 'dark';
}

export const FounderSection: React.FC<FounderSectionProps> = ({ variant = 'light' }) => {
  const { language, openBookingModal } = useLanguage();
  const founder = COMPANY_CONFIG.founder;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`py-16 md:py-24 border-t overflow-hidden ${variant === 'dark' ? 'bg-[#0c1626] border-navy-800 text-white' : 'bg-white border-slate-100 text-navy-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 12-Column Responsive Card */}
        <motion.div
          variants={fadeInUp(0, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-12 border shadow-sm transition-all ${
            variant === 'dark'
              ? 'bg-gradient-to-br from-[#101D32] via-[#14233c] to-[#0c1626] border-navy-700/80'
              : 'bg-[#F8F9FB] border-slate-200/90'
          }`}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Photo Card (Cols 5) */}
            <motion.div
              variants={fadeInUp(0.1, 20)}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-sm">
                
                {/* Decorative Background Element */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-copper rounded-[32px] opacity-30 blur-sm pointer-events-none" />
                
                {/* Image Container */}
                <div className="relative rounded-[28px] overflow-hidden bg-white shadow-xl border-2 border-white group">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - ${language === 'en' ? founder.roleEn : founder.roleHi}`}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                  
                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-wide">
                          {founder.name}
                        </h4>
                        <p className="text-[11px] text-blue-300 font-medium">
                          {language === 'en' ? founder.roleEn : founder.roleHi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification Pill */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span>{language === 'en' ? 'Direct Technical Leadership • Gurugram Hub' : 'सीधा तकनीकी नेतृत्व • गुरुग्राम केंद्र'}</span>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Leadership Narrative & Assurances (Cols 7) */}
            <motion.div
              variants={staggerContainer(0.1, 0.05)}
              className="lg:col-span-7 space-y-5 text-left"
            >
              
              {/* Badge */}
              <motion.div variants={fadeInUp(0, 14)}>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'en' ? "Founder's Vision & Commitment" : 'संस्थापक का संकल्प एवं दृष्टिकोण'}</span>
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h3
                variants={fadeInUp(0.05, 16)}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900 leading-tight"
              >
                {language === 'en' ? (
                  <>
                    "Every space deserves <br />
                    <span className="text-blue-600">authentic engineering integrity."</span>
                  </>
                ) : (
                  <>
                    "हर स्थान सच्ची <br />
                    <span className="text-blue-600">इंजीनियरिंग गुणवत्ता का हकदार है।"</span>
                  </>
                )}
              </motion.h3>

              {/* Bio / Message Quote */}
              <motion.p
                variants={fadeInUp(0.1, 16)}
                className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal"
              >
                {language === 'en' ? founder.bioEn : founder.bioHi}
              </motion.p>

              {/* 3 Personal Quality Standards */}
              <div className="space-y-3 pt-2">
                <motion.div
                  variants={fadeInUp(0.12, 14)}
                  whileHover={shouldReduceMotion ? {} : { x: 4 }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-shadow hover:shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-navy-900">
                      {language === 'en' ? '100% In-House Trained Technicians' : '100% हमारी अपनी प्रशिक्षित टीम'}
                    </h5>
                    <p className="text-[11.5px] text-slate-500 mt-0.5">
                      {language === 'en'
                        ? 'We never outsource your job to unverified third-party freelance brokers.'
                        : 'हम कभी भी आपका काम किसी अज्ञात तीसरे पक्ष या कमीशन एजेंट को नहीं सौंपते।'}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp(0.16, 14)}
                  whileHover={shouldReduceMotion ? {} : { x: 4 }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-shadow hover:shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-navy-900">
                      {language === 'en' ? 'Digital Diagnostic Precision' : 'सटीक डिजिटल डायग्नोस्टिक्स'}
                    </h5>
                    <p className="text-[11.5px] text-slate-500 mt-0.5">
                      {language === 'en'
                        ? 'Digital manifold pressure gauges, micron vacuum pumps, and nitrogen leak detection.'
                        : 'डिजिटल मैनिफोल्ड गेज, माइक्रोन वैक्यूम पंप और नाइट्रोजन आधारित लीकेज टेस्टिंग।'}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp(0.2, 14)}
                  whileHover={shouldReduceMotion ? {} : { x: 4 }}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-shadow hover:shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-navy-900">
                      {language === 'en' ? 'Transparent Communication & Genuine Parts' : 'पारदर्शी संवाद और असली स्पेयर पार्ट्स'}
                    </h5>
                    <p className="text-[11.5px] text-slate-500 mt-0.5">
                      {language === 'en'
                        ? 'You see the exact faulty component with clear upfront estimates before repair starts.'
                        : 'काम शुरू होने से पहले खराब पार्ट की वास्तविक स्थिति और पारदर्शी खर्च की जानकारी।'}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons with Micro-interactions */}
              <motion.div
                variants={fadeInUp(0.22, 14)}
                className="pt-3 flex flex-wrap items-center gap-3"
              >
                <motion.button
                  type="button"
                  onClick={() => openBookingModal('Founder Direct Service Booking')}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  {language === 'en' ? 'Book a Service Today' : 'आज ही सर्विस बुक करें'}
                </motion.button>

                <motion.a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-navy-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{COMPANY_CONFIG.phoneDisplay}</span>
                </motion.a>

                <motion.a
                  href={getWhatsAppBookingUrl(`Hello ${founder.name}, I would like to consult regarding AC service for my space.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'en' ? 'Direct WhatsApp' : 'व्हाट्सएप संपर्क'}</span>
                </motion.a>
              </motion.div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
