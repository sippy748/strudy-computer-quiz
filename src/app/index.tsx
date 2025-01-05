import { Link } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView } from "react-native";
import { theme } from "../constants/theme";
import { StreakCard } from "../components/StreakCard";
import { PracticeCard } from "../components/PracticeCard";
import { ReviewCard } from "../components/ReviewCard";
import { ExploreCard } from "../components/ExploreCard";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image source={require("../../assets/icon.png")} style={styles.headerLogo} />
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Happy learning,</Text>
            <Text style={styles.username}>Sippy</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={styles.menuIcon}>☰</Text>
          </View>
        </View>
        <Link href="/streak" asChild>
          <StreakCard />
        </Link>
        <Link href="/practice" asChild>
          <PracticeCard />
        </Link>
        <Link href="/review" asChild>
          <ReviewCard />
        </Link>
        <Link href="/explore" asChild>
          <ExploreCard />
        </Link>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colorDark,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 16,
      backgroundColor: theme.colorDark,
    },
    headerLogo: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 2,
      borderColor: theme.colorWhite,
    },
    greetingContainer: {
      flex: 1,
      marginLeft: 12,
    },
    greetingText: {
      color: theme.colorLightGray,
      fontSize: 16,
    },
    username: {
      color: theme.colorWhite,
      fontSize: 24,
      fontWeight: "bold",
    },
    menuContainer: {
      paddingLeft: 16,
    },
    menuIcon: {
      color: theme.colorWhite,
      fontSize: 24,
    },
  });