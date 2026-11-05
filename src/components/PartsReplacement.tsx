import React from 'react';
import { Cpu, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { partsServices } from '../data/servicesData';

export const PartsReplacement: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="parts" className="py-16 md:py-24 bg-[#F8F9FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper bg-copper-50 border border-copper/20 mb-3">
            {t.parts.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {t.parts.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            {t.parts.subtitle}
          </p>
        </div>

        {/* 12 Parts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partsServices.map((part, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-navy-50 text-navy-800 group-hover:bg-copper group-hover:text-white transition-colors">
                    <Cpu className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {language === 'en' ? 'Genuine Spares' : 'ओरिजिनल स्पेयर'}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-copper transition-colors">
                  {language === 'en' ? part.titleEn : part.titleHi}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {language === 'en' ? 'Spec Verified' : 'सत्यापित'}
                </span>
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? part.titleEn : part.titleHi)}
                  className="text-xs font-bold text-copper hover:text-copper-dark inline-flex items-center gap-1"
                >
                  <span>{language === 'en' ? 'Enquire' : 'पूछताछ'}</span>
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
