export default function HindiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.lang='hi'",
        }}
      />
      {children}
    </>
  );
}
