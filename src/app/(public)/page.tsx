import Home from "@/components/pages/Home";
import BlogPreview from "@/components/BlogPreview";

export default function HomePage() {
  return <Home blogPreview={<BlogPreview />} />;
}
