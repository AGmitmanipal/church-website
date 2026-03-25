import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onPress?: () => void;
  fullWidth?: boolean;
}

export default function CategoryCard({ title, imageUrl, onPress, fullWidth = false }: CategoryCardProps) {
  return (
    <View style={[styles.container, fullWidth ? styles.fullWidth : styles.halfWidth]}>
      <Pressable 
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        onPress={onPress}
      >
        <ImageBackground 
          source={{ uri: imageUrl }} 
          style={styles.imageBackground}
          imageStyle={styles.imageRadius}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}
            style={styles.overlay}
          >
            <Text style={styles.title}>{title}</Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  halfWidth: {
    width: '50%',
    aspectRatio: 1, // Makes it a square
  },
  fullWidth: {
    width: '100%',
    height: 150,
  },
  pressable: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.8,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
