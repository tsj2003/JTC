import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products | Juneja Trading Corporation",
  description: "Product catalogue admin for Juneja Trading Corporation, Damoh.",
  path: "/admin/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
