"use client";

import { motion } from "framer-motion";
import { Achievement } from "@/lib/gamification";
import { Lock } from "lucide-react";

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function AchievementBadge({ 
  achievement, 
  size = "md",
  onClick 
}: AchievementBadgeProps) {
  const sizes = {
    sm: "w-16 h-16 text-2xl",
    md: "w-24 h-24 text-4xl",
    lg: "w-32 h-32 text-5xl",
  };

  const containerSizes = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <motion.div
      whileHover={achievement.unlocked ? { scale: 1.05 } : {}}
      whileTap={achievement.unlocked ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={`relative ${containerSizes[size]} cursor-pointer`}
    >
      <div
        className={`
          ${sizes[size]} 
          rounded-2xl 
          flex items-center justify-center 
          border-2
          transition-all
          ${
            achievement.unlocked
              ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50"
              : "bg-gray-900 border-gray-800 opacity-50"
          }
        `}
      >
        {achievement.unlocked ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {achievement.icon}
          </motion.div>
        ) : (
          <Lock className="w-8 h-8 text-gray-600" />
        )}
      </div>

      {achievement.unlocked && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center"
        >
          <span className="text-xs">✓</span>
        </motion.div>
      )}
    </motion.div>
  );
}

interface AchievementUnlockedPopupProps {
  achievement: Achievement;
  onClose: () => void;
}

export function AchievementUnlockedPopup({ 
  achievement, 
  onClose 
}: AchievementUnlockedPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.5, y: 50 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500 rounded-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
          }}
          transition={{ duration: 0.5 }}
          className="text-7xl text-center mb-4"
        >
          {achievement.icon}
        </motion.div>

        <h2 className="text-3xl font-bold text-center mb-2 text-yellow-400">
          Achievement Unlocked!
        </h2>

        <h3 className="text-xl font-semibold text-center mb-2">
          {achievement.title}
        </h3>

        <p className="text-gray-400 text-center mb-6">
          {achievement.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-semibold"
        >
          Awesome! 🎉
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
