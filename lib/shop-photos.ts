export type ShopPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  altHi: string;
  caption: string;
};

export const shopTvWall: ShopPhoto = {
  src: "/shop/led-tv-wall-solar-panel-damoh.webp",
  width: 1600,
  height: 900,
  alt: "LED TV wall and a solar panel inside Juneja Trading Corporation, Ghanta Ghar, Damoh",
  altHi: "दमोह के घंटा घर पर जुनेजा ट्रेडिंग कारपोरेशन की एलईडी टीवी दीवार और सोलर पैनल",
  caption: "LED TV wall and a solar panel",
};

export const shopLedInterior: ShopPhoto = {
  src: "/shop/led-bulb-shelves-bajaj-emi-shop-damoh.webp",
  width: 900,
  height: 1600,
  alt: "LED bulb shelves, a founder portrait, and a Bajaj Finserv 0% EMI board inside Juneja Trading Corporation, Ghanta Ghar, Damoh",
  altHi: "दमोह के घंटा घर पर जुनेजा ट्रेडिंग कारपोरेशन: एलईडी बल्ब की अलमारियाँ, संस्थापक का चित्र और बजाज फिनसर्व 0% ईएमआई बोर्ड",
  caption: "LED bulb shelves, founder portrait, and Bajaj Finserv 0% EMI board",
};

export const shopFansTorches: ShopPhoto = {
  src: "/shop/fans-kisan-torch-emergency-lights-damoh.webp",
  width: 1600,
  height: 900,
  alt: "Ceiling fans, rechargeable kisan torches, and emergency lights at Juneja Trading Corporation, Ghanta Ghar, Damoh",
  altHi: "दमोह के घंटा घर पर जुनेजा ट्रेडिंग कारपोरेशन के सीलिंग फैन, किसान टॉर्च और इमरजेंसी लाइट",
  caption: "Fans, rechargeable torches, and emergency lights",
};

export const insideShopPhotos = [shopTvWall, shopLedInterior, shopFansTorches];

const photoBySlug: Record<string, ShopPhoto> = {
  "led-tv-damoh": shopTvWall,
  "tv-on-emi-damoh": shopTvWall,
  "led-bulb-wholesale-damoh": shopLedInterior,
  "ceiling-fans-damoh": shopFansTorches,
  "kisan-torch-damoh": shopFansTorches,
  "emergency-light-damoh": shopFansTorches,
  "torch-repair-damoh": shopFansTorches,
};

export function withShopImage<T extends { slug: string }>(
  page: T,
  lang: "en" | "hi",
): T & { image?: { src: string; width: number; height: number; alt: string } } {
  const photo = photoBySlug[page.slug];
  if (!photo) return page;
  return {
    ...page,
    image: {
      src: photo.src,
      width: photo.width,
      height: photo.height,
      alt: lang === "hi" ? photo.altHi : photo.alt,
    },
  };
}
