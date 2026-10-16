import { categoryLinks } from "@/lib/nav";
import Link from "next/link";

const ServiceLinks = () => {
  return (
    <section className="bg-brand-paper py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 className="font-display text-4xl text-brand-ink sm:text-5xl">Find it at the shop</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categoryLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block border border-brand-ink/15 bg-white px-4 py-4 font-semibold text-brand-ink hover:border-brand-copper"
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

export default ServiceLinks;
