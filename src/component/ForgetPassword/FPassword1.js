import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { geticon } from '../img/getIcon';
import CheckBox from 'react-native-check-box';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const ResetPassword1 = () => {
    return (
        <View> 
            <Text style={{ color: '#244172', fontSize: 22, marginTop: 30 }}>更改密碼須知</Text>
            <Text style={{ marginTop: 20, ...Platform.select({ios: { fontSize: 14, }, android: { fontSize: 15, }}) }}>1. 使用者名稱：6－16位英數字，英文至少2位且區分大小寫。</Text>
            <Text style={{ marginTop: 10, ...Platform.select({ios: { fontSize: 14, }, android: { fontSize: 15, }}) }}>2. 簽入密碼、交易密碼：6－8位英、數字或英數字混合，如變更密碼為英文字請注意大小寫。</Text>
            <Text style={{ marginTop: 10, ...Platform.select({ios: { fontSize: 14, }, android: { fontSize: 15, }}) }}>3. 請勿使用連號或重號作為網路銀行使用者名稱，例如123456、654321、111111、ABCDEF。</Text>
            <Text style={{ marginTop: 10, ...Platform.select({ios: { fontSize: 14, }, android: { fontSize: 15, }}) }}>4. 簽入密碼及交易密碼須於核發起一個月內上網登入並變更密碼，如逾期密碼即失效，請依「密碼管理」說明，回臨櫃辦理重置密碼。</Text>
            <Text style={{ marginTop: 10, ...Platform.select({ios: { fontSize: 14, }, android: { fontSize: 15, }}) }}>5. 簽入密碼及交易密碼使用超過一年應辦理變更，系統會於您登入時顯示訊息請您變更密碼。</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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


export default ResetPassword1;