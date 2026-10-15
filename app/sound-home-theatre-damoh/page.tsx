import LandingPage from "@/components/LandingPage";
import { landings } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

const page = landings["sound-home-theatre-damoh"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function SoundHomeTheatrePage() {
  return <LandingPage page={page} />;
}
