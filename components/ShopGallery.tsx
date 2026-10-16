import Image from "next/image";
import Link from "next/link";
import { realGallery } from "@/lib/media";

const ShopGallery = () => {
  return (
    <section className="border-t-4 border-brand-ink bg-white py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 className="font-display text-4xl text-brand-ink sm:text-5xl">Real stock photos</h2>
        <p className="mt-2 max-w-2xl text-brand-soot">
          Photos from the Damoh shop. Tap any picture to open the product. Confirm today’s price at the counter.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {realGallery.map((item) => (
            <Link
              key={item.src}
              href={item.href}
              className="group relative aspect-square overflow-hidden border border-brand-ink/15 bg-brand-cream"
            >
              <Image
                src={item.src}
                alt={`${item.title} at Juneja Trading Corporation, Ghanta Ghar, Damoh`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover transition duration-200 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-brand-ink/75 px-2 py-1 text-xs text-white">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
