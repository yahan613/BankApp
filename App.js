import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/navigator/HomeDrawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginStackNavigator from './src/navigator/LoginStack';
import ExchangeScreen from './src/screens/Exchange';
import { NavigationContainer } from '@react-navigation/native';
import MyTab from './src/navigator/ButtomTab';
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Counter, counterReducer, store } from './src/Store/Redux_Function';



//<LoginStackNavigator/>
//<ExchangeScreen />

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LoginStackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
