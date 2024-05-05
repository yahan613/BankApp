import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import RNPickerSelect from "react-native-picker-select";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Transfer = ({ navigation }) => {
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [AccountText, onChangeAccount] = React.useState(''); //輸入帳號
  const [MoneyText, onChangeMoney] = React.useState(''); //輸入金額
  const [NoteText, onChangeNote] = React.useState(''); //輸入備註
  const FORtransactionAction = (money) => {
    dispatch({ type: 'SET_FOR_TR', payload: { money: money } });
  };
  const TWDtransactionAction = (money) => {
    dispatch({ type: 'SET_TWD_TR', payload: { money: money } });
  };

  const handleConfirm = () => {
    let transactionDetails;
      transactionDetails =  transactionDetails = `轉出金額 : ${MoneyText} 元\n轉出帳號 :\n${selectedValue} \n轉入帳號 : ${selectedValue2}\n${AccountText} \n`;
      navigation.navigate('TransferConfirm', { transactionDetails });
  };

  const callTrade = (v, m) => {
    switch (v) {
      case '外匯存款  0081234567891':
        FORtransactionAction(m);
        break;
      case '活期儲蓄存款  0081234567890':
        TWDtransactionAction(m);
        break;
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground} />
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Exchange Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>轉帳</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
              <Text style={styles.labelText}>
                填寫資料
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.selectBox}>
            <Text style={styles.selectlabel}>轉出帳號</Text>
            <View style={{ width: '100%', }}>
              <RNPickerSelect
                style={styles.select}
                placeholder={{
                  label: '請選擇',
                  value: null,
                }}
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: '活期儲蓄存款  0081234567890', value: '活期儲蓄存款  0081234567890' },
                  { label: "外匯存款  0081234567891", value: '外匯存款  0081234567891' },
                ]}
              />
              <View style={{ width: 100, right: 200 }}>{geticon('scan')}</View>
            </View>
            
          </View>
          <View style={styles.selectBox}>
            <Text style={styles.selectlabel}>轉入銀行</Text>
            <View style={{ width: '100%', }}>
              <RNPickerSelect
                style={styles.select}
                placeholder={{
                  label: '請選擇',
                  value: null,
                }}
                onValueChange={(value) => setSelectedValue2(value)}
                items={[
                  { label: '(100) 巴菲特銀行', value: '(100) 巴菲特銀行' },
                  { label: "(001) 中國信託", value: '(001) 中國信託' },
                  { label: "(004) 台灣銀行", value: '(004) 台灣銀行' },
                  { label: "(005) 土地銀行", value: '(005) 土地銀行' },
                  { label: "(007) 第一銀行", value: '(007) 第一銀行' },
                  { label: "(013) 國泰世華", value: '(013) 國泰世華' },
                ]}
              />
              <View style={{ width: 100, right: 200 }}>{geticon('scan')}</View>
            </View>
          </View>
          <View style={styles.selectBox}>
            <Text style={styles.selectlabel}>轉入帳號(代碼)</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.select2}
                onChangeText={text => onChangeAccount(text)}
                value={AccountText}
              />
              <TouchableOpacity style={{ width: 100, right: 35, zIndex: 2 }}>{geticon('Transfer_Scan')}</TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{ right: 0, margin: 5, marginBottom: 0, padding: 5, width: 140, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' }}>
            <Text style={{ color: '#5C94F3' }}>選擇常用/約定</Text>
          </TouchableOpacity>
          <View style={styles.selectBox}>
            <Text style={styles.selectlabel}>轉入金額</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.select2}
                onChangeText={text => onChangeMoney(text)}
                value={MoneyText}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.selectBox}>
            <Text style={styles.selectlabel}>備註</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.note}
                onChangeText={text => onChangeNote(text)}
                value={NoteText}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            callTrade(selectedValue, MoneyText)
            handleConfirm();
          }}>
          <Text style={styles.buttonText}>確認</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#D9D9D9'
  },
  scrollViewContent: {
    width: 320,
    height: 900,
    marginTop: 20,
  },
  box: {
    width: 400,
    height: 100,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'column',
  },
  box: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'column',
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
  selectBox: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 10,
  },
  selectlabel: {
    color: '#929191',
    marginBottom: 10,
    fontSize: 16,
    marginTop: 10,
  },
  select: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 8,
      paddingHorizontal: 6,
      borderWidth: 1,
      borderColor: '#D9D9D9',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      width: 270,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
      width: '100%'
    },
  },
  select2: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 270,
    zIndex: 1
  },
  note: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 270,
    height: 100,
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#244172',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff'
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#244172',
  },
});
export default Transfer