import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicingServices } from '../data/servicesData';

export const ServicingCleaning: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="servicing" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper bg-copper-50 border border-copper/20 mb-3">
              {t.servicing.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              {t.servicing.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {t.servicing.subtitle}
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-navy-900 text-white rounded-2xl p-5 sm:p-6 border border-navy-800 shadow-xl max-w-md w-full">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-copper" />
                <h4 className="text-sm font-bold text-white">
                  {language === 'en' ? 'Why Jet Pump Service?' : 'जेट पंप सर्विसिंग क्यों आवश्यक है?'}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'en'
                  ? 'Standard dry cleaning misses up to 80% of fungal grime trapped inside aluminum coil fins. Our waterproof catch jacket jet wash flushes out 100% of accumulated sludge with zero indoor water spillage.'
                  : 'साधारण सूखी सफाई से कॉइल के अंदर जमी 80% फफूंद नहीं निकलती। हमारा वाटरप्रूफ कैच-जैकेट जेट वॉश कमरे में बिना एक बूंद गिराए पूरी गंदगी बाहर निकालता है।'}
              </p>
            </div>
          </div>
        </div>

        {/* 8 Servicing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicingServices.map((svc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-navy-100/60 text-copper flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-copper group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-copper transition-colors">
                  {language === 'en' ? svc.titleEn : svc.titleHi}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {language === 'en' ? svc.descEn : svc.descHi}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? svc.titleEn : svc.titleHi)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-navy-900 bg-white border border-slate-300 hover:bg-copper hover:text-white hover:border-copper transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'en' ? 'Book Cleaning' : 'सफाई बुक करें'}</span>
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
