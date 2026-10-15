import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return pageMetadata({
    title: `User ${id} | Juneja Trading Corporation`,
    description: `User ${id} at Juneja Trading Corporation, Damoh.`,
    path: `/admin/users/${id}`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
