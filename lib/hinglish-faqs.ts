import type { LandingFaq } from "@/lib/landings";

function reply(detail: string): string {
  return `${detail} Juneja Trading Corporation (JTC), Ghanta Ghar, Azad Market, Damoh. Call 99267 59557 or 83191 71236. The shop is open from 10 AM.`;
}

function block(detail: string, questions: string[]): LandingFaq[] {
  return questions.map((question) => ({ question, answer: reply(detail) }));
}

const topics: Record<string, LandingFaq[]> = {
  "jhatka-machine-damoh": block(
    "Jhatka machine, zatka machine, and field fencing machine stock is at the counter. Today's rate is not printed on this page, so ask on the phone before you come.",
    [
      "Damoh mein jhatka machine kahan milega?",
      "zatka machine ka rate kya hai?",
      "jhataka machine ki dukan Damoh Ghanta Ghar",
    ],
  ),
  "kisan-torch-damoh": block(
    "Kisan torch and kissan torch, including solar torches, are kept at the torch counter. Call for today's rate.",
    [
      "kissan torch ki dukan Damoh",
      "kisan torch Damoh mein kahan milega?",
      "solar torch ka rate kya hai Damoh",
    ],
  ),
  "led-tv-damoh": block(
    "LED TVs are on the wall at the shop. Ask for today's price. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    [
      "sasta LED TV Damoh mein",
      "LED TV ki dukan Damoh Ghanta Ghar",
      "Damoh mein TV kahan milega?",
    ],
  ),
  "tv-on-emi-damoh": block(
    "Bajaj Finance EMI available on qualifying TVs. EMI subject to Bajaj Finance eligibility and terms. Ask which set qualifies before you decide.",
    [
      "EMI pe TV kahan milega Damoh",
      "TV EMI pe Damoh Ghanta Ghar",
      "Bajaj EMI pe LED TV milega kya?",
    ],
  ),
  "sound-home-theatre-damoh": block(
    "Home theatre and speakers are on the sound counter, including Zebronics. Compare them in the shop and ask today's price. The page does not name one set as the winner.",
    [
      "konsa home theatre best hai?",
      "home theatre ki dukan Damoh",
      "kaunsa speaker set Damoh mein milega?",
    ],
  ),
  "kisan-agri-damoh": block(
    "Kisan pumps, torches, and a jhatka machine counter are part of the farm shelf. Call for today's rate.",
    [
      "zatka machine Damoh mein milta hai kya?",
      "kisan pump ki dukan Damoh",
      "khet ke liye samaan kahan milega Damoh",
    ],
  ),
  "solar-damoh": block(
    "Solar panels, solar torches, and related kits are discussed at the counter. Confirm the kit and today's price on the phone.",
    [
      "solar panel Damoh mein kahan milega?",
      "solar light ki dukan Ghanta Ghar",
      "solar ka rate kya hai Damoh",
    ],
  ),
  "ceiling-fans-damoh": block(
    "Ceiling fans, including Havells and Usha when in stock, are at the fan counter. Call for today's price.",
    [
      "ceiling fan Damoh mein kahan milega?",
      "pankha ki dukan Damoh Ghanta Ghar",
      "best ceiling fan Damoh ka rate kya hai?",
    ],
  ),
  "electricals-damoh": block(
    "Wires, switches, LED bulbs, and other electrical goods are at the electrical counter.",
    [
      "electrical ki dukan Damoh Ghanta Ghar",
      "wire switch Damoh mein kahan milega?",
      "LED bulb wholesale Damoh ka rate",
    ],
  ),
  "repair-damoh": block(
    "Many small repairs are done hand to hand at the counter. Bring the item. Bigger jobs depend on parts.",
    [
      "Damoh mein repair kahan hoga?",
      "pankha mixer repair Ghanta Ghar",
      "on the spot repair ki dukan Damoh",
    ],
  ),
  "diwali-lights-damoh": block(
    "Jhalar, fairy lights, torches, emergency lights, and LED bulbs are stocked for the festive season. Call for today's price.",
    [
      "Diwali light Damoh mein kahan milegi?",
      "jhalar ki dukan Damoh",
      "fairy light ka rate kya hai Damoh",
    ],
  ),
  "appliances-damoh": block(
    "Fridge, washing machine, mixer, and other home appliances are on the appliance counter. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    [
      "fridge washing machine Damoh mein kahan milega?",
      "home appliance ki dukan Ghanta Ghar",
      "fridge ka rate kya hai Damoh",
    ],
  ),
  "dj-sound-system-damoh": block(
    "DJ sound and PA speakers are on the sound counter. Tell them the hall size when you call for today's price.",
    [
      "DJ sound Damoh mein kahan milega?",
      "DJ system ka rate kya hai Damoh",
      "shaadi ke liye sound ki dukan Damoh",
    ],
  ),
  "amplifier-damoh": block(
    "Amplifiers for home, shop, and function sound are at the sound counter. Call for today's price.",
    [
      "amplifier Damoh mein kahan milega?",
      "amp ka rate kya hai Damoh",
      "sound amplifier ki dukan Ghanta Ghar",
    ],
  ),
  "led-bulb-wholesale-damoh": block(
    "LED bulbs are on the shelves, and wholesale rates are discussed at the counter. Call for today's wholesale price.",
    [
      "LED bulb wholesale Damoh mein",
      "bulb ki dukan Damoh Ghanta Ghar",
      "sasta LED bulb Damoh ka rate",
    ],
  ),
  "emergency-light-damoh": block(
    "Emergency lights and rechargeable torches are on the same counter. Call for today's price.",
    [
      "emergency light Damoh mein kahan milegi?",
      "bijli jane pe light ki dukan Damoh",
      "emergency lamp ka rate kya hai?",
    ],
  ),
  "inverter-battery-damoh": block(
    "Inverter and battery options are explained at the counter. Call with the load you need and ask today's price.",
    [
      "inverter battery Damoh mein kahan milega?",
      "battery ki dukan Ghanta Ghar Damoh",
      "inverter ka rate kya hai Damoh",
    ],
  ),
  "festive-lights": block(
    "Jhalar, fairy lights, and decorative series are in the festive-lights section. Call for today's price.",
    ["Diwali light Damoh mein kahan milegi?", "jhalar series ka rate kya hai?", "fairy light ki dukan Damoh"],
  ),
  earbuds: block(
    "Earbuds are in the sound section. Call for today's price and which models are in the drawer.",
    ["earbuds Damoh mein kahan milenge?", "earphone ki dukan Damoh", "bluetooth buds ka rate kya hai Damoh"],
  ),
  "led-tv": block(
    "LED TVs are on the shop wall. Ask today's price. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    ["sasta LED TV Damoh mein", "LED TV ki dukan Damoh", "Damoh mein TV kahan milega?"],
  ),
  fridge: block(
    "Fridges from brands on the counter, including LG and Haier when in stock, are in this section. Call for today's price. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    ["fridge Damoh mein kahan milega?", "fridge ka rate kya hai Damoh", "LG fridge ki dukan Ghanta Ghar"],
  ),
  "washing-machine": block(
    "Washing machines are on the appliance counter. Call for today's price. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    [
      "washing machine Damoh mein kahan milegi?",
      "washer ka rate kya hai Damoh",
      "kapde dhone wali machine ki dukan Damoh",
    ],
  ),
  "air-conditioner": block(
    "Air conditioners are sold from the appliance counter. Ask tonnage and today's price on the phone. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    ["AC Damoh mein kahan milega?", "air conditioner ka rate kya hai Damoh", "AC ki dukan Ghanta Ghar"],
  ),
  "sound-pa": block(
    "PA speakers, DJ sound, and amplifiers are in this section. Call for today's price.",
    ["PA sound Damoh mein kahan milega?", "speaker ka rate kya hai Damoh", "loud speaker ki dukan Ghanta Ghar"],
  ),
  kitchen: block(
    "Mixer grinders and other kitchen machines are in this section. Call for today's price.",
    ["mixer grinder Damoh mein kahan milega?", "kitchen machine ka rate kya hai?", "mixer ki dukan Damoh Ghanta Ghar"],
  ),
  irons: block(
    "Dry irons and steam irons are on the small-appliance shelf. Call for today's price.",
    ["iron Damoh mein kahan milega?", "press ka rate kya hai Damoh", "steam iron ki dukan Ghanta Ghar"],
  ),
  electrical: block(
    "Wires, switches, and everyday electrical goods are in this section.",
    ["electrical samaan Damoh mein kahan milega?", "switch wire ki dukan Damoh", "electrical ka rate kya hai Ghanta Ghar"],
  ),
  solar: block(
    "Solar panels and solar lights are discussed from this section. Confirm the kit and today's price.",
    ["solar panel Damoh mein kahan milega?", "solar light ka rate kya hai?", "solar ki dukan Ghanta Ghar Damoh"],
  ),
  dth: block(
    "DTH dishes and set-top stock are in this section. Call for today's price and which operator is in stock.",
    ["DTH dish Damoh mein kahan milega?", "set top box ka rate kya hai Damoh", "dish ki dukan Ghanta Ghar"],
  ),
  "ceiling-fans": block(
    "Ceiling fans are in this section. Call for today's price and which sweep is in stock.",
    ["ceiling fan Damoh mein kahan milega?", "pankha ka rate kya hai Damoh", "ceiling fan ki dukan Ghanta Ghar"],
  ),
  "table-fans": block(
    "Table fans, pedestal fans, and charging fans are in this section. Call for today's price.",
    ["table fan Damoh mein kahan milega?", "pedestal fan ka rate kya hai?", "charging fan ki dukan Damoh"],
  ),
  lighting: block(
    "LED bulbs, battens, and room lights are in this section. Call for today's price.",
    ["LED light Damoh mein kahan milegi?", "bulb ka rate kya hai Damoh", "lighting ki dukan Ghanta Ghar"],
  ),
  "mixer-juicer": block(
    "Mixer grinders and juicers are in this section. Call for today's price and jar size.",
    ["mixer juicer Damoh mein kahan milega?", "juicer ka rate kya hai Damoh", "mixi ki dukan Ghanta Ghar"],
  ),
  "led-display": block(
    "LED display and standee stock is in this section. Call for today's price and size.",
    ["LED display Damoh mein kahan milega?", "standee ka rate kya hai Damoh", "LED screen ki dukan Ghanta Ghar"],
  ),
  cables: block(
    "Wires and cables are in this section. Call with the length and load you need.",
    ["wire cable Damoh mein kahan milega?", "cable ka rate kya hai Damoh", "taar ki dukan Ghanta Ghar"],
  ),
  pumps: block(
    "Submersible pumps and motors are in this section. Call with the HP you need and ask today's price.",
    ["submersible pump Damoh mein kahan milega?", "pump ka rate kya hai Damoh", "kisan pump ki dukan Ghanta Ghar"],
  ),
  torch: block(
    "Rechargeable torches, kisan torches, and emergency lights are in this section. Call for today's price.",
    ["kissan torch ki dukan Damoh", "torch kahan milega Damoh Ghanta Ghar", "rechargeable torch ka rate kya hai?"],
  ),
  "home-decor": block(
    "Decorative lights and home-decor lamps are in this section. Call for today's price.",
    ["home decor light Damoh mein kahan milegi?", "decoration lamp ka rate kya hai?", "ghar sajane ki light ki dukan Damoh"],
  ),
  "sound-speakers": block(
    "Speakers and home theatre sets are in this section. Compare them at the counter and ask today's price.",
    ["konsa home theatre best hai?", "speaker ki dukan Damoh", "bluetooth speaker ka rate kya hai Damoh"],
  ),
  "health-personal-care": block(
    "The 3-in-1 foot massager is ₹1,000. Other personal-care stock, ask on the phone.",
    [
      "foot massager Damoh mein kahan milega?",
      "massager ka rate kya hai Damoh",
      "health care machine ki dukan Ghanta Ghar",
    ],
  ),
  "home-kitchen-bottles": block(
    "The Cactus Love glass bottle is ₹149 and the ribbed water bottle is ₹189. Other bottles, ask at the counter.",
    ["water bottle Damoh mein kahan milegi?", "bottle ka rate kya hai Damoh", "glass bottle ki dukan Ghanta Ghar"],
  ),
  "havells-store-damoh": block(
    "We sell genuine Havells products with brand warranty. Fans, wires, switches, LED lights, and MCBs are the usual ask. Call for today's price.",
    ["Havells fan Damoh mein kahan milega?", "Havells ki dukan Damoh Ghanta Ghar", "Havells wire ka rate kya hai?"],
  ),
  "lg-store-damoh": block(
    "We sell genuine LG products with brand warranty. TVs, fridges, washing machines, and ACs when in stock. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    ["LG TV Damoh mein kahan milega?", "LG fridge ki dukan Ghanta Ghar", "LG washing machine ka rate kya hai Damoh"],
  ),
  "haier-store-damoh": block(
    "We sell genuine Haier products with brand warranty. Fridges, washing machines, and TVs when in stock. Call for today's price. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    ["Haier fridge Damoh mein kahan milega?", "Haier ki dukan Ghanta Ghar Damoh", "Haier washing machine ka rate kya hai?"],
  ),
  "samsung-store-damoh": block(
    "We sell genuine Samsung products with brand warranty. TVs and appliances when in stock. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
    ["Samsung TV Damoh mein kahan milega?", "Samsung ki dukan Ghanta Ghar", "Samsung LED TV ka rate kya hai Damoh"],
  ),
  "sony-store-damoh": block(
    "We sell genuine Sony products with brand warranty. Ask which TV or sound piece is in stock and today's price.",
    ["Sony TV Damoh mein kahan milega?", "Sony ki dukan Ghanta Ghar Damoh", "Sony TV ka rate kya hai?"],
  ),
  "zebronics-store-damoh": block(
    "We sell genuine Zebronics products with brand warranty. Speakers and home theatre are the usual ask. Compare them at the counter.",
    ["Zebronics speaker Damoh mein kahan milega?", "konsa home theatre best hai?", "Zebronics ka rate kya hai Damoh"],
  ),
  "usha-store-damoh": block(
    "We sell genuine Usha products with brand warranty. Fans, mixers, and irons are the usual ask. Call for today's price.",
    ["Usha fan Damoh mein kahan milega?", "Usha ki dukan Ghanta Ghar", "Usha mixer ka rate kya hai Damoh"],
  ),
  "sasta-speaker-damoh": [
    {
      question: "Damoh mein sasta speaker kahan milega?",
      answer: reply(
        "The printed low price is SoRoo K1 at ₹699 (MRP ₹699). Yoroto YO-J15 is ₹1,700. Zebronics BT2750RUF 4.1 is call for today's price. Email satpaljuneja11@gmail.com.",
      ),
    },
    {
      question: "konsa speaker best hai 2000 ke andar?",
      answer: reply(
        "Under ₹2,000 the published prices are SoRoo K1 at ₹699 and Yoroto YO-J15 at ₹1,700. Compare both at the counter. Zebronics BT2750RUF 4.1 is call for today's price, so it is not listed as under ₹2,000. Email satpaljuneja11@gmail.com.",
      ),
    },
  ],
  "celcore-store-damoh": block(
    "We sell genuine Celcore products with brand warranty. Torches, emergency lights, and LED bulbs are the usual ask. Call for today's price.",
    ["Celcore torch Damoh mein kahan milega?", "kissan torch ki dukan Damoh", "Celcore light ka rate kya hai?"],
  ),
};

export function hinglishFaqsFor(slug: string | undefined): LandingFaq[] {
  if (!slug) return [];
  return topics[slug] ?? [];
}
