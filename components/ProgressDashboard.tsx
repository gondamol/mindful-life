"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Zap, Target } from "lucide-react";
import { UserProgress, calculateLevel, getProgressToNextLevel, getXPForNextLevel } from "@/lib/gamification";
import { AchievementBadge } from "./AchievementBadge";
import { StreakDisplay } from "./StreakDisplay";

interface ProgressDashboardProps {
  userProgress: UserProgress;
  onAchievementClick?: (achievementId: string) => void;
}

export function ProgressDashboard({ userProgress, onAchievementClick }: ProgressDashboardProps) {
  const { level, xp, achievements, streak, screentimeReduction, totalCalculations } = userProgress;
  
  const progressPercent = getProgressToNextLevel(xp);
  const nextLevelXP = getXPForNextLevel(xp);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="space-y-6">
      {/* Level and XP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-500/50 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Zap className="w-7 h-7 text-yellow-500" />
            Level {level}
          </h2>
          <div className="text-right">
            <div className="text-sm text-gray-400">XP</div>
            <div className="text-xl font-bold text-blue-400">{xp}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Progress to Level {level + 1}</span>
            <span className="font-semibold text-purple-400">
              {xp} / {nextLevelXP} XP
            </span>
          </div>
          
          <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            {Math.round(progressPercent)}% complete
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/50 rounded-xl p-4"
        >
          <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
          <div className="text-3xl font-bold text-green-400">{screentimeReduction}%</div>
          <div className="text-sm text-gray-400">Screen Time Reduced</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/50 rounded-xl p-4"
        >
          <Award className="w-6 h-6 text-purple-500 mb-2" />
          <div className="text-3xl font-bold text-purple-400">
            {unlockedCount}/{achievements.length}
          </div>
          <div className="text-sm text-gray-400">Achievements</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/50 rounded-xl p-4"
        >
          <Target className="w-6 h-6 text-cyan-500 mb-2" />
          <div className="text-3xl font-bold text-cyan-400">{totalCalculations}</div>
          <div className="text-sm text-gray-400">Calculations</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/50 rounded-xl p-4"
        >
          <div className="text-2xl mb-2">🔥</div>
          <div className="text-3xl font-bold text-orange-400">{streak.current}</div>
          <div className="text-sm text-gray-400">Day Streak</div>
        </motion.div>
      </div>

      {/* Streak Display */}
      <StreakDisplay streak={streak} />

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-yellow-500" />
          Achievements
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col items-center">
              <AchievementBadge
                achievement={achievement}
                size="sm"
                onClick={() => onAchievementClick?.(achievement.id)}
              />
              <p className="text-xs text-gray-500 text-center mt-1 truncate w-full">
                {achievement.title}
              </p>
            </div>
          ))}
        </div>

        {unlockedCount === 0 && (
          <p className="text-center text-gray-500 py-8">
            Complete activities to unlock achievements!
          </p>
        )}
      </motion.div>
    </div>
  );
}

// Compact version for sidebar or header
export function ProgressSummary({ userProgress }: { userProgress: UserProgress }) {
  const { level, xp, streak } = userProgress;
  const progressPercent = getProgressToNextLevel(xp);

  return (
    <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-lg p-3">
      {/* Level */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-sm font-bold">{level}</span>
        </div>
        <div className="hidden sm:block">
          <div className="text-xs text-gray-400">Level</div>
          <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-2 bg-orange-900/20 border border-orange-500/50 rounded-lg px-3 py-1.5">
        <span className="text-lg">🔥</span>
        <span className="font-bold text-orange-400">{streak.current}</span>
      </div>

      {/* XP */}
      <div className="hidden md:block text-right">
        <div className="text-xs text-gray-400">XP</div>
        <div className="text-sm font-bold text-blue-400">{xp}</div>
      </div>
    </div>
  );
}
