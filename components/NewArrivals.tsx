import { newArrivals } from "@/lib/new-arrivals";
import Heading from "./Heading";
import ProductItem from "./ProductItem";

const NewArrivals = () => {
  return (
    <section className="bg-brand-paper" aria-label="New arrivals">
      <div className="mx-auto max-w-screen-2xl px-4 pt-12 sm:px-8">
        <Heading title="NEW ARRIVALS" dark />
        <div className="grid grid-cols-1 justify-items-center gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {newArrivals.map((product) => (
            <ProductItem key={product.id} product={product} color="black" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
