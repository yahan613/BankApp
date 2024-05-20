import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountSettingsScreen from "../screens/AccountSettings";
import PersonalInfo from "../screens/AccountSettings/Personalinfo";
import ResetPassword from "../screens/AccountSettings/ResetPasswordScreen";

const Stack = createNativeStackNavigator();

const AccSettingNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="AccSetting">
            <Stack.Screen
                name="AccSetting"
                component={AccountSettingsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PersonalInfo"
                component={PersonalInfo}
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