import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EnquiryForm } from './EnquiryForm';

export const BookModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, preselectedServiceCategory, language } = useLanguage();

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

  if (!isBookingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={closeBookingModal} />

      {/* Modal Dialog Content */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 border border-slate-200">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-copper-50 text-copper">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-sm font-extrabold text-navy-900">
              {language === 'en' ? 'Quick Service Booking' : 'त्वरित सर्विस बुकिंग'}
            </span>
          </div>

          <button
            type="button"
            onClick={closeBookingModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Enquiry Form */}
        <div className="p-4 sm:p-6">
          <EnquiryForm
            initialServiceCategory={preselectedServiceCategory}
            isModal={true}
          />
        </div>

      </div>
    </div>
  );
};
