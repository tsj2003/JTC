export const dynamic = "force-dynamic";
export const revalidate = 0;

import {
  Breadcrumb,
  Filters,
  Pagination,
  Products,
  SortBy,
} from "@/components";
import { EmiSection } from "@/components/EmiNotice";
import { brand } from "@/lib/brand";
import { applianceTvCategories } from "@/lib/copy";
import { sanitize } from "@/lib/sanitize";
import CategoryGuide from "@/components/CategoryGuide";
import { shopCategoryCopy } from "@/lib/shop-category-copy";
import { pageMetadata } from "@/lib/seo";
import { categoryMenuList } from "@/lib/utils";
import type { Metadata } from "next";
import React from "react";

const categoryHeading = (category?: string) => {
  if (!category) return "All products";
  const known = categoryMenuList.find((item) => item.href === `/shop/${category}`);
  if (known) return known.title;
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = slug?.[0];
  if (!category) {
    return pageMetadata({
      title: "Shop electronics and electricals in Damoh | Juneja Trading Corporation",
      description: `Browse LED TVs, appliances, fans and electricals at ${brand.nap}. Open ${brand.hours}. Call ${brand.phone} for today's price. ${brand.emiAvailable}. ${brand.emiTerms}`,
      path: "/shop",
    });
  }
  const label = categoryHeading(category);
  const path = `/shop/${(slug ?? [category]).join("/")}`;
  const copy = shopCategoryCopy(category);
  const emi = applianceTvCategories.has(category)
    ? ` ${brand.emiAvailable}. ${brand.emiTerms}`
    : "";
  return pageMetadata({
    title: copy
      ? `${copy.title} | ${copy.titleHi} | Juneja Trading Corporation`
      : `${label} in Damoh | Juneja Trading Corporation`,
    description: copy
      ? `${copy.title} (${copy.titleHi}) at ${brand.nap}. Retail and wholesale, thok vikreta (थोक विक्रेता). Call or WhatsApp ${brand.phone} for today's price and the wholesale rate list. Open ${brand.hours}.`
      : `Shop ${label} at ${brand.nap}. Call ${brand.phone} or ${brand.phone2} for today's price.${emi}`,
    path,
  });
}

const ShopPage = async ({ params, searchParams }: { params: Promise<{ slug?: string[] }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  
  const category = awaitedParams?.slug?.[0];
  const heading = sanitize(categoryHeading(category));
  const copy = shopCategoryCopy(category);

  return (
    <div className="bg-white text-black">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <Breadcrumb />
        <h1 className="py-4 text-3xl font-bold uppercase max-sm:text-2xl">{heading}</h1>
        {copy ? (
          <p lang="hi" className="font-hindi text-xl text-brand-copper">
            {copy.titleHi}
          </p>
        ) : null}
        {category && applianceTvCategories.has(category) ? <EmiSection /> : null}
        <div className="grid gap-8 md:grid-cols-[200px_1fr]">
          <details className="md:hidden">
            <summary className="cursor-pointer py-3 text-base font-semibold">Filters</summary>
            <Filters />
          </details>
          <div className="hidden md:block">
            <Filters />
          </div>
          <div>
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <p className="text-lg font-semibold uppercase text-brand-soot">{heading}</p>
              <SortBy />
            </div>
            <div className="divider"></div>
            <Products params={awaitedParams} searchParams={awaitedSearchParams} />
            <Pagination />
          </div>
        </div>
      </div>
      {copy ? <CategoryGuide copy={copy} /> : null}
    </div>
  );
};

export default ShopPage;
