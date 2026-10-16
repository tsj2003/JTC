import FaqList from "@/components/FaqList";
import HinglishFaq from "@/components/HinglishFaq";
import { hinglishFaqsFor } from "@/lib/hinglish-faqs";
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
      {copy.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mt-4 text-lg leading-8 text-brand-soot">
          {paragraph}
        </p>
      ))}
      <ul className="mt-6 flex flex-col gap-2">
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
