import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return pageMetadata({
    title: `Product ${id} | Juneja Trading Corporation`,
    description: `Product ${id} at Juneja Trading Corporation, Damoh.`,
    path: `/admin/products/${id}`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
