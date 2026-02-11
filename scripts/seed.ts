import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import bcrypt from "bcryptjs";
import { readFileSync } from "fs";
import { join } from "path";

const serviceAccount = JSON.parse(
  readFileSync(join(process.cwd(), "straight-data-firebase-adminsdk-fbsvc-00491c0fd2.json"), "utf8")
);

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function seed() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("Tenki@2026!", 12);
  const usersSnapshot = await db
    .collection("users")
    .where("email", "==", "einar.k.holt@gmail.com")
    .get();

  let adminId: string;
  if (usersSnapshot.empty) {
    const adminRef = await db.collection("users").add({
      email: "einar.k.holt@gmail.com",
      password: hashedPassword,
      name: "Einar Holt",
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    adminId = adminRef.id;
    console.log("Created admin user: einar.k.holt@gmail.com / Tenki@2026!");
  } else {
    adminId = usersSnapshot.docs[0].id;
    console.log("Admin user already exists");
  }

  // Delete old posts, categories, tags
  const oldPosts = await db.collection("posts").get();
  for (const doc of oldPosts.docs) {
    await doc.ref.delete();
  }
  const oldCats = await db.collection("categories").get();
  for (const doc of oldCats.docs) {
    await doc.ref.delete();
  }
  const oldTags = await db.collection("tags").get();
  for (const doc of oldTags.docs) {
    await doc.ref.delete();
  }
  console.log("Cleared old data");

  // Create categories
  const categories = [
    { name: "Research", slug: "research" },
    { name: "Strategy", slug: "strategy" },
    { name: "Engineering", slug: "engineering" },
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
    { name: "Productivity", slug: "productivity" },
    { name: "ROI", slug: "roi" },
    { name: "Infrastructure", slug: "infrastructure" },
    { name: "Knowledge Work", slug: "knowledge-work" },
    { name: "Developer Tools", slug: "developer-tools" },
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

  // Create blog posts matching homepage evidence section
  const posts = [
    {
      title: "How AI is Reshaping Knowledge Work",
      slug: "how-ai-is-reshaping-knowledge-work",
      excerpt:
        "MIT researchers found that AI-assisted workers complete writing tasks 40% faster. Here's what that means for your team.",
      content: `# How AI is Reshaping Knowledge Work

A landmark study from MIT's Department of Economics has quantified something many of us have felt intuitively: AI is fundamentally changing how knowledge work gets done. Their findings — that AI-assisted workers complete writing tasks **40% faster** with **18% higher quality** — deserve a closer look.

## The MIT Study: What They Found

The researchers gave 444 college-educated professionals a series of writing tasks. Half used ChatGPT; half didn't. The results were striking:

- **40% faster completion** for AI-assisted workers
- **18% higher quality** as rated by blind evaluators
- The biggest gains came from **below-average performers**, who saw their output rise to match their higher-performing peers

This last point is crucial. AI isn't just making good workers better — it's raising the floor across entire teams.

## What This Means for Your Organisation

### The Productivity Dividend

If your team of 50 knowledge workers each saves just 2 hours per week through AI assistance, that's **5,200 hours per year** returned to higher-value work. At an average loaded cost of €75/hour, that's nearly **€400,000 in recovered capacity** — without hiring a single person.

### The Quality Multiplier

The MIT study found that quality improvements were most pronounced in:

- **First drafts**: AI helps overcome the blank page problem
- **Structured analysis**: Organising complex information into coherent frameworks
- **Editing and refinement**: Catching errors and improving clarity

### The Equity Effect

Perhaps most importantly, AI tools are democratising expertise. Junior team members can produce work that previously required years of experience, while senior staff are freed to focus on strategy and relationship-building.

## How We Approach This at Tenki

We've seen these findings reflected across our client engagements. A Nordic professional services firm we worked with saw:

| Metric | Before AI Integration | After |
|--------|----------------------|-------|
| Report generation time | 6 hours | 2.5 hours |
| Client revision requests | 3.2 average | 1.4 average |
| Employee satisfaction with tools | 2.8/5 | 4.3/5 |

The key wasn't just deploying AI tools — it was redesigning workflows to leverage AI where it excels while preserving the human judgment that clients value.

## Getting Started

If you're considering AI integration for knowledge work, start here:

1. **Audit your workflows**: Identify the 20% of tasks that consume 80% of your team's time
2. **Start with writing and analysis**: These are the most proven AI use cases
3. **Measure before and after**: You can't improve what you don't measure
4. **Invest in training**: Tool access without training delivers a fraction of the potential value

> "The question isn't whether AI will change knowledge work — it's whether you'll lead the change or react to it." — Tenki Philosophy

## Further Reading

- [MIT Economics: Experimental Evidence on the Productivity Effects of Generative AI](https://economics.mit.edu/research)
- [MDPI Sustainability: AI Adoption and Firm-Level Productivity](https://www.mdpi.com/journal/sustainability)
- [PwC Global AI Barometer](https://www.pwc.com/gx/en/issues/data-and-analytics/artificial-intelligence.html)

The evidence is clear. The organisations that move now will compound their advantage. Those that wait will find themselves competing against teams that are 40% more productive.`,
      coverImage: null,
      published: true,
      publishedAt: "2025-01-15T09:00:00.000Z",
      authorId: adminId,
      authorName: "Einar Holt",
      categoryId: categoryIds["research"],
      categoryName: "Research",
      categorySlug: "research",
      tags: [tagMap["productivity"], tagMap["knowledge-work"]],
      metaTitle: "How AI is Reshaping Knowledge Work | Tenki Blog",
      metaDescription:
        "MIT researchers found AI-assisted workers complete writing tasks 40% faster with 18% higher quality. Here's what that means for your organisation.",
      createdAt: "2025-01-15T09:00:00.000Z",
      updatedAt: "2025-01-15T09:00:00.000Z",
    },
    {
      title: "The Real ROI of AI Integration",
      slug: "the-real-roi-of-ai-integration",
      excerpt:
        "Beyond the hype: practical frameworks for measuring the actual return on your AI investments.",
      content: `# The Real ROI of AI Integration

Every executive considering AI investment asks the same question: *"What's the actual return?"* The answer, backed by research from MDPI Sustainability and PwC, is more compelling than most vendors will tell you — but it requires the right measurement framework.

## The Numbers That Matter

### Firm-Level Productivity

A comprehensive study published in MDPI Sustainability found that a **1% increase in AI adoption** at the firm level correlated with a **14.2% rise in total factor productivity**. That's not a typo — the leverage effect of AI is extraordinary when implemented correctly.

But here's the catch: the study also found that poorly implemented AI had *negative* productivity effects. The difference between the winners and losers wasn't the technology — it was the integration strategy.

### Industry-Level Impact

PwC's Global AI Barometer revealed that industries with the highest AI exposure experienced up to **4× higher productivity growth** and significantly higher revenue per employee. The sectors leading this transformation include:

- **Financial services**: Automated risk assessment and fraud detection
- **Healthcare**: Diagnostic support and patient flow optimisation
- **Professional services**: Document analysis and knowledge management
- **Manufacturing**: Predictive maintenance and quality control

### Developer Productivity

GitHub's research on Copilot — one of the most studied AI tools in production — found that AI code generation raised:

- **Project productivity by 6.5%**
- **Individual developer output by 5.5%**

These gains compound. A team of 20 developers gaining 6.5% productivity is equivalent to hiring 1.3 additional developers — without the recruitment, onboarding, or management overhead.

## Why Most ROI Calculations Are Wrong

Traditional ROI frameworks fail with AI because they measure the wrong things:

### What Companies Measure (Wrong)
- Cost of AI tools vs. cost savings
- Time saved on individual tasks
- Number of AI features deployed

### What Actually Drives ROI (Right)
- **Decision quality improvement**: Are better decisions being made faster?
- **Capacity unlocked**: What higher-value work are people doing with freed time?
- **Error reduction**: What's the cost of mistakes that AI prevents?
- **Speed to market**: How much faster can you ship, respond, adapt?

## A Practical ROI Framework

Here's the framework we use with Tenki clients:

### 1. Baseline (Week 1-2)
Measure current state across three dimensions:
- **Time**: How long do key workflows take?
- **Quality**: What's the error/revision rate?
- **Capacity**: How much time is spent on low-value repetitive work?

### 2. Pilot (Week 3-6)
Deploy AI in one high-impact workflow with clear metrics:
- Choose a process that's repeated frequently
- Ensure you have enough volume for statistical significance
- Measure the same three dimensions

### 3. Calculate True ROI
Use this formula:

**True ROI = (Time Saved × Hourly Cost) + (Quality Improvement × Error Cost) + (Revenue from Unlocked Capacity) - (AI Investment)**

### 4. Scale What Works (Week 7+)
Apply learnings to additional workflows, tracking cumulative impact.

## What We've Seen in Practice

Across our client engagements, organisations that follow this framework typically see:

- **3-6 month payback period** on AI investments
- **200-400% ROI** within the first year
- **Compound gains** as teams become more sophisticated AI users

The organisations that struggle are those that skip the baseline measurement or try to transform everything at once.

## The Bottom Line

AI ROI is real, substantial, and measurable — if you approach it correctly. The research from MIT, MDPI, PwC, and GitHub all point to the same conclusion: strategic AI integration delivers transformative returns.

But "strategic" is the operative word. The 14.2% productivity gain doesn't come from buying software. It comes from rethinking how work gets done.

> "ROI isn't a number you calculate after deployment. It's a capability you design into the integration from day one." — Tenki Methodology`,
      coverImage: null,
      published: true,
      publishedAt: "2024-12-10T09:00:00.000Z",
      authorId: adminId,
      authorName: "Einar Holt",
      categoryId: categoryIds["strategy"],
      categoryName: "Strategy",
      categorySlug: "strategy",
      tags: [tagMap["roi"], tagMap["productivity"]],
      metaTitle: "The Real ROI of AI Integration | Tenki Blog",
      metaDescription:
        "Beyond the hype: practical frameworks for measuring the actual return on your AI investments, backed by research from MIT, PwC, and MDPI.",
      createdAt: "2024-12-10T09:00:00.000Z",
      updatedAt: "2024-12-10T09:00:00.000Z",
    },
    {
      title: "Building AI Systems That Last",
      slug: "building-ai-systems-that-last",
      excerpt:
        "Why sustainable AI infrastructure matters more than rapid deployment, and how to get it right from day one.",
      content: `# Building AI Systems That Last

The AI industry has a dirty secret: most production AI systems are technical debt factories. They're built fast, deployed faster, and abandoned when they inevitably break. Here's how to build AI infrastructure that scales sustainably.

## The Deployment Trap

GitHub's Copilot research offers an instructive parallel. The **6.5% project productivity gain** they measured didn't come from the AI alone — it came from thoughtful integration into existing developer workflows. The tool was designed to *fit* how developers work, not to replace their process.

Most enterprise AI deployments get this backwards. They build the model first and figure out integration later. The result is brittle systems that work in demos but fail in production.

## The Three Layers of Sustainable AI

### Layer 1: Data Infrastructure

Your AI is only as good as your data pipeline. Before writing a single line of model code, ensure you have:

- **Reliable data ingestion**: Automated, monitored, and fault-tolerant
- **Data quality checks**: Automated validation at every stage
- **Version control for data**: Track what data trained which model
- **Privacy compliance**: GDPR/regulatory requirements built in from the start, not bolted on later

### Layer 2: Model Operations (MLOps)

Production AI requires the same rigour as production software:

- **Automated retraining pipelines**: Models degrade over time as data distributions shift
- **A/B testing infrastructure**: Never deploy a new model without comparing it to the current one
- **Monitoring and alerting**: Track model performance in real-time, not quarterly
- **Rollback capability**: If a model degrades, revert to the previous version instantly

### Layer 3: Human Integration

The PwC Global AI Barometer found that the **4× productivity multiplier** in high-AI-exposure industries wasn't driven by automation alone. It was driven by how well AI systems were integrated into human decision-making:

- **Clear handoff points**: Where does AI output end and human judgment begin?
- **Feedback loops**: How do human corrections improve the model over time?
- **Training and adoption**: Do people actually use the system, or work around it?
- **Escalation paths**: What happens when the AI is wrong?

## Architecture Patterns That Scale

### Pattern 1: The Recommendation Engine
AI suggests, humans decide. This is the safest and most common pattern for initial deployments.

**Example**: An AI system that flags potential contract risks for legal review, rather than auto-rejecting contracts.

### Pattern 2: The Automation Pipeline
AI handles routine cases end-to-end, with human review for exceptions.

**Example**: Invoice processing where standard invoices are auto-approved, but unusual amounts or new vendors are routed for review.

### Pattern 3: The Intelligence Layer
AI enhances existing tools with contextual insights, without changing the core workflow.

**Example**: A CRM that surfaces relevant case studies and talking points before a sales call, based on the prospect's industry and recent activity.

## The Maintenance Equation

Here's a formula we share with every client:

**Annual AI Maintenance Cost = 15-25% of Initial Development Cost**

If you built a €200,000 AI system, budget €30,000-50,000 per year for:
- Model retraining and monitoring
- Data pipeline maintenance
- Feature updates and bug fixes
- Infrastructure scaling

Companies that don't budget for maintenance find their AI systems degrading within 6-12 months, eventually becoming more harmful than helpful.

## Our Engineering Principles

At Tenki, every system we build follows these principles:

1. **Observable**: If you can't measure it, you can't maintain it
2. **Modular**: Replace any component without rebuilding the whole system
3. **Documented**: The next engineer (or your internal team) should be able to understand and maintain it
4. **Tested**: Automated tests for data quality, model performance, and integration points
5. **Reversible**: Every deployment can be rolled back in minutes

## Getting It Right From Day One

The difference between an AI system that delivers value for years and one that becomes shelfware in months comes down to engineering discipline:

- **Start with monitoring**: Build observability before features
- **Automate everything**: Manual processes are the enemy of reliability
- **Plan for failure**: Every system will fail; design for graceful degradation
- **Document decisions**: Future you (or your team) will thank present you

> "The best AI system isn't the most sophisticated model. It's the one that's still running correctly twelve months after deployment." — Tenki Engineering

Building AI that lasts isn't harder than building AI that doesn't. It just requires doing the boring things well, from the very beginning.`,
      coverImage: null,
      published: true,
      publishedAt: "2024-11-05T09:00:00.000Z",
      authorId: adminId,
      authorName: "Einar Holt",
      categoryId: categoryIds["engineering"],
      categoryName: "Engineering",
      categorySlug: "engineering",
      tags: [tagMap["infrastructure"], tagMap["developer-tools"]],
      metaTitle: "Building AI Systems That Last | Tenki Blog",
      metaDescription:
        "Why sustainable AI infrastructure matters more than rapid deployment, and how to get it right from day one.",
      createdAt: "2024-11-05T09:00:00.000Z",
      updatedAt: "2024-11-05T09:00:00.000Z",
    },
  ];

  for (const post of posts) {
    await db.collection("posts").add(post);
    console.log(`Created post: ${post.title}`);
  }

  console.log("\nSeeding complete!");
  console.log("Admin login: einar.k.holt@gmail.com / Tenki@2026!");
}

seed().catch(console.error);
