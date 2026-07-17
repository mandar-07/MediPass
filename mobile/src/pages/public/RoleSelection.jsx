import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Navbar from '../../components/common/Navbar'
import { colors } from '../../constants/colors'

const RoleSelection = () => {
  const navigation = useNavigation()
  const [selectedRole, setSelectedRole] = useState(null)

  const handleContinue = () => {
    if (!selectedRole) return
    navigation.navigate('Signup', { role: selectedRole })
  }

  return (
    <>
      <Navbar />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER ICON */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Ionicons
              name="medkit"
              size={20}
              color={colors.primary[600]}
            />
          </View>

          <Text style={styles.brand}>
            Medipass
          </Text>
        </View>

        {/* WELCOME TEXT */}
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>
            Welcome
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Please select your role to customize
            your experience.
          </Text>
        </View>

        {/* ROLE CARDS */}
        <View style={styles.rolesContainer}>
          {/* PATIENT */}
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'patient' &&
                styles.roleCardActive
            ]}
            onPress={() =>
              setSelectedRole('patient')
            }
            activeOpacity={0.9}
          >
            <View style={styles.roleRow}>
              <View style={styles.roleIconBox}>
                <Ionicons
                  name="person"
                  size={26}
                  color={colors.primary[600]}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.roleTitle}>
                  I am a Patient
                </Text>
                <Text style={styles.roleDesc}>
                  Track records, prescriptions,
                  and monitor your health journey.
                </Text>
              </View>
            </View>

            <View style={styles.roleFooter}>
              <Text style={styles.selectPill}>
                Select Patient
              </Text>
            </View>
          </TouchableOpacity>

          {/* DOCTOR */}
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'doctor' &&
                styles.roleCardActive
            ]}
            onPress={() =>
              setSelectedRole('doctor')
            }
            activeOpacity={0.9}
          >
            <View style={styles.roleRow}>
              <View style={styles.roleIconBox}>
                <Ionicons
                  name="medical"
                  size={26}
                  color={colors.primary[600]}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.roleTitle}>
                  I am a Doctor
                </Text>
                <Text style={styles.roleDesc}>
                  Manage patients, issue
                  prescriptions, and clinical data.
                </Text>
              </View>
            </View>

            <View style={styles.roleFooter}>
              <Text style={styles.selectPill}>
                Select Doctor
              </Text>
            </View>
          </TouchableOpacity>

          {/* ACCENT IMAGE CARD */}
          {/* <View style={styles.imageCard}>
            <Image
              source={{
                uri: 'https://www.istockphoto.com/photos/cartoon-of-doctor-patient-consultation'
              }}
              style={styles.image}
            />
          </View> */}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            You can change your role later in
            account settings.
          </Text>

          <TouchableOpacity
            style={[
              styles.continueBtn,
              !selectedRole && { opacity: 0.5 }
            ]}
            onPress={handleContinue}
            disabled={!selectedRole}
          >
            <Text style={styles.continueText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default RoleSelection

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f6'
  },

  content: {
    padding: 20
  },

  /* HEADER */
  header: {
    alignItems: 'center',
    marginTop: 10
  },

  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: 'rgba(19,236,91,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6
  },

  brand: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#6b7280'
  },

  /* WELCOME */
  welcomeBox: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },

  welcomeTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
    color: '#111813'
  },

  welcomeSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22
  },

  /* ROLE CARDS */
  rolesContainer: {
    gap: 16
  },

  roleCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    borderWidth: 2,
    borderColor: 'transparent',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },

  roleCardActive: {
    borderColor: colors.primary[600]
  },

  roleRow: {
    flexDirection: 'row',
    gap: 14
  },

  roleIconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(19,236,91,0.15)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  roleTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 2,
    color: '#111813'
  },

  roleDesc: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18
  },

  roleFooter: {
    marginTop: 12,
    alignItems: 'flex-end'
  },

  selectPill: {
    backgroundColor: 'rgba(19,236,91,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1
  },

  /* IMAGE CARD */
  imageCard: {
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 6,
    backgroundColor: '#fff'
  },

  image: {
    width: '100%',
    height: '100%',
    opacity: 0.4
  },

  /* FOOTER */
  footer: {
    marginTop: 30
  },

  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 16,
    paddingHorizontal: 20,
    lineHeight: 18
  },

  continueBtn: {
    backgroundColor: colors.primary[600],
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },

  continueText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111813'
  }
})
