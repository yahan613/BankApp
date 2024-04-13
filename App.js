import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/navigator/HomeDrawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginStackNavigator from './src/navigator/LoginStack';
import ExchangeScreen from './src/screens/Exchange';
import { NavigationContainer } from '@react-navigation/native';
import MyTab from './src/navigator/ButtomTab';
import { store } from './src/Store/store';
import { Provider } from 'react-redux';


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
