import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { geticon } from '../img/getIcon';
import CheckBox from 'react-native-check-box';
import { Susername, Spassword } from './step2';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, } from '@firebase/auth';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from '../../../Firebaseinit';




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const Step4 = () => {
    const handleRegister = async () => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(`${Susername}@example.com`, Spassword);
            const user = userCredential.user;
            Alert.alert('Registration Successful', `User registered with username: ${Susername}`);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert('Registration Failed', errorMessage);
        }
    };
    return (
        <View>
            <Image
                source={geticon('SignUpSuccess')}
                style={{ width: 65, height: 65, marginRight: 5 }}
            />
            <Text style={{ color: '#244172', fontSize: 22, marginTop: 30 }}>註冊成功</Text>
            <Text style={{ marginTop: 30, fontSize: 16, }}>現在您已成功註冊使用巴菲特行動銀行。</Text>
            <Text style={{ marginTop: 30, fontSize: 16, }}>為保障您的帳戶安全，每次登入行動銀行需輸入動態認證碼。您必須確保登入資料、安全問題及答案的安全，切勿透露給他人，以協助我們防止發生欺詐行為。</Text>
            <Text style={{ marginTop: 100, fontSize: 15, }}>您的使用者名稱是：TW0203beck</Text>
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


export default Step4;