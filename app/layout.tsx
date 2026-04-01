import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://norriture.com"),
  title: "Norriture | Private Dining & Bespoke Catering Experiences",
  description:
    "Luxury private dining and bespoke catering experiences for intimate dinners, premium celebrations, and custom events in homes, villas, rooftops, galleries, and curated spaces.",
  keywords: [
    "private dining",
    "bespoke catering",
    "luxury dining experiences",
    "private chef experiences",
    "premium event catering",
    "intimate dinner catering"
  ],
  openGraph: {
    title: "Norriture | Bespoke Private Dining",
    description:
      "Emotion-led dining experiences designed around your guests, space, and story.",
    url: "https://norriture.com",
    siteName: "Norriture",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Norriture | Bespoke Private Dining",
    description:
      "Private dining, intimate catering, and luxury food-led celebrations tailored to you."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
