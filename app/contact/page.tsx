import { SectionTitle } from "@/components";
import { brand } from "@/lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit or call ${brand.name} in Damoh. ${brand.phone}`,
};

export default function ContactPage() {
  return (
    <div className="bg-brand-paper">
      <SectionTitle title="Contact" path="Home | Contact" />
      <div className="mx-auto max-w-4xl px-4 py-12 text-brand-ink sm:px-6">
        <p className="font-hindi text-2xl text-brand-copper">
          {brand.nameHi} · {brand.tagline}
        </p>
        <h2 className="mt-2 font-display text-5xl max-sm:text-4xl">Come to the Damoh shop</h2>
        <p className="mt-4 text-lg text-brand-soot">
          Walk in on NH34 near Ghanta Ghar, or call before you travel for a
          specific TV, fridge, AC, fan, or PA set.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 border border-brand-ink/10 bg-white p-6 sm:p-8">
            <p>
              <span className="block text-sm uppercase tracking-widest text-brand-copper">
                Phone
              </span>
              <a className="block text-2xl font-semibold hover:text-brand-copper" href={brand.phoneHref}>
                {brand.phone}
              </a>
              <a className="block text-2xl font-semibold hover:text-brand-copper" href={brand.phone2Href}>
                {brand.phone2}
              </a>
            </p>
            <p>
              <span className="block text-sm uppercase tracking-widest text-brand-copper">
                Email
              </span>
              <a className="text-lg font-semibold hover:text-brand-copper" href={brand.emailHref}>
                {brand.email}
              </a>
            </p>
            <p>
              <span className="block text-sm uppercase tracking-widest text-brand-copper">
                Address
              </span>
              <span className="text-xl font-semibold">{brand.address}</span>
            </p>
            <p>
              <span className="block text-sm uppercase tracking-widest text-brand-copper">
                Hours
              </span>
              <span className="text-xl font-semibold">{brand.hours}</span>
            </p>
            <a
              className="inline-flex min-h-12 items-center bg-brand-copper px-6 py-3 font-bold text-white hover:bg-brand-ink"
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="Juneja Trading Corporation on Google Maps"
            src={brand.mapsEmbed}
            className="h-80 w-full border border-brand-ink/10 bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
