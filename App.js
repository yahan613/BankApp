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
import { app } from './Firebaseinit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//<ExchangeConfirm />AppRegistry.registerComponent('mid_16_BuffetAPP', () => App);
//https://reactnative.dev/docs/appregistry

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaProvider>
          <LoginStackNavigator />
        </SafeAreaProvider>
      </Provider>
    </QueryClientProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
