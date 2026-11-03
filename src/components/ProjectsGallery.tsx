import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectsShowcase } from '../data/servicesData';

export const ProjectsGallery: React.FC = () => {
  const { language, openBookingModal } = useLanguage();

  const featured = projectsShowcase.slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#F8F9FB] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Section Header matching Reference Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 max-w-5xl mx-auto">
          <div className="max-w-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {language === 'en' ? (
                <>
                  Get Quick Help Access <br />
                  <span className="text-blue-600">HVAC Solutions & Projects</span>
                </>
              ) : (
                <>
                  त्वरित सहायता प्राप्त करें <br />
                  <span className="text-blue-600">एचवीएसी समाधान एवं प्रोजेक्ट्स</span>
                </>
              )}
            </h2>
          </div>

          <div className="max-w-sm text-xs text-slate-500 leading-relaxed font-normal">
            {language === 'en'
              ? 'Explore our engineering scope across residential apartments, corporate offices, and heavy industrial facilities.'
              : 'आवासीय अपार्टमेंट, कॉर्पोरेट दफ्तरों और औद्योगिक परिसरों में हमारे तकनीकी कार्य का अवलोकन करें।'}
          </div>
        </div>

        {/* 3 Tall Cards with Dark Overlay matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="group relative rounded-3xl overflow-hidden h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 bg-navy-950 flex flex-col justify-end p-6"
            >
              {/* Background Photo */}
              <img
                src={proj.image}
                alt={language === 'en' ? proj.titleEn : proj.titleHi}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-transparent" />

              {/* Bottom Content Content */}
              <div className="relative z-10 text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-navy-900/80 px-2.5 py-1 rounded-full border border-blue-400/20 backdrop-blur-sm">
                  {language === 'en' ? proj.categoryEn : proj.categoryHi}
                </span>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {language === 'en' ? proj.titleEn : proj.titleHi}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {language === 'en' ? proj.descEn : proj.descHi}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openBookingModal(language === 'en' ? proj.titleEn : proj.titleHi)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-blue-600 px-3.5 py-1.5 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <span>{language === 'en' ? 'Explore Details' : 'विवरण देखें'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Pill Button matching Reference */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => openBookingModal()}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-navy-900 hover:bg-blue-600 transition-colors shadow-md"
          >
            <span>{language === 'en' ? 'View All Solutions' : 'सभी समाधान देखें'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="mt-3 text-[10px] text-slate-400">
            *Illustrative HVAC solutions until actual project photographs are supplied.
          </div>
        </div>

      </div>
    </section>
  );
};
