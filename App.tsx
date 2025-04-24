import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>App</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
