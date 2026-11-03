export const COMPANY_CONFIG = {
  name: "KVS Copper Veins Integrated Solutions",
  shortName: "KVS Copper Veins",
  phone: "+91 7982890653",
  phoneRaw: "+917982890653",
  phoneDisplay: "+91 79828 90653",
  whatsappNumber: "917982890653",
  address: "235/18, Khandsa Marg, Laxmi Garden, Gurugram, Haryana – 122001, India",
  googleMapsUrl: "https://maps.google.com/?q=235/18,+Khandsa+Marg,+Laxmi+Garden,+Gurugram,+Haryana+122001",
  serviceAreas: ["Gurugram", "Delhi", "Delhi NCR (Noida, Faridabad, Ghaziabad)"],
  categories: ["Residential AC Services", "Commercial AC Services", "Industrial HVAC Services"],
  workforceBadge: "Our Own Trained Technicians",

  // Google Forms Integration Configuration
  // When ready, replace null with your Google Forms Action URL and field Entry IDs.
  googleForms: {
    enabled: false, // Set to true when connected
    formActionUrl: "", // e.g. "https://docs.google.com/forms/d/e/.../formResponse"
    entryIds: {
      fullName: "entry.1234567890",
      phone: "entry.1234567891",
      email: "entry.1234567892",
      serviceCategory: "entry.1234567893",
      equipmentType: "entry.1234567894",
      segment: "entry.1234567895",
      location: "entry.1234567896",
      problemDescription: "entry.1234567897",
      preferredContact: "entry.1234567898",
    }
  }
};

export function getWhatsAppBookingUrl(text?: string): string {
  const defaultText = "Hello KVS Copper Veins, I would like to enquire about AC/HVAC services.";
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text || defaultText)}`;
}
