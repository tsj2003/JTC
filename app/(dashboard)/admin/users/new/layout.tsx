import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Add user | Juneja Trading Corporation",
  description: "Add a user at Juneja Trading Corporation, Damoh.",
  path: "/admin/users/new",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
