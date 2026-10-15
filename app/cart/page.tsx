import { SectionTitle } from "@/components";
import { Loader } from "@/components/Loader";
import { CartModule } from "@/components/modules/cart";
import { brand } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = pageMetadata({
  title: "Cart | Juneja Trading Corporation",
  description: `Your cart at ${brand.name}, ${brand.city}. ${brand.nap}.`,
  path: "/cart",
});

const CartPage = () => {
  return (
    <div className="bg-white">
      <SectionTitle title="Cart" path="Home | Cart" />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-8">
        <Suspense fallback={<Loader />}>
          <CartModule />
        </Suspense>
      </div>
    </div>
  );
};

export default CartPage;
