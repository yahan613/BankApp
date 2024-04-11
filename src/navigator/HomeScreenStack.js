import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import Transfer from "../screens/TransferScreen";
import Withdraw from "../screens/WithdrawScreen";
import Payment from "../screens/PaymentScreen";
import ExchangeScreen from "../screens/Exchange";
const Stack = createNativeStackNavigator();

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Transfer"
                component={Transfer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Withdraw"
                component={Withdraw}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Exchange"
                component={ExchangeScreen}
                options={{
                    headerShown: false,
                }}
            />
            
        </Stack.Navigator>
    )
}

export default HomeScreenNavigator