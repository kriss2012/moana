import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020e1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "MOANA | The Ocean Is Calling — Cinematic Immersive Experience",
  description:
    "An extraordinary interactive journey beyond the horizon. Explore the legendary voyage of Moana of Motunui, the sacred Heart of Te Fiti, ancient Polynesian wayfinding, and oceanic myth.",
  keywords: [
    "Moana",
    "Wayfinding",
    "Motunui",
    "Te Fiti",
    "Maui",
    "Polynesian Voyaging",
    "Interactive Ocean Experience",
    "Cinematic Website",
  ],
  authors: [{ name: "Wayfinder Creative Studio" }],
  openGraph: {
    title: "MOANA | The Ocean Is Calling",
    description:
      "A cinematic interactive storytelling experience across the vast Pacific ocean. Step into ancient voyaging lore, island landscapes, and the myth of Te Fiti.",
    url: "https://moana-pi.vercel.app",
    siteName: "MOANA Cinematic Experience",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOANA | The Ocean Is Calling",
    description: "An extraordinary journey beyond the horizon.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${cinzel.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#020e1a] text-slate-100 antialiased selection:bg-[#00d4aa]/30 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
