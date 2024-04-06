import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/navigator/HomeDrawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginStackNavigator from './src/navigator/LoginStack';
import ExchangeScreen from './src/screens/Exchange';
//<LoginStackNavigator/>

export default function App() {
  return (
    <SafeAreaProvider>
       <ExchangeScreen/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
