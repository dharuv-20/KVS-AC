import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fadeInUp, staggerContainer } from '../utils/motion';

export const ServiceCategories: React.FC = () => {
  const { language, openBookingModal } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    {
      id: 'residential-ac',
      titleEn: 'Split & Inverter AC Repair',
      titleHi: 'स्प्लिट एवं इन्वर्टर एसी रिपेयर',
      descEn: 'Expert diagnostics for cooling failures, BLDC motor faults, PCB circuit repair, and silent indoor unit balancing.',
      descHi: 'कूलिंग विफलता, बीएलडीसी मोटर खराबी, पीसीबी सर्किट रिपेयर और कंपन-मुक्त इंडोर बैलेंसिंग।',
      image: '/images/split-ac.jpg',
      alt: 'Split AC Servicing',
      link: '/services/residential-ac',
      linkTextEn: 'View Service Details',
      linkTextHi: 'विवरण देखें',
    },
    {
      id: 'commercial-hvac',
      titleEn: 'Cassette & Commercial VRV Systems',
      titleHi: 'कैसेट एवं कमर्शियल वीआरवी सिस्टम',
      descEn: 'Multi-zone corporate climate systems, 4-way ceiling cassette units, branch piping, and electronic expansion valve calibration.',
      descHi: 'मल्टी-ज़ोन कॉर्पोरेट कूलिंग, 4-वे सीलिंग कैसेट यूनिट्स, ब्रांच पाइपिंग और एक्सपेंशन वाल्व कैलिब्रेशन।',
      image: '/images/cassette-ac.jpg',
      alt: 'Cassette & Commercial VRV Systems',
      link: '/services/commercial-hvac',
      linkTextEn: 'Commercial Solutions',
      linkTextHi: 'कमर्शियल समाधान',
    },
    {
      id: 'ac-servicing-cleaning',
      titleEn: 'Jet Pump Cleaning & Wet Service',
      titleHi: 'जेट पंप क्लीनिंग एवं वेट सर्विस',
      descEn: 'Pressure jet washing with waterproof catch jacket. Restores cooling airflow and eliminates fungal odor.',
      descHi: 'वाटरप्रूफ जैकेट के साथ हाई-प्रेशर जेट वॉश। कमरे में पानी गिराए बिना कॉइल की गहरी सफाई।',
      image: '/images/jet-cleaning.jpg',
      alt: 'AC Jet Cleaning with Waterproof Jacket',
      link: '/services/ac-servicing-cleaning',
      linkTextEn: 'View Cleaning Services',
      linkTextHi: 'क्लीनिंग सेवाएं देखें',
    },
    {
      id: 'industrial-hvac',
      titleEn: 'Industrial Chiller & AHU Plants',
      titleHi: 'इंडस्ट्रियल चिलर एवं एएचयू प्लांट्स',
      descEn: 'Heavy plant maintenance, shell-and-tube descaling, static pressure duct balancing, and annual AMC contracts.',
      descHi: 'चिलर प्लांट मेंटेनेंस, शेल-एंड-ट्यूब डीस्केलिंग, डक्ट बैलेंसिंग और वार्षिक एएमसी अनुबंध।',
      image: '/images/industrial-chiller.jpg',
      alt: 'Industrial Chiller Facility',
      link: '/services/industrial-hvac',
      linkTextEn: 'Industrial Capabilities',
      linkTextHi: 'औद्योगिक क्षमताएं',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
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
                We Repair and Service All <br />
                <span className="text-blue-600">Major AC & HVAC Systems</span>
              </>
            ) : (
              <>
                हम सर्विस और रिपेयर करते हैं सभी <br />
                <span className="text-blue-600">प्रमुख एसी एवं एचवीएसी सिस्टम्स</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal">
            {language === 'en'
              ? 'All repairs and maintenance are performed by our own trained technicians to keep your environment comfortable.'
              : 'सभी मरम्मत और मेंटेनेंस हमारी अपनी प्रशिक्षित तकनीशियन टीम द्वारा निष्पादित किए जाते हैं।'}
          </p>
        </motion.div>

        {/* 4-Card Composition with Staggered Entrance */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {categories.map((card, idx) => (
            <motion.div
              key={card.id}
              variants={fadeInUp(idx * 0.08, 20)}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between group hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Copper Top Line Accent on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper via-blue-500 to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                  {language === 'en' ? card.titleEn : card.titleHi}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {language === 'en' ? card.descEn : card.descHi}
                </p>
              </div>

              <div className="mt-5 rounded-2xl overflow-hidden h-48 sm:h-56 relative bg-slate-200">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <Link
                  to={card.link}
                  className="absolute bottom-3 left-3 text-xs font-bold text-white bg-navy-950/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full hover:bg-blue-600 transition-all flex items-center gap-1.5 shadow-sm group-hover:bg-blue-600"
                >
                  <span>{language === 'en' ? card.linkTextEn : card.linkTextHi}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reference Mobile Banner Promo Block: Blue Card with Touch Feedback */}
        <motion.div
          variants={fadeInUp(0.2, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 max-w-5xl mx-auto bg-blue-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-center sm:text-left relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
                {language === 'en' ? 'Direct Technical Standards' : 'सीधे तकनीकी मानक'}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {language === 'en'
                  ? 'Every cooling fix is verified by our in-house technicians.'
                  : 'हर कूलिंग समाधान हमारी इन-हाउस तकनीशियन टीम द्वारा सत्यापित है।'}
              </h4>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={() => openBookingModal()}
            whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-blue-600 bg-white hover:bg-slate-100 shadow-md transition-colors whitespace-nowrap shrink-0 cursor-pointer relative z-10"
          >
            {language === 'en' ? 'Book Direct Service' : 'सीधी सर्विस बुक करें'}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
