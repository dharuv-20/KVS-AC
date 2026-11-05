import React from 'react';
import { AlertTriangle, ArrowRight, Gauge, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { gasRefrigerantServices } from '../data/servicesData';

export const GasRefrigerant: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="gas" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper bg-copper-50 border border-copper/20 mb-3">
            {t.gas.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {t.gas.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            {t.gas.subtitle}
          </p>
        </div>

        {/* Technical Standard Notice Box */}
        <div className="max-w-4xl mx-auto mb-12 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
                {t.gas.warningTitle}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
                {t.gas.warningText}
              </p>
            </div>
          </div>
        </div>

        {/* 8 Gas Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gasRefrigerantServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-navy-100 text-navy-900 w-fit mb-3 group-hover:bg-copper group-hover:text-white transition-colors">
                  <Gauge className="w-4 h-4" />
                </div>

                <h3 className="text-sm font-bold text-navy-900 group-hover:text-copper transition-colors">
                  {language === 'en' ? item.titleEn : item.titleHi}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.descEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? item.titleEn : item.titleHi)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-navy-900 bg-white border border-slate-300 hover:bg-copper hover:text-white hover:border-copper transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'en' ? 'Request Inspection' : 'जांच बुक करें'}</span>
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
