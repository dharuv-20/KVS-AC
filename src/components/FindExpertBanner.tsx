import React, { useState } from 'react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/config';

export const FindExpertBanner: React.FC = () => {
  const { language, openBookingModal } = useLanguage();
  const [locationInput, setLocationInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    openBookingModal(locationInput ? `Service at ${locationInput}` : 'General Enquiry');
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
      <div className="max-w-5xl mx-auto">
        
        {/* Enclosed Dark Rounded Card (Exact Match to Reference Banner) */}
        <div className="relative rounded-3xl overflow-hidden bg-navy-950 text-white shadow-2xl border border-navy-800 p-8 sm:p-12 text-center">
          
          {/* Background condensing units photograph with dark overlay */}
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src="/images/condenser.jpg"
              alt="Outdoor AC Condenser Units"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/85" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'en' ? (
                <>
                  Find a <span className="text-blue-400">KVS AC Expert</span> Near You Today
                </>
              ) : (
                <>
                  आज ही अपने निकटतम <span className="text-blue-400">केवीएस एसी एक्सपर्ट</span> से जुड़ें
                </>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              {language === 'en'
                ? 'Direct technician dispatch across Gurugram, Delhi, Noida, Faridabad, and Greater Noida.'
                : 'गुरुग्राम, दिल्ली, नोएडा, फरीदाबाद और ग्रेटर नोएडा में सीधे तकनीशियन प्रेषण।'}
            </p>

            {/* Clean Pill Search / Booking Bar matching Reference Screenshot */}
            <form onSubmit={handleSearch} className="pt-2 max-w-md mx-auto">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20 focus-within:border-blue-400 transition-colors shadow-inner">
                <MapPin className="w-4 h-4 text-blue-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Enter Sector, City or Locality...' : 'सेक्टर, शहर या इलाका दर्ज करें...'}
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full text-xs font-bold text-navy-950 bg-white hover:bg-slate-100 shadow transition-all shrink-0 active:scale-95 whitespace-nowrap"
                >
                  {language === 'en' ? 'Find Now' : 'खोजें'}
                </button>
              </div>
            </form>

            <div className="pt-2">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="text-xs text-blue-300 hover:text-white font-medium inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'en' ? 'Or call directly:' : 'या सीधे कॉल करें:'} <strong className="text-white font-bold">{COMPANY_CONFIG.phoneDisplay}</strong></span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
