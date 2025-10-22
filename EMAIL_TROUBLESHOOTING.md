# 📧 Email Not Sending? Quick Fix Guide

## Why Emails Aren't Sending

The default email address `onboarding@resend.dev` is for **testing only**. It works in Resend's dashboard but **won't deliver to your actual inbox**.

## ✅ Quick Fix (2 Options)

### **Option 1: Use Resend Test Domain (Easiest)**

Resend provides a test domain that will actually deliver emails.

**In Vercel Environment Variables, add:**

```
RESEND_FROM_EMAIL=Mindful Life <delivered@resend.dev>
```

✅ **Pros:** Works immediately, no setup  
⚠️ **Note:** Shows "via resend.dev" in inbox  

---

### **Option 2: Add Your Own Domain (Professional)**

For branded emails from your own domain.

#### **Step 1: Add Domain to Resend**

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain (e.g., `mindfullife.com`)
4. Resend will show DNS records to add

#### **Step 2: Add DNS Records**

Go to your domain provider (Namecheap, GoDaddy, etc.) and add:

**SPF Record (TXT):**
```
Name: @
Value: v=spf1 include:resend.com ~all
```

**DKIM Record (TXT):**
```
Name: resend._domainkey
Value: [provided by Resend]
```

**MX Record:**
```
Priority: 10
Value: feedback-smtp.us-east-1.amazonses.com
```

#### **Step 3: Verify Domain**

1. Wait 5-10 minutes for DNS to propagate
2. Click **"Verify"** in Resend
3. Status should show ✅ **Verified**

#### **Step 4: Update Environment Variable**

**In Vercel, add:**

```
RESEND_FROM_EMAIL=Mindful Life <hello@mindfullife.com>
```

Use any address: `hello@`, `noreply@`, `team@`, etc.

---

## 🚀 How to Update in Vercel

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. **Settings** → **Environment Variables**
4. Click **"Add"**
5. **Name:** `RESEND_FROM_EMAIL`
6. **Value:** Your email address (from options above)
7. **Environments:** ✅ All three
8. Click **"Save"**
9. **Redeploy** your site

---

## 🧪 Test It Works

### Method 1: Check Resend Logs

1. Go to [Resend Logs](https://resend.com/logs)
2. Submit an email on your site
3. See if it appears in logs
4. Check status: ✅ Delivered or ❌ Failed

### Method 2: Test Email

1. Visit your live site
2. Go through calculator → action plan
3. Enter **your own email**
4. Submit
5. Check inbox (and spam folder)

---

## 🔍 Common Issues

### **"Email not in logs"**

**Problem:** RESEND_API_KEY not set correctly  
**Fix:**
- Check env variable in Vercel
- Make sure it starts with `re_`
- Redeploy after adding

### **"Email in logs but not received"**

**Problem:** Using `onboarding@resend.dev`  
**Fix:**
- Change to `delivered@resend.dev` OR
- Add your own domain (Option 2 above)

### **"DNS not verifying"**

**Problem:** DNS records not propagated  
**Fix:**
- Wait 30 minutes
- Check DNS with [MXToolbox](https://mxtoolbox.com)
- Try again

---

## 📊 Current Status Check

Run this in your terminal to check environment:

```bash
# Check if variable is set locally
cat .env.local | grep RESEND
```

Should show:
```
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=Mindful Life <delivered@resend.dev>
```

---

## 🎯 Recommended Setup

**For Quick Testing:**
```
RESEND_FROM_EMAIL=Mindful Life <delivered@resend.dev>
```

**For Production:**
```
RESEND_FROM_EMAIL=Mindful Life <hello@yourdomain.com>
```

---

## 📧 What Changes Were Made

### Code Updates:
- ✅ Email "from" address now configurable via `RESEND_FROM_EMAIL`
- ✅ Falls back to `onboarding@resend.dev` if not set
- ✅ Added to `env.template`

### Life Expectancy Updates:
- ✅ Changed from 65 → **80 years**
- ✅ Retirement age: 70 → **65 years**
- ✅ Updates all calculations sitewide

---

## ✅ Quick Action Checklist

- [ ] Add `RESEND_FROM_EMAIL` to Vercel env variables
- [ ] Use `delivered@resend.dev` for testing
- [ ] Redeploy Vercel
- [ ] Test email submission
- [ ] Check Resend logs for delivery
- [ ] (Optional) Add custom domain for branding

---

## 💡 Pro Tip

**Use `delivered@resend.dev` first** to confirm everything works, then switch to your custom domain later for branding.

---

## 🆘 Still Not Working?

1. Check [Resend Status Page](https://resend.com/status)
2. Check server logs in Vercel: Deployments → Runtime Logs
3. Look for: `✅ Action plan email sent to: ...` or `❌ Failed to send email: ...`
4. Check spam folder in your email
5. Try different email provider (Gmail, Outlook)

---

**Questions?** Contact: nichodemuswerre@gmail.com | +254 725 737 867
