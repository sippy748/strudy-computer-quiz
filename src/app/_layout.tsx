import { Stack } from 'expo-router';
import { theme } from '../constants/theme';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colorDark,
        },
        headerTintColor: theme.colorWhite,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false // Hide header for home screen
        }} 
      />
      <Stack.Screen 
        name="streak" 
        options={{ 
          title: 'Streak',
        }} 
      />
      <Stack.Screen 
        name="practice" 
        options={{ 
          title: 'Practice',
        }} 
      />
      <Stack.Screen 
        name="review" 
        options={{ 
          title: 'Review',
        }} 
      />
      <Stack.Screen 
        name="explore" 
        options={{ 
          title: 'Explore',
        }} 
      />
    </Stack>
  );
}