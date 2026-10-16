import { brand } from "@/lib/brand";
import Link from "next/link";

const items = [
  "0% BAJAJ FINANCE",
  brand.financeHi,
  brand.giftOffer,
  "Samsung · LG · Haier",
  `Call ${brand.phone} · ${brand.phone2}`,
];

const OfferTicker = () => {
  const line = items.join("   ·   ");
  return (
    <div className="overflow-hidden border-y border-brand-ink bg-brand-copper text-white">
      <Link
        href="/shop"
        className="flex whitespace-nowrap py-2.5 text-sm font-semibold tracking-wide motion-safe:animate-marquee"
      >
        <span className="px-8">{line}</span>
        <span className="px-8" aria-hidden="true">
          {line}
        </span>
      </Link>
    </div>
  );
};

export default OfferTicker;
