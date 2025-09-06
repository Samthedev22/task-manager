import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
      <View>
        <TouchableOpacity>
          <Text>Hello world!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}