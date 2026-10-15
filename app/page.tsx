import { CategoryMenu, Hero, Incentives, IntroducingSection, ProductsSection } from "@/components";
import BrandMarquee from "@/components/BrandMarquee";
import { EmiSection } from "@/components/EmiNotice";
import FestiveHighlights from "@/components/FestiveHighlights";
import OfferTicker from "@/components/OfferTicker";
import ServiceLinks from "@/components/ServiceLinks";
import ShopGallery from "@/components/ShopGallery";
import ShopUpdates from "@/components/ShopUpdates";
import ShopVideos from "@/components/ShopVideos";
import NewArrivals from "@/components/NewArrivals";
import VisitBlock from "@/components/VisitBlock";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
});

export default function Home() {
  return (
    <>
      <OfferTicker />
      <Hero />
      <NewArrivals />
      <EmiSection />
      <FestiveHighlights />
      <BrandMarquee />
      <ShopUpdates />
      <IntroducingSection />
      <ServiceLinks />
      <CategoryMenu />
      <ProductsSection />
      <ShopGallery />
      <ShopVideos />
      <Incentives />
      <VisitBlock />
    </>
  );
}
