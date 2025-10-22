// Life expectancy for Kenya and similar regions
export const LIFE_EXPECTANCY = 65;
export const RETIREMENT_AGE = 70;

// Average hourly value rate in Kenyan Shillings (opportunity cost)
export const HOURLY_VALUE_KES = 2000;

// Average hours per day for different activities
export const ACTIVITY_HOURS = {
  sleep: 8,
  work: 8,
  travel: 1,
  chores: 2,
  cooking: 2,
  hygiene: 1.5,
};

export interface LifeData {
  age: number;
  dailyScreenHours: number;
  dailyScreenMinutes: number;
}

export interface LifeStats {
  totalMonthsLeft: number;
  sleepMonths: number;
  workMonths: number;
  travelMonths: number;
  choresMonths: number;
  cookingMonths: number;
  hygieneMonths: number;
  freeTimeMonths: number;
  screenTimeMonths: number;
  actualFreeTimeMonths: number;
  screenTimePercentage: number;
  totalScreenHoursPerDay: number;
  monetaryCostKES: number;
  monetaryCostFormatted: string;
}

export function calculateLifeStats(data: LifeData): LifeStats {
  const { age, dailyScreenHours, dailyScreenMinutes } = data;
  
  // Convert screen time to total hours
  const totalScreenHoursPerDay = dailyScreenHours + dailyScreenMinutes / 60;
  
  // Calculate total months left in life
  const yearsLeft = LIFE_EXPECTANCY - age;
  const totalMonthsLeft = yearsLeft * 12;
  
  // Calculate months spent on each activity (for remaining life)
  const sleepMonths = Math.round((ACTIVITY_HOURS.sleep / 24) * totalMonthsLeft);
  
  // Work until retirement
  const workingYearsLeft = Math.max(0, Math.min(RETIREMENT_AGE - age, yearsLeft));
  const workMonths = Math.round((ACTIVITY_HOURS.work / 24) * workingYearsLeft * 12);
  
  const travelMonths = Math.round((ACTIVITY_HOURS.travel / 24) * totalMonthsLeft);
  const choresMonths = Math.round((ACTIVITY_HOURS.chores / 24) * totalMonthsLeft);
  const cookingMonths = Math.round((ACTIVITY_HOURS.cooking / 24) * totalMonthsLeft);
  const hygieneMonths = Math.round((ACTIVITY_HOURS.hygiene / 24) * totalMonthsLeft);
  
  // Calculate free time
  const obligatoryMonths = sleepMonths + workMonths + travelMonths + choresMonths + cookingMonths + hygieneMonths;
  const freeTimeMonths = totalMonthsLeft - obligatoryMonths;
  
  // Calculate screen time months
  const screenTimeMonths = Math.round((totalScreenHoursPerDay / 24) * totalMonthsLeft);
  
  // Calculate actual free time (free time - screen time)
  const actualFreeTimeMonths = Math.max(0, freeTimeMonths - screenTimeMonths);
  
  // Calculate percentage of free time spent on screens (capped at 100%)
  const screenTimePercentage = freeTimeMonths > 0 
    ? Math.min(100, Math.round((screenTimeMonths / freeTimeMonths) * 100))
    : 0;
  
  // Calculate monetary cost (opportunity cost of screen time)
  const totalScreenHoursLifetime = totalScreenHoursPerDay * 365 * yearsLeft;
  const monetaryCostKES = Math.round(totalScreenHoursLifetime * HOURLY_VALUE_KES);
  
  // Format the cost with commas
  const monetaryCostFormatted = `KES ${monetaryCostKES.toLocaleString()}`;
  
  return {
    totalMonthsLeft,
    sleepMonths,
    workMonths,
    travelMonths,
    choresMonths,
    cookingMonths,
    hygieneMonths,
    freeTimeMonths,
    screenTimeMonths,
    actualFreeTimeMonths,
    screenTimePercentage,
    totalScreenHoursPerDay,
    monetaryCostKES,
    monetaryCostFormatted,
  };
}

export interface ActivityData {
  name: string;
  emoji: string;
  months: number;
  color: string;
}

export function getActivitiesData(stats: LifeStats): ActivityData[] {
  return [
    { name: "Sleep", emoji: "😴", months: stats.sleepMonths, color: "bg-blue-500" },
    { name: "Work", emoji: "💼", months: stats.workMonths, color: "bg-yellow-500" },
    { name: "Travel", emoji: "🚗", months: stats.travelMonths, color: "bg-pink-500" },
    { name: "Chores", emoji: "🧹", months: stats.choresMonths, color: "bg-purple-500" },
    { name: "Cooking/Eating", emoji: "🍳", months: stats.cookingMonths, color: "bg-orange-500" },
    { name: "Hygiene", emoji: "🚿", months: stats.hygieneMonths, color: "bg-green-500" },
    { name: "Free Time", emoji: "✨", months: stats.actualFreeTimeMonths, color: "bg-gray-400" },
  ];
}

export function getScreenTimeComparison(stats: LifeStats) {
  const reducedScreenTime = stats.totalScreenHoursPerDay * 0.5;
  const reducedMonths = Math.round((reducedScreenTime / 24) * stats.totalMonthsLeft);
  const gainedMonths = stats.screenTimeMonths - reducedMonths;
  
  return {
    currentMonths: stats.screenTimeMonths,
    reducedMonths,
    gainedMonths,
    reducedHoursPerDay: reducedScreenTime,
  };
}

// Format time in different units
export interface TimeFormat {
  months: number;
  years: number;
  days: number;
  yearsDisplay: string;
  daysDisplay: string;
}

export function formatTime(months: number): TimeFormat {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const days = Math.round(months * 30.44); // Average days per month
  
  let yearsDisplay = "";
  if (years > 0) {
    yearsDisplay = `${years} ${years === 1 ? 'year' : 'years'}`;
    if (remainingMonths > 0) {
      yearsDisplay += ` ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
  } else {
    yearsDisplay = `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  
  const daysDisplay = `${days.toLocaleString()} ${days === 1 ? 'day' : 'days'}`;
  
  return {
    months,
    years,
    days,
    yearsDisplay,
    daysDisplay,
  };
}
