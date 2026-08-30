import React from "react";
import ProductItem from "./ProductItem";
import { catalogByCategory } from "@/lib/catalog";

const Products = async ({ params }: { params: { slug?: string[] }, searchParams: { [key: string]: string | string[] | undefined } }) => {
  const products = catalogByCategory(params?.slug);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} color="black" />
        ))
      ) : (
        <h3 className="col-span-full py-10 text-center text-xl text-brand-ink">
          No products found for this filter. Call the shop for stock.
        </h3>
      )}
    </div>
  );
};

export default Products;
