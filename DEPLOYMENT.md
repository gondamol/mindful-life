# Deployment Guide - Mindful Life

## 🚀 Quick Deploy to Vercel

### Prerequisites
1. GitHub account
2. Vercel account (sign up at https://vercel.com)
3. Resend account for emails (sign up at https://resend.com)

### Step 1: Push to GitHub

```bash
cd mindful-life

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Mindful Life platform"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/mindful-life.git
git branch -M main
git push -u origin main
```

### Step 2: Set Up Resend (Email Service)

1. Go to https://resend.com and sign up
2. Verify your domain OR use test mode
3. Get your API key from https://resend.com/api-keys
4. For production, add and verify your domain:
   - Go to Domains section
   - Add your domain (e.g., mindfullife.com)
   - Add DNS records as instructed
   - Wait for verification

### Step 3: Deploy to Vercel

**Option A: Using Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. Add Environment Variables:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   ```

5. Click "Deploy"
6. Wait 2-3 minutes for deployment
7. Your site will be live at `your-project.vercel.app`

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - What's your project's name? mindful-life
# - In which directory is your code? ./
# - Want to override settings? No

# Add environment variables
vercel env add RESEND_API_KEY
# Paste your Resend API key when prompted

vercel env add FROM_EMAIL
# Enter your from email (e.g., noreply@yourdomain.com)

# Deploy to production
vercel --prod
```

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to Settings → Domains
3. Add your custom domain (e.g., mindfullife.com)
4. Update your DNS records as instructed:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (can take up to 48 hours, usually faster)

### Step 5: Configure Email Domain

If using custom domain for emails:

1. In Resend dashboard, add your domain
2. Add these DNS records:
   ```
   Type: TXT
   Name: @
   Value: [provided by Resend]
   
   Type: CNAME
   Name: resend._domainkey
   Value: [provided by Resend]
   ```
3. Wait for verification
4. Update `FROM_EMAIL` in Vercel to use your domain

## 🔧 Environment Variables

### Required
- `RESEND_API_KEY` - Your Resend API key for sending emails
- `FROM_EMAIL` - Email address to send from (must be verified in Resend)

### How to Set in Vercel

1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add each variable:
   - Variable name: `RESEND_API_KEY`
   - Value: Your actual API key
   - Environment: Production, Preview, Development (select all)
4. Click "Save"
5. Redeploy for changes to take effect

## 📊 Analytics Setup (Optional)

### Vercel Analytics (Recommended)

1. In Vercel dashboard, go to your project
2. Go to Analytics tab
3. Click "Enable Analytics"
4. Free tier includes:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers

### Google Analytics (Optional)

1. Create Google Analytics account
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:
   ```typescript
   import Script from 'next/script'
   
   // In the component:
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

## 🧪 Testing Before Production

### Test Email Functionality

1. Use Resend test mode initially
2. Test with your own email
3. Check spam folder
4. Verify all data appears correctly
5. Test unsubscribe functionality (add later)

### Test User Journey

1. Complete full user journey:
   - Landing page → Learn
   - Assessment → Enter data
   - Results → View all steps
   - Time toggle → Switch formats
   - Potential → See calculations
   - Action Plan → Submit email
2. Test on mobile devices
3. Test on different browsers
4. Check loading times

### Performance Optimization

```bash
# Build and analyze
npm run build

# Check for issues
npm run lint

# Test production build locally
npm run start
```

## 🔄 Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you push to any other branch or open a PR

### Workflow

```bash
# Make changes
git add .
git commit -m "Add new feature"
git push

# Vercel automatically deploys
# Check deployment status at vercel.com/your-project
```

## 📱 Domain Configuration Examples

### Example 1: Using Subdomain

Domain: `app.yourdomain.com`

DNS Records:
```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

### Example 2: Using Root Domain

Domain: `mindfullife.com`

DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Check build locally
npm run build

# Common issues:
# - Missing dependencies: npm install
# - TypeScript errors: npm run type-check
# - Lint errors: npm run lint
```

### Email Not Sending

1. Check Resend API key is correct
2. Verify `FROM_EMAIL` domain is verified
3. Check Vercel function logs
4. Test API endpoint directly:
   ```bash
   curl -X POST https://your-site.vercel.app/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","age":25,"screenTimeMonths":100,"screenTimePercentage":50,"actualFreeTimeMonths":200}'
   ```

### Environment Variables Not Working

1. Make sure variables are set in correct environment
2. Redeploy after adding variables
3. Check variable names match exactly (case-sensitive)
4. Verify no trailing spaces in values

## 💰 Cost Estimation

### Free Tier Limits

**Vercel Free Tier:**
- 100 GB bandwidth/month
- Unlimited deployments
- Serverless function executions: 100GB-Hrs
- Usually enough for 10,000-50,000 visitors/month

**Resend Free Tier:**
- 3,000 emails/month
- 1 verified domain
- Usually enough for starting out

### When to Upgrade

- Vercel Pro ($20/month): 1TB bandwidth, priority support
- Resend Growth ($20/month): 50,000 emails/month

## 📊 Monitoring

### Check Deployment Status

```bash
# List recent deployments
vercel ls

# Get deployment URL
vercel inspect [deployment-url]
```

### View Logs

1. Vercel Dashboard → Your Project → Deployments
2. Click on specific deployment
3. View "Functions" tab for API logs
4. Check for errors in email sending

## 🎉 Post-Deployment Checklist

- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] Forms work correctly
- [ ] Email sending works (test it!)
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Analytics tracking (if enabled)
- [ ] Custom domain working (if configured)
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Error pages work (404, 500)

## 🚀 Next Steps After Deployment

1. **Share with friends** - Get initial feedback
2. **Monitor analytics** - Track user behavior  
3. **Collect emails** - Build your audience
4. **Iterate** - Add features based on feedback
5. **Market** - Share on social media, forums, communities

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Resend Docs: https://resend.com/docs
- Next.js Docs: https://nextjs.org/docs

---

**Ready to launch? Let's change lives! 🌟**
