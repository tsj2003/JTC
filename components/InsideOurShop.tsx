import Image from "next/image";
import { insideShopPhotos } from "@/lib/shop-photos";

const InsideOurShop = () => {
  return (
    <section className="border-t-4 border-brand-ink bg-brand-paper py-12" aria-labelledby="inside-our-shop">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 id="inside-our-shop" className="font-display text-4xl text-brand-ink sm:text-5xl">
          Inside our shop
        </h2>
        <p className="mt-2 max-w-2xl text-brand-soot">
          Photographs from Juneja Trading Corporation, Ghanta Ghar, Damoh.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {insideShopPhotos.map((photo) => (
            <li key={photo.src} className="border border-brand-ink/15 bg-white p-3">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="mx-auto h-auto max-h-[28rem] w-full object-contain"
              />
              <p className="mt-3 text-sm text-brand-ink">{photo.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InsideOurShop;
