import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.en;
  isBookingModalOpen: boolean;
  openBookingModal: (preselectedCategory?: string) => void;
  closeBookingModal: () => void;
  preselectedServiceCategory: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('kvs_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedServiceCategory, setPreselectedServiceCategory] = useState('');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kvs_lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const openBookingModal = (preselectedCategory?: string) => {
    if (preselectedCategory) {
      setPreselectedServiceCategory(preselectedCategory);
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      t,
      isBookingModalOpen,
      openBookingModal,
      closeBookingModal,
      preselectedServiceCategory
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
