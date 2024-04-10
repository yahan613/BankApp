import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Discount from '../screens/DiscountScreen';
import Loan from '../screens/LoanScreen';
import FinMan from '../screens/FinManScreen';
import Service from '../screens/ServiceScreen';
import { getBTicon } from '../component/img/getBTIcon';
import HomeScreenNavigator from './HomeScreenStack';


const Tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 90,
                    backgroundcolr: '#fff',
                },
                tabBarInactiveTintColor: '#244172',
                tabBarActiveTintColor: '#5C94F3',
                tabBarLabelStyle: {
                    fontSize: 17,
                    marginBottom: 10,
                },
                tabBarIconStyle: {
                    marginTop: 10,
                    width: 40,
                    height: 40,
                }
            }}

        >
            <Tab.Screen
                name="總覽"
                component={HomeScreenNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <View>{getBTicon("Homefill")}</View>
                            : <View>{getBTicon("Homeunfill")}</View>
                    )
                }}
            />
            <Tab.Screen
                name="理財"
                component={FinMan}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <View>{getBTicon("Investfill")}</View>
                            : <View>{getBTicon("Investunfill")}</View>
                    )
                }} />
            <Tab.Screen
                name="貸款"
                component={Loan}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <View>{getBTicon("Loanfill")}</View>
                            : <View>{getBTicon("Loanunfill")}</View>
                    )
                }} />
            <Tab.Screen
                name="優惠"
                component={Discount}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <View>{getBTicon("Discountfill")}</View>
                            : <View>{getBTicon("Discountunfill")}</View>
                    )
                }} />
            <Tab.Screen
                name="服務"
                component={Service}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <View>{getBTicon("Servicefill")}</View>
                            : <View>{getBTicon("Serviceunfill")}</View>
                    )
                }} />
        </Tab.Navigator>


    )
}

export default MyTab