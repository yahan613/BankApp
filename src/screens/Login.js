import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { geticon } from '../component/img/getIcon';
import CheckBox from 'react-native-check-box';
import { getverifyPic } from '../component/img/getVerifyPic';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction, logoutAction } from '../Store/userAction';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const LoginScreen = ({ navigation }) => {
    //Login Action
    const isSignedIn = useSelector(state => state.userData.isSignedIn)
    const dispatch = useDispatch()

    const [AccountText, onChangeAccount] = React.useState(''); //輸入帳號
    const [passwordText, onChangePassword] = React.useState(''); //輸入密碼
    const [IDText, onChangeID] = React.useState(''); //輸入密碼
    const [VerificaitonText, onChangeVerification] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);
    //驗證碼圖片生成
    const [lastVerifynum, setLastVerifynum] = React.useState(null);
    const [verifynum, setVerifynum] = React.useState(null);
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
        const newVerifynum = (verifynum + 1) % 5 === 0 ? 1 : verifynum + 1;
        setLastVerifynum(verifynum);
        setVerifynum(newVerifynum);
    };
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 200, backgroundColor: '#244172', justifyContent: 'center', alignItems: 'center' }}>
                {/*Header of Login Screens*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 70, justifyContent: 'center' }}>
                    <View style={styles.logo} />
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10, }}>
                        {/*Container of Bank Logo*/}
                        <Text style={{ fontSize: 40, color: '#fff', fontWeight: 'bold' }}>BBank</Text>
                        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>XXX銀行</Text>
                    </View>
                </View>
            </View>
            <View style={styles.userSection}>
                <View style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ height: '100%', width: 5, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                    <Text style ={{ fontSize: 20, fontWeight: 'bold', color: '#244172', }}>
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
                <View style={{ width: '55%', marginLeft: 0, flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
                    <CheckBox
                        style={{ flex: 1, marginRight: 30, }}
                        onClick={() => setIsChecked(!isChecked)}
                        isChecked={isChecked}
                        text={"CheckBox"}
                        checkedCheckBoxColor='#244172'
                        uncheckedCheckBoxColor='#244172'
                    />
                    <Text style={styles.text}>記住身分證字號</Text>
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
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                    <TextInput
                        style={{
                            width: '43%',
                            height: 40,
                            padding: 10,
                            backgroundColor: '#fff',
                            marginRight: 15,
                            borderRadius: 9,
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
                    <TouchableOpacity style={{ width: '3%', height: '40%' }} onPress={incrementVerifynum}>
                        {geticon("Refresh")}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('HomeDrawer');
                        dispatch(loginAction());
                    }}>
                    <Text style={{ position: 'absolute', bottom: -70, left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: 16, justifyContent: 'center' }}>
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
                <TouchableOpacity >
                    <Text style={{ color: '#244172', fontWeight: 'bold', marginLeft: 3, }}>我要開戶</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 50, width: '50%', marginTop: 50, alignItems: 'center' }}>
                {geticon("FingerPrint")}
            </View>
            <Text>Sign in status: {isSignedIn ? 'yes': 'no'}</Text>
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
        height: '100%',
        aspectRatio: 1,
        backgroundColor: '#fff',
    },
    userSection: {
        marginTop: 70,
        padding: 30,
        width: itemWidth,
        height: 430,
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
        marginBottom: 20,
        borderRadius: 9,
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