# Summize – One‑Click Deploy Template

A minimal Next.js app (App Router) with:
- Landing, Pricing, Dashboard (paste transcript → summarize)
- `/api/summarize` (OpenAI)
- `/api/checkout` (Stripe Checkout)

## Quick Start (One‑Click-ish)

### 1) Get the code
- Option A: Upload this folder to a new GitHub repo named `summize`
- Option B: Import directly into Vercel (drag-and-drop the folder) or Render (connect from GitHub)

### 2) Set environment variables
Create `.env` with:
```
OPENAI_API_KEY=sk-...                 # from platform.openai.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...  # Stripe publishable key
STRIPE_SECRET_KEY=sk_live_...         # Stripe secret key
STRIPE_PRICE_ID=price_12345           # Price ID for your subscription
NEXT_PUBLIC_BASE_URL=https://your-domain.com    # e.g., from Render/Vercel after first deploy
```

### 3) Stripe setup (5 minutes)
- In Stripe Dashboard → Products → Create a Product (e.g., "Summize Pro $29/mo")
- Copy the Price ID (looks like `price_...`) into `STRIPE_PRICE_ID`.
- (Optional) Webhooks not required for first version.

### 4) Deploy
- **Vercel**: New Project → Import your GitHub repo (or drag-n-drop the folder) → Add the env vars → Deploy.
- **Render**: New → Web Service → Connect GitHub repo → Build: `npm install && npm run build` → Start: `npm start` → Add env vars.

### 5) Test
- Go to `/pricing` → click Subscribe → you should land on Stripe Checkout.
- Go to `/dashboard` → paste a paragraph → Summarize → should return bullets.

## Local Dev
```
npm install
npm run dev
```

## Notes
- This is intentionally minimal and uses basic CSS to keep setup simple.
- You can style it later (Tailwind/shadcn) without changing the APIs.
