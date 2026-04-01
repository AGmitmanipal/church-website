import { CategoryCard } from '@/components/CategoryCard';
import { ChurchColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const sermonCategories = [
  { id: '1', title: 'Video', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { id: '2', title: 'Audio', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop' },
  { id: '3', title: 'Notes', image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=400&fit=crop' },
  { id: '4', title: 'Series', image: 'https://images.unsplash.com/photo-1500622944204-200b992ceeb1?w=400&h=400&fit=crop' },
];

export const ResourcesScreen = () => {
  const renderSermonCard = ({ item }: { item: any }) => (
    <View style={styles.gridItemWrapper}>
      <CategoryCard
        title={item.title}
        imageUrl={item.image}
        onPress={() => console.log(item.title)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={styles.title}>Resources</Text>
          <Text style={styles.description}>
            Access to all resources and learning materials from All Peoples Church
          </Text>
        </View>

        {/* SERMONS SECTION */}
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
  headerSection: {
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: ChurchColors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: ChurchColors.textSecondary,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: ChurchColors.primary,
    letterSpacing: 1.5,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 12,
  },
  gridItemWrapper: {
    flex: 1,
    marginBottom: 12,
  },
});
