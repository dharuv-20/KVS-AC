import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServiceCategories: React.FC = () => {
  const { language, openBookingModal } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Reference */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            {language === 'en' ? (
              <>
                We Repair and Service All <br />
                <span className="text-blue-600">Major AC & HVAC Systems</span>
              </>
            ) : (
              <>
                हम सर्विस और रिपेयर करते हैं सभी <br />
                <span className="text-blue-600">प्रमुख एसी एवं एचवीएसी सिस्टम्स</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal">
            {language === 'en'
              ? 'All repairs and maintenance are performed by our own trained technicians to keep your environment comfortable.'
              : 'सभी मरम्मत और मेंटेनेंस हमारी अपनी प्रशिक्षित तकनीशियन टीम द्वारा निष्पादित किए जाते हैं।'}
          </p>
        </div>

        {/* 4-Card Composition matching Reference Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Split & Inverter AC Repair */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Split & Inverter AC Repair' : 'स्प्लिट एवं इन्वर्टर एसी रिपेयर'}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {language === 'en'
                  ? 'Expert diagnostics for cooling failures, BLDC motor faults, PCB circuit repair, and silent indoor unit balancing.'
                  : 'कूलिंग विफलता, बीएलडीसी मोटर खराबी, पीसीबी सर्किट रिपेयर और कंपन-मुक्त इंडोर बैलेंसिंग।'}
              </p>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden h-48 sm:h-56 relative bg-slate-200">
              <img
                src="/images/split-ac.jpg"
                alt="Split AC Servicing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <Link
                to="/services/residential-ac"
                className="absolute bottom-3 left-3 text-xs font-bold text-white bg-navy-950/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full hover:bg-blue-600 transition-colors"
              >
                {language === 'en' ? 'View Service Details →' : 'विवरण देखें →'}
              </Link>
            </div>
          </div>

          {/* Card 2: Commercial Cassette & VRV Systems */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Cassette & Commercial VRV Systems' : 'कैसेट एवं कमर्शियल वीआरवी सिस्टम'}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {language === 'en'
                  ? 'Multi-zone corporate climate systems, 4-way ceiling cassette units, branch piping, and electronic expansion valve calibration.'
                  : 'मल्टी-ज़ोन कॉर्पोरेट कूलिंग, 4-वे सीलिंग कैसेट यूनिट्स, ब्रांच पाइपिंग और एक्सपेंशन वाल्व कैलिब्रेशन।'}
              </p>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden h-48 sm:h-56 relative bg-slate-200">
              <img
                src="/images/cassette-ac.jpg"
                alt="Cassette & Commercial VRV Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <Link
                to="/services/commercial-hvac"
                className="absolute bottom-3 left-3 text-xs font-bold text-white bg-navy-950/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full hover:bg-blue-600 transition-colors"
              >
                {language === 'en' ? 'Commercial Solutions →' : 'कमर्शियल समाधान →'}
              </Link>
            </div>
          </div>

          {/* Card 3: Jet Pump Cleaning & Deep Service */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                  {language === 'en' ? 'Jet Pump Cleaning & Wet Service' : 'जेट पंप क्लीनिंग एवं वेट सर्विस'}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {language === 'en'
                  ? 'Pressure jet washing with waterproof catch jacket. Restores cooling airflow and eliminates fungal odor.'
                  : 'वाटरप्रूफ जैकेट के साथ हाई-प्रेशर जेट वॉश। कमरे में पानी गिराए बिना कॉइल की गहरी सफाई।'}
              </p>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden h-48 sm:h-56 relative bg-slate-200">
              <img
                src="/images/jet-cleaning.jpg"
                alt="AC Jet Cleaning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <Link
                to="/services/ac-servicing-cleaning"
                className="absolute bottom-3 left-3 text-xs font-bold text-white bg-navy-900 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'en' ? 'View Cleaning Services' : 'क्लीनिंग सेवाएं देखें'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Industrial Chiller & AHU Services */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                {language === 'en' ? 'Industrial Chiller & AHU Plants' : 'इंडस्ट्रियल चिलर एवं एएचयू प्लांट्स'}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {language === 'en'
                  ? 'Heavy plant maintenance, shell-and-tube descaling, static pressure duct balancing, and annual AMC contracts.'
                  : 'चिलर प्लांट मेंटेनेंस, शेल-एंड-ट्यूब डीस्केलिंग, डक्ट बैलेंसिंग और वार्षिक एएमसी अनुबंध।'}
              </p>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden h-48 sm:h-56 relative bg-slate-200">
              <img
                src="/images/industrial-chiller.jpg"
                alt="Industrial Chiller Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <Link
                to="/services/industrial-hvac"
                className="absolute bottom-3 left-3 text-xs font-bold text-white bg-navy-950/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full hover:bg-blue-600 transition-colors"
              >
                {language === 'en' ? 'Industrial Capabilities →' : 'औद्योगिक क्षमताएं →'}
              </Link>
            </div>
          </div>

        </div>

        {/* Reference Mobile Banner Promo Block: Blue Card */}
        <div className="mt-8 max-w-5xl mx-auto bg-blue-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                {language === 'en' ? 'Every AC Technician is Background-Verified & Direct' : 'हर एसी तकनीशियन पृष्ठभूमि सत्यापित और हमारी अपनी टीम से है'}
              </h4>
              <p className="text-xs text-blue-100 mt-0.5">
                {language === 'en' ? 'Equipped with digital manifold gauges, vacuum pumps & pure refrigerants.' : 'डिजिटल मैनिफोल्ड गेज, वैक्यूम पंप और शुद्ध रेफ्रिजरेंट से सुसज्जित।'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal()}
            className="px-6 py-3 rounded-full text-xs font-bold text-blue-600 bg-white hover:bg-slate-100 shadow-md transition-all shrink-0 active:scale-95"
          >
            {language === 'en' ? 'Book Service Now' : 'अभी सर्विस बुक करें'}
          </button>
        </div>

      </div>
    </section>
  );
};
