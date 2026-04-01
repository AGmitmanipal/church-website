import { ChurchColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const upcomingEvents = [
  { id: '1', title: 'Sunday Worship Service', date: 'Sunday, 10:00 AM', icon: 'calendar' },
  { id: '2', title: 'Youth Fellowships', date: 'Saturday, 5:00 PM', icon: 'people' },
  { id: '3', title: 'Evening Prayer', date: 'Wednesday, 7:00 PM', icon: 'time' },
  { id: '4', title: 'Bible Study', date: 'Friday, 6:30 PM', icon: 'book' },
  { id: '5', title: 'Women\'s Fellowship', date: 'Tuesday, 4:00 PM', icon: 'heart' },
];

export const UpdatesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={styles.title}>Updates</Text>
          <Text style={styles.description}>
            Stay informed about the latest happenings and upcoming events at All Peoples Church
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>UPCOMING EVENTS</Text>
          {upcomingEvents.map((event) => (
            <TouchableOpacity key={event.id} style={styles.eventCard} activeOpacity={0.7}>
              <View style={styles.eventIconContainer}>
                <Ionicons name={event.icon as any} size={24} color={ChurchColors.primary} />
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={ChurchColors.textTertiary} />
            </TouchableOpacity>
          ))}
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: ChurchColors.primary,
    letterSpacing: 1.5,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ChurchColors.cardBg,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: ChurchColors.borderColor,
  },
  eventIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: ChurchColors.text,
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 13,
    color: ChurchColors.textSecondary,
  },
});
