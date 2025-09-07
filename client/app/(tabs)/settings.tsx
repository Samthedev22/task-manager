import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <View>
        <TouchableOpacity>
          <Text>Hello world!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}