import type { LandingFaq } from "@/lib/landings";

export type ShopCategoryCopy = {
  slug: string;
  title: string;
  titleHi: string;
  paragraphs: string[];
  links: { href: string; label: string }[];
  faqs: LandingFaq[];
};

const visit =
  "The counter is Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar, Madiya Pangarha, Damoh, Madhya Pradesh 470661. The shop has served Damoh since 1960 and is open Monday to Sunday, 10:00 to 21:30. Call +91 99267 59557 or +91 83191 71236 and ask what is on the shelf today. Home delivery covers Damoh. People also come from Hatta, Pathariya, Tendukheda, Jabera and Batiyagarh. Many small repairs are done on the spot.";

const pages: ShopCategoryCopy[] = [
  {
    slug: "festive-lights",
    title: "Festive lights in Damoh",
    titleHi: "दमोह में दिवाली लाइट और झालर",
    paragraphs: [
      "Damoh's best for Diwali lighting is the festive counter at Juneja Trading Corporation. Festive lighting, jhalar, fairy lights, torches, emergency lights, emergency bulbs and LED bulbs are what households ask for when Ghanta Ghar starts putting up lights. Five strings photographed in the shop are ₹100–120, from ₹100, with wholesale rates on bulk: the plug-in 3 colour LED rice serial light, the crystal LED jhalar on a yellow wire, the multicolour silicone flower string, the 12 metre 40 LED white-wire jhalar (3-chip), and the red and gold diya light string. The shop also keeps lantern lights, rope lights and other decoration sets. A set that looks right in a lane may be the wrong length for a balcony, so bring the measurement or describe the front of the house.",
      "Jhalar and fairy lights are sold for homes, shops and temporary stalls. Some strings are USB, some are mains, and some are sold as multi-colour decoration sets. The catalogue names include lantern string lights, meteor rain lights, neon rope and jari ladi. Stock turns over in the weeks before Diwali, so a colour that was here last week may need a fresh call. Torches and emergency lights sit near the same floor because a power cut does not wait for the festival to end. " +
        visit,
    ],
    links: [
      { href: "/diwali-lights-damoh", label: "Diwali Jhalar & Lights in Damoh – Wholesale Rate" },
      { href: "/hi/diwali-lights-damoh", label: "दमोह में दिवाली झालर और लाइट्स – थोक रेट" },
      { href: "/product/diwali-led-jhalar-3-colour-damoh", label: "3 Colour LED Rice Jhalar — ₹100–120" },
      { href: "/product/diwali-crystal-led-jhalar-damoh", label: "Crystal LED Jhalar — ₹100–120" },
      { href: "/product/diwali-silicone-flower-led-jhalar-damoh", label: "Silicone Flower LED String — ₹100–120" },
      { href: "/product/diwali-12m-40-led-white-jhalar-damoh", label: "12 Metre 40 LED White Jhalar — ₹100–120" },
      { href: "/product/diwali-diya-led-light-string-damoh", label: "Diya LED Light String — ₹100–120" },
      { href: "/emergency-light-damoh", label: "Emergency lights in Damoh" },
    ],
    faqs: [
      {
        question: "Where do I buy jhalar and fairy lights in Damoh?",
        answer:
          "At Juneja Trading Corporation, Shop No. 6, Azad Market, Ghanta Ghar. Ask for jhalar, fairy lights, rope lights or LED diyas and the counter will show what is in stock that day.",
      },
      {
        question: "Do you sell festive lights only at Diwali?",
        answer:
          "The busiest weeks are before Diwali, and the same counter also keeps torches, emergency lights and LED bulbs through the year. Call before you come if you need a particular length.",
      },
      {
        question: "Can I get a wholesale lot of serial lights?",
        answer:
          "Retail and bulk are both discussed at the counter. Call +91 99267 59557 with the number of sets and the colour. Today's rate is given on the phone or at the shop, not as a fixed figure on this page.",
      },
    ],
  },
  {
    slug: "earbuds",
    title: "Earbuds in Damoh",
    titleHi: "दमोह में ईयरबड्स",
    paragraphs: [
      "Earbuds at Juneja Trading Corporation are a small counter inside a shop that has sold electronics in Damoh since 1960. The pieces customers can ask for by name include OnePlus Buds Pro 3 and realme Buds Wireless 3 Neo. Those are shop-stock items, not a promise that every colour is in the drawer today. Bring the phone you will pair them with. A neckband and a true-wireless pair are different products, and the counter would rather show both than guess.",
      "This counter sells earbuds. It is not a hearing-aid clinic. If a bud fails in the warranty window, ask the shop what the brand's process is before you leave the box behind. Prices are not printed on this page. Call and ask for today's price. " +
        visit,
    ],
    links: [
      { href: "/sound-home-theatre-damoh", label: "Sound shop in Damoh" },
      { href: "/shop/sound-speakers", label: "Speakers in the catalogue" },
    ],
    faqs: [
      {
        question: "Which earbuds can I see in the Damoh shop?",
        answer:
          "Ask for OnePlus Buds Pro 3 and realme Buds Wireless 3 Neo, then confirm which of those is actually in the drawer. Other pairs come and go.",
      },
      {
        question: "Do earbuds have a listed price on the website?",
        answer:
          "No. Call +91 99267 59557 or +91 83191 71236 for today's price. The shop does not want a stale rupee figure sitting on the page.",
      },
      {
        question: "Can you repair an earbud in Damoh?",
        answer:
          "Many small repairs are done on the spot. A sealed wireless pair is often a replacement or a brand process, not a solder job. Bring it to Ghanta Ghar and ask.",
      },
    ],
  },
  {
    slug: "led-tv",
    title: "LED TV in Damoh",
    titleHi: "दमोह में एलईडी टीवी",
    paragraphs: [
      "LED and smart TVs at Juneja Trading Corporation are sold from the Ghanta Ghar shop, where a wall of screens is part of the floor. Customers ask for Samsung, LG, Sony and Haier. The shop sells genuine products with brand warranty. Trademarks belong to their owners. Tell the counter whether the set is for a bedroom, a shop front or a hall. The last size in a series can leave the same day it arrives.",
      "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. Fridge, washing machine, LED TV and AC are the appliances the shop talks about for 0% Bajaj Finance. A television price is not published here because the figure moves. Call before you hire a vehicle. The shop can say which sizes are on the wall and whether EMI is being offered on that piece. " +
        visit,
    ],
    links: [
      { href: "/led-tv-damoh", label: "LED TV shop in Damoh" },
      { href: "/tv-on-emi-damoh", label: "TV on EMI in Damoh" },
      { href: "/hi/led-tv-damoh", label: "एलईडी टीवी, हिन्दी में" },
      { href: "/brands/samsung-store-damoh", label: "Samsung at the Damoh shop" },
    ],
    faqs: [
      {
        question: "Can I buy a TV on EMI in Damoh?",
        answer:
          "Bajaj Finance EMI available at Juneja Trading Corporation. EMI subject to Bajaj Finance eligibility and terms. Ask at the counter which sets are eligible that day.",
      },
      {
        question: "Which TV brands are at Ghanta Ghar?",
        answer:
          "Customers ask for Samsung, LG, Sony and Haier. Confirm the series on the phone. The shop sells genuine products with brand warranty.",
      },
      {
        question: "Why is there no TV price on this page?",
        answer:
          "Screen prices change. Call +91 99267 59557 or +91 83191 71236 for today's price instead of relying on an old figure.",
      },
    ],
  },
  {
    slug: "fridge",
    title: "Refrigerator in Damoh",
    titleHi: "दमोह में फ्रिज",
    paragraphs: [
      "Refrigerators at Juneja Trading Corporation are chosen by litres and by the space you actually have, not by a banner. Single-door and larger fridges are both asked for in Damoh. Customers name LG, Haier and Samsung. The shop sells genuine products with brand warranty. Measure the alcove before you come: width, depth, and whether the door needs to open towards the lane. A fridge that fits the catalogue photo can still fail the turn into a Damoh kitchen.",
      "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. 0% Bajaj Finance is discussed on fridge, washing machine, LED TV and AC. Delivery across Damoh is arranged from the same counter. This page does not print a rupee price. Ask which litres are in the godown today. " +
        visit,
    ],
    links: [
      { href: "/appliances-damoh", label: "Home appliances in Damoh" },
      { href: "/hi/appliances-damoh", label: "घरेलू उपकरण, हिन्दी में" },
      { href: "/brands/lg-store-damoh", label: "LG at the Damoh shop" },
    ],
    faqs: [
      {
        question: "Do you deliver a fridge inside Damoh?",
        answer:
          "Home delivery covers Damoh. Call with the lane and the floor. Hatta, Pathariya, Tendukheda, Jabera and Batiyagarh customers should ask whether delivery or collection is simpler.",
      },
      {
        question: "Is EMI available on a refrigerator?",
        answer:
          "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. Eligibility is decided on the documents, not by this page.",
      },
      {
        question: "Which fridge should I buy for a small kitchen?",
        answer:
          "Bring the alcove size to Shop No. 6, Azad Market. The counter will show the litres that fit, instead of selling the largest set on the floor.",
      },
    ],
  },
  {
    slug: "washing-machine",
    title: "Washing machine in Damoh",
    titleHi: "दमोह में वॉशिंग मशीन",
    paragraphs: [
      "Washing machines at Juneja Trading Corporation are sold to homes that have a tap, a drain and a corner that can take the spin. Customers ask about top-load and front-load machines and about capacity for a family. Brands people name in the shop include LG, Samsung and Haier. The shop sells genuine products with brand warranty. It will not invent a fully automatic claim for a semi-automatic machine that happens to be the one in stock.",
      "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. Ask about 0% Bajaj Finance on the piece you are standing in front of. Installation, if you need a plumber as well as delivery, is confirmed separately at the counter. No washing-machine price is printed here. " +
        visit,
    ],
    links: [
      { href: "/appliances-damoh", label: "Appliances in Damoh" },
      { href: "/brands/haier-store-damoh", label: "Haier at the Damoh shop" },
    ],
    faqs: [
      {
        question: "Can I see a washing machine before I buy it?",
        answer:
          "Yes. Come to Ghanta Ghar, Azad Market. Call first if you need a particular capacity, because the floor changes through the week.",
      },
      {
        question: "Is Bajaj Finance EMI available on washing machines?",
        answer:
          "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
      },
      {
        question: "Do you repair a washing machine on the spot?",
        answer:
          "Many small repairs are done at the counter. A sealed machine under brand warranty may follow the brand's process. Bring the problem to the shop and ask.",
      },
    ],
  },
  {
    slug: "air-conditioner",
    title: "Air conditioner in Damoh",
    titleHi: "दमोह में एयर कंडीशनर",
    paragraphs: [
      "Air conditioners at Juneja Trading Corporation are sold for rooms in Damoh, not as a tonne figure copied from another city. Tell the counter the room size, whether the sun hits that wall, and whether you need the set before the hot weeks. Brands the shop sells include Voltas and others on the appliance floor. The shop sells genuine products with brand warranty. A tonnage that is right for a closed bedroom can be wrong for a shop with the shutter open.",
      "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. 0% Bajaj Finance is discussed on AC along with fridge, washing machine and LED TV. Fitting is not the same thing as the machine price. Ask what the shop can arrange and what a local fitter will charge. This page does not print an AC price. " +
        visit,
    ],
    links: [
      { href: "/appliances-damoh", label: "Appliances in Damoh" },
      { href: "/tv-on-emi-damoh", label: "EMI at the Damoh shop" },
    ],
    faqs: [
      {
        question: "Do you sell air conditioners in Damoh?",
        answer:
          "Yes. Juneja Trading Corporation sells ACs from Shop No. 6, Azad Market, Ghanta Ghar. Call for the tonne sizes in stock.",
      },
      {
        question: "Is installation included?",
        answer:
          "Ask at the counter. The machine and the fitting are quoted separately when they are separate. Do not assume a website price includes copper pipe or a stand.",
      },
      {
        question: "Can an AC be taken on EMI?",
        answer:
          "Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms.",
      },
    ],
  },
  {
    slug: "sound-pa",
    title: "Sound and PA systems in Damoh",
    titleHi: "दमोह में साउंड और पीए सिस्टम",
    paragraphs: [
      "Sound and PA at Juneja Trading Corporation covers home theatre, soundbars, horn speakers, amplifiers and sets for a shop, a temple or a wedding. On the shelf, customers can ask for the SB-421 soundbar with a 6.5-inch woofer, a Samcon horn, a Banjara radio player, an Advantech car music player and a Dotsun megaphone. Ahuja is a name people ask for. Dealer status for any brand should be confirmed with the shop. The shop sells genuine products with brand warranty.",
      "Zebronics ZEB-BT2750RUF 4.1 speaker home theatre is in new arrivals: 70W RMS, Bluetooth, USB, FM, remote, Made in India. Call for today's price. Listen in the shop if the set is unpacked. A PA for a procession is a different brief from a soundbar under a TV. Say which one you came for. " +
        visit,
    ],
    links: [
      { href: "/sound-home-theatre-damoh", label: "Home theatre shop in Damoh" },
      { href: "/dj-sound-system-damoh", label: "DJ sound in Damoh" },
      { href: "/amplifier-damoh", label: "Amplifiers in Damoh" },
      { href: "/product/zebronics-zeb-bt2750ruf-home-theatre", label: "Zebronics ZEB-BT2750RUF" },
    ],
    faqs: [
      {
        question: "Can I hear a sound system in the shop?",
        answer:
          "Ask for a demo at Ghanta Ghar. Call ahead so the set you want is not still in a carton.",
      },
      {
        question: "Do you sell PA for a wedding or a temple?",
        answer:
          "Amplifiers, horn speakers and mic sets are sold for events. Call for today's price and say whether you need a hall, a lane or a permanent shop system.",
      },
      {
        question: "Is the Zebronics home theatre priced on the site?",
        answer:
          "No. The ZEB-BT2750RUF page says call for today's price. The specs published are 70W RMS, Bluetooth, USB, FM, remote and Made in India.",
      },
    ],
  },
  {
    slug: "kitchen",
    title: "Kitchen appliances in Damoh",
    titleHi: "दमोह में किचन अप्लायंस",
    paragraphs: [
      "Kitchen appliances at Juneja Trading Corporation include mixers, induction cookers and the small machines a Damoh kitchen actually uses. Shop photos and stock include the Plasma 1988N inverter induction and the Jetron Phantom infrared cooker. Those names are examples of what has been on the counter, not a promise that both cartons are free today. Tell the staff whether you cook on a low-voltage lane. An induction cooker that works in a new colony can trip a weak line. Bring the old machine's wattage if you are replacing one.",
      "Mixer grinders and juicers are on the next category as well, because customers use both names. Bajaj and Philips are among the brands the shop sells. No kitchen-appliance price is printed here. Bajaj Finance EMI available where the product and your documents qualify. EMI subject to Bajaj Finance eligibility and terms. " +
        visit,
    ],
    links: [
      { href: "/appliances-damoh", label: "Appliances in Damoh" },
      { href: "/shop/mixer-juicer", label: "Mixer and juicer" },
      { href: "/shop/irons", label: "Irons" },
    ],
    faqs: [
      {
        question: "Do you sell induction cookers in Damoh?",
        answer:
          "Yes. Ask for the induction and infrared cookers in stock, including pieces such as the Plasma 1988N and Jetron Phantom when they are on the shelf.",
      },
      {
        question: "Can I run an induction cooker on a weak line?",
        answer:
          "Tell the counter about the cuts and the wiring in the house. The shop would rather sell a machine that starts than a higher wattage that trips.",
      },
      {
        question: "Are mixer prices listed?",
        answer:
          "No. Call +91 99267 59557 for today's price.",
      },
    ],
  },
  {
    slug: "irons",
    title: "Irons in Damoh",
    titleHi: "दमोह में इस्त्री",
    paragraphs: [
      "Dry irons and steam irons are a steady counter at Juneja Trading Corporation, next to the other small appliances. Shop stock has included a Stylo dry iron and steam irons. Usha is one of the iron and fan brands customers ask for in Damoh. The shop sells genuine products with brand warranty. A dry iron and a steam iron are not the same purchase: say whether you need steam, and whether the cloth is cotton that can take heat.",
      "Irons are light enough for home delivery across Damoh, and light enough to bring back if a wire or a thermostat needs a look. Many small repairs are done on the spot. This page does not print a price. A dry iron for cotton and a steam iron for a shop's clothes are different, so say what you press. " +
        visit,
    ],
    links: [
      { href: "/brands/usha-store-damoh", label: "Usha at the Damoh shop" },
      { href: "/repair-damoh", label: "Repair at the shop" },
      { href: "/appliances-damoh", label: "Appliances in Damoh" },
    ],
    faqs: [
      {
        question: "Do you sell steam irons and dry irons?",
        answer:
          "Yes. Ask at Ghanta Ghar. Stylo dry irons and steam irons have both been in the shop stock. Confirm what is on the shelf today.",
      },
      {
        question: "Can you repair an iron?",
        answer:
          "Many small repairs, including cords and everyday appliance faults, are done on the spot. Bring the iron to Shop No. 6.",
      },
      {
        question: "Is Usha available?",
        answer:
          "Usha is one of the brands the shop sells, including fans, mixers and irons when they are in stock. Call before you come for a named series.",
      },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical goods in Damoh",
    titleHi: "दमोह में इलेक्ट्रिकल सामान",
    paragraphs: [
      "Electrical goods at Juneja Trading Corporation are the everyday counter: extension boards, adapters, small fittings and the pieces a house needs after a fault. Shop stock has included HD Silicon extension boards, a JBB 16 amp power house, a 12V 1 amp DC pin adapter, an Apple 35W dual USB-C adapter and a mini massage gun. Wires, switches, MCBs and LED fittings are discussed on the electricals landing page. Brands customers ask for include Havells, Finolex, RR Kabel and McCoy. The shop sells genuine products with brand warranty.",
      "Contractors and households both use this counter. A single switch is a different conversation from a reel of wire. Say which one you need so you are not shown the wrong shelf. LED bulb wholesale is a separate page because shops and electricians buy bulbs in lots. " +
        visit,
    ],
    links: [
      { href: "/electricals-damoh", label: "Electricals in Damoh" },
      { href: "/led-bulb-wholesale-damoh", label: "LED bulb wholesale" },
      { href: "/brands/havells-store-damoh", label: "Havells at the Damoh shop" },
      { href: "/shop/cables", label: "Wires and cables" },
    ],
    faqs: [
      {
        question: "Where do I buy switches and extension boards in Damoh?",
        answer:
          "At Juneja Trading Corporation, Azad Market, Ghanta Ghar. Extension boards such as the HD Silicon line are part of the electrical stock when they are in.",
      },
      {
        question: "Do you sell Havells electricals?",
        answer:
          "Havells fans, wires, switches, LED and MCB are what customers ask for. The shop sells genuine Havells products with brand warranty when that series is in stock. Call to confirm.",
      },
      {
        question: "Can an electrician pick up material the same day?",
        answer:
          "Yes, during shop hours, 10:00 to 21:30, every day. Call +91 99267 59557 if the list is long, so the counter can say what is short.",
      },
    ],
  },
  {
    slug: "solar",
    title: "Solar products in Damoh",
    titleHi: "दमोह में सोलर",
    paragraphs: [
      "Solar at Juneja Trading Corporation means panels, lights and the DC pieces a house or a field asks for, sold from Ghanta Ghar. Customers ask for Luminous and for other solar names that are in stock that week. Shop stock has included a 12V 35W DC street light and a Samcon digital home UPS. A solar panel is also part of the shop floor, beside the LED TV wall. The shop does not invent an installation promise. Panel price and fitting are quoted separately when both are required.",
      "Farmers looking for a solar torch or a solar fence should use the kisan pages as well. A home solar light and a field torch are different products. Say which job the panel has to do. No solar kit price is printed here. " +
        visit,
    ],
    links: [
      { href: "/solar-damoh", label: "Solar panel shop in Damoh" },
      { href: "/hi/solar-damoh", label: "सोलर, हिन्दी में" },
      { href: "/inverter-battery-damoh", label: "Inverter and battery" },
      { href: "/kisan-agri-damoh", label: "Kisan products" },
    ],
    faqs: [
      {
        question: "Do you install solar panels in Damoh?",
        answer:
          "Installation availability and charges are confirmed with the shop. The panel and the fitting are quoted separately.",
      },
      {
        question: "Which solar brands do you sell?",
        answer:
          "Customers ask for Luminous and for other names on the shelf that day. Call +91 99267 59557 before you travel for a named series.",
      },
      {
        question: "Is a solar street light different from a home UPS?",
        answer:
          "Yes. A 12V DC street light and a home UPS solve different cuts. Tell the counter whether you need light on a lane or backup inside the house.",
      },
    ],
  },
  {
    slug: "dth",
    title: "DTH dish in Damoh",
    titleHi: "दमोह में डीटीएच डिश",
    paragraphs: [
      "DTH dishes at Juneja Trading Corporation are the hardware on the counter: dish, set-top box and the fittings a roof in Damoh needs. Shop stock has included Sun Direct Sun HD and Dish TV d2h HD dishes. A dish is not a channel pack. The shop sells the equipment. Recharge, packs and a brand's customer-care number stay with that brand. Say whether you are replacing a rusted dish or starting in a house that has never had one.",
      "Alignment on a roof is physical work. Ask the shop what it can supply and what a local fitter will do. Remote handsets are a separate small item. No dish price is printed on this page. A dish that is only the metal, without the set-top box the house already uses, is a wasted trip, so name the brand of the old box. " +
        visit,
    ],
    links: [
      { href: "/electricals-damoh", label: "Electricals in Damoh" },
      { href: "/contact", label: "Call the shop" },
    ],
    faqs: [
      {
        question: "Do you sell Dish TV and Sun Direct dishes?",
        answer:
          "Sun Direct Sun HD and Dish TV d2h HD dishes have been in the shop stock. Call to see which carton is on the shelf today.",
      },
      {
        question: "Do you recharge a DTH pack?",
        answer:
          "The shop sells dish hardware. Channel packs and recharge stay with the DTH brand. Ask at the counter if you are unsure which piece you actually need.",
      },
      {
        question: "Can you point the dish?",
        answer:
          "Ask. Supplying the dish and sending someone onto the roof are different jobs, and the shop will say which one it is doing.",
      },
    ],
  },
  {
    slug: "ceiling-fans",
    title: "Ceiling fans in Damoh",
    titleHi: "दमोह में सीलिंग फैन",
    paragraphs: [
      "Best ceiling fans in Damoh are chosen at Juneja Trading Corporation for the room you have, not from a single brand poster. Customers ask for Orient, Atomberg, Crompton, Havells and Usha. The shop sells genuine products with brand warranty. Sweep, colour and a regulator are the practical questions. A low bedroom, a shop with a high tin roof and a hall do not want the same fan. Confirm the model, because a colour that was here on Monday may be down to one piece by Thursday.",
      "Table fans, pedestal fans and rechargeable fans are on the same visit if you are not sure a ceiling hook is the right answer. Bajaj Finance EMI available where the fan and the documents qualify. EMI subject to Bajaj Finance eligibility and terms. No ceiling-fan price is printed here. " +
        visit,
    ],
    links: [
      { href: "/ceiling-fans-damoh", label: "Ceiling fan shop in Damoh" },
      { href: "/hi/ceiling-fans-damoh", label: "सीलिंग फैन, हिन्दी में" },
      { href: "/shop/table-fans", label: "Table and pedestal fans" },
      { href: "/brands/usha-store-damoh", label: "Usha fans" },
    ],
    faqs: [
      {
        question: "Which ceiling fan brands are in the Damoh shop?",
        answer:
          "Orient, Atomberg, Crompton, Havells, Usha and others, subject to stock. Call before you come for a named series.",
      },
      {
        question: "How do I choose the sweep?",
        answer:
          "Tell the counter the room size and the ceiling height. Best ceiling fans in Damoh are the ones that match that room and are actually on the shelf.",
      },
      {
        question: "Do you deliver fans in Damoh?",
        answer:
          "Home delivery covers Damoh. Call +91 99267 59557.",
      },
    ],
  },
  {
    slug: "table-fans",
    title: "Table fans in Damoh",
    titleHi: "दमोह में टेबल फैन",
    paragraphs: [
      "Table fans, pedestal fans and rechargeable fans are sold at Juneja Trading Corporation beside the ceiling-fan counter. A rechargeable fan matters in a lane where the cut is long. A pedestal fan matters where you cannot fit a ceiling hook. Customers also ask for ceiling fans from Orient, Atomberg, Crompton, Havells and Usha when the room can take one. Say which fan you came for so you are not shown the wrong row.",
      "Best ceiling fans in Damoh are a separate page if the hook and the regulator are what you need. This page is the smaller fans: table, pedestal and the rechargeable pieces that move from room to room. No fan price is printed here. Ask about sweep on a pedestal fan the same way you would ask about a ceiling fan, because a small cage in a large shop does not move enough air. " +
        visit,
    ],
    links: [
      { href: "/ceiling-fans-damoh", label: "Ceiling fans in Damoh" },
      { href: "/shop/ceiling-fans", label: "Ceiling fan category" },
    ],
    faqs: [
      {
        question: "Do you sell rechargeable fans?",
        answer:
          "Yes, when they are in stock, on the same counter as table and pedestal fans. Call +91 99267 59557 and say rechargeable.",
      },
      {
        question: "Is a table fan better than a ceiling fan?",
        answer:
          "It depends on the room. No hook, or a long power cut, often means a table or rechargeable fan. A high ceiling with a regulator often means a ceiling fan.",
      },
      {
        question: "Are fan prices on the website?",
        answer:
          "No. Ask for today's price at the shop or on the phone.",
      },
    ],
  },
  {
    slug: "lighting",
    title: "Lighting and LED bulbs in Damoh",
    titleHi: "दमोह में लाइटिंग और एलईडी बल्ब",
    paragraphs: [
      "Lighting at Juneja Trading Corporation is the bulb, batten and fitting counter inside the Damoh shop. Shelves of LED bulbs are part of the interior, along with the founder portrait and the Bajaj Finserv 0% EMI board. Customers ask for Philips, Surya, Havells and other bulb brands, subject to stock. RR Lighting Avidite Neo 9W high beam LED bulb, B22, is in new arrivals. Wholesale rates are available. Call for today's price. The pack shows a 1 star mark.",
      "Emergency bulbs are not the same as a decorative lamp. If the job is a corridor that must stay lit in a cut, say so. Festive lighting, jhalar and fairy lights are on the Diwali page. This lighting page is the everyday LED and fitting work. " +
        visit,
    ],
    links: [
      { href: "/led-bulb-wholesale-damoh", label: "LED bulb wholesale in Damoh" },
      { href: "/product/rr-avidite-neo-9w-led-bulb", label: "RR Avidite Neo 9W bulb" },
      { href: "/electricals-damoh", label: "Electricals in Damoh" },
      { href: "/emergency-light-damoh", label: "Emergency lights" },
    ],
    faqs: [
      {
        question: "Do you sell LED bulbs wholesale in Damoh?",
        answer:
          "Yes. Wholesale rates are available at Juneja Trading Corporation. Call with the wattage, the cap and the quantity.",
      },
      {
        question: "What is the RR Avidite Neo bulb?",
        answer:
          "RR Lighting Avidite Neo 9W high beam LED bulb, B22, with a 1 star mark on the pack. Hindi name: आरआर लाइटिंग एविडाइट नियो 9W हाई बीम एलईडी बल्ब. Call for today's price.",
      },
      {
        question: "Which bulb cap should I ask for?",
        answer:
          "Bring the old bulb or say B22 if that is what the holder takes. The counter would rather match the cap than sell a bulb that will not seat.",
      },
    ],
  },
  {
    slug: "mixer-juicer",
    title: "Mixer and juicer in Damoh",
    titleHi: "दमोह में मिक्सर और जूसर",
    paragraphs: [
      "Mixer grinders and juicers at Juneja Trading Corporation are sold with the other kitchen machines. Customers ask for Bajaj, Philips, Usha and other names that are in the godown that week. Jars, wattage and whether you need a juicer attachment are the useful questions. A mixer for daily batter is a different machine from a small juicer used once a week. The shop sells genuine products with brand warranty.",
      "Bring the old jar if you only need a spare, because a jar from another series often will not fit. Many small repairs are looked at on the spot. No mixer price is printed on this page. Bajaj Finance EMI available when the product qualifies. EMI subject to Bajaj Finance eligibility and terms. A three-jar mixer and a single-jar juicer are stocked as different machines, so say how many people you grind for and whether the jars must be steel. " +
        visit,
    ],
    links: [
      { href: "/appliances-damoh", label: "Appliances in Damoh" },
      { href: "/shop/kitchen", label: "Kitchen appliances" },
      { href: "/brands/usha-store-damoh", label: "Usha at the Damoh shop" },
    ],
    faqs: [
      {
        question: "Do you sell mixer grinders in Damoh?",
        answer:
          "Yes. Ask at Ghanta Ghar for the jars and wattage in stock. Bajaj, Philips and Usha are among the names customers use.",
      },
      {
        question: "Can I buy only a jar?",
        answer:
          "Sometimes. Bring the mixer or the model number. A jar is not universal across series.",
      },
      {
        question: "Is there a price list for mixers?",
        answer:
          "No. Call +91 99267 59557 for today's price.",
      },
    ],
  },
  {
    slug: "led-display",
    title: "LED display in Damoh",
    titleHi: "दमोह में एलईडी डिस्प्ले",
    paragraphs: [
      "LED display at Juneja Trading Corporation, for this category, means the indoor standee and kiosk-style screens the shop has stocked, not a stadium video wall. An indoor LED digital standee has been part of the Damoh shop stock. Shopkeepers use that kind of screen for a rate board or a welcome loop. It is a different product from a living-room LED TV. If you came for a television, use the LED TV category. If you came for a standing display, say so.",
      "Content for the screen, the power point, and whether the stand fits your shop front are practical questions. The shop will not invent a brightness rating that is not on the piece in front of you. No display price is printed here. " +
        visit,
    ],
    links: [
      { href: "/led-tv-damoh", label: "LED TVs in Damoh" },
      { href: "/shop/led-tv", label: "LED TV category" },
    ],
    faqs: [
      {
        question: "Is an LED standee the same as an LED TV?",
        answer:
          "No. The standee is a shop display. An LED TV is the living-room or counter television. Tell the staff which one you want.",
      },
      {
        question: "Do you have an indoor LED standee?",
        answer:
          "An indoor LED digital standee has been in the shop stock. Call +91 83191 71236 to see if that piece is still on the floor.",
      },
      {
        question: "Can you load a shop's prices onto the screen?",
        answer:
          "Ask at the counter what the set in stock can play. Do not assume every standee accepts the same pen drive or the same layout.",
      },
    ],
  },
  {
    slug: "cables",
    title: "Wires and cables in Damoh",
    titleHi: "दमोह में वायर और केबल",
    paragraphs: [
      "Wires and cables at Juneja Trading Corporation are sold to households and to electricians working in Damoh. Customers ask for Havells, Finolex and RR Kabel. The shop sells genuine products with brand warranty. A coil for a new room and a short length for a repair are both normal requests. Say the square millimetre and the colour if you know them. Guessing a thinner wire to save money is how a line heats up.",
      "Extension boards and adapters are on the electrical category. This page is the wire itself. MCBs and switches are discussed with the electricals landing page, often on the same visit. No per-metre price is printed here because copper rates move. Call and ask for today's rate. " +
        visit,
    ],
    links: [
      { href: "/electricals-damoh", label: "Electricals in Damoh" },
      { href: "/brands/havells-store-damoh", label: "Havells wires and switches" },
      { href: "/shop/electrical", label: "Electrical goods" },
    ],
    faqs: [
      {
        question: "Which wire brands do you keep in Damoh?",
        answer:
          "Havells, Finolex and RR Kabel are the names customers ask for. Confirm the size in stock before you send someone across town.",
      },
      {
        question: "Do you cut wire by the metre?",
        answer:
          "Ask at the counter with the length you need. Today's rate is given at the shop, not as a fixed figure on this page.",
      },
      {
        question: "Can an electrician pick up wire and switches together?",
        answer:
          "Yes. Wires, switches, MCBs and fittings are all part of the electrical counter at Ghanta Ghar during shop hours.",
      },
    ],
  },
  {
    slug: "pumps",
    title: "Pumps in Damoh",
    titleHi: "दमोह में पंप",
    paragraphs: [
      "Pumps at Juneja Trading Corporation are the kisan and household machines sold from Ghanta Ghar: submersible pumps and motors for fields and for houses that pull water. Customers from Damoh, Hatta, Pathariya, Tendukheda, Jabera and Batiyagarh ask for them on the same counter as torches and other farm electricals. The shop does not print horsepower as a guess. Bring the depth, the old pump's plate, or the fitter's note.",
      "A pump and a jhatka machine are different tools. The jhatka machine is a fence energizer for crop protection. A pump moves water. Say which problem you have. No pump price is printed on this page. Repair of a small electrical fault is often looked at on the spot. A burnt submersible is a different job. Ask. " +
        visit,
    ],
    links: [
      { href: "/kisan-agri-damoh", label: "Kisan and agri products" },
      { href: "/hi/kisan-agri-damoh", label: "किसान उत्पाद, हिन्दी में" },
      { href: "/jhatka-machine-damoh", label: "Jhatka machine" },
    ],
    faqs: [
      {
        question: "Do you sell submersible pumps in Damoh?",
        answer:
          "Yes. Ask at Juneja Trading Corporation, Azad Market. Bring the depth or the old nameplate so the counter does not guess the stage.",
      },
      {
        question: "Is a pump the same as a jhatka machine?",
        answer:
          "No. A pump is for water. A jhatka machine is a fence energizer used to protect crops. The shop sells both, on purpose, as different products.",
      },
      {
        question: "Do you deliver pumps outside Damoh city?",
        answer:
          "Home delivery covers Damoh. Hatta, Pathariya, Tendukheda, Jabera and Batiyagarh customers should call and ask whether delivery or collection is simpler.",
      },
    ],
  },
  {
    slug: "torch",
    title: "Torches in Damoh",
    titleHi: "दमोह में टॉर्च",
    paragraphs: [
      "Torches at Juneja Trading Corporation are the rechargeable and kisan lights farmers and households use after a cut. The shop keeps a rechargeable LED searchlight with a solar panel and a side lamp, and the Globeam Noori kisan solar torch whose pack is marked desh ka number 1 kisan solar torch. Hindi names are on the product pages. Both are call-for-price items. Emergency lights sit on the next rack: the same visit often covers a torch for the field and a light for the corridor.",
      "Best kisan torch in Damoh is a question the counter answers by showing range and charging, not by a slogan alone. Long-range rechargeable LED torches are what night field work needs. A small household torch is a different piece. Celcore is a lights and torch name from Damoh and Madhya Pradesh that the shop sells when it is in stock. " +
        visit,
    ],
    links: [
      { href: "/kisan-torch-damoh", label: "Best kisan torch in Damoh" },
      { href: "/emergency-light-damoh", label: "Emergency lights" },
      { href: "/product/globeam-noori-kisan-solar-torch", label: "Globeam Noori kisan solar torch" },
      { href: "/product/rechargeable-led-searchlight-torch", label: "Rechargeable LED searchlight" },
      { href: "/brands/celcore-store-damoh", label: "Celcore lights and torches" },
    ],
    faqs: [
      {
        question: "Which kisan torch can I see in Damoh?",
        answer:
          "Ask for the Globeam Noori kisan solar torch and the rechargeable LED searchlight with solar panel and side lamp. Hindi: ग्लोबीम नूरी किसान सोलर टॉर्च. Call for today's price.",
      },
      {
        question: "Do you repair torches?",
        answer:
          "Many small torch and charger repairs are done on the spot at Ghanta Ghar. Bring the torch.",
      },
      {
        question: "Is an emergency light on the same counter?",
        answer:
          "Yes. Fans, rechargeable torches and emergency lights are kept where customers can see them. Say whether you need a carry torch or a light that stays indoors.",
      },
    ],
  },
  {
    slug: "home-decor",
    title: "Home decor lights in Damoh",
    titleHi: "दमोह में होम डेकोर लाइट",
    paragraphs: [
      "Home decor at Juneja Trading Corporation is mostly light: gel balls, jari ladi, rope light and the decorative strings people put in a shop window or a front room. Leeway glitter gel ball lights and Leeway shiny jari ladi have been in the festive stock. These are decorative, not a substitute for an emergency light or a task bulb. If the room also needs everyday LED bulbs, ask for those on the lighting category in the same visit.",
      "Damoh's best for Diwali lighting overlaps this shelf in the festival weeks. Festive lighting, jhalar, fairy lights, torches, emergency lights, emergency bulbs and LED bulbs are all reasons people come to Ghanta Ghar. A decor light that is only for a photo will disappoint you in a power cut. Buy the emergency piece separately if you need it. " +
        visit,
    ],
    links: [
      { href: "/diwali-lights-damoh", label: "Diwali lights in Damoh" },
      { href: "/shop/festive-lights", label: "Festive lights" },
      { href: "/shop/lighting", label: "Everyday lighting" },
    ],
    faqs: [
      {
        question: "Do you sell decorative lights apart from Diwali stock?",
        answer:
          "Yes. Jari ladi, gel ball lights and rope lights are part of the decor the shop keeps, with the deepest stock before Diwali. Call to see what is left.",
      },
      {
        question: "Will a decor light work in a power cut?",
        answer:
          "Only if that piece has its own battery. Most decorative strings need mains or USB power. Ask for an emergency light if the cut is the problem.",
      },
      {
        question: "Can I see the lights before buying?",
        answer:
          "Yes. Come to Shop No. 6, Azad Market, Ghanta Ghar. Photos on the site are from the shop, and the carton on the shelf is the one that matters.",
      },
    ],
  },
  {
    slug: "sound-speakers",
    title: "Speakers in Damoh",
    titleHi: "दमोह में स्पीकर",
    paragraphs: [
      "Speakers at Juneja Trading Corporation include the portable sets in new arrivals and the larger home-theatre pieces. Yoroto YO-J15 Cube Speaker is a portable Bluetooth speaker with ring light, TWS, 50W (1200W PMPO), an 8-inch woofer and a wireless mic. Price ₹1,700. SoRoo K1 Series Wireless Speaker has TWS, Bluetooth, FM, USB/TF/AUX, a rechargeable battery and deep bass. Price ₹699. MRP ₹699. Zebronics ZEB-BT2750RUF 4.1 is the home-theatre set: 70W RMS, Bluetooth, USB, FM, remote, Made in India. Call for today's price on the Zebronics.",
      "A cube speaker for a lane and a 4.1 set for a room should not be sold as if they were the same thing. Listen if the carton is open. Larger PA and DJ systems are on the sound and amplifier pages. Say if you need a mic with the speaker. " +
        visit,
    ],
    links: [
      { href: "/product/yoroto-yo-j15-cube-speaker", label: "Yoroto YO-J15, ₹1,700" },
      { href: "/product/soroo-k1-wireless-speaker", label: "SoRoo K1, ₹699" },
      { href: "/product/zebronics-zeb-bt2750ruf-home-theatre", label: "Zebronics home theatre" },
      { href: "/sound-home-theatre-damoh", label: "Home theatre shop" },
    ],
    faqs: [
      {
        question: "Which speaker prices are published?",
        answer:
          "Yoroto YO-J15 is ₹1,700. SoRoo K1 is ₹699, and the MRP is ₹699. Other speakers, including the Zebronics home theatre, are call for today's price.",
      },
      {
        question: "Does the Yoroto include a mic?",
        answer:
          "Yes. The YO-J15 is sold with a wireless mic, ring light, TWS and an 8-inch woofer.",
      },
      {
        question: "Can I compare a small speaker with a home theatre?",
        answer:
          "Yes, at the Ghanta Ghar counter. Say whether you need a portable set or a 4.1 system for a room.",
      },
    ],
  },
  {
    slug: "health-personal-care",
    title: "Health and personal care in Damoh",
    titleHi: "दमोह में हेल्थ और पर्सनल केयर",
    paragraphs: [
      "Health and personal care at Juneja Trading Corporation is a small shelf, not a pharmacy. The priced piece is the 3-in-1 Foot Massager: heat therapy, fascial release and acupoint massage. Price ₹1,000. A mini massage gun has also been in the shop stock under electricals. The shop does not give medical advice and does not claim that a massager treats an illness. It sells the machine. If you need a chemist, this is the wrong counter.",
      "Ask to see the massager working before you carry it home. Warranty and today's availability are answered at the counter. Other personal-care gadgets come and go. If it is not the foot massager, call before you travel. Heat level and whether the machine is for one person sitting on a chair are the two things to check in the shop, because a picture does not show the size of the foot plate. " +
        visit,
    ],
    links: [
      { href: "/product/foot-massager-3in1", label: "3-in-1 Foot Massager, ₹1,000" },
      { href: "/shop/electrical", label: "Other small appliances" },
    ],
    faqs: [
      {
        question: "What is the price of the foot massager?",
        answer: "The 3-in-1 Foot Massager is ₹1,000 at Juneja Trading Corporation, Damoh.",
      },
      {
        question: "Is this a medical shop?",
        answer:
          "No. The shop sells electronics and a few personal-care machines such as the foot massager. It does not dispense medicine.",
      },
      {
        question: "Can I see the massager in the shop?",
        answer: "Yes. Ask at Shop No. 6, Azad Market, Ghanta Ghar, during shop hours.",
      },
    ],
  },
  {
    slug: "home-kitchen-bottles",
    title: "Water bottles in Damoh",
    titleHi: "दमोह में पानी की बोतल",
    paragraphs: [
      "Water bottles at Juneja Trading Corporation are the two new-arrival styles with published prices. The Cactus Love Glass Water Bottle is ₹149, in assorted colours with a sleeve and a strap. The Ribbed Silicone-Sleeve Water Bottle with Bead Strap is ₹189, in pink, yellow and blue. They sit with the other small arrivals, not with the mixer grinders. A glass bottle and a sleeved bottle are different to carry. Look at both if you are buying for a school bag or a shop counter.",
      "Colours rotate. If you need a particular colour, call. The prices above are the ones the shop has published. Other bottles, if they appear later, will not be given a made-up price. The glass bottle needs a sleeve if it is going in a school bag. The ribbed bottle is the one with the bead strap. Look at the lid before you leave the counter. " +
        visit,
    ],
    links: [
      { href: "/product/cactus-love-glass-bottle", label: "Cactus Love bottle, ₹149" },
      { href: "/product/ribbed-silicone-sleeve-water-bottle", label: "Ribbed bottle, ₹189" },
      { href: "/shop/kitchen", label: "Kitchen appliances" },
    ],
    faqs: [
      {
        question: "What do the water bottles cost?",
        answer:
          "Cactus Love Glass Water Bottle is ₹149. Ribbed Silicone-Sleeve Water Bottle with Bead Strap is ₹189.",
      },
      {
        question: "Which colours are available?",
        answer:
          "Cactus Love is assorted colours with sleeve and strap. The ribbed bottle is pink, yellow and blue, subject to what is left in the shop.",
      },
      {
        question: "Are the bottles kept with the appliances?",
        answer:
          "They are new arrivals at the same Ghanta Ghar shop. Ask at the counter if you do not see them next to the kitchen machines.",
      },
    ],
  },
];

const bySlug = new Map(pages.map((page) => [page.slug, page]));

export function shopCategoryCopy(slug: string | undefined): ShopCategoryCopy | null {
  if (!slug) return null;
  return bySlug.get(slug) ?? null;
}

export const shopCategoryCopies = pages;
