# 🚀 Deploy to Vercel - Step by Step

**Time needed**: 10-15 minutes  
**Cost**: FREE  
**Your Resend API Key**: `re_jcwfKtuk_MAHRipdPT7Hi6ZFfmkhxgUeY`

---

## Step 1: Create Local Environment File (1 min)

Create a file called `.env.local` in the project root:

```bash
# In terminal:
cat > .env.local << 'EOF'
RESEND_API_KEY=re_jcwfKtuk_MAHRipdPT7Hi6ZFfmkhxgUeY
FROM_EMAIL=noreply@mindfullife.com
EOF
```

Or manually create `.env.local` with:
```
RESEND_API_KEY=re_jcwfKtuk_MAHRipdPT7Hi6ZFfmkhxgUeY
FROM_EMAIL=noreply@mindfullife.com
```

✅ This file is already gitignored - it won't be committed!

---

## Step 2: Test Email Locally (2 min)

```bash
# Make sure dev server is running
npm run dev

# Open http://localhost:3000
# Go through assessment
# Submit email at action plan page
# Check console for success message
```

---

## Step 3: Initialize Git (1 min)

```bash
# Check if git is initialized
git status

# If not initialized:
git init
git add .
git commit -m "Initial commit - Mindful Life platform ready for deployment"
```

---

## Step 4: Create GitHub Repository (2 min)

### Option A: Using GitHub CLI (Recommended)
```bash
# Install gh if not installed:
# sudo apt install gh   # or brew install gh on Mac

# Login to GitHub
gh auth login

# Create repo and push
gh repo create mindful-life --public --source=. --push
```

### Option B: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `mindful-life`
3. Description: "Stoic School for Digital Wellness - Help people quit social media"
4. Choose **Public** (or Private)
5. **DON'T** initialize with README (we already have one)
6. Click "Create repository"

Then push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/mindful-life.git
git branch -M main
git push -u origin main
```

---

## Step 5: Deploy to Vercel (5 min)

### Option A: Using Vercel Website (Recommended for first time)

1. **Go to Vercel**
   - Visit https://vercel.com/new
   - Sign in with GitHub

2. **Import Repository**
   - Click "Import Git Repository"
   - Select your `mindful-life` repository
   - Click "Import"

3. **Configure Project**
   - Project Name: `mindful-life` (or your preferred name)
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables** ⚠️ IMPORTANT!
   - Click "Environment Variables"
   - Add these two variables:

   ```
   Name: RESEND_API_KEY
   Value: re_jcwfKtuk_MAHRipdPT7Hi6ZFfmkhxgUeY
   
   Name: FROM_EMAIL
   Value: noreply@mindfullife.com
   ```
   
   - Select: Production, Preview, Development (all three)
   - Click "Add" for each

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - ☕ Grab coffee while it builds

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# Set up and deploy? Yes
# Which scope? (your account)
# Link to existing project? No
# What's your project's name? mindful-life
# In which directory is your code? ./
# Want to override settings? No

# Add environment variables
vercel env add RESEND_API_KEY production
# Paste: re_jcwfKtuk_MAHRipdPT7Hi6ZFfmkhxgUeY

vercel env add FROM_EMAIL production
# Type: noreply@mindfullife.com

# Deploy to production
vercel --prod
```

---

## Step 6: Verify Deployment (2 min)

Once deployment completes, you'll get a URL like:
`https://mindful-life-xxx.vercel.app`

### Test Everything:

1. ✅ **Homepage loads** - Check all sections
2. ✅ **Assessment works** - Enter age and screen time
3. ✅ **Results display** - All 16 steps
4. ✅ **Time toggle works** - Switch months/years/days
5. ✅ **Potential page works** - Calculators show correctly
6. ✅ **Action plan loads** - 4 strategies visible
7. ✅ **Email sends** - Submit form and check email!

### Check Your Email:
- Should arrive within 1-2 minutes
- Check spam folder if not in inbox
- Verify HTML renders correctly
- All links work

---

## Step 7: Custom Domain (Optional - 10 min)

If you have a domain:

1. **In Vercel Dashboard**
   - Go to your project
   - Settings → Domains
   - Add your domain (e.g., `mindfullife.com`)

2. **In Your Domain Provider**
   - Add A record: `76.76.21.21`
   - Or CNAME record: `cname.vercel-dns.com`
   - Wait for DNS propagation (5 min - 48 hours)

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Your site will be `https://` within minutes

---

## 🎉 You're Live!

### What You Have Now:
- ✅ Live website on Vercel
- ✅ Automatic deployments (every git push)
- ✅ Email sending working
- ✅ HTTPS/SSL certificate
- ✅ Global CDN (fast everywhere)
- ✅ Free hosting (forever)

### Share Your Site:
```
🌟 I built a platform to help people quit social media!

Check it out: https://your-site.vercel.app

It shows you exactly how much of your LIFE you're spending on screens.
Takes 2 minutes. Mind-blowing results.

Let me know what you think!
```

---

## 🔄 Making Updates

After initial deployment, every time you push to GitHub:

```bash
git add .
git commit -m "Add new feature"
git push

# Vercel automatically deploys!
# Check deployment at https://vercel.com/dashboard
```

---

## 📊 Monitor Your Site

### Vercel Analytics (Free)
- Go to your project in Vercel
- Click "Analytics" tab
- See page views, visitors, top pages

### Check Deployment Logs
- Vercel Dashboard → Your Project → Deployments
- Click any deployment to see logs
- Check "Functions" tab for API logs

---

## 🐛 Troubleshooting

### Email Not Sending?

1. **Check Resend Dashboard**
   - Go to https://resend.com/emails
   - See if emails are being sent
   - Check for errors

2. **Verify Environment Variables**
   - Vercel Dashboard → Settings → Environment Variables
   - Make sure `RESEND_API_KEY` is set correctly
   - Must include `re_` prefix

3. **Check Function Logs**
   - Vercel → Your Project → Deployments → Latest
   - Functions tab
   - Look for errors in `/api/send-email`

4. **Test API Directly**
   ```bash
   curl -X POST https://your-site.vercel.app/api/send-email \
     -H "Content-Type: application/json" \
     -d '{
       "email": "your@email.com",
       "age": 25,
       "screenTimeMonths": 100,
       "screenTimePercentage": 50,
       "actualFreeTimeMonths": 100
     }'
   ```

### Build Failed?

```bash
# Test build locally first
npm run build

# Common issues:
# - Missing dependencies: npm install
# - TypeScript errors: Fix errors shown
# - Check Vercel logs for specific error
```

### Site Not Loading?

1. Check Vercel deployment status
2. Look for build errors
3. Check browser console for errors
4. Try incognito mode

---

## 💰 Costs

### Free Tier (Current):
- **Vercel**: Free forever
  - 100 GB bandwidth/month
  - Unlimited deployments
  - Good for 10,000-50,000 visits/month

- **Resend**: Free tier
  - 3,000 emails/month
  - Perfect for starting out

- **Total**: **$0/month**

### When to Upgrade:
- Vercel Pro ($20/month): After 100k visits/month
- Resend Growth ($20/month): After 3,000 emails/month

---

## 🎯 Next Steps After Deployment

1. **Test with 5-10 friends**
   - Get real feedback
   - Fix any bugs
   - Improve copy based on reactions

2. **Set up Resend domain** (Optional but recommended)
   - Go to Resend → Domains
   - Add your domain
   - Verify DNS records
   - Emails will come from `noreply@yourdomain.com`

3. **Share widely**
   - Social media
   - Friends and family
   - Relevant communities
   - WhatsApp groups

4. **Monitor and iterate**
   - Watch Vercel Analytics
   - Track email signups
   - See what pages people visit most
   - Improve based on data

---

## 📞 Need Help?

### Quick Links:
- Vercel Docs: https://vercel.com/docs
- Resend Docs: https://resend.com/docs
- Your Resend Dashboard: https://resend.com/emails
- Your Vercel Dashboard: https://vercel.com/dashboard

### Common Commands:
```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Roll back to previous deployment
vercel rollback

# View environment variables
vercel env ls
```

---

## 🚀 Ready to Launch!

Your checklist:
- [ ] Created `.env.local` file locally
- [ ] Tested email sending locally
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Added environment variables in Vercel
- [ ] Verified site works live
- [ ] Tested email sending on live site
- [ ] Shared with first 5 friends

**Time to change lives! 🌟**
