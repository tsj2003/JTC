import type { LandingFaq } from "@/lib/landings";
import { faqPageJsonLd } from "@/lib/faqs";

const FaqList = ({
  faqs,
  heading,
  className = "",
}: {
  faqs: LandingFaq[];
  heading: string;
  className?: string;
}) => {
  const jsonLd = faqPageJsonLd(faqs);
  return (
    <section className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <h2 className="font-display text-4xl text-brand-ink sm:text-5xl">{heading}</h2>
      <div className="mt-4 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="mt-2 text-lg leading-7 text-brand-soot">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqList;
