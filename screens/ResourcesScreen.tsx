import { Header } from '@/components/Header';
import { ChurchColors } from '@/constants/theme';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.title}>Resources</Text>
          <Text style={styles.description}>
            Access to all resources and learning materials from All Peoples Church
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ChurchColors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: ChurchColors.primary,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: ChurchColors.textSecondary,
    lineHeight: 20,
  },
});
