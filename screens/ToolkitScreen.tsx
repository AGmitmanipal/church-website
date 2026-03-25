import { CategoryCard } from '@/components/CategoryCard';
import { Header } from '@/components/Header';
import { ChurchColors } from '@/constants/theme';
import React from 'react';
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';

interface ToolkitItem {
  id: string;
  title: string;
  image?: string;
}

const toolkitItems: ToolkitItem[] = [
  {
    id: '1',
    title: 'Gospel',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Reasons',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Faith Builders',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Identity',
    image: 'https://images.unsplash.com/photo-1500622944204-200b992ceeb1?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'How To',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Group Study Guides',
    image: 'https://images.unsplash.com/photo-1516979187457-635ffe35ebdb?w=400&h=400&fit=crop',
  },
  {
    id: '7',
    title: 'Principles',
    image: 'https://images.unsplash.com/photo-1503919545889-48145c75a58f?w=400&h=400&fit=crop',
  },
  {
    id: '8',
    title: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1497206365907-4d71bcdd2085?w=400&h=400&fit=crop',
  },
];

export const ToolkitScreen = () => {
  const renderToolkitCard = ({ item }: { item: ToolkitItem }) => (
    <View style={styles.gridItemWrapper}>
      <CategoryCard
        title={item.title}
        imageUrl={item.image}
        onPress={() => console.log(`Toolkit: ${item.title}`)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={toolkitItems}
        renderItem={renderToolkitCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ChurchColors.background,
  },
  gridContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  gridItemWrapper: {
    flex: 1,
    aspectRatio: 1,
  },
});
