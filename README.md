# KVS Copper Veins Integrated Solutions — Web Platform

Premium, conversion-focused, modern bilingual website for **KVS Copper Veins Integrated Solutions**, providing professional residential, commercial, and industrial HVAC and air conditioning services across Gurugram, Delhi, and Delhi NCR.

---

## 🚀 Features Overview

- **Bilingual Experience (English & हिंदी):** Full website translation with instant language switcher in the header and mobile menu.
- **Conversion-Driven Architecture:** Inspired by industry-leading appliance service designs:
  - Sticky header with quick call shortcuts and "Book a Service" CTA.
  - Floating Hero quick-allocation card for immediate customer callback requests.
  - Interactive AC repair problem diagnostics (15 common issues categorized into Cooling, Electrical, Mechanical, and Leakage).
  - 8 Primary Service Categories with photos, descriptions, and sub-service breakdown.
  - Residential AC Services (Split, Window, Inverter, Cassette, Ductable, Tower, Central, VRV/VRF, Package AC).
  - Heavy-duty Commercial & Industrial HVAC section with large-scale chiller/VRV equipment specifications.
  - Precision Gas & Refrigerant charging section with manufacturer standard safety disclosures.
  - 10-Question Accordion FAQ with direct technical answers.
  - Genuine "Why Choose KVS" strengths (Our own technician workforce, zero unverified freelancing).
  - Honest future-ready Customer Reviews section prepared for Google Reviews integration.
  - Interactive Google Maps embed for the registered workshop at **235/18, Khandsa Marg, Laxmi Garden, Gurugram**.
  - Sticky mobile action bar with direct Call, WhatsApp, and Online Booking buttons.
  - Clean URL routing (`/`, `/about`, `/contact`, `/services/:slug`).

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS (Navy `#101D32`, Secondary Navy `#192B43`, Copper `#B87548`, Ice Blue `#0077C8`, Warm White `#F8F9FB`)
- **Icons:** Lucide React
- **Routing:** React Router DOM v6
- **Typography:** Plus Jakarta Sans & Inter (Google Fonts)

---

## ⚙️ Configuration & Google Forms Integration

All company details and form submission endpoints are centralized in:
`src/data/config.ts`

### Connecting Google Forms:
1. Create a Google Form with fields corresponding to:
   - Full Name
   - Mobile Number
   - Email Address
   - Service Category
   - Equipment Type
   - Segment (Residential / Commercial / Industrial)
   - City / Location
   - Problem Description
   - Preferred Contact Method
2. Open `src/data/config.ts` and set:
   ```ts
   googleForms: {
     enabled: true,
     formActionUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
     entryIds: {
       fullName: "entry.XXXXX",
       phone: "entry.XXXXX",
       ...
     }
   }
   ```
3. Form submissions will automatically forward to your Google Sheet without altering the UI!

---

## 🏃 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📍 Business Details

- **Company Name:** KVS Copper Veins Integrated Solutions
- **Workshop Address:** 235/18, Khandsa Marg, Laxmi Garden, Gurugram, Haryana – 122001, India.
- **Phone:** +91 7982890653
- **Primary Regions:** Gurugram, Delhi, and Delhi NCR.
