import React from 'react';
import { ShieldCheck, Users, Wrench, MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/config';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FounderSection } from '../components/FounderSection';

export const AboutPage: React.FC = () => {
  const { language, t, openBookingModal } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Enclosed Dark Hero Banner matching Homepage style */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-navy-950 via-[#101D32] to-[#15233A] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-navy-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-blue-300 bg-white/10 border border-white/15 mb-4">
              {language === 'en' ? 'About KVS Copper Veins' : 'केवीएस कॉपर वेन्स के बारे में'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {language === 'en' ? (
                <>
                  Engineering Rigor in <br className="hidden sm:inline" />
                  <span className="text-blue-400">Air Conditioning & HVAC Solutions</span>
                </>
              ) : (
                <>
                  एयर कंडीशनिंग एवं एचवीएसी में <br className="hidden sm:inline" />
                  <span className="text-blue-400">सच्ची इंजीनियरिंग दक्षता</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t.footer.aboutText}
            </p>
          </div>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900">
                  {language === 'en' ? 'Our Own Technician Workforce' : 'हमारी अपनी तकनीशियन टीम'}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {language === 'en'
                    ? 'We do not subcontract or outsource your home or office cooling to unverified commission agents. Every technician is accountable, trained in modern inverter technology, and directly supervised.'
                    : 'हम काम किसी कमीशन एजेंट या अनवेरिफाइड तीसरे पक्ष को नहीं सौंपते। प्रत्येक तकनीशियन सीधे हमारे साथ काम करता है और आधुनिक इन्वर्टर तकनीकों में प्रशिक्षित है।'}
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900">
                  {language === 'en' ? 'Authentic Technical Standards' : 'सच्चे तकनीकी मानक'}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {language === 'en'
                    ? 'We prioritize proper diagnostics over quick-fix patchwork. Whether nitrogen leak tests up to 400 PSI or manufacturer-specified dual stage vacuuming, our procedures protect your equipment.'
                    : 'हम सतही जुगाड़ के बजाय समस्या की जड़ का निदान करते हैं। चाहे 400 PSI तक का नाइट्रोजन लीक टेस्ट हो या डीप वैक्यूमिंग, हमारे नियम आपके एसी की सुरक्षा करते हैं।'}
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-900">
                  {language === 'en' ? 'Transparent Communication' : 'पारदर्शी संवाद एवं सत्यनिष्ठा'}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {language === 'en'
                    ? 'No fabricated claims or hidden replacement costs. We diagnose genuine faults, show you the damaged part (capacitor, fan motor, or coil leak), and offer straightforward estimates.'
                    : 'कोई झूठे वादे या छिपे हुए खर्चे नहीं। हम खराबी का वास्तविक कारण स्पष्ट दिखाते हैं और उचित लागत का अनुमान प्रस्तुत करते हैं।'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Leadership Section */}
      <FounderSection />

      {/* Why Choose Section */}
      <WhyChooseUs />

      {/* CTA Card matching Reference Banner */}
      <div className="py-12 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {language === 'en' ? 'Ready to Work with Reliable HVAC Professionals?' : 'विश्वसनीय एचवीएसी पेशेवरों के साथ काम करने के लिए तैयार हैं?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal">
            {language === 'en'
              ? 'Contact our service desk today for residential repairs, commercial plant AMC, or equipment installations.'
              : 'घरेलू मरम्मत, कमर्शियल प्लांट एएमसी या इंस्टालेशन हेतु आज ही हमारे सर्विस डेस्क से संपर्क करें।'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="px-6 py-3 rounded-full text-xs font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-md transition-all whitespace-nowrap"
            >
              {t.hero.primaryCta}
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
