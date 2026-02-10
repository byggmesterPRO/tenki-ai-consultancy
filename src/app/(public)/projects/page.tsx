import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Tenki AI Consultancy",
  description: "Case studies and projects showcasing our AI integration and automation work.",
};

export default function Projects() {
  return <ProjectsPage />;
}
