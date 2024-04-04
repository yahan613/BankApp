import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { geticon } from '../component/img/getIcon';
import { getverifyPic } from '../component/img/getVerifyPic';

import AcountSettingsScreen from './AccountSettings';

const Drawer = createDrawerNavigator();


const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="AcountSettings" component={AcountSettingsScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },

});

export default HomeScreen;