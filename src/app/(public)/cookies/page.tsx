import CookiePolicyPage from "@/components/pages/CookiePolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Tenki AI Consultancy",
  description: "Tenki Consulting cookie policy and information about our use of cookies.",
};

export default function CookiesRoute() {
  return <CookiePolicyPage />;
}
