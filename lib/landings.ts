import { brand } from "@/lib/brand";
import { ceilingFansHeading, festiveHeading, festiveItemsHeading } from "@/lib/copy";
import { localSeoPages } from "@/lib/local-seo-pages";

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
    sections: [
      {
        heading: "What we offer",
        items: [
          "Submersible pumps (e.g. Indo submersible pump) and monoblock pumps",
          "Motors, starters and panel accessories (confirm with shop)",
          "Submersible cable and pipe fittings (confirm with shop)",
          "Battery and manual sprayers (confirm with shop)",
          "Solar pumps and solar DC options",
          "Pump and motor repair",
        ],
      },
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
          "Water heaters, immersion rods and room heaters",
          "Bulk orders for contractors and electricians",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you take bulk orders?",
        answer: "Yes. Call +91 99267 59557 for contractor and bulk orders.",
      },
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
    sections: [
      {
        heading: "What we offer",
        items: [
          "Hand-to-hand repair: many small items fixed while you wait (confirm item types with shop)",
          "Fans, mixer grinders, irons, induction cooktops",
          "Amplifiers, speakers and sound systems",
          "Rechargeable lights, torches, chargers, adapters",
          "Pumps and motors",
          "Honest advice: repair or replace",
        ],
      },
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
    title: `Diwali Lights Shop in Damoh | ${festiveHeading} | JTC Since 1960`,
    description: `Diwali lights shop in Damoh. ${festiveHeading}. ${festiveItemsHeading}. ${ceilingFansHeading}. Jhalar, fairy lights and LED diyas at Juneja Trading Corporation, Ghanta Ghar, since 1960.`,
    h1: "Diwali lights in Damoh",
    hindi: "दिवाली झालर, फेयरी लाइट, एलईडी दीया — दमोह में।",
    sections: [
      {
        heading: festiveHeading,
        paragraphs: [
          "Juneja Trading Corporation keeps festive lighting for homes, shops and decorators in Damoh.",
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
        heading: ceilingFansHeading,
        paragraphs: [
          "Ceiling fans are stocked alongside the festive lights. See the ceiling fan page or ask at the counter.",
        ],
      },
      {
        heading: "What we offer",
        items: [
          "LED jhalar and string lights (multi-colour and warm white)",
          "Rope and neon rope lights",
          "Fairy lights, USB fairy lights with remote, lantern and milky-ball lights",
          "Meteor rain and decorative fruit lights",
          "LED diyas",
          "Wholesale for shops and decorators (confirm with shop)",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you sell Diwali lights wholesale?",
        answer: "Retail and bulk. Call for today's rates.",
      },
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

export const landings: Record<string, Landing> = {
  ...coreLandings,
  ...localSeoPages,
};

export const landingList = Object.values(landings);

export const visitLine = visitHours;
