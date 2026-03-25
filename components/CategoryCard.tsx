import { ChurchColors } from '@/constants/theme';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';

interface CategoryCardProps {
  title: string;
  imageUrl?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  onPress,
  style,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.cardPressed,
        style,
      ]}
      onPress={onPress}
      android_ripple={{ color: 'rgba(255, 255, 255, 0.1)' }}
    >
      {/* Background Image */}
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.backgroundImage}
          contentFit="cover"
        />
      ) : (
        <View style={styles.placeholderBg} />
      )}

      {/* Dark Gradient Overlay */}
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.3)',
          'rgba(0, 0, 0, 0.6)',
          'rgba(0, 0, 0, 0.8)',
        ]}
        style={styles.overlay}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      {/* Text Content */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    overflow: 'hidden',
    aspectRatio: 1,
    backgroundColor: ChurchColors.cardBg,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  placeholderBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: ChurchColors.cardBg,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: ChurchColors.text,
    textAlign: 'center',
  },
  cardPressed: {
    opacity: 0.9,
  },
});
