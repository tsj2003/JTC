import { CategoryMenu, Hero, Incentives, IntroducingSection, ProductsSection } from "@/components";
import BrandMarquee from "@/components/BrandMarquee";
import BrandsWeSell from "@/components/BrandsWeSell";
import { EmiSection } from "@/components/EmiNotice";
import FestiveHighlights from "@/components/FestiveHighlights";
import OfferTicker from "@/components/OfferTicker";
import ServiceLinks from "@/components/ServiceLinks";
import InsideOurShop from "@/components/InsideOurShop";
import ShopGallery from "@/components/ShopGallery";
import ShopUpdates from "@/components/ShopUpdates";
import ShopVideos from "@/components/ShopVideos";
import NewArrivals from "@/components/NewArrivals";
import VisitBlock from "@/components/VisitBlock";
import FaqList from "@/components/FaqList";
import { sharedFaqs } from "@/lib/faqs";
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
      <BrandsWeSell />
      <ShopUpdates />
      <IntroducingSection />
      <ServiceLinks />
      <CategoryMenu />
      <ProductsSection />
      <InsideOurShop />
      <ShopGallery />
      <ShopVideos />
      <Incentives />
      <section className="bg-brand-paper py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FaqList faqs={sharedFaqs("en")} heading="FAQ" />
        </div>
      </section>
      <VisitBlock />
    </>
  );
}
