# Juneja Trading Corporation

Online shop for **Juneja Trading Corporation**, an electrical retailer in Damoh, Madhya Pradesh. Built from the open-source Next.js + Node.js electronics store (Singitronic) and rebranded for this shop.

The storefront sells LED bulbs, ceiling fans, table fans, iron press, DTH set-top boxes, copper cables, and submersible pumps. Prices are in INR. Delivery inside Damoh is free. GST is calculated at 18%.

## Run locally

You need Node.js, npm, and MySQL.

1. Create a `.env` file in the project root:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NODE_ENV=development
DATABASE_URL="mysql://username:password@localhost:3306/juneja_trading?sslmode=disabled"
NEXTAUTH_SECRET=change-this-to-a-long-random-string
NEXTAUTH_URL=http://localhost:3000
```

2. Create the same `DATABASE_URL` in `server/.env`.

3. Install and start:

```
npm install
cd server
npm install
npx prisma migrate dev
cd utills
node insertDemoData.js
cd ..
node app.js
```

4. In a second terminal, from the project root:

```
npm run dev
```

Open http://localhost:3000

Shop phone: +91 99267 59557 · Damoh, Madhya Pradesh

Original template: [Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS)
