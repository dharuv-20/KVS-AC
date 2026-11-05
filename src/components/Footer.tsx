import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-600 pt-16 pb-24 md:pb-12 border-t border-slate-200 overflow-hidden">
      
      {/* Subtle Watermark Text in Background matching Reference Footer */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[90px] sm:text-[140px] lg:text-[180px] font-extrabold text-slate-100 select-none pointer-events-none tracking-tighter whitespace-nowrap opacity-60 z-0">
        KVS COOPER VAINS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/80">
          
          {/* Col 1: Logo & Overview (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="KVS Cooper Vains Integrated Solutions Logo"
                width={140}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                title="Call Directly"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services/residential-ac" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {t.nav.residential}
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-hvac" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {t.nav.commercial}
                </Link>
              </li>
              <li>
                <Link to="/services/industrial-hvac" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {t.nav.industrial}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
              {t.footer.residentialLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/ac-repair" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {language === 'en' ? 'AC Repair & Diagnostics' : 'एसी रिपेयर एवं डायग्नोस्टिक्स'}
                </Link>
              </li>
              <li>
                <Link to="/services/ac-servicing-cleaning" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {language === 'en' ? 'Jet Pump Cleaning' : 'जेट पंप डीप क्लीनिंग'}
                </Link>
              </li>
              <li>
                <Link to="/services/ac-installation" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {language === 'en' ? 'Installation & Shifting' : 'इंस्टालेशन एवं शिफ्टिंग'}
                </Link>
              </li>
              <li>
                <Link to="/services/gas-refilling" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {language === 'en' ? 'Gas Refill & Nitrogen Test' : 'गैस रीफिल व नाइट्रोजन टेस्ट'}
                </Link>
              </li>
              <li>
                <Link to="/services/amc-maintenance" className="text-slate-500 hover:text-blue-600 transition-colors">
                  {language === 'en' ? 'Annual Maintenance (AMC)' : 'एएमसी अनुबंध (AMC)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-navy-900 font-bold hover:text-blue-600">
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </li>

              <li className="pt-1 text-[11px] text-slate-400">
                Gurugram • Delhi • Delhi NCR
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. {t.footer.copyright}
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-blue-600 transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <button
              type="button"
              onClick={() => setShowTermsModal(true)}
              className="hover:text-blue-600 transition-colors"
            >
              {t.footer.termsOfService}
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Modals */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-base font-bold text-navy-900 mb-2">{t.footer.privacyPolicy}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              KVS Cooper Vains Integrated Solutions values your privacy. We use contact details provided through our website enquiry form or direct calls strictly to schedule technician visits and deliver HVAC services.
            </p>
            <button
              type="button"
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2 bg-navy-900 text-white rounded-full text-xs font-bold hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showTermsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-base font-bold text-navy-900 mb-2">{t.footer.termsOfService}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              All AC and HVAC services provided by KVS Cooper Vains Integrated Solutions are carried out by our own technician team. Diagnosis and estimates are shared prior to replacement of parts.
            </p>
            <button
              type="button"
              onClick={() => setShowTermsModal(false)}
              className="w-full py-2 bg-navy-900 text-white rounded-full text-xs font-bold hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
