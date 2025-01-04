import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const StreakCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.streakInfo}>
        <View style={styles.streakCount}>
          <Text style={styles.streakNumber}>0</Text>
          <Text style={styles.streakText}>Day Streak</Text>
        </View>
        <Text style={styles.todayScore}>Today: 0/10</Text>
      </View>
      <View style={styles.weekProgress}>
        {DAYS_OF_WEEK.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <View style={styles.dayCircle} />
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorDark,
    borderRadius: 16,
    padding: 16,
    margin: 16,
  },
  streakInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  streakCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  streakNumber: {
    color: theme.colorWhite,
    fontSize: 32,
    fontWeight: "bold",
  },
  streakText: {
    color: theme.colorLightGray,
    fontSize: 16,
  },
  todayScore: {
    color: theme.colorLightGray,
    fontSize: 14,
  },
  weekProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayContainer: {
    alignItems: "center",
    gap: 4,
  },
  dayCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colorLightGray,
  },
  dayText: {
    color: theme.colorLightGray,
    fontSize: 12,
  },
});
