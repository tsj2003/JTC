import FaqList from "@/components/FaqList";
import HinglishFaq from "@/components/HinglishFaq";
import OfferBadges from "@/components/OfferBadges";
import { hinglishFaqsFor } from "@/lib/hinglish-faqs";
import { categoryOfferLine } from "@/lib/offer-copy";
import type { ShopCategoryCopy } from "@/lib/shop-category-copy";
import Link from "next/link";

const CategoryGuide = ({ copy }: { copy: ShopCategoryCopy }) => {
  const hinglish = hinglishFaqsFor(copy.slug);
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-brand-ink sm:px-6" aria-labelledby="category-guide-title">
      <p lang="hi" className="font-hindi text-2xl text-brand-copper">
        {copy.titleHi}
      </p>
      <h2 id="category-guide-title" className="mt-2 font-display text-4xl">
        {copy.title}
      </h2>
      <div className="mt-4">
        <OfferBadges lang="both" />
      </div>
      <p className="mt-4 text-lg leading-8 text-brand-soot">{categoryOfferLine("en")}</p>
      <p lang="hi" className="mt-2 font-hindi text-lg leading-8 text-brand-soot">
        {categoryOfferLine("hi")}
      </p>
      {copy.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mt-4 text-lg leading-8 text-brand-soot">
          {paragraph}
        </p>
      ))}
      <ul className="mt-6 flex flex-col gap-2">
        <li>
          <Link href="/wholesale-electronics-damoh" className="font-semibold text-brand-copper hover:underline">
            Wholesale electronics in Damoh
          </Link>
        </li>
        <li>
          <Link href="/hi/wholesale-electronics-damoh" className="font-semibold text-brand-copper hover:underline">
            दमोह में इलेक्ट्रॉनिक्स थोक
          </Link>
        </li>
        {copy.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-semibold text-brand-copper hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <FaqList faqs={copy.faqs} extraSchemaFaqs={hinglish} heading="FAQ" className="mt-10" />
      <HinglishFaq faqs={hinglish} />
    </section>
  );
};

export default CategoryGuide;
