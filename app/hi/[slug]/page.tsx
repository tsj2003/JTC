import LandingPage from "@/components/LandingPage";
import { hindiLandings } from "@/lib/hindi-landings";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(hindiLandings).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = hindiLandings[slug];
  if (!page) {
    return pageMetadata({
      title: "पेज नहीं मिला | जुनेजा ट्रेडिंग कारपोरेशन",
      description: "यह पेज जुनेजा ट्रेडिंग कारपोरेशन, घंटा घर, आज़ाद मार्केट, दमोह की साइट पर नहीं है।",
      path: `/hi/${slug}`,
    });
  }
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function HindiLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = hindiLandings[slug];
  if (!page) notFound();
  return <LandingPage page={page} />;
}
