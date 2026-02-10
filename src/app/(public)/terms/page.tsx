import TermsPage from "@/components/pages/TermsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Tenki AI Consultancy",
  description: "Tenki Consulting terms of service and legal information.",
};

export default function TermsRoute() {
  return <TermsPage />;
}
