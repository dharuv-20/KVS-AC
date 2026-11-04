import React, { useMemo } from 'react';
import { Hero } from '../components/Hero';
import { RepairProblems } from '../components/RepairProblems';
import { ServiceCategories } from '../components/ServiceCategories';
import { FindExpertBanner } from '../components/FindExpertBanner';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FounderSection } from '../components/FounderSection';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { CustomerReviews } from '../components/CustomerReviews';
import { FaqAccordion } from '../components/FaqAccordion';
import { ServiceLocations } from '../components/ServiceLocations';
import { EnquiryForm } from '../components/EnquiryForm';
import { SEO } from '../components/SEO';
import { COMPANY_CONFIG } from '../data/config';
import { faqList, indianReviewsList } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  const homeSchema = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      "@id": `${COMPANY_CONFIG.siteUrl}/#business`,
      "name": COMPANY_CONFIG.name,
      "alternateName": COMPANY_CONFIG.shortName,
      "url": COMPANY_CONFIG.siteUrl,
      "logo": `${COMPANY_CONFIG.siteUrl}/logo.png`,
      "image": `${COMPANY_CONFIG.siteUrl}/og-image.jpg`,
      "description": "Professional residential, commercial and industrial AC & HVAC repair, installation, maintenance & AMC services in Gurugram and Delhi NCR.",
      "telephone": COMPANY_CONFIG.phone,
      "priceRange": "₹₹",
      "founder": {
        "@type": "Person",
        "name": COMPANY_CONFIG.founder.name,
        "jobTitle": COMPANY_CONFIG.founder.roleEn
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "235/18, Khandsa Marg, Laxmi Garden",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": COMPANY_CONFIG.coordinates.lat,
        "longitude": COMPANY_CONFIG.coordinates.lng
      },
      "hasMap": COMPANY_CONFIG.googleMapsUrl,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "21:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Gurugram" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Faridabad" },
        { "@type": "City", "name": "Ghaziabad" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": indianReviewsList.slice(0, 5).map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "datePublished": "2026-10-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating,
          "bestRating": "5"
        },
        "reviewBody": r.reviewEn
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": language === 'en' ? "How to Book Professional AC Repair Service in Gurugram" : "गुरुग्राम में एसी रिपेयर कैसे बुक करें",
      "description": "Step-by-step guide to booking an in-house HVAC engineer with KVS Cooper Vains in Gurugram & Delhi NCR.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select AC Issue or Service",
          "text": "Choose your AC type (Split, Window, Inverter, Cassette) and problem symptom (No Cooling, Gas Leak, Water Dripping, PCB error)."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Share Location in Gurugram or NCR",
          "text": "Provide your sector or locality (e.g. DLF, Cyber City, Golf Course Road, Khandsa, Sohna Road) to schedule technician visit."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "In-House Technician Inspection",
          "text": "Our vetted engineer arrives with digital manifold gauges, explains diagnostic findings upfront, and repairs with genuine OEM parts."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.slice(0, 8).map((faq) => ({
        "@type": "Question",
        "name": language === 'en' ? faq.questionEn : faq.questionHi,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'en' ? faq.answerEn : faq.answerHi
        }
      }))
    }
  ], [language]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={language === 'en' ? "Best AC & HVAC Services in Gurugram & Delhi NCR" : "सर्वश्रेष्ठ एसी एवं एचवीएसी सेवाएं गुरुग्राम"}
        description={
          language === 'en'
            ? "Fast, reliable residential & commercial AC repair, servicing, installation, gas charging & HVAC AMC in Gurugram, Delhi & NCR. Certified technicians, transparent pricing. Call +91 79828 90653."
            : "गुरुग्राम एवं दिल्ली एनसीआर में त्वरित, विश्वसनीय एसी रिपेयर, सर्विसिंग, इंस्टालेशन, गैस रिफिलिंग व एएमसी। प्रमाणित तकनीशियन, उचित दरें।"
        }
        canonicalPath="/"
        schema={homeSchema}
      />

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

      {/* 6. Founder & Technical Leadership: Krishna Chaudhary */}
      <FounderSection />

      {/* 7. "Get Quick Help Access — HVAC Solutions Across Spaces": 3 Tall Cards */}
      <ProjectsGallery />

      {/* 8. Verified Indian Customer Reviews: 8 Five-Star & 2 Four-Star Reviews */}
      <CustomerReviews />

      {/* 9. "Questions Answered FAQ": Left Accordion + Right Card with Avatar */}
      <FaqAccordion />

      {/* 10. "KVS Cooper Vains Integrated Solutions": Enclosed Family Banner */}
      <ServiceLocations />

      {/* 11. Contact & Lead Generation Form Section */}
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
