import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CategoryCard } from '@/components/CategoryCard';
import { ChurchColors } from '@/constants/theme';

interface SectionData {
  id: string;
  title: string;
  image?: string;
}

const sermonCategories: SectionData[] = [
  { id: '1', title: 'Video', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { id: '2', title: 'Audio', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop' },
  { id: '3', title: 'Notes', image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=400&fit=crop' },
  { id: '4', title: 'Series', image: 'https://images.unsplash.com/photo-1500622944204-200b992ceeb1?w=400&h=400&fit=crop' },
];

const fullWidthCards: SectionData[] = [
  { id: 'music', title: 'APC MUSIC', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop' },
  { id: 'books', title: 'APC BOOKS', image: 'https://images.unsplash.com/photo-1507842332343-583f7270bfba?w=800&h=400&fit=crop' },
  { id: 'kids', title: 'APC KIDS VIDEOS', image: 'https://images.unsplash.com/photo-1503919545889-48145c75a58f?w=800&h=400&fit=crop' },
];

export const HomeScreen = () => {
  const renderSermonCard = ({ item }: { item: SectionData }) => (
    <View style={styles.gridItemWrapper}>
      <CategoryCard
        title={item.title}
        imageUrl={item.image}
        onPress={() => console.log(item.title)}
      />
    </View>
  );

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
        {/* SERMONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SERMONS</Text>

          <FlatList
            data={sermonCategories}
            renderItem={renderSermonCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>

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
  columnWrapper: {
    justifyContent: 'space-between',
  },
  gridItemWrapper: {
    flex: 1,
    marginBottom: 12,
    aspectRatio: 1,
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