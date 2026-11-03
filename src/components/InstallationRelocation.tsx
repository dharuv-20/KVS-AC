import React from 'react';
import { ArrowRight, Move, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { installationServices } from '../data/servicesData';

export const InstallationRelocation: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="installation" className="py-16 md:py-24 bg-[#F8F9FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper bg-copper-50 border border-copper/20 mb-3">
            {t.installation.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {t.installation.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            {t.installation.subtitle}
          </p>
        </div>

        {/* 12 Installation Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {installationServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-copper-50 text-copper border border-copper/20 group-hover:bg-copper group-hover:text-white transition-colors">
                    <Move className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">
                    #{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-900 group-hover:text-copper transition-colors">
                  {language === 'en' ? item.titleEn : item.titleHi}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {language === 'en' ? item.descEn : item.descHi}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {language === 'en' ? 'Vacuum-tested' : 'वैक्यूम टेस्टेड'}
                </span>

                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? item.titleEn : item.titleHi)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-copper hover:text-copper-dark"
                >
                  <span>{language === 'en' ? 'Book Install' : 'इंस्टॉल बुक करें'}</span>
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
