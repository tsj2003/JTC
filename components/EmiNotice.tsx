import { brand } from "@/lib/brand";

export const EmiBadge = () => {
  return (
    <aside className="border border-brand-amber bg-brand-cream px-4 py-3">
      <p className="font-display text-2xl leading-none text-brand-ink">{brand.emiAvailable}</p>
      <p className="mt-2 text-sm text-brand-soot">{brand.emiTerms}</p>
    </aside>
  );
};

export const EmiSection = () => {
  return (
    <section className="border-y border-brand-amber bg-brand-cream" aria-labelledby="bajaj-emi-heading">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper">At the Damoh shop</p>
        <h2 id="bajaj-emi-heading" className="mt-2 font-display text-4xl text-brand-ink sm:text-5xl">
          {brand.emiAvailable}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-brand-soot">{brand.emiTerms}</p>
      </div>
    </section>
  );
};
