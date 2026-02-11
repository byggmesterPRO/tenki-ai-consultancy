import type { Metadata } from "next";
import { Crimson_Pro, Inter, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import favicon16 from "@/assets/favicons/favicon-16x16.png";
import favicon32 from "@/assets/favicons/favicon-32x32.png";
import appleTouchIcon from "@/assets/favicons/apple-touch-icon.png";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const oggBold = localFont({
  src: "../assets/fonts/ogg-bold.ttf",
  variable: "--font-ogg-bold",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tenki | AI Consultancy",
  description:
    "Unlocking intelligence. Tenki helps forward-thinking companies build resilience through practical AI integration.",
  icons: {
    icon: [
      { url: favicon16.src, sizes: "16x16", type: "image/png" },
      { url: favicon32.src, sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: appleTouchIcon.src, sizes: "180x180", type: "image/png" },
    ],
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
      className={`${crimsonPro.variable} ${inter.variable} ${instrumentSerif.variable} ${oggBold.variable}`}
    >
      <body className="font-sans antialiased text-tenki-text bg-tenki-bg selection:bg-tenki-accent/20 selection:text-tenki-text">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
