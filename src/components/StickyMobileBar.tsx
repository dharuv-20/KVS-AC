import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';

export const StickyMobileBar: React.FC = () => {
  const { language, openBookingModal } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call */}
        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-900 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-copper mb-0.5" />
          <span>{language === 'en' ? 'Call Us' : 'कॉल करें'}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Service */}
        <button
          type="button"
          onClick={() => openBookingModal()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-copper hover:bg-copper-dark text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>{language === 'en' ? 'Book Now' : 'बुक करें'}</span>
        </button>
      </div>
    </div>
  );
};
