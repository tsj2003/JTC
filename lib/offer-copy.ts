import { brand, formatPrice } from "@/lib/brand";
import type { LandingFaq } from "@/lib/landings";
import { publishedPrice } from "@/lib/new-arrivals";

export const enOfferBadge =
  "Wholesale Rate • Lowest Price in Damoh • Genuine Best Quality • Brand Warranty";

export const hiOfferBadge = "थोक रेट • दमोह में सबसे सस्ता • बेस्ट क्वालिटी";

export function offerMeta(description: string) {
  const text = description.trim();
  const extra: string[] = [];
  if (!/wholesale price/i.test(text)) extra.push("Wholesale price.");
  if (!/best price in Damoh/i.test(text)) extra.push("Best price in Damoh.");
  return extra.length ? `${text} ${extra.join(" ")}` : text;
}

export function withOfferMeta<T extends { description: string }>(page: T): T {
  return { ...page, description: offerMeta(page.description) };
}

export function productOfferSentence(title: string) {
  return `Best quality ${title} at wholesale rate / sasta price in Damoh – Juneja Trading Corporation, Ghanta Ghar.`;
}

export function categoryOfferLine(lang: "en" | "hi") {
  if (lang === "hi") {
    return "थोक रेट जुनेजा ट्रेडिंग कारपोरेशन, घंटा घर पर पूछें। रेट लिस्ट इस पेज पर नहीं छपी।";
  }
  return "Ask Juneja Trading Corporation, Ghanta Ghar, for a wholesale rate on this category. The rate list is not printed on this page.";
}

export function productSastaFaq(product: {
  title: string;
  slug: string;
  price: number;
  mrp?: number;
}): LandingFaq {
  const price = publishedPrice(product);
  const priceLine =
    price != null
      ? ` The printed price is ${formatPrice(price)}${product.mrp ? ` (MRP ${formatPrice(product.mrp)})` : ""}.`
      : " Call for today's price.";
  return {
    question: `${product.title} Damoh mein sabse sasta kahan milega?`,
    answer: `${product.title} is at ${brand.name} (JTC), Ghanta Ghar, Azad Market, Damoh. Call 99267 59557 or 83191 71236.${priceLine} The shop is open from 10 AM.`,
  };
}
