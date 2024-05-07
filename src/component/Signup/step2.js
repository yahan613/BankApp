import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { geticon } from '../img/getIcon';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const Step2 = () => {
    const [bankaccount, setbankaccount] = useState(true);

    const [VISAnuminput, setVISAnuminput] = useState('');//金融卡或VISA金融卡號碼
    const [VISAissinput, setVISAissinput] = useState('');//金融卡發行號碼
    const [VISApininput, setVISApininput] = useState('');//金融卡辭路密碼
    const [Surepininput, setSurepininput] = useState('');//金融卡辭路密碼

    const [bankaccnuminput, setbankaccnuminput] = useState('');//銀行帳戶號碼
    const [bankpininput, setbankpininput] = useState('');//電話理財PIN碼

    const [showPassword, setShowPassword] = React.useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPassword2, setShowPassword2] = React.useState(false);
    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };
    const [showPassword3, setShowPassword3] = React.useState(false);
    const toggleShowPassword3 = () => {
        setShowPassword3(!showPassword3);
    };

    return (
        <View>
            <View style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start', flexDirection: 'row' }}>
                <View style={{ height: '100%', width: 3, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', }}>
                    建立您的登入資料
                </Text>
            </View>
            <View style={styles.selectbox}>
                <Text style={{ fontSize: 12.5, }}>請提供您將用於登入行動銀行的相關資料</Text>
            </View>

            <View style={styles.CheckBox}>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>身分證字號</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: '88%', height: '99%' }}
                        value={VISAnuminput}
                        onChangeText={text => setVISAnuminput(text)}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword}>
                        {geticon(showPassword ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>


                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15 }}>使用者名稱</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 5, borderRadius: 5, marginBottom: 15, width: '99%', height: 40, }}
                    value={VISAissinput}
                    onChangeText={text => setVISAissinput(text)}
                    secureTextEntry={!showPassword}
                />

                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>註冊密碼</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: '88%', height: '99%' }}
                        value={VISApininput}
                        onChangeText={text => setVISApininput(text)}
                        secureTextEntry={!showPassword2}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword2}>
                        {geticon(showPassword2 ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>


                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>確認密碼</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: '88%', height: '99%' }}
                        value={Surepininput}
                        onChangeText={text => setSurepininput(text)}
                        secureTextEntry={!showPassword3}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword3}>
                        {geticon(showPassword3 ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>


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


export default Step2;