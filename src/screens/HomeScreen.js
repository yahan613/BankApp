import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button, ActivityIndicator } from 'react-native'
import { geticon } from '../component/img/getIcon';
import { getNewsPic } from '../component/img/getnews';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Store/Redux_Function';
import { Platform } from 'react-native';
import { lightThemeColors, darkThemeColors } from '../component/Colors';
import { app, db } from '../../Firebaseinit'
import { getFirestore, collection, getDocs, doc, updateDoc, query, where } from '@firebase/firestore';
import LottieView from 'lottie-react-native';

let EXCHANGE_DATA = [
    { id: '1', value: 'USA', width: 'USD' },
    { id: '2', value: '美金', width: 'USD' },
    { id: '3', value: 'Buyin', width: 'USD' },
    { id: '4', value: 'sellout', width: 'USD' },
    { id: '5', value: 'Japan', width: 'JPY' },
    { id: '6', value: '日幣', width: 'JPY' },
    { id: '7', value: 'Buyin', width: 'JPY' },
    { id: '8', value: 'sellout', width: 'JPY' },
    { id: '9', value: 'China', width: 'RMB' },
    { id: '10', value: '人民幣', width: 'RMB' },
    { id: '11', value: 'Buyin', width: 'RMB' },
    { id: '12', value: 'sellout', width: 'RMB' },
    { id: '13', value: 'Europe', width: 'EUR' },
    { id: '14', value: '歐元', width: 'EUR' },
    { id: '15', value: 'Buyin', width: 'EUR' },
    { id: '16', value: 'sellout', width: 'EUR' },
    { id: '17', value: 'HongKong', width: 'HKD' },
    { id: '18', value: '港幣', width: 'HKD' },
    { id: '19', value: 'Buyin', width: 'HKD' },
    { id: '20', value: 'sellout', width: 'HKD' },
];


let money = {
    TWD: 9999999,
    FOR: 1000000,
    Credit: 23000,
    CreditCoda: 300000,
    CreditofTheMonth: 40000,
}

const HomeScreen = ({ navigation }) => {
    let UserData = []
    UserData = useSelector(state => state.auth.UserData);
    const dispatch = useDispatch();
    const usdRate = useSelector(state => state.rate.usdRate);
    const jpyRate = useSelector(state => state.rate.jpyRate);
    const eurRate = useSelector(state => state.rate.eurRate);
    const rmbRate = useSelector(state => state.rate.rmbRate);
    const hkdRate = useSelector(state => state.rate.hkdRate);
    EXCHANGE_DATA[2].value = usdRate;
    EXCHANGE_DATA[3].value = (usdRate * 1.02).toFixed(2);
    EXCHANGE_DATA[6].value = jpyRate;
    EXCHANGE_DATA[7].value = (jpyRate * 1.03).toFixed(2);
    EXCHANGE_DATA[10].value = rmbRate;
    EXCHANGE_DATA[11].value = (rmbRate * 1.01).toFixed(2);
    EXCHANGE_DATA[14].value = eurRate;
    EXCHANGE_DATA[15].value = (eurRate * 1.01).toFixed(2);
    EXCHANGE_DATA[18].value = hkdRate;
    EXCHANGE_DATA[19].value = (hkdRate * 1.02).toFixed(2);
    const year = useSelector(state => state.date.year);//date指的是rootReducers那邊的
    const month = useSelector(state => state.date.month);
    const day = useSelector(state => state.date.day);
    const HeaderFlagAction = (flag) => {
        dispatch({ type: 'SET_HEADER_FLAG', payload: flag });
    };

    //匯率
    const fetchData = async () => {
        const docRef1 = await updateDoc(doc(db, "Exchange", "USD"), {
            [`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`]: {
                Buyin: EXCHANGE_DATA[2].value,
                Sellout: EXCHANGE_DATA[3].value
            }
        });
        const docRef2 = await updateDoc(doc(db, "Exchange", "JPY"), {
            [`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`]: {
                Buyin: EXCHANGE_DATA[6].value,
                Sellout: EXCHANGE_DATA[7].value
            }
        });
        const docRef3 = await updateDoc(doc(db, "Exchange", "RMB"), {
            [`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`]: {
                Buyin: EXCHANGE_DATA[10].value,
                Sellout: EXCHANGE_DATA[11].value
            }
        });
        const docRef4 = await updateDoc(doc(db, "Exchange", "EUR"), {
            [`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`]: {
                Buyin: EXCHANGE_DATA[14].value,
                Sellout: EXCHANGE_DATA[15].value
            }
        });
        const docRef5 = await updateDoc(doc(db, "Exchange", "HKD"), {
            [`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`]: {
                Buyin: EXCHANGE_DATA[18].value,
                Sellout: EXCHANGE_DATA[19].value
            }
        });

    };
    fetchData();

    let [paraBalance, setParaBalance] = useState('defaultttt');
    let [paraTWD, setParaTWD] = useState('defaultttt');
    let [paraFOR, setParaFOR] = useState('defaultttt');
    let [paraCRE, setParaCRE] = useState('defaultttt');
    useFocusEffect(
        React.useCallback(() => {
            HeaderFlagAction(1);//HomeHeader!!!!
            return () => {
                HeaderFlagAction(0);//NoHeader!!!!
            };
        }, [])
    );
    const updataBalance = React.useCallback(async () => {
        //UserData = useSelector(state => state.auth.UserData);
        try {
            console.log("FIFO2")
            const ref = collection(db, "User");
            const q = query(ref, where("Name", "==", UserData.Name));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                paraBalance = data.Balance;
                setParaTWD(paraBalance.twd);
                setParaCRE(paraBalance.credit);
                setParaFOR(paraBalance.for);
            });
        } catch (err) {
            console.error("UpdateFailed:", err);
        }
    }, [UserData, navigation]);

    const [loading, setLoading] = useState(true);
    useFocusEffect(
        React.useCallback(() => {
            updataBalance();
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3500); // 3秒的加载时间
            return () => clearTimeout(timer);//不focus就重設時間
        }, [updataBalance])
    )

    //獲取當下餘額
    const numberWithCommas = (currency) => {
        switch (currency) {
            case "TWD":
                return paraTWD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            case "CRE":
                return paraCRE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            case "FOR":
                return paraFOR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            case "CREBalance":
                return (100000 - paraCRE).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            case "CREPay":
                return paraCRE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    };

    const [TWDbalance, setTWDBalance] = useState(numberWithCommas("TWD"));

    const [showdeposit, setShowdeposit] = React.useState(false);
    const toggleShowdeposit = () => {
        setShowdeposit(!showdeposit);
    };
    const [showcredit, setShowcredit] = React.useState(false);
    const toggleShowcredit = () => {
        setShowcredit(!showcredit);
    };
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.cell}
            onPress={() =>navigation.navigate('ExChart', { Country: item.width})}
        >
            {index % 4 !== 0 ? (
                <Text style={styles.cellText}>
                    {item.value}
                </Text>
            ) : (
                <View style={{ height: 45 }}>
                    <Image
                        source={geticon(item.value)}
                        style={{ flex: 1, resizeMode: 'contain', width: 45, }}
                    />
                </View>
            )}
        </TouchableOpacity>
    );

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const colors = theme === 'light' ? lightThemeColors : darkThemeColors;

    const textStyles = {
        color: colors.text,
    };
    const htextStyles = {
        color: colors.htext,
    };
    if (loading) {
        return (
            <View style={styles.loadingScreen}>
                <LottieView style={{ flex: 1, width: 200, height: 200 }} source={require('../component/img/Lottie_Animation/bank_load.json')} autoPlay loop />
            </View>
        ) // 显示白色加载画面
    }
    return (
        <View style={[styles.container, { backgroundColor: colors.bg }]}>
            <View style={[styles.header, { backgroundColor: colors.header }]}>
                <View style={[styles.headerContainer, { backgroundColor: colors.headerC }]}>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Transfer')}
                    >
                        <View>
                            <Image
                                source={geticon("Color_transfer")} style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <Text style={{ fontSize: 12, color: '#244172' }}>
                            轉帳
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => {
                            firstcome = 0;
                            let para = 'value';
                            navigation.navigate('Withdraw', { para });
                        }}
                    >
                        {/*
                        <View>
                            {geticon("Withdraw")}
                        </View>
                        */}
                        <View>
                            <Image
                                source={geticon("Color_withdraw")} style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <Text style={{ fontSize: 12, color: '#244172' }}>
                            提款
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Payment')}
                    >
                        {/*
                        <View>
                            {geticon("Bill")}
                        </View>
                        */}
                        <View>
                            <Image
                                source={geticon("Color_payment")} style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <Text style={{ fontSize: 12, color: '#244172' }}>
                            繳費
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Exchange')}
                    >
                        {/* 
                        <View>
                            {geticon("Foreign_currency")}
                        </View>
                        */}
                        <View>
                            <Image
                                source={geticon("Color_exchange")} style={{ width: 25, height: 25 }}
                            />
                        </View>
                        <Text style={{ fontSize: 12, color: '#244172' }}>
                            外幣
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.box, { backgroundColor: colors.box }]}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={[{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }, { backgroundColor: colors.htext }]}></View>
                            <Text style={[styles.labelText, htextStyles]}>
                                存款
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 10, }} onPress={toggleShowdeposit}>
                                {geticon(showdeposit ? "Noeye" : "Eye")}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.line, { backgroundColor: colors.bg }]} />
                    <View style={styles.moneyBox}>
                        <Text style={[styles.text, textStyles]}>臺幣總額：</Text>
                        <Text style={[styles.numtext, textStyles]}>{!showdeposit ? numberWithCommas("TWD") : '*******'}</Text>
                    </View>
                    <View style={[styles.line, { backgroundColor: colors.bg }]} />
                    <View style={styles.moneyBox}>
                        <Text style={[styles.text, textStyles]}>外幣總額：</Text>
                        <Text style={[styles.numtext, textStyles]}>{!showdeposit ? numberWithCommas("FOR") : '*******'}</Text>
                    </View>
                </View>
                <View style={[styles.box, { backgroundColor: colors.box }]}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={[{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }, { backgroundColor: colors.htext }]}></View>
                            <Text style={[styles.labelText, htextStyles]}>
                                信用卡
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 10, }} onPress={toggleShowcredit}>
                                {geticon(showcredit ? "Noeye" : "Eye")}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.line, { backgroundColor: colors.bg }]} />
                    <View style={styles.moneyBox}>
                        <Text style={[styles.text, textStyles]}>刷卡明細：</Text>
                        <Text style={[styles.numtext, textStyles]}>{!showcredit ? numberWithCommas("CRE") : '*****'}</Text>
                    </View>
                    <Text style={{ textAlign: 'right', color: '#5C94F3', marginBottom: 3, marginTop: 3, }}>可用餘額：{numberWithCommas("CREBalance")}</Text>
                    <Text style={{ textAlign: 'right', color: '#5C94F3', marginBottom: 3 }}>本期應繳：{numberWithCommas("CREPay")}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: colors.box }]}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={[{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }, { backgroundColor: colors.htext }]}></View>
                            <Text style={[styles.labelText, htextStyles]}>
                                匯率
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.line, { backgroundColor: colors.bg }]} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, paddingRight: 30, }}>
                        <Text style={[{ color: '#244172', fontSize: 16, marginRight: 70, }, textStyles]}>幣別</Text>
                        <Text style={[{ color: '#244172', fontSize: 16, }, textStyles]}>本行買進</Text>
                        <Text style={[{ color: '#244172', fontSize: 16, marginRight: -15 }, textStyles]}>本行賣出</Text>
                    </View>
                    <FlatList
                        data={EXCHANGE_DATA}
                        numColumns={4}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <Text style={{ color: '#5C94F3', fontSize: 14, alignSelf: 'flex-end', marginRight: 20, marginTop: 10, }}>最後更新日期：{year}-{month < 10 ? '0' + month : month}-{day < 10 ? '0' + day : day}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: colors.box }]}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={[{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }, { backgroundColor: colors.htext }]}></View>
                            <Text style={[styles.labelText, htextStyles]}>
                                巴菲特報報
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.line, { backgroundColor: colors.bg }]} />
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={getNewsPic('news1')}
                                style={styles.newsImg}
                            />
                            <Text style={[styles.newsText, textStyles]}>巴菲特銀行和LINE Pay信用卡合作，消費最高贈7%點數</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={getNewsPic('news2')}
                                style={styles.newsImg}
                            />
                            <Text style={[styles.newsText, textStyles]}>強勢登場！巴菲特集團新推吃到飽品牌 「Buffet Restaurant」</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={getNewsPic('news3')}
                                style={styles.newsImg}
                            />
                            <Text style={[styles.newsText, textStyles]}>巴菲特銀行3月大賺168億元！第1季每股盈餘2.57元創歷史次高</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Button title="Toggle Theme" onPress={toggleTheme} /> */}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        backgroundColor: '#fff', // 白色背景
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    header: {
        width: '100%',
        height: 130,
        backgroundColor: '#244172',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -8,
    },
    headerContainer: {
        flexDirection: 'row',
        width: '85%',
        height: '70%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    functionbox: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-around',
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
    },
    box: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'column',
    },
    scrollViewContent: {
        width: '85%',
        ...Platform.select({
            ios: {
                height: 1650,
            },
            android: {
                height: 1500,
            }
        }),
        marginTop: 40,
        alignItems: 'center',
        alignSelf: 'center',
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelContainer: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    labelText: {
        fontSize: 20,
        color: '#244172',
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
        ...Platform.select({
            ios: {
                fontSize: 16,
            },
            android: {
                fontSize: 18,
            }
        }),
    },
    numtext: {
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
        letterSpacing: 1.0
    },
    line: {
        margin: 5,
        width: 400,
        height: 1,
        marginLeft: -50,
        backgroundColor: '#D9D9D9'
    },
    cell: {
        flex: 1,
        height: 50,
        height: 70,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cellText: {
        textAlign: 'left',
        fontSize: 16,
        height: '90%',
        width: '95%',
        paddingTop: '25%',
        paddingBottom: '25%',
        //backgroundColor: 'brown',
    },
    newsImg: {
        width: '40%',
        height: '70%',
        borderRadius: 4,
        marginRight: 15,
    },
    newsText: {
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
                fontSize: 16,
            }
        }),
        width: '55%'
    },
    moneyBox: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    visible: {
        height: '80%',
    }
});

export default HomeScreen