import { brand } from "@/lib/brand";
import WhatsAppGroupButton from "./WhatsAppGroupButton";

const VisitBlock = () => {
  return (
    <section className="bg-brand-cream py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-4xl text-brand-ink sm:text-5xl">Visit us</h2>
        <address className="mt-4 not-italic text-lg leading-8 text-brand-soot">
          {brand.nap}
          <br />
          Phone: <a href={brand.phoneHref}>{brand.phone}</a>, <a href={brand.phone2Href}>{brand.phone2}</a>
          {" · "}
          <a href={brand.emailHref}>{brand.email}</a>
          <br />
          {brand.hoursNote} · Home delivery across Damoh
        </address>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <WhatsAppGroupButton />
          <a
            href={brand.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-brand-ink px-5 py-3 text-sm font-bold text-brand-ink"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisitBlock;
