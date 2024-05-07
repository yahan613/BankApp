import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { geticon } from '../img/getIcon';
import CheckBox from 'react-native-check-box';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

const Step3 = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
        <View>
            <View style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start', }}>
                <View style={{ height: '100%', width: 3, backgroundColor: '#244172', borderRadius: 5, marginRight: 7 }}></View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#244172', }}>
                    巴菲特行動銀行服務約定書
                </Text>
            </View>
            <View style={{ marginTop: 30, width: '100%', marginLeft: 0, flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10, backgroundColor: '#F5F5F5', padding: 7 }}>
                <CheckBox
                    style={{ width: 30 }}
                    onClick={() => setIsChecked(!isChecked)}
                    isChecked={isChecked}
                    text={"CheckBox"}
                    checkedCheckBoxColor='#244172'
                    uncheckedCheckBoxColor='#244172'
                />
                <Text style={{ color: '#1C1B1F', width: '90%', fontSize: 13, lineHeight: 20 }}>
                    本人特此聲明已充份審閱{' '}
                    <Text style={{ textDecorationLine: 'underline' }}>巴菲特個人行動銀行服務約定書</Text>
                    {' '}（審閱期間至少7天）
                    並同意其内容。
                </Text>

            </View>
            <Text style={{ marginTop: 50, fontSize: 16, marginBottom: 10, }}>對帳單及通訊內容</Text>
            <Text style={{ color: '#929191' }}>當您成功註冊行動銀行後，本行將不再郵寄紙本對帳單。您得透過本行網路銀行之「對帳單服務」或「閱讀訊息」功能，隨時下載查閱最近12個月之對帳單。
                如果您帶要變更對帳單寄送方式，可透過本行網路銀行之「閱讀和傳送訊息」功能發送訊息進行更改。</Text>
        </View>

    );
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
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 35,
        width: '100%'
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
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        width: '99%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    visible: {
        marginRight: 150,
    },
});


export default Step3;