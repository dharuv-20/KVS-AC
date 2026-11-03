export type Language = 'en' | 'hi';

export interface ServiceCategory {
  id: string;
  slug: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  image: string;
  iconName: string;
  examplesEn: string[];
  examplesHi: string[];
}

export interface ProblemItem {
  id: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  symptomsEn: string[];
  symptomsHi: string[];
  category: 'cooling' | 'electrical' | 'mechanical' | 'leakage';
  badgeEn?: string;
  badgeHi?: string;
}

export interface ServiceDetail {
  slug: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  heroImage: string;
  overviewEn: string;
  overviewHi: string;
  includedServicesEn: { title: string; desc: string; icon?: string }[];
  includedServicesHi: { title: string; desc: string; icon?: string }[];
  processEn: { step: string; title: string; desc: string }[];
  processHi: { step: string; title: string; desc: string }[];
  faqsEn: { question: string; answer: string }[];
  faqsHi: { question: string; answer: string }[];
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  equipmentType: string;
  segment: 'residential' | 'commercial' | 'industrial' | '';
  location: string;
  problemDescription: string;
  preferredContact: 'phone' | 'whatsapp';
  privacyConsent: boolean;
}

export interface ProjectShowcase {
  id: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  image: string;
  descEn: string;
  descHi: string;
  specsEn: string[];
  specsHi: string[];
}

export interface FaqItem {
  id: number;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number; // 5 or 4
  date: string;
  reviewEn: string;
  reviewHi: string;
  acType: string;
  verified: boolean;
}
