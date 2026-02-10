import type { Metadata } from "next";
import { Crimson_Pro, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

// For the Ogg font: place Ogg-Bold.woff2 in public/assets/fonts/
// The CSS variable --font-ogg will use Instrument Serif as fallback
const oggFallbackVar = "--font-ogg";

export const metadata: Metadata = {
  title: "Tenki | AI Consultancy",
  description:
    "Tenki helps forward-thinking companies build resilience through practical AI integration. We replace hype with systems that work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Ogg';
                src: url('/assets/fonts/Ogg-Bold.woff2') format('woff2'),
                     url('/assets/fonts/Ogg-Bold.woff') format('woff');
                font-weight: 700;
                font-style: normal;
                font-display: swap;
              }
              :root {
                ${oggFallbackVar}: 'Ogg', var(--font-instrument), serif;
              }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-tenki-text bg-tenki-bg selection:bg-tenki-accent/20 selection:text-tenki-text">
        {children}
      </body>
    </html>
  );
}
