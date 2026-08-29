import { SectionTitle } from "@/components";
import { brand } from "@/lib/brand";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `About ${brand.name}, Damoh shop since ${brand.estYear}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-brand-paper">
      <SectionTitle title="About the shop" path="Home | About" />
      <div className="mx-auto max-w-3xl px-4 py-12 text-brand-ink sm:px-6">
        <Image src="/jtc-logo-mark.png" alt="JTC logo" width={96} height={96} className="rounded-sm" />
        <p className="mt-6 font-hindi text-2xl text-brand-copper">{brand.taglineHi}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-brand-copper">
          ESTD {brand.estYear} · {brand.city}
        </p>
        <h2 className="mt-3 font-display text-5xl max-sm:text-4xl">{brand.name}</h2>
        <p className="font-hindi mt-2 text-xl">{brand.nameHi}</p>
        <p className="font-hindi mt-1 text-lg text-brand-soot">{brand.tagline}</p>
        <p className="mt-6 text-lg leading-8 text-brand-soot">
          Juneja Trading Corporation has served Damoh since {brand.estYear}. The
          shop is on NH34 near Ghanta Ghar. Electronics and electricals: LED TV,
          fridge, washing machine, AC, sound, solar, torch, fans, lighting, and
          fittings.
        </p>
        <p className="mt-4 text-lg leading-8 text-brand-soot">
          Brands on the counter include {brand.brands.join(", ")}. Fridge,
          washing machine, LED TV and AC can be taken on 0% Bajaj Finance EMI.
        </p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="border border-brand-ink/10 bg-white p-5">
            <dt className="text-sm text-brand-copper">Since</dt>
            <dd className="mt-1 font-semibold">{brand.estYear}</dd>
          </div>
          <div className="border border-brand-ink/10 bg-white p-5">
            <dt className="text-sm text-brand-copper">Phone</dt>
            <dd className="mt-1 font-semibold">
              <a href={brand.phoneHref}>{brand.phone}</a>
              <br />
              <a href={brand.phone2Href}>{brand.phone2}</a>
            </dd>
          </div>
          <div className="border border-brand-ink/10 bg-white p-5">
            <dt className="text-sm text-brand-copper">Email</dt>
            <dd className="mt-1 font-semibold">
              <a href={brand.emailHref}>{brand.email}</a>
            </dd>
          </div>
          <div className="border border-brand-ink/10 bg-white p-5">
            <dt className="text-sm text-brand-copper">Address</dt>
            <dd className="mt-1 font-semibold">{brand.address}</dd>
            <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-brand-copper hover:underline">
              Open in Google Maps
            </a>
          </div>
        </dl>
        <Link
          href="/contact"
          className="mt-10 inline-block bg-brand-ink px-8 py-3 font-bold text-white hover:bg-brand-copper"
        >
          Contact the shop
        </Link>
      </div>
    </div>
  );
}
