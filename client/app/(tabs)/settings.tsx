import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useState } from 'react';
import useTheme from '../hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen() {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotification, setIsNotification] = useState(true);

  const {colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient 
    colors={colors.gradients.background} 
    style={settingsStyles.container}>
    <SafeAreaView>
      <Text>Settings</Text>
      <View>
        <TouchableOpacity>
          <Text>Hello!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}