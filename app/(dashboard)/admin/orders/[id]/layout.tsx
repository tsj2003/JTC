import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return pageMetadata({
    title: `Order ${id} | Juneja Trading Corporation`,
    description: `Order ${id} at Juneja Trading Corporation, Damoh.`,
    path: `/admin/orders/${id}`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
