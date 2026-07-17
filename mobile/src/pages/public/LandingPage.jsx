import React from 'react'
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
import { LinearGradient } from 'expo-linear-gradient'
import Navbar from '../../components/common/Navbar'
import { colors } from '../../constants/colors'

const LandingPage = () => {
  const navigation = useNavigation()

  return (
    <>
      <Navbar />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO ILLUSTRATION CARD */}
        <View style={styles.heroWrapper}>
          <LinearGradient
            colors={[
              'rgba(19,127,236,0.05)',
              'rgba(19,127,236,0.15)'
            ]}
            style={styles.heroCard}
          >
            {/* Doctor Illustration */}
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7xWKkO2e69BcTNKJpXPm2agvfRxLicdH30OnKe020boRNnDIiXSUKI6wTbVV0qAVSzXtMKIPsVeUoOxhMWJPF25cwUsek3xT30urt_0mhCbBf_vGeAozKk0zw6jT85-1PT28Urur1mVSQGRCRPQrKcxx8mmp7GyqwJjhsQJxr7nK6qgj0FTc0O0ZFkVy42UDcNuma7MDYkBZhL1LbjlmQPygzeJt100JvywbJV0UId7cske-Xl7t7MYJCkmj0FtE-A_gaxvFiRdE'
              }}
              style={styles.heroImage}
              resizeMode="cover"
            />

            {/* Floating Badge */}
            <View style={styles.floatingBadge}>
              <Ionicons
                name="checkmark-circle"
                size={16}
                color="#22c55e"
              />
              <Text style={styles.floatingText}>
                Secure Data
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* HEADLINE */}
        <View style={styles.textSection}>
          <Text style={styles.title}>
            Your Health,{' '}
            <Text style={styles.highlight}>
              Simplified
            </Text>
          </Text>

          <Text style={styles.subtitle}>
            MediPass securely unifies your medical
            history, prescriptions, and reports into
            one QR-powered platform for patients and
            doctors.
          </Text>
        </View>

        {/* FEATURE BADGES */}
        <View style={styles.badgeRow}>
          <View style={styles.pill}>
            <Ionicons
              name="shield-checkmark"
              size={14}
              color={colors.primary[600]}
            />
            <Text style={styles.pillText}>
              HIPAA Compliant
            </Text>
          </View>

          <View style={styles.pill}>
            <Ionicons
              name="sync"
              size={14}
              color={colors.primary[600]}
            />
            <Text style={styles.pillText}>
              Real-time Sync
            </Text>
          </View>
        </View>

        {/* CTA BUTTONS */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() =>
              navigation.navigate('RoleSelection')
            }
          >
            <Text style={styles.primaryBtnText}>
              Get Started
            </Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() =>
              navigation.navigate('Login')
            }
          >
            <Text style={styles.secondaryBtnText}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Links */}
          <View style={styles.linksRow}>
            <Text style={styles.link}>
              Privacy Policy
            </Text>
            <Text style={styles.link}>
              Terms of Service
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default LandingPage

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f8'
  },

  /* HERO */
  heroWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20
  },

  heroCard: {
    aspectRatio: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  heroImage: {
    width: '85%',
    height: '85%',
    borderRadius: 16
  },

  floatingBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    elevation: 4
  },

  floatingText: {
    fontSize: 10,
    fontWeight: '700'
  },

  /* TEXT */
  textSection: {
    paddingHorizontal: 32,
    paddingTop: 28,
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 14,
    color: '#111418'
  },

  highlight: {
    color: colors.primary[600]
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#637588',
    lineHeight: 24,
    fontWeight: '500'
  },

  /* PILLS */
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 24,
    flexWrap: 'wrap'
  },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#e5e7eb'
  },

  pillText: {
    fontSize: 12,
    fontWeight: '600'
  },

  /* FOOTER */
  footer: {
    marginTop: 40,
    paddingHorizontal: 24,
    gap: 14
  },

  primaryBtn: {
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.primary[600],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 6
  },

  primaryBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },

  secondaryBtn: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#f0f2f4',
    alignItems: 'center',
    justifyContent: 'center'
  },

  secondaryBtnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111418'
  },

  linksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginTop: 6
  },

  link: {
    fontSize: 12,
    color: '#637588',
    fontWeight: '500'
  }
})
