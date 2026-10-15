import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Add product | Juneja Trading Corporation",
  description: "Add a product at Juneja Trading Corporation, Damoh.",
  path: "/admin/products/new",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
