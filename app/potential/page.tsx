"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Dumbbell, Code, Languages, Music, Briefcase, GraduationCap, Heart, Home } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LIFE_EXPECTANCY } from "@/lib/calculations";

interface Achievement {
  icon: any;
  title: string;
  description: string;
  calculation: (hoursPerDay: number, years: number) => string;
  color: string;
}

export default function PotentialPage() {
  const router = useRouter();
  const [screenTimeMonths, setScreenTimeMonths] = useState(0);
  const [screenTimeHoursPerDay, setScreenTimeHoursPerDay] = useState(0);

  useEffect(() => {
    const data = sessionStorage.getItem("lifeData");
    if (data) {
      const parsed = JSON.parse(data);
      const totalHours = parsed.dailyScreenHours + parsed.dailyScreenMinutes / 60;
      setScreenTimeHoursPerDay(totalHours);
      
      // Get screen time months from calculations
      const yearsLeft = LIFE_EXPECTANCY - parsed.age;
      const totalMonths = yearsLeft * 12;
      const screenTimeMonths = Math.round((totalHours / 24) * totalMonths);
      setScreenTimeMonths(screenTimeMonths);
    }
  }, []);

  const years = screenTimeMonths / 12;
  const hoursPerDay = screenTimeHoursPerDay;

  const achievements: Achievement[] = [
    {
      icon: BookOpen,
      title: "Books You Could Read",
      description: "At 20 minutes per day (250 words/min)",
      calculation: (h, y) => {
        const minsPerDay = h * 60;
        const booksPerYear = (minsPerDay / 20) * 365 / 50; // ~50 days to read a book at 20 min/day
        return `${Math.round(booksPerYear * y)} books`;
      },
      color: "text-yellow-500"
    },
    {
      icon: Languages,
      title: "Languages You Could Master",
      description: "15-30 minutes daily = fluency in 1-2 years",
      calculation: (h, y) => {
        const minsPerDay = h * 60;
        if (minsPerDay >= 30) {
          const languages = Math.floor(y / 1.5); // 1.5 years per language at 30 min/day
          return languages === 0 ? "1 language" : `${languages} languages`;
        }
        return "1 language (with 15 min/day)";
      },
      color: "text-blue-500"
    },
    {
      icon: Dumbbell,
      title: "Fitness Transformation",
      description: "30 minutes daily = complete body transformation",
      calculation: (h, y) => {
        const minsPerDay = h * 60;
        if (minsPerDay >= 30) {
          return "Complete body transformation + maintain peak fitness";
        }
        return "Significant fitness gains possible";
      },
      color: "text-green-500"
    },
    {
      icon: Code,
      title: "Skills You Could Master",
      description: "10,000 hours = expert level (Malcolm Gladwell)",
      calculation: (h, y) => {
        const totalHours = h * 365 * y;
        const skills = Math.floor(totalHours / 10000);
        if (skills >= 1) {
          return `${skills} expert-level skill${skills > 1 ? 's' : ''}`;
        }
        const percentage = Math.round((totalHours / 10000) * 100);
        return `${percentage}% toward mastery of 1 skill`;
      },
      color: "text-purple-500"
    },
    {
      icon: Music,
      title: "Musical Instrument",
      description: "1 hour daily = proficiency in 2 years",
      calculation: (h, y) => {
        if (h >= 1) {
          const instruments = Math.floor(y / 2);
          return instruments === 0 ? "Proficient in 1 instrument" : `Master ${instruments} instrument${instruments > 1 ? 's' : ''}`;
        }
        return "Learn 1 instrument to intermediate level";
      },
      color: "text-pink-500"
    },
    {
      icon: Briefcase,
      title: "Side Business or Project",
      description: "Dedicated hours to build something meaningful",
      calculation: (h, y) => {
        const totalHours = h * 365 * y;
        if (totalHours >= 1000) {
          return `${Math.round(totalHours / 1000)} successful projects`;
        }
        return "Launch and grow 1 side project";
      },
      color: "text-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Certifications & Degrees",
      description: "Professional development and education",
      calculation: (h, y) => {
        const totalHours = h * 365 * y;
        if (totalHours >= 120) {
          const certs = Math.floor(totalHours / 120); // ~120 hours per cert
          return `${certs} professional certification${certs > 1 ? 's' : ''}`;
        }
        return "Multiple online courses completed";
      },
      color: "text-cyan-500"
    },
    {
      icon: Heart,
      title: "Relationships Deepened",
      description: "Quality time with loved ones",
      calculation: (h, y) => {
        const hoursPerWeek = h * 7;
        return `${Math.round(hoursPerWeek)} hours/week with family & friends`;
      },
      color: "text-red-500"
    },
  ];

  if (!screenTimeMonths) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">No assessment data found</p>
          <button
            onClick={() => router.push("/assess")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Take Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            What You Could Achieve
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            With your {Math.round(hoursPerDay * 10) / 10} hours of daily screen time
          </p>
          <p className="text-xl text-gray-400">
            That's {Math.round(years * 10) / 10} years or {screenTimeMonths} months of your life
          </p>
        </motion.div>

        {/* Marginal Gains Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800 rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">The Power of Marginal Gains</h2>
          <p className="text-gray-300 mb-4">
            "You do not rise to the level of your goals. You fall to the level of your systems." — James Clear
          </p>
          <p className="text-gray-400">
            Small, consistent actions compound over time. Just 15 minutes a day becomes 91 hours a year.
            1 hour a day becomes 365 hours annually. This is how you achieve your most ambitious goals.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <achievement.icon className={`w-12 h-12 ${achievement.color} flex-shrink-0`} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                  <div className={`text-2xl font-bold ${achievement.color}`}>
                    {achievement.calculation(hoursPerDay, years)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">How to Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Pick ONE Thing</h3>
              <p className="text-gray-400">
                Don't try to do everything. Choose the one achievement that excites you most.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Start Tiny</h3>
              <p className="text-gray-400">
                Begin with just 15 minutes a day. Make it so easy you can't say no.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Build the Habit</h3>
              <p className="text-gray-400">
                Focus on consistency over intensity. Show up every day, even if it's brief.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Reclaim Your Time?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Every moment spent on screens is a moment not spent building the life you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/action-plan")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-medium transition-all"
            >
              Get Your Action Plan
            </button>
            <button
              onClick={() => router.push("/results")}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg font-medium transition-all"
            >
              View Full Results
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
