import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notifications | Juneja Trading Corporation",
  description: "Notifications for your Juneja Trading Corporation account.",
  path: "/notifications",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
