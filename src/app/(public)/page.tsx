import Home from "@/components/pages/Home";
import BlogPreview from "@/components/BlogPreview";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default function HomePage() {
  return <Home blogPreview={<BlogPreview />} />;
}
