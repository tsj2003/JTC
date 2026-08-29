import { CategoryMenu, Hero, Incentives, IntroducingSection, ProductsSection } from "@/components";
import BrandMarquee from "@/components/BrandMarquee";
import OfferTicker from "@/components/OfferTicker";
import ShopGallery from "@/components/ShopGallery";
import ShopUpdates from "@/components/ShopUpdates";
import ShopVideos from "@/components/ShopVideos";

export default function Home() {
  return (
    <>
      <OfferTicker />
      <Hero />
      <BrandMarquee />
      <ShopUpdates />
      <IntroducingSection />
      <CategoryMenu />
      <ProductsSection />
      <ShopGallery />
      <ShopVideos />
      <Incentives />
    </>
  );
}
