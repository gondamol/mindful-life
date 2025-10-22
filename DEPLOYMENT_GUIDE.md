# 🚀 DEPLOYMENT GUIDE - Ubuntu Wisdom Academy

## Quick Start Checklist

- [ ] Supabase project created
- [ ] Database schema loaded
- [ ] Environment variables set
- [ ] Local testing complete
- [ ] Deployed to Vercel
- [ ] Production environment variables added

---

## STEP 1: Create Supabase Project ⏱️ 5 minutes

### 1.1 Sign Up & Create Project

1. Go to **https://supabase.com**
2. Click **"Start your project"**
3. Sign in with GitHub
4. Click **"New project"**
5. Fill in:
   - **Organization:** Create new or select existing
   - **Name:** `mindful-life` or `ubuntu-wisdom-academy`
   - **Database Password:** Click generate, then **SAVE THIS PASSWORD!**
   - **Region:** Choose closest to Kenya:
     - `ap-southeast-1` (Singapore)
     - `eu-west-1` (Ireland)
   - **Pricing Plan:** Free tier
6. Click **"Create new project"**
7. ⏳ Wait 2-3 minutes for setup

### 1.2 Get Your API Keys

Once ready:

1. Click **Settings** ⚙️ (left sidebar, bottom)
2. Click **API**
3. Copy these values:

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJz...
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJz... (KEEP SECRET!)
```

**📝 Save these somewhere safe!**

### 1.3 Load Database Schema

1. Click **SQL Editor** 📝 (left sidebar)
2. Click **"New query"**
3. Open file: `supabase/schema.sql` on your computer
4. Copy **ALL contents** (Ctrl+A, Ctrl+C)
5. Paste into Supabase SQL Editor
6. Click **"Run"** button (or Ctrl+Enter)
7. ✅ Should see: "Success. No rows returned"

### 1.4 Verify Tables Created

1. Click **Table Editor** 📊 (left sidebar)
2. You should see 11 tables:
   - ✅ users
   - ✅ course_progress
   - ✅ quiz_attempts
   - ✅ certificates
   - ✅ forum_posts
   - ✅ forum_comments
   - ✅ transactions
   - ✅ achievements
   - ✅ coaching_sessions
   - ✅ session_registrations

**If you see all 11 tables → SUCCESS! ✅**

---

## STEP 2: Create Local Environment File ⏱️ 2 minutes

### 2.1 Copy Template

```bash
cd /home/gondamol/gondamol/screentime/mindful-life
cp env.template .env.local
```

### 2.2 Edit .env.local

Open `.env.local` in your editor and fill in:

```bash
# REQUIRED - From Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# REQUIRED - NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=UrXsg4fGB0/te4cMdAnbO3IZJ6WTEI387WB+WW5Zixc=
```

**💡 Tip:** Leave optional fields (Google, Stripe, M-Pesa) empty for now

### 2.3 Test Locally

```bash
npm run dev
```

Visit: **http://localhost:3000**

**Test these:**
- ✅ Homepage loads
- ✅ Calculator works
- ✅ Blog loads
- ✅ Academy page loads
- ✅ Free course accessible
- ✅ Support page shows payment options

---

## STEP 3: Deploy to Vercel ⏱️ 5 minutes

### 3.1 Push to GitHub (if not done)

```bash
git add -A
git commit -m "Ready for production deployment"
git push origin main
```

### 3.2 Import Project to Vercel

1. Go to **https://vercel.com**
2. Sign in with GitHub
3. Click **"Add New..."** → **"Project"**
4. Find your repository: `gondamol/mindful-life` or `screentime/mindful-life`
5. Click **"Import"**

### 3.3 Configure Project

**Framework Preset:** Next.js (auto-detected)  
**Root Directory:** `./` (leave default)  
**Build Command:** `npm run build` (auto-detected)  
**Output Directory:** `.next` (auto-detected)

**Click "Deploy"** - DON'T add environment variables yet!

⏳ Wait 2-3 minutes...

**Deployment will FAIL** - this is expected! We need environment variables.

### 3.4 Add Environment Variables

1. In Vercel, go to your project
2. Click **Settings** → **Environment Variables**
3. Add these **one by one**:

**REQUIRED (Minimum to work):**

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` | Production, Preview, Development |
| `NEXTAUTH_URL` | `https://your-app.vercel.app` | Production |
| `NEXTAUTH_URL` | `http://localhost:3000` | Development |
| `NEXTAUTH_SECRET` | `UrXsg4fGB0/te4cMdAnbO3IZJ6WTEI387WB+WW5Zixc=` | Production, Preview, Development |

**How to add:**
1. Click **"Add"**
2. Enter **Name** (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
3. Enter **Value** (paste your actual value)
4. Select environments: ✅ Production ✅ Preview ✅ Development
5. Click **"Save"**
6. Repeat for all variables

**💡 Note:** For `NEXTAUTH_URL` in Production, use your Vercel URL (e.g., `https://mindful-life.vercel.app`)

### 3.5 Redeploy

1. Go to **Deployments** tab
2. Click **⋮** (three dots) on latest deployment
3. Click **"Redeploy"**
4. ✅ Check **"Use existing Build Cache"**
5. Click **"Redeploy"**

⏳ Wait 2-3 minutes...

**✅ Deployment should succeed!**

---

## STEP 4: Verify Production ⏱️ 3 minutes

### 4.1 Visit Your Live Site

Click **"Visit"** button in Vercel or go to your deployment URL

**Test everything:**

- ✅ Homepage loads
- ✅ Calculator works
- ✅ Blog loads & search works
- ✅ Academy page loads
- ✅ Free course accessible (Modules 1-2)
- ✅ Locked modules show enrollment prompt
- ✅ Support page shows all payment methods
- ✅ Footer workbook download link works
- ✅ No console errors (F12 → Console)

### 4.2 Test Database Connection

1. Go to Academy → Free Course
2. (When auth is set up) Complete a lesson
3. Check Supabase Table Editor → `course_progress`
4. Should see new row

**For now (no auth yet):** Database is ready, just needs user signup first

---

## STEP 5: Custom Domain (OPTIONAL) ⏱️ 5 minutes

### 5.1 Add Domain in Vercel

1. In Vercel project, go to **Settings** → **Domains**
2. Enter your domain (e.g., `mindfullife.com`)
3. Click **"Add"**
4. Follow instructions to add DNS records

### 5.2 Update Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Edit `NEXTAUTH_URL` for Production
3. Change to your custom domain: `https://mindfullife.com`
4. Click **"Save"**
5. Redeploy

---

## TROUBLESHOOTING

### ❌ Build fails with "NEXTAUTH_SECRET not found"

**Fix:** Add `NEXTAUTH_SECRET` in Vercel environment variables

### ❌ "Supabase client error"

**Fix:** Check that all 3 Supabase variables are added correctly

### ❌ 404 on deployment

**Fix:** Ensure root directory is `./` and build command is `npm run build`

### ❌ Environment variables not working

**Fix:** 
1. Make sure you selected all environments (Production, Preview, Development)
2. Redeploy after adding variables

### ❌ Database queries failing

**Fix:**
1. Verify schema loaded (check Table Editor)
2. Check `SUPABASE_SERVICE_ROLE_KEY` is correct
3. Verify RLS policies are enabled

---

## NEXT STEPS AFTER DEPLOYMENT

### Immediate (This Week)

- [ ] Test all pages on mobile
- [ ] Share with friends for feedback
- [ ] Set up Google Analytics (optional)
- [ ] Create social media accounts

### Short Term (This Month)

- [ ] Set up Google OAuth (for easier login)
- [ ] Configure Stripe for payments
- [ ] Set up M-Pesa integration
- [ ] Create email templates
- [ ] Schedule first live coaching session

### Long Term (Next 3 Months)

- [ ] Record video lessons
- [ ] Build community forum UI
- [ ] Create certificate generator
- [ ] Add progress notifications
- [ ] Marketing campaign

---

## ENVIRONMENT VARIABLES REFERENCE

### Minimum Required (Must Have)

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your_generated_secret
```

### Optional (Add Later)

```bash
# Google OAuth
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_xxx
STRIPE_SECRET_KEY=sk_xxx

# M-Pesa
MPESA_CONSUMER_KEY=xxx
MPESA_CONSUMER_SECRET=xxx
```

---

## CONTACT & SUPPORT

**Email:** nichodemuswerre@gmail.com  
**Phone:** +254 725 737 867

**Resources:**
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)

---

## ✅ DEPLOYMENT CHECKLIST

**Before Going Live:**

- [ ] All environment variables added in Vercel
- [ ] Supabase database schema loaded
- [ ] Homepage tested on desktop
- [ ] Homepage tested on mobile
- [ ] Calculator tested
- [ ] Blog tested
- [ ] Free course accessible
- [ ] Payment page shows correct info
- [ ] No console errors
- [ ] Custom domain configured (if applicable)

**After Going Live:**

- [ ] Share with 5 friends for testing
- [ ] Monitor Vercel analytics
- [ ] Check Supabase usage
- [ ] Set up monitoring/alerts
- [ ] Create backup plan

---

**🎉 Congratulations! Your platform is LIVE!**

Built with ❤️ for digital wellness in Kenya and beyond

© 2025 Mindful Life • Ubuntu Wisdom Academy
