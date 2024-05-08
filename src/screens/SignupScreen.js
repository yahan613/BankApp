import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { geticon } from '../component/img/getIcon';
import { useNavigation } from '@react-navigation/native';
import Step1 from '../component/Signup/step1';
import Step2 from '../component/Signup/step2';
import Step3 from '../component/Signup/step3';
import Step4 from '../component/Signup/step4';
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

    const [stepPage, setStepPage] = useState(1);
    useEffect(() => {
    }, [stepPage]);

    //進度條
    const prog1 = useRef(new Animated.Value(0)).current;
    const prog2 = useRef(new Animated.Value(0)).current;
    const prog3 = useRef(new Animated.Value(0)).current;

    const start1 = () => {
        Animated.timing(prog1, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }
    const start2 = () => {
        Animated.timing(prog2, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }
    const start3 = () => {
        Animated.timing(prog3, {
            toValue: 131,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.header}>
                <Text style={{ color: '#fff', fontSize: 20 }}>開戶註冊</Text>
            </View>
            <View style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '80%', height: 30, flexDirection: 'row', alignItems: 'center', marginTop: -100 }}>
                    {stepPage < 4 ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#929191', marginRight: 5 }}>註冊</Text>
                            <View style={{ backgroundColor: '#929191', width: 2, height: 17 }}></View>
                            <Text style={{ color: '#929191', marginLeft: 5 }}>第{stepPage}步，共3步</Text>
                        </View>
                    ) : (
                        <Text style={{ color: '#929191', marginLeft: 5 }}>註冊成功！</Text>
                    )}
                    <Text></Text>
                    <Text></Text>
                </View>

                <View style={styles.stepbar}>
                    <Animated.View style={{
                        width: prog1,
                        height: 10,
                        flexDirection: 'row',
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: (stepPage === 2 ? 10 : 0),
                        borderTopRightRadius: (stepPage === 2 ? 10 : 0),
                        backgroundColor: '#5C94F3',
                        marginBottom: 30,
                    }}></Animated.View>
                    <Animated.View style={{
                        width: prog2,
                        height: 10,
                        flexDirection: 'row',
                        borderBottomRightRadius: (stepPage === 3 ? 10 : 0),
                        borderTopRightRadius: (stepPage === 3 ? 10 : 0),
                        backgroundColor: '#5C94F3',
                        marginBottom: 30,
                    }}></Animated.View>
                    <Animated.View style={{
                        width: prog3,
                        height: 10,
                        flexDirection: 'row',
                        borderBottomRightRadius: (stepPage === 4 ? 10 : 0),
                        borderTopRightRadius: (stepPage === 4 ? 10 : 0),
                        backgroundColor: '#5C94F3',
                        marginBottom: 30,
                    }}></Animated.View>
                </View>
                <View style={styles.userSection}>
                    <View style={{ flex: 1 }}>
                        {stepPage === 1 && <Step1 />}
                        {stepPage === 2 && <Step2 />}
                        {stepPage === 3 && <Step3 />}
                        {stepPage === 4 && <Step4 />}
                    </View>
                    <View style={{ width: itemWidth, position: 'absolute', bottom: 10, padding: 15 }}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 50, justifyContent: 'space-around', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#fff', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                                onPress={() => {
                                    navigation.goBack();
                                    setStepPage(1);
                                }}
                            >
                                {stepPage < 4 ? 
                                    <Text style={{ color: '#244172', textAlign: 'center' }}> 取消 </Text>
                                    : <Text style={{ color: '#244172', textAlign: 'center' }}>{' '} </Text>
                                }

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ backgroundColor: '#244172', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                                onPress={() => {
                                    setStepPage(prevStepPage => {
                                        const newStepPage = prevStepPage + 1;
                                        if (newStepPage === 2) {
                                            start1()
                                        }
                                        if (newStepPage === 3) {
                                            start2()
                                        }
                                        if (newStepPage === 4) {
                                            start3()
                                        }
                                        if (newStepPage === 5) {
                                            navigation.goBack();
                                            setShowAlert(true)
                                            return 1; // Reset stepPage to 1
                                        }
                                        return newStepPage;
                                    });
                                }}
                            >   
                            {stepPage < 4 ? 
                                <Text style={{ color: '#fff', textAlign: 'center' }}>繼續</Text>:<Text style={{ color: '#fff', textAlign: 'center' }}>完成</Text>
                            }
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
    stepbar: {
        width: '80%',
        height: 10,
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 30,
        flexDirection: 'row',
    },
    stepbystepbar1: {
        width: '30%',
        height: 10,
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: stepPage === 1 ? 10 : 'default',
        borderTopRightRadius: stepPage === 1 ? 10 : 'default',
        backgroundColor: stepPage === 1 ? 'red' : 'blue',
        marginBottom: 30,
    },
    stepbystepbar2: {
        width: '60%',
        height: 10,
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'brown',
        marginBottom: 30,
    },
    stepbystepbar3: {
        width: '90%',
        height: 10,
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'green',
        marginBottom: 30,
    },
    userSection: {
        alignSelf: 'center',
        padding: 30,
        width: itemWidth,
        height: 600,
        borderRadius: 15,
        backgroundColor: '#fff',
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
});
export default Signup;