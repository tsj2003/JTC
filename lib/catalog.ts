import { newArrivals } from "@/lib/new-arrivals";
import { stockProducts } from "@/lib/stock-products";

export const localCatalog: Product[] = [
  ...newArrivals,
  {
    id: "1",
    title: "Samsung LED TV",
    price: 24990,
    rating: 5,
    description: "Samsung LED TV. 0% Bajaj Finance EMI. Ask the Damoh shop for current sizes.",
    mainImage: "products/led-tv.jpg",
    slug: "samsung-led-tv",
    manufacturer: "Samsung",
    categoryId: "led-tv",
    category: { name: "led-tv" },
    inStock: 1,
    featured: true,
  },
  {
    id: "2",
    title: "LG Refrigerator",
    price: 18990,
    rating: 5,
    description: "LG fridge with 0% Bajaj Finance EMI. Confirm litres at Juneja Trading Corporation.",
    mainImage: "products/fridge.jpg",
    slug: "lg-refrigerator",
    manufacturer: "LG",
    categoryId: "fridge",
    category: { name: "fridge" },
    inStock: 1,
    featured: true,
  },
  {
    id: "3",
    title: "Haier Washing Machine",
    price: 16490,
    rating: 4,
    description: "Haier washing machine. 0% EMI through Bajaj Finance.",
    mainImage: "products/washer.jpg",
    slug: "haier-washing-machine",
    manufacturer: "Haier",
    categoryId: "washing-machine",
    category: { name: "washing-machine" },
    inStock: 1,
  },
  {
    id: "4",
    title: "Bajaj Mixer Grinder",
    price: 2499,
    rating: 5,
    description: "Mixer grinder for daily kitchen work.",
    mainImage: "products/mixer.jpg",
    slug: "bajaj-mixer-grinder",
    manufacturer: "Bajaj",
    categoryId: "mixer-juicer",
    category: { name: "mixer-juicer" },
    inStock: 1,
  },
  {
    id: "5",
    title: "Juicer",
    price: 1899,
    rating: 4,
    description: "Home juicer. Ask the counter for wattage and jar size.",
    mainImage: "products/juicer.jpg",
    slug: "home-juicer",
    manufacturer: "Bajaj",
    categoryId: "mixer-juicer",
    category: { name: "mixer-juicer" },
    inStock: 1,
  },
  {
    id: "6",
    title: "Orient Ceiling Fan",
    price: 2499,
    rating: 5,
    description: "Orient ceiling fan for rooms and shops.",
    mainImage: "products/ceiling-fan.jpg",
    slug: "orient-ceiling-fan",
    manufacturer: "Orient",
    categoryId: "ceiling-fans",
    category: { name: "ceiling-fans" },
    inStock: 1,
  },
  {
    id: "7",
    title: "Charging Table Fan",
    price: 1899,
    rating: 4,
    description: "Table and charging fans for power cuts.",
    mainImage: "products/table-fan.jpg",
    slug: "charging-table-fan",
    manufacturer: "Saisun",
    categoryId: "table-fans",
    category: { name: "table-fans" },
    inStock: 1,
  },
  {
    id: "8",
    title: "Rechargeable Torch",
    price: 349,
    rating: 4,
    description: "Rechargeable torch and emergency lights.",
    mainImage: "products/torch.jpg",
    slug: "rechargeable-torch",
    manufacturer: "Surya",
    categoryId: "torch",
    category: { name: "torch" },
    inStock: 1,
  },
  {
    id: "9",
    title: "Philips LED Lighting",
    price: 799,
    rating: 5,
    description: "LED bulbs, battens, and room lighting.",
    mainImage: "products/lighting.jpg",
    slug: "led-home-lighting",
    manufacturer: "Philips",
    categoryId: "lighting",
    category: { name: "lighting" },
    inStock: 1,
  },
  {
    id: "10",
    title: "Ahuja PA Sound System",
    price: 8999,
    rating: 4,
    description: "Speakers and PA system for shops, mandirs, and functions.",
    mainImage: "products/speaker.jpg",
    slug: "pa-sound-system",
    manufacturer: "Ahuja",
    categoryId: "sound-pa",
    category: { name: "sound-pa" },
    inStock: 1,
  },
  {
    id: "11",
    title: "Home Decor Lights",
    price: 1299,
    rating: 4,
    description: "Decorative lamps and home decor lighting.",
    mainImage: "products/decor.jpg",
    slug: "home-decor-lights",
    manufacturer: "Philips",
    categoryId: "home-decor",
    category: { name: "home-decor" },
    inStock: 1,
  },
  {
    id: "12",
    title: "Submersible Pump",
    price: 5499,
    rating: 5,
    description: "Submersible pumpset. Confirm HP at the shop.",
    mainImage: "products/pump.jpg",
    slug: "indo-submersible-pump",
    manufacturer: "Indo",
    categoryId: "pumps",
    category: { name: "pumps" },
    inStock: 1,
  },
  {
    id: "13",
    title: "Haier Air Conditioner",
    price: 32990,
    rating: 5,
    description: "Haier AC. 0% Bajaj Finance EMI. Ask for tonnage at the counter.",
    mainImage: "products/fridge.jpg",
    slug: "haier-air-conditioner",
    manufacturer: "Haier",
    categoryId: "air-conditioner",
    category: { name: "air-conditioner" },
    inStock: 1,
    featured: true,
  },
  {
    id: "14",
    title: "Luminous Solar Solution",
    price: 14990,
    rating: 4,
    description: "Solar panel and battery solutions. Confirm kit at Juneja Trading Corporation.",
    mainImage: "products/lighting.jpg",
    slug: "luminous-solar-solution",
    manufacturer: "Luminous",
    categoryId: "solar",
    category: { name: "solar" },
    inStock: 1,
  },
  ...stockProducts,
];

export function featuredCatalog() {
  const featured = localCatalog.filter((product) => product.featured);
  return featured.length ? featured : localCatalog.slice(0, 12);
}

export function searchCatalog(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return localCatalog;
  return localCatalog.filter((product) => {
    const haystack = [
      product.title,
      product.manufacturer,
      product.description,
      product.category?.name,
      product.slug,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function catalogByCategory(slug?: string | string[]) {
  const name = Array.isArray(slug) ? slug[0] : slug;
  if (!name) return localCatalog;
  return localCatalog.filter((product) => product.category?.name === name);
}

export function getCatalogBySlug(slug: string) {
  return localCatalog.find((product) => product.slug === slug) || null;
}
