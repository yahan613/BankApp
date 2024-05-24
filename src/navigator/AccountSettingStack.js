import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountSettingsScreen from "../screens/AccountSettings/AccountSettings";
import AccountEdit from "../screens/AccountSettings/AccountEdit";
import SavingsAccount from "../screens/AccountSettings/SavingsAccount"
import History from "../screens/AccountSettings/History"
import ResetPassword from "../screens/AccountSettings/ResetPasswordScreen";

const Stack = createNativeStackNavigator();

const AccSettingNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="AccountSetting">
            <Stack.Screen
                name="AccountSetting"
                component={AccountSettingsScreen}
                options={{ headerShown: false }}
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
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AccSettingNavigator