import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import Transfer from "../screens/TransferScreen";
import TransferConfirm from "../screens/TransferConfirm";
import Withdraw from "../screens/WithdrawScreen";
import Payment from "../screens/PaymentScreen";
import ExchangeScreen from "../screens/Exchange";
import ExchangeConfirm from "../screens/ExchangeConfirm";
import AccountEdit from "../screens/AccountEdit";
import AccountSettings from "../screens/AccountSettings";
import SavingsAccount from "../screens/SavingsAccount";
import History from "../screens/History";
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
            {/* 交易成功頁面 */}
            <Stack.Screen 
                name="ExchangeConfirm" 
                component={ExchangeConfirm} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="TransferConfirm" 
                component={TransferConfirm} 
                options={{
                    headerShown: false,
                }}
            />
            {/* 帳戶管理相關 */}
            <Stack.Screen 
                name="AccountSettings" 
                component={AccountSettings} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="AccountEdit" 
                component={AccountEdit} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="SavingsAccount" 
                component={SavingsAccount} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="History" 
                component={History} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreenNavigator