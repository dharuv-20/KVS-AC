import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Users, Wrench, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/config';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FounderSection } from '../components/FounderSection';
import { SEO } from '../components/SEO';
import { fadeInUp, staggerContainer } from '../utils/motion';

export const AboutPage: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const aboutSchema = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": language === 'en' ? `About ${COMPANY_CONFIG.name}` : `केवीएस कूपर वैन्स के बारे में`,
      "url": `${COMPANY_CONFIG.siteUrl}/about`,
      "description": `Learn about ${COMPANY_CONFIG.name}, founded by Krishna Chaudhary. Dedicated in-house HVAC technicians, ethical repairs, and commercial cooling excellence in Delhi NCR.`,
      "mainEntity": {
        "@type": "Organization",
        "name": COMPANY_CONFIG.name,
        "alternateName": COMPANY_CONFIG.shortName,
        "url": COMPANY_CONFIG.siteUrl,
        "logo": `${COMPANY_CONFIG.siteUrl}/logo.png`,
        "founder": {
          "@type": "Person",
          "name": COMPANY_CONFIG.founder.name,
          "jobTitle": COMPANY_CONFIG.founder.roleEn,
          "image": `${COMPANY_CONFIG.siteUrl}${COMPANY_CONFIG.founder.image}`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "235/18, Khandsa Marg, Laxmi Garden",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${COMPANY_CONFIG.siteUrl}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": `${COMPANY_CONFIG.siteUrl}/about`
        }
      ]
    }
  ], [language]);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#F8F9FB] overflow-hidden">
      <SEO
        title={language === 'en' ? "About Us | Leading HVAC & AC Engineering Team" : "हमारे बारे में | केवीएस कूपर वैन्स"}
        description={
          language === 'en'
            ? `Learn about ${COMPANY_CONFIG.name}, founded by Krishna Chaudhary. Dedicated in-house HVAC technicians, ethical repairs, and commercial cooling excellence in Delhi NCR.`
            : "केवीएस कूपर वैन्स और संस्थापक कृष्णा चौधरी के बारे में जानें। अपनी इन-हाउस तकनीशियन टीम और नैतिक इंजीनियरिंग के साथ दिल्ली एनसीआर में विश्वसनीय कूलिंग समाधान।"
        }
        canonicalPath="/about"
        schema={aboutSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 mb-12">
        {/* Enclosed Dark Hero Banner matching Homepage style */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-navy-950 via-[#101D32] to-[#15233A] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-navy-800"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            {/* Visual Breadcrumb Trail */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-300 font-semibold">{language === 'en' ? 'About Us' : 'हमारे बारे में'}</span>
            </div>

            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-blue-300 bg-white/10 border border-white/15 mb-4">
              {language === 'en' ? `About ${COMPANY_CONFIG.shortName}` : 'केवीएस कूपर वैन्स के बारे में'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {language === 'en' ? (
                <>
                  Engineering Rigor in <br className="hidden sm:inline" />
                  <span className="text-blue-400">Air Conditioning & HVAC Solutions</span>
                </>
              ) : (
                <>
                  एयर कंडीशनिंग एवं एचवीएसी में <br className="hidden sm:inline" />
                  <span className="text-blue-400">सच्ची इंजीनियरिंग दक्षता</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t.footer.aboutText}
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3 Core Pillars with Staggered Entrance */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-16">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            <motion.div
              variants={fadeInUp(0, 20)}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900">
                  {language === 'en' ? 'Our Own Technician Workforce' : 'हमारी अपनी तकनीशियन टीम'}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {language === 'en'
                    ? 'We do not subcontract or outsource your home or office cooling to unverified commission agents. Every technician is accountable, trained in modern inverter technology, and directly supervised.'
                    : 'हम काम किसी कमीशन एजेंट या अनवेरिफाइड तीसरे पक्ष को नहीं सौंपते। प्रत्येक तकनीशियन सीधे हमारे साथ काम करता है और आधुनिक इन्वर्टर तकनीकों में प्रशिक्षित है।'}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp(0.1, 20)}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900">
                  {language === 'en' ? 'Authentic Technical Standards' : 'सच्चे तकनीकी मानक'}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {language === 'en'
                    ? 'We prioritize proper diagnostics over quick-fix patchwork. Whether nitrogen leak tests up to 400 PSI or manufacturer-specified dual stage vacuuming, our procedures protect your equipment.'
                    : 'हम सतही जुगाड़ के बजाय समस्या की जड़ का निदान करते हैं। चाहे 400 PSI तक का नाइट्रोजन लीक टेस्ट हो या डीप वैक्यूमिंग, हमारे नियम आपके एसी की सुरक्षा करते हैं।'}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp(0.2, 20)}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900">
                  {language === 'en' ? 'Transparent Communication' : 'पारदर्शी संवाद एवं सत्यनिष्ठा'}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {language === 'en'
                    ? 'No fabricated claims or hidden replacement costs. We diagnose genuine faults, show you the damaged part (capacitor, fan motor, or coil leak), and offer straightforward estimates.'
                    : 'कोई झूठे वादे या छिपे हुए खर्चे नहीं। हम खराबी का वास्तविक कारण स्पष्ट दिखाते हैं और उचित लागत का अनुमान प्रस्तुत करते हैं।'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Leadership Section */}
      <FounderSection />

      {/* Why Choose Section */}
      <WhyChooseUs />

      {/* CTA Card matching Reference Banner */}
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 w-full">
        <motion.div
          variants={fadeInUp(0, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 text-center space-y-4 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === 'en' ? 'Ready to Work with Reliable HVAC Professionals?' : 'विश्वसनीय एचवीएसी पेशेवरों के साथ काम करने के लिए तैयार हैं?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal">
            {language === 'en'
              ? 'Contact our service desk today for residential repairs, commercial plant AMC, or equipment installations.'
              : 'घरेलू मरम्मत, कमर्शियल प्लांट एएमसी या इंस्टालेशन हेतु आज ही हमारे सर्विस डेस्क से संपर्क करें।'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={() => openBookingModal()}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="px-6 py-3 rounded-full text-xs font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-md transition-colors whitespace-nowrap cursor-pointer"
            >
              {t.hero.primaryCta}
            </motion.button>
            <motion.a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors flex items-center gap-2 whitespace-nowrap font-mono"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_CONFIG.phoneDisplay}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
