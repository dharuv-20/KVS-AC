import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';

export const StickyMobileBar: React.FC = () => {
  const { language, openBookingModal } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.35, ease: 'easeOut' }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl"
      aria-label="Quick mobile booking actions"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call */}
        <motion.a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-900 text-white font-bold text-[11px] shadow-sm transition-colors"
        >
          <Phone className="w-4 h-4 text-blue-400 mb-0.5" />
          <span>{language === 'en' ? 'Call Us' : 'कॉल करें'}</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href={getWhatsAppBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </motion.a>

        {/* Book Service */}
        <motion.button
          type="button"
          onClick={() => openBookingModal()}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] shadow-sm transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>{language === 'en' ? 'Book Now' : 'बुक करें'}</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};
