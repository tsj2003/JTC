import LandingPage from "@/components/LandingPage";
import { landings } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

const page = landings["kisan-agri-damoh"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function KisanAgriPage() {
  return <LandingPage page={page} />;
}
