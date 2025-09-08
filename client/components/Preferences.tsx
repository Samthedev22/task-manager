import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native'
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import useTheme from '@/app/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Preferences = () => {
    const [isAutoSync, setIsAutoSync] = useState(true);
    const [isNotification, setIsNotification] = useState(true);
    
    const { isDarkMode, toggleDarkMode, colors } = useTheme();

    const toggleNotification = () => setIsNotification(previous => !previous);

    const preferenceStyle = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.surface} style={preferenceStyle.section}>
        <Text style={preferenceStyle.sectionTitle}>Perferences</Text>
        
        <View style={preferenceStyle.settingItem}>
            <View style={preferenceStyle.settingLeft}>
                <LinearGradient colors={colors.gradients.primary} style={preferenceStyle.settingIcon}>
                    <Ionicons name="moon" size={18} color="#fff"/>
                </LinearGradient>
                <Text style={preferenceStyle.sectionTitle}>Dark Mode</Text>
            </View>

            <Switch 
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={"#f4efefff"}
            ios_backgroundColor="#f03e3eff"
            trackColor={{false: "#cbcbcbff", true : "#c5c5c5ff"}}
            />
            <hr />
        </View>

       <View style={preferenceStyle.settingItem}>
            <View style={preferenceStyle.settingLeft}>
                <LinearGradient colors={colors.gradients.warning} style={preferenceStyle.settingIcon}>
                    <Ionicons name="notifications" size={18} color="#fff"/>
                </LinearGradient>
                <Text style={preferenceStyle.sectionTitle}>Notification</Text>
            </View>

            <Switch 
            value={isNotification}
            onValueChange={toggleNotification}
            thumbColor={"#f4efefff"}
            ios_backgroundColor="#f03e3eff"
            trackColor={{false: "#cbcbcbff", true : "#c5c5c5ff"}}
            />
            <hr />
        </View>

        <View style={preferenceStyle.settingItem}>
            <View style={preferenceStyle.settingLeft}>
                <LinearGradient colors={colors.gradients.success} style={preferenceStyle.settingIcon}>
                    <Ionicons name="sync" size={18} color="#fff"/>
                </LinearGradient>
                <Text style={preferenceStyle.sectionTitle}>Async</Text>
            </View>

            <Switch 
            value={isAutoSync}
            onValueChange={setIsAutoSync}
            thumbColor={"#f4efefff"}
            ios_backgroundColor="#f03e3eff"
            trackColor={{false: "#cbcbcbff", true : "#c5c5c5ff"}}
            />
        </View>
            
    </LinearGradient>
  )
}

export default Preferences