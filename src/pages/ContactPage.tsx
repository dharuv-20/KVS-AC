import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';
import { EnquiryForm } from '../components/EnquiryForm';
import { fadeInUp, staggerContainer } from '../utils/motion';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Enclosed Dark Hero Banner */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-navy-950 via-[#101D32] to-[#15233A] text-white p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto overflow-hidden shadow-2xl border border-navy-800"
        >
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
        </motion.div>
      </div>

      {/* Main Content: Info Cards & Form */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            
            {/* Left Column: Direct Contact Info (Col 5) */}
            <motion.div
              variants={staggerContainer(0.1, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-5 space-y-4"
            >
              {/* Phone Card */}
              <motion.div
                variants={fadeInUp(0, 16)}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
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
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                variants={fadeInUp(0.08, 16)}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
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
                    <motion.a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition-colors whitespace-nowrap shadow-sm cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{t.contact.whatsappNow}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Workshop Address Card */}
              <motion.div
                variants={fadeInUp(0.16, 16)}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
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
              </motion.div>

              {/* Founder Leadership Card */}
              <motion.div
                variants={fadeInUp(0.24, 16)}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-slate-50 rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:shadow-md transition-all"
              >
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-blue-100">
                  <img
                    src={COMPANY_CONFIG.founder.image}
                    alt={COMPANY_CONFIG.founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {language === 'en' ? 'Direct Technical Oversight' : 'संस्थापक की सीधी निगरानी'}
                  </div>
                  <div className="text-xs font-bold text-navy-900 truncate">
                    {COMPANY_CONFIG.founder.name}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {language === 'en' ? 'Founder & Managing Director' : 'संस्थापक एवं प्रबंध निदेशक'}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Lead Form (Col 7) */}
            <motion.div
              variants={fadeInUp(0.1, 20)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-7"
            >
              <EnquiryForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="h-80 w-full relative">
        <iframe
          title="KVS Copper Veins Location Map"
          src={COMPANY_CONFIG.googleMapsEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};
