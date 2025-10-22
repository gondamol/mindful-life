# Ubuntu Wisdom Academy - Quick Start Guide

## 🚀 Get Started in 15 Minutes

### Prerequisites Checklist
- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Supabase account (free)
- [ ] Vercel account (free)

---

## OPTION 1: Automated Setup (Easiest)

### 1. Clone & Install
```bash
cd /home/gondamol/gondamol/screentime/mindful-life
npm install
```

### 2. Run Setup Script
```bash
./setup-local.sh
```

This will:
- Create `.env.local` from template
- Guide you through required values
- Open editor for configuration

### 3. Add Your Keys

Fill in `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXTAUTH_SECRET=UrXsg4fGB0/te4cMdAnbO3IZJ6WTEI387WB+WW5Zixc=
```

### 4. Load Database
- Go to Supabase → SQL Editor
- Copy contents of `supabase/schema.sql`
- Paste and Run

### 5. Start Development
```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## OPTION 2: Manual Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get API keys from Settings → API
4. Run `supabase/schema.sql` in SQL Editor

### 2. Configure Environment

```bash
cp env.template .env.local
# Edit .env.local with your values
```

### 3. Install & Run

```bash
npm install
npm run dev
```

---

## 📋 What You Get

After setup, you'll have:

✅ **Free Tools**:
- Screen time calculator
- 21 blog articles with search
- Free course preview (Modules 1-2)
- Downloadable workbooks

✅ **Premium Features** (requires payment setup):
- Full course (8 modules, 24 lessons)
- Interactive quizzes
- Progress tracking
- Certificates
- Community forum
- Live coaching

---

## 🚢 Deploy to Production

**Full guide:** See `DEPLOYMENT_GUIDE.md`

**Quick version:**

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

---

## 📱 Test the App

### Try the User Journey:

1. **Landing Page** (`/`)
   - Enter age: `23`
   - Enter screen time: `5 hours, 30 minutes`
   - Click "Show me"

2. **Results Page** (`/results`)
   - Click through 16 steps
   - Watch the dot matrix animations
   - See the shocking statistics
   - Compare current vs 50% reduced screen time

3. **Action Plan** (`/action-plan`)
   - Read the 4 strategies
   - Enter email for follow-up
   - See success message

---

## 🛠️ Development Tips

### Project Structure
```
app/
├── page.tsx           → Landing page (start here)
├── results/page.tsx   → Main visualization
└── action-plan/       → Strategies & email

lib/
├── calculations.ts    → Life stats logic
└── utils.ts          → Helpers

components/
└── DotMatrix.tsx     → Visualization component
```

### Key Files to Modify

**Change life expectancy:**
```typescript
// lib/calculations.ts
export const LIFE_EXPECTANCY = 65; // Change this
```

**Modify activities:**
```typescript
// lib/calculations.ts
export const ACTIVITY_HOURS = {
  sleep: 8,    // Adjust these
  work: 8,
  // ... etc
};
```

**Update colors:**
```typescript
// app/results/page.tsx
{ count: stats.sleepMonths, color: "bg-blue-500" }
// Use any Tailwind color
```

---

## 🎨 Customization Ideas

### Easy Tweaks:
1. Change theme colors in `globals.css`
2. Modify animation speeds in components (Framer Motion)
3. Add more steps to results journey
4. Customize calculation formulas

### Medium Changes:
1. Add new activity categories
2. Create alternative visualization styles
3. Add more philosophy quotes
4. Build additional pages

### Advanced Features:
1. Backend integration (see ROADMAP.md)
2. Database setup with Supabase
3. Email automation
4. User authentication

---

## 📊 Understanding the Calculations

### Example for 23-year-old with 5.5 hours screen time:

```
Life left: 65 - 23 = 42 years = 504 months

Sleep: (8/24) × 504 = 168 months
Work: (8/24) × 47 years × 12 = 188 months
... other activities ...

Free time: 504 - (sleep + work + ...) = ~300 months
Screen time: (5.5/24) × 504 = ~115 months
Actual free time: 300 - 115 = ~185 months

Percentage: (115/300) × 100 = 38% of free time on screens
```

---

## 🐛 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### Issue: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Issue: Animations not working
- Check Framer Motion is installed: `npm list framer-motion`
- Ensure "use client" directive is at top of component

### Issue: Styles not applying
- Check TailwindCSS config
- Restart dev server
- Clear `.next` folder

---

## 📈 Next Steps After MVP

1. **Get Feedback**
   - Share with friends
   - Post on social media
   - Gather user insights

2. **Set Up Backend** (see ROADMAP.md Phase 2)
   - Email service (Resend)
   - Database (Supabase)
   - Analytics

3. **Add Content**
   - Philosophy quotes
   - Resource library
   - More strategies

4. **Deploy**
   - Vercel (recommended)
   - Netlify
   - Custom server

---

## 🔗 Useful Resources

### Documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Inspiration:
- [Screen-Aware Original](https://www.screen-aware.com/)
- [Dino Ambrosi TEDx Talk](https://www.youtube.com/watch?v=4TMPXK9tw5U)

### Philosophy:
- [Daily Stoic](https://dailystoic.com/)
- [Marcus Aurelius - Meditations](https://www.gutenberg.org/ebooks/2680)

---

## 💻 VS Code Setup (Recommended)

### Extensions:
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Prettier

### Settings:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Cleanup
rm -rf .next         # Clear build cache
rm -rf node_modules  # Remove dependencies
npm install          # Reinstall everything
```

---

## 🤝 Contributing

Want to improve the app? Here's how:

1. **Small fixes**: Just edit and test locally
2. **New features**: Check ROADMAP.md for ideas
3. **Bugs**: Note them and fix if you can
4. **Ideas**: Document in issues or discussions

---

## ⚡ Pro Tips

1. **Test with real data**: Use your actual age and screen time
2. **Mobile first**: Always check mobile view (responsive)
3. **Performance**: Keep animations smooth (60fps)
4. **Accessibility**: Test with keyboard navigation
5. **Privacy**: Never log personal data in production

---

## 📞 Need Help?

- Check README.md for overview
- Check ROADMAP.md for future plans
- Look at code comments
- Review Next.js documentation
- Test in browser console for errors

---

**Happy Coding! Build something that helps people live better lives. 🌟**
