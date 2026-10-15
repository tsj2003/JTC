import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return pageMetadata({
    title: `Merchant ${id} | Juneja Trading Corporation`,
    description: `Merchant ${id} at Juneja Trading Corporation, Damoh.`,
    path: `/admin/merchant/${id}`,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
