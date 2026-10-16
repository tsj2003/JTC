export type ShopPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  altHi: string;
  caption: string;
};

export const shopTvWall: ShopPhoto = {
  src: "/shop/shop-tv-wall-damoh.webp",
  width: 1600,
  height: 900,
  alt: "LED TV wall and a solar panel inside Juneja Trading Corporation, Damoh",
  altHi: "दमोह में जुनेजा ट्रेडिंग कारपोरेशन की एलईडी टीवी दीवार और एक सोलर पैनल",
  caption: "LED TV wall and a solar panel",
};

export const shopLedInterior: ShopPhoto = {
  src: "/shop/shop-interior-led-bulbs-damoh.webp",
  width: 900,
  height: 1600,
  alt: "Shop interior with LED bulb shelves, a founder portrait, and a Bajaj Finserv 0% EMI board at Juneja Trading Corporation, Damoh",
  altHi: "दमोह में जुनेजा ट्रेडिंग कारपोरेशन की दुकान: एलईडी बल्ब की अलमारियाँ, संस्थापक का चित्र और बजाज फिनसर्व 0% ईएमआई बोर्ड",
  caption: "LED bulb shelves, founder portrait, and Bajaj Finserv 0% EMI board",
};

export const shopFansTorches: ShopPhoto = {
  src: "/shop/shop-fans-torches-emergency-lights-damoh.webp",
  width: 1600,
  height: 900,
  alt: "Fans, rechargeable torches, and emergency lights at Juneja Trading Corporation, Damoh",
  altHi: "दमोह में जुनेजा ट्रेडिंग कारपोरेशन पर पंखे, रिचार्जेबल टॉर्च और इमरजेंसी लाइट",
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
