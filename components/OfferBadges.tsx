import { enOfferBadge, hiOfferBadge } from "@/lib/offer-copy";

const OfferBadges = ({ lang }: { lang: "en" | "hi" | "both" }) => {
  return (
    <div className="flex flex-col gap-2 text-sm font-semibold leading-6">
      {lang === "en" || lang === "both" ? <p>{enOfferBadge}</p> : null}
      {lang === "hi" || lang === "both" ? (
        <p lang="hi" className="font-hindi">
          {hiOfferBadge}
        </p>
      ) : null}
    </div>
  );
};

export default OfferBadges;
