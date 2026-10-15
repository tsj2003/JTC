import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Orders | Juneja Trading Corporation",
  description: "Orders at Juneja Trading Corporation, Damoh.",
  path: "/admin/orders",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
