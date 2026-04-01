import { ChurchColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ContractorsScreen } from '../../screens/ContractorsScreen';
import MainScreen from '../../screens/MainScreen';

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

const PlaceholderScreen = ({ navigation, route }: any) => (
  <View style={styles.placeholder}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Main')}
      >
        <Ionicons name="arrow-back" size={24} color={ChurchColors.primary} />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
      <Ionicons name="construct-outline" size={64} color={ChurchColors.textTertiary} />
      <Text style={styles.title}>{route.name}</Text>
      <Text style={styles.subtitle}>This section is coming soon.</Text>
    </View>
  </View>
);

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
        <Drawer.Screen
          name="Contractors"
          component={ContractorsScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />
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
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});
