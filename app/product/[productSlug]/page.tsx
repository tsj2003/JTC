import {
  StockAvailabillity,
  ProductTabs,
  SingleProductDynamicFields,
} from "@/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { sanitize } from "@/lib/sanitize";
import { EmiBadge } from "@/components/EmiNotice";
import { brand } from "@/lib/brand";
import { getCatalogBySlug } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

interface ImageItem {
  imageID: string;
  productID: string;
  image: string;
}

interface SingleProductPageProps {
  params: Promise<{  productSlug: string, id: string }>;
}

export async function generateMetadata({ params }: SingleProductPageProps): Promise<Metadata> {
  const paramsAwaited = await params;
  const product = getCatalogBySlug(paramsAwaited?.productSlug);
  if (!product) {
    return pageMetadata({
      title: "Product not found | Juneja Trading Corporation",
      description: `That product is not on the list at ${brand.nap}.`,
      path: `/product/${paramsAwaited?.productSlug || ""}`,
    });
  }
  return pageMetadata({
    title: `${product.title} in Damoh | Juneja Trading Corporation`,
    description: `${product.description} ${brand.emiAvailable}. ${brand.emiTerms} ${brand.nap}.`,
    path: `/product/${product.slug}`,
  });
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const paramsAwaited = await params;
  const product = getCatalogBySlug(paramsAwaited?.productSlug);
  const images: ImageItem[] = (product?.images || []).map((image, index) => ({
    imageID: `${product?.id}-${index}`,
    productID: product?.id || "",
    image,
  }));

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full max-w-lg">
            <Image
              src={product?.mainImage ? `/${product?.mainImage}` : "/product_placeholder.jpg"}
              width={500}
              height={500}
              alt={sanitize(product?.title) || "Product"}
              className="h-auto w-full object-contain"
            />
            {Array.isArray(images) && images.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {images.map((imageItem: ImageItem, key: number) => (
                  <Image
                    key={imageItem.imageID + key}
                    src={`/${imageItem.image}`}
                    width={80}
                    height={80}
                    alt=""
                    className="size-20 object-cover"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex w-full max-w-xl flex-col gap-5 text-black">
            <h1 className="text-3xl max-sm:text-2xl">{sanitize(product?.title)}</h1>
            <p className="text-xl font-semibold text-brand-copper">{brand.askPrice}</p>
            <p className="text-brand-copper font-semibold">{brand.finance}</p>
            <EmiBadge />
            <StockAvailabillity stock={94} inStock={product?.inStock} />
            <SingleProductDynamicFields product={product} />
            <a href={brand.phoneHref} className="font-semibold text-brand-copper">
              Call {brand.phone}
            </a>
            <a href={brand.phone2Href} className="font-semibold text-brand-copper">
              Call {brand.phone2}
            </a>
          </div>
        </div>
        <div className="py-12">
          <ProductTabs product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
