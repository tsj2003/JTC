export const brand = {
  name: "Juneja Trading Corporation",
  logo: "/jtc-logo.webp",
  logoAlt: "Juneja Trading Corporation logo, Damoh",
  shortName: "JTC",
  nameHi: "जुनेजा ट्रेडिंग कारपोरेशन",
  tagline: "आपकी जरूरत, हमारी जिम्मेदारी",
  taglineHi: "1960 से आपका विश्वास",
  taglineHiLong: "साठ साल का विश्वास — दमोह का इलेक्ट्रिकल घर",
  description:
    "Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh, Madhya Pradesh 470661, has served customers since 1960. Electronics and electricals: LED TV, fridge, washing machine, AC, sound, solar, torch, fans, and fittings. 0% Bajaj Finance EMI on big brands. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. Open Mon–Sun 10:00–21:30.",
  estYear: 1960,
  foundingDate: "1960-08-18",
  slogan: "1960 से आपकी सेवा में",
  city: "Damoh",
  state: "Madhya Pradesh",
  country: "India",
  pin: "470661",
  streetAddress: "Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha",
  address:
    "Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh, Madhya Pradesh 470661",
  nap: "Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh, Madhya Pradesh 470661",
  mapsUrl:
    "https://www.google.com/maps/place/Juneja+Trading+Carporation/@23.8352138,79.4405776,17z",
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Juneja+Trading+Corporation+Damoh",
  googleReviewLabel: "Review us on Google",
  mapsEmbed:
    "https://maps.google.com/maps?q=Juneja+Trading+Carporation,+Damoh&ll=23.8352138,79.4405776&z=17&output=embed",
  lat: 23.8352138,
  lng: 79.4405776,
  serviceAreas: ["Damoh", "Hatta", "Pathariya", "Tendukheda", "Jabera", "Batiyagarh"],
  phone: "+91 99267 59557",
  phoneRaw: "9926759557",
  phoneHref: "tel:+919926759557",
  phone2: "+91 83191 71236",
  phone2Raw: "8319171236",
  phone2Href: "tel:+918319171236",
  email: "satpaljuneja11@gmail.com",
  emailHref: "mailto:satpaljuneja11@gmail.com",
  gstNote: "GST registered retailer · Proprietorship",
  hours: "Mon–Sun, 10:00–21:30",
  hoursNote: "Open every day, 10:00–21:30",
  whatsappGroupUrl: "https://chat.whatsapp.com/JWFnoPCzfa2E56kBplbjrk",
  whatsappGroupLabel: "Join our WhatsApp group for new arrivals & offers",
  whatsappEnquiryLabel: "WhatsApp enquiry",
  emiAvailable: "Bajaj Finance EMI available",
  emiTerms: "EMI subject to Bajaj Finance eligibility and terms",
  finance: "0% Bajaj Finance — Easy EMI, No Cost",
  financeHi: "ब्याज दर पर 0% फाइनेंस सुविधा उपलब्ध",
  askPrice: "Call for today’s price",
  giftOffer: "₹10,000+ की खरीद पर शानदार गिफ्ट जीतने का मौका",
  brands: [
    "Samsung",
    "LG",
    "Haier",
    "Godrej",
    "Voltas",
    "Bajaj",
    "Philips",
    "Havells",
    "Atomberg",
    "Ahuja",
    "Finolex",
    "RR Kabel",
    "McCoy",
    "Usha",
    "V-Guard",
    "Orient",
    "Surya",
    "Luminous",
    "Sony",
    "Crompton",
  ],
} as const;

export const shopUpdates = [
  {
    id: "emi",
    title: "0% Bajaj Finance",
    body: "Easy EMI, no cost. Instant approval. Minimum papers. Fridge, washing machine, LED TV, AC.",
    href: "/shop",
  },
  {
    id: "gift",
    title: "Gift on ₹10,000+",
    body: "Chance to win mixer juicer, trimmer, hair dryer, or LED TV.",
    href: "/shop",
  },
  {
    id: "stock",
    title: "Regular stock update",
    body: "Festive lights, earbuds, LED TV, fridge, washer, AC, sound, solar, DTH, fans. Ask the counter for today’s pieces.",
    href: "/contact",
  },
];

export const GST_RATE = 0.18;
export const SHIPPING_FEE = 0;

export function whatsappEnquiryHref(phoneRaw: string, productTitle: string) {
  const text = `Hello Juneja Trading Corporation, I would like to enquire about ${productTitle} in Damoh.`;
  return `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function formatPrice(amount: number | string | null | undefined) {
  const value = Number(amount) || 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function calcGst(subtotal: number) {
  return Math.round(subtotal * GST_RATE);
}

export function calcOrderTotal(subtotal: number) {
  if (!subtotal) return 0;
  return Math.round(subtotal + calcGst(subtotal) + SHIPPING_FEE);
}
