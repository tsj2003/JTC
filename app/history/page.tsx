import ShopHistory from "@/components/ShopHistory";
import { brand } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Since 1960: the story of Juneja Trading Corporation, Damoh",
  description: `${brand.name} (${brand.nameHi}) has served Damoh since 1960. The shop is at ${brand.address}. Open ${brand.hours}. This page does not invent names or dates beyond that.`,
  path: "/history",
});

export default function HistoryPage() {
  return <ShopHistory lang="en" />;
}
