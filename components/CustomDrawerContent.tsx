import { ChurchColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface DrawerMenuProps {
  navigation: DrawerNavigationProp<any>;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  onPress?: () => void;
}

const menuItems: MenuItem[] = [
  { id: '1', label: 'Church Locations', icon: 'location' },
  { id: '2', label: 'Bible (NET 2016)', icon: 'book' },
  { id: '3', label: 'Live Stream', icon: 'videocam' },
  { id: '4', label: 'Prayer Requests', icon: 'chatbox' },
  { id: '5', label: 'Give', icon: 'gift' },
  { id: '6', label: 'FAQs', icon: 'help-circle' },
  { id: '7', label: 'Feedback', icon: 'chatbubbles' },
  { id: '8', label: 'Terms & Conditions', icon: 'document-text' },
  { id: '9', label: 'Privacy Policy', icon: 'shield' },
  { id: '10', label: 'Settings', icon: 'settings' },
  { id: '11', label: 'About APC', icon: 'information-circle' },
];

export const CustomDrawerContent: React.FC<DrawerMenuProps> = ({
  navigation,
}) => {
  const handleMenuItemPress = (item: MenuItem) => {
    console.log(`Pressed: ${item.label}`);
    // Close drawer after selection
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="home" size={32} color={ChurchColors.text} />
        </View>
        <Text style={styles.headerTitle}>ALL PEOPLES</Text>
        <Text style={styles.headerSubtitle}>CHURCH</Text>
      </View>

      {/* Menu Items */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.menuContainer}
      >
        {menuItems.map((item) => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [
              styles.menuItem,
              pressed && styles.menuItemPressed,
            ]}
            onPress={() => handleMenuItemPress(item)}
          >
            <Ionicons
              name={item.icon as any}
              size={20}
              color={ChurchColors.text}
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ChurchColors.primary,
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: ChurchColors.text,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: ChurchColors.text,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: ChurchColors.text,
    marginTop: 2,
  },
  menuContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuItemPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  menuIcon: {
    marginRight: 16,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: ChurchColors.text,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
});
