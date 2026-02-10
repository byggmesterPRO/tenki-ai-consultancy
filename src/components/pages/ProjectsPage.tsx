"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Intelligent Document Processing System",
    client: "Financial Services",
    description:
      "Automated the extraction and classification of financial documents using custom-trained NLP models, reducing manual processing time and improving accuracy.",
    technologies: ["GPT-4", "Azure Document Intelligence", "Python", "FastAPI"],
    results: [
      "92% reduction in document processing time",
      "99.3% accuracy in data extraction",
      "ROI achieved in 4 months",
    ],
  },
  {
    title: "AI-Powered Customer Support Platform",
    client: "E-commerce",
    description:
      "Developed an intelligent chatbot system integrated with existing customer service infrastructure, handling tier-1 inquiries and seamlessly escalating complex issues.",
    technologies: ["Claude", "LangChain", "React", "Node.js"],
    results: [
      "65% reduction in support ticket volume",
      "24/7 instant response capability",
      "Customer satisfaction score increased to 4.7/5",
    ],
  },
  {
    title: "Predictive Maintenance Analytics",
    client: "Manufacturing",
    description:
      "Built a machine learning pipeline to predict equipment failures before they occur, enabling proactive maintenance scheduling and reducing costly downtime.",
    technologies: ["TensorFlow", "IoT Integration", "PostgreSQL", "Grafana"],
    results: [
      "40% reduction in unplanned downtime",
      "30% decrease in maintenance costs",
      "Extended equipment lifespan by 18 months",
    ],
  },
  {
    title: "Content Generation & SEO Optimization",
    client: "Digital Marketing Agency",
    description:
      "Created an AI-assisted content workflow that generates high-quality, SEO-optimized articles and social media content while maintaining brand voice consistency.",
    technologies: ["GPT-4", "Anthropic Claude", "Next.js", "Pinecone"],
    results: [
      "5x increase in content output",
      "210% improvement in organic traffic",
      "Content production costs reduced by 60%",
    ],
  },
  {
    title: "Automated Legal Contract Analysis",
    client: "Legal Tech",
    description:
      "Designed an AI system to review, analyze, and flag potential issues in legal contracts, accelerating the due diligence process while maintaining high accuracy standards.",
    technologies: ["Claude", "Azure OpenAI", "TypeScript", "MongoDB"],
    results: [
      "85% faster contract review process",
      "100% clause identification accuracy",
      "Expanded client capacity by 300%",
    ],
  },
  {
    title: "Personalized Learning Platform",
    client: "Education Technology",
    description:
      "Implemented an adaptive learning system that personalizes educational content and pacing based on individual student performance and learning patterns.",
    technologies: ["OpenAI", "Python", "React Native", "PostgreSQL"],
    results: [
      "45% improvement in learning outcomes",
      "80% student engagement rate",
      "Scalable to 50,000+ concurrent users",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-tenki-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Reveal>
          <div className="text-center mb-16">
            <motion.p
              variants={fade}
              className="text-tenki-accent font-sans text-sm uppercase tracking-wider mb-4"
            >
              Projects
            </motion.p>
            <motion.h1
              variants={fade}
              className="text-tenki-text font-serif text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              Our Work
            </motion.h1>
            <motion.p
              variants={fade}
              className="text-tenki-muted font-sans text-lg md:text-xl max-w-3xl mx-auto"
            >
              Discover how we've helped organizations across industries harness
              the power of AI to solve complex challenges and drive measurable
              results.
            </motion.p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <motion.div
                variants={fade}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors duration-300"
              >
                {/* Client Badge */}
                <div className="inline-block bg-tenki-accent/10 border border-tenki-accent/30 rounded-full px-4 py-1 mb-4">
                  <span className="text-tenki-accent font-sans text-xs uppercase tracking-wider">
                    {project.client}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-tenki-text font-serif text-3xl mb-4">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-tenki-muted font-sans text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-tenki-text font-sans text-sm uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/5 border border-white/10 rounded px-3 py-1 text-tenki-muted font-sans text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-tenki-text font-sans text-sm uppercase tracking-wider mb-3">
                    Results & Impact
                  </h3>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="text-tenki-muted font-sans text-sm flex items-start"
                      >
                        <span className="text-tenki-accent mr-2 mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal>
          <motion.div
            variants={fade}
            className="text-center mt-20 p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
          >
            <h2 className="text-tenki-text font-serif text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-tenki-muted font-sans text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage AI to transform your
              business operations and achieve measurable results.
            </p>
            <a
              href="/contact"
              className="inline-block bg-tenki-accent hover:bg-tenki-accent/90 text-tenki-bg font-sans font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}
