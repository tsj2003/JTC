import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Checkout | Juneja Trading Corporation",
  description: "Checkout at Juneja Trading Corporation, Shop No. 6, Azad Market, Madiya Pangarha, Damoh 470661.",
  path: "/checkout",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
