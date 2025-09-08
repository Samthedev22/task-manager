import { View, Text, Alert, TouchableOpacity, } from 'react-native'
import React from 'react'
import useTheme from '@/app/hooks/useTheme'
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';



const DangerZone = () => {
  const {colors} = useTheme();

  const settingsStyle = createSettingsStyles(colors);

  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const handleResetApp = () => {
    Alert.alert("Reset App", "⚠️ This will permanently delete ALL your todos", [
      {text: "Cancel", style:"cancel"},
      {text: "Delete All", style:"destructive", 
        onPress: async () => {
          try{
           const result = await clearAllTodos();
            Alert.alert("App Reset", `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`);
          } catch(error) {
            console.log("Error deleting all todos", error)
            Alert.alert("Error", "Failed to reset app");
          }
      }}
    ])
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
        <Text style={settingsStyle.sectionTitleDanger}>Danger Zone</Text>
        <TouchableOpacity onPress={handleResetApp} style={[settingsStyle.actionButton, {borderBottomWidth: 0}]} activeOpacity={0.7}>
          <View style={settingsStyle.actionLeft}>
            <LinearGradient colors={colors.gradients.danger} style={settingsStyle.actionIcon}>
              <Ionicons name="trash" size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingsStyle.settingText }>Reset App</Text>
          </View>
          <Ionicons name="chevron-forward" size={19} color={colors.textMuted} />
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default DangerZone