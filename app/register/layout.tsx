import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Register | Juneja Trading Corporation",
  description: "Create an account at Juneja Trading Corporation, Damoh.",
  path: "/register",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
