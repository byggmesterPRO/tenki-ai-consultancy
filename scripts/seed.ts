import { initializeApp, cert, type ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function seed() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12);
  const usersSnapshot = await db
    .collection("users")
    .where("email", "==", "admin@tenki.ai")
    .get();

  let adminId: string;
  if (usersSnapshot.empty) {
    const adminRef = await db.collection("users").add({
      email: "admin@tenki.ai",
      password: hashedPassword,
      name: "Tenki Admin",
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    adminId = adminRef.id;
    console.log("Created admin user: admin@tenki.ai / admin123");
  } else {
    adminId = usersSnapshot.docs[0].id;
    console.log("Admin user already exists");
  }

  // Create categories
  const categories = [
    { name: "AI Insights", slug: "ai-insights" },
    { name: "Case Studies", slug: "case-studies" },
    { name: "Industry Trends", slug: "industry-trends" },
  ];

  const categoryIds: Record<string, string> = {};
  for (const cat of categories) {
    const existing = await db
      .collection("categories")
      .where("slug", "==", cat.slug)
      .get();
    if (existing.empty) {
      const ref = await db.collection("categories").add(cat);
      categoryIds[cat.slug] = ref.id;
      console.log(`Created category: ${cat.name}`);
    } else {
      categoryIds[cat.slug] = existing.docs[0].id;
    }
  }

  // Create tags
  const tags = [
    { name: "Machine Learning", slug: "machine-learning" },
    { name: "Automation", slug: "automation" },
    { name: "Strategy", slug: "strategy" },
    { name: "Data", slug: "data" },
    { name: "Ethics", slug: "ethics" },
  ];

  const tagMap: Record<string, { id: string; name: string; slug: string }> = {};
  for (const tag of tags) {
    const existing = await db
      .collection("tags")
      .where("slug", "==", tag.slug)
      .get();
    if (existing.empty) {
      const ref = await db.collection("tags").add(tag);
      tagMap[tag.slug] = { id: ref.id, ...tag };
      console.log(`Created tag: ${tag.name}`);
    } else {
      tagMap[tag.slug] = { id: existing.docs[0].id, ...tag };
    }
  }

  // Create sample blog posts
  const now = new Date().toISOString();
  const posts = [
    {
      title: "Why Most AI Projects Fail Before They Start",
      slug: "why-most-ai-projects-fail",
      excerpt:
        "The majority of enterprise AI initiatives stall not because of technology limitations, but because of misaligned expectations and inadequate preparation.",
      content: `# Why Most AI Projects Fail Before They Start

The statistics are sobering: according to recent industry research, roughly 85% of AI projects fail to deliver on their initial promises. But the reasons behind these failures are rarely technical.

## The Expectation Gap

Most organizations approach AI with a fundamental misconception — they see it as a product to be purchased rather than a capability to be built. This leads to:

- **Unrealistic timelines**: Expecting production-ready AI in weeks, not months
- **Misaligned goals**: Pursuing AI for its own sake rather than solving specific business problems
- **Underestimated complexity**: Failing to account for data quality, integration, and change management

## The Data Foundation Problem

Before any model can be trained, you need clean, structured, and accessible data. Most enterprises discover that their data is:

1. Siloed across departments
2. Inconsistently formatted
3. Missing critical metadata
4. Subject to privacy constraints they hadn't considered

## A Better Approach

At Tenki, we start every engagement with a thorough discovery phase. We spend two weeks understanding your data landscape before writing a single line of model code. This upfront investment consistently saves months of downstream iteration.

> "The best time to discover your data quality issues is before you've committed to an AI timeline." — Tenki Philosophy

## Key Takeaways

- Start with the business problem, not the technology
- Invest in data infrastructure before model development
- Set realistic timelines that include discovery and iteration
- Build internal capability alongside external solutions

The organizations that succeed with AI are those that treat it as infrastructure, not magic.`,
      coverImage: null,
      published: true,
      publishedAt: now,
      authorId: adminId,
      authorName: "Tenki Admin",
      categoryId: categoryIds["ai-insights"],
      categoryName: "AI Insights",
      categorySlug: "ai-insights",
      tags: [tagMap["strategy"], tagMap["data"]],
      metaTitle: "Why Most AI Projects Fail Before They Start | Tenki Blog",
      metaDescription:
        "85% of AI projects fail. Learn the real reasons behind enterprise AI failures and how to avoid them.",
      createdAt: now,
      updatedAt: now,
    },
    {
      title: "The Automation Paradox: Why Doing Less Delivers More",
      slug: "automation-paradox",
      excerpt:
        "Counter-intuitively, the most successful automation strategies focus on augmenting human decision-making rather than replacing it entirely.",
      content: `# The Automation Paradox: Why Doing Less Delivers More

There's a persistent myth in enterprise technology: that the goal of automation is to remove humans from the equation entirely. Our experience across dozens of implementations tells a different story.

## The Full Automation Trap

Companies that pursue end-to-end automation often discover that:

- Edge cases multiply faster than they can be handled
- Customer satisfaction drops when human touch is removed
- Employee morale suffers when people feel replaced rather than empowered

## The Augmentation Model

The most successful AI implementations we've delivered follow a different pattern:

### 1. Automate the Mundane
Remove repetitive, low-judgment tasks that consume your team's energy without engaging their expertise.

### 2. Augment Decisions
Provide your team with AI-powered insights and recommendations, but keep humans in the decision loop for anything with significant consequences.

### 3. Elevate the Role
Use the freed capacity to move your team toward higher-value work: strategy, relationship building, creative problem-solving.

## Real Results

One of our clients, a Nordic logistics company, saw these results after implementing our augmentation-first approach:

| Metric | Before | After |
|--------|--------|-------|
| Processing time | 4.5 hours | 45 minutes |
| Error rate | 12% | 2.1% |
| Employee satisfaction | 3.2/5 | 4.6/5 |

The key insight: the 2.1% error rate was *lower* than full automation would have achieved, because humans caught edge cases that the model missed.

## The Tenki Approach

We design every system with a clear human-AI boundary. Our philosophy is simple: automate where machines excel, augment where humans excel, and never confuse the two.`,
      coverImage: null,
      published: true,
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      authorId: adminId,
      authorName: "Tenki Admin",
      categoryId: categoryIds["ai-insights"],
      categoryName: "AI Insights",
      categorySlug: "ai-insights",
      tags: [tagMap["automation"], tagMap["strategy"]],
      metaTitle: null,
      metaDescription: null,
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      title: "Building Ethical AI: A Practical Framework",
      slug: "building-ethical-ai-framework",
      excerpt:
        "Ethics in AI isn't just a compliance checkbox — it's a competitive advantage. Here's our practical framework for building responsible AI systems.",
      content: `# Building Ethical AI: A Practical Framework

AI ethics has moved from academic discussion to boardroom priority. But most frameworks remain abstract and difficult to implement. Here's how we make ethics actionable.

## The Three Pillars

### 1. Transparency
Every AI system should be explainable to its stakeholders. This doesn't mean every user needs to understand neural network architectures — it means:

- **Decision explanations**: Users can understand why the AI made a specific recommendation
- **Data provenance**: Clear documentation of what data trains the model
- **Limitation disclosure**: Honest communication about what the AI cannot do

### 2. Fairness
Bias in AI systems isn't a bug — it's an inherited feature of biased training data. We address this through:

- Regular bias audits across demographic dimensions
- Diverse testing panels for model evaluation
- Continuous monitoring of outcome distributions in production

### 3. Accountability
When an AI system makes an error, there must be a clear chain of responsibility:

- Defined escalation paths for AI-related incidents
- Regular model performance reviews
- Human override capabilities for all automated decisions

## Implementation Checklist

- [ ] Document all training data sources and preprocessing steps
- [ ] Implement model explainability tools (SHAP, LIME, or similar)
- [ ] Conduct pre-deployment bias assessment
- [ ] Create monitoring dashboards for fairness metrics
- [ ] Establish incident response procedures
- [ ] Schedule quarterly ethics reviews

## Why This Matters for Business

Organizations with strong AI ethics practices see:
- **Higher adoption rates**: Employees trust and use ethical AI systems more
- **Reduced regulatory risk**: Proactive compliance reduces legal exposure
- **Better public perception**: Customers increasingly value responsible technology

Ethics isn't a constraint on innovation — it's the foundation of sustainable innovation.`,
      coverImage: null,
      published: true,
      publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      authorId: adminId,
      authorName: "Tenki Admin",
      categoryId: categoryIds["industry-trends"],
      categoryName: "Industry Trends",
      categorySlug: "industry-trends",
      tags: [tagMap["ethics"], tagMap["strategy"], tagMap["machine-learning"]],
      metaTitle: null,
      metaDescription: null,
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  for (const post of posts) {
    const existing = await db
      .collection("posts")
      .where("slug", "==", post.slug)
      .get();
    if (existing.empty) {
      await db.collection("posts").add(post);
      console.log(`Created post: ${post.title}`);
    } else {
      console.log(`Post already exists: ${post.title}`);
    }
  }

  console.log("\nSeeding complete!");
  console.log("Admin login: admin@tenki.ai / admin123");
}

seed().catch(console.error);
