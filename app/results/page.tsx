"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Home } from "lucide-react";
import { DotMatrix } from "@/components/DotMatrix";
import { calculateLifeStats, getActivitiesData, getScreenTimeComparison, formatTime, type LifeData } from "@/lib/calculations";

type TimeDisplayMode = 'months' | 'years' | 'days';

export default function ResultsPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [lifeData, setLifeData] = useState<LifeData | null>(null);
  const [stats, setStats] = useState<ReturnType<typeof calculateLifeStats> | null>(null);
  const [timeMode, setTimeMode] = useState<TimeDisplayMode>('months');

  useEffect(() => {
    const data = sessionStorage.getItem("lifeData");
    if (data) {
      const parsed = JSON.parse(data) as LifeData;
      setLifeData(parsed);
      setStats(calculateLifeStats(parsed));
    } else {
      router.push("/");
    }
  }, [router]);

  if (!lifeData || !stats) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  const activities = getActivitiesData(stats);
  const comparison = getScreenTimeComparison(stats);

  // Helper function to format time based on selected mode
  const formatTimeDisplay = (months: number): string => {
    const formatted = formatTime(months);
    switch (timeMode) {
      case 'years':
        return formatted.yearsDisplay;
      case 'days':
        return formatted.daysDisplay;
      default:
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    }
  };

  const steps = [
    {
      title: `This is the time you have left in your life: ${formatTimeDisplay(stats.totalMonthsLeft)}`,
      subtitle: "(Assuming 65 year life expectancy)",
      dots: stats.totalMonthsLeft,
      colored: [],
    },
    {
      title: "You'll spend 1/3rd of that time sleeping",
      subtitle: "",
      dots: stats.totalMonthsLeft,
      colored: [{ count: stats.sleepMonths, color: "bg-blue-500" }],
      legend: [{ emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" }],
    },
    {
      title: `You'll be working for ${formatTimeDisplay(stats.workMonths)}`,
      subtitle: "(Assuming retirement at 70)",
      dots: stats.totalMonthsLeft,
      colored: [
        { count: stats.sleepMonths, color: "bg-blue-500" },
        { count: stats.workMonths, color: "bg-yellow-500" },
      ],
      legend: [
        { emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" },
        { emoji: "💼", name: "Work", months: stats.workMonths, color: "bg-yellow-500" },
      ],
    },
    {
      title: `You'll spend ${formatTimeDisplay(stats.travelMonths)} driving/on the go`,
      subtitle: "",
      dots: stats.totalMonthsLeft,
      colored: [
        { count: stats.sleepMonths, color: "bg-blue-500" },
        { count: stats.workMonths, color: "bg-yellow-500" },
        { count: stats.travelMonths, color: "bg-pink-500" },
      ],
      legend: [
        { emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" },
        { emoji: "💼", name: "Work", months: stats.workMonths, color: "bg-yellow-500" },
        { emoji: "🚗", name: "Travel", months: stats.travelMonths, color: "bg-pink-500" },
      ],
    },
    {
      title: `${formatTimeDisplay(stats.choresMonths)} for chores and errands`,
      subtitle: "",
      dots: stats.totalMonthsLeft,
      colored: [
        { count: stats.sleepMonths, color: "bg-blue-500" },
        { count: stats.workMonths, color: "bg-yellow-500" },
        { count: stats.travelMonths, color: "bg-pink-500" },
        { count: stats.choresMonths, color: "bg-purple-500" },
      ],
      legend: [
        { emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" },
        { emoji: "💼", name: "Work", months: stats.workMonths, color: "bg-yellow-500" },
        { emoji: "🚗", name: "Travel", months: stats.travelMonths, color: "bg-pink-500" },
        { emoji: "🧹", name: "Chores", months: stats.choresMonths, color: "bg-purple-500" },
      ],
    },
    {
      title: `${formatTimeDisplay(stats.cookingMonths)} will be spent cooking and eating`,
      subtitle: "",
      dots: stats.totalMonthsLeft,
      colored: [
        { count: stats.sleepMonths, color: "bg-blue-500" },
        { count: stats.workMonths, color: "bg-yellow-500" },
        { count: stats.travelMonths, color: "bg-pink-500" },
        { count: stats.choresMonths, color: "bg-purple-500" },
        { count: stats.cookingMonths, color: "bg-orange-500" },
      ],
      legend: [
        { emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" },
        { emoji: "💼", name: "Work", months: stats.workMonths, color: "bg-yellow-500" },
        { emoji: "🚗", name: "Travel", months: stats.travelMonths, color: "bg-pink-500" },
        { emoji: "🧹", name: "Chores", months: stats.choresMonths, color: "bg-purple-500" },
        { emoji: "🍳", name: "Cooking/Eating", months: stats.cookingMonths, color: "bg-orange-500" },
      ],
    },
    {
      title: `And you'll spend ${formatTimeDisplay(stats.hygieneMonths)} in the bathroom, taking care of hygiene`,
      subtitle: "",
      dots: stats.totalMonthsLeft,
      colored: [
        { count: stats.sleepMonths, color: "bg-blue-500" },
        { count: stats.workMonths, color: "bg-yellow-500" },
        { count: stats.travelMonths, color: "bg-pink-500" },
        { count: stats.choresMonths, color: "bg-purple-500" },
        { count: stats.cookingMonths, color: "bg-orange-500" },
        { count: stats.hygieneMonths, color: "bg-green-500" },
      ],
      legend: [
        { emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" },
        { emoji: "💼", name: "Work", months: stats.workMonths, color: "bg-yellow-500" },
        { emoji: "🚗", name: "Travel", months: stats.travelMonths, color: "bg-pink-500" },
        { emoji: "🧹", name: "Chores", months: stats.choresMonths, color: "bg-purple-500" },
        { emoji: "🍳", name: "Cooking/Eating", months: stats.cookingMonths, color: "bg-orange-500" },
        { emoji: "🚿", name: "Hygiene", months: stats.hygieneMonths, color: "bg-green-500" },
      ],
    },
    {
      title: `That leaves you with ${formatTimeDisplay(stats.freeTimeMonths)} of YOU time. Free time`,
      subtitle: "",
      dots: stats.totalMonthsLeft,
      colored: [
        { count: stats.sleepMonths, color: "bg-blue-500" },
        { count: stats.workMonths, color: "bg-yellow-500" },
        { count: stats.travelMonths, color: "bg-pink-500" },
        { count: stats.choresMonths, color: "bg-purple-500" },
        { count: stats.cookingMonths, color: "bg-orange-500" },
        { count: stats.hygieneMonths, color: "bg-green-500" },
      ],
      legend: [
        { emoji: "😴", name: "Sleep", months: stats.sleepMonths, color: "bg-blue-500" },
        { emoji: "💼", name: "Work", months: stats.workMonths, color: "bg-yellow-500" },
        { emoji: "🚗", name: "Travel", months: stats.travelMonths, color: "bg-pink-500" },
        { emoji: "🧹", name: "Chores", months: stats.choresMonths, color: "bg-purple-500" },
        { emoji: "🍳", name: "Cooking/Eating", months: stats.cookingMonths, color: "bg-orange-500" },
        { emoji: "🚿", name: "Hygiene", months: stats.hygieneMonths, color: "bg-green-500" },
        { emoji: "✨", name: "Free Time", months: stats.freeTimeMonths, color: "bg-gray-400" },
      ],
    },
    {
      title: `Let's dive deeper into that free time: those ${formatTimeDisplay(stats.freeTimeMonths)}`,
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [],
    },
    {
      title: "In this time you'll tick off things on your bucket list",
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.freeTimeMonths, color: "bg-gray-600" }],
      legend: [{ emoji: "🎯", name: "Bucket list", months: 0, color: "bg-pink-500" }],
    },
    {
      title: "You'll make memories with friends",
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.freeTimeMonths, color: "bg-gray-600" }],
      legend: [
        { emoji: "🎯", name: "Bucket list", months: 0, color: "bg-pink-500" },
        { emoji: "👥", name: "Friends", months: 0, color: "bg-blue-500" },
      ],
    },
    {
      title: "You'll spend time with family",
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.freeTimeMonths, color: "bg-gray-600" }],
      legend: [
        { emoji: "🎯", name: "Bucket list", months: 0, color: "bg-pink-500" },
        { emoji: "👥", name: "Friends", months: 0, color: "bg-blue-500" },
        { emoji: "👨‍👩‍👧‍👦", name: "Family", months: 0, color: "bg-green-500" },
      ],
    },
    {
      title: "You'll pursue your passions and do your hobbies",
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.freeTimeMonths, color: "bg-gray-600" }],
      legend: [
        { emoji: "🎯", name: "Bucket list", months: 0, color: "bg-pink-500" },
        { emoji: "👥", name: "Friends", months: 0, color: "bg-blue-500" },
        { emoji: "👨‍👩‍👧‍👦", name: "Family", months: 0, color: "bg-green-500" },
        { emoji: "🎨", name: "Passions/Hobbies", months: 0, color: "bg-yellow-500" },
      ],
    },
    {
      title: "This is the time where the most valuable things in life happen",
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.freeTimeMonths, color: "bg-gray-600" }],
      legend: [
        { emoji: "🎯", name: "Bucket list", months: 0, color: "bg-pink-500" },
        { emoji: "👥", name: "Friends", months: 0, color: "bg-blue-500" },
        { emoji: "👨‍👩‍👧‍👦", name: "Family", months: 0, color: "bg-green-500" },
        { emoji: "🎨", name: "Passions/Hobbies", months: 0, color: "bg-yellow-500" },
      ],
    },
    {
      title: `And you're on course to spend ${stats.screenTimePercentage}% of that time looking at screens`,
      subtitle: "",
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.screenTimeMonths, color: "bg-red-500" }],
      legend: [
        { emoji: "🎯", name: "Bucket list", months: 0, color: "bg-pink-500" },
        { emoji: "👥", name: "Friends", months: 0, color: "bg-blue-500" },
        { emoji: "👨‍👩‍👧‍👦", name: "Family", months: 0, color: "bg-green-500" },
        { emoji: "🎨", name: "Passions/Hobbies", months: 0, color: "bg-yellow-500" },
        { emoji: "📱", name: "Screen time", months: stats.screenTimeMonths, color: "bg-red-500" },
      ],
    },
    {
      title: `That is ${formatTimeDisplay(stats.screenTimeMonths)} of screen time`,
      subtitle: `Leaving you with ${formatTimeDisplay(stats.actualFreeTimeMonths)} of actual free time`,
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.screenTimeMonths, color: "bg-red-500" }],
      legend: [
        { emoji: "📱", name: "Screen Time", months: stats.screenTimeMonths, color: "bg-red-500" },
        { emoji: "✨", name: "Free Time", months: stats.actualFreeTimeMonths, color: "bg-gray-400" },
      ],
    },
    {
      title: `The Real Cost: ${stats.monetaryCostFormatted}`,
      subtitle: `That's the opportunity cost of your screen time—what you could have earned if you valued your time at KES 2,000/hour`,
      dots: stats.freeTimeMonths,
      colored: [{ count: stats.screenTimeMonths, color: "bg-red-500" }],
      legend: [
        { emoji: "💰", name: "Opportunity Cost", months: stats.screenTimeMonths, color: "bg-red-500" },
        { emoji: "⏰", name: "Your Time = Money", months: stats.actualFreeTimeMonths, color: "bg-green-500" },
      ],
    },
    {
      title: "But you can still win back that time",
      subtitle: `Just watch what happens if you reduce screen time by 50%`,
      dots: stats.freeTimeMonths,
      colored: [{ count: comparison.reducedMonths, color: "bg-red-400" }],
      legend: [
        { emoji: "📱", name: "Screen Time", months: comparison.reducedMonths, color: "bg-red-400" },
        { emoji: "✨", name: "Free Time", months: stats.freeTimeMonths - comparison.reducedMonths, color: "bg-gray-300" },
      ],
      buttons: true,
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 py-12">
      <div className="w-full max-w-6xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {currentStep.title}
            </h1>
            {currentStep.subtitle && (
              <p className="text-cyan-500 text-lg">{currentStep.subtitle}</p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Time Format Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg bg-gray-900 p-1">
            <button
              onClick={() => setTimeMode('months')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeMode === 'months'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Months
            </button>
            <button
              onClick={() => setTimeMode('years')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeMode === 'years'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Years
            </button>
            <button
              onClick={() => setTimeMode('days')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeMode === 'days'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Days
            </button>
          </div>
        </div>

        <DotMatrix
          totalDots={currentStep.dots}
          coloredDots={currentStep.colored}
          animate={true}
        />

        {/* Legend */}
        {currentStep.legend && currentStep.legend.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {currentStep.legend.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${item.color}`} />
                <span className="text-sm">
                  {item.emoji} {item.name}
                  {item.months > 0 && ` (${formatTimeDisplay(item.months)})`}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          )}
          
          {step < steps.length - 1 && (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {currentStep.buttons && (
            <div className="flex flex-col gap-4 w-full max-w-md mt-8">
              <button
                onClick={() => router.push("/potential")}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg transition-colors font-medium"
              >
                See What You Could Achieve
              </button>
              <button
                onClick={() => router.push("/action-plan")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
              >
                Get Your Action Plan
              </button>
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
