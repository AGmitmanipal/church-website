import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 24) }]}>
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
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#0D1117',
    borderTopWidth: 1,
    borderTopColor: '#1A212D',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    maxWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#E02D2D',
  },
  inactiveTab: {
    backgroundColor: '#1C2128',
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