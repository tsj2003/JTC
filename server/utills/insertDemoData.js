const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoMerchant = [
  {
    id: "1",
    name: "Juneja Trading Corporation",
    description:
      "Serving Damoh since 1960. Fans, lighting, sound and PA, home appliances, electrical goods. Bajaj Finance EMI.",
    phone: "9926759557",
    address: "NH34, near Ghanta Ghar, Damoh, Madhya Pradesh 470600",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const CAT = {
  ceiling: "a2222222-2222-4222-8222-222222222222",
  fans: "a3333333-3333-4333-8333-333333333333",
  torch: "a9999999-9999-4999-8999-999999999999",
  lighting: "a1111111-1111-4111-8111-111111111111",
  pa: "b1111111-1111-4111-8111-111111111111",
  tv: "b2222222-2222-4222-8222-222222222222",
  fridge: "b3333333-3333-4333-8333-333333333333",
  washer: "b4444444-4444-4444-8444-444444444444",
  mixer: "b5555555-5555-4555-8555-555555555555",
  decor: "b6666666-6666-4666-8666-666666666666",
  electrical: "b7777777-7777-4777-8777-777777777777",
  pumps: "a4444444-4444-4444-8444-444444444444",
  iron: "a5555555-5555-4555-8555-555555555555",
  dth: "a6666666-6666-4666-8666-666666666666",
};

const demoCategories = [
  { id: CAT.ceiling, name: "ceiling-fans" },
  { id: CAT.fans, name: "table-fans" },
  { id: CAT.torch, name: "torch" },
  { id: CAT.lighting, name: "lighting" },
  { id: CAT.pa, name: "sound-pa" },
  { id: CAT.tv, name: "led-tv" },
  { id: CAT.fridge, name: "fridge" },
  { id: CAT.washer, name: "washing-machine" },
  { id: CAT.mixer, name: "mixer-juicer" },
  { id: CAT.decor, name: "home-decor" },
  { id: CAT.electrical, name: "electrical" },
  { id: CAT.pumps, name: "pumps" },
  { id: CAT.iron, name: "iron-press" },
  { id: CAT.dth, name: "dth" },
];

const demoProducts = [
  {
    id: "1",
    title: "Samsung LED TV",
    price: 24990,
    rating: 5,
    description: "LED TV for Damoh homes. No-cost EMI on Bajaj Finance. Ask the shop for current sizes.",
    mainImage: "products/led-tv.jpg",
    slug: "samsung-led-tv",
    manufacturer: "Samsung",
    categoryId: CAT.tv,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "2",
    title: "LG Refrigerator",
    price: 18990,
    rating: 5,
    description: "LG fridge with Bajaj Finance no-cost EMI. Confirm litres and colour at the Damoh shop.",
    mainImage: "products/fridge.jpg",
    slug: "lg-refrigerator",
    manufacturer: "LG",
    categoryId: CAT.fridge,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "3",
    title: "Haier Washing Machine",
    price: 16490,
    rating: 4,
    description: "Haier washing machine. No-cost EMI through Bajaj Finance.",
    mainImage: "products/washer.jpg",
    slug: "haier-washing-machine",
    manufacturer: "Haier",
    categoryId: CAT.washer,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "4",
    title: "Bajaj Mixer Grinder",
    price: 2499,
    rating: 5,
    description: "Mixer grinder for daily kitchen work. Available at Juneja Trading Corporation.",
    mainImage: "products/mixer.jpg",
    slug: "bajaj-mixer-grinder",
    manufacturer: "Bajaj",
    categoryId: CAT.mixer,
    inStock: 1,
    merchantId: "1",
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
    categoryId: CAT.mixer,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "6",
    title: "Orient Ceiling Fan",
    price: 2499,
    rating: 5,
    description: "Orient ceiling fan for rooms and shops. All fan sizes available.",
    mainImage: "products/fan.jpg",
    slug: "orient-ceiling-fan",
    manufacturer: "Orient",
    categoryId: CAT.ceiling,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "7",
    title: "Charging Table Fan",
    price: 1899,
    rating: 4,
    description: "Table and charging fans for power cuts. Pedestal and exhaust fans also stocked.",
    mainImage: "products/fan.jpg",
    slug: "charging-table-fan",
    manufacturer: "Saisun",
    categoryId: CAT.fans,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "8",
    title: "Rechargeable Torch",
    price: 349,
    rating: 4,
    description: "Rechargeable torch and emergency lights for Damoh homes.",
    mainImage: "products/torch.jpg",
    slug: "rechargeable-torch",
    manufacturer: "Surya",
    categoryId: CAT.torch,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "9",
    title: "LED Home Lighting",
    price: 799,
    rating: 5,
    description: "LED bulbs, battens, and decorative lighting for every room.",
    mainImage: "products/lighting.jpg",
    slug: "led-home-lighting",
    manufacturer: "Philips",
    categoryId: CAT.lighting,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "10",
    title: "PA Sound System",
    price: 8999,
    rating: 4,
    description: "Speakers and PA system for shops, mandirs, and functions.",
    mainImage: "products/speaker.jpg",
    slug: "pa-sound-system",
    manufacturer: "Sony",
    categoryId: CAT.pa,
    inStock: 1,
    merchantId: "1",
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
    categoryId: CAT.decor,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "12",
    title: "Indo Submersible Pump",
    price: 5499,
    rating: 5,
    description: "Submersible pumpset. Confirm HP and head at the shop.",
    mainImage: "products/fan.jpg",
    slug: "indo-submersible-pump",
    manufacturer: "Indo",
    categoryId: CAT.pumps,
    inStock: 1,
    merchantId: "1",
  },
];

async function insertDemoData() {
  for (const merchant of demoMerchant) {
    await prisma.merchant.create({ data: merchant });
  }
  for (const category of demoCategories) {
    await prisma.category.create({ data: category });
  }
  for (const product of demoProducts) {
    await prisma.product.create({ data: product });
  }
  console.log("Juneja Trading catalog inserted.");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
