import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import { theme } from "../constants/theme";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
