"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { brandStoreSlugs } from "@/lib/brand-stores";
import { landings } from "@/lib/landings";

function languagePair(pathname: string) {
  if (pathname === "/hi") {
    return { en: "/", hi: "/hi", onHi: true };
  }
  if (pathname === "/history" || pathname === "/hi/history") {
    return { en: "/history", hi: "/hi/history", onHi: pathname.startsWith("/hi") };
  }
  const brandHi = pathname.match(/^\/hi\/brands\/([^/]+)\/?$/);
  if (brandHi && brandStoreSlugs.has(brandHi[1])) {
    return { en: `/brands/${brandHi[1]}`, hi: `/hi/brands/${brandHi[1]}`, onHi: true };
  }
  const brandEn = pathname.match(/^\/brands\/([^/]+)\/?$/);
  if (brandEn && brandStoreSlugs.has(brandEn[1])) {
    return { en: `/brands/${brandEn[1]}`, hi: `/hi/brands/${brandEn[1]}`, onHi: false };
  }
  const hindiSlug = pathname.match(/^\/hi\/([^/]+)\/?$/);
  if (hindiSlug && landings[hindiSlug[1]]) {
    return { en: `/${hindiSlug[1]}`, hi: `/hi/${hindiSlug[1]}`, onHi: true };
  }
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  if (slug && landings[slug]) {
    return { en: `/${slug}`, hi: `/hi/${slug}`, onHi: false };
  }
  return { en: pathname || "/", hi: "/hi", onHi: pathname.startsWith("/hi") };
}

const LanguageToggle = () => {
  const pathname = usePathname() || "/";
  const { en, hi, onHi } = languagePair(pathname);

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/hi") ? "hi" : "en";
  }, [pathname]);

  const item = (active: boolean) =>
    `inline-flex min-h-11 items-center px-2 ${active ? "text-brand-amber" : "text-brand-cream hover:text-brand-amber"}`;

  return (
    <nav aria-label="Language" className="flex items-center font-semibold">
      <Link href={en} hrefLang="en" lang="en" className={item(!onHi)} aria-current={!onHi ? "page" : undefined}>
        EN
      </Link>
      <span aria-hidden="true" className="text-brand-cream/50">
        /
      </span>
      <Link href={hi} hrefLang="hi" lang="hi" className={`${item(onHi)} font-hindi`} aria-current={onHi ? "page" : undefined}>
        हिं
      </Link>
    </nav>
  );
};

export default LanguageToggle;
