import { SectionTitle } from "@/components";
import { Loader } from "@/components/Loader";
import { WishlistModule } from "@/components/modules/wishlist";
import { brand } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = pageMetadata({
  title: "Wishlist | Juneja Trading Corporation",
  description: `Saved products at ${brand.name}, ${brand.nap}.`,
  path: "/wishlist",
});

const WishlistPage = () => {
  return (
    <div className="bg-white">
      <SectionTitle title="Wishlist" path="Home | Wishlist" />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-8">
        <Suspense fallback={<Loader />}>
          <WishlistModule />
        </Suspense>
      </div>
    </div>
  );
};

export default WishlistPage;
