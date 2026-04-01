import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../src/components/Header';
import { TabSwitch } from '../src/components/TabSwitch';
import { HomeScreen } from './HomeScreen';
import { ResourcesScreen } from './ResourcesScreen';
import { UpdatesScreen } from './UpdatesScreen';
import { ChurchColors } from '@/constants/theme';

const TABS = ['Home', 'Updates', 'Resources'];

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <UpdatesScreen />;
      case 2:
        return <ResourcesScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <TabSwitch
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
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