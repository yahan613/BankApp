import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { geticon } from '../component/img/getIcon';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.functionbox}>
                        <View>
                            {geticon("Transfer")}
                        </View>
                        <Text>
                            轉帳
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionbox}>
                        <View>
                            {geticon("Withdraw")}
                        </View>
                        <Text>
                            提款
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionbox}>
                        <View>
                            {geticon("Bill")}
                        </View>
                        <Text>
                            繳費
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionbox}>
                        <View>
                            {geticon("Foreign_currency")}
                        </View>
                        <Text>
                            外幣
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>
                            存款
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    <View>
                        <Text style={styles.text}>臺幣總額：</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.moneybox}>
                        <Text style={styles.text}>外幣總額：</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>
                            信用卡
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    <View>
                        <Text style={styles.text}>消費明細：</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>
                            匯率
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    
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
        height: 500,
        marginTop: 40,
        alignItems: 'center',
        alignSelf: 'center',
    },
    label: {
        fontSize: 20,
        color: '#244172',
    },
    labelContainer: {
        marginBottom: 10,
        borderLeftColor: '#244172',
        borderLeftWidth: 3,
        paddingLeft: 10,
        flexDirection: 'row',
    }, 
    text: {
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
    },
    line:{
        margin: 5,
        width: 400,
        height: 3,
        marginLeft: -50,
        backgroundColor: '#D9D9D9'
    },
    moneybox: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default HomeScreen