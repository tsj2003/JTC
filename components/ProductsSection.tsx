import React from "react";
import Link from "next/link";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import { featuredCatalog } from "@/lib/catalog";

const ProductsSection = async () => {
  const products = featuredCatalog();

  return (
    <section className="border-t-4 border-brand-ink bg-brand-cream">
      <div className="mx-auto max-w-screen-2xl px-4 pt-12 sm:px-8">
        <Heading title="FEATURED PRODUCTS" dark />
        <div className="grid grid-cols-1 justify-items-center gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} color="black" />
          ))}
        </div>
        <div className="pb-12 text-center">
          <Link
            href="/shop"
            className="inline-block border border-brand-ink bg-brand-ink px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-copper"
          >
            View all shop stock
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
