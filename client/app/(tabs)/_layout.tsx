import { View, Text } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { Tabs } from 'expo-router'
import useTheme from '../hooks/useTheme';

export default function _layout() {
    const { colors } = useTheme();

  return (
    <Tabs 
    screenOptions={{headerShown: false,
    tabBarActiveTintColor: "#000000",
        tabBarStyle: {
            backgroundColor: "#ffffff",
            height: 60,
        },
        tabBarLabelStyle: {
            fontWeight: 600
        },
    }}
    >
    
        <Tabs.Screen
        name="index" 
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <MaterialIcons name="task-alt" size={24} color={color} />,
        }}
        />

        <Tabs.Screen
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({color}) => <Ionicons name="settings-outline" size={24} color={color} />
        }}
        />

    </Tabs>
  )
}