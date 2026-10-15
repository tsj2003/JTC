import { brand } from "@/lib/brand";
import { sharedFaqs } from "@/lib/faqs";
import type { Landing } from "@/lib/landings";
import { visitLine } from "@/lib/landings";
import { EmiSection } from "./EmiNotice";
import FaqList from "./FaqList";
import ReviewButton from "./ReviewButton";
import WhatsAppGroupButton from "./WhatsAppGroupButton";

const LandingPage = ({ page }: { page: Landing }) => {
  const lang = page.lang ?? "en";
  const faqs = [...page.faqs, ...sharedFaqs(lang)];
  const visitHeading = lang === "hi" ? "दुकान पर आइए" : "Visit us";
  const hoursLine =
    lang === "hi"
      ? "हर दिन सुबह 10 बजे से रात 9:30 बजे तक खुला। दमोह में होम डिलीवरी।"
      : visitLine;

  return (
    <article lang={lang} className={`bg-brand-paper text-brand-ink ${lang === "hi" ? "font-hindi" : ""}`}>
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
        <FaqList
          faqs={faqs}
          heading={lang === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "FAQ"}
          className="mt-12"
        />
        <section className="mt-12">
          <h2 className="font-display text-4xl text-brand-ink">{visitHeading}</h2>
          <address className="mt-4 not-italic text-lg leading-8 text-brand-soot">
            {lang === "hi"
              ? "शॉप नंबर 6, आज़ाद मार्केट, घंटा घर, मड़िया पंगरहा, दमोह, मध्य प्रदेश 470661"
              : brand.nap}
            <br />
            {lang === "hi" ? "फ़ोन" : "Phone"}: <a href={brand.phoneHref}>{brand.phone}</a>,{" "}
            <a href={brand.phone2Href}>{brand.phone2}</a>
            {" · "}
            <a href={brand.emailHref}>{brand.email}</a>
            <br />
            {hoursLine}
          </address>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppGroupButton />
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-brand-ink px-5 py-3 text-sm font-bold"
            >
              {lang === "hi" ? "Google Maps पर खोलें" : "Open in Google Maps"}
            </a>
            <ReviewButton />
          </div>
        </section>
      </div>
    </article>
  );
};

export default LandingPage;
