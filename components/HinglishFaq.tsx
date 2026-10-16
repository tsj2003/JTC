import type { LandingFaq } from "@/lib/landings";

const HinglishFaq = ({ faqs }: { faqs: LandingFaq[] }) => {
  if (faqs.length === 0) return null;
  return (
    <section className="mt-12" aria-labelledby="hinglish-faq-title">
      <h2 id="hinglish-faq-title" className="font-display text-4xl text-brand-ink sm:text-5xl">
        Hinglish FAQ
      </h2>
      <p className="mt-2 text-lg text-brand-soot">Questions the way buyers in Damoh type them.</p>
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

export default HinglishFaq;
