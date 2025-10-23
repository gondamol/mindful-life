# 🚀 Deployment Checklist

## Pre-Deployment Tasks

### 1. Generate App Icons ⚠️ REQUIRED
The app currently has an SVG source but needs PNG icons generated.

```bash
# Option 1: Use online tool (Recommended)
# Visit https://realfavicongenerator.net/
# Upload: public/icons/icon.svg
# Download and extract to: public/icons/

# Option 2: Use ImageMagick (if installed)
cd public/icons
convert icon.svg -resize 72x72 icon-72x72.png
convert icon.svg -resize 96x96 icon-96x96.png
convert icon.svg -resize 128x128 icon-128x128.png
convert icon.svg -resize 144x144 icon-144x144.png
convert icon.svg -resize 152x152 icon-152x152.png
convert icon.svg -resize 192x192 icon-192x192.png
convert icon.svg -resize 384x384 icon-384x384.png
convert icon.svg -resize 512x512 icon-512x512.png

# Verify all icons exist
ls -lh *.png
```

### 2. Test Build Locally ✅

```bash
# Clean build
rm -rf .next out

# Build production version
npm run build

# Test locally
npm start

# Visit http://localhost:3000
# Test all features:
# - Calculator works
# - Progress saves
# - Share buttons work
# - Install prompt appears (after 30s)
```

### 3. Browser Testing 🌐

Test on these browsers (minimum):
- [ ] Chrome/Edge (Android) - Full PWA support
- [ ] Safari (iOS) - Installation
- [ ] Chrome (Desktop) - Installation
- [ ] Firefox (Desktop) - Browsing only

Check:
- [ ] Calculator input validation
- [ ] Progress persistence (refresh page)
- [ ] Offline mode (disable network in DevTools)
- [ ] Install prompt appears
- [ ] Share functionality
- [ ] Responsive design (all screen sizes)

### 4. Lighthouse Audit 📊

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit (after deploying to production URL)
lighthouse https://your-domain.com --view

# Target scores:
# - Performance: 90+
# - PWA: 100
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### 5. Update URLs in Code 🔗

Search and replace placeholder URLs:

```bash
# Find all instances of placeholder URLs
grep -r "mindfullife.app" .
grep -r "yourdomain.com" .
grep -r "your-site.com" .

# Update in these files:
# - app/layout.tsx (metadata.openGraph.url)
# - public/manifest.json (if using domain)
# - lib/sharing.ts (default siteUrl)
```

## Deployment Steps

### Option 1: Vercel (Recommended) ⚡

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Your app will be at: https://your-project.vercel.app
```

**Post-Deploy:**
1. Add custom domain (optional)
2. Configure environment variables (if needed)
3. Enable analytics (optional)

### Option 2: Netlify 🎯

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod

# Or drag & drop build folder to Netlify dashboard
```

**Post-Deploy:**
1. Configure custom domain
2. Enable HTTPS (auto)
3. Set up redirects (if needed)

### Option 3: Self-Hosted 🖥️

```bash
# Build
npm run build

# Copy these to your server:
# - .next/
# - public/
# - node_modules/
# - package.json
# - next.config.ts

# On server, start with PM2
npm install -g pm2
pm2 start npm --name "mindful-life" -- start
pm2 save
pm2 startup

# Or use Docker
# See Dockerfile if you create one
```

## Post-Deployment Verification

### 1. PWA Installation ✅
- [ ] Visit site on Android Chrome
- [ ] Install prompt appears
- [ ] Can install to home screen
- [ ] App opens in standalone mode
- [ ] Offline mode works

### 2. Features Work ✅
- [ ] Calculator accepts input
- [ ] Results display correctly
- [ ] Progress saves and loads
- [ ] Achievements unlock
- [ ] Share buttons work
- [ ] All links functional

### 3. Performance ✅
- [ ] Page loads < 2s
- [ ] Images optimized
- [ ] Service worker registers
- [ ] Cache working
- [ ] Lighthouse score 90+

### 4. SEO & Social ✅
- [ ] Open Graph tags working
- [ ] Twitter card preview
- [ ] Sitemap generated (optional)
- [ ] robots.txt configured (optional)

## Marketing & Launch

### 1. Social Media Preparation 📱

**Create Screenshots:**
```
1. Home page (hero section)
2. Calculator page (filled in)
3. Results page (dot matrix)
4. Progress dashboard
5. Achievement unlocked popup
6. Share dialog
```

**Prepare Posts:**
- Use templates from SOCIAL_MEDIA_LAUNCH.md
- Create UTM parameters for tracking
- Schedule posts across platforms

### 2. Launch Sequence 🎯

**Day 1: Soft Launch**
- [ ] Deploy to production
- [ ] Test all features live
- [ ] Share with close friends
- [ ] Gather initial feedback

**Day 2-3: Social Launch**
- [ ] Twitter/X announcement
- [ ] LinkedIn post
- [ ] WhatsApp status
- [ ] Personal network

**Day 4-7: Community Launch**
- [ ] Reddit posts (r/productivity, r/digitalminimalism)
- [ ] Product Hunt submission
- [ ] Hacker News submission
- [ ] Email to mailing list

**Week 2+: Growth**
- [ ] Monitor analytics
- [ ] Respond to feedback
- [ ] Fix bugs
- [ ] Iterate on features

### 3. Monitoring 📊

**Key Metrics to Track:**
```
Daily:
- Visitors
- Installations
- Calculations completed
- Share rate

Weekly:
- Retention (D1, D7)
- Engagement rate
- Top sharing platforms
- Error rate

Monthly:
- Growth rate
- Viral coefficient
- Feature usage
- User feedback themes
```

**Tools to Use:**
- Google Analytics (optional)
- Vercel Analytics (built-in)
- Browser DevTools (PWA section)
- User feedback form

## Troubleshooting Common Issues

### Service Worker Not Updating
```bash
# Force service worker update
# In browser DevTools:
# Application → Service Workers → Update

# Or add version to manifest.json
# And bump it on each deploy
```

### Icons Not Showing
```bash
# Verify icon files exist
ls public/icons/*.png

# Check manifest.json paths are correct
# Clear cache and hard reload
```

### Install Prompt Not Appearing
```bash
# Requirements:
# - HTTPS (required)
# - Service worker registered
# - Valid manifest.json
# - Not already installed
# - User has visited 2+ times

# Check DevTools:
# Application → Manifest
# Application → Service Workers
```

### Offline Mode Not Working
```bash
# Check service worker status
# DevTools → Application → Service Workers
# Status should be "activated and running"

# Check cache
# Application → Cache Storage
# Should see multiple caches

# Test by disabling network in DevTools
```

## Security Checklist 🔒

- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] No API keys in client code
- [ ] CSP headers configured (optional)
- [ ] Input validation on all forms
- [ ] XSS protection in place
- [ ] Dependencies updated (npm audit)

## Performance Optimization

### After First Week
- [ ] Analyze Lighthouse report
- [ ] Check bundle size (npm run build)
- [ ] Optimize images if needed
- [ ] Review service worker cache strategy
- [ ] Enable compression (gzip/brotli)

### Ongoing
- [ ] Monitor Core Web Vitals
- [ ] Update dependencies monthly
- [ ] Review error logs
- [ ] A/B test improvements

## Next Steps After Launch

### Immediate (Week 1)
1. Monitor for critical bugs
2. Respond to user feedback
3. Track installation rate
4. Share success stories

### Short-term (Month 1)
1. Generate app icons (if not done)
2. Set up push notifications backend
3. Add analytics dashboard
4. Create tutorial/onboarding

### Medium-term (Month 2-3)
1. Build native Android app with Capacitor
2. Add custom goal setting
3. Implement referral system
4. Create content marketing

### Long-term (Month 4+)
1. Community features
2. Premium tier (optional)
3. Multi-language support
4. Advanced integrations

---

## Quick Deploy Commands

```bash
# Complete deployment in 5 minutes:

# 1. Generate icons (use online tool)
# https://realfavicongenerator.net/

# 2. Install Vercel CLI
npm install -g vercel

# 3. Deploy
vercel login
vercel --prod

# 4. Test installation on phone
# Visit your-app.vercel.app
# Install to home screen

# 5. Share and celebrate! 🎉
```

---

**Status**: Ready for deployment after generating icons  
**Estimated Deploy Time**: 15 minutes  
**Difficulty**: Easy (with Vercel/Netlify)

**Support**: See PWA_GUIDE.md for user instructions and ANDROID_BUILD.md for native app building.
