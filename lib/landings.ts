import { brand } from "@/lib/brand";
import { ceilingFansHeading, festiveHeading, festiveItemsHeading } from "@/lib/copy";
import { localSeoPages } from "@/lib/local-seo-pages";
import { withOfferMeta } from "@/lib/offer-copy";
import { withShopImage } from "@/lib/shop-photos";

export type LandingSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingLink = {
  href: string;
  label: string;
};

export type LandingProduct = {
  name: string;
  description: string;
  image: string;
  sku: string;
  brandName?: string;
  price?: number;
  mrp?: number;
  href: string;
  priceLabel: string;
};

export type Landing = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  hindi: string;
  intro?: string;
  showEmi?: boolean;
  lang?: "en" | "hi";
  sections: LandingSection[];
  faqs: LandingFaq[];
  links?: LandingLink[];
  products?: LandingProduct[];
  enquiryName?: string;
  trademarkNote?: string;
  image?: { src: string; width: number; height: number; alt: string };
};

const visitHours = `${brand.hoursNote}. Home delivery across Damoh.`;

const coreLandings: Record<string, Landing> = {
  "sound-home-theatre-damoh": {
    slug: "sound-home-theatre-damoh",
    path: "/sound-home-theatre-damoh",
    title: "Home Theatre, Soundbar, Amplifier & PA System Shop in Damoh | JTC",
    description:
      "Buy home theatre systems, soundbars, amplifiers, DJ and PA speakers in Damoh at Juneja Trading Corporation, Ghanta Ghar. Demo in store, setup support.",
    h1: "Home theatre & sound systems in Damoh",
    hindi: "होम थिएटर, साउंडबार, एम्पलीफायर और पीए सिस्टम — दमोह में।",
    sections: [
      {
        heading: "What we offer",
        items: [
          "Home theatre systems and soundbars (e.g. SB-421 soundbar with 6.5-inch woofer)",
          "PA amplifiers, horn speakers and mic sets (Ahuja and others; dealer status: confirm with shop)",
          "Speakers for shops, events, temples and weddings",
          "Car music players and Bluetooth speakers",
          "Listen before you buy: in-store demo (confirm with shop)",
          "Sound system repair and servicing",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I hear the system before buying?",
        answer:
          "Visit the shop at Ghanta Ghar for a demo. Call ahead to check which models are on display.",
      },
      {
        question: "Do you sell PA systems for events?",
        answer: "Yes, amplifiers, horn speakers and mic sets. Call for today's price.",
      },
    ],
  },
  "solar-damoh": {
    slug: "solar-damoh",
    path: "/solar-damoh",
    title: "Solar Panels, Solar Lights & Solar Fans in Damoh | JTC",
    description:
      "Solar panels, solar inverter solutions, solar street lights and DC fans in Damoh. Visit Juneja Trading Corporation, Ghanta Ghar, or call +91 99267 59557.",
    h1: "Solar products in Damoh",
    hindi: "सोलर पैनल, सोलर लाइट और सोलर पंखे — दमोह में।",
    sections: [
      {
        heading: "What we offer",
        items: [
          "Solar panels and solar solutions (Luminous and others; confirm models with shop)",
          "Solar street lights and 12V DC lights",
          "Solar and rechargeable DC fans",
          "Inverters, home UPS and batteries",
          "Guidance on the right system size for homes, shops and farms",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you install solar panels?",
        answer: "Installation availability and charges: confirm with shop.",
      },
      {
        question: "Which solar brand do you sell?",
        answer: "Luminous and others. Call for current stock.",
      },
    ],
  },
  "kisan-agri-damoh": {
    slug: "kisan-agri-damoh",
    path: "/kisan-agri-damoh",
    title: "Kisan Pump Shop in Damoh | JTC Since 1960",
    description:
      "Kisan pump shop in Damoh at Juneja Trading Corporation, Ghanta Ghar, since 1960. Submersible pumps, monoblock pumps, motors, starters and sprayers. Open Mon–Sun 10:00–21:30.",
    h1: "Kisan (farm) products in Damoh",
    hindi: "किसान भाइयों के लिए पंप, मोटर, स्प्रेयर — दमोह में।",
    intro:
      "Pumps and motors are on this page. Long-range rechargeable kisan torches and solar or electric jhatka machines (fence energizers) have their own pages, linked below.",
    sections: [
      {
        heading: "What we offer",
        items: [
          "Submersible pumps (e.g. Indo submersible pump) and monoblock pumps",
          "Motors, starters and panel accessories (confirm with shop)",
          "Submersible cable and pipe fittings (confirm with shop)",
          "Battery and manual sprayers (confirm with shop)",
          "Solar pumps and solar DC options",
          "Long-range rechargeable kisan torches for night field work, including the Globeam Noori kisan solar torch",
          "Solar and electric jhatka machines to keep neelgai and other animals out of the crop",
          "Pump and motor repair",
        ],
      },
    ],
    links: [
      { href: "/kisan-torch-damoh", label: "Best kisan torch in Damoh" },
      { href: "/product/globeam-noori-kisan-solar-torch", label: "Globeam Noori kisan solar torch" },
      { href: "/jhatka-machine-damoh", label: "Jhatka machine in Damoh" },
      { href: "/hi/kisan-agri-damoh", label: "यह पेज हिन्दी में" },
    ],
    faqs: [
      {
        question: "Do you repair pumps and motors?",
        answer: "Bring the pump or motor to the shop. Repair options: confirm with shop.",
      },
      {
        question: "Which HP pump do I need?",
        answer: "Tell us your bore depth and water need, and we'll suggest options.",
      },
    ],
  },
  "electricals-damoh": {
    slug: "electricals-damoh",
    path: "/electricals-damoh",
    title: `Electrical Shop in Damoh | ${ceilingFansHeading} | ${festiveHeading} | JTC Since 1960`,
    description: `Electrical shop in Damoh. ${ceilingFansHeading}. ${festiveHeading}. ${festiveItemsHeading}. Wires, switches, MCBs, fans and LED bulbs at Juneja Trading Corporation, Ghanta Ghar, since 1960.`,
    h1: "Electrical goods in Damoh",
    hindi: "वायर, स्विच, पंखे, एलईडी लाइट — दमोह की इलेक्ट्रिकल दुकान।",
    sections: [
      {
        heading: ceilingFansHeading,
        paragraphs: [
          "Ceiling, table, pedestal and rechargeable fans from Atomberg, Orient, Crompton, Havells, Usha and others. Confirm the sweep and colour at the counter.",
        ],
      },
      {
        heading: festiveHeading,
        paragraphs: [
          "Festive lighting is on the counter through the season, including jhalar, fairy lights, torches, emergency lights, emergency bulbs and LED bulbs.",
        ],
      },
      {
        heading: festiveItemsHeading,
        items: [
          "Festive lighting",
          "Jhalar",
          "Fairy lights",
          "Torches",
          "Emergency lights",
          "Emergency bulbs",
          "LED bulbs",
        ],
      },
      {
        heading: "What we offer",
        items: [
          "House wires and cables (Finolex, RR Kabel and others; confirm stock)",
          "Switches, sockets, MCBs, extension boards",
          "Ceiling, table, pedestal and rechargeable fans (Atomberg, Orient, Crompton, Havells, Usha and others)",
          "LED bulbs, battens and street lights (Philips, Surya, Havells and others)",
          "RR Lighting Avidite Neo 9W high beam LED bulb, B22, 1 star. Wholesale rates are available.",
          "Water heaters, immersion rods and room heaters",
          "Bulk orders for contractors and electricians",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you take bulk orders?",
        answer: "Yes. Call +91 99267 59557 for contractor and bulk orders. Wholesale rates are available on LED bulbs, including the RR Lighting Avidite Neo 9W.",
      },
    ],
    links: [
      { href: "/led-bulb-wholesale-damoh", label: "LED bulb wholesale in Damoh" },
      { href: "/product/rr-avidite-neo-9w-led-bulb", label: "RR Avidite Neo 9W LED bulb, wholesale rates available" },
      { href: "/hi/electricals-damoh", label: "यह पेज हिन्दी में" },
    ],
  },
  "repair-damoh": {
    slug: "repair-damoh",
    path: "/repair-damoh",
    title: "Electronics Repair Shop in Damoh | JTC Since 1960",
    description:
      "Electronics repair shop in Damoh. On-the-spot repair of fans, mixers, irons, sound systems and lights at Juneja Trading Corporation, Ghanta Ghar, since 1960. Open Mon–Sun 10:00–21:30.",
    h1: "On-the-spot repair in Damoh",
    hindi: "हाथों-हाथ रिपेयरिंग — दमोह, घंटा घर।",
    intro:
      "Torch repair is the first job at this counter: rechargeable torches, kisan torches, solar torches, searchlights and emergency lights, fixed on the spot while you wait.",
    sections: [
      {
        heading: "What we offer",
        items: [
          "Torch repair in Damoh: rechargeable, kisan, solar, searchlight and emergency lights, on the spot while you wait",
          "Hand-to-hand repair: many small items fixed while you wait (confirm item types with shop)",
          "Fans, mixer grinders, irons, induction cooktops",
          "Amplifiers, speakers and sound systems",
          "Rechargeable lights, torches, chargers, adapters",
          "Pumps and motors",
          "Honest advice: repair or replace",
        ],
      },
    ],
    links: [
      { href: "/torch-repair-damoh", label: "Torch Repair in Damoh – On-the-Spot, Hand-to-Hand" },
      { href: "/hi/repair-damoh", label: "यह पेज हिन्दी में" },
    ],
    faqs: [
      {
        question: "How long does a repair take?",
        answer: "Many small repairs are done on the spot. Bigger jobs depend on parts. Confirm with shop.",
      },
      {
        question: "What are the repair charges?",
        answer: "They depend on the fault. Ask at the counter.",
      },
    ],
  },
  "diwali-lights-damoh": {
    slug: "diwali-lights-damoh",
    path: "/diwali-lights-damoh",
    title: `Diwali Jhalar & Lights in Damoh | Wholesale Rate | Juneja Trading Corporation`,
    description: `Diwali jhalar and lights in Damoh at a wholesale rate. Five strings are ₹100–120, from ₹100, with wholesale rates on bulk: 3 colour LED rice serial light, crystal LED jhalar, silicone flower string, 12 metre 40 LED white jhalar, and a diya LED light string. ${festiveHeading}. ${brand.nap}.`,
    h1: "Diwali Jhalar & Lights in Damoh – Wholesale Rate",
    hindi: "दमोह में दिवाली झालर और लाइट्स – थोक रेट",
    intro:
      "This season's jhalar is on the counter at Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Damoh 470661. All five strings below are ₹100–120. From ₹100. Wholesale rates on bulk for shopkeepers and decorators. " +
      festiveHeading +
      ". The same visit covers " +
      festiveItemsHeading +
      ". " +
      ceilingFansHeading +
      " are on the fan counter if the room needs air as well as light.",
    enquiryName: "Diwali jhalar",
    sections: [
      {
        heading: "Five jhalar and light strings, ₹100–120",
        paragraphs: [
          "Five lights are priced for this festive window. The 3 colour LED rice jhalar is a plug-in serial light with warm white, yellow and blue strings. The crystal LED jhalar has diamond-shaped caps on a yellow wire. The silicone flower LED string light is multicolour. The white-wire jhalar is 12 metres, with 40 LEDs, and it is a 3-chip string. The diya LED light string is red and gold, diya-shaped, and it is hung as a light string or a toran. Both diya photographs are of that one string. Ask the counter which bag is in stock that morning, and bring a doorway measurement if the run has to match a particular length.",
          "The printed price on every one of these five is ₹100–120. From ₹100. A single string for a balcony and a bundle for a lane are not the same conversation. Wholesale rates on bulk are given at the counter or on the phone. The figure for a larger quantity is not printed here, because it depends on how many you take. Call " +
            brand.phone +
            " or " +
            brand.phone2 +
            ", or WhatsApp either number, and say which string and how many. Email " +
            brand.email +
            ".",
          "Join our WhatsApp group for new arrivals & offers: " +
            brand.whatsappGroupUrl +
            ". The group is where the shop posts what has just come in during these weeks. The shop is open every day from 10:00 AM to 9:30 PM. Home delivery covers Damoh. Customers also come from Hatta, Pathariya, Tendukheda, Jabera and Batiyagarh. " +
            brand.emiAvailable +
            ". " +
            brand.emiTerms +
            ".",
        ],
      },
      {
        heading: "Serial light, LED ladi, and how to choose",
        paragraphs: [
          "A serial light is the rice or pixel jhalar: small lamps close together, here in warm white, yellow and blue, and it plugs in. An LED ladi is the same family of string. Use the crystal string when you want the diamond caps to catch the light on a yellow wire. Use the silicone flowers when the front of the shop should read as multicolour blossoms rather than a plain line of lamps. Use the 12 metre 40 LED white-wire jhalar when you already know the run is about twelve metres and you want a 3-chip white-wire string. Use the diya string when the decoration should read as a row of red and gold diyas, including across a doorway as a toran.",
          festiveHeading +
            " is this counter. " +
            festiveItemsHeading +
            " stay beside the new strings. A jhalar does not replace an emergency light in a power cut. If the house also needs a torch or an emergency bulb, ask for those in the same visit. " +
            ceilingFansHeading +
            " are stocked for rooms and shops; the fan page is linked below. The shop has served Damoh since 1960.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a Diwali jhalar cost in Damoh?",
        answer:
          "The five strings on this page are ₹100–120. From ₹100. Wholesale rates on bulk. Call " +
          brand.phone +
          " for a larger quantity.",
      },
      {
        question: "Can I buy jhalar wholesale in Damoh?",
        answer:
          "Yes. Shopkeepers and decorators can ask Juneja Trading Corporation, Ghanta Ghar, for a wholesale rate on bulk. The printed counter range for these five strings is ₹100–120.",
      },
    ],
    links: [
      { href: "/product/diwali-led-jhalar-3-colour-damoh", label: "3 Colour LED Rice Jhalar (Serial Light) — ₹100–120" },
      { href: "/product/diwali-crystal-led-jhalar-damoh", label: "Crystal LED Jhalar — ₹100–120" },
      { href: "/product/diwali-silicone-flower-led-jhalar-damoh", label: "Silicone Flower LED String Light — ₹100–120" },
      { href: "/product/diwali-12m-40-led-white-jhalar-damoh", label: "12 Metre 40 LED White Jhalar — ₹100–120" },
      { href: "/product/diwali-diya-led-light-string-damoh", label: "Diya LED Light String — ₹100–120" },
      { href: "/ceiling-fans-damoh", label: ceilingFansHeading },
      { href: "/emergency-light-damoh", label: "Emergency lights and torches in Damoh" },
      { href: "/hi/diwali-lights-damoh", label: "यह पेज हिन्दी में" },
    ],
  },
  "ceiling-fans-damoh": {
    slug: "ceiling-fans-damoh",
    path: "/ceiling-fans-damoh",
    title: `${ceilingFansHeading} | Juneja Trading Corporation`,
    description: `${ceilingFansHeading}. Ceiling fans for rooms and shops in Damoh at Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha. Orient, Atomberg, Crompton, Havells, Usha and others. Confirm today's stock at the counter.`,
    h1: ceilingFansHeading,
    hindi: "सीलिंग फैन — दमोह में।",
    sections: [
      {
        heading: "What we offer",
        items: [
          "Ceiling fans for rooms, shops and halls",
          "Orient, Atomberg, Crompton, Havells, Usha and others (confirm stock)",
          "Table, pedestal and rechargeable fans on the same counter",
          "Help choosing sweep and colour for the room",
          "Home delivery across Damoh",
        ],
      },
    ],
    faqs: [
      {
        question: "Where can I buy ceiling fans in Damoh?",
        answer: `${brand.nap}.`,
      },
      {
        question: "Which ceiling fan brands are at the shop?",
        answer: "Orient, Atomberg, Crompton, Havells, Usha and others. Confirm the model with the shop.",
      },
      {
        question: "Do you deliver ceiling fans in Damoh?",
        answer: "Home delivery is available across Damoh. Call +91 99267 59557.",
      },
    ],
  },
  "led-tv-damoh": {
    slug: "led-tv-damoh",
    path: "/led-tv-damoh",
    title: `LED TV Shop in Damoh | ${brand.emiAvailable} | JTC Since 1960`,
    description: `LED TV shop in Damoh at ${brand.nap}, since 1960. ${brand.emiAvailable}. ${brand.emiTerms}. Call ${brand.phone} to confirm screen size and today's stock.`,
    h1: "LED TVs in Damoh",
    hindi: "एलईडी टीवी — दमोह में।",
    showEmi: true,
    intro: "LED TVs and smart TVs are on the counter at Ghanta Ghar. Confirm the size before you visit.",
    sections: [
      {
        heading: "What we offer",
        items: [
          "LED TVs",
          "Smart TVs",
          "Help matching the screen to the room",
          "Home delivery across Damoh",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Bajaj Finance EMI available on TVs?",
        answer: `${brand.emiAvailable}. ${brand.emiTerms}`,
      },
      {
        question: "Where is the TV counter in Damoh?",
        answer: brand.nap,
      },
    ],
  },
  "appliances-damoh": {
    slug: "appliances-damoh",
    path: "/appliances-damoh",
    title: `Home Appliance Shop in Damoh | ${brand.emiAvailable} | JTC Since 1960`,
    description: `Home appliance shop in Damoh at ${brand.nap}, since 1960. Refrigerators, washing machines, air conditioners and kitchen appliances. ${brand.emiAvailable}. ${brand.emiTerms}.`,
    h1: "Home appliances in Damoh",
    hindi: "फ्रिज, वॉशिंग मशीन और एसी — दमोह में।",
    showEmi: true,
    intro:
      "Refrigerators, washing machines, air conditioners and kitchen appliances are sold from the Damoh shop.",
    sections: [
      {
        heading: "What we offer",
        items: [
          "Refrigerators",
          "Washing machines",
          "Air conditioners",
          "Mixer grinders, juicers and other kitchen appliances",
          "Home delivery across Damoh",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Bajaj Finance EMI available on appliances?",
        answer: `${brand.emiAvailable}. ${brand.emiTerms}`,
      },
      {
        question: "Which appliances can I see in the shop?",
        answer:
          "Refrigerators, washing machines, air conditioners and kitchen appliances. Confirm the model at the counter.",
      },
    ],
  },
};

export const landings: Record<string, Landing> = Object.fromEntries(
  Object.entries({ ...coreLandings, ...localSeoPages }).map(([slug, page]) => [
    slug,
    withOfferMeta(withShopImage(page, "en")),
  ]),
);

export const landingList = Object.values(landings);

export const visitLine = visitHours;
