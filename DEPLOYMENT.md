# Free Deployment Checklist

This project needs a server and a database. GitHub Pages cannot host this version.

## 1. Create a Free Postgres Database

Use either:

- Neon: create a free project and copy the pooled Postgres connection string.
- Supabase: create a free project and copy the connection string.

The connection string becomes:

```text
DATABASE_URL
```

Use SSL mode if your provider requires it, usually:

```text
?sslmode=require
```

## 2. Create a Payload Secret

Generate a long random string and save it as:

```text
PAYLOAD_SECRET
```

Example PowerShell:

```powershell
[guid]::NewGuid().ToString() + [guid]::NewGuid().ToString()
```

## 3. Deploy to Vercel Free Tier

1. Go to Vercel.
2. Import `abdullahansara/abdullahansara.github.io`.
3. Framework should be detected as Next.js.
4. Add environment variables:

```text
DATABASE_URL
PAYLOAD_SECRET
NEXT_PUBLIC_SITE_URL
```

For the first deploy, `NEXT_PUBLIC_SITE_URL` can be the Vercel URL. Later it can be the custom domain.

## 4. Create the First Admin User

After deploy:

```text
https://YOUR-VERCEL-URL/admin
```

Payload will ask you to create the first admin user.

## 5. Seed Starter Content

Locally, add the same `.env.local` values, then run:

```bash
npm run seed
```

Or run the command from a Vercel-connected environment if you prefer.

## Optional Free Media Storage

Payload can store uploaded media in the app by default, but serverless hosting is not ideal for persistent local uploads. For a stronger free setup, use Cloudflare R2 and add:

```text
S3_BUCKET
S3_ACCESS_KEY_ID
S3_SECRET_ACCESS_KEY
S3_REGION
S3_ENDPOINT
```

Without S3/R2, use the CMS for text first and add file storage after deployment is stable.
