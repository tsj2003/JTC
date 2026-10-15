import { brand } from "@/lib/brand";
import type { Landing } from "@/lib/landings";
import { visitLine } from "@/lib/landings";
import { EmiSection } from "./EmiNotice";
import WhatsAppGroupButton from "./WhatsAppGroupButton";

const LandingPage = ({ page }: { page: Landing }) => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="bg-brand-paper text-brand-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="bg-brand-ink px-4 py-12 text-brand-cream sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-amber">
            {brand.name} · {brand.city}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">{page.h1}</h1>
          <p lang="hi" className="mt-4 font-hindi text-xl text-brand-amber">
            {page.hindi}
          </p>
          {page.intro ? <p className="mt-4 max-w-2xl text-lg text-brand-cream/85">{page.intro}</p> : null}
        </div>
      </header>
      {page.showEmi ? <EmiSection /> : null}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {page.sections.map((section) => (
          <section key={section.heading} className="mt-10 first:mt-0">
            <h2 className="font-display text-4xl text-brand-ink">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-8 text-brand-soot">
                {paragraph}
              </p>
            ))}
            {section.items ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-7 text-brand-soot">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <section className="mt-12">
          <h2 className="font-display text-4xl text-brand-ink">FAQ</h2>
          <div className="mt-4 space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-2 text-lg leading-7 text-brand-soot">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="font-display text-4xl text-brand-ink">Visit us</h2>
          <address className="mt-4 not-italic text-lg leading-8 text-brand-soot">
            {brand.nap}
            <br />
            Phone: <a href={brand.phoneHref}>{brand.phone}</a>, <a href={brand.phone2Href}>{brand.phone2}</a>
            {" · "}
            <a href={brand.emailHref}>{brand.email}</a>
            <br />
            {visitLine}
          </address>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppGroupButton />
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-brand-ink px-5 py-3 text-sm font-bold"
            >
              Open in Google Maps
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};

export default LandingPage;
