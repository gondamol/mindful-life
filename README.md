# 📱 Mindful Life - Digital Wellness PWA

> A mobile-first Progressive Web App that helps people break free from digital addiction through gamification, ancient wisdom, and modern behavioral science.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen)](https://web.dev/pwa-checklist/)
[![Mobile First](https://img.shields.io/badge/Mobile-First-blue)](https://developers.google.com/web/fundamentals/design-and-ux/principles)
[![Offline Capable](https://img.shields.io/badge/Offline-Capable-orange)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

**Install on your phone and track your journey to digital freedom!**

## ✨ Features

### 🎯 Core Experience
- **Interactive Life Visualization** - Dot matrix showing your remaining life in months
- **Screen Time Impact Calculator** - See exactly how much time you'll lose
- **Progressive Revelation** - 16-step journey through your life breakdown
- **Mobile-First Design** - Optimized for touch with 48px+ tap targets
- **Offline Capable** - Works without internet connection
- **Installable** - Add to home screen on any device

### 🏆 Gamification System
- **10 Achievements** - Unlock badges for progress milestones
- **Streak Tracking** - Build daily check-in habits (up to 100+ days)
- **Level System** - Gain XP and advance through 11 levels
- **Progress Dashboard** - Visualize your journey with stats
- **Motivational Messages** - Context-aware encouragement
- **Local Storage** - All progress saved on your device

### 📤 Social Sharing
- **Native Share API** - One-tap sharing on mobile
- **Multi-Platform Support** - Twitter, Facebook, WhatsApp, LinkedIn, Telegram
- **Copy to Clipboard** - Easy link sharing
- **Shareable Results** - Generate images for social media
- **Referral Tracking** - Earn XP for helping friends

### 📱 Progressive Web App
- **Service Worker** - Comprehensive caching strategies
- **App Manifest** - Proper metadata and shortcuts
- **Install Prompts** - Smart suggestions to install
- **Offline Support** - All features work without connection
- **Fast Loading** - < 1 second startup time
- **App Shortcuts** - Quick access to calculator

### 🔔 Engagement (Ready)
- **Push Notifications** - Daily reminders and achievements
- **Customizable Schedule** - Set your preferred check-in times
- **Motivational Quotes** - Daily wisdom delivery
- **Streak Warnings** - Don't break your streak alerts

### 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PWA**: next-pwa with Workbox
- **Font**: Geist (Vercel)
- **State**: Local Storage + Session Storage

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
mindful-life/
├── app/
│   ├── page.tsx                # Landing page with hero
│   ├── assess/page.tsx         # Mobile-first calculator
│   ├── results/page.tsx        # Dot matrix visualization
│   ├── action-plan/page.tsx    # Strategies & email
│   ├── academy/                # Philosophy courses
│   ├── blog/                   # Content pages
│   ├── api/                    # API routes
│   ├── layout.tsx              # Root layout with PWA meta
│   └── globals.css             # Global styles
├── components/
│   ├── DotMatrix.tsx           # Life visualization
│   ├── AchievementBadge.tsx    # Achievement display
│   ├── StreakDisplay.tsx       # Streak tracking
│   ├── ShareButtons.tsx        # Social sharing
│   ├── InstallPrompt.tsx       # PWA install prompts
│   ├── ProgressDashboard.tsx   # Full progress view
│   └── ProgressSummary.tsx     # Compact progress
├── lib/
│   ├── calculations.ts         # Life statistics
│   ├── gamification.ts         # Achievements & XP
│   ├── sharing.ts              # Social share utilities
│   ├── notifications.ts        # Push notifications
│   └── utils.ts                # Helper functions
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── icons/                  # App icons (72-512px)
│   └── screenshots/            # App store screenshots
├── scripts/
│   └── generate-icons.sh       # Icon generation helper
└── Documentation/
    ├── ANDROID_BUILD.md        # Native Android guide
    ├── PWA_GUIDE.md            # Installation instructions
    └── TRANSFORMATION_SUMMARY.md # Feature overview
```

## 🎯 User Flow

1. **Landing Page**: User enters age and daily screen time
2. **Results Journey**: 16-step progression showing:
   - Total months remaining in life
   - Time spent on sleep, work, chores, etc.
   - Free time calculation
   - Screen time impact (shocking percentage)
   - Comparison showing 50% reduction benefits
3. **Action Plan**: User sees 4 proven strategies and can sign up for follow-up

## 📊 Calculations

### Life Expectancy
- **Default**: 65 years (Kenya average)
- Accounts for retirement at 70
- Breaks down life into monthly units

### Activities Calculated
- Sleep: 8 hours/day
- Work: 8 hours/day (until retirement)
- Travel: 1 hour/day
- Chores: 2 hours/day
- Cooking/Eating: 2 hours/day
- Hygiene: 1.5 hours/day
- Free Time: Remaining time
- Screen Time: User-provided daily usage

## 🎨 Design Philosophy

- **Dark Theme**: Reduces eye strain, creates focus
- **Minimal UI**: No distractions from the message
- **Progressive Disclosure**: One insight at a time
- **Emotional Impact**: Visual representation makes numbers tangible
- **Actionable**: Ends with clear, practical steps

## 🚀 Quick Start

### For Users (Install PWA)

**Android:**
```
1. Visit the website in Chrome/Edge
2. Tap menu (⋮) → "Add to Home screen"
3. Tap "Install"
4. Find app icon on your home screen
```

**iOS:**
```
1. Visit in Safari
2. Tap Share (□↑) → "Add to Home Screen"
3. Tap "Add"
```

**Desktop:**
```
1. Look for install icon (⊕) in address bar
2. Click "Install"
```

See [PWA_GUIDE.md](PWA_GUIDE.md) for detailed instructions.

### For Developers

```bash
# Clone repository
git clone <repo-url>
cd mindful-life

# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start

# Generate app icons (requires ImageMagick)
./scripts/generate-icons.sh
```

## 📱 Building for Android

See [ANDROID_BUILD.md](ANDROID_BUILD.md) for:
- PWA installation (recommended)
- Capacitor native app
- Trusted Web Activity (TWA)
- Google Play Store submission

## 🎮 Gamification System

### Achievements (10 total)
- 👁️ **Wake Up Call** - First calculation
- 🔥 **7-Day Warrior** - Week streak
- 🌟 **Mindful Month** - 30-day streak
- 📉 **Quarter Back** - 25% reduction
- ✨ **Half Free** - 50% reduction
- 📢 **Inspire Others** - Share results
- 🤝 **Digital Monk** - Refer a friend
- 🎓 **Wisdom Seeker** - Complete course
- 🏛️ **Stoic Master** - Complete all courses
- 🚀 **Pioneer** - First 1000 users

### XP Rewards
- First calculation: **50 XP**
- Daily check-in: **10 XP**
- Week streak bonus: **100 XP**
- Month streak bonus: **500 XP**
- Share results: **75 XP**
- Refer friend: **150 XP**
- Complete course: **200 XP**

### Level Progression
11 levels from 0 to 10, requiring increasing XP:
- Level 1: 100 XP
- Level 5: 2,000 XP
- Level 10: 15,000 XP

## 🔮 Roadmap

### ✅ Completed (v2.0)
- [x] PWA with offline support
- [x] Mobile-first responsive design
- [x] Gamification system
- [x] Social sharing
- [x] Streak tracking
- [x] Achievement system
- [x] Progress dashboard
- [x] Install prompts

### 🚧 In Progress
- [ ] Generate app icons from SVG
- [ ] Push notification backend
- [ ] Web Push API integration
- [ ] Analytics dashboard

### 📋 Planned (v2.1)
- [ ] Native Android app (Capacitor)
- [ ] Background screen time tracking
- [ ] Custom goal setting
- [ ] Widget support
- [ ] Apple Watch companion

### 🔮 Future (v3.0)
- [ ] Community features
- [ ] Leaderboards
- [ ] Challenges
- [ ] Multi-language (Swahili, French)
- [ ] Premium features

## 🛠️ Development

### Key Components

**DotMatrix**: Renders life visualization
```typescript
<DotMatrix 
  totalDots={804} 
  coloredDots={[{count: 267, color: "bg-blue-500"}]}
  animate={true}
/>
```

**Calculations**: Core life statistics engine
```typescript
const stats = calculateLifeStats({
  age: 23,
  dailyScreenHours: 5,
  dailyScreenMinutes: 30
});
```

## 📝 Environment Variables

Currently none required for core functionality.

### Optional (Future)
```bash
# Push Notifications
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_vapid_public_key
VAPID_PRIVATE_KEY=your_vapid_private_key

# Email (if implementing backend)
EMAIL_API_KEY=your_resend_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Database (for user accounts)
DATABASE_URL=your_supabase_url
```

## 🤝 Contributing

This project is designed to help people live more intentionally. Contributions welcome!

## 📄 License

MIT License - Feel free to use for good

## 📊 Performance

### Lighthouse Scores (Target)
- ⚡ Performance: 90+
- 📱 PWA: 100
- ♿ Accessibility: 95+
- ✅ Best Practices: 95+
- 🔍 SEO: 100

### Loading Speed
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Service Worker: < 1s startup

### Bundle Size
- Initial load: ~500 KB
- With assets cached: ~2 MB
- Incremental updates: Only changed files

## 🔐 Privacy & Security

### Data Storage
- ✅ **100% local** - All data stored on your device
- ✅ **No tracking** - No analytics or third-party scripts
- ✅ **No accounts** - Use instantly without signup
- ✅ **Open source** - Audit the code yourself

### What's Stored Locally
- Age and screen time inputs
- Progress and achievements
- Streak information
- Notification preferences

### What's NOT Collected
- ❌ Personal information
- ❌ Browsing history
- ❌ Location data
- ❌ Any identifiable data

## 🙏 Credits & Inspiration

- **Original Tool**: Screen-Aware by Kees Brinkmans
- **Motivation**: Dino Ambrosi's TEDx talk "The Battle for Your Time"
- **Philosophy**: Marcus Aurelius, Seneca, Epictetus, Buddhist teachings
- **Design**: Modern PWA best practices
- **Community**: Digital wellness advocates worldwide

## 📧 Contact

For questions or collaboration: +254 725 737 867

---

**Built with ❤️ for digital wellness in Kenya and beyond**
