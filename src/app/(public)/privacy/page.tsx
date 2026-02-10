import PrivacyPage from "@/components/pages/PrivacyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tenki AI Consultancy",
  description: "Tenki Consulting privacy policy and data protection information.",
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}
