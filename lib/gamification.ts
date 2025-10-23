// Gamification and engagement system

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  category: 'awareness' | 'progress' | 'consistency' | 'sharing' | 'learning';
}

export interface Streak {
  current: number;
  longest: number;
  lastCheckIn: Date | null;
}

export interface UserProgress {
  level: number;
  xp: number;
  achievements: Achievement[];
  streak: Streak;
  totalCalculations: number;
  screentimeReduction: number; // percentage
  daysTracking: number;
  friendsReferred: number;
}

// Achievement definitions
export const ACHIEVEMENTS: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
  {
    id: 'first_calculation',
    title: 'Wake Up Call',
    description: 'Complete your first screen time calculation',
    icon: '👁️',
    category: 'awareness',
  },
  {
    id: 'week_streak',
    title: '7-Day Warrior',
    description: 'Check in for 7 days straight',
    icon: '🔥',
    category: 'consistency',
  },
  {
    id: 'month_streak',
    title: 'Mindful Month',
    description: 'Maintain a 30-day streak',
    icon: '🌟',
    category: 'consistency',
  },
  {
    id: 'reduce_25',
    title: 'Quarter Back',
    description: 'Reduce screen time by 25%',
    icon: '📉',
    category: 'progress',
  },
  {
    id: 'reduce_50',
    title: 'Half Free',
    description: 'Cut your screen time in half',
    icon: '✨',
    category: 'progress',
  },
  {
    id: 'share_results',
    title: 'Inspire Others',
    description: 'Share your results to social media',
    icon: '📢',
    category: 'sharing',
  },
  {
    id: 'refer_friend',
    title: 'Digital Monk',
    description: 'Help a friend start their journey',
    icon: '🤝',
    category: 'sharing',
  },
  {
    id: 'complete_course',
    title: 'Wisdom Seeker',
    description: 'Complete your first academy course',
    icon: '🎓',
    category: 'learning',
  },
  {
    id: 'stoic_master',
    title: 'Stoic Master',
    description: 'Complete all philosophy courses',
    icon: '🏛️',
    category: 'learning',
  },
  {
    id: 'early_adopter',
    title: 'Pioneer',
    description: 'Join in the first 1000 users',
    icon: '🚀',
    category: 'awareness',
  },
];

// Level system: XP required for each level
export const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 11000, 15000,
];

export function calculateLevel(xp: number): number {
  let level = 0;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      level = i;
    } else {
      break;
    }
  }
  return level;
}

export function getXPForNextLevel(currentXP: number): number {
  const currentLevel = calculateLevel(currentXP);
  if (currentLevel >= LEVEL_THRESHOLDS.length - 1) {
    return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  }
  return LEVEL_THRESHOLDS[currentLevel + 1];
}

export function getProgressToNextLevel(currentXP: number): number {
  const currentLevel = calculateLevel(currentXP);
  if (currentLevel >= LEVEL_THRESHOLDS.length - 1) {
    return 100;
  }
  
  const currentLevelXP = LEVEL_THRESHOLDS[currentLevel];
  const nextLevelXP = LEVEL_THRESHOLDS[currentLevel + 1];
  const progress = ((currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  
  return Math.min(100, Math.max(0, progress));
}

// XP rewards for different actions
export const XP_REWARDS = {
  FIRST_CALCULATION: 50,
  DAILY_CHECK_IN: 10,
  WEEK_STREAK_BONUS: 100,
  MONTH_STREAK_BONUS: 500,
  REDUCE_SCREENTIME: 200,
  SHARE_RESULTS: 75,
  REFER_FRIEND: 150,
  COMPLETE_LESSON: 25,
  COMPLETE_COURSE: 200,
  WRITE_JOURNAL: 15,
  MEDITATION_SESSION: 20,
};

// Check if streak is still valid (within 48 hours)
export function isStreakValid(lastCheckIn: Date | null): boolean {
  if (!lastCheckIn) return false;
  
  const now = new Date();
  const hoursSinceLastCheckIn = (now.getTime() - new Date(lastCheckIn).getTime()) / (1000 * 60 * 60);
  
  return hoursSinceLastCheckIn < 48;
}

// Update streak based on check-in
export function updateStreak(currentStreak: Streak): Streak {
  const now = new Date();
  
  if (!currentStreak.lastCheckIn) {
    return {
      current: 1,
      longest: 1,
      lastCheckIn: now,
    };
  }
  
  if (isStreakValid(currentStreak.lastCheckIn)) {
    const newCurrent = currentStreak.current + 1;
    return {
      current: newCurrent,
      longest: Math.max(newCurrent, currentStreak.longest),
      lastCheckIn: now,
    };
  } else {
    // Streak broken, restart
    return {
      current: 1,
      longest: currentStreak.longest,
      lastCheckIn: now,
    };
  }
}

// Check and unlock achievements
export function checkAchievements(
  userProgress: UserProgress,
  action: keyof typeof XP_REWARDS
): Achievement[] {
  const newlyUnlocked: Achievement[] = [];
  
  userProgress.achievements.forEach((achievement) => {
    if (achievement.unlocked) return;
    
    let shouldUnlock = false;
    
    switch (achievement.id) {
      case 'first_calculation':
        shouldUnlock = userProgress.totalCalculations >= 1;
        break;
      case 'week_streak':
        shouldUnlock = userProgress.streak.current >= 7;
        break;
      case 'month_streak':
        shouldUnlock = userProgress.streak.current >= 30;
        break;
      case 'reduce_25':
        shouldUnlock = userProgress.screentimeReduction >= 25;
        break;
      case 'reduce_50':
        shouldUnlock = userProgress.screentimeReduction >= 50;
        break;
      case 'share_results':
        shouldUnlock = action === 'SHARE_RESULTS';
        break;
      case 'refer_friend':
        shouldUnlock = userProgress.friendsReferred >= 1;
        break;
    }
    
    if (shouldUnlock) {
      achievement.unlocked = true;
      achievement.unlockedAt = new Date();
      newlyUnlocked.push(achievement);
    }
  });
  
  return newlyUnlocked;
}

// Get motivational message based on progress
export function getMotivationalMessage(userProgress: UserProgress): string {
  const { level, streak, screentimeReduction } = userProgress;
  
  if (streak.current >= 30) {
    return "🌟 You're unstoppable! 30 days of consistency!";
  }
  
  if (streak.current >= 7) {
    return "🔥 On fire! Keep that week-long streak going!";
  }
  
  if (screentimeReduction >= 50) {
    return "✨ Amazing! You've reclaimed half your time!";
  }
  
  if (screentimeReduction >= 25) {
    return "📈 Great progress! You're 25% more free!";
  }
  
  if (level >= 5) {
    return "🎯 You're a digital wellness expert now!";
  }
  
  if (level >= 3) {
    return "🌱 Your mindful journey is flourishing!";
  }
  
  return "🚀 Every step counts. Keep going!";
}

// Storage keys for localStorage
export const STORAGE_KEYS = {
  USER_PROGRESS: 'mindful_life_progress',
  LAST_CALCULATION: 'mindful_life_last_calc',
  INITIAL_SCREENTIME: 'mindful_life_initial',
  SHARE_COUNT: 'mindful_life_shares',
};

// Save user progress to localStorage
export function saveProgress(progress: UserProgress): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
  }
}

// Load user progress from localStorage
export function loadProgress(): UserProgress | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
  if (!stored) return null;
  
  try {
    const parsed = JSON.parse(stored);
    // Convert date strings back to Date objects
    if (parsed.streak.lastCheckIn) {
      parsed.streak.lastCheckIn = new Date(parsed.streak.lastCheckIn);
    }
    parsed.achievements.forEach((a: Achievement) => {
      if (a.unlockedAt) {
        a.unlockedAt = new Date(a.unlockedAt);
      }
    });
    return parsed;
  } catch {
    return null;
  }
}

// Initialize new user progress
export function initializeProgress(): UserProgress {
  return {
    level: 0,
    xp: 0,
    achievements: ACHIEVEMENTS.map(a => ({ ...a, unlocked: false })),
    streak: {
      current: 0,
      longest: 0,
      lastCheckIn: null,
    },
    totalCalculations: 0,
    screentimeReduction: 0,
    daysTracking: 0,
    friendsReferred: 0,
  };
}
