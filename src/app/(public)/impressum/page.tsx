import ImpressumPage from "@/components/pages/ImpressumPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Tenki AI Consultancy",
  description: "Legal information for Tenki Consulting GmbH.",
};

export default function ImpressumRoute() {
  return <ImpressumPage />;
}
