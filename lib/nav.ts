export const categoryLinks = [
  { name: "Home theatre", href: "/sound-home-theatre-damoh" },
  { name: "DJ sound", href: "/dj-sound-system-damoh" },
  { name: "Amplifiers", href: "/amplifier-damoh" },
  { name: "LED TV", href: "/led-tv-damoh" },
  { name: "TV on EMI", href: "/tv-on-emi-damoh" },
  { name: "Appliances", href: "/appliances-damoh" },
  { name: "Ceiling fans", href: "/ceiling-fans-damoh" },
  { name: "Solar panels", href: "/solar-damoh" },
  { name: "Inverter & battery", href: "/inverter-battery-damoh" },
  { name: "LED bulb wholesale", href: "/led-bulb-wholesale-damoh" },
  { name: "Emergency lights", href: "/emergency-light-damoh" },
  { name: "Diwali lights", href: "/diwali-lights-damoh" },
  { name: "Kisan & agri", href: "/kisan-agri-damoh" },
  { name: "Electricals", href: "/electricals-damoh" },
  { name: "Repair", href: "/repair-damoh" },
] as const;

export const serviceLinks = [
  ...categoryLinks,
  { name: "Catalogue", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;
