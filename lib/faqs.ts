import { brand } from "@/lib/brand";
import type { LandingFaq } from "@/lib/landings";

const englishFaqs: LandingFaq[] = [
  {
    question: "What are the shop timings?",
    answer:
      "Juneja Trading Corporation is open Monday to Sunday, 10:00 AM to 9:30 PM, at Shop No. 6, Azad Market, Ghanta Ghar, Damoh.",
  },
  {
    question: "Is Bajaj Finance EMI available?",
    answer: `${brand.emiAvailable}. ${brand.emiTerms}.`,
  },
  {
    question: "Do you repair items on the spot?",
    answer:
      "Yes. Many small repairs are done on the spot at the Ghanta Ghar shop in Damoh. Bring the item to the counter.",
  },
  {
    question: "Do you offer home delivery?",
    answer: `Yes. Home delivery is available across Damoh. Call ${brand.phone} or ${brand.phone2}.`,
  },
  {
    question: "Since when has the shop been open?",
    answer: "Juneja Trading Corporation has served Damoh since 1960.",
  },
  {
    question: "Where is the shop near Ghanta Ghar?",
    answer: `The shop is near Ghanta Ghar: ${brand.address}.`,
  },
];

const hindiFaqs: LandingFaq[] = [
  {
    question: "दमोह में दुकान का समय क्या है?",
    answer:
      "जुनेजा ट्रेडिंग कारपोरेशन घंटा घर, आज़ाद मार्केट, दमोह में सोमवार से रविवार तक सुबह 10 बजे से रात 9:30 बजे तक खुला रहता है।",
  },
  {
    question: "क्या बजाज फाइनेंस की ईएमआई मिलती है?",
    answer: `हाँ। घंटा घर, आज़ाद मार्केट, दमोह की दुकान पर ${brand.emiAvailable}। ${brand.emiTerms}.`,
  },
  {
    question: "क्या मौके पर रिपेयर हो जाता है?",
    answer:
      "हाँ। पंखे, मिक्सर, आयरन, लाइट और छोटे साउंड सिस्टम जैसी कई चीज़ें घंटा घर, आज़ाद मार्केट, दमोह की दुकान पर हाथों-हाथ ठीक हो जाती हैं। बड़ी मरम्मत पुर्जों पर निर्भर करती है।",
  },
  {
    question: "क्या दमोह में घर तक डिलीवरी मिलती है?",
    answer: `हाँ, दमोह में होम डिलीवरी उपलब्ध है। कॉल करें ${brand.phone} या ${brand.phone2}।`,
  },
  {
    question: "यह दुकान कब से चल रही है?",
    answer: "जुनेजा ट्रेडिंग कारपोरेशन 1960 से घंटा घर, आज़ाद मार्केट, दमोह की सेवा कर रहा है।",
  },
  {
    question: "घंटा घर के पास दुकान कहाँ है?",
    answer:
      "दुकान घंटा घर के पास है: शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, मड़िया पंगरहा, दमोह, मध्य प्रदेश 470661।",
  },
];

export function sharedFaqs(lang: "en" | "hi" = "en"): LandingFaq[] {
  return lang === "hi" ? hindiFaqs : englishFaqs;
}

export function faqPageJsonLd(faqs: LandingFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
