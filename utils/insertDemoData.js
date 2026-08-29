const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const CAT = {
  led: "a1111111-1111-4111-8111-111111111111",
  ceiling: "a2222222-2222-4222-8222-222222222222",
  table: "a3333333-3333-4333-8333-333333333333",
  pumps: "a4444444-4444-4444-8444-444444444444",
  iron: "a5555555-5555-4555-8555-555555555555",
  dth: "a6666666-6666-4666-8666-666666666666",
  cables: "a7777777-7777-4777-8777-777777777777",
  appliances: "a8888888-8888-4888-8888-888888888888",
};

const demoProducts = [
  {
    id: "1",
    title: "Philips LED Bulb 9W",
    price: 149,
    rating: 5,
    description: "9 watt B22 LED bulb for home and shop lighting.",
    mainImage: "product1.webp",
    slug: "philips-led-bulb-9w",
    manufacturer: "Philips",
    categoryId: CAT.led,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "2",
    title: "Surya LED Charging Bulb",
    price: 399,
    rating: 4,
    description: "Rechargeable LED emergency bulb for power cuts.",
    mainImage: "product2.webp",
    slug: "surya-led-charging-bulb",
    manufacturer: "Surya",
    categoryId: CAT.led,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "3",
    title: "Orient Electrical Ceiling Fan",
    price: 2499,
    rating: 5,
    description: "Orient ceiling fan for rooms and shops in Damoh.",
    mainImage: "product4.webp",
    slug: "orient-electrical-ceiling-fan",
    manufacturer: "Orient",
    categoryId: CAT.ceiling,
    inStock: 1,
    merchantId: "1",
  },
  {
    id: "4",
    title: "Indo Submersible Pump",
    price: 5499,
    rating: 5,
    description: "Indo submersible pumpset for borewells and farm water.",
    mainImage: "product7.webp",
    slug: "indo-submersible-pump",
    manufacturer: "Indo",
    categoryId: CAT.pumps,
    inStock: 1,
    merchantId: "1",
  },
];

const demoCategories = [
  { id: CAT.led, name: "led-bulbs" },
  { id: CAT.ceiling, name: "ceiling-fans" },
  { id: CAT.table, name: "table-fans" },
  { id: CAT.pumps, name: "pumps" },
  { id: CAT.iron, name: "iron-press" },
  { id: CAT.dth, name: "dth" },
  { id: CAT.cables, name: "cables" },
  { id: CAT.appliances, name: "home-appliances" },
];

async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.create({ data: category });
  }
  console.log("Juneja Trading categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.create({ data: product });
  }
  console.log("Juneja Trading products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
