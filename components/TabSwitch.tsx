import { ChurchColors } from '@/constants/theme';
import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';

interface TabSwitchProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const TabSwitch: React.FC<TabSwitchProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
      style={styles.container}
    >
      {tabs.map((tab, index) => (
        <Pressable
          key={`${tab}-${index}`}
          style={({ pressed }) => [
            styles.tab,
            activeTab === index ? styles.activeTab : styles.inactiveTab,
            pressed && styles.tabPressed,
          ]}
          onPress={() => onTabChange(index)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ChurchColors.background,
    paddingTop: 10,
    paddingBottom: 6,
  },
  scrollContent: {
    paddingHorizontal: 12,
    gap: 8,
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: ChurchColors.primary,
    borderWidth: 0,
  },
  inactiveTab: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: ChurchColors.borderColor,
  },
  tabPressed: {
    opacity: 0.8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: ChurchColors.text,
  },
  inactiveTabText: {
    color: ChurchColors.textSecondary,
  },
});
