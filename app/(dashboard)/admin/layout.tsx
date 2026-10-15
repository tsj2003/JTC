import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Admin dashboard | Juneja Trading Corporation",
  description: "Admin dashboard for Juneja Trading Corporation, Damoh.",
  path: "/admin",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
