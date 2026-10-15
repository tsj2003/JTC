import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Categories | Juneja Trading Corporation",
  description: "Categories at Juneja Trading Corporation, Damoh.",
  path: "/admin/categories",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
