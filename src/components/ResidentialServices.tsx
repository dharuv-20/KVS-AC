import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { residentialACTypes } from '../data/servicesData';

export const ResidentialServices: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="residential" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper bg-copper-50 border border-copper/20 mb-3">
              {t.residential.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              {t.residential.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
              {t.residential.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal('Residential AC Services')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-navy-900 hover:bg-copper transition-all shadow-md shrink-0 self-start md:self-end"
          >
            <Sparkles className="w-4 h-4 text-copper-100" />
            <span>{t.residential.bookResidential}</span>
          </button>
        </div>

        {/* 10 Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {residentialACTypes.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-32 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={language === 'en' ? item.nameEn : item.nameHi}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-copper/90 px-2 py-0.5 rounded">
                    {language === 'en' ? 'Certified Service' : 'सत्यापित सेवा'}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-navy-900 group-hover:text-copper transition-colors">
                    {language === 'en' ? item.nameEn : item.nameHi}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {language === 'en' ? item.descEn : item.descHi}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? item.nameEn : item.nameHi)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-navy-900 bg-white border border-slate-300 hover:bg-copper hover:text-white hover:border-copper transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'en' ? 'Book Service' : 'सर्विस बुक करें'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Compatibility Banner */}
        <div className="mt-12 bg-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-navy-800 rounded-xl text-copper border border-navy-700 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {language === 'en' ? 'Compatible with All Leading AC Brands' : 'सभी प्रमुख एसी ब्रांड्स के लिए विशेषज्ञ सेवा'}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {language === 'en'
                  ? 'Daikin • Voltas • Blue Star • LG • Carrier • Hitachi • O General • Mitsubishi • Godrej • Lloyd • Panasonic • Samsung'
                  : 'डायकिन • वोल्टास • ब्लू स्टार • एलजी • कैरियर • हिताची • ओ जनरल • मित्सुबिशी • गोदरेज • लॉयड • पैनासोनिक'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-slate-300 hidden sm:inline">
              {language === 'en' ? 'Trained on Inverter & Dual Inverter PCB circuitry' : 'इन्वर्टर और पीसीबी सर्किट्री में प्रशिक्षित'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
