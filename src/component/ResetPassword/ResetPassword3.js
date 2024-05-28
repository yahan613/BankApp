import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { geticon } from '../img/getIcon';
import CheckBox from 'react-native-check-box';






const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const ResetPassword3 = () => {
    return (
        <View style={styles.container}>
            <Image
                source={geticon('ResetPassword')}
                style={{ width: 100, height: 100, marginTop: 15 }}
            />
            <Text style={{ color: '#244172', fontSize: 22, marginTop: 30, alignSelf:'flex-start' }}>更改密碼成功！</Text>
            <Text style={{ marginTop: 30, fontSize: 16,alignSelf:'flex-start' }}>為保障您的帳戶安全，我們將登出您的帳號，請重新登入。</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 30
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#244172',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    userSection: {
        alignSelf: 'center',
        padding: 30,
        width: itemWidth,
        height: 600,
        borderRadius: 15,
        backgroundColor: '#E3E3E3',
        justifyContent: 'flex-start',
    },
    selectbox: {
        width: '100%',
        flexDirection: 'column',
        height: 50,
    },
    CheckBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 35,
        width: '100%'
    },
    outerCircle: {
        width: 20,
        height: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#929191',
    },
    innerCircle: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: '#244172',
        position: 'absolute',
    },
    noinnerCircle: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: '#E3E3E3',
        position: 'absolute',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        width: '99%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    visible: {
        marginRight: 150,
    },
});


export default ResetPassword3;