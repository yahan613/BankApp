import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import { geticon } from '../component/img/getIcon';
import { EXCHANGE_DATA } from '../component/Exchange/ExchangeData';
import { getNewsPic } from '../component/img/getnews';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

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
    /*useFocusEffect(
        React.useCallback(() => {
            // 在这里执行您的监听逻辑
            console.log('HomeScreen 获得焦点');
            // 更新 HeaderFlag 动作设置为 1
        }, []) // 请确保在依赖项中包含 dispatch
    );*/
    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
          console.log('EXIT');
        });
        return unsubscribe;
      }, []);
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
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Transfer')}
                    >
                        <View>
                            {geticon("Transfer")}
                        </View>
                        <Text>
                            轉帳
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Transfer')}
                    >
                        <View>
                            {geticon("Withdraw")}
                        </View>
                        <Text>
                            提款
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.functionbox}
                        onPress={() => navigation.navigate('Withdraw')}
                    >
                        <View>
                            {geticon("Bill")}
                        </View>
                        <Text>
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
                        <Text>
                            外幣
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 5, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
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
                        <Text style={styles.numtext}>{!showdeposit ? numberWithCommas(money.TWD) : '*******'}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.moneyBox}>
                        <Text style={styles.text}>外幣總額：</Text>
                        <Text style={styles.numtext}>{!showdeposit ? numberWithCommas(money.FOR) : '*******'}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 5, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
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
                            <View style={{ height: '100%', width: 5, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                            <Text style={styles.labelText}>
                                匯率
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <FlatList
                        data={EXCHANGE_DATA}
                        numColumns={4}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 5, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
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
        backgroundColor: '#D9D9D9'
    },
    header: {
        width: '100%',
        height: 130,
        backgroundColor: '#244172',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10,
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
        height: 1500,
        marginTop: 40,
        alignItems: 'center',
        alignSelf: 'center',
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',

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
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
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
        height: 3,
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
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
    },
    newsImg: {
        width: '40%',
        height: '70%',
        borderRadius: 4,
        marginRight: 15,
    },
    newsText: {
        fontSize: 16,
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