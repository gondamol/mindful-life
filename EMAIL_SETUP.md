# 📧 Email System Setup Guide

## ✅ What's Fixed

### Database Schema
- **✅ Now has 11 tables** (was 10)
- **✅ Added `email_subscriptions` table**
- Tracks all email submissions from action-plan page
- Stores user stats (age, screen time, etc.)
- Supports unsubscribe functionality

### API Endpoints Created
- **POST `/api/subscribe`** - Save email subscriptions
- **DELETE `/api/subscribe`** - Unsubscribe users
- Validates emails, prevents duplicates
- Handles resubscriptions automatically

### Action Plan Page Updated
- Now saves emails to database
- Stores screen time calculation metadata
- Tracks source as 'action-plan'
- Ready for automated follow-ups

---

## 🚀 How It Works Now

### User Flow:
1. User calculates screen time on homepage
2. Clicks "Get Action Plan"
3. Enters email on action-plan page
4. Email saved to `email_subscriptions` table in Supabase
5. User sees success message

### What Gets Saved:
```json
{
  "email": "user@example.com",
  "subscription_type": "action_plan",
  "source": "action-plan",
  "metadata": {
    "age": 23,
    "screenTimeMonths": 115,
    "screenTimePercentage": 38,
    "actualFreeTimeMonths": 185
  }
}
```

---

## 📊 View Subscriptions in Supabase

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select **`email_subscriptions`** table
4. See all email submissions with their data

**Columns:**
- `id` - Unique identifier
- `email` - User's email
- `name` - Optional name
- `subscription_type` - 'action_plan', 'newsletter', etc.
- `subscribed` - TRUE/FALSE
- `subscribed_at` - Timestamp
- `source` - Where they subscribed from
- `metadata` - JSON with screen time stats

---

## 📧 Email Sending (Next Step)

Currently emails are **saved to database** but **not sent automatically**.

### To Enable Email Sending:

#### Option 1: Resend (Recommended - Easiest)

1. Sign up at [resend.com](https://resend.com) (Free tier: 100 emails/day)
2. Get API key
3. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_key_here
   ```
4. Install package:
   ```bash
   npm install resend
   ```
5. Update `/api/subscribe/route.ts` to send email:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // After saving to database:
   await resend.emails.send({
     from: 'Mindful Life <onboarding@mindfullife.com>',
     to: email,
     subject: 'Your Digital Wellness Action Plan',
     html: `<h1>Welcome ${name}!</h1>
            <p>Based on your calculation, you spend ${screenTimePercentage}% of your free time on screens.</p>
            <p>Here's your personalized action plan...</p>`
   });
   ```

#### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Add to `.env.local`:
   ```bash
   SENDGRID_API_KEY=SG.your_key_here
   ```
4. Install:
   ```bash
   npm install @sendgrid/mail
   ```

#### Option 3: Gmail (Quick Test)

1. Go to Google Account → Security → App Passwords
2. Generate app password
3. Add to `.env.local`:
   ```bash
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your_email@gmail.com
   EMAIL_SERVER_PASSWORD=your_app_password
   ```
4. Install:
   ```bash
   npm install nodemailer
   ```

---

## 🧪 Testing

### Test Locally:

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Go to action-plan page
3. Enter your email
4. Check Supabase → Table Editor → `email_subscriptions`
5. Should see new row!

### Test on Production:

1. Deploy to Vercel (already done)
2. Visit your live site
3. Complete calculator → action plan
4. Submit email
5. Check Supabase dashboard

---

## 🔧 Environment Variables Needed

### Minimum (Already Set):
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### For Email Sending (Choose One):
```bash
# Resend (Recommended)
RESEND_API_KEY=re_xxx

# OR SendGrid
SENDGRID_API_KEY=SG.xxx

# OR Gmail
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
```

---

## 📋 Deployment Checklist

### ✅ Already Done:
- [x] Database schema has 11 tables
- [x] `email_subscriptions` table created
- [x] API endpoints created (`/api/subscribe`)
- [x] Action plan page updated
- [x] Code committed & pushed to GitHub

### 🔄 You Need To Do:

**1. Re-run Database Schema in Supabase:**
   - Go to Supabase → SQL Editor
   - Copy ALL contents from `supabase/schema.sql`
   - Paste and Run
   - Verify 11 tables exist (not 10!)

**2. Check Vercel Environment Variables:**
   - Settings → Environment Variables
   - Ensure all Supabase keys are added
   - Add email provider keys (when ready)

**3. Redeploy Vercel:**
   - Deployments tab
   - Click ⋮ → Redeploy
   - Wait for completion
   - Test live site

**4. Test Email Collection:**
   - Visit live site
   - Complete calculator
   - Submit email on action-plan
   - Check Supabase dashboard
   - Should see email in `email_subscriptions` table

**5. (Optional) Enable Email Sending:**
   - Choose provider (Resend recommended)
   - Add API key to Vercel env variables
   - Update `/api/subscribe/route.ts` with email code
   - Redeploy
   - Test end-to-end

---

## 🎯 What Users Experience

### Current (Email Collection Only):
1. User enters email on action-plan page
2. See "Thanks! Check your email" message
3. Email saved to database ✅
4. NO email sent yet ❌

### After Email Integration:
1. User enters email
2. Email saved to database ✅
3. Automated email sent ✅
4. Contains personalized action plan
5. Links to blog, academy, resources

---

## 📧 Email Template Ideas

### Action Plan Email:

**Subject:** Your Digital Wellness Action Plan - ${screenTimePercentage}% of Free Time

**Body:**
```
Hi there!

Based on your calculation:
- Age: ${age}
- Screen Time: ${screenTimeMonths} months of your life
- That's ${screenTimePercentage}% of your free time!

Here's your personalized action plan:

1. Set Non-Negotiable Rules
   • No phones in bedroom
   • Screen-free dinners
   • Phone off after 8pm

2. Delete Most-Used Apps
   [List of common addictive apps]

3. Turn Off All Notifications
   "Would I want someone to knock on my door for this?"

4. Make Screens Inconvenient
   Use friction to break habits

---

Want to dive deeper?

📚 Read Our Blog: [link]
🎓 Free Course: Digital Stoicism 101 [link]
💰 Support Our Mission: [link]

Unsubscribe: [link]
```

---

## 🔍 Monitoring & Analytics

### View in Supabase:

```sql
-- Total subscriptions
SELECT COUNT(*) FROM email_subscriptions WHERE subscribed = true;

-- By source
SELECT source, COUNT(*) 
FROM email_subscriptions 
GROUP BY source;

-- Average screen time percentage
SELECT AVG((metadata->>'screenTimePercentage')::int) 
FROM email_subscriptions 
WHERE metadata->>'screenTimePercentage' IS NOT NULL;

-- Recent subscriptions
SELECT email, subscribed_at, metadata
FROM email_subscriptions
ORDER BY subscribed_at DESC
LIMIT 10;
```

---

## 🆘 Troubleshooting

### "Failed to subscribe" error
- Check Supabase credentials in `.env.local`
- Verify database schema loaded (11 tables)
- Check browser console for errors

### Email not saving
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set
- Check RLS policies are enabled
- Try direct insert in Supabase SQL Editor

### Can't view emails in dashboard
- Use service_role key for admin access
- Or query via SQL Editor:
  ```sql
  SELECT * FROM email_subscriptions;
  ```

---

## 📞 Next Steps

1. **Test Locally** - Run dev server, submit email, check Supabase
2. **Deploy** - Redeploy Vercel with new code
3. **Test Production** - Submit email on live site
4. **Enable Emails** - Add Resend API key
5. **Send First Email** - Test automated action plan delivery

---

## 🎉 Summary

✅ **Database Fixed** - 11 tables (added email_subscriptions)  
✅ **API Created** - POST /api/subscribe saves emails  
✅ **Action Plan Updated** - Now stores user data  
✅ **Code Deployed** - Pushed to GitHub  
🔄 **Your Turn** - Re-run schema in Supabase, redeploy Vercel  
📧 **Optional** - Add email provider to send automated emails  

**Users can now submit emails and you can collect their data! 🚀**

Contact: nichodemuswerre@gmail.com | +254 725 737 867
