import React from 'react';
import { ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/config';

export const Hero: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto">
        
        {/* Enclosed Rounded Dark Card Container */}
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#0c1626] via-[#101D32] to-[#16253d] text-white overflow-hidden shadow-2xl border border-navy-800">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-copper/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Balanced & Centered */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Content Column (Cols 7) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
              
              {/* Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-300 text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>{language === 'en' ? 'Professional HVAC & AC Engineering' : 'पेशेवर एचवीएसी एवं एसी समाधान'}</span>
                </div>
              </div>

              {/* Headline with Clean Block Spans (Zero Overlap Guaranteed) */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-normal leading-tight">
                {language === 'en' ? (
                  <>
                    <span className="block leading-tight">Fast AC & HVAC</span>
                    <span className="block leading-tight mt-1">
                      Services <span className="text-blue-400">Nearby</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block leading-tight">आपके निकटतम</span>
                    <span className="block leading-tight mt-1 text-blue-400">
                      विश्वसनीय एसी सेवाएं
                    </span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg font-normal leading-relaxed">
                {t.hero.subtext}
              </p>

              {/* Pill Buttons CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-xl transition-all transform active:scale-95 flex items-center gap-2 group whitespace-nowrap"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-navy-900 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all flex items-center gap-2 whitespace-nowrap font-mono"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-5 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.hero.trust1Title}</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.hero.trust2Title}</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Gurugram & Delhi NCR</span>
                </div>
              </div>

            </div>

            {/* Right Photo Column: Perfectly Proportioned (Cols 5) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-navy-900 h-[320px] sm:h-[380px]">
                <img
                  src="/images/hero-tech.jpg"
                  alt="Professional Indian HVAC Technician"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                
                {/* Floating Bottom Card Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-navy-900/90 backdrop-blur-md p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                        {language === 'en' ? 'Our Own Technicians' : 'हमारी अपनी टीम'}
                      </div>
                      <div className="text-[9.5px] text-slate-300">
                        {language === 'en' ? 'Trained • Verified • On Duty' : 'प्रशिक्षित • सत्यापित • कार्यरत'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-400/20 whitespace-nowrap">
                    Delhi NCR
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
