import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import { geticon } from '../component/img/getIcon';
import HomeScreen from '../screens/HomeScreen';


import AccountSettingsScreen from '../screens/AccountSettings';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const [SearchText, onChangeAccount] = React.useState(''); //輸入帳號
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.welcome}>
                <Text style={{ fontSize: 23, marginLeft: 23, marginTop: -20, color: '#fff', }}>您好，XXX</Text>
                <View style={styles.search}>
                    <TextInput
                        style={{ backgroundColor: 'transparent' }}
                        onChangeText={text => onChangeSearch(text)}
                        value={SearchText}
                        placeholder="請輸入關鍵字..."
                    />
                    <TouchableOpacity style={{ width: 20, height: 20 }}>
                        {geticon("Search")}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.drawerContent}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

const menuItems = [
    { name: "帳戶設定", component: AccountSettingsScreen, icon: 'Account' },
    { name: "轉帳服務", component: AccountSettingsScreen, icon: 'Transfer' },
    { name: "提款服務", component: AccountSettingsScreen, icon: 'Withdraw' },
    { name: "繳費服務", component: AccountSettingsScreen, icon: 'Bill' },
    { name: "台幣服務", component: AccountSettingsScreen, icon: 'Twd' },
    { name: "外幣服務", component: AccountSettingsScreen, icon: 'Foreign_currency' },
    { name: "信用卡服務", component: AccountSettingsScreen, icon: 'Credit_card' },
    { name: "理財服務", component: AccountSettingsScreen, icon: 'Account' },
    { name: "貸款服務", component: AccountSettingsScreen, icon: 'Loan' },
    { name: "優惠服務", component: AccountSettingsScreen, icon: 'Discount' },
    { name: "語音辨識", component: AccountSettingsScreen, icon: 'Mic' },
    { name: "English Service", component: AccountSettingsScreen, icon: 'English' }
];


const HomeDrawer = ({ navigation }) => {

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: 350,
                },
            }}
        >
            <Drawer.Screen
                name="帳務總覽"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerStyle: {
                        height: 100,
                        backgroundColor: '#244172',
                        elevation: 0,
                    },
                    drawerLabel: () => null,
                    drawerActiveBackgroundColor: '#fff',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    drawerItemStyle: { height: 0 },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 20, }}>
                            {geticon('Drawer')}
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={styles.headercontainer}>
                            <TouchableOpacity style={{marginRight: 10,}}>
                                {geticon('Scan')}
                            </TouchableOpacity>
                            <TouchableOpacity>
                                {geticon('Scan')}
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            {menuItems.map((item, index) => (
                <Drawer.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={{
                        drawerIcon: () => (
                            geticon(item.icon)
                        ),

                        headerShown: false, // 显示Header
                        drawerLabelStyle: {
                            color: 'black', // 将文字颜色设置为黑色
                        },
                        drawerActiveTintColor: '#fff',
                        drawerItemStyle: { height: 50 },
                    }}

                />
            ))}
        </Drawer.Navigator>
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
    drawerContent: {
        flex: 1,
        backgroundColor: '#fff', // 设置抽屉的背景颜色为蓝色
    },
    welcome: {
        borderTopColor: '#244172',
        borderTopWidth: 100,
        height: 150,
        justifyContent: 'center',
        marginTop: -60,
        marginBottom: -5,
        backgroundColor: '#244172',
        flexDirection: 'column',
        height: 200
    },
    search: {
        backgroundColor: '#D9D9D9',
        width: '80%',
        height: 40,
        margin: 23,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
    },
    headercontainer: {
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default HomeDrawer;