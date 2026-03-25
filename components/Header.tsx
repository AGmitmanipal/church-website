import { ChurchColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'ALL PEOPLES CHURCH' }) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Ionicons name="home" size={24} color={ChurchColors.text} />
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Menu Button */}
        <Pressable
          style={({ pressed }) => [
            styles.menuButton,
            pressed && styles.menuButtonPressed,
          ]}
          onPress={handleMenuPress}
        >
          <Ionicons name="menu" size={28} color={ChurchColors.text} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: ChurchColors.background,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: ChurchColors.background,
  },
  logoContainer: {
    flex: 0.15,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: ChurchColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: ChurchColors.primary,
    textAlign: 'center',
  },
  menuButton: {
    padding: 8,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonPressed: {
    opacity: 0.7,
  },
});
