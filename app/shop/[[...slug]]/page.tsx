export const dynamic = "force-dynamic";
export const revalidate = 0;

import {
  Breadcrumb,
  Filters,
  Pagination,
  Products,
  SortBy,
} from "@/components";
import React from "react";
import { sanitize } from "@/lib/sanitize";

const improveCategoryText = (text: string): string => {
  if (text.indexOf("-") !== -1) {
    return text.split("-").join(" ");
  }
  return text;
};

const ShopPage = async ({ params, searchParams }: { params: Promise<{ slug?: string[] }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  
  return (
    <div className="bg-white text-black">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <Breadcrumb />
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
              <h2 className="text-2xl font-bold uppercase max-sm:text-xl">
                {awaitedParams?.slug && awaitedParams?.slug[0]?.length > 0
                  ? sanitize(improveCategoryText(awaitedParams?.slug[0]))
                  : "All products"}
              </h2>
              <SortBy />
            </div>
            <div className="divider"></div>
            <Products params={awaitedParams} searchParams={awaitedSearchParams} />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
