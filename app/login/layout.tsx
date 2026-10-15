import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Login | Juneja Trading Corporation",
  description: "Log in at Juneja Trading Corporation, Damoh.",
  path: "/login",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
