export const newArrivals: Product[] = [
  {
    id: "61",
    title: "Yoroto YO-J15 Cube Speaker",
    price: 1700,
    rating: 0,
    description:
      "Yoroto YO-J15 Cube Speaker at Juneja Trading Corporation, Damoh. Portable multi-connectivity Bluetooth speaker with ring light, TWS function, 50W (1200W PMPO), 8-inch woofer, and a wireless mic included. Price ₹1,700.",
    mainImage: "products/yoroto-yo-j15-cube-speaker.webp",
    imageAlt:
      "Yoroto YO-J15 cube speaker with ring light and wireless mic at Juneja Trading Corporation, Damoh",
    slug: "yoroto-yo-j15-cube-speaker",
    manufacturer: "Yoroto",
    categoryId: "sound-speakers",
    category: { name: "sound-speakers" },
    categoryLabel: "Sound / Speakers",
    inStock: 1,
  },
  {
    id: "62",
    title: "SoRoo K1 Series Wireless Speaker",
    price: 699,
    mrp: 699,
    rating: 0,
    description:
      "SoRoo K1 Series Wireless Speaker at Juneja Trading Corporation, Damoh. TWS, Bluetooth, built-in FM radio, USB/TF (micro SD)/AUX, rechargeable battery, and dynamic deep bass. Price ₹699. MRP ₹699.",
    mainImage: "products/soroo-k1-wireless-speaker.webp",
    imageAlt:
      "SoRoo K1 wireless speaker with FM radio and deep bass at Juneja Trading Corporation, Damoh",
    slug: "soroo-k1-wireless-speaker",
    manufacturer: "SoRoo",
    categoryId: "sound-speakers",
    category: { name: "sound-speakers" },
    categoryLabel: "Sound / Speakers",
    inStock: 1,
  },
  {
    id: "63",
    title: "3-in-1 Foot Massager",
    price: 1000,
    rating: 0,
    description:
      "3-in-1 Foot Massager at Juneja Trading Corporation, Damoh. Heat therapy, fascial release, and acupoint massage. Price ₹1,000.",
    mainImage: "products/foot-massager-3in1.webp",
    imageAlt:
      "3-in-1 foot massager with heat therapy at Juneja Trading Corporation, Damoh",
    slug: "foot-massager-3in1",
    manufacturer: "",
    categoryId: "health-personal-care",
    category: { name: "health-personal-care" },
    categoryLabel: "Health & Personal Care",
    inStock: 1,
  },
  {
    id: "64",
    title: "Cactus Love Glass Water Bottle",
    price: 149,
    rating: 0,
    description:
      "Cactus Love Glass Water Bottle at Juneja Trading Corporation, Damoh. Assorted colours with sleeve and strap. Price ₹149.",
    mainImage: "products/cactus-love-glass-bottle.webp",
    imageAlt:
      "Cactus Love glass water bottle with sleeve and strap at Juneja Trading Corporation, Damoh",
    slug: "cactus-love-glass-bottle",
    manufacturer: "",
    categoryId: "home-kitchen-bottles",
    category: { name: "home-kitchen-bottles" },
    categoryLabel: "Home & Kitchen / Bottles",
    colors: "Assorted colours with sleeve and strap",
    inStock: 1,
  },
  {
    id: "65",
    title: "Ribbed Silicone-Sleeve Water Bottle with Bead Strap",
    price: 189,
    rating: 0,
    description:
      "Ribbed Silicone-Sleeve Water Bottle with Bead Strap at Juneja Trading Corporation, Damoh. Pink, yellow, and blue. Price ₹189.",
    mainImage: "products/ribbed-silicone-sleeve-water-bottle.webp",
    imageAlt:
      "Ribbed water bottle with silicone sleeve and bead strap in pink, yellow, and blue at Juneja Trading Corporation, Damoh",
    slug: "ribbed-silicone-sleeve-water-bottle",
    manufacturer: "",
    categoryId: "home-kitchen-bottles",
    category: { name: "home-kitchen-bottles" },
    categoryLabel: "Home & Kitchen / Bottles",
    colors: "Pink, yellow, blue",
    inStock: 1,
  },
];

const pricedArrivalSlugs = new Set(newArrivals.map((product) => product.slug));

export function publishedPrice(product: { slug: string; price: number }): number | null {
  if (!pricedArrivalSlugs.has(product.slug) || !(product.price > 0)) return null;
  return product.price;
}
