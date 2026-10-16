import { brand } from "@/lib/brand";
import { SITE_URL } from "@/lib/seo";
import Link from "next/link";

const englishTitle = "Since 1960: the story of Juneja Trading Corporation, Damoh";

const events = {
  en: [
    {
      when: "1960",
      text: "Juneja Trading Corporation has served Damoh since 1960. That year is the start of the story the shop publishes. The exact day in 1960 is not stated on this page.",
    },
    {
      when: "The shop people visit",
      text: `The address is ${brand.address}. Earlier shop names or earlier addresses, if there were any, are not published here.`,
    },
    {
      when: "The counter today",
      text: "The shop sells electronics and electricals: LED TV, fridge, washing machine, air conditioner, sound, solar, torch, fans, lighting and fittings, plus kisan pumps and festive lights. It sells genuine products with brand warranty. Trademarks belong to their owners. Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. Many small repairs are done on the spot.",
    },
    {
      when: "Hours",
      text: `The shop is open ${brand.hours}. Phones: ${brand.phone} and ${brand.phone2}.`,
    },
  ],
  hi: [
    {
      when: "1960",
      text: "जुनेजा ट्रेडिंग कारपोरेशन 1960 से दमोह की सेवा कर रहा है। कहानी इसी साल से शुरू होती है। 1960 की ठीक तारीख इस पेज पर नहीं लिखी गई है।",
    },
    {
      when: "जिस दुकान पर लोग आते हैं",
      text: `पता: ${brand.address}. इससे पहले कोई और नाम या कोई और पता रहा हो, तो वह इस पेज पर प्रकाशित नहीं है।`,
    },
    {
      when: "आज का काउंटर",
      text: "दुकान इलेक्ट्रॉनिक्स और इलेक्ट्रिकल सामान बेचती है: एलईडी टीवी, फ्रिज, वॉशिंग मशीन, एयर कंडीशनर, साउंड, सोलर, टॉर्च, पंखे, लाइटिंग और फिटिंग, साथ में किसान पंप और त्योहार की लाइट। असली उत्पाद, ब्रांड वारंटी के साथ। ट्रेडमार्क उनके मालिकों के हैं। Bajaj Finance EMI available. EMI subject to Bajaj Finance eligibility and terms. कई छोटी रिपेयर मौके पर होती है।",
    },
    {
      when: "समय",
      text: `दुकान ${brand.hours} खुली रहती है। फोन: ${brand.phone} और ${brand.phone2}.`,
    },
  ],
} as const;

const unknown = {
  en: [
    "The exact date in 1960 when the shop opened",
    "Names of the people who opened it, and later family names",
    "Earlier shop names or earlier addresses",
    "The year a particular brand was first kept on the shelf",
  ],
  hi: [
    "1960 में दुकान किस तारीख को खुली",
    "दुकान खोलने वालों के नाम, और बाद के परिवार के नाम",
    "पहले का दुकान का नाम या पहले का पता",
    "कोई ब्रांड पहली बार किस साल काउंटर पर आया",
  ],
} as const;

const ShopHistory = ({ lang }: { lang: "en" | "hi" }) => {
  const hi = lang === "hi";
  const title = hi ? "1960 से: जुनेजा ट्रेडिंग कारपोरेशन, दमोह की कहानी" : englishTitle;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    inLanguage: hi ? "hi" : "en",
    about: { "@id": `${SITE_URL}/#store` },
    author: { "@id": `${SITE_URL}/#store` },
    mainEntityOfPage: `${SITE_URL}${hi ? "/hi/history" : "/history"}`,
  };

  return (
    <article lang={lang} className={`bg-brand-paper text-brand-ink ${hi ? "font-hindi" : ""}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="bg-brand-ink px-4 py-12 text-brand-cream sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-amber">
            {brand.name} · {brand.city}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">{title}</h1>
          {hi ? <p className="mt-4 text-xl text-brand-amber">{englishTitle}</p> : (
            <p lang="hi" className="mt-4 font-hindi text-xl text-brand-amber">
              1960 से: जुनेजा ट्रेडिंग कारपोरेशन, दमोह की कहानी
            </p>
          )}
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-lg leading-8 text-brand-soot">
          {hi
            ? `${brand.nameHi} (${brand.name}) 1960 से दमोह में है। दुकान ${brand.address} पर है।`
            : `${brand.name} (${brand.nameHi}) has served Damoh since 1960. The shop is at ${brand.address}.`}
        </p>
        <h2 className="mt-10 font-display text-4xl">{hi ? "समयरेखा" : "Timeline"}</h2>
        <ol className="mt-6 space-y-6 border-l-4 border-brand-copper pl-6">
          {events[lang].map((event) => (
            <li key={event.when}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-copper">{event.when}</p>
              <p className="mt-2 text-lg leading-8">{event.text}</p>
            </li>
          ))}
        </ol>
        <h2 className="mt-12 font-display text-4xl">
          {hi ? "इस पेज पर जो नहीं लिखा गया" : "Not filled in on this page"}
        </h2>
        <p className="mt-4 text-lg leading-8 text-brand-soot">
          {hi
            ? "नीचे की बातें दुकान की कहानी का हिस्सा हो सकती हैं, पर वे यहाँ प्रकाशित नहीं हैं। खाली जगह को अंदाज़े से नहीं भरा गया।"
            : "These facts may belong to the shop's story. They are not published here, and this page does not guess them."}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-8">
          {unknown[lang].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-lg leading-8">
          {hi
            ? `पूछना हो तो काउंटर पर आइए, या ${brand.phone} / ${brand.phone2} पर कॉल करें।`
            : `Ask at the counter, or call ${brand.phone} or ${brand.phone2}.`}
        </p>
        <p className="mt-10 flex flex-wrap gap-4">
          <Link href={hi ? "/hi" : "/"} className="font-semibold text-brand-copper hover:underline">
            {hi ? "हिन्दी मुखपृष्ठ" : "Home"}
          </Link>
          <Link href="/about" className="font-semibold text-brand-copper hover:underline">
            {hi ? "दुकान के बारे में" : "About the shop"}
          </Link>
          <Link href={hi ? "/history" : "/hi/history"} className="font-semibold text-brand-copper hover:underline">
            {hi ? "English" : "हिन्दी"}
          </Link>
        </p>
      </div>
    </article>
  );
};

export default ShopHistory;
