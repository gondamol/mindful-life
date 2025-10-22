# Ubuntu Wisdom Academy - Setup Guide

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` file in root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_key_here

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email Provider (optional)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
EMAIL_FROM=noreply@mindfullife.com

# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# M-Pesa (for Kenyan payments)
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
```

### 3. Set Up Supabase Database

1. Create project at [supabase.com](https://supabase.com)
2. Run the SQL schema:

```bash
# Copy schema from supabase/schema.sql and run in Supabase SQL Editor
```

Or use Supabase CLI:

```bash
npm install -g supabase
supabase db push
```

### 4. Generate NextAuth Secret

```bash
openssl rand -base64 32
```

Copy output to `NEXTAUTH_SECRET` in `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 📊 Database Schema Overview

### Tables Created:
- `users` - User accounts & subscription info
- `course_progress` - Lesson completion tracking
- `quiz_attempts` - Quiz scores & attempts
- `certificates` - Course completion certificates
- `forum_posts` - Community discussion posts
- `forum_comments` - Post comments
- `transactions` - Payment history
- `achievements` - User badges & achievements
- `coaching_sessions` - Live session schedule
- `session_registrations` - Session sign-ups

### Row Level Security (RLS):
All tables have RLS enabled. Users can only access their own data.

---

## 🔐 Authentication Setup

### Google OAuth (Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID & Secret to `.env.local`

### Email Magic Links

1. Set up SMTP provider (Gmail, SendGrid, etc.)
2. For Gmail: Create App Password in Google Account settings
3. Add credentials to `.env.local`

---

## 💳 Payment Integration

### Stripe Setup (International)

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard
3. Create product: "Ubuntu Wisdom Academy - Monthly"
4. Price: $10/month
5. Add webhook endpoint: `your-domain.com/api/webhooks/stripe`
6. Copy webhook secret

### M-Pesa Setup (Kenya)

1. Register at [Safaricom Daraja](https://developer.safaricom.co.ke)
2. Create app
3. Get Consumer Key, Consumer Secret
4. Set up STK Push
5. Add credentials to `.env.local`

**Test M-Pesa:**
- Shortcode: 174379
- Passkey: Available in Daraja portal

---

## 📁 File Structure

```
/app
  /academy
    /courses
      /digital-stoicism/page.tsx  ← Main course page
    /enroll/page.tsx               ← Enrollment page
    page.tsx                        ← Academy landing
  /api
    /auth/[...nextauth]/route.ts   ← Auth endpoints
    /webhooks                       ← Payment webhooks
  /support/page.tsx                 ← Support/donations
  page.tsx                          ← Homepage

/components
  Quiz.tsx                          ← Quiz component
  ProgressTracker.tsx               ← Progress UI
  Footer.tsx                        ← Footer with resources

/lib
  calculations.ts                   ← Time calculations
  blogPosts.ts                      ← Blog content
  courseContent.ts                  ← Modules 3-4 content
  modules5-8.ts                     ← Modules 5-8 content
  quizData.ts                       ← Quiz questions
  supabase.ts                       ← Database helpers

/public
  /workbooks
    module-1-workbook.md            ← Downloadable resources

/supabase
  schema.sql                        ← Database schema
```

---

## 🎯 Feature Checklist

### ✅ Completed
- [x] Homepage with calculator
- [x] Blog with 21 articles & search/filter
- [x] Academy landing page
- [x] Free preview course (Modules 1-2)
- [x] Course content (Modules 3-8)
- [x] Quiz system
- [x] Progress tracking UI
- [x] Downloadable workbooks
- [x] Support/donation page
- [x] Database schema
- [x] Authentication setup

### 🚧 To Implement
- [ ] Payment processing (Stripe)
- [ ] M-Pesa integration
- [ ] Email notifications
- [ ] Certificate generation
- [ ] Community forum
- [ ] Live coaching schedule
- [ ] Video embeds
- [ ] User dashboard
- [ ] Progress persistence

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

```bash
npm run build
vercel --prod
```

### Environment Variables in Vercel

Add all `.env.local` variables in Vercel Dashboard → Settings → Environment Variables

---

## 📞 Support

**Contact:**
- Email: nichodemuswerre@gmail.com
- Phone: +254 725 737 867

**Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [NextAuth Docs](https://next-auth.js.org)
- [Stripe Docs](https://stripe.com/docs)
- [M-Pesa API](https://developer.safaricom.co.ke)

---

## 🎓 Course Content Summary

**6 Complete Modules:**
1. Introduction & Dichotomy of Control (FREE)
2. Mindful Attention (PARTIAL FREE)
3. Voluntary Discomfort (PREMIUM)
4. Marcus Aurelius Morning Routine (PREMIUM)
5. Negative Visualization (PREMIUM)
6. The View from Above (PREMIUM)
7. Stoic Journaling (PREMIUM)
8. Building Your Stoic Life (PREMIUM)

**Total Content:**
- 24+ lessons
- 10+ quizzes
- 8+ downloadable workbooks
- 4+ hours of material

---

## 💡 Next Steps

1. **Test local development**
   ```bash
   npm run dev
   ```

2. **Set up Supabase database**
   - Run schema.sql
   - Test RLS policies

3. **Configure authentication**
   - Google OAuth
   - Email provider

4. **Add payment processing**
   - Stripe integration
   - M-Pesa integration

5. **Deploy to Vercel**
   - Push to GitHub
   - Connect Vercel
   - Add env variables

6. **Go live!**
   - Test enrollments
   - Monitor analytics
   - Collect feedback

---

**Built with ❤️ for digital wellness in Kenya and beyond**

© 2025 Mindful Life • Ubuntu Wisdom Academy
