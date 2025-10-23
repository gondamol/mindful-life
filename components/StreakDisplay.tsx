"use client";

import { motion } from "framer-motion";
import { Flame, Trophy } from "lucide-react";
import { Streak } from "@/lib/gamification";

interface StreakDisplayProps {
  streak: Streak;
  compact?: boolean;
}

export function StreakDisplay({ streak, compact = false }: StreakDisplayProps) {
  const { current, longest } = streak;

  if (compact) {
    return (
      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/50 rounded-full px-4 py-2">
        <Flame className="w-5 h-5 text-orange-500" />
        <span className="font-bold text-orange-400">{current}</span>
        <span className="text-sm text-gray-400">day streak</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-2 border-orange-500/50 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-500" />
          Streak Status
        </h3>
        {longest > 0 && (
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Trophy className="w-4 h-4" />
            Best: {longest}
          </div>
        )}
      </div>

      <div className="text-center">
        <motion.div
          key={current}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-orange-400 mb-2"
        >
          {current}
        </motion.div>
        <p className="text-gray-400">
          {current === 1 ? "day" : "days"} in a row
        </p>
      </div>

      {current >= 7 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-sm text-orange-300 bg-orange-500/10 rounded-lg p-3"
        >
          🔥 You're on fire! Keep going!
        </motion.div>
      )}

      {current === 0 && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Check in daily to build your streak
        </div>
      )}
    </motion.div>
  );
}

interface StreakMilestoneProps {
  currentStreak: number;
  nextMilestone: number;
}

export function StreakMilestone({ currentStreak, nextMilestone }: StreakMilestoneProps) {
  const progress = (currentStreak / nextMilestone) * 100;
  const daysLeft = nextMilestone - currentStreak;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">Next milestone</span>
        <span className="font-semibold text-orange-400">{nextMilestone} days</span>
      </div>
      
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-gradient-to-r from-orange-500 to-red-500"
        />
      </div>
      
      <p className="text-xs text-gray-500 text-center">
        {daysLeft} {daysLeft === 1 ? "day" : "days"} to go
      </p>
    </div>
  );
}
