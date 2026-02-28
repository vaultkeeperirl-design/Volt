import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer
          screenOptions={{
            drawerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1e1f22' : '#f2f3f5',
              width: 240,
            },
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#313338' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerActiveBackgroundColor: '#5865f2',
            drawerActiveTintColor: '#ffffff',
            drawerItemStyle: {
              borderRadius: 8,
              marginHorizontal: 8,
            },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'Volt',
            }}
          />
          <Drawer.Screen
            name="chat"
            options={{
              drawerLabel: 'General Chat',
              title: '#general',
            }}
          />
        </Drawer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
