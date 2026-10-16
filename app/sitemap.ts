import type { MetadataRoute } from "next";
import { localCatalog } from "@/lib/catalog";
import { brandStoreList, hindiBrandStoreList } from "@/lib/brand-stores";
import { hindiLandings } from "@/lib/hindi-landings";
import { landingList } from "@/lib/landings";
import { SITE_URL } from "@/lib/seo";
import { categoryMenuList } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = new Set<string>([
    "/",
    "/hi",
    "/shop",
    "/about",
    "/history",
    "/hi/history",
    "/contact",
    "/search",
    ...landingList.map((page) => page.path),
    ...Object.values(hindiLandings).map((page) => page.path),
    ...brandStoreList.map((page) => page.path),
    ...hindiBrandStoreList.map((page) => page.path),
    ...categoryMenuList.map((item) => item.href),
    ...localCatalog.map((product) => `/product/${product.slug}`),
  ]);

  return [...paths].map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
  }));
}
