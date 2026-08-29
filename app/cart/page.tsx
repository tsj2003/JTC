import { SectionTitle } from "@/components";
import { Loader } from "@/components/Loader";
import { CartModule } from "@/components/modules/cart";
import { Suspense } from "react";

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
