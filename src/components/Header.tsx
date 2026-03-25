import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'ALL PEOPLES CHURCH' }) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 18 }]}>
      <View style={styles.left}>
        {/* Placeholder for circular church logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150/ff0000/ffffff?text=APC' }}
            style={styles.logo}
          />
        </View>
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.right}>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={({ pressed }) => [styles.menuButton, pressed && styles.pressed]}
        >
          <Ionicons name="menu" size={28} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 18,
    backgroundColor: '#0D1117',
    borderBottomWidth: 1,
    borderBottomColor: '#0D1117',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  center: {
    flex: 3,
    alignItems: 'center',
  },
  title: {
    color: '#E02D2D', // Bold red text constraint
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  menuButton: {
    padding: 0,
  },
  pressed: {
    opacity: 0.7,
  },
});