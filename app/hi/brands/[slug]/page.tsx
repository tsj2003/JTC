import LandingPage from "@/components/LandingPage";
import { hindiBrandStores } from "@/lib/brand-stores";
import { offerMeta } from "@/lib/offer-copy";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(hindiBrandStores).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = hindiBrandStores[slug];
  if (!page) {
    return pageMetadata({
      title: "पेज नहीं मिला | जुनेजा ट्रेडिंग कारपोरेशन",
      description: "यह ब्रांड पेज जुनेजा ट्रेडिंग कारपोरेशन, घंटा घर, आज़ाद मार्केट, दमोह की साइट पर नहीं है।",
      path: `/hi/brands/${slug}`,
    });
  }
  return pageMetadata({
    title: page.title,
    description: offerMeta(page.description),
    path: page.path,
  });
}

export default async function HindiBrandStorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = hindiBrandStores[slug];
  if (!page) notFound();
  return <LandingPage page={page} />;
}
