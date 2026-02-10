# Tenki AI Consultancy

A modern, server-side rendered website for Tenki AI Consultancy — featuring a full blog CMS with admin panel, built with Next.js 15 and Firebase.

## Tech Stack

- **Framework**: Next.js 15 (App Router, SSR)
- **Database**: Firestore (Firebase Admin SDK)
- **Auth**: NextAuth.js v5 (Credentials, JWT sessions)
- **Styling**: Tailwind CSS v4 with custom design system
- **Blog**: Markdown-based with DOMPurify sanitization
- **Testing**: Playwright E2E tests
- **Deployment**: Firebase App Hosting

## Project Structure

```
src/
├── app/
│   ├── (public)/          # Public pages (with header/footer)
│   │   ├── blog/          # Blog listing & post pages
│   │   ├── philosophy/    # Philosophy page
│   │   ├── services/      # Services page
│   │   ├── approach/      # Approach page
│   │   ├── contact/       # Contact page
│   │   ├── privacy/       # Privacy policy
│   │   └── impressum/     # Impressum
│   ├── admin/             # Admin panel (protected)
│   │   ├── login/         # Login page
│   │   ├── posts/         # Post management
│   │   └── categories/    # Category management
│   └── api/               # API routes
│       ├── auth/          # NextAuth endpoints
│       ├── posts/         # Blog post CRUD
│       ├── categories/    # Category CRUD
│       ├── tags/          # Tag CRUD
│       └── upload/        # Image upload
├── components/
│   ├── admin/             # Admin panel components
│   ├── blog/              # Blog components
│   ├── pages/             # Page-level client components
│   └── ui/                # Shared UI components
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── db.ts              # Firestore data access layer
│   ├── firebase-admin.ts  # Firebase Admin SDK init
│   ├── markdown.ts        # Markdown rendering + sanitization
│   └── validators.ts      # Zod input validation schemas
└── types/                 # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 20+
- A Firebase project with Firestore enabled

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tenki-ai-consultancy.git
   cd tenki-ai-consultancy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file from the example:
   ```bash
   cp .env.example .env.local
   ```

4. Configure environment variables in `.env.local`:
   - `FIREBASE_PROJECT_ID` — your Firebase project ID
   - `FIREBASE_CLIENT_EMAIL` — service account email
   - `FIREBASE_PRIVATE_KEY` — service account private key (with `\n` for newlines)
   - `NEXTAUTH_SECRET` — a random 32+ character string
   - `NEXTAUTH_URL` — `http://localhost:3000` for development

5. Seed the database (creates admin user and sample data):
   ```bash
   npm run seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000)

### Admin Access

After seeding, log in at `/admin/login` with:
- **Email**: `admin@tenki.ai`
- **Password**: `admin123`

> Change these credentials in production.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run seed` | Seed database with admin user and sample data |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run Playwright tests with UI |
| `npm run lint` | Run ESLint |

## Security

- All admin routes protected by middleware (JWT auth)
- Passwords hashed with bcrypt (cost factor 12)
- Markdown rendered with DOMPurify sanitization
- File uploads restricted to images only (max 5MB)
- Zod validation on all API inputs
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- No client-side Firestore access (server-only via Admin SDK)

## Deployment

This project is configured for Firebase App Hosting with automatic GitHub deploys.

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize App Hosting: `firebase init apphosting`
4. Set environment secrets in the Firebase console
5. Push to `main` to trigger auto-deploy
