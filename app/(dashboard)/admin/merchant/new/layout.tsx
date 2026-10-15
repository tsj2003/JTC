import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Add merchant | Juneja Trading Corporation",
  description: "Add a merchant at Juneja Trading Corporation, Damoh.",
  path: "/admin/merchant/new",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
