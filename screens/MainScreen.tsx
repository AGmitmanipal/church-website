import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../src/components/Header';
import { TabSwitch } from '../src/components/TabSwitch';
import { HomeScreen } from './HomeScreen';
import { ToolkitScreen } from './ToolkitScreen';
import { ChurchColors } from '@/constants/theme';

const TABS = ['Home', 'Toolkit', 'Resources'];

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <ToolkitScreen />;
      case 2:
        return (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>Resources Content</Text>
          </View>
        );
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TabSwitch
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ChurchColors.background,
  },
  content: {
    flex: 1,
    backgroundColor: ChurchColors.background,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: ChurchColors.textSecondary,
    fontSize: 16,
  },
});