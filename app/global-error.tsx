"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F6F0E6] p-8 text-[#1C1914]">
        <h1 className="text-2xl font-bold">Juneja Trading Corporation</h1>
        <p className="mt-3">The shop page failed to load. Please try again.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 bg-[#C45C26] px-5 py-2 font-semibold text-white"
        >
          Retry
        </button>
        <p className="mt-6 text-sm">
          Call{" "}
          <a className="underline" href="tel:+919926759557">
            +91 99267 59557
          </a>
        </p>
      </body>
    </html>
  );
}
