import { brand } from "@/lib/brand";

const BrandMarquee = () => {
  const brands = [...brand.brands, ...brand.brands];
  return (
    <section className="overflow-hidden border-y border-brand-ink/10 bg-brand-paper py-8">
      <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.3em] text-brand-copper">
        Samsung · LG · Haier · and all counter brands
      </p>
      <div className="flex w-max motion-safe:animate-marquee">
        {brands.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="mx-2 inline-flex min-w-[120px] items-center justify-center border border-brand-ink/15 bg-white px-5 py-2 font-display text-xl tracking-wide text-brand-ink"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;
