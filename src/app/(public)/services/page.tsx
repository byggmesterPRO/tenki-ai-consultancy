import ServicesPage from "@/components/pages/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tenki AI Consultancy",
  description: "Precision tools for modern challenges: Workflow Architecture, Custom AI Agents, Data Intelligence, Governance & Security.",
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
