import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login";
import HomeDrawer from "./HomeDrawer";
import Signup from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

const LoginStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeDrawer"
                    component={HomeDrawer}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginStackNavigator