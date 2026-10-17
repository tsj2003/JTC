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
import { brand, formatPrice, whatsappEnquiryHref } from "@/lib/brand";
import { getCatalogBySlug } from "@/lib/catalog";
import { publishedPrice } from "@/lib/new-arrivals";
import FaqList from "@/components/FaqList";
import OfferBadges from "@/components/OfferBadges";
import { offerMeta, productSastaFaq } from "@/lib/offer-copy";
import { pageMetadata, SITE_URL } from "@/lib/seo";
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
  const priceLabel =
    publishedPrice(product) != null
      ? formatPrice(publishedPrice(product))
      : product.priceLabel || brand.askPrice;
  return pageMetadata({
    title: `${product.title} in Damoh | Juneja Trading Corporation`,
    description: offerMeta(
      `${product.description} ${priceLabel}. ${brand.emiAvailable}. ${brand.emiTerms} ${brand.nap}.`,
    ),
    path: `/product/${product.slug}`,
    image: {
      url: `/${product.mainImage}`,
      alt: product.imageAlt || `${product.title}, Damoh`,
    },
  });
}

function productJsonLd(product: Product) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: [product.mainImage, ...(product.images || [])].map((path) => `${SITE_URL}/${path}`),
    sku: product.slug,
    category: product.categoryLabel || product.category?.name,
  };
  if (product.manufacturer) {
    data.brand = { "@type": "Brand", name: product.manufacturer };
  }
  if (product.titleHi) {
    data.alternateName = product.titleHi;
  }
  const price = publishedPrice(product);
  if (price != null) {
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      priceCurrency: "INR",
      price: String(price),
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/product/${product.slug}`,
    };
    if (product.mrp) {
      offer.priceSpecification = {
        "@type": "UnitPriceSpecification",
        price: String(product.mrp),
        priceCurrency: "INR",
        priceType: "https://schema.org/MSRP",
      };
    }
    data.offers = offer;
  }
  return data;
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

  const imageAlt = product.imageAlt || `${product.title}, Damoh`;
  const price = publishedPrice(product);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full max-w-lg">
            <Image
              src={product?.mainImage ? `/${product?.mainImage}` : "/product_placeholder.jpg"}
              width={500}
              height={500}
              alt={sanitize(imageAlt) || "Product"}
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
                    alt={sanitize(product.imageAlts?.[key] || imageAlt) || ""}
                    className="size-20 object-cover"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex w-full max-w-xl flex-col gap-5 text-black">
            <h1 className="text-3xl max-sm:text-2xl">{sanitize(product?.title)}</h1>
            <OfferBadges lang="both" />
            {product.titleHi ? (
              <p className="font-hindi text-xl text-brand-ink">{product.titleHi}</p>
            ) : null}
            {price != null ? (
              <p className="text-2xl font-semibold text-brand-ink">{formatPrice(price)}</p>
            ) : (
              <p className="text-xl font-semibold text-brand-copper">{product.priceLabel || brand.askPrice}</p>
            )}
            {product.mrp ? (
              <p className="text-xl font-semibold text-brand-ink">MRP {formatPrice(product.mrp)}</p>
            ) : null}
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={whatsappEnquiryHref(brand.phoneRaw, product.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#0E6E62] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#075E54]"
              >
                {brand.whatsappEnquiryLabel} {brand.phone}
              </a>
              <a
                href={whatsappEnquiryHref(brand.phone2Raw, product.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-[#075E54] px-5 py-3 text-center text-sm font-bold text-[#075E54] hover:bg-[#0E6E62] hover:text-white"
              >
                {brand.whatsappEnquiryLabel} {brand.phone2}
              </a>
            </div>
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
            <a href={brand.emailHref} className="font-semibold text-brand-copper">
              {brand.email}
            </a>
          </div>
        </div>
        <div className="py-12">
          <ProductTabs product={product} />
          <FaqList faqs={[productSastaFaq(product)]} heading="FAQ" className="mt-12" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
