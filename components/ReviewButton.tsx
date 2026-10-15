import { brand } from "@/lib/brand";

const ReviewButton = ({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) => {
  const tone =
    variant === "dark"
      ? "border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-ink"
      : "border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-brand-cream";
  return (
    <a
      href={brand.googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center border px-5 py-3 text-center text-sm font-bold ${tone} ${className}`}
    >
      {brand.googleReviewLabel}
    </a>
  );
};

export default ReviewButton;
