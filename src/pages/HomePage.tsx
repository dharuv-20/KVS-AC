import React from 'react';
import { Hero } from '../components/Hero';
import { RepairProblems } from '../components/RepairProblems';
import { ServiceCategories } from '../components/ServiceCategories';
import { FindExpertBanner } from '../components/FindExpertBanner';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { CustomerReviews } from '../components/CustomerReviews';
import { FaqAccordion } from '../components/FaqAccordion';
import { ServiceLocations } from '../components/ServiceLocations';
import { EnquiryForm } from '../components/EnquiryForm';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section: Enclosed Rounded Dark Card */}
      <Hero />

      {/* 2. "We Repair the Most Common AC Problems": 3-Card Interactive Composition */}
      <RepairProblems />

      {/* 3. "We Repair and Service All Major AC & HVAC Systems": 4-Card Composition */}
      <ServiceCategories />

      {/* 4. Middle Banner: "Find a KVS AC Expert Near You Today" */}
      <FindExpertBanner />

      {/* 5. "Why Choose KVS to Repair": Active Card Stack + Tall Photo */}
      <WhyChooseUs />

      {/* 6. "Get Quick Help Access — HVAC Solutions Across Spaces": 3 Tall Cards */}
      <ProjectsGallery />

      {/* 7. Verified Indian Customer Reviews: 8 Five-Star & 2 Four-Star Reviews */}
      <CustomerReviews />

      {/* 8. "Questions Answered FAQ": Left Accordion + Right Card with Avatar */}
      <FaqAccordion />

      {/* 9. "KVS Copper Veins Integrated Solutions": Enclosed Family Banner */}
      <ServiceLocations />

      {/* 10. Contact & Lead Generation Form Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 mb-3">
              {t.contact.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              {t.contact.heading}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal">
              {t.contact.subtitle}
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
