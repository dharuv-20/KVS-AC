import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqList } from '../data/servicesData';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';

export const FaqAccordion: React.FC = () => {
  const { language, openBookingModal } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Exact Layout matching Reference Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Accordion Rows matching Reference (Cols 7) */}
          <div className="lg:col-span-7 space-y-3">
            {faqList.slice(0, 6).map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-slate-300 shadow-md p-5'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80 px-5 py-3.5 cursor-pointer'
                  }`}
                  onClick={() => toggle(faq.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm font-bold text-navy-900 pr-2">
                      {language === 'en' ? faq.questionEn : faq.questionHi}
                    </span>
                    <button
                      type="button"
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-navy-950 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-200">
                      {language === 'en' ? faq.answerEn : faq.answerHi}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: "Questions Answered FAQ" Side Card matching Reference (Cols 5) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight leading-tight">
                  {language === 'en' ? (
                    <>
                      Questions <br />
                      <span className="text-blue-600">Answered FAQ</span>
                    </>
                  ) : (
                    <>
                      अक्सर पूछे जाने <br />
                      <span className="text-blue-600">वाले सवाल</span>
                    </>
                  )}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                  {language === 'en'
                    ? 'Find quick answers to common questions about our AC repairs, technician allocation, and AMC agreements.'
                    : 'एसी रिपेयर, तकनीशियन आवंटन और एएमसी के बारे में अक्सर पूछे जाने वाले प्रश्नों के उत्तर।'}
                </p>
              </div>

              {/* Blue CTA Pill Button matching Reference */}
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="w-full py-3 px-4 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all active:scale-95 text-center"
              >
                {language === 'en' ? 'Ask Us a Question' : 'हमसे सवाल पूछें'}
              </button>

              {/* Support Avatar Pill Card at bottom featuring Founder matching Reference */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-blue-100">
                  <img
                    src={COMPANY_CONFIG.founder.image}
                    alt={COMPANY_CONFIG.founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-navy-900 truncate">
                    {COMPANY_CONFIG.founder.name}
                  </div>
                  <div className="text-[10.5px] text-slate-500">
                    {language === 'en' ? 'Founder & Technical Director' : 'संस्थापक एवं तकनीकी निदेशक'}
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold text-navy-900 bg-white border border-slate-300 hover:bg-slate-100 shadow-sm shrink-0 transition-colors"
                >
                  {language === 'en' ? 'Call Now' : 'कॉल करें'}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
