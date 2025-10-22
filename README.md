# Mindful Life - Digital Wellness Platform

A comprehensive web application that helps people understand their screen time impact and provides actionable strategies rooted in Stoic and Buddhist philosophy to reclaim their time and live more intentionally.

## 🌟 Features

### Core Features (MVP - ✅ Complete)
- **Life Visualization**: Interactive dot matrix showing remaining life in months
- **Screen Time Analysis**: Calculate how much of your free time goes to screens
- **Step-by-Step Revelation**: Progressive display of life breakdown (sleep, work, free time, etc.)
- **Action Plan**: 4 proven strategies to reduce screen time by 50%
- **Email Collection**: Personalized follow-up system (frontend ready)
- **Localized Data**: Uses 65-year life expectancy for Kenya/East Africa

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (Vercel)

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
│   ├── page.tsx              # Landing page with inputs
│   ├── results/page.tsx      # Dot matrix visualization & results
│   ├── action-plan/page.tsx  # Strategies & email collection
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── DotMatrix.tsx         # Reusable dot visualization component
├── lib/
│   ├── calculations.ts       # Life statistics calculations
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
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

## 🔮 Future Enhancements

### Phase 2: Philosophy Integration
- Daily Stoic lessons
- Buddhist mindfulness practices
- Philosophical journaling
- Quote of the day with reflection prompts

### Phase 3: Community Features
- User accounts & profiles
- Accountability partners
- Progress tracking
- Community challenges

### Phase 4: Advanced Features
- Mobile app (React Native)
- Offline capabilities
- Email automation backend
- Analytics dashboard
- Multi-language support (Swahili)

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

Currently none required for MVP. Future phases will need:
- `EMAIL_API_KEY` - For email automation
- `DATABASE_URL` - For user data storage
- `ANALYTICS_ID` - For tracking

## 🤝 Contributing

This project is designed to help people live more intentionally. Contributions welcome!

## 📄 License

MIT License - Feel free to use for good

## 🙏 Inspiration

- Original Screen-Aware tool by Kees Brinkmans
- Dino Ambrosi's TEDx talk "The Battle for Your Time"
- Stoic philosophy (Marcus Aurelius, Seneca, Epictetus)
- Buddhist mindfulness practices

## 📧 Contact

For questions or collaboration: +254 725 737 867

---

**Built with ❤️ for digital wellness in Kenya and beyond**
