import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Add category | Juneja Trading Corporation",
  description: "Add a category at Juneja Trading Corporation, Damoh.",
  path: "/admin/categories/new",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
