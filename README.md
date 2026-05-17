# Abdullah Ansar CMS Site

This repo now contains a dynamic academic publishing platform built with:

- Next.js
- Payload CMS
- Postgres
- Optional S3-compatible media storage

It is designed as a WordPress-like backend without WordPress.

## What This Supports

- `/admin` dashboard with user login
- Blog posts with drafts
- Publications database
- Research areas
- Editable pages
- Global site settings
- Image and PDF uploads
- Substack-inspired scholarly frontend

## Free-Tier Deployment Path

Use these services for the most solid free setup:

1. Vercel: hosts the Next.js app.
2. Neon or Supabase: free Postgres database.
3. Cloudflare R2: optional S3-compatible media storage for uploads.

GitHub Pages is not used for this version because GitHub Pages cannot run a dynamic backend.

## Required Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
DATABASE_URL="postgres://USER:PASSWORD@HOST/db?sslmode=require"
PAYLOAD_SECRET="replace-with-a-long-random-secret"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

Optional media storage:

```bash
S3_BUCKET=""
S3_ACCESS_KEY_ID=""
S3_SECRET_ACCESS_KEY=""
S3_REGION="auto"
S3_ENDPOINT=""
```

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
http://localhost:3000/admin
```

The first admin visit will create the first admin user when a working `DATABASE_URL` is present.

## Deploying on Vercel

1. Import this GitHub repo into Vercel.
2. Add the environment variables from `.env.example`.
3. Connect a free Neon or Supabase Postgres database.
4. Deploy.
5. Visit `/admin` and create the first admin user.

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run generate:types
```
