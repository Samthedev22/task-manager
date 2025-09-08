import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { useState } from 'react';
import useTheme from '../hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ProgressStats from '@/components/progressStats';
import Preferences from '@/components/Preferences';
import DangerZone from '@/components/dangerZone';


export default function SettingsScreen() {
  const {colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
    <SafeAreaView style={settingsStyles.safeArea}>
      <View style={settingsStyles.header}>
        <View style={settingsStyles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
          <Ionicons name="settings-outline" size={28} color="#fff"/>
        </LinearGradient>
        {/* <Text style={{isDarkMode ? color: "white" : color: "black"}}>Settings</Text> */}
        <Text style={settingsStyles.title}>Settings</Text>
        </View>
      </View>

      <ScrollView style={settingsStyles.scrollView}
      contentContainerStyle={settingsStyles.content}
      showsVerticalScrollIndicator={false}
      >
        <ProgressStats />

        <Preferences />

        <DangerZone />
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  )
}