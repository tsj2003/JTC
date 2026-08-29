import { shopUpdates } from "@/lib/brand";
import Link from "next/link";

const ShopUpdates = () => {
  return (
    <section className="bg-brand-paper py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 className="font-display text-4xl text-brand-ink sm:text-5xl">Regular updates</h2>
        <p className="mt-2 text-brand-soot">
          Offers and stock notes from the Damoh counter. Ask in the shop for today’s pieces.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {shopUpdates.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="border border-brand-ink/15 bg-white p-5 hover:border-brand-copper"
            >
              <h3 className="text-lg font-bold text-brand-copper">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-soot">{item.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopUpdates;
