import Image from "next/image";
import React from "react";
import Link from "next/link";
import { sanitize } from "@/lib/sanitize";
import { brand, formatPrice } from "@/lib/brand";
import { publishedPrice } from "@/lib/new-arrivals";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  const price = publishedPrice(product);
  return (
    <div className="flex w-full flex-col items-center gap-y-2 border border-brand-ink/10 bg-white p-4">
      <Link href={`/product/${product.slug}`} className="relative h-48 w-full">
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          fill
          sizes="280px"
          className="object-contain"
          alt={sanitize(product.imageAlt || `${product.title}, Damoh`) || "Product image"}
        />
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={
          color === "black"
            ? "mt-2 text-center text-lg font-normal uppercase text-black"
            : "mt-2 text-center text-lg font-normal uppercase text-white"
        }
      >
        {sanitize(product.title)}
      </Link>
      <p
        className={
          color === "black"
            ? "text-lg font-semibold text-black"
            : "text-lg font-semibold text-white"
        }
      >
        {price != null ? (
          <>
            <span className="block">{formatPrice(price)}</span>
            {product.mrp ? <span className="block font-normal">MRP {formatPrice(product.mrp)}</span> : null}
          </>
        ) : (
          <>
            {product.mrp ? <span className="block">MRP ₹{product.mrp}</span> : null}
            {brand.askPrice}
          </>
        )}
      </p>
      <Link
        href={`/product/${product?.slug}`}
        className="flex w-full items-center justify-center border border-brand-ink bg-white px-0 py-3 text-base font-bold uppercase text-brand-copper hover:bg-brand-ink hover:text-white"
      >
        View product
      </Link>
    </div>
  );
};

export default ProductItem;
