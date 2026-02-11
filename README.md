# Tenki AI Consultancy

A modern, server-rendered website for **Tenki AI Consultancy** — featuring a blog CMS with admin panel, built with Next.js 15 and Firebase.

**Live:** [tenki.no](https://tenki.no)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router, Server Components) |
| **Database** | Cloud Firestore via Firebase Admin SDK |
| **Auth** | NextAuth.js v5 (Credentials provider, JWT sessions) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion, Lottie (DotLottie) |
| **Blog** | Markdown with DOMPurify sanitization |
| **Testing** | Playwright (E2E) |
| **Deployment** | Firebase App Hosting (Cloud Run + CDN) |

## Project Structure

```
src/
├── app/
│   ├── (public)/            # Public pages (header/footer layout)
│   │   ├── blog/            # Blog listing & individual posts
│   │   ├── services/        # Services overview
│   │   ├── approach/        # Methodology
│   │   ├── philosophy/      # Company philosophy
│   │   ├── projects/        # Project showcase
│   │   ├── contact/         # Contact page
│   │   ├── privacy/         # Privacy policy
│   │   ├── terms/           # Terms of service
│   │   ├── cookies/         # Cookie policy
│   │   └── impressum/       # Legal impressum
│   ├── admin/               # Admin panel (JWT-protected)
│   │   ├── login/           # Admin login
│   │   ├── posts/           # Post CRUD
│   │   └── categories/      # Category management
│   └── api/                 # REST API routes
│       ├── auth/            # NextAuth endpoints
│       ├── posts/           # Blog post API
│       ├── categories/      # Category API
│       ├── tags/            # Tag API
│       └── upload/          # Image upload (max 5 MB)
├── components/
│   ├── admin/               # Admin UI components
│   ├── blog/                # Blog cards, tags
│   ├── pages/               # Page-level client components
│   └── ui/                  # Shared UI (Reveal, etc.)
├── lib/
│   ├── auth.ts              # NextAuth configuration
│   ├── db.ts                # Firestore data access layer
│   ├── firebase-admin.ts    # Firebase Admin SDK initialisation
│   ├── firebase.ts          # Client-side Firebase config
│   ├── markdown.ts          # Markdown rendering + sanitisation
│   └── validators.ts        # Zod validation schemas
└── types/                   # TypeScript interfaces
```

## Getting Started

### Prerequisites

- **Node.js 20+**
- A **Firebase project** with Firestore enabled
- A **Firebase service account JSON** file placed in the project root (gitignored by default)

### Local Development

```bash
# 1. Clone
git clone https://github.com/byggmesterPRO/tenki-ai-consultancy.git
cd tenki-ai-consultancy

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your Firebase project ID and a NEXTAUTH_SECRET

# 4. Place your Firebase service account JSON in the project root
#    (the file matching *-firebase-adminsdk-*.json is gitignored)

# 5. Seed the database (creates admin user + sample blog posts)
npm run seed

# 6. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Admin panel is at `/admin/login` — credentials are printed by the seed script.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run seed` | Seed Firestore with admin user and sample data |
| `npm run lint` | Run ESLint |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run Playwright tests with UI |

## Deployment

This project deploys automatically to **Firebase App Hosting** on push to `master`.

### How It Works

1. Push to `master` triggers a build on Firebase App Hosting
2. The `@apphosting/adapter-nextjs` adapter builds the app in standalone mode
3. The app runs on **Cloud Run** behind Firebase's global CDN
4. Environment secrets are managed via `apphosting.yaml` + Cloud Secret Manager

### Required Secrets

Set these via the Firebase CLI:

```bash
firebase apphosting:secrets:set NEXTAUTH_SECRET --project <project-id>
firebase apphosting:secrets:grantaccess NEXTAUTH_SECRET --project <project-id> --backend <backend-id>
```

### Environment Variables

Configured in `apphosting.yaml`:

| Variable | Source | Description |
|----------|--------|-------------|
| `NEXTAUTH_SECRET` | Secret Manager | JWT signing secret |
| `FIREBASE_PROJECT_ID` | Plain value | Firebase project ID |
| `NEXTAUTH_URL` | Plain value | Production URL |

> **Note:** Firebase Admin SDK credentials are provided automatically via Application Default Credentials (ADC) in production. No private key management required.

## Security

- Admin routes protected by middleware (JWT verification)
- Passwords hashed with bcrypt (cost factor 12)
- Markdown sanitised with DOMPurify
- Image uploads restricted to 5 MB
- Zod validation on all API inputs
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `X-XSS-Protection`
- Server-only Firestore access (no client-side Admin SDK)

## License

Private — all rights reserved.
