import ContactPage from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tenki AI Consultancy",
  description: "Schedule a discovery call with Tenki AI Consultancy.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
