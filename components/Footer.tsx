import { navigation } from "@/lib/utils";
import { serviceLinks } from "@/lib/nav";
import { brand } from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReviewButton from "./ReviewButton";
import WhatsAppGroupButton from "./WhatsAppGroupButton";

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-screen-2xl px-4 pb-10 pt-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Image
              src={brand.logo}
              alt={brand.logoAlt}
              width={88}
              height={88}
              className="rounded-sm"
            />
            <p className="mt-4 font-hindi text-xl text-brand-amber">{brand.nameHi}</p>
            <p className="mt-1 font-hindi text-brand-cream/90">{brand.slogan}</p>
            <p className="mt-1 font-hindi text-brand-cream/90">{brand.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-brand-cream/80">
              {brand.description}
            </p>
            <p className="mt-4 text-sm text-brand-amber">
              <a href={brand.phoneHref}>{brand.phone}</a>
              {" · "}
              <a href={brand.phone2Href}>{brand.phone2}</a>
            </p>
            <p className="mt-1 text-sm">
              <a href={brand.emailHref} className="hover:text-brand-amber">
                {brand.email}
              </a>
            </p>
            <p className="mt-1 text-sm">{brand.nap}</p>
            <p className="mt-1 text-sm">{brand.hours}</p>
            <div className="mt-4 flex flex-col items-start gap-3">
              <WhatsAppGroupButton />
              <ReviewButton variant="dark" />
            </div>
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-semibold text-brand-amber hover:underline"
            >
              Open shop on Google Maps
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-display text-lg tracking-wide text-brand-amber">Shop</h3>
              <ul className="mt-4 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm hover:text-brand-amber">
                      {item.name}
                    </Link>
                  </li>
                ))}
                {navigation.sale.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-brand-amber">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg tracking-wide text-brand-amber">Visit</h3>
              <ul className="mt-4 space-y-3">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-brand-amber">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="text-sm hover:text-brand-amber">
                    Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-brand-cream/60">
          © {new Date().getFullYear()} {brand.name}, {brand.city}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
