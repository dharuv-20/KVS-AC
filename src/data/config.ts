export const COMPANY_CONFIG = {
  name: "KVS Copper Veins Integrated Solutions",
  shortName: "KVS Copper Veins",
  siteUrl: "https://kvscopperveins.com",
  phone: "+91 7982890653",
  phoneRaw: "+917982890653",
  phoneDisplay: "+91 79828 90653",
  whatsappNumber: "917982890653",
  address: "235/18, Khandsa Marg, Laxmi Garden, Gurugram, Haryana – 122001, India",
  googleMapsUrl: "https://maps.app.goo.gl/VmTAscoi7AKshPrW9",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=28.4518433,77.0156097&hl=en&z=17&output=embed",
  coordinates: {
    lat: 28.4518433,
    lng: 77.0156097,
  },
  serviceAreas: ["Gurugram", "Delhi", "Delhi NCR (Noida, Faridabad, Ghaziabad)"],
  categories: ["Residential AC Services", "Commercial AC Services", "Industrial HVAC Services"],
  workforceBadge: "Our Own Trained Technicians",
  founder: {
    name: "Krishna Chaudhary",
    roleEn: "Founder & Managing Director",
    roleHi: "संस्थापक एवं प्रबंध निदेशक",
    image: "/images/krishna-chaudhary.jpg",
    bioEn: "Under the leadership of Krishna Chaudhary, KVS Copper Veins was founded on one clear commitment: delivering genuine engineering excellence and ethical HVAC service across Gurugram and Delhi NCR. By deploying only our own vetted, professionally trained technicians equipped with digital diagnostics, we ensure long-lasting cooling efficiency for every home and commercial facility.",
    bioHi: "कृष्णा चौधरी के नेतृत्व में, केवीएस कॉपर वेन्स की स्थापना एक स्पष्ट संकल्प पर हुई: गुरुग्राम और दिल्ली एनसीआर में वास्तविक इंजीनियरिंग गुणवत्ता और भरोसेमंद एचवीएसी सेवाएं प्रदान करना। केवल अपने प्रशिक्षित तकनीशियनों और डिजिटल उपकरणों के साथ, हम हर घर और व्यावसायिक संस्थान के लिए स्थायी कूलिंग समाधान सुनिश्चित करते हैं।",
  },

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
