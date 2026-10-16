import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { ceilingFansHeading, festiveHeading, festiveItemsHeading } from "@/lib/copy";
import { brandStoreSlugs } from "@/lib/brand-stores";
import { landings } from "@/lib/landings";
import { insideShopPhotos } from "@/lib/shop-photos";

export const SITE_URL = "https://steady-pika-d49d5d.netlify.app";

export const homeTitle = `${festiveHeading} | ${festiveItemsHeading} | ${ceilingFansHeading} | Electronics Shop in Damoh since 1960 | Juneja Trading Corporation (JTC)`;

export const homeDescription = `${festiveHeading}. ${festiveItemsHeading}. ${ceilingFansHeading}. Juneja Trading Corporation, Ghanta Ghar, Damoh: LED TVs, fridges, washing machines, home theatre and PA sound, solar, kisan pumps, electricals, Diwali lights and on-the-spot repair. ${brand.nap}. ${brand.emiAvailable}. ${brand.emiTerms}. Open daily 10:00–21:30.`;

function hreflangFor(path: string): Record<string, string> | undefined {
  if (path === "/" || path === "/hi") {
    return {
      en: `${SITE_URL}/`,
      hi: `${SITE_URL}/hi`,
      "x-default": `${SITE_URL}/`,
    };
  }
  const brandSlug = path.match(/^\/(?:hi\/)?brands\/([^/]+)$/);
  if (brandSlug && brandStoreSlugs.has(brandSlug[1])) {
    return {
      en: `${SITE_URL}/brands/${brandSlug[1]}`,
      hi: `${SITE_URL}/hi/brands/${brandSlug[1]}`,
      "x-default": `${SITE_URL}/brands/${brandSlug[1]}`,
    };
  }
  const slug = path.startsWith("/hi/") ? path.slice(4) : path.replace(/^\//, "");
  if (landings[slug] && (path === `/${slug}` || path === `/hi/${slug}`)) {
    return {
      en: `${SITE_URL}/${slug}`,
      hi: `${SITE_URL}/hi/${slug}`,
      "x-default": `${SITE_URL}/${slug}`,
    };
  }
  return undefined;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  languages: withLanguages = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  languages?: boolean;
}): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const languages = withLanguages ? hreflangFor(path) : undefined;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      type: "website",
      locale: path === "/hi" || path.startsWith("/hi/") ? "hi_IN" : "en_IN",
      images: [
        image ?? {
          url: brand.logo,
          alt: brand.logoAlt,
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
  logo: `${SITE_URL}${brand.logo}`,
  image: [
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${brand.logo}`,
      url: `${SITE_URL}${brand.logo}`,
      name: brand.logoAlt,
    },
    ...insideShopPhotos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${photo.src}`,
      url: `${SITE_URL}${photo.src}`,
      name: photo.alt,
      caption: photo.alt,
      description: photo.alt,
      width: photo.width,
      height: photo.height,
    })),
  ],
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: brand.lat,
    longitude: brand.lng,
  },
  hasMap: brand.mapsUrl,
  openingHours: "Mo-Su 10:00-21:30",
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
  areaServed: brand.serviceAreas.map((name) => ({
    "@type": "City",
    name,
  })),
  sameAs: [brand.whatsappGroupUrl],
};
