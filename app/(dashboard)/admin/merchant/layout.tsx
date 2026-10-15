import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Merchants | Juneja Trading Corporation",
  description: "Merchants at Juneja Trading Corporation, Damoh.",
  path: "/admin/merchant",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
