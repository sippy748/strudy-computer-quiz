// src/utils/streakService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StreakData, DailyStreak } from '../types/streak';

const STREAK_STORAGE_KEY = '@quiz_streak_data';

export class StreakService {
  static async getStreakData(): Promise<StreakData> {
    try {
      const data = await AsyncStorage.getItem(STREAK_STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
      return {
        currentStreak: 0,
        longestStreak: 0,
        dailyData: {},
      };
    } catch (error) {
      console.error('Error loading streak data:', error);
      return {
        currentStreak: 0,
        longestStreak: 0,
        dailyData: {},
      };
    }
  }

  static async recordQuizCompletion(score: number): Promise<void> {
    try {
      const streakData = await this.getStreakData();
      const today = new Date().toISOString().split('T')[0];
      
      // Record today's completion
      streakData.dailyData[today] = {
        date: today,
        completed: true,
        score: score,
      };

      // Calculate current streak
      let streak = 0;
      let currentDate = new Date();
      
      while (true) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const dayData = streakData.dailyData[dateStr];
        
        if (dayData?.completed) {
          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        } else {
          break;
        }
      }

      streakData.currentStreak = streak;
      streakData.longestStreak = Math.max(streak, streakData.longestStreak);

      await AsyncStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(streakData));
    } catch (error) {
      console.error('Error saving streak data:', error);
    }
  }
}