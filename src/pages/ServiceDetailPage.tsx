import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { residentialACTypes, repairProblems, servicingServices, installationServices, gasRefrigerantServices, commercialHvacSolutions, amcServices } from '../data/servicesData';
import { EnquiryForm } from '../components/EnquiryForm';
import { SEO } from '../components/SEO';
import { COMPANY_CONFIG } from '../data/config';
import { fadeInUp, staggerContainer } from '../utils/motion';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, openBookingModal } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const getServiceInfo = () => {
    switch (slug) {
      case 'residential-ac':
        return {
          titleEn: 'Residential Air Conditioning Services',
          titleHi: 'आवासीय एयर कंडीशनिंग सेवाएं',
          subtitleEn: 'Expert split, window, and inverter AC servicing, repairs, and installations tailored for modern homes.',
          subtitleHi: 'आधुनिक घरों के लिए स्प्लिट, विंडो एवं इन्वर्टर एसी की सटीक सर्विसिंग, रिपेयर व इंस्टालेशन।',
          image: '/images/split-ac.jpg',
          badge: 'Home Comfort Specialists',
          highlights: residentialACTypes.map(r => ({ title: language === 'en' ? r.nameEn : r.nameHi, desc: language === 'en' ? r.descEn : r.descHi })),
        };
      case 'ac-repair':
        return {
          titleEn: 'AC Diagnostics & Repair Services',
          titleHi: 'एसी डायग्नोस्टिक्स एवं रिपेयर सेवाएं',
          subtitleEn: 'Fast troubleshooting and genuine parts replacement for cooling failures, PCB burnouts, and compressor trips.',
          subtitleHi: 'कूलिंग न होना, पीसीबी सर्किट बोर्ड और कंप्रेसर समस्याओं का त्वरित और विश्वसनीय समाधान।',
          image: '/images/hero-tech.jpg',
          badge: 'Diagnostic Rigor',
          highlights: repairProblems.slice(0, 8).map(r => ({ title: language === 'en' ? r.titleEn : r.titleHi, desc: language === 'en' ? r.descEn : r.descHi })),
        };
      case 'ac-servicing-cleaning':
        return {
          titleEn: 'AC Servicing & Jet Cleaning',
          titleHi: 'एसी सर्विसिंग एवं जेट क्लीनिंग',
          subtitleEn: 'High-pressure jet pump wash, chemical coil descaling, and sanitized blower cleaning to restore cooling efficiency.',
          subtitleHi: 'हाई-प्रेशर जेट वॉश और केमिकल कॉइल डीस्केलिंग के साथ संपूर्ण एसी सर्विसिंग।',
          image: '/images/jet-cleaning.jpg',
          badge: 'Efficiency & Air Purity',
          highlights: servicingServices.map(s => ({ title: language === 'en' ? s.titleEn : s.titleHi, desc: language === 'en' ? s.descEn : s.descHi })),
        };
      case 'ac-installation':
        return {
          titleEn: 'AC Installation, Uninstallation & Shifting',
          titleHi: 'एसी इंस्टालेशन, अन-इंस्टालेशन एवं स्थानांतरण',
          subtitleEn: 'Spirit-level indoor wall mounting, vibration-free outdoor stands, copper tube flaring, and deep vacuuming.',
          subtitleHi: 'लेवल माउंटिंग, वाइब्रेशन-फ्री ब्रैकेट, कॉपर ट्यूब फ्लेयरिंग और वैक्यूमिंग के साथ सुरक्षित फिटिंग।',
          image: '/images/condenser.jpg',
          badge: 'Precision Engineering',
          highlights: installationServices.map(i => ({ title: language === 'en' ? i.titleEn : i.titleHi, desc: language === 'en' ? i.descEn : i.descHi })),
        };
      case 'gas-refilling':
        return {
          titleEn: 'AC Gas Refilling & Nitrogen Leak Testing',
          titleHi: 'एसी गैस रीफिलिंग एवं लीकेज टेस्टिंग',
          subtitleEn: 'Electronic leak detection, dry nitrogen pressure tests up to 400 PSI, deep evacuation, and pure R32/R410A charging by weight.',
          subtitleHi: 'नाइट्रोजन प्रेशर टेस्ट, डीप वैक्यूमिंग और वजन के अनुसार शुद्ध गैस चार्जिंग।',
          image: '/images/gas-charging.jpg',
          badge: 'Pure Gas Charging',
          highlights: gasRefrigerantServices.map(g => ({ title: language === 'en' ? g.titleEn : g.titleHi, desc: language === 'en' ? g.descEn : g.descHi })),
        };
      case 'commercial-hvac':
        return {
          titleEn: 'Commercial HVAC Engineering & Systems',
          titleHi: 'कमर्शियल एचवीएसी इंजीनियरिंग एवं सिस्टम्स',
          subtitleEn: 'Turnkey climate solutions for corporate offices, retail complexes, clinics, and hospitality buildings across Delhi NCR.',
          subtitleHi: 'कॉर्पोरेट दफ्तरों, रिटेल परिसरों और होटलों के लिए संपूर्ण एचवीएसी कूलिंग समाधान।',
          image: '/images/cassette-ac.jpg',
          badge: 'Corporate Infrastructure',
          highlights: commercialHvacSolutions.slice(0, 8).map(c => ({ title: language === 'en' ? c.titleEn : c.titleHi, desc: language === 'en' ? c.descEn : c.descHi })),
        };
      case 'industrial-hvac':
        return {
          titleEn: 'Industrial HVAC, Chillers & Plant Maintenance',
          titleHi: 'औद्योगिक एचवीएसी, चिलर्स एवं प्लांट मेंटेनेंस',
          subtitleEn: 'Heavy duty cooling solutions for manufacturing factories, server rooms, cold chains, and chiller plants.',
          subtitleHi: 'फैक्ट्रियों, सर्वर रूम और चिलर प्लांट्स हेतु हैवी-ड्यूटी कूलिंग एवं मेंटेनेंस।',
          image: '/images/industrial-chiller.jpg',
          badge: 'Heavy Plant Engineering',
          highlights: commercialHvacSolutions.map(c => ({ title: language === 'en' ? c.titleEn : c.titleHi, desc: language === 'en' ? c.descEn : c.descHi })),
        };
      case 'amc-maintenance':
        return {
          titleEn: 'Annual Maintenance Contracts (AMC)',
          titleHi: 'वार्षिक रखरखाव अनुबंध (AMC)',
          subtitleEn: 'Comprehensive and non-comprehensive preventive maintenance to eliminate unexpected summer outages and control operating costs.',
          subtitleHi: 'गर्मियों में अचानक खराबी से बचने और खर्च नियंत्रित रखने के लिए संरचित एएमसी प्लान।',
          image: '/images/ahu-plant.jpg',
          badge: 'Preventive Care',
          highlights: amcServices.map(a => ({ title: language === 'en' ? a.titleEn : a.titleHi, desc: language === 'en' ? a.descEn : a.descHi })),
        };
      default:
        return {
          titleEn: 'Air Conditioning & HVAC Service',
          titleHi: 'एयर कंडीशनिंग एवं एचवीएसी सेवा',
          subtitleEn: 'Professional HVAC and cooling solutions by our own certified technician team.',
          subtitleHi: 'हमारी अपनी तकनीशियन टीम द्वारा पेशेवर कूलिंग समाधान।',
          image: '/images/hero-tech.jpg',
          badge: 'KVS Cooper Vains',
          highlights: [],
        };
    }
  };

  const info = getServiceInfo();

  const serviceSchema = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": language === 'en' ? info.titleEn : info.titleHi,
      "description": language === 'en' ? info.subtitleEn : info.subtitleHi,
      "provider": {
        "@type": "HVACBusiness",
        "name": COMPANY_CONFIG.name,
        "telephone": COMPANY_CONFIG.phone,
        "url": COMPANY_CONFIG.siteUrl,
        "image": `${COMPANY_CONFIG.siteUrl}${info.image}`
      },
      "areaServed": [
        { "@type": "City", "name": "Gurugram" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Delhi NCR" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": info.titleEn,
        "itemListElement": info.highlights.map((h, idx) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": h.title,
            "description": h.desc
          },
          "position": idx + 1
        }))
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
          "name": "Services",
          "item": `${COMPANY_CONFIG.siteUrl}/#services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": language === 'en' ? info.titleEn : info.titleHi,
          "item": `${COMPANY_CONFIG.siteUrl}/services/${slug}`
        }
      ]
    }
  ], [info, language, slug]);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#F8F9FB] overflow-hidden">
      <SEO
        title={language === 'en' ? `${info.titleEn} in Gurugram & Delhi NCR` : `${info.titleHi} गुरुग्राम`}
        description={
          language === 'en'
            ? `${info.subtitleEn} Trusted HVAC engineering, genuine parts & fast technician dispatch. Call ${COMPANY_CONFIG.phoneDisplay}.`
            : `${info.subtitleHi} केवीएस कूपर वैन्स - प्रमाणित तकनीशियन और त्वरित सेवा। फोन ${COMPANY_CONFIG.phoneDisplay}।`
        }
        canonicalPath={`/services/${slug}`}
        ogImage={info.image}
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        {/* Enclosed Dark Hero Banner */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-navy-950 via-[#101D32] to-[#15233A] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-navy-800"
        >
          <div className="relative z-10 max-w-3xl">
            {/* Visual Breadcrumb Trail */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/#services" className="hover:text-blue-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-blue-300 font-semibold truncate max-w-[200px] sm:max-w-none">{language === 'en' ? info.titleEn : info.titleHi}</span>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'en' ? 'Back to All Services' : 'सभी सेवाओं पर वापस जाएं'}</span>
            </Link>

            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-blue-300 bg-white/10 border border-white/15 mb-4">
                {info.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {language === 'en' ? info.titleEn : info.titleHi}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {language === 'en' ? info.subtitleEn : info.subtitleHi}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? info.titleEn : info.titleHi)}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  className="px-6 py-3 rounded-full text-xs font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  {language === 'en' ? 'Schedule Service' : 'सर्विस शेड्यूल करें'}
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
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scope Breakdown */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
              {language === 'en' ? 'Service Scope & Technical Capabilities' : 'सेवा का दायरा एवं तकनीकी क्षमताएं'}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              {language === 'en'
                ? 'Executed strictly by our own trained technicians adhering to equipment maker specifications.'
                : 'कंपनी विनिर्देशों के अनुसार हमारी अपनी प्रशिक्षित तकनीशियन टीम द्वारा निष्पादित।'}
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.08, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {info.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp(idx * 0.05, 16)}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">Verified Standard</span>
                  <button
                    type="button"
                    onClick={() => openBookingModal(item.title)}
                    className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    {language === 'en' ? 'Book' : 'बुक करें'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Embedded Form Section */}
      <section className="py-16 md:py-20 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 mb-3">
              {language === 'en' ? 'Direct Booking' : 'सीधी बुकिंग'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              {language === 'en' ? `Book ${info.titleEn}` : `${info.titleHi} बुक करें`}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
              {language === 'en'
                ? 'Submit your requirement below. Our technical supervisor will reach out directly.'
                : 'नीचे अपनी आवश्यकता दर्ज करें। हमारे तकनीकी सुपरवाइजर सीधे संपर्क करेंगे।'}
            </p>
          </div>

          <EnquiryForm initialServiceCategory={language === 'en' ? info.titleEn : info.titleHi} />
        </div>
      </section>
    </div>
  );
};
