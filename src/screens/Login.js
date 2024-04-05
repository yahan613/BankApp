import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
import { geticon } from '../component/img/getIcon';
import CheckBox from 'react-native-check-box';
import { getverifyPic } from '../component/img/getVerifyPic';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const LoginScreen = ({ navigation }) => {
    const [AccountText, onChangeAccount] = React.useState(''); //輸入帳號
    const [passwordText, onChangePassword] = React.useState(''); //輸入密碼
    const [VerificaitonText, onChangeVerification] = React.useState(''); 
    const [isChecked, setIsChecked] = React.useState(false);
    //驗證碼圖片生成
    const [lastVerifynum, setLastVerifynum] = React.useState(null);
    const [verifynum, setVerifynum] = React.useState(null);
    const getRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        while (randomNumber === lastVerifynum) {
            randomNumber = Math.floor(Math.random() * 5) + 1;
        }
        return randomNumber;
    };

    const incrementVerifynum = ({navigation}) => {
        console.log(navigation)
        const newVerifynum = getRandomNumber();
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
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', borderLeftColor: '#244172', borderLeftWidth: 5, paddingLeft: 15, marginBottom: 20, }}>
                    歡迎，請登入
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeAccount(text)}
                    value={AccountText}
                    placeholder="使用者代號"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangePassword(text)}
                    value={passwordText}
                    placeholder="密碼"
                />
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
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                    <TextInput
                        style={{
                            width: '43%',
                            height: 40,
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: '#fff',
                            borderColor: '#244172',
                            marginRight: 15,
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
                <TouchableOpacity onPress={() => navigation.navigate('HomeDrawer')}>
                    <Text style={{ position: 'absolute', bottom: -70, left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: 16, justifyContent:'center' }}>
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
                    <Text style={{color: '#244172', fontWeight:'bold', marginLeft: 3,}}>我要開戶</Text>
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
        height: '100%',
        aspectRatio: 1,
        backgroundColor: '#fff',
    },
    userSection: {
        marginTop: 70,
        padding: 30,
        width: itemWidth,
        height: 370,
        borderRadius: 10,
        backgroundColor: '#E3E3E3',
        justifyContent: 'flex-start',
        borderBottomWidth: 50, 
        borderBottomColor: '#244172', 
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#244172',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#244172',
    }

});

export default LoginScreen;