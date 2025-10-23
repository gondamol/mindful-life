"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, HelpCircle, Clock, Smartphone, TrendingDown } from "lucide-react";
import { initializeProgress, loadProgress, saveProgress, XP_REWARDS } from "@/lib/gamification";
import { ProgressSummary } from "@/components/ProgressDashboard";
import { InstallPrompt } from "@/components/InstallPrompt";

export default function AssessPage() {
  const router = useRouter();
  const [age, setAge] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [userProgress, setUserProgress] = useState(initializeProgress());
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load existing progress
    const progress = loadProgress();
    if (progress) {
      setUserProgress(progress);
    }

    // Auto-fill from previous calculation if available
    const lastCalc = localStorage.getItem('mindful_life_last_calc');
    if (lastCalc) {
      try {
        const data = JSON.parse(lastCalc);
        setAge(data.age?.toString() || '');
        setHours(data.hours?.toString() || '');
        setMinutes(data.minutes?.toString() || '');
      } catch {}
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const ageNum = parseInt(age);
    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;

    if (ageNum && ageNum > 0 && ageNum < 100) {
      // Store calculation data
      const calcData = {
        age: ageNum,
        dailyScreenHours: hoursNum,
        dailyScreenMinutes: minutesNum,
      };
      
      sessionStorage.setItem("lifeData", JSON.stringify(calcData));
      localStorage.setItem('mindful_life_last_calc', JSON.stringify({
        age: ageNum,
        hours: hoursNum,
        minutes: minutesNum,
      }));

      // Update gamification
      const isFirstCalculation = userProgress.totalCalculations === 0;
      userProgress.totalCalculations += 1;
      
      if (isFirstCalculation) {
        userProgress.xp += XP_REWARDS.FIRST_CALCULATION;
      }
      
      saveProgress(userProgress);
      
      // Add small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      router.push("/results");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Show progress if user has made calculations */}
      {userProgress.totalCalculations > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl mb-6"
        >
          <ProgressSummary userProgress={userProgress} />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-b border-gray-800 p-6 sm:p-8 text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
          >
            <Clock className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Calculate Your Time
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Discover how much of your life you'll spend on screens
          </p>
          
          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="bg-gray-900/50 rounded-lg p-3">
              <div className="text-2xl mb-1">⏰</div>
              <div className="text-xs text-gray-500">Quick</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-xs text-gray-500">Accurate</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3">
              <div className="text-2xl mb-1">💡</div>
              <div className="text-xs text-gray-500">Eye-opening</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Age Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">👤</span>
              Your Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 25"
              className="w-full px-6 py-5 bg-gray-800 text-white border-2 border-gray-700 focus:border-blue-500 rounded-xl text-lg sm:text-xl focus:outline-none transition-all placeholder:text-gray-500 touch-manipulation"
              required
              min="1"
              max="99"
              inputMode="numeric"
            />
          </motion.div>

          {/* Screen Time Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <label className="text-lg font-semibold flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-500" />
                Daily Screen Time
              </label>
              <button
                type="button"
                onMouseEnter={() => setShowTooltip('screentime')}
                onMouseLeave={() => setShowTooltip(null)}
                onClick={() => setShowTooltip(showTooltip === 'screentime' ? null : 'screentime')}
                className="relative"
              >
                <HelpCircle className="w-5 h-5 text-cyan-500 cursor-help" />
                <AnimatePresence>
                  {showTooltip === 'screentime' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute left-0 bottom-full mb-2 w-72 sm:w-80 p-4 bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500 rounded-xl text-sm text-white z-10 shadow-xl"
                    >
                      <p className="font-semibold mb-2">💡 What to include:</p>
                      <ul className="space-y-1 text-cyan-100">
                        <li>📱 Phone (social media, browsing)</li>
                        <li>💻 Computer (non-work usage)</li>
                        <li>📺 TV & streaming</li>
                        <li>🎮 Gaming consoles</li>
                        <li>📲 Tablets</li>
                      </ul>
                      <p className="mt-2 text-xs text-cyan-200">Tip: Check your phone's screen time stats</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="0"
                  className="w-full px-6 py-5 bg-gray-800 text-white border-2 border-gray-700 focus:border-purple-500 rounded-xl text-2xl font-bold text-center focus:outline-none transition-all touch-manipulation"
                  min="0"
                  max="24"
                  inputMode="numeric"
                />
                <p className="text-sm text-gray-400 mt-2 text-center font-medium">Hours</p>
              </div>
              <div>
                <input
                  type="number"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  placeholder="0"
                  className="w-full px-6 py-5 bg-gray-800 text-white border-2 border-gray-700 focus:border-purple-500 rounded-xl text-2xl font-bold text-center focus:outline-none transition-all touch-manipulation"
                  min="0"
                  max="59"
                  inputMode="numeric"
                />
                <p className="text-sm text-gray-400 mt-2 text-center font-medium">Minutes</p>
              </div>
            </div>
            
            {/* Quick preset buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <p className="text-xs text-gray-500 w-full mb-1">Quick presets:</p>
              {[
                { h: 2, m: 0, label: '2h' },
                { h: 4, m: 0, label: '4h' },
                { h: 6, m: 0, label: '6h' },
                { h: 8, m: 0, label: '8h' },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setHours(preset.h.toString());
                    setMinutes(preset.m.toString());
                  }}
                  className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-5 sm:py-6 px-6 rounded-xl text-lg sm:text-xl transition-all flex items-center justify-center gap-3 group shadow-lg shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                />
                Calculating...
              </>
            ) : (
              <>
                <TrendingDown className="w-6 h-6" />
                Show Me The Truth
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </motion.button>
          
          {/* Privacy note */}
          <p className="text-xs text-center text-gray-500 mt-3">
            🔒 Your data stays on your device. We don't collect anything.
          </p>
        </form>

        {/* Footer */}
        <div className="p-6 bg-gray-900/50 border-t border-gray-800 text-center">
          <button
            onClick={() => router.push("/")}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to home
          </button>
        </div>
      </motion.div>

      {/* Install PWA prompt */}
      <InstallPrompt />
    </div>
  );
}
