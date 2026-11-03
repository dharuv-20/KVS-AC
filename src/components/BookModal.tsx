import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EnquiryForm } from './EnquiryForm';

export const BookModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, preselectedServiceCategory, language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBookingModal();
    };
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBookingModalOpen, closeBookingModal]);

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Click outside backdrop with fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm cursor-pointer"
            onClick={closeBookingModal}
          />

          {/* Modal Dialog Content with spring scale */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 350 }}
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 border border-slate-200"
          >
            {/* Header Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-blue-50 text-blue-600">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-sm font-extrabold text-navy-900">
                  {language === 'en' ? 'Quick Service Booking' : 'त्वरित सर्विस बुकिंग'}
                </span>
              </div>

              <motion.button
                type="button"
                onClick={closeBookingModal}
                whileHover={shouldReduceMotion ? {} : { rotate: 90 }}
                transition={{ duration: 0.15 }}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body: Enquiry Form */}
            <div className="p-4 sm:p-6">
              <EnquiryForm
                initialServiceCategory={preselectedServiceCategory}
                isModal={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
