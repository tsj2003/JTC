import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Source_Sans_3, Teko } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import "svgmap/dist/svgMap.min.css";
import SessionProvider from "@/utils/SessionProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/Providers";
import SessionTimeoutWrapper from "@/components/SessionTimeoutWrapper";
import { brand } from "@/lib/brand";

const display = Teko({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-hindi",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Electrical Store in Damoh`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#C45C26",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <body className={`${display.variable} ${body.variable} ${hindi.variable} font-sans bg-brand-paper text-brand-ink antialiased`}>
        <SessionProvider session={session}>
          <SessionTimeoutWrapper />
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
