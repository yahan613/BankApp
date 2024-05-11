import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, } from '@firebase/auth';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier} from "firebase/auth";
import { auth } from '../../../Firebaseinit';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const Step1 = () => {
    const [bankaccount, setbankaccount] = useState(true);

    const [VISAnuminput, setVISAnuminput] = useState('');//金融卡或VISA金融卡號碼
    const [VISAissinput, setVISAissinput] = useState('');//金融卡發行號碼
    const [VISApininput, setVISApininput] = useState('');//金融卡辭路密碼

    const [bankaccnuminput, setbankaccnuminput] = useState('');//銀行帳戶號碼

    //手機驗證
    const [phoneinput, setphoneinput] = useState('');//電話理財PIN碼
    const [verifphoneinput, setverifphoneinput] = useState('');//電話理財PIN碼

    return (
        <View>
            <View style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start', flexDirection: 'row' }}>
                <View style={{ height: '100%', width: 3, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', }}>
                    驗證您的身分
                </Text>
            </View>
            <View style={styles.selectbox}>
                <Text style={{ fontSize: 12.5, }}>請選擇驗證方式</Text>
            </View>
            <View style={styles.CheckBox}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                    <View style={styles.outerCircle} />
                    <TouchableOpacity
                        style={bankaccount ? styles.innerCircle : styles.noinnerCircle}
                        onPress={() => {
                            setbankaccount(1);
                        }}
                    >
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16 }}>銀行帳戶號碼</Text>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 40, height: (bankaccount) ? 260 : 0, overflow: 'hidden' }}>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15 }}>銀行帳戶號碼</Text>
                <Text style={{ color: '#929191', fontSize: 13 }}>輸入”0”和”您本行帳戶號碼前9碼”</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, marginBottom: 20, width: '99%' }}
                    value={bankaccnuminput}
                    onChangeText={text => setbankaccnuminput(text)}
                />
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15 }}>電話號碼</Text>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 13 }}>10位數字(0~9)</Text>
                <View style={{ flexDirection: 'column', width: '99%', borderColor: 'grey', borderWidth: 1, borderRadius: 5, }}>
                    <View style={{ width: '100%', flexDirection: 'row', height: 40, alignItems: 'center', borderBottomWidth: 1, borderColor: 'gray', }}>
                        <TextInput
                            style={{ padding: 5, borderRadius: 5, width: '100%', height: '90%' }}
                            value={phoneinput}
                            onChangeText={text => setphoneinput(text)}
                        />
                        <TouchableOpacity
                            style={{ width: '33%', backgroundColor: '#5C94F3', marginLeft: -76, height: 33.7, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ fontSize: 12, color: '#fff' }}>獲取驗證碼</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={{ padding: 5, width: '100%', height: 38, }}
                        value={verifphoneinput}
                        onChangeText={text => setverifphoneinput(text)}
                        placeholder="請輸入手機簡訊驗證碼"
                    />
                </View>
            </View>
            <View style={styles.CheckBox}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                    <View style={styles.outerCircle} />
                    <TouchableOpacity
                        style={bankaccount ? styles.noinnerCircle : styles.innerCircle}
                        onPress={() => {
                            setbankaccount(0);
                        }}
                    >
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16 }}>金融卡或VISA金融卡號碼</Text>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 40, marginBottom: -10, height: (bankaccount) ? 0 : 350, overflow: 'hidden' }}>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15 }}>金融卡或VISA金融卡號碼</Text>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 13 }}>12位數字(0~9)銀行帳號</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, marginBottom: 20, width: '99%' }}
                    value={VISAnuminput}
                    onChangeText={text => setVISAnuminput(text)}
                />
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15 }}>金融卡發行號碼</Text>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 13 }}>1位數字(0~9)</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, marginBottom: 20, width: '99%' }}
                    value={VISAissinput}
                    onChangeText={text => setVISAissinput(text)}
                />
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>金融卡辭路密碼</Text>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 13 }}>4位數字(0~9)</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, marginBottom: 15, width: '99%' }}
                    value={VISApininput}
                    onChangeText={text => setVISApininput(text)}
                />
            </View>
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 35,
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
        backgroundColor: '#fff',
        position: 'absolute',
    },
});


export default Step1;