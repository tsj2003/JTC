import { ProductItem, SectionTitle } from "@/components";
import { searchCatalog } from "@/lib/catalog";
import React from "react";
import { sanitize } from "@/lib/sanitize";
import { brand } from "@/lib/brand";

interface Props {
  searchParams: Promise<{ search: string }> | { search: string };
}

const SearchPage = async ({ searchParams }: Props) => {
  const sp = await searchParams;
  const query = sanitize(sp?.search || "");
  const products = searchCatalog(query);

  return (
    <div>
      <SectionTitle title="Search" path={`${brand.name} | Search`} />
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        {query ? (
          <h3 className="py-8 text-center text-2xl max-sm:text-xl">
            Showing results for {query}
          </h3>
        ) : (
          <h3 className="py-8 text-center text-2xl max-sm:text-xl">
            Search Samsung, LG, Haier, fans, TV, fridge...
          </h3>
        )}
        <div className="grid grid-cols-1 justify-items-center gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductItem key={product.id} product={product} color="black" />
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <h3 className="text-xl">No products found</h3>
              <p className="mt-2 text-brand-soot">
                Call {brand.phone} or walk in to Juneja Trading Corporation, Damoh.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
