import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/config';
import { cubicEase } from '../utils/motion';

export const Hero: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Motion variants for choreographed entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: cubicEase,
      },
    },
  };

  const trustItemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="pt-24 pb-10 px-4 sm:px-6 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Enclosed Rounded Dark Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#0c1626] via-[#101D32] to-[#16253d] text-white overflow-hidden shadow-2xl border border-navy-800"
        >
          
          {/* Subtle Precision Cooling Airflow Glows */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.12, 0.22, 0.12],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            className="absolute top-0 right-0 w-[480px] h-[480px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.12, 1],
                    opacity: [0.10, 0.18, 0.10],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-copper/15 rounded-full blur-3xl pointer-events-none"
          />

          {/* Delicate Precision Airflow Wave Vector */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M-100 200 C 300 120, 600 280, 1300 160"
                stroke="url(#coolingGradient)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              <path
                d="M-50 260 C 350 180, 650 340, 1350 220"
                stroke="url(#coolingGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <defs>
                <linearGradient id="coolingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#b87548" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Grid Layout: Balanced & Centered */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
            
            {/* Left Content Column (Cols 7) with Choreographed Entrance */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left"
            >
              
              {/* 1. Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-300 text-xs font-semibold tracking-wide shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>{language === 'en' ? 'Professional HVAC & AC Engineering' : 'पेशेवर एचवीएसी एवं एसी समाधान'}</span>
                </div>
              </motion.div>

              {/* 2. Headline with Clean Block Spans */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-normal leading-tight"
              >
                {language === 'en' ? (
                  <>
                    <span className="block leading-tight">Fast AC & HVAC</span>
                    <span className="block leading-tight mt-1">
                      Services <span className="text-blue-400">Nearby</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block leading-tight">आपके निकटतम</span>
                    <span className="block leading-tight mt-1 text-blue-400">
                      विश्वसनीय एसी सेवाएं
                    </span>
                  </>
                )}
              </motion.h1>

              {/* 3. Supporting Paragraph */}
              <motion.p
                variants={itemVariants}
                className="text-xs sm:text-sm text-slate-300 max-w-lg font-normal leading-relaxed"
              >
                {t.hero.subtext}
              </motion.p>

              {/* 4. Primary CTA Pill Buttons with Tactile Motion Feedback */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <motion.button
                  type="button"
                  onClick={() => openBookingModal()}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-xl flex items-center gap-2 group whitespace-nowrap cursor-pointer"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-navy-900 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center gap-2 whitespace-nowrap font-mono"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_CONFIG.phoneDisplay}</span>
                </motion.a>
              </motion.div>

              {/* 5. Trust Indicators Revealed Sequentially */}
              <motion.div
                variants={itemVariants}
                className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-5 text-xs text-slate-300"
              >
                <motion.div variants={trustItemVariants} className="flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.hero.trust1Title}</span>
                </motion.div>
                <motion.div variants={trustItemVariants} className="flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.hero.trust2Title}</span>
                </motion.div>
                <motion.div variants={trustItemVariants} className="flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Gurugram & Delhi NCR</span>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* Right Photo Column: Scale-in Reveal & Interactive Hover */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-navy-900 h-[320px] sm:h-[380px]"
              >
                <img
                  src="/images/hero-tech.jpg"
                  alt="KVS Cooper Vains Verified HVAC Technician on duty in Gurugram Delhi NCR"
                  loading="eager"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                
                {/* Floating Bottom Card Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-navy-900/90 backdrop-blur-md p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/15 flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                        {language === 'en' ? 'Our Own Technicians' : 'हमारी अपनी टीम'}
                      </div>
                      <div className="text-[9.5px] text-slate-300">
                        {language === 'en' ? 'Trained • Verified • On Duty' : 'प्रशिक्षित • सत्यापित • कार्यरत'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-400/20 whitespace-nowrap">
                    Delhi NCR
                  </span>
                </motion.div>
              </motion.div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
