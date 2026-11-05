import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, ChevronRight, Wind, Droplets, Zap, Volume2, AlertCircle, Snowflake, Wrench, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { repairProblems } from '../data/servicesData';
import { getWhatsAppBookingUrl } from '../data/config';
import { fadeInUp, staggerContainer, cardHover } from '../utils/motion';

interface SymptomItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  labelEn: string;
  labelHi: string;
  probableCauseEn: string;
  probableCauseHi: string;
  solutionEn: string;
  solutionHi: string;
  serviceSlug: string;
  serviceName: string;
}

const triageSymptoms: SymptomItem[] = [
  {
    id: 'warm-air',
    icon: Wind,
    labelEn: 'Warm Air / No Cooling',
    labelHi: 'गर्म हवा / कूलिंग नहीं',
    probableCauseEn: 'Refrigerant gas micro-leak, weak dual capacitor, or clogged outdoor condenser fins.',
    probableCauseHi: 'गैस लीकेज, कमजोर कैपेसिटर, या आउटडोर कॉइल में धूल व गंदगी।',
    solutionEn: '400 PSI Nitrogen pressure leak test, genuine capacitor replacement & pure R32/R410A recharge.',
    solutionHi: 'नाइट्रोजन टेस्ट द्वारा लीकेज रिपेयर, कैपेसिटर जांच एवं शुद्ध गैस चार्जिंग।',
    serviceSlug: 'ac-repair',
    serviceName: 'AC Diagnostics & Repair',
  },
  {
    id: 'water-leak',
    icon: Droplets,
    labelEn: 'Water Dripping Indoors',
    labelHi: 'कमरे में पानी टपकना',
    probableCauseEn: 'Choked condensate drain tray, fungal slime build-up, or improper wall bracket tilt angle.',
    probableCauseHi: 'ड्रेन ट्रे में काई, बंद ड्रेन पाइप या इंडोर यूनिट का गलत लेवल।',
    solutionEn: 'High-pressure drain flush, fungal anti-microbial treatment & spirit-level slope alignment.',
    solutionHi: 'प्रेशर पंप से ड्रेन लाइन की सफाई एवं स्पिरिट लेवल से सही ढलान सेटिंग।',
    serviceSlug: 'ac-servicing-cleaning',
    serviceName: 'AC Servicing & Jet Cleaning',
  },
  {
    id: 'mcb-trip',
    icon: Zap,
    labelEn: 'Tripping MCB / Power Cut',
    labelHi: 'एमसीबी ट्रिप / बिजली बंद',
    probableCauseEn: 'Inverter PCB short circuit, compressor electrical winding fault, or voltage fluctuation.',
    probableCauseHi: 'इन्वर्टर पीसीबी सर्किट शॉर्ट, कंप्रेसर वाइंडिंग अर्थिंग या हाई एम्पीयर।',
    solutionEn: 'Multimeter resistance diagnostics, IPM sensor repair or component-level capacitor repair.',
    solutionHi: 'डिजिटल मल्टीमीटर से सटीक सर्किट डायग्नोसिस एवं कंपोनेंट रिपेयर।',
    serviceSlug: 'ac-repair',
    serviceName: 'AC Repair & Diagnostics',
  },
  {
    id: 'noise',
    icon: Volume2,
    labelEn: 'Loud Rattling / Vibration',
    labelHi: 'तेज आवाज / कंपन',
    probableCauseEn: 'Loose outdoor bracket rubber pads, broken blower fan blade, or worn motor ball bearings.',
    probableCauseHi: 'आउटडोर स्टैंड का ढीला होना, ब्लोअर पंखुड़ी टूटना या मोटर बेयरिंग घिसना।',
    solutionEn: 'Anti-vibration mount replacement, blower wheel dynamic rebalancing & OEM motor lubrication.',
    solutionHi: 'वाइब्रेशन पैड फिटिंग, ब्लोअर बैलेंसिंग एवं मोटर लुब्रिकेशन।',
    serviceSlug: 'ac-repair',
    serviceName: 'AC Repair & Diagnostics',
  },
  {
    id: 'smell',
    icon: AlertCircle,
    labelEn: 'Foul Odor / Low Airflow',
    labelHi: 'दुर्गंध / कमजोर हवा',
    probableCauseEn: 'Bacterial colonies on cooling coil, damp dust crust, or dirty evaporator blower.',
    probableCauseHi: 'कूलिंग कॉइल पर फंगस और बैक्टीरिया का जमना या ब्लोअर चोक होना।',
    solutionEn: 'Waterproof jacket power jet wash with foam descaler and coil sanitizer spray.',
    solutionHi: 'वाटरप्रूफ जैकेट के साथ फोम डीस्केलिंग एवं जर्म-फ्री जेट वॉश।',
    serviceSlug: 'ac-servicing-cleaning',
    serviceName: 'AC Servicing & Jet Cleaning',
  },
  {
    id: 'pipe-ice',
    icon: Snowflake,
    labelEn: 'Ice on Copper Pipes',
    labelHi: 'कॉपर पाइप पर बर्फ',
    probableCauseEn: 'Severe refrigerant shortage, blocked expansion capillary, or severely restricted return air.',
    probableCauseHi: 'गैस की भारी कमी, कैपिलरी ब्लॉकेज या एयर फिल्टर पूरी तरह चोक होना।',
    solutionEn: 'Electronic halogen leak detector check, dual-stage deep evacuation & precise charging by weight.',
    solutionHi: 'इलेक्ट्रॉनिक लीक डिटेक्शन, डीप वैक्यूमिंग एवं वजन से शुद्ध गैस रिफिल।',
    serviceSlug: 'gas-refilling',
    serviceName: 'Gas Refilling & Leak Test',
  },
];

export const RepairProblems: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();
  const [showAllProblems, setShowAllProblems] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'cooling' | 'leakage' | 'electrical' | 'mechanical'>('all');
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomItem>(triageSymptoms[0]);
  const shouldReduceMotion = useReducedMotion();

  const filtered = repairProblems.filter(p => activeCategory === 'all' || p.category === activeCategory);

  return (
    <section id="repair" className="py-16 md:py-24 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-16">
        
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center w-full mb-14"
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

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <Link to="/services/ac-repair" className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <span>{language === 'en' ? 'Diagnostics Protocol' : 'डायग्नोस्टिक्स प्रक्रिया'}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <span className="text-slate-500 font-medium">Direct Inspection</span>
            </div>

            <motion.button
              type="button"
              onClick={() => openBookingModal('AC Cooling & Airflow Repair')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="mt-4 w-full py-2.5 rounded-full text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
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
                alt="KVS Verified Technician Team on duty in Gurugram"
                loading="lazy"
                decoding="async"
                width={400}
                height={200}
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
                  <span>{language === 'en' ? 'Genuine OEM spare parts' : 'असली स्पेयर पार्ट्स'}</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[11px]">
                <Link to="/services/ac-servicing-cleaning" className="font-semibold text-white/90 hover:text-white flex items-center gap-1">
                  <span>{language === 'en' ? 'Jet Service Details' : 'जेट सर्विस विवरण'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-blue-100 font-mono">100% In-House</span>
              </div>

              <motion.button
                type="button"
                onClick={() => openBookingModal()}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="mt-4 w-full py-3 rounded-full text-xs font-bold text-blue-600 bg-white hover:bg-slate-100 shadow-md transition-colors cursor-pointer"
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

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <Link to="/services/gas-refilling" className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <span>{language === 'en' ? 'Nitrogen Test Protocol' : 'नाइट्रोजन टेस्ट प्रक्रिया'}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <span className="text-slate-400">Pure R32 / R410A</span>
            </div>

            <motion.button
              type="button"
              onClick={() => openBookingModal('AC Leakage & Gas Inspection')}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="mt-4 w-full py-2.5 rounded-full text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Book Leak Inspection' : 'लीक जांच बुक करें'}
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Interactive Instant AC Diagnostic & Triage Tool */}
        <motion.div
          variants={fadeInUp(0.1, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="w-full mb-14 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Interactive AC Symptom Checker' : 'त्वरित एसी समस्या डायग्नोस्टिक'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900">
                {language === 'en' ? 'What symptom is your AC showing right now?' : 'आपका एसी क्या लक्षण दिखा रहा है?'}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'en' ? 'Technicians on Duty in Gurugram' : 'गुरुग्राम में तकनीशियन उपलब्ध'}</span>
            </div>
          </div>

          {/* Symptom Selection Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mb-6">
            {triageSymptoms.map((sym) => {
              const isSelected = selectedSymptom.id === sym.id;
              const IconComp = sym.icon;
              return (
                <button
                  key={sym.id}
                  type="button"
                  onClick={() => setSelectedSymptom(sym)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-navy-950 text-white border-navy-900 shadow-md ring-2 ring-blue-500/50'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <IconComp className={`w-5 h-5 mb-2 ${isSelected ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className="text-xs font-bold leading-snug">
                    {language === 'en' ? sym.labelEn : sym.labelHi}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Symptom Diagnosis Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSymptom.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                    {language === 'en' ? 'DIAGNOSTIC REPORT' : 'डायग्नोस्टिक रिपोर्ट'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {language === 'en' ? 'Direct Technical Inspection' : 'सीधा तकनीकी निरीक्षण'}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy-900">
                    {language === 'en' ? 'Probable Technical Cause:' : 'संभावित तकनीकी कारण:'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {language === 'en' ? selectedSymptom.probableCauseEn : selectedSymptom.probableCauseHi}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy-900">
                    {language === 'en' ? 'Engineering Resolution Standard:' : 'इंजीनियरिंग समाधान मानक:'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {language === 'en' ? selectedSymptom.solutionEn : selectedSymptom.solutionHi}
                  </p>
                </div>

                <div className="pt-1">
                  <Link
                    to={`/services/${selectedSymptom.serviceSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>View {selectedSymptom.serviceName} details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Action CTA Box */}
              <div className="md:col-span-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2.5">
                <div className="text-xs font-bold text-navy-900 text-center">
                  {language === 'en' ? 'Direct Booking & Support' : 'सीधी बुकिंग व सहायता'}
                </div>
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? selectedSymptom.labelEn : selectedSymptom.labelHi)}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Book Fix for this Issue' : 'इस समस्या के लिए बुक करें'}</span>
                </button>
                <a
                  href={getWhatsAppBookingUrl(`Hi KVS, my AC has this issue: ${selectedSymptom.labelEn}. Please connect regarding inspection in Gurugram.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'en' ? 'Connect on WhatsApp' : 'व्हाट्सएप पर संपर्क करें'}</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
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
