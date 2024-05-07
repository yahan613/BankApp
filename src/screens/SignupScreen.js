import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { geticon } from '../component/img/getIcon';
import { useNavigation } from '@react-navigation/native';
import Step1 from '../component/Signup/step1';
import AwesomeAlert from 'react-native-awesome-alerts';





const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

let stepPage = 1;


const Signup = ({ navigation }) => {

    const [bankaccount, setbankaccount] = useState(true);

    const [VISAnuminput, setVISAnuminput] = useState('');//金融卡或VISA金融卡號碼
    const [VISAissinput, setVISAissinput] = useState('');//金融卡發行號碼
    const [VISApininput, setVISApininput] = useState('');//金融卡辭路密碼

    const [bankaccnuminput, setbankaccnuminput] = useState('');//銀行帳戶號碼
    const [bankpininput, setbankpininput] = useState('');//電話理財PIN碼
    const [showAlert, setShowAlert] = React.useState(false);

    //Awesome
    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.header}>
                <Text style={{ color: '#fff', fontSize: 20 }}>開戶註冊</Text>
            </View>
            <AwesomeAlert
                    show={showAlert}
                    title="驗證碼輸入錯誤"
                    message="請重新輸入"
                    showConfirmButton={true}
                    confirmText="重試"
                    confirmButtonColor="#5C94F3"
                    onConfirmPressed={handleCloseAlert}
                />
            <View style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', justifyContent: 'center', }}>
                <View style={styles.userSection}>
                    <View style={{ flex: 1, }}>
                        <Step1/>
                    </View>
                    <View style={{ width: itemWidth, position: 'absolute', bottom: 10, padding: 15 }}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 50, justifyContent: 'space-around', alignItems: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#E3E3E3', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }} onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#244172', textAlign: 'center' }}>取消</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ backgroundColor: '#244172', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                                onPress={() => {
                                    stepPage += 1;
                                    console.log(stepPage);
                                    if (stepPage === 4) {
                                        showAlert = true;
                                        console.log(showAlert)
                                        navigation.goBack();
                                        stepPage = 1;
                                    }
                                }}
                            >
                                <Text style={{ color: '#fff', textAlign: 'center' }}>繼續</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
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
        backgroundColor: '#E3E3E3',
        position: 'absolute',
    },
});
export default Signup;