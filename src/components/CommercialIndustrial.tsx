import React from 'react';
import { Building2, Factory, ShieldCheck, ArrowRight, CheckCircle2, PhoneCall, Gauge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { commercialHvacSolutions } from '../data/servicesData';
import { COMPANY_CONFIG } from '../data/config';

export const CommercialIndustrial: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="commercial" className="py-16 md:py-24 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background Graphic / Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper-light bg-navy-800 border border-copper/30 mb-3">
            <Factory className="w-3.5 h-3.5 text-copper" />
            <span>{t.commercial.badge}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t.commercial.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.commercial.description}
          </p>
        </div>

        {/* Highlight Banner / Image Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-navy-800 shadow-2xl relative group">
            <img
              src="/images/ahu-plant.jpg"
              alt="Commercial HVAC rooftop systems and AHU Plant in Gurugram"
              loading="lazy"
              decoding="async"
              width={700}
              height={400}
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold uppercase tracking-wider text-copper-light bg-navy-900/90 px-3 py-1 rounded-md border border-copper/30">
                {language === 'en' ? 'Central & VRV/VRF Systems' : 'सेंट्रल एवं वीआरवी/वीआरएफ सिस्टम'}
              </span>
              <h3 className="text-xl font-extrabold text-white mt-2">
                {language === 'en' ? 'Multi-Floor Climate Engineering & Plant Servicing' : 'बहुमंजिला भवनों एवं प्लांट्स हेतु उन्नत कूलिंग'}
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-navy-900 p-6 rounded-2xl border border-navy-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-copper" />
                {t.commercial.specsTitle}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span>{language === 'en' ? 'Rooftop modular VRV/VRF branch pipe routing & automated controls' : 'रूफटॉप मॉड्यूलर वीआरवी/वीआरएफ ब्रांच पाइपिंग एवं ऑटोमेटेड कंट्रोल'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span>{language === 'en' ? 'Water-cooled & air-cooled chiller descaling, oil testing & compressor overhauls' : 'वाटर-कूल्ड व एयर-कूल्ड चिलर डीस्केलिंग, ऑयल टेस्टिंग और कंप्रेसर ओवरहॉल'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span>{language === 'en' ? 'Air Handling Units (AHU) static pressure balancing and HEPA filtration' : 'एयर हैंडलिंग यूनिट्स (AHU) स्टैटिक प्रेशर बैलेंसिंग और हेपा फिल्ट्रेशन'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <span>{language === 'en' ? 'Cooling tower basin sludge extraction and fill replacement' : 'कूलिंग टॉवर स्लज निष्कासन और फिल पैक रिप्लेसमेंट'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-900/80 p-6 rounded-2xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-400">
                  {language === 'en' ? 'Have a commercial tender or project?' : 'कोई कमर्शियल टेंडर या प्रोजेक्ट है?'}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {COMPANY_CONFIG.phoneDisplay}
                </div>
              </div>
              <button
                type="button"
                onClick={() => openBookingModal('Commercial & Industrial HVAC')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-white bg-copper hover:bg-copper-dark transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
              >
                <span>{t.commercial.ctaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 10 Commercial Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {commercialHvacSolutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-navy-900/90 rounded-xl p-5 border border-navy-800 hover:border-copper/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="text-xs font-mono font-bold text-copper-light mb-2">
                  [ 0{idx + 1} ]
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-copper-light transition-colors">
                  {language === 'en' ? item.titleEn : item.titleHi}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {language === 'en' ? item.descEn : item.descHi}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800">
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? item.titleEn : item.titleHi)}
                  className="text-xs font-bold text-copper-light hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{language === 'en' ? 'Consult Engineer' : 'परामर्श करें'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
