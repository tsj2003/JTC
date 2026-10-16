import { brandLinks } from "@/lib/nav";
import Link from "next/link";

const BrandsWeSell = () => {
  return (
    <section className="bg-brand-paper" aria-labelledby="brands-we-sell">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-8">
        <h2 id="brands-we-sell" className="font-display text-4xl text-brand-ink">
          Brands we sell
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-brand-soot">
          Text links to the brand counters at Juneja Trading Corporation, Ghanta Ghar, Damoh. We sell genuine products with brand warranty.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {brandLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center border border-brand-ink bg-white px-4 text-sm font-bold text-brand-ink hover:bg-brand-ink hover:text-brand-cream"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandsWeSell;
