import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/config';
import { mobileDrawerVariants } from '../utils/motion';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, openBookingModal } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceLinks = [
    { name: language === 'en' ? 'Residential AC Services' : 'आवासीय एसी सेवाएं', path: '/services/residential-ac' },
    { name: language === 'en' ? 'AC Repair Services' : 'एसी रिपेयर सेवाएं', path: '/services/ac-repair' },
    { name: language === 'en' ? 'AC Servicing & Jet Cleaning' : 'एसी सर्विसिंग एवं जेट क्लीनिंग', path: '/services/ac-servicing-cleaning' },
    { name: language === 'en' ? 'AC Installation & Relocation' : 'एसी इंस्टालेशन एवं स्थानांतरण', path: '/services/ac-installation' },
    { name: language === 'en' ? 'Gas & Refrigerant Refilling' : 'एसी गैस एवं रेफ्रिजरेंट सेवाएं', path: '/services/gas-refilling' },
    { name: language === 'en' ? 'Commercial HVAC Systems' : 'कमर्शियल एचवीएसी सिस्टम्स', path: '/services/commercial-hvac' },
    { name: language === 'en' ? 'Industrial Chillers & Plants' : 'इंडस्ट्रियल एचवीएसी एवं चिलर्स', path: '/services/industrial-hvac' },
    { name: language === 'en' ? 'AMC Maintenance Plans' : 'एएमसी एवं प्रिवेंटिव मेंटेनेंस', path: '/services/amc-maintenance' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2 transition-all ${
            isScrolled
              ? 'bg-transparent'
              : 'bg-navy-950/90 backdrop-blur-md border border-navy-800 shadow-xl'
          }`}
        >
          {/* Clean Logo Only (No crowded text) */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              transition={{ duration: 0.15 }}
              className="bg-white px-2.5 py-1 rounded-full shadow-sm flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="KVS Copper Veins Logo"
                width={120}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Clean, Spacious Navigation Links */}
          <nav
            className={`hidden lg:flex items-center space-x-1 text-xs font-semibold ${
              isScrolled ? 'text-slate-700' : 'text-slate-200'
            }`}
          >
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-blue-500 whitespace-nowrap ${
                location.pathname === '/'
                  ? isScrolled
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-white bg-white/10'
                  : ''
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-blue-500 whitespace-nowrap cursor-pointer ${
                  location.pathname.startsWith('/services')
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/10'
                    : ''
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-slate-100 py-3 text-slate-800 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {t.nav.allServices}
                    </div>
                    {serviceLinks.map((s, idx) => (
                      <Link
                        key={idx}
                        to={s.path}
                        className="block px-4 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/services/residential-ac"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-blue-500 whitespace-nowrap ${
                location.pathname === '/services/residential-ac'
                  ? isScrolled
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-white bg-white/10'
                  : ''
              }`}
            >
              {t.nav.residential}
            </Link>

            <Link
              to="/services/commercial-hvac"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-blue-500 whitespace-nowrap ${
                location.pathname === '/services/commercial-hvac'
                  ? isScrolled
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-white bg-white/10'
                  : ''
              }`}
            >
              {t.nav.commercial}
            </Link>

            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-blue-500 whitespace-nowrap ${
                location.pathname === '/about'
                  ? isScrolled
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-white bg-white/10'
                  : ''
              }`}
            >
              {t.nav.about}
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-blue-500 whitespace-nowrap ${
                location.pathname === '/contact'
                  ? isScrolled
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-white bg-white/10'
                  : ''
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Action: Language Switcher + Call Icon + Booking Pill CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* EN / हिंदी switcher with animated active pill */}
            <div
              className={`relative inline-flex rounded-full p-0.5 text-[11px] font-semibold border ${
                isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-white/10 border-white/10'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`relative z-10 px-2.5 py-0.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  language === 'en'
                    ? 'text-white font-bold'
                    : isScrolled
                    ? 'text-slate-600 hover:text-navy-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'en' && (
                  <motion.div
                    layoutId="langPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-sm"
                  />
                )}
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`relative z-10 px-2.5 py-0.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  language === 'hi'
                    ? 'text-white font-bold'
                    : isScrolled
                    ? 'text-slate-600 hover:text-navy-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {language === 'hi' && (
                  <motion.div
                    layoutId="langPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-sm"
                  />
                )}
                हिंदी
              </button>
            </div>

            {/* Call Direct */}
            <motion.a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                isScrolled
                  ? 'text-navy-900 bg-slate-100 hover:bg-slate-200'
                  : 'text-slate-200 bg-white/10 hover:bg-white/15'
              }`}
              title="Call Directly"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono">{COMPANY_CONFIG.phoneDisplay}</span>
            </motion.a>

            {/* Book a Service Pill Button */}
            <motion.button
              type="button"
              onClick={() => openBookingModal()}
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors whitespace-nowrap cursor-pointer"
            >
              {t.nav.bookService}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              className={`lg:hidden p-1.5 rounded-full cursor-pointer ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileDrawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden max-w-6xl mx-auto px-4 mt-2"
          >
            <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs text-slate-500 font-semibold">
                  {language === 'en' ? 'Select Language:' : 'भाषा चुनें:'}
                </span>
                <div className="inline-flex rounded-full p-1 bg-slate-100 text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      language === 'en' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('hi')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      language === 'hi' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <Link
                  to="/"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {t.nav.home}
                </Link>
                <Link
                  to="/about"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {t.nav.about}
                </Link>
                <Link
                  to="/services/residential-ac"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {t.nav.residential}
                </Link>
                <Link
                  to="/services/commercial-hvac"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {t.nav.commercial}
                </Link>
                <Link
                  to="/services/industrial-hvac"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {t.nav.industrial}
                </Link>
                <Link
                  to="/contact"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-100 flex gap-2">
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="flex-1 py-2.5 px-3 rounded-full text-xs font-bold text-center text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors whitespace-nowrap"
                >
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="flex-1 py-2.5 px-3 rounded-full text-xs font-bold text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors whitespace-nowrap shadow-sm"
                >
                  {t.nav.bookService}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
