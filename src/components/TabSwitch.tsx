import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

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
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        return (
          <Pressable
            key={tab}
            onPress={() => onTabChange(index)}
            style={[
              styles.tab,
              isActive ? styles.activeTab : styles.inactiveTab
            ]}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
    backgroundColor: '#0D1117',
    borderBottomWidth: 1,
    borderBottomColor: '#1A212D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#E02D2D',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3a414e',
  },
  tabText: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});