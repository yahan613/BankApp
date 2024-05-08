import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity, } from 'react-native';
import { geticon } from '../component/img/getIcon';
import CheckBox from 'react-native-check-box';
import { getverifyPic } from '../component/img/getVerifyPic';
import { useSelector, useDispatch } from 'react-redux';
import GetSelectedRates from '../component/Exchange/getExchange';
import ActionSheetVernum from '../component/data/ActionSheetVernum.json'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;




const LoginScreen = ({ navigation }) => {
    //Login Action
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch({ type: 'LOGIN', payload: AccountText });
    };


    const [AccountText, onChangeAccount] = React.useState(''); //輸入帳號
    const [passwordText, onChangePassword] = React.useState(''); //輸入密碼
    const [IDText, onChangeID] = React.useState(''); //輸入密碼
    const [VerificaitonText, onChangeVerification] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);
    //驗證碼圖片生成
    let [verifynum, setVerifynum] = React.useState(1);
    //Visible
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
    const incrementVerifynum = () => {
        verifynum = (verifynum) % 6 + 1;
        setVerifynum(verifynum);
    };
    GetSelectedRates()
    const [showAlert, setShowAlert] = React.useState(false);

    //Awesome
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', ...Platform.select({ ios: { height: 200, }, android: { height: 145, } }), backgroundColor: '#244172', justifyContent: 'center', alignItems: 'center' }}>
                {/*Header of Login Screens*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 70, marginTop: '10%' }}>
                    <View style={styles.logo} />
                    <Image source={require('../component/img/Logo.png')} style={{ width: 65, height: 65, marginRight: 5 }} />
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        {/*Container of Bank Logo*/}
                        <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>巴菲特銀行</Text>
                        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>Buffet Bank</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: 200, height: 10 }}>
                <AwesomeAlert
                    show={showAlert}
                    title="驗證碼輸入錯誤"
                    message="請重新輸入"
                    showConfirmButton={true}
                    confirmText="重試"
                    confirmButtonColor="#5C94F3"
                    onConfirmPressed={handleCloseAlert}
                />
            </View>
            <View style={styles.userSection}>
                <View style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ height: '100%', width: 3, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', }}>
                        歡迎，請登入
                    </Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputContent}
                        onChangeText={text => onChangeID(text)}
                        value={IDText}
                        placeholder="身分證字號"
                        secureTextEntry={!showPassword3}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword3}>
                        {geticon(showPassword3 ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>

                <View style={styles.input}>
                    <TextInput
                        style={styles.inputContent}
                        onChangeText={text => onChangeAccount(text)}
                        value={AccountText}
                        placeholder="使用者代號"
                        secureTextEntry={!showPassword2}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword2}>
                        {geticon(showPassword2 ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputContent}
                        onChangeText={text => onChangePassword(text)}
                        value={passwordText}
                        placeholder="密碼"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword}>
                        {geticon(showPassword ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>
                <View style={{ width: '55%', marginLeft: 0, flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
                    <CheckBox
                        style={{ flex: 1, marginRight: 30, }}
                        onClick={() => setIsChecked(!isChecked)}
                        isChecked={isChecked}
                        text={"CheckBox"}
                        checkedCheckBoxColor='#244172'
                        uncheckedCheckBoxColor='#244172'
                    />
                    <Text style={{ color: '#244172' }}>記住身分證字號</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                    <TextInput
                        style={{
                            width: '43%',
                            height: 40,
                            padding: 10,
                            backgroundColor: '#fff',
                            marginRight: 15,
                            borderRadius: 8,
                        }}
                        onChangeText={text => onChangeVerification(text)}
                        value={VerificaitonText}
                        placeholder="驗證碼"
                    />
                    <Image
                        style={{ width: '40%', height: 31, backgroundColor: '#fff', marginRight: 5, }}
                        source={getverifyPic(verifynum)} // 使用 imageSource 變數
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={{ width: '3%', height: '40%' }} onPress={() => { incrementVerifynum() }}>
                        {geticon("Refresh")}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        console.log("SetShowAlert is", showAlert)
                        if (String(VerificaitonText) !== String(ActionSheetVernum[verifynum - 1].num)) {
                            setShowAlert(true);
                            return; // 終止函數的執行
                        }
                        navigation.navigate('HomeDrawer');
                        handleLogin();
                        onChangeAccount('');
                        onChangePassword('');
                        onChangeID('');
                        onChangeVerification('');
                        setShowAlert(false);
                    }}>
                    <Text style={{ position: 'absolute', bottom: -90, left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: 16, justifyContent: 'center' }}>
                        登入
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 10,
                fontSize: 18,
                color: '#244172',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text>還沒有帳戶嗎？</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#244172', fontWeight: 'bold', marginLeft: 3 }}>我要開戶</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 50, width: '50%', marginTop: 50, alignItems: 'center' }}>
                {geticon("FingerPrint")}
            </View>
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
    logo: {
        aspectRatio: 1,
    },
    userSection: {
        marginTop: 40,
        padding: 30,
        width: itemWidth,
        height: 425,
        borderRadius: 15,
        backgroundColor: '#E3E3E3',
        justifyContent: 'flex-start',
        borderBottomWidth: 50,
        borderBottomColor: '#244172',
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#244172',
    },
    inputContent: {
        width: '90%',
        height: '155%',
    },
    visible: {
        marginRight: 150,
    },
});

export default LoginScreen;