import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { ceilingFansHeading, festiveHeading, festiveItemsHeading } from "@/lib/copy";

export const SITE_URL = "https://steady-pika-d49d5d.netlify.app";

export const homeTitle = `${festiveHeading} | ${festiveItemsHeading} | ${ceilingFansHeading} | Electronics Shop in Damoh since 1960 | Juneja Trading Corporation (JTC)`;

export const homeDescription = `${festiveHeading}. ${festiveItemsHeading}. ${ceilingFansHeading}. Juneja Trading Corporation, Ghanta Ghar, Damoh: LED TVs, fridges, washing machines, home theatre and PA sound, solar, kisan pumps, electricals, Diwali lights and on-the-spot repair. ${brand.nap}. ${brand.emiAvailable}. ${brand.emiTerms}. Open daily 10:00–21:30.`;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/jtc-logo-wordmark.png",
          alt: `${brand.name} logo`,
        },
      ],
    },
  };
}

export const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ElectronicsStore", "LocalBusiness"],
  "@id": `${SITE_URL}/#store`,
  name: brand.name,
  alternateName: [brand.shortName, brand.nameHi],
  slogan: brand.slogan,
  description: brand.description,
  foundingDate: brand.foundingDate,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/jtc-logo-wordmark.png`,
  image: `${SITE_URL}/jtc-logo-wordmark.png`,
  telephone: ["+91-99267-59557", "+91-83191-71236"],
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.streetAddress,
    addressLocality: brand.city,
    addressRegion: brand.state,
    postalCode: brand.pin,
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-99267-59557",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["hi", "en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-83191-71236",
      contactType: "customer service",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "21:30",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Damoh",
  },
  sameAs: [brand.whatsappGroupUrl],
};
