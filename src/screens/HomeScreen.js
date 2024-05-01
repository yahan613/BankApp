import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button } from 'react-native'
import { geticon } from '../component/img/getIcon';
import { getNewsPic } from '../component/img/getnews';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Store/Redux_Function';
import { Platform } from 'react-native';
import { lightThemeColors, darkThemeColors } from '../component/Colors';


let EXCHANGE_DATA = [
    { id: '1', value: 'USA', width: '20%' },
    { id: '2', value: '美金', width: '7%' },
    { id: '3', value: 'Buyin', width: '20%' },
    { id: '4', value: 'sellout', width: '30%' },
    { id: '5', value: 'Japan', width: '20%' },
    { id: '6', value: '日幣', width: '7%' },
    { id: '7', value: 'Buyin', width: '20%' },
    { id: '8', value: 'sellout', width: '30%' },
    { id: '9', value: 'China', width: '20%' },
    { id: '10', value: '人民幣', width: '7%' },
    { id: '11', value: 'Buyin', width: '20%' },
    { id: '12', value: 'sellout', width: '30%' },
    { id: '13', value: 'Europe', width: '20%' },
    { id: '14', value: '歐元', width: '7%' },
    { id: '15', value: 'Buyin', width: '20%' },
    { id: '16', value: 'sellout', width: '30%' },
    { id: '17', value: 'HongKong', width: '20%' },
    { id: '18', value: '港幣', width: '7%' },
    { id: '19', value: 'Buyin', width: '20%' },
    { id: '20', value: 'sellout', width: '30%' },
];
//三個數字中間要逗號
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

let money = {
    TWD: 9999999,
    FOR: 1000000,
    Credit: 23000,
    CreditCoda: 300000,
    CreditofTheMonth: 40000,
}

const HomeScreen = ({ navigation }) => {
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
    /*const FORtransactionAction = () => {
        dispatch({ type: 'SET_FOR_TR', payload: { money: 0 } });
    };
    const TWDtransactionAction = () => {
        dispatch({ type: 'SET_TWD_TR', payload: { money: 0 } });
    };
    FORtransactionAction();
    TWDtransactionAction();*/
    const balance = useSelector(state => state.trade.balance);
    

    useFocusEffect(
        React.useCallback(() => {
            HeaderFlagAction(1);//HomeHeader!!!!
            return () => {
                HeaderFlagAction(0);//NoHeader!!!!
            };
        }, [])
    );

    const [showdeposit, setShowdeposit] = React.useState(false);
    const toggleShowdeposit = () => {
        setShowdeposit(!showdeposit);
    };
    const [showcredit, setShowcredit] = React.useState(false);
    const toggleShowcredit = () => {
        setShowcredit(!showcredit);
    };
    const renderItem = ({ item, index }) => (
        <View style={styles.cell}>
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
        </View>
    );

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
    const colors = theme === 'light' ? lightThemeColors : darkThemeColors;

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Transfer')}
                    >
                        <View>
                            {geticon("Transfer")}
                        </View>
                        <Text style={{fontSize:12}}>
                            轉帳
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Withdraw')}
                    >
                        <View>
                            {geticon("Withdraw")}
                        </View>
                        <Text style={{fontSize:12}}>
                            提款
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Payment')}
                    >
                        <View>
                            {geticon("Bill")}
                        </View>
                        <Text style={{fontSize:12}}>
                            繳費
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Exchange')}
                    >
                        <View>
                            {geticon("Foreign_currency")}
                        </View>
                        <Text style={{fontSize:12}}>
                            外幣
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <Button title="Toggle Theme" onPress={toggleTheme} />
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
                            <Text style={styles.labelText}>
                                存款
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 10, }} onPress={toggleShowdeposit}>
                                {geticon(showdeposit ? "Noeye" : "Eye")}
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.moneyBox}>
                        <Text style={styles.text}>臺幣總額：</Text>
                        <Text style={styles.numtext}>{!showdeposit ? numberWithCommas(balance.twd) : '*******'}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.moneyBox}>
                        <Text style={styles.text}>外幣總額：</Text>
                        <Text style={styles.numtext}>{!showdeposit ? numberWithCommas(balance.for) : '*******'}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
                            <Text style={styles.labelText}>
                                信用卡
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 10, }} onPress={toggleShowcredit}>
                                {geticon(showcredit ? "Noeye" : "Eye")}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.moneyBox}>
                        <Text style={styles.text}>刷卡明細：</Text>
                        <Text style={styles.numtext}>{!showcredit ? numberWithCommas(money.Credit) : '*****'}</Text>
                    </View>
                    <Text style={{ textAlign: 'right', color: '#5C94F3', marginBottom: 3, marginTop: 3, }}>可用餘額：{numberWithCommas(money.CreditCoda - money.Credit)}</Text>
                    <Text style={{ textAlign: 'right', color: '#5C94F3', marginBottom: 3 }}>本期應繳：{numberWithCommas(money.CreditofTheMonth)}</Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
                            <Text style={styles.labelText}>
                                匯率
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, paddingRight: 30, }}>
                        <Text style={{ color: '#244172', fontSize: 16, marginRight: 70, }}>幣別</Text>
                        <Text style={{ color: '#244172', fontSize: 16, }}>本行買進</Text>
                        <Text style={{ color: '#244172', fontSize: 16, marginRight: -15 }}>本行賣出</Text>
                    </View>
                    <FlatList
                        data={EXCHANGE_DATA}
                        numColumns={4}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <Text style={{ color: '#5C94F3', fontSize: 14, alignSelf: 'flex-end', marginRight: 20, marginTop: 10, }}>最後更新日期：{year}-{month < 10 ? '0' + month : month}-{day < 10 ? '0' + day : day}</Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
                            <Text style={styles.labelText}>
                                巴菲特報報
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={getNewsPic('news1')}
                                style={styles.newsImg}
                            />
                            <Text style={styles.newsText}>巴菲特銀行和LINE Pay信用卡合作，消費最高贈7%點數</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={getNewsPic('news2')}
                                style={styles.newsImg}
                            />
                            <Text style={styles.newsText}>強勢登場！巴菲特集團新推吃到飽品牌 「Buffet Restaurant」</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%', height: 120, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={getNewsPic('news3')}
                                style={styles.newsImg}
                            />
                            <Text style={styles.newsText}>巴菲特銀行3月大賺168億元！第1季每股盈餘2.57元創歷史次高</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
                height: 1580,
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