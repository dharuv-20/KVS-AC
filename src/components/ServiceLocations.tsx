import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Navigation, ExternalLink, Clock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';
import { fadeInUp } from '../utils/motion';

interface LocalityItem {
  id: string;
  name: string;
  zone: string;
  pincode: string;
  coverage: string;
}

const ncrLocalities: LocalityItem[] = [
  { id: 'khandsa', name: 'Khandsa Marg & Laxmi Garden', zone: 'Gurugram HQ', pincode: '122001', coverage: 'Direct HQ service desk for repairs, diagnostics & jet servicing.' },
  { id: 'dlf', name: 'DLF Phase 1, 2, 3, 4, 5', zone: 'Gurugram East', pincode: '122002', coverage: 'Luxury apartments, villas, and commercial multi-split VRVs.' },
  { id: 'cyber-city', name: 'DLF Cyber City & Cyber Hub', zone: 'Commercial Hub', pincode: '122002', coverage: 'Corporate offices, server-room precision cooling, and cassette ACs.' },
  { id: 'golf-course', name: 'Golf Course Rd & Sector 54–57', zone: 'Gurugram South', pincode: '122011', coverage: 'High-rise residential condos, central VRF, and inverter ACs.' },
  { id: 'sohna-road', name: 'Sohna Road & Sector 47–50', zone: 'Gurugram Central', pincode: '122003', coverage: 'Gated societies, retail showrooms, and residential AMC visits.' },
  { id: 'sector-14', name: 'Sector 14, 15, 17 & Old Gurgaon', zone: 'Gurugram North', pincode: '122001', coverage: 'Split AC, window AC repair, and copper pipe gas leak fixing.' },
  { id: 'new-gurgaon', name: 'New Gurgaon (Sec 81–95) & Dwarka Exp', zone: 'Gurugram West', pincode: '122004', coverage: 'New society installations, copper piping laying, and jet servicing.' },
  { id: 'south-delhi', name: 'South Delhi (GK, Saket, Vasant Kunj)', zone: 'Delhi NCR', pincode: '110017', coverage: 'Independent homes, clinics, and commercial VRV plant servicing.' },
  { id: 'noida', name: 'Noida (Sec 18, 62, Expressway)', zone: 'Delhi NCR', pincode: '201301', coverage: 'Corporate facilities, IT server rooms, and industrial chillers.' },
];

export const ServiceLocations: React.FC = () => {
  const { language, openBookingModal } = useLanguage();
  const [selectedLocality, setSelectedLocality] = useState<LocalityItem>(ncrLocalities[0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="locations" className="py-16 md:py-24 bg-[#F8F9FB] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Large Rounded Container matching the Reference Family Banner */}
        <motion.div
          variants={fadeInUp(0, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column (Cols 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gurugram • Delhi • Delhi NCR</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
              KVS Cooper Vains Integrated Solutions
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl font-normal">
              {language === 'en'
                ? 'Providing dependable AC installation, emergency repair, jet pump servicing, and industrial chiller plant contracts with our own trained technicians.'
                : 'अपनी प्रशिक्षित तकनीशियन टीम के साथ विश्वसनीय एसी इंस्टालेशन, इमरजेंसी रिपेयर, जेट पंप सर्विसिंग और इंडस्ट्रियल चिलर मेंटेनेंस।'}
            </p>

            <div className="pt-2 text-xs text-slate-700 flex items-start gap-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-navy-900 font-bold mb-0.5">
                  {language === 'en' ? 'Registered Workshop & Service Hub:' : 'पंजीकृत वर्कशॉप एवं सेवा कार्यालय:'}
                </strong>
                <span>{COMPANY_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inner Booking Box matching Reference (Cols 5) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
            <div className="text-xs font-bold text-navy-900 uppercase tracking-wider">
              {language === 'en' ? 'Direct Booking Channels' : 'सीधी बुकिंग चैनल'}
            </div>

            <p className="text-xs text-slate-500">
              {language === 'en' ? 'Connect directly with our service desk:' : 'हमारे सर्विस डेस्क से तुरंत संपर्क करें:'}
            </p>

            <div className="pt-1 space-y-2">
              <motion.a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-navy-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </motion.a>

              <motion.a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Instant Chat</span>
              </motion.a>

              <motion.button
                type="button"
                onClick={() => openBookingModal()}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-navy-900 hover:bg-blue-600 shadow-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{language === 'en' ? 'Book Online' : 'ऑनलाइन बुक करें'}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Interactive Gurugram & Delhi NCR Locality Service Hub & Rapid Dispatch Checker */}
        <motion.div
          variants={fadeInUp(0.1, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Local Service Coverage Directory' : 'स्थानीय सेवा कवरेज डायरेक्टरी'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900">
                {language === 'en' ? 'Check Service Availability in Your Area' : 'अपने क्षेत्र में सेवा उपलब्धता जांचें'}
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              HQ Hub: <strong className="text-navy-900 font-bold">Khandsa Marg, Laxmi Garden (Gurugram)</strong>
            </div>
          </div>

          {/* Locality Grid Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5">
            {ncrLocalities.map((loc) => {
              const isSelected = selectedLocality.id === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocality(loc)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-navy-950 text-white border-navy-900 shadow-md ring-2 ring-blue-500/40'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      {loc.zone}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/10 text-white' : 'bg-slate-200/80 text-slate-600'}`}>
                      {loc.pincode}
                    </span>
                  </div>
                  <div className="text-xs font-bold mt-1.5 leading-snug">
                    {loc.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Locality Dispatch Status Box */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                  Service Area: {selectedLocality.name}
                </span>
                <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {language === 'en' ? 'Direct Service Coverage' : 'नियमित सेवा क्षेत्र'}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                {selectedLocality.coverage}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => openBookingModal(`Service in ${selectedLocality.name}`)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'en' ? `Book in ${selectedLocality.name.split(' ')[0]}` : 'इस क्षेत्र में बुक करें'}</span>
              </button>
              <a
                href={getWhatsAppBookingUrl(`Hello KVS, I need AC technician service at ${selectedLocality.name} (${selectedLocality.pincode}). Please check slot availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Embedded Interactive Google Map Location Card */}
        <motion.div
          variants={fadeInUp(0.15, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h4 className="text-base sm:text-lg font-extrabold text-navy-900">
                  {language === 'en' ? 'Our Workshop & Service Hub on Google Maps' : 'गूगल मैप्स पर हमारा वर्कशॉप एवं सर्विस केंद्र'}
                </h4>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                235/18, Khandsa Marg, Laxmi Garden, Gurugram, Haryana – 122001
              </p>
            </div>

            <motion.a
              href={COMPANY_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Get Driving Directions' : 'दिशा-निर्देश प्राप्त करें'}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </motion.a>
          </div>

          {/* Clean Google Map Iframe Container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner h-[340px] sm:h-[400px] w-full bg-slate-100">
            <iframe
              title="KVS Cooper Vains Google Maps Location"
              src={COMPANY_CONFIG.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-lg text-navy-900 max-w-xs hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <strong className="text-xs font-bold">KVS Cooper Vains Hub</strong>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Technician dispatch covering all Gurugram sectors & Delhi NCR.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
