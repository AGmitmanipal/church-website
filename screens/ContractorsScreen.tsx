import { ChurchColors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export const ContractorsScreen = ({ navigation }: any) => {
  const handleEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Ionicons name="arrow-back" size={24} color={ChurchColors.primary} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerSection}>
        <Text style={styles.sectionTitle}>Contractors & Email Access</Text>
      </View>

      <View style={styles.content}>
        <Ionicons name="people-outline" size={64} color={ChurchColors.textTertiary} style={{ marginBottom: 20 }} />
        <Text style={styles.description}>
          For any inquiries or technical support, please get in touch with our team directly via email.
        </Text>

        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => handleEmail('contractors@apcwo.org')}
        >
          <Ionicons name="mail" size={20} color="#FFFFFF" />
          <Text style={styles.emailText}>Contact via Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ChurchColors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  headerSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#9CA3AF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E02D2D',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    maxWidth: 300,
    shadowColor: '#E02D2D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  emailText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
