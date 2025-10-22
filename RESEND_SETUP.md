# 📧 Resend Email Setup - 5 Minutes

## ✅ What's Done

- ✅ Resend package installed
- ✅ Email template created (beautiful HTML + plain text)
- ✅ API endpoint updated to send emails
- ✅ Action plan automatically emailed after signup

## 🚀 Quick Setup (Get Emails Working)

### Step 1: Sign Up for Resend (2 minutes)

1. Go to [resend.com](https://resend.com)
2. Click **"Start Building"** or **"Sign Up"**
3. Sign up with GitHub (easiest)
4. **Free tier:** 100 emails/day, 3,000/month - perfect to start!

### Step 2: Get API Key (1 minute)

1. After signing in, go to **API Keys** (left sidebar)
2. Click **"Create API Key"**
3. Name it: `mindful-life-production`
4. **Copy the key** (starts with `re_...`)
5. ⚠️ **Save it immediately** - you can't see it again!

### Step 3: Add to Local Environment (30 seconds)

Open `.env.local` and add:

```bash
RESEND_API_KEY=re_your_key_here
```

Save the file.

### Step 4: Test Locally (1 minute)

1. Restart dev server:
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. Visit: http://localhost:3000
3. Use calculator → Get Action Plan
4. Enter **your own email**
5. Submit

**Check your inbox!** You should receive the action plan email within seconds! 📬

### Step 5: Add to Vercel (1 minute)

1. Go to [vercel.com](https://vercel.com) → Your project
2. **Settings** → **Environment Variables**
3. Click **"Add"**
   - Name: `RESEND_API_KEY`
   - Value: `re_your_key_here`
   - Environments: ✅ Production ✅ Preview ✅ Development
4. Click **"Save"**
5. **Redeploy**: Deployments → ⋮ → Redeploy

---

## 📧 What Users Get

### Email Subject:
```
Your Digital Wellness Action Plan - 38% of Your Free Time
```

### Email Contains:
- 📊 **Personalized stats** (age, screen time, percentage)
- 🎯 **4-step action plan** with specific examples
- 🎓 **Links to free resources** (blog, course, academy)
- 💬 **Stoic quote** for inspiration
- ☕ **Support button** to donate
- 📞 **Your contact info**

### Email Design:
- ✨ Beautiful HTML email with gradients
- 📱 Mobile responsive
- 🎨 Dark theme matching your brand
- 📝 Plain text fallback for email clients

---

## 🧪 Test Email Preview

**Subject:**
```
Your Digital Wellness Action Plan - 38% of Your Free Time
```

**Preview:**
```
Hi there! 👋

📊 YOUR SCREEN TIME ANALYSIS
Age: 23 years old
Time on Screens: 115 months of your life
Percentage: 38% of your free time

🎯 YOUR 4-STEP ACTION PLAN
1. Set Non-Negotiable Rules
2. Delete Most-Used Apps
3. Turn Off All Notifications
4. Make Screens Inconvenient

🎓 Want to go deeper?
Join Ubuntu Wisdom Academy...
```

---

## 🔍 Verify Email Sent

### In Terminal/Console:
```
✅ Action plan email sent to: user@example.com
```

### In Resend Dashboard:
1. Go to **Logs** (left sidebar)
2. See all sent emails
3. Check delivery status
4. View email content

### In Your Inbox:
- Email arrives within seconds
- Check spam if not in inbox
- Gmail/Outlook might delay slightly

---

## ⚠️ Important Notes

### Email "From" Address

**Current:** `onboarding@resend.dev` (Resend's test domain)

**For Production:** Add your own domain

1. In Resend, go to **Domains**
2. Click **"Add Domain"**
3. Add: `mindfullife.com` or similar
4. Add DNS records (TXT, MX, CNAME)
5. Update code:
   ```typescript
   from: 'Mindful Life <hello@mindfullife.com>'
   ```

**Until then:** Emails will come from `onboarding@resend.dev` (works fine!)

### Free Tier Limits

- **100 emails/day**
- **3,000 emails/month**
- Perfect for starting out!
- Upgrade when you need more

### Email Deliverability

- Resend has great deliverability
- Emails should land in inbox
- If in spam, ask users to mark "Not Spam"
- Consider adding DMARC/SPF records

---

## 🎯 What Happens Now

### Without Resend API Key:
1. User submits email ✅
2. Email saved to database ✅
3. Success message shown ✅
4. **No email sent** ❌
5. Message: "We'll send your action plan soon"

### With Resend API Key:
1. User submits email ✅
2. Email saved to database ✅
3. **Email sent automatically** ✅
4. Success message shown ✅
5. Message: "Check your email for your action plan"

---

## 📊 Analytics & Monitoring

### In Resend Dashboard:

**Metrics Available:**
- Total emails sent
- Delivery rate
- Bounce rate
- Open rate (if tracking enabled)
- Click rate (if tracking enabled)

**View:**
1. Go to **Analytics**
2. See graphs and stats
3. Export data if needed

---

## 🐛 Troubleshooting

### "Email not sending"

**Check:**
1. ✅ `RESEND_API_KEY` in `.env.local`
2. ✅ Dev server restarted after adding key
3. ✅ API key is correct (starts with `re_`)
4. ✅ Resend account is active

**Test:**
```bash
# In terminal, check if variable is set
echo $RESEND_API_KEY
```

### "Email not received"

**Check:**
1. ✅ Spam folder
2. ✅ Email address spelled correctly
3. ✅ Resend dashboard → Logs (was it sent?)
4. ✅ Email provider blocks (rare)

### "API key invalid"

**Fix:**
1. Generate new API key in Resend
2. Update `.env.local`
3. Restart dev server
4. Test again

---

## 💰 Pricing

### Free Tier (Current):
- **100 emails/day**
- **3,000 emails/month**
- All features included
- Perfect for launch!

### If You Need More:
- $20/month: 50,000 emails
- $80/month: 100,000 emails
- Custom plans available

**For most users:** Free tier is enough to start! 🎉

---

## 📞 Support

**Resend Support:**
- Docs: [resend.com/docs](https://resend.com/docs)
- Discord: Join their community
- Email: support@resend.com

**Your App:**
- Contact: nichodemuswerre@gmail.com
- Phone: +254 725 737 867

---

## ✅ Checklist

**Setup:**
- [ ] Created Resend account
- [ ] Got API key
- [ ] Added to `.env.local`
- [ ] Restarted dev server
- [ ] Tested with own email
- [ ] Received email in inbox

**Deployment:**
- [ ] Added `RESEND_API_KEY` to Vercel
- [ ] Redeployed site
- [ ] Tested on production
- [ ] Verified email delivery

**Optional:**
- [ ] Added custom domain to Resend
- [ ] Updated "from" address in code
- [ ] Configured DNS records
- [ ] Tested from custom domain

---

## 🎉 You're Done!

Once you add the Resend API key:
- ✅ Emails sent automatically
- ✅ Users get action plan instantly
- ✅ No manual work needed
- ✅ Professional email design
- ✅ Trackable in Resend dashboard

**Go get your API key and test it! Takes 5 minutes!** 🚀

Questions? Contact: nichodemuswerre@gmail.com
