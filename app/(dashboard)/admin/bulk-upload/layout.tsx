import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bulk upload | Juneja Trading Corporation",
  description: "Bulk upload products for Juneja Trading Corporation, Damoh.",
  path: "/admin/bulk-upload",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
