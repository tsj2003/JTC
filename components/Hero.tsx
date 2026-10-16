import { brand } from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const featured = [
  { src: "/products/samsung-led-tv-damoh.jpg", label: "LED TV", href: "/shop/led-tv" },
  { src: "/products/refrigerator-damoh.jpg", label: "Fridge", href: "/shop/fridge" },
  { src: "/products/haier-washing-machine-damoh.jpg", label: "Washing machine", href: "/shop/washing-machine" },
  { src: "/products/ahuja-pa-sound-system-damoh.jpg", label: "Sound", href: "/shop/sound-pa" },
];

const Hero = () => {
  return (
    <section className="w-full bg-brand-ink">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-10 px-4 py-10 sm:px-8 lg:grid-cols-2 lg:py-16">
        <div className="flex flex-col gap-4 text-brand-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-amber">
            ESTD {brand.estYear} · {brand.city}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] max-md:text-4xl max-sm:text-3xl">
            JUNEJA TRADING{" "}
            <br />
            CORPORATION
          </h1>
          <p className="text-lg font-semibold uppercase tracking-wide text-brand-amber sm:text-xl">
            Electronics Retail & Wholesale, Damoh
          </p>
          <p className="font-hindi text-xl text-brand-cream sm:text-2xl">{brand.nameHi}</p>
          <p className="font-hindi text-lg text-brand-cream/90">थोक विक्रेता · thok vikreta</p>
          <p className="font-hindi text-lg text-brand-amber sm:text-xl">
            {brand.financeHi}
          </p>
          <p className="font-display text-7xl font-semibold leading-[0.9] text-brand-amber max-md:text-6xl max-sm:text-5xl">
            0%
          </p>
          <p className="font-display text-4xl font-semibold leading-[0.95] max-sm:text-3xl">
            BAJAJ FINANCE · EASY EMI
          </p>
          <p className="font-hindi text-lg text-brand-cream/90">{brand.tagline}</p>
          <p className="max-w-xl text-base text-brand-cream/80 sm:text-lg">
            Retail & Wholesale. One of the biggest wholesalers in Damoh.
            Samsung, LG, Haier and more on the counter. Fridge, washing machine,
            LED TV and AC on 0% Bajaj Finance. Shopkeepers and electricians can
            call or WhatsApp for wholesale rates. Walk in at Shop No. 6, Azad
            Market, Ghanta Ghar, Madiya Pangarha, Damoh, Madhya Pradesh 470661.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/shop"
              className="min-h-12 bg-brand-copper px-8 py-3 text-center font-bold text-white hover:bg-brand-amber hover:text-brand-ink"
            >
              SHOP NOW
            </Link>
            <Link
              href="/wholesale-electronics-damoh"
              className="min-h-12 bg-brand-amber px-8 py-3 text-center font-bold text-brand-ink hover:bg-brand-cream"
            >
              WHOLESALE RATES
            </Link>
            <a
              href={brand.phoneHref}
              className="min-h-12 border border-brand-cream px-8 py-3 text-center font-bold text-brand-cream hover:bg-brand-cream hover:text-brand-ink"
            >
              CALL {brand.phoneRaw}
            </a>
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="min-h-12 border border-brand-amber px-8 py-3 text-center font-bold text-brand-amber hover:bg-brand-amber hover:text-brand-ink"
            >
              OPEN MAP
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featured.map((shot) => (
            <Link
              key={shot.label}
              href={shot.href}
              className="relative aspect-[4/3] overflow-hidden border border-brand-copper/40 bg-brand-soot"
            >
              <Image
                src={shot.src}
                alt={`${shot.label} at Juneja Trading Corporation, Ghanta Ghar, Damoh`}
                fill
                className="object-cover"
                sizes="280px"
              />
              <span className="absolute bottom-2 left-2 bg-brand-ink/85 px-2 py-1 text-xs text-brand-cream">
                {shot.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
