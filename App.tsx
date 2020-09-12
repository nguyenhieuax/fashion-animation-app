import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthenticationNavigator } from './src/Authentication'
import { ThemeProvider } from '@shopify/restyle';
import { LoadAssets } from './src/components';
import  {theme}  from './src/components/Theme';
import { assets } from './src/Authentication';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>

  );
}