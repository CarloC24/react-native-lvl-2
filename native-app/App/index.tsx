import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentListView from "./screens/CurrentListView";
// Added this so uuid can work
import 'react-native-get-random-values';


function App():JSX.Element {
  return (

      <CurrentListView />

  );
}

export default registerRootComponent(App);