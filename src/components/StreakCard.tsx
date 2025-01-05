// src/components/StreakCard.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { StreakService } from '../utils/streakService';
import type { StreakData, DailyStreak } from  "../types/streak";

export function StreakCard() {
  const [streakData, setStreakData] = useState<StreakData | null>(null);
  useEffect(() => {
    loadStreakData();
  }, []);

  const loadStreakData = async () => {
    const data = await StreakService.getStreakData();
    setStreakData(data);
  };

  const getDayStatus = (dayOffset: number) => {
    if (!streakData) return 'inactive';
    
    const date = new Date();
    date.setDate(date.getDate() - dayOffset);
    const dateStr = date.toISOString().split('T')[0];
    
    return streakData.dailyData[dateStr]?.completed ? 'completed' : 'inactive';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.streakCount}>
          {streakData?.currentStreak || 0} Day Streak
        </Text>
        <Text style={styles.today}>
          Today: {new Date().getDate()}/{new Date().getMonth() + 1}
        </Text>
      </View>
      <View style={styles.weekContainer}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <View key={day} style={styles.dayColumn}>
            <View style={[
              styles.circle,
              getDayStatus(6 - index) === 'completed' && styles.circleCompleted
            ]} />
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: theme.colorDarker,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  streakCount: {
    color: theme.colorWhite,
    fontSize: 20,
    fontWeight: 'bold',
  },
  today: {
    color: theme.colorLightGray,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayColumn: {
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#333',
    marginBottom: 4,
  },
  circleCompleted: {
    backgroundColor: '#0088ff', // or any color you prefer
  },
  dayText: {
    color: theme.colorLightGray,
    fontSize: 12,
  },
});