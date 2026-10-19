import { ceilingFansHeading, festiveHeading, festiveItemsHeading } from "@/lib/copy";
import Link from "next/link";
import WhatsAppGroupButton from "./WhatsAppGroupButton";

const items = [
  "Festive lighting",
  "Jhalar",
  "Fairy lights",
  "Torches",
  "Emergency lights",
  "Emergency bulbs",
  "LED bulbs",
];

const FestiveHighlights = () => {
  return (
    <section className="bg-brand-ink py-14 text-brand-cream">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 className="font-display text-4xl sm:text-6xl">{festiveHeading}</h2>
        <p className="mt-4 max-w-3xl text-lg text-brand-cream/85">
          The Damoh counter is stocked for the festive season. Five jhalar and light strings are ₹100–120.
          From ₹100. Wholesale rates on bulk. Ask for jhalar, fairy lights, torches, emergency lights,
          emergency bulbs and LED bulbs.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item} className="border border-brand-amber/70 px-3 py-2 text-sm font-semibold text-brand-amber">
              {item}
            </li>
          ))}
        </ul>
        <h2 className="mt-10 font-display text-3xl sm:text-5xl">{festiveItemsHeading}</h2>
        <p className="mt-4 max-w-3xl text-brand-cream/85">
          String lights, rope lights, LED diyas and emergency lighting are on the shelf. Call ahead for
          today&apos;s pieces.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/diwali-lights-damoh"
            className="inline-flex min-h-12 items-center justify-center bg-brand-copper px-6 py-3 font-bold text-white"
          >
            See Diwali lights
          </Link>
          <WhatsAppGroupButton />
        </div>
        <h2 className="mt-12 font-display text-4xl sm:text-6xl">{ceilingFansHeading}</h2>
        <p className="mt-4 max-w-3xl text-brand-cream/85">
          Ceiling fans for rooms and shops, including Orient, Atomberg, Crompton, Havells, Usha and others.
          Confirm the model at the counter.
        </p>
        <Link
          href="/ceiling-fans-damoh"
          className="mt-6 inline-flex min-h-12 items-center justify-center border border-brand-cream px-6 py-3 font-bold text-brand-cream hover:bg-brand-cream hover:text-brand-ink"
        >
          Ceiling fans in Damoh
        </Link>
      </div>
    </section>
  );
};

export default FestiveHighlights;
