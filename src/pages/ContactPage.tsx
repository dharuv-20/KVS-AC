import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';
import { EnquiryForm } from '../components/EnquiryForm';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Enclosed Dark Hero Banner */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-navy-950 via-[#101D32] to-[#15233A] text-white p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto overflow-hidden shadow-2xl border border-navy-800">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-blue-300 bg-white/10 border border-white/15">
              {language === 'en' ? 'Get In Touch' : 'संपर्क करें'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {language === 'en' ? (
                <>
                  Need Professional <span className="text-blue-400">AC Assistance?</span>
                </>
              ) : (
                <>
                  पेशेवर एसी या <span className="text-blue-400">एचवीएसी सहायता चाहिए?</span>
                </>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content: Info Cards & Form */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            
            {/* Left Column: Direct Contact Info (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Phone Card */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                      {t.contact.directPhone}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.contact.directPhoneDesc}
                    </p>
                    <a
                      href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                      className="text-base sm:text-lg font-extrabold text-blue-600 hover:text-blue-700 mt-2 inline-block font-mono whitespace-nowrap"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                      {language === 'en' ? 'WhatsApp Support' : 'व्हाट्सएप सहायता'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {language === 'en' ? 'Send photos, problem videos, or live location' : 'फोटो, समस्या का वीडियो या लोकेशन भेजें'}
                    </p>
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition-colors whitespace-nowrap shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{t.contact.whatsappNow}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Workshop Address Card */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                      {t.contact.workshopAddress}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {COMPANY_CONFIG.address}
                    </p>
                    <a
                      href={COMPANY_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                    >
                      <span>{t.locations.viewMap}</span>
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form (Col 7) */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="h-80 w-full relative">
        <iframe
          title="KVS Copper Veins Location Map"
          src="https://maps.google.com/maps?q=235/18,+Khandsa+Marg,+Laxmi+Garden,+Gurugram,+Haryana+122001&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};
