import { ceilingFansHeading, festiveHeading, festiveItemsHeading } from "@/lib/copy";
import Link from "next/link";

const FestiveBanner = () => {
  return (
    <div className="bg-brand-amber text-brand-ink">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl leading-none sm:text-3xl">{festiveHeading}</p>
          <p className="mt-1 text-sm font-semibold">{festiveItemsHeading}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/diwali-lights-damoh"
            className="inline-flex min-h-11 items-center bg-brand-ink px-4 py-2 text-sm font-bold text-brand-cream"
          >
            Diwali lights
          </Link>
          <Link
            href="/ceiling-fans-damoh"
            className="inline-flex min-h-11 items-center border border-brand-ink px-4 py-2 text-sm font-bold"
          >
            {ceilingFansHeading}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FestiveBanner;
