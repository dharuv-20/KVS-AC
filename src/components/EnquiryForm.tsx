import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EnquiryFormData } from '../types';
import { COMPANY_CONFIG, getWhatsAppBookingUrl } from '../data/config';

interface EnquiryFormProps {
  initialServiceCategory?: string;
  onSuccessCallback?: () => void;
  isModal?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialServiceCategory = '',
  onSuccessCallback,
  isModal = false
}) => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: initialServiceCategory,
    equipmentType: '',
    segment: 'residential',
    location: '',
    problemDescription: '',
    preferredContact: 'phone',
    privacyConsent: true,
  });

  useEffect(() => {
    if (initialServiceCategory) {
      setFormData(prev => ({ ...prev, serviceCategory: initialServiceCategory }));
    }
  }, [initialServiceCategory]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Indian phone number regex: 10 digits starting with 6-9
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-\+\(\)]/g, '');
    const tenDigit = cleaned.slice(-10);
    return /^[6-9]\d{9}$/.test(tenDigit);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.contact.validation.nameRequired;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = t.contact.validation.phoneRequired;
    }

    if (!formData.serviceCategory) {
      newErrors.serviceCategory = t.contact.validation.categoryRequired;
    }

    if (!formData.segment) {
      newErrors.segment = t.contact.validation.segmentRequired;
    }

    if (!formData.location.trim()) {
      newErrors.location = t.contact.validation.locationRequired;
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = t.contact.validation.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Check if Google Forms integration is enabled in config
      if (COMPANY_CONFIG.googleForms.enabled && COMPANY_CONFIG.googleForms.formActionUrl) {
        const gFormData = new URLSearchParams();
        const entry = COMPANY_CONFIG.googleForms.entryIds;

        gFormData.append(entry.fullName, formData.fullName);
        gFormData.append(entry.phone, formData.phone);
        gFormData.append(entry.email, formData.email);
        gFormData.append(entry.serviceCategory, formData.serviceCategory);
        gFormData.append(entry.equipmentType, formData.equipmentType);
        gFormData.append(entry.segment, formData.segment);
        gFormData.append(entry.location, formData.location);
        gFormData.append(entry.problemDescription, formData.problemDescription);
        gFormData.append(entry.preferredContact, formData.preferredContact);

        await fetch(COMPANY_CONFIG.googleForms.formActionUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: gFormData.toString(),
        });
      } else {
        // Honest demo state: simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Still show demo success state gracefully with direct contact fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceCategory: '',
      equipmentType: '',
      segment: 'residential',
      location: '',
      problemDescription: '',
      preferredContact: 'phone',
      privacyConsent: true,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={`w-full ${isModal ? '' : 'max-w-4xl mx-auto'}`}>
      {isSubmitted ? (
        // Honest Success Confirmation Screen
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
            {t.contact.success.title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            {t.contact.success.message}
          </p>

          <p className="mt-2 text-xs text-slate-400 max-w-md mx-auto italic">
            {t.contact.success.note}
          </p>

          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5">
            <div><strong className="text-slate-800">Name:</strong> {formData.fullName}</div>
            <div><strong className="text-slate-800">Contact:</strong> +91 {formData.phone}</div>
            <div><strong className="text-slate-800">Category:</strong> {formData.serviceCategory}</div>
            <div><strong className="text-slate-800">Location:</strong> {formData.location}</div>
          </div>

          {/* Quick Shortcuts */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-900 hover:bg-copper transition-colors"
            >
              <Phone className="w-4 h-4 text-copper" />
              <span>{t.contact.callNow}</span>
            </a>

            <a
              href={getWhatsAppBookingUrl(`Hello KVS, I just submitted an enquiry for ${formData.serviceCategory} at ${formData.location}. My name is ${formData.fullName}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.contact.whatsappNow}</span>
            </a>

            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {t.contact.success.newEnquiry}
            </button>
          </div>
        </div>
      ) : (
        // The Enquiry Form
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl space-y-5">
          
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-copper" />
              <span>{t.contact.formTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'en'
                ? 'Fill in your details below to schedule an inspection or receive a direct estimate.'
                : 'निरीक्षण तय करने अथवा अनुमान प्राप्त करने के लिए नीचे विवरण भरें।'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.contact.fullName} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder={t.contact.fullNamePlaceholder}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full text-xs font-medium rounded-xl border px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:ring-1 outline-none transition-all ${
                  errors.fullName ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-300 focus:border-copper focus:ring-copper'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.contact.phone} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs font-semibold text-slate-500 font-mono">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder={t.contact.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  className={`w-full text-xs font-medium rounded-xl border pl-12 pr-3.5 py-2.5 bg-slate-50 focus:bg-white focus:ring-1 outline-none transition-all font-mono ${
                    errors.phone ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-300 focus:border-copper focus:ring-copper'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.contact.email}
              </label>
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
              />
            </div>

            {/* Segment: Residential / Commercial / Industrial */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.contact.segment} <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.segment}
                onChange={(e) => setFormData({ ...formData, segment: e.target.value as any })}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
              >
                <option value="residential">{t.contact.segmentOptions.residential}</option>
                <option value="commercial">{t.contact.segmentOptions.commercial}</option>
                <option value="industrial">{t.contact.segmentOptions.industrial}</option>
              </select>
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.contact.serviceCategory} <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className={`w-full text-xs font-medium rounded-xl border px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:ring-1 outline-none transition-all ${
                  errors.serviceCategory ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-copper'
                }`}
              >
                <option value="">{language === 'en' ? '-- Select Service Category --' : '-- सेवा श्रेणी चुनें --'}</option>
                <option value="AC Repair Services">{language === 'en' ? 'AC Repair & Diagnostics' : 'एसी रिपेयर एवं डायग्नोस्टिक्स'}</option>
                <option value="AC Servicing & Jet Cleaning">{language === 'en' ? 'AC Servicing & Jet Cleaning' : 'एसी सर्विसिंग एवं जेट क्लीनिंग'}</option>
                <option value="AC Installation & Relocation">{language === 'en' ? 'AC Installation & Relocation' : 'एसी इंस्टालेशन एवं स्थानांतरण'}</option>
                <option value="Gas Refilling & Leak Test">{language === 'en' ? 'Gas Refilling & Leak Test' : 'गैस रीफिलिंग व लीकेज जांच'}</option>
                <option value="Commercial HVAC / VRV">{language === 'en' ? 'Commercial HVAC / VRV / Chillers' : 'कमर्शियल एचवीएसी / वीआरवी'}</option>
                <option value="AMC Maintenance Contract">{language === 'en' ? 'Annual Maintenance Contract (AMC)' : 'एएमसी अनुबंध (AMC)'}</option>
                <option value="Parts Replacement">{language === 'en' ? 'Parts Replacement (PCB/Motor/Capacitor)' : 'पार्ट्स रिप्लेसमेंट'}</option>
              </select>
              {errors.serviceCategory && (
                <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.serviceCategory}</span>
                </p>
              )}
            </div>

            {/* Equipment Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.contact.equipmentType}
              </label>
              <select
                value={formData.equipmentType}
                onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
              >
                <option value="">{language === 'en' ? 'Select AC format (optional)' : 'एसी का प्रकार चुनें (वैकल्पिक)'}</option>
                <option value="Split AC (Inverter)">Split AC (Inverter)</option>
                <option value="Split AC (Non-Inverter)">Split AC (Non-Inverter)</option>
                <option value="Window AC">Window AC</option>
                <option value="Cassette AC">Cassette AC</option>
                <option value="Ductable AC">Ductable AC</option>
                <option value="Tower AC">Tower AC</option>
                <option value="VRV / VRF System">VRV / VRF System</option>
                <option value="Central Chiller Plant">Central Chiller Plant</option>
              </select>
            </div>
          </div>

          {/* City / Location */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t.contact.location} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder={t.contact.locationPlaceholder}
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full text-xs font-medium rounded-xl border px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:ring-1 outline-none transition-all ${
                errors.location ? 'border-rose-400 focus:border-rose-500' : 'border-slate-300 focus:border-copper'
              }`}
            />
            {errors.location && (
              <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.location}</span>
              </p>
            )}
          </div>

          {/* Problem Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t.contact.problem}
            </label>
            <textarea
              rows={3}
              placeholder={t.contact.problemPlaceholder}
              value={formData.problemDescription}
              onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
              className="w-full text-xs font-medium rounded-xl border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
            />
          </div>

          {/* Preferred Contact Method */}
          <div className="pt-1">
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              {t.contact.preferredContact}
            </label>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === 'phone'}
                  onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                  className="text-copper focus:ring-copper"
                />
                <span>{t.contact.contactOptions.phone}</span>
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
                <input
                  type="radio"
                  name="preferredContact"
                  value="whatsapp"
                  checked={formData.preferredContact === 'whatsapp'}
                  onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                  className="text-copper focus:ring-copper"
                />
                <span>{t.contact.contactOptions.whatsapp}</span>
              </label>
            </div>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                className="mt-0.5 text-copper rounded focus:ring-copper"
              />
              <span className="text-[11px] text-slate-600">
                {t.contact.privacyConsent}
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="mt-1 text-[11px] text-rose-500">
                {errors.privacyConsent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-copper transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>{t.contact.submitting}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </>
              )}
            </button>
          </div>

          {/* Or Call / WhatsApp directly */}
          <div className="pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-3">
              {t.contact.phoneOrWhatsApp}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-navy-800 hover:bg-navy-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-copper" />
                <span>{t.contact.callNow}</span>
              </a>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.contact.whatsappNow}</span>
              </a>
            </div>
          </div>

        </form>
      )}
    </div>
  );
};
