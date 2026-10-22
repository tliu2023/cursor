import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "GTLandCards | Cards for Players, Collectors, and Fans",
    template: "%s | GTLandCards",
  },
  description:
    "A player- and collector-run shop for One Piece cards and premium accessories. Competitive play, collections, and community — based in NJ / NYC.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
