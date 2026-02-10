import PhilosophyPage from "@/components/pages/PhilosophyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy | Tenki AI Consultancy",
  description: "Our philosophy on AI: human-centric, transparent, sustainable innovation.",
};

export default function PhilosophyRoute() {
  return <PhilosophyPage />;
}
