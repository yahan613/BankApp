import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { geticon } from '../component/img/getIcon';
import { EXCHANGE_DATA } from '../component/Exchange/ExchangeData';
import { getBTicon } from '../component/img/getBTIcon';

const HomeScreen = ({ navigation }) => {
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
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View>
                        <Text style={styles.text}>臺幣總額：</Text>
                    </View>
                    <View style={styles.line} />
                    <View>
                        <Text style={styles.text}>外幣總額：</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <View style={styles.label}>
                            <View style={{ height: '100%', width: 5, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                            <Text style={styles.labelText}>
                                信用卡
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View>
                        <Text style={styles.text}>消費明細：</Text>
                    </View>
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
        height: 900,
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
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen