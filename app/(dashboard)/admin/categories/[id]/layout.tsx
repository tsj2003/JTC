import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return pageMetadata({
    title: `Category ${id} | Juneja Trading Corporation`,
    description: `Category ${id} at Juneja Trading Corporation, Damoh.`,
    path: `/admin/categories/${id}`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
