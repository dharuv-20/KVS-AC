import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Users, Layers, Wrench, MapPin, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fadeInUp } from '../utils/motion';

export const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      title: t.why.item1Title,
      desc: t.why.item1Desc,
      icon: Users,
    },
    {
      title: t.why.item2Title,
      desc: t.why.item2Desc,
      icon: Layers,
    },
    {
      title: t.why.item3Title,
      desc: t.why.item3Desc,
      icon: Wrench,
    },
    {
      title: t.why.item4Title,
      desc: t.why.item4Desc,
      icon: MapPin,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching Reference Image */}
        <motion.div
          variants={fadeInUp(0, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-xl mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {language === 'en' ? (
              <>
                Why Choose <span className="text-blue-600">KVS</span> <br />
                to Repair
              </>
            ) : (
              <>
                एसी रिपेयर के लिए <br />
                <span className="text-blue-600">केवीएस को क्यों चुनें</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            {language === 'en'
              ? 'We take pride in our work. Transparent pricing, our own technicians, and technical precision you can count on.'
              : 'हमें अपने काम पर गर्व है। पारदर्शी मूल्य, हमारी अपनी तकनीशियन टीम और भरोसेमंद तकनीकी गुणवत्ता।'}
          </p>
        </motion.div>

        {/* 2-Column Exact Composition from Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Column: Interactive Feature Stack with Smooth Transitions (Cols 6) */}
          <div className="lg:col-span-6 space-y-3.5">
            {features.map((feat, idx) => {
              const isActive = activeTab === idx;
              const Icon = feat.icon;

              return (
                <div key={idx} className="transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      // Expanded Dark Active Card (Exact Match to Reference Top Card)
                      <motion.div
                        key={`active-${idx}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="bg-navy-950 text-white rounded-3xl p-6 shadow-xl border border-navy-800"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 text-white" />
                            </span>
                            <h3 className="text-sm font-bold text-white">
                              {feat.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed pl-8">
                          {feat.desc}
                        </p>
                      </motion.div>
                    ) : (
                      // Inactive Clean White Pill Card (Exact Match to Reference Inactive Rows)
                      <motion.div
                        key={`inactive-${idx}`}
                        whileHover={shouldReduceMotion ? {} : { x: 4 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        onClick={() => setActiveTab(idx)}
                        className="cursor-pointer bg-slate-50 hover:bg-slate-100 rounded-full px-5 py-3.5 border border-slate-200/90 flex items-center justify-between transition-colors shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="text-xs font-bold text-navy-900">
                            {feat.title}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Tall Photograph of Technicians interacting (Cols 6) */}
          <motion.div
            variants={fadeInUp(0.15, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-navy-900">
              <img
                src="/images/why-us.jpg"
                alt="KVS Cooper Vains HVAC Technicians equipped with digital manifold and vacuum gear in Gurugram"
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
                className="w-full h-[400px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-navy-900/90 px-3 py-1 rounded-full border border-blue-400/30">
                  {language === 'en' ? 'Direct Technical Support' : 'सीधा तकनीकी सहयोग'}
                </span>
                <p className="text-xs sm:text-sm font-semibold mt-2 text-slate-200">
                  {language === 'en'
                    ? 'Our technicians are equipped with modern digital manifold gauges, vacuum pumps, and nitrogen leak detection gear.'
                    : 'हमारे तकनीशियन डिजिटल मैनिफोल्ड गेज, वैक्यूम पंप और नाइट्रोजन लीक डिटेक्शन उपकरणों से सुसज्जित हैं।'}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
