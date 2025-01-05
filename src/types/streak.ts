export interface StreakData {
    currentStreak: number;
    longestStreak: number;
    dailyData: { [key: string]: DailyStreak };
  }
  
 export  interface DailyStreak {
    date: string;
    completed: boolean;
    score?: number;
  }