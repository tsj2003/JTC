import LandingPage from "@/components/LandingPage";
import { brandStores } from "@/lib/brand-stores";
import { offerMeta } from "@/lib/offer-copy";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(brandStores).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = brandStores[slug];
  if (!page) {
    return pageMetadata({
      title: "Page not found | Juneja Trading Corporation",
      description: "That brand page is not on the Juneja Trading Corporation site.",
      path: `/brands/${slug}`,
    });
  }
  return pageMetadata({
    title: page.title,
    description: offerMeta(page.description),
    path: page.path,
  });
}

export default async function BrandStorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = brandStores[slug];
  if (!page) notFound();
  return <LandingPage page={page} />;
}
