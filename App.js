import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginStackNavigator from './src/navigator/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import MyTab from './src/navigator/ButtomTab';
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Counter, counterReducer, store } from './src/Store/Redux_Function';
import { GetSelectedRates } from './src/component/Exchange/getExchange';
import ExchangeConfirm from './src/screens/ExchangeConfirm';
import { app } from './Firebaseinit';

//<ExchangeConfirm />AppRegistry.registerComponent('mid_16_BuffetAPP', () => App);
//https://reactnative.dev/docs/appregistry

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
