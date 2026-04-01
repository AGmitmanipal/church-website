import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { CategoryCard } from '@/components/CategoryCard';
import { ChurchColors } from '@/constants/theme';

interface SectionData {
  id: string;
  title: string;
  image?: string;
}


const fullWidthCards: SectionData[] = [
  { id: 'music', title: 'APC MUSIC', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop' },
  { id: 'books', title: 'APC BOOKS', image: 'https://images.unsplash.com/photo-1507842332343-583f7270bfba?w=800&h=400&fit=crop' },
  { id: 'kids', title: 'APC KIDS VIDEOS', image: 'https://images.unsplash.com/photo-1503919545889-48145c75a58f?w=800&h=400&fit=crop' },
];

// Full width cards section data

export const HomeScreen = () => {

  const renderFullWidthCard = ({ item }: { item: SectionData }) => (
    <View style={styles.fullWidthCardWrapper}>
      <CategoryCard
        title={item.title}
        imageUrl={item.image}
        style={styles.fullWidthCard}
        onPress={() => console.log(item.title)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>


        {/* FULL WIDTH SECTIONS */}
        {fullWidthCards.map((item) => (
          <View key={item.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            {renderFullWidthCard({ item })}
          </View>
        ))}
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
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: ChurchColors.primary,
    marginBottom: 12,
  },
  fullWidthCardWrapper: {
    height: 200,
  },
  fullWidthCard: {
    height: 200,
  },
  placeholderScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: ChurchColors.textSecondary,
    fontSize: 18,
  },
});