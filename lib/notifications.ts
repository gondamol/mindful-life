// Push notifications system for engagement

export interface NotificationPermissionStatus {
  granted: boolean;
  denied: boolean;
  default: boolean;
}

export interface ScheduledNotification {
  id: string;
  title: string;
  body: string;
  scheduledTime: Date;
  type: 'daily_checkin' | 'streak_reminder' | 'achievement' | 'milestone' | 'motivation';
  icon?: string;
  badge?: string;
  tag?: string;
}

// Check if notifications are supported
export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

// Check current permission status
export function getNotificationPermission(): NotificationPermissionStatus {
  if (!isNotificationSupported()) {
    return { granted: false, denied: true, default: false };
  }

  const permission = Notification.permission;
  return {
    granted: permission === 'granted',
    denied: permission === 'denied',
    default: permission === 'default',
  };
}

// Request notification permission
export async function requestNotificationPermission(): Promise<boolean> {
  if (!isNotificationSupported()) {
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return false;
  }
}

// Show a notification
export function showNotification(
  title: string,
  options: NotificationOptions = {}
): void {
  if (!isNotificationSupported() || Notification.permission !== 'granted') {
    return;
  }

  const defaultOptions: NotificationOptions = {
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    requireInteraction: false,
    ...options,
  };

  new Notification(title, defaultOptions);
}

// Predefined notification templates
export const NOTIFICATION_TEMPLATES = {
  DAILY_CHECKIN: {
    title: '🌅 Good morning!',
    body: "Ready to check in and maintain your streak?",
    icon: '/icons/icon-192x192.png',
    tag: 'daily-checkin',
  },
  STREAK_MILESTONE: (days: number) => ({
    title: `🔥 ${days}-Day Streak!`,
    body: `Amazing! You've maintained your streak for ${days} days. Keep it going!`,
    icon: '/icons/icon-192x192.png',
    tag: 'streak-milestone',
  }),
  ACHIEVEMENT_UNLOCKED: (achievementName: string) => ({
    title: '🏆 Achievement Unlocked!',
    body: `You earned: ${achievementName}`,
    icon: '/icons/icon-192x192.png',
    tag: 'achievement',
    requireInteraction: true,
  }),
  LEVEL_UP: (level: number) => ({
    title: `⬆️ Level ${level} Reached!`,
    body: 'Your dedication is paying off. Keep growing!',
    icon: '/icons/icon-192x192.png',
    tag: 'level-up',
  }),
  MOTIVATION: (message: string) => ({
    title: '💪 Daily Motivation',
    body: message,
    icon: '/icons/icon-192x192.png',
    tag: 'motivation',
  }),
  STREAK_AT_RISK: {
    title: '⚠️ Streak at Risk!',
    body: "You haven't checked in today. Don't break your streak!",
    icon: '/icons/icon-192x192.png',
    tag: 'streak-warning',
    requireInteraction: true,
  },
  SCREEN_TIME_REMINDER: {
    title: '📱 Screen Time Check',
    body: 'How are you doing with your screen time goals today?',
    icon: '/icons/icon-192x192.png',
    tag: 'screen-time-check',
  },
};

// Motivational messages for daily notifications
export const MOTIVATIONAL_MESSAGES = [
  "You are stronger than your distractions.",
  "Every moment counts. Make this one intentional.",
  "Your time is your life. Spend it wisely.",
  "Small steps lead to big changes.",
  "Today is another chance to reclaim your time.",
  "Your future self will thank you.",
  "Progress, not perfection.",
  "Be present, not online.",
  "Life happens in the real world.",
  "You're building something greater than a screen.",
];

// Get random motivational message
export function getRandomMotivation(): string {
  return MOTIVATIONAL_MESSAGES[
    Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)
  ];
}

// Schedule daily check-in notification
export function scheduleDailyCheckIn(hour: number = 9, minute: number = 0): void {
  if (!isNotificationSupported() || Notification.permission !== 'granted') {
    return;
  }

  // Calculate next check-in time
  const now = new Date();
  const scheduledTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0
  );

  // If time has passed today, schedule for tomorrow
  if (scheduledTime <= now) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  const timeUntilNotification = scheduledTime.getTime() - now.getTime();

  setTimeout(() => {
    showNotification(
      NOTIFICATION_TEMPLATES.DAILY_CHECKIN.title,
      {
        body: NOTIFICATION_TEMPLATES.DAILY_CHECKIN.body,
        icon: NOTIFICATION_TEMPLATES.DAILY_CHECKIN.icon,
        tag: NOTIFICATION_TEMPLATES.DAILY_CHECKIN.tag,
      }
    );

    // Reschedule for next day
    scheduleDailyCheckIn(hour, minute);
  }, timeUntilNotification);
}

// Save notification preferences
export function saveNotificationPreferences(preferences: {
  enabled: boolean;
  dailyCheckIn: boolean;
  achievements: boolean;
  streakReminders: boolean;
  motivation: boolean;
  time: { hour: number; minute: number };
}): void {
  localStorage.setItem('notification_preferences', JSON.stringify(preferences));
}

// Load notification preferences
export function loadNotificationPreferences(): {
  enabled: boolean;
  dailyCheckIn: boolean;
  achievements: boolean;
  streakReminders: boolean;
  motivation: boolean;
  time: { hour: number; minute: number };
} {
  const stored = localStorage.getItem('notification_preferences');
  
  if (!stored) {
    return {
      enabled: false,
      dailyCheckIn: true,
      achievements: true,
      streakReminders: true,
      motivation: true,
      time: { hour: 9, minute: 0 },
    };
  }

  try {
    return JSON.parse(stored);
  } catch {
    return {
      enabled: false,
      dailyCheckIn: true,
      achievements: true,
      streakReminders: true,
      motivation: true,
      time: { hour: 9, minute: 0 },
    };
  }
}

// Initialize notification system
export function initializeNotifications(): void {
  const preferences = loadNotificationPreferences();
  
  if (!preferences.enabled) {
    return;
  }

  const permission = getNotificationPermission();
  
  if (!permission.granted) {
    return;
  }

  // Schedule daily check-in
  if (preferences.dailyCheckIn) {
    scheduleDailyCheckIn(preferences.time.hour, preferences.time.minute);
  }

  // Show daily motivation
  if (preferences.motivation) {
    const now = new Date();
    const motivationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      preferences.time.hour,
      preferences.time.minute + 1,
      0
    );

    if (motivationTime > now) {
      const timeUntil = motivationTime.getTime() - now.getTime();
      setTimeout(() => {
        const message = getRandomMotivation();
        showNotification(
          NOTIFICATION_TEMPLATES.MOTIVATION(message).title,
          {
            body: message,
            icon: NOTIFICATION_TEMPLATES.MOTIVATION(message).icon,
            tag: NOTIFICATION_TEMPLATES.MOTIVATION(message).tag,
          }
        );
      }, timeUntil);
    }
  }
}

// Web Push API support (for service worker)
export async function subscribeToPushNotifications(): Promise<PushSubscription | null> {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    
    // Check if already subscribed
    const existingSubscription = await registration.pushManager.getSubscription();
    if (existingSubscription) {
      return existingSubscription;
    }

    // Subscribe to push notifications
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || ''
      ),
    });

    return subscription;
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
    return null;
  }
}

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String: string): BufferSource | null {
  if (!base64String) return null;
  
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray.buffer;
}

// Unsubscribe from push notifications
export async function unsubscribeFromPushNotifications(): Promise<boolean> {
  if (!('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();

    if (subscription) {
      await subscription.unsubscribe();
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error unsubscribing from push notifications:', error);
    return false;
  }
}
