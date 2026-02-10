import ApproachPage from "@/components/pages/ApproachPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach | Tenki AI Consultancy",
  description: "The Tenki Method: A disciplined four-phase framework for AI integration.",
};

export default function ApproachRoute() {
  return <ApproachPage />;
}
