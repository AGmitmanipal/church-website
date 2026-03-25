import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../../screens/MainScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0D1117',
    card: '#0D1117',
    text: '#ffffff',
  },
};

const PlaceholderScreen = () => <View style={styles.placeholder} />;

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#B21A1A', // Dark red background for drawer
          },
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#cccccc',
          drawerActiveBackgroundColor: 'rgba(255, 255, 255, 0.1)',
          drawerLabelStyle: {
            fontWeight: '600',
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen
          name="Main"
          component={MainScreen}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
          }}
        />
        <Drawer.Screen name="Church Locations" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="location" size={24} color={color} /> }} />
        <Drawer.Screen name="Bible (NET 2016)" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="book" size={24} color={color} /> }} />
        <Drawer.Screen name="Live Stream" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="videocam" size={24} color={color} /> }} />
        <Drawer.Screen name="Prayer Requests" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} /> }} />
        <Drawer.Screen name="Give" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="gift" size={24} color={color} /> }} />
        <Drawer.Screen name="FAQs" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="help-circle" size={24} color={color} /> }} />
        <Drawer.Screen name="Feedback" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="chatbubbles" size={24} color={color} /> }} />
        <Drawer.Screen name="Terms & Conditions" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="document-text" size={24} color={color} /> }} />
        <Drawer.Screen name="Privacy Policy" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="shield-checkmark" size={24} color={color} /> }} />
        <Drawer.Screen name="Settings" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} /> }} />
        <Drawer.Screen name="About APC" component={PlaceholderScreen} options={{ drawerIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} /> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
});
