import type { Landing, LandingLink } from "@/lib/landings";
import { withOfferMeta } from "@/lib/offer-copy";

const trademarkEn =
  "Havells, LG, Haier, Samsung, Sony, Zebronics, Usha, Celcore and other brand names are trademarks of their owners. Juneja Trading Corporation is an independent shop in Damoh.";

const trademarkHi =
  "हैवेल्स, एलजी, हैयर, सैमसंग, सोनी, ज़ेब्रोनिक्स, ऊषा, सेलकोर और अन्य ब्रांड नाम उनके मालिकों के ट्रेडमार्क हैं। जुनेजा ट्रेडिंग कारपोरेशन दमोह की स्वतंत्र दुकान है।";

type BrandSpec = {
  slug: string;
  name: string;
  nameHi: string;
  h1: string;
  h1Hi: string;
  products: string;
  productsHi: string;
  items: string[];
  itemsHi: string[];
  links: LandingLink[];
  linksHi: LandingLink[];
  note?: string;
  noteHi?: string;
};

const specs: BrandSpec[] = [
  {
    slug: "havells-store-damoh",
    name: "Havells",
    nameHi: "हैवेल्स",
    h1: "Havells Fans & Electricals in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में हैवेल्स पंखे और इलेक्ट्रिकल – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "fans, wires, switches, LED lights and MCBs",
    productsHi: "पंखे, वायर, स्विच, एलईडी और एमसीबी",
    items: ["Ceiling fans and other fans", "Wires", "Switches", "LED lights", "MCBs"],
    itemsHi: ["सीलिंग फैन और अन्य पंखे", "वायर", "स्विच", "एलईडी लाइट", "एमसीबी"],
    links: [
      { href: "/ceiling-fans-damoh", label: "Ceiling fan shop in Damoh" },
      { href: "/electricals-damoh", label: "Electrical shop in Damoh" },
      { href: "/led-bulb-wholesale-damoh", label: "LED bulb wholesale in Damoh" },
    ],
    linksHi: [
      { href: "/hi/ceiling-fans-damoh", label: "दमोह में सीलिंग फैन" },
      { href: "/hi/electricals-damoh", label: "दमोह में इलेक्ट्रिकल" },
      { href: "/hi/led-bulb-wholesale-damoh", label: "दमोह में एलईडी बल्ब थोक" },
    ],
  },
  {
    slug: "lg-store-damoh",
    name: "LG",
    nameHi: "एलजी",
    h1: "LG TV & Appliances in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में एलजी टीवी और उपकरण – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "TVs, fridges, washing machines, ACs and sound systems",
    productsHi: "टीवी, फ्रिज, वॉशिंग मशीन, एसी और साउंड",
    items: ["LED TVs", "Refrigerators", "Washing machines", "Air conditioners", "Sound systems"],
    itemsHi: ["एलईडी टीवी", "रेफ्रिजरेटर", "वॉशिंग मशीन", "एयर कंडीशनर", "साउंड सिस्टम"],
    links: [
      { href: "/led-tv-damoh", label: "LED TV shop in Damoh" },
      { href: "/appliances-damoh", label: "Home appliances in Damoh" },
      { href: "/tv-on-emi-damoh", label: "TV on EMI in Damoh" },
      { href: "/sound-home-theatre-damoh", label: "Home theatre shop in Damoh" },
      { href: "/product/lg-refrigerator", label: "LG refrigerator" },
    ],
    linksHi: [
      { href: "/hi/led-tv-damoh", label: "दमोह में एलईडी टीवी" },
      { href: "/hi/appliances-damoh", label: "दमोह में घरेलू उपकरण" },
      { href: "/hi/tv-on-emi-damoh", label: "दमोह में ईएमआई पर टीवी" },
      { href: "/hi/sound-home-theatre-damoh", label: "दमोह में होम थिएटर" },
      { href: "/product/lg-refrigerator", label: "एलजी रेफ्रिजरेटर" },
    ],
  },
  {
    slug: "haier-store-damoh",
    name: "Haier",
    nameHi: "हैयर",
    h1: "Haier Fridge, Washer & TV in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में हैयर फ्रिज, वॉशिंग मशीन और टीवी – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "fridges, washing machines and TVs",
    productsHi: "फ्रिज, वॉशिंग मशीन और टीवी",
    items: ["Refrigerators", "Washing machines", "LED TVs"],
    itemsHi: ["रेफ्रिजरेटर", "वॉशिंग मशीन", "एलईडी टीवी"],
    links: [
      { href: "/appliances-damoh", label: "Home appliances in Damoh" },
      { href: "/led-tv-damoh", label: "LED TV shop in Damoh" },
      { href: "/product/haier-washing-machine", label: "Haier washing machine" },
    ],
    linksHi: [
      { href: "/hi/appliances-damoh", label: "दमोह में घरेलू उपकरण" },
      { href: "/hi/led-tv-damoh", label: "दमोह में एलईडी टीवी" },
      { href: "/product/haier-washing-machine", label: "हैयर वॉशिंग मशीन" },
    ],
  },
  {
    slug: "samsung-store-damoh",
    name: "Samsung",
    nameHi: "सैमसंग",
    h1: "Samsung TV & Appliances in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में सैमसंग टीवी और उपकरण – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "TVs, fridges, washing machines, ACs and sound systems",
    productsHi: "टीवी, फ्रिज, वॉशिंग मशीन, एसी और साउंड",
    items: ["LED TVs", "Refrigerators", "Washing machines", "Air conditioners", "Sound systems"],
    itemsHi: ["एलईडी टीवी", "रेफ्रिजरेटर", "वॉशिंग मशीन", "एयर कंडीशनर", "साउंड सिस्टम"],
    links: [
      { href: "/led-tv-damoh", label: "LED TV shop in Damoh" },
      { href: "/appliances-damoh", label: "Home appliances in Damoh" },
      { href: "/tv-on-emi-damoh", label: "TV on EMI in Damoh" },
      { href: "/sound-home-theatre-damoh", label: "Home theatre shop in Damoh" },
      { href: "/product/samsung-led-tv", label: "Samsung LED TV" },
    ],
    linksHi: [
      { href: "/hi/led-tv-damoh", label: "दमोह में एलईडी टीवी" },
      { href: "/hi/appliances-damoh", label: "दमोह में घरेलू उपकरण" },
      { href: "/hi/tv-on-emi-damoh", label: "दमोह में ईएमआई पर टीवी" },
      { href: "/hi/sound-home-theatre-damoh", label: "दमोह में होम थिएटर" },
      { href: "/product/samsung-led-tv", label: "सैमसंग एलईडी टीवी" },
    ],
  },
  {
    slug: "sony-store-damoh",
    name: "Sony",
    nameHi: "सोनी",
    h1: "Sony TV & Appliances in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में सोनी टीवी और उपकरण – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "TVs, fridges, washing machines, ACs and sound systems",
    productsHi: "टीवी, फ्रिज, वॉशिंग मशीन, एसी और साउंड",
    items: ["LED TVs", "Refrigerators", "Washing machines", "Air conditioners", "Sound systems"],
    itemsHi: ["एलईडी टीवी", "रेफ्रिजरेटर", "वॉशिंग मशीन", "एयर कंडीशनर", "साउंड सिस्टम"],
    links: [
      { href: "/led-tv-damoh", label: "LED TV shop in Damoh" },
      { href: "/appliances-damoh", label: "Home appliances in Damoh" },
      { href: "/tv-on-emi-damoh", label: "TV on EMI in Damoh" },
      { href: "/sound-home-theatre-damoh", label: "Home theatre shop in Damoh" },
    ],
    linksHi: [
      { href: "/hi/led-tv-damoh", label: "दमोह में एलईडी टीवी" },
      { href: "/hi/appliances-damoh", label: "दमोह में घरेलू उपकरण" },
      { href: "/hi/tv-on-emi-damoh", label: "दमोह में ईएमआई पर टीवी" },
      { href: "/hi/sound-home-theatre-damoh", label: "दमोह में होम थिएटर" },
    ],
  },
  {
    slug: "zebronics-store-damoh",
    name: "Zebronics",
    nameHi: "ज़ेब्रोनिक्स",
    h1: "Zebronics Speakers & Home Theatre in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में ज़ेब्रोनिक्स स्पीकर और होम थिएटर – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "speakers and home theatre systems",
    productsHi: "स्पीकर और होम थिएटर",
    items: ["Speakers", "Home theatre systems"],
    itemsHi: ["स्पीकर", "होम थिएटर"],
    links: [
      { href: "/sound-home-theatre-damoh", label: "Home theatre shop in Damoh" },
      { href: "/dj-sound-system-damoh", label: "DJ sound system shop in Damoh" },
      { href: "/product/zebronics-zeb-bt2750ruf-home-theatre", label: "Zebronics ZEB-BT2750RUF 4.1 home theatre" },
      { href: "/sasta-speaker-damoh", label: "Sasta aur accha speaker Damoh – Speakers from ₹699" },
    ],
    linksHi: [
      { href: "/hi/sound-home-theatre-damoh", label: "दमोह में होम थिएटर" },
      { href: "/hi/dj-sound-system-damoh", label: "दमोह में डीजे साउंड" },
      { href: "/product/zebronics-zeb-bt2750ruf-home-theatre", label: "ज़ेब्रोनिक्स ZEB-BT2750RUF 4.1 होम थिएटर" },
      { href: "/hi/sasta-speaker-damoh", label: "दमोह में सस्ता और अच्छा स्पीकर – ₹699 से" },
    ],
  },
  {
    slug: "usha-store-damoh",
    name: "Usha",
    nameHi: "ऊषा",
    h1: "Usha Fans & Appliances in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में ऊषा पंखे और उपकरण – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "fans, mixers and irons",
    productsHi: "पंखे, मिक्सर और आयरन",
    items: ["Fans", "Mixer grinders", "Irons"],
    itemsHi: ["पंखे", "मिक्सर ग्राइंडर", "आयरन"],
    links: [
      { href: "/ceiling-fans-damoh", label: "Ceiling fan shop in Damoh" },
      { href: "/appliances-damoh", label: "Home appliances in Damoh" },
      { href: "/repair-damoh", label: "On-the-spot repair in Damoh" },
    ],
    linksHi: [
      { href: "/hi/ceiling-fans-damoh", label: "दमोह में सीलिंग फैन" },
      { href: "/hi/appliances-damoh", label: "दमोह में घरेलू उपकरण" },
      { href: "/hi/repair-damoh", label: "दमोह में मौके पर रिपेयर" },
    ],
  },
  {
    slug: "celcore-store-damoh",
    name: "Celcore",
    nameHi: "सेलकोर",
    h1: "Celcore Torches & Lights in Damoh – Juneja Trading Corporation",
    h1Hi: "दमोह में सेलकोर टॉर्च और लाइट – जुनेजा ट्रेडिंग कारपोरेशन",
    products: "torches, emergency lights and LED bulbs",
    productsHi: "टॉर्च, इमरजेंसी लाइट और एलईडी बल्ब",
    items: ["Torches", "Emergency lights", "LED bulbs"],
    itemsHi: ["टॉर्च", "इमरजेंसी लाइट", "एलईडी बल्ब"],
    note: "Celcore is a lights and torch brand from Damoh and Madhya Pradesh. On this counter it means torches, emergency lights and LED bulbs.",
    noteHi:
      "सेलकोर दमोह और मध्य प्रदेश की लाइट और टॉर्च की ब्रांड है। इस काउंटर पर इसका मतलब टॉर्च, इमरजेंसी लाइट और एलईडी बल्ब है।",
    links: [
      { href: "/kisan-torch-damoh", label: "Best kisan torch in Damoh" },
      { href: "/emergency-light-damoh", label: "Emergency light shop in Damoh" },
      { href: "/led-bulb-wholesale-damoh", label: "LED bulb wholesale in Damoh" },
      { href: "/diwali-lights-damoh", label: "Diwali lights in Damoh" },
    ],
    linksHi: [
      { href: "/hi/kisan-torch-damoh", label: "दमोह में किसान टॉर्च" },
      { href: "/hi/emergency-light-damoh", label: "दमोह में इमरजेंसी लाइट" },
      { href: "/hi/led-bulb-wholesale-damoh", label: "दमोह में एलईडी बल्ब थोक" },
      { href: "/hi/diwali-lights-damoh", label: "दमोह में दिवाली लाइट" },
    ],
  },
];

function englishPage(spec: BrandSpec): Landing {
  const best = `best ${spec.name} store in Damoh`;
  const showroom = `${spec.name} showroom Damoh`;
  const dealer = `${spec.name} dealer near me Damoh`;
  return {
    slug: spec.slug,
    path: `/brands/${spec.slug}`,
    title: `Best ${spec.name} Store in Damoh | ${spec.name} Showroom Damoh | JTC Since 1960`,
    description: `Best ${spec.name} store in Damoh at Juneja Trading Corporation, Ghanta Ghar, Azad Market, since 1960. ${spec.name} showroom Damoh for ${spec.products}. ${spec.name} dealer near me Damoh. We sell genuine ${spec.name} products with brand warranty. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.`,
    h1: spec.h1,
    hindi: spec.h1Hi,
    showEmi: true,
    enquiryName: spec.name,
    trademarkNote: trademarkEn,
    intro: `Juneja Trading Corporation is a ${best}. This ${showroom} counter is at Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh 470661, and the shop has been here since 1960. We sell genuine ${spec.name} products with brand warranty.`,
    sections: [
      {
        heading: `${spec.name} products in Damoh`,
        paragraphs: [
          `The ${spec.name} range at Ghanta Ghar covers ${spec.products}. Ask for today's price on the phone or at the counter. Stock moves, so call +91 99267 59557 before you come from another town.`,
          spec.note,
        ].filter((paragraph): paragraph is string => Boolean(paragraph)),
        items: spec.items,
      },
      {
        heading: showroom,
        paragraphs: [
          `People who type ${dealer} are looking for a shop they can walk into. Juneja Trading Corporation has sold electronics in Damoh since 1960. The address is Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh, Madhya Pradesh 470661. Customers also come from Hatta, Pathariya, Tendukheda, Jabera and Batiyagarh.`,
          `Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. On qualifying big-brand purchases the counter still uses the line 0% Bajaj Finance — Easy EMI, No Cost. Ask whether the ${spec.name} piece you chose qualifies. We sell genuine ${spec.name} products with brand warranty. The warranty card that comes in the box is explained at the counter. Open Monday to Sunday, 10:00 AM to 9:30 PM.`,
        ],
      },
    ],
    links: [...spec.links, { href: `/hi/brands/${spec.slug}`, label: "यह पेज हिन्दी में" }],
    faqs: [
      {
        question: `Where is the best ${spec.name} store in Damoh?`,
        answer: `Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Damoh 470661, is a best ${spec.name} store in Damoh. The shop has been open since 1960. We sell genuine ${spec.name} products with brand warranty. Open every day 10:00 AM to 9:30 PM.`,
      },
      {
        question: `Is there a ${spec.name} showroom in Damoh?`,
        answer: `Yes. The ${spec.name} showroom Damoh counter is at Ghanta Ghar, Azad Market. We sell ${spec.products}. Call +91 99267 59557 or +91 83191 71236 for today's stock.`,
      },
      {
        question: `I searched “${spec.name} dealer near me Damoh”. Where do I go?`,
        answer: `Come to Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh 470661. We sell genuine ${spec.name} products with brand warranty.`,
      },
      {
        question: `Is Bajaj Finance EMI available on ${spec.name}?`,
        answer: `Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. Ask at the Ghanta Ghar counter whether the ${spec.name} product you want qualifies.`,
      },
    ],
  };
}

function hindiPage(spec: BrandSpec): Landing {
  const best = `best ${spec.name} store in Damoh`;
  const showroom = `${spec.name} showroom Damoh`;
  const dealer = `${spec.name} dealer near me Damoh`;
  return {
    slug: spec.slug,
    path: `/hi/brands/${spec.slug}`,
    lang: "hi",
    title: `दमोह में बेस्ट ${spec.nameHi} स्टोर | ${spec.nameHi} शोरूम दमोह | 1960 से`,
    description: `दमोह में बेस्ट ${spec.nameHi} स्टोर, घंटा घर, आज़ाद मार्केट। ${spec.nameHi} शोरूम दमोह पर ${spec.productsHi}। ${best}. ${showroom}. ${dealer}. हम असली ${spec.nameHi} उत्पाद बेचते हैं, ब्रांड वारंटी के साथ। 1960 से। Bajaj Finance EMI available।`,
    h1: spec.h1Hi,
    hindi: spec.h1,
    showEmi: true,
    enquiryName: spec.nameHi,
    trademarkNote: trademarkHi,
    intro: `जुनेजा ट्रेडिंग कारपोरेशन दमोह में ${spec.nameHi} की दुकान है। ${best}, ${showroom} और ${dealer} खोज कर लोग घंटा घर, आज़ाद मार्केट पहुँचते हैं। हम असली ${spec.nameHi} उत्पाद बेचते हैं, ब्रांड वारंटी के साथ। दुकान 1960 से शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, दमोह में है।`,
    sections: [
      {
        heading: `दमोह में ${spec.nameHi} के उत्पाद`,
        paragraphs: [
          `घंटा घर की ${spec.nameHi} शेल्फ पर ${spec.productsHi} मिलते हैं। आज का दाम फ़ोन या काउंटर पर पूछें। दूसरे शहर से आने से पहले +91 99267 59557 पर कॉल कर लें।`,
          spec.noteHi,
        ].filter((paragraph): paragraph is string => Boolean(paragraph)),
        items: spec.itemsHi,
      },
      {
        heading: `${spec.nameHi} शोरूम दमोह`,
        paragraphs: [
          `दमोह में बेस्ट ${spec.nameHi} स्टोर घंटा घर, आज़ाद मार्केट पर है। पता शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, मड़िया पंगरहा, दमोह, मध्य प्रदेश 470661। दुकान 1960 से है। हट्टा, पथरिया, तेंदूखेड़ा, जबेरा और बटियागढ़ से भी ग्राहक आते हैं।`,
          `Bajaj Finance EMI available। EMI subject to Bajaj Finance eligibility and terms। बड़े ब्रांड की योग्य खरीद पर काउंटर की लाइन ज्यों की त्यों है: 0% Bajaj Finance — Easy EMI, No Cost। चुना हुआ ${spec.nameHi} सामान योग्य है या नहीं, काउंटर पर पूछें। हम असली ${spec.nameHi} उत्पाद बेचते हैं, ब्रांड वारंटी के साथ। डिब्बे की वारंटी कार्ड काउंटर पर समझा दी जाती है। समय सोमवार से रविवार सुबह 10 बजे से रात 9:30 बजे तक।`,
        ],
      },
    ],
    links: [...spec.linksHi, { href: `/brands/${spec.slug}`, label: "This page in English" }],
    faqs: [
      {
        question: `दमोह में बेस्ट ${spec.nameHi} स्टोर कहाँ है?`,
        answer: `जुनेजा ट्रेडिंग कारपोरेशन, शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, दमोह 470661। 1960 से। हम असली ${spec.nameHi} उत्पाद बेचते हैं, ब्रांड वारंटी के साथ। हर दिन सुबह 10 बजे से रात 9:30 बजे तक।`,
      },
      {
        question: `क्या दमोह में ${spec.nameHi} शोरूम है?`,
        answer: `हाँ। ${spec.nameHi} शोरूम दमोह का काउंटर घंटा घर, आज़ाद मार्केट पर है। ${spec.productsHi} मिलते हैं। आज का स्टॉक +91 99267 59557 या +91 83191 71236 पर पूछें।`,
      },
      {
        question: `${dealer} खोजूँ तो कहाँ जाऊँ?`,
        answer: `जुनेजा ट्रेडिंग कारपोरेशन, शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, दमोह 470661 आइए। हम असली ${spec.nameHi} उत्पाद बेचते हैं, ब्रांड वारंटी के साथ।`,
      },
      {
        question: `क्या ${spec.nameHi} पर बजाज फाइनेंस की ईएमआई मिलती है?`,
        answer: `Bajaj Finance EMI available। EMI subject to Bajaj Finance eligibility and terms। ${spec.nameHi} का सामान योग्य है या नहीं, घंटा घर के काउंटर पर पूछें।`,
      },
    ],
  };
}

export const brandStores: Record<string, Landing> = Object.fromEntries(
  specs.map((spec) => [spec.slug, withOfferMeta(englishPage(spec))]),
);

export const hindiBrandStores: Record<string, Landing> = Object.fromEntries(
  specs.map((spec) => [spec.slug, withOfferMeta(hindiPage(spec))]),
);

export const brandStoreSlugs = new Set(specs.map((spec) => spec.slug));

export const brandStoreList = Object.values(brandStores);
export const hindiBrandStoreList = Object.values(hindiBrandStores);
