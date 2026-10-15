import LandingPage from "@/components/LandingPage";
import { landings } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

const page = landings["diwali-lights-damoh"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function DiwaliLightsPage() {
  return <LandingPage page={page} />;
}
