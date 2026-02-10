import type { Metadata } from "next";
import { Crimson_Pro, Inter, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

const oggBold = localFont({
  src: "../../public/fonts/Ogg Ogg Bold.ttf",
  variable: "--font-ogg-bold",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tenki | AI Consultancy",
  description:
    "Unlocking intelligence. Tenki helps forward-thinking companies build resilience through practical AI integration.",
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
        {children}
      </body>
    </html>
  );
}
