import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Users | Juneja Trading Corporation",
  description: "Users at Juneja Trading Corporation, Damoh.",
  path: "/admin/users",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
