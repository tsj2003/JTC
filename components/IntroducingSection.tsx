import { brand } from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <section className="bg-brand-cream py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-y-4 px-6 text-center">
        <Image src="/jtc-logo-mark.png" alt="JTC" width={88} height={88} className="rounded-sm" />
        <p className="font-hindi text-2xl text-brand-copper sm:text-3xl">{brand.taglineHi}</p>
        <h2 className="font-display text-6xl font-semibold text-brand-ink max-md:text-5xl max-[480px]:text-4xl">
          {brand.shortName} <span className="text-brand-copper">DAMOH</span>
        </h2>
        <p className="font-hindi text-lg text-brand-soot sm:text-xl">
          {brand.nameHi} — {brand.tagline}
        </p>
        <p className="max-w-2xl text-lg font-semibold text-brand-soot max-md:text-base">
          {brand.finance}. Samsung, LG, Haier and other big brands. Walk in at{" "}
          {brand.address}, or call {brand.phone}.
        </p>
        <div className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <Link
            href="/shop"
            className="flex-1 bg-brand-ink px-8 py-3 text-center text-lg font-bold text-white hover:bg-brand-copper"
          >
            BROWSE STOCK
          </Link>
          <a
            href={brand.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 border border-brand-ink px-8 py-3 text-center text-lg font-bold text-brand-ink hover:bg-brand-ink hover:text-white"
          >
            MAP
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;
