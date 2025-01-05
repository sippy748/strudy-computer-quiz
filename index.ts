import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

// registerRootComponent calls AppRegistry.registerComponent("main", () => App);
// It also ensures that whether you load the app in the Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExpoRoot);