import React from 'react';
import { ShieldCheck, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { amcServices } from '../data/servicesData';

export const AmcMaintenance: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section id="amc" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-copper bg-copper-50 border border-copper/20 mb-3">
            {t.amc.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {t.amc.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            {t.amc.subtitle}
          </p>
        </div>

        {/* Benefits Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-navy-900 mb-2">
              {language === 'en' ? 'Lower Electricity Bills' : 'कम बिजली का बिल'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'Clean coils, optimized refrigerant pressures, and lubricated blower motors allow compressors to cool faster and cut off naturally, reducing power consumption.'
                : 'साफ कॉइल, सही गैस प्रेशर और स्मूथ ब्लोअर मोटर से कंप्रेसर तेजी से कमरा ठंडा करता है और समय पर कट-ऑफ होकर भारी बिजली बिल बचाता है।'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-navy-900 mb-2">
              {language === 'en' ? 'Avoid Peak Summer Breakdowns' : 'गर्मियों में अचानक खराबी से बचाव'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? '90% of mid-summer cooling outages are caused by small unaddressed issues like weak capacitors, dusty condenser fins, or pinhole flare leaks identified during regular checkups.'
                : 'गर्मियों में 90% खराबी कमजोर कैपेसिटर या जमी हुई धूल के कारण होती है जिसे नियमित एएमसी जांच में पहले ही ठीक कर लिया जाता है।'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-navy-900 mb-2">
              {language === 'en' ? 'Extended Equipment Lifespan' : 'उपकरण की लंबी उम्र'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'Scheduled preventive inspections prevent compressor thermal overload and mechanical seizure, prolonging system life by several years.'
                : 'नियमित प्रिवेंटिव सर्विसिंग से कंप्रेसर पर अत्यधिक लोड नहीं पड़ता और आपका एसी बिना किसी बड़ी लागत के वर्षों तक सुचारू चलता है।'}
            </p>
          </div>
        </div>

        {/* 10 AMC Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {amcServices.map((amc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <span className="p-2 rounded-lg bg-navy-50 text-copper border border-navy-100 group-hover:bg-copper group-hover:text-white transition-colors inline-block mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-copper transition-colors">
                  {language === 'en' ? amc.titleEn : amc.titleHi}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {language === 'en' ? amc.descEn : amc.descHi}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal(language === 'en' ? amc.titleEn : amc.titleHi)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-navy-900 bg-slate-50 border border-slate-200 hover:bg-copper hover:text-white hover:border-copper transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'en' ? 'Get AMC Quote' : 'एएमसी कोटेशन'}</span>
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
