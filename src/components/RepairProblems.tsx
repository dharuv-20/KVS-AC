import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, ChevronRight, Wind, Droplets } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { repairProblems } from '../data/servicesData';
import { fadeInUp, staggerContainer, cardHover } from '../utils/motion';

export const RepairProblems: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();
  const [showAllProblems, setShowAllProblems] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'cooling' | 'leakage' | 'electrical' | 'mechanical'>('all');
  const shouldReduceMotion = useReducedMotion();

  const filtered = repairProblems.filter(p => activeCategory === 'all' || p.category === activeCategory);

  return (
    <section id="repair" className="py-16 md:py-24 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp(0, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {language === 'en' ? (
              <>
                We Repair the Most <span className="text-blue-600">Common AC Problems</span>
              </>
            ) : (
              <>
                हम ठीक करते हैं सबसे <span className="text-blue-600">सामान्य एसी समस्याएं</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            {language === 'en'
              ? 'Our technicians diagnose and resolve problems quickly to keep your home or facility running smoothly.'
              : 'हमारे तकनीशियन आपकी कूलिंग प्रणाली को सुचारू रखने के लिए समस्याओं का त्वरित निदान और समाधान करते हैं।'}
          </p>
        </motion.div>

        {/* 3-Card Interactive Hero Composition from Reference Image */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto mb-14"
        >
          {/* Card 1 (Left White Card) */}
          <motion.div
            variants={fadeInUp(0, 20)}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Wind className="w-5 h-5" />
            </div>
            
            <h3 className="text-base font-bold text-navy-900">
              {language === 'en' ? 'Cooling & Airflow Issues' : 'कूलिंग एवं एयरफ्लो समस्याएं'}
            </h3>
            
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {language === 'en'
                ? 'AC running but room stays warm, weak airflow from vents, or sudden ice build-up.'
                : 'एसी चल रहा है पर कमरा ठंडा नहीं हो रहा, हवा का दबाव कम है या बर्फ जम रही है।'}
            </p>

            <ul className="mt-5 space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Air not cooling or blowing warm' : 'हवा ठंडी नहीं आ रही'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Blower motor spinning slowly' : 'ब्लोअर मोटर का धीमा चलना'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Frost on copper suction line' : 'कॉपर सक्शन लाइन पर बर्फ जमना'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Shuts off unexpectedly' : 'अचानक बीच में बंद होना'}</span>
              </li>
            </ul>

            <motion.button
              type="button"
              onClick={() => openBookingModal('AC Cooling & Airflow Repair')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="mt-6 w-full py-2.5 rounded-full text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Book Cooling Fix' : 'कूलिंग रिपेयर बुक करें'}
            </motion.button>
          </motion.div>

          {/* Card 2 (Center Overlapping Elevated Accent Card) */}
          <motion.div
            variants={fadeInUp(0.1, 20)}
            whileHover={shouldReduceMotion ? {} : { y: -8 }}
            transition={{ duration: 0.25 }}
            className="relative group -my-2 md:-my-4 z-20"
          >
            {/* Team photo card at top */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-[-24px] relative z-20 mx-4 bg-navy-900">
              <img
                src="/images/team.jpg"
                alt="KVS Technician Team"
                className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy-950/20" />
              <div className="absolute bottom-2 left-3 text-[10px] font-bold text-white uppercase tracking-wider bg-navy-900/80 px-2.5 py-0.5 rounded backdrop-blur-sm">
                {language === 'en' ? 'Our Technician Team' : 'हमारी तकनीशियन टीम'}
              </div>
            </div>

            {/* Vibrant Blue Card Body */}
            <div className="bg-blue-600 text-white rounded-3xl p-6 sm:p-7 pt-10 shadow-2xl relative z-10">
              <h3 className="text-base font-extrabold text-white">
                {language === 'en' ? 'Direct Technician Dispatch' : 'सीधा तकनीशियन आवंटन'}
              </h3>
              
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                {language === 'en'
                  ? 'We do not outsource to third-party unverified workers. Direct in-house technicians arrive equipped with digital testing gauges.'
                  : 'हम काम किसी तीसरे पक्ष को नहीं सौंपते। हमारे अपने तकनीशियन डिजिटल उपकरणों के साथ सीधे आपके पते पर पहुंचते हैं।'}
              </p>

              <ul className="mt-4 space-y-2 text-xs text-white">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>{language === 'en' ? 'Gurugram & Delhi NCR coverage' : 'गुरुग्राम एवं दिल्ली एनसीआर कवरेज'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>{language === 'en' ? 'Pure R32 / R410A / R22 gas testing' : 'शुद्ध गैस लीकेज टेस्टिंग'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>{language === 'en' ? 'Genuine spare parts guarantee' : 'असली स्पेयर पार्ट्स'}</span>
                </li>
              </ul>

              <motion.button
                type="button"
                onClick={() => openBookingModal()}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="mt-6 w-full py-3 rounded-full text-xs font-bold text-blue-600 bg-white hover:bg-slate-100 shadow-md transition-colors cursor-pointer"
              >
                {t.hero.primaryCta}
              </motion.button>
            </div>
          </motion.div>

          {/* Card 3 (Right White Card) */}
          <motion.div
            variants={fadeInUp(0.2, 20)}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Droplets className="w-5 h-5" />
            </div>

            <h3 className="text-base font-bold text-navy-900">
              {language === 'en' ? 'Water Leaks & Gas Pressure' : 'पानी व गैस लीकेज समस्याएं'}
            </h3>

            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {language === 'en'
                ? 'Indoor unit dripping water, choked drain slope, or loss of cooling due to copper flare leaks.'
                : 'इंडोर यूनिट से पानी टपकना, ड्रेन पाइप में कचरा, या कॉपर पाइप से गैस लीकेज।'}
            </p>

            <ul className="mt-5 space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Water dripping onto wall or floor' : 'दीवार या फर्श पर पानी टपकना'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Nitrogen pressure leak detection' : 'नाइट्रोजन प्रेशर से सूक्ष्म लीक जांच'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Silver brazing & flare tightening' : 'सिल्वर ब्रेजिंग एवं फ्लेयर सुधार'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-600" />
                </span>
                <span>{language === 'en' ? 'Drain pipe algae clearing' : 'ड्रेन पाइप की पूरी सफाई'}</span>
              </li>
            </ul>

            <motion.button
              type="button"
              onClick={() => openBookingModal('AC Leakage & Gas Inspection')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="mt-6 w-full py-2.5 rounded-full text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Book Leak Inspection' : 'लीक जांच बुक करें'}
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Toggleable All 15 Specific AC Problems Drawer */}
        <div className="text-center">
          <motion.button
            type="button"
            onClick={() => setShowAllProblems(!showAllProblems)}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-navy-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
          >
            <span>
              {showAllProblems
                ? language === 'en'
                  ? 'Hide Complete Issue Directory'
                  : 'पूरी सूची छुपाएं'
                : language === 'en'
                ? 'Browse All 15 Common AC Problems'
                : 'सभी 15 सामान्य समस्याएं देखें'}
            </span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                showAllProblems ? '-rotate-90' : 'rotate-90'
              }`}
            />
          </motion.button>
        </div>

        <AnimatePresence>
          {showAllProblems && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="mt-10 pt-10 border-t border-slate-200 overflow-hidden"
            >
              {/* Filter pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {(['all', 'cooling', 'leakage', 'electrical', 'mechanical'] as const).map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat === 'all'
                      ? language === 'en'
                        ? 'All 15 Problems'
                        : 'सभी समस्याएं'
                      : cat}
                  </button>
                ))}
              </div>

              {/* Grid of issues */}
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map(p => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">
                        {language === 'en' ? p.titleEn : p.titleHi}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                        {language === 'en' ? p.descEn : p.descHi}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {p.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => openBookingModal(language === 'en' ? p.titleEn : p.titleHi)}
                        className="text-xs font-bold text-navy-900 hover:text-blue-600 cursor-pointer"
                      >
                        {language === 'en' ? 'Book Fix →' : 'बुक करें →'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
