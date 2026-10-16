import FaqList from "@/components/FaqList";
import ReviewButton from "@/components/ReviewButton";
import WhatsAppGroupButton from "@/components/WhatsAppGroupButton";
import { brand } from "@/lib/brand";
import { sharedFaqs } from "@/lib/faqs";
import { hindiBrandStoreList } from "@/lib/brand-stores";
import { hindiLandings } from "@/lib/hindi-landings";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "जुनेजा ट्रेडिंग कारपोरेशन, दमोह | घंटा घर, आज़ाद मार्केट | 1960 से",
  description:
    "जुनेजा ट्रेडिंग कारपोरेशन, शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, मड़िया पंगरहा, दमोह। सोमवार से रविवार सुबह 10 बजे से रात 9:30 बजे तक। 1960 से। Bajaj Finance EMI available।",
  path: "/hi",
});

const pages = Object.values(hindiLandings);

export default function HindiHomePage() {
  return (
    <article lang="hi" className="bg-brand-paper font-hindi text-brand-ink">
      <header className="bg-brand-ink px-4 py-12 text-brand-cream sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-amber">
            {brand.nameHi} · दमोह
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">
            जुनेजा ट्रेडिंग कारपोरेशन, दमोह
          </h1>
          <p className="mt-4 text-xl text-brand-amber">{brand.slogan}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-brand-cream/85">
            दुकान घंटा घर के पास आज़ाद मार्केट में है: शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, मड़िया
            पंगरहा, दमोह, मध्य प्रदेश 470661। 1960 से एलईडी टीवी, फ्रिज, वॉशिंग मशीन, साउंड, सोलर,
            किसान पंप, इलेक्ट्रिकल सामान और हाथों-हाथ रिपेयर।
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-4xl">जो ब्रांड हम बेचते हैं</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {hindiBrandStoreList.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className="inline-flex min-h-11 items-center border border-brand-ink bg-white px-4 text-sm font-bold text-brand-ink hover:bg-brand-ink hover:text-brand-cream"
              >
                {page.enquiryName}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-4xl">दमोह की सेवाएँ</h2>
        <ul className="mt-4 space-y-3 text-lg">
          {pages.map((page) => (
            <li key={page.path}>
              <Link href={page.path} className="font-semibold text-brand-copper hover:underline">
                {page.h1}
              </Link>
            </li>
          ))}
        </ul>
        <FaqList faqs={sharedFaqs("hi")} heading="अक्सर पूछे जाने वाले सवाल" className="mt-12" />
        <section className="mt-12">
          <h2 className="font-display text-4xl">दुकान पर आइए</h2>
          <address className="mt-4 not-italic text-lg leading-8 text-brand-soot">
            शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, मड़िया पंगरहा, दमोह, मध्य प्रदेश 470661
            <br />
            फ़ोन: <a href={brand.phoneHref}>{brand.phone}</a>, <a href={brand.phone2Href}>{brand.phone2}</a>
            <br />
            हर दिन सुबह 10 बजे से रात 9:30 बजे तक खुला। दमोह में होम डिलीवरी।
          </address>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppGroupButton />
            <ReviewButton />
          </div>
        </section>
      </div>
    </article>
  );
}
