import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import RNPickerSelect from "react-native-picker-select";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Withdraw = ({navigation}) => {
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

  const showAlert = () => {
    Alert.alert(
      "轉帳成功",
      `成功轉帳 ${MoneyText} 元`,
      [
        {
          text: "完成", onPress: () => {
            // Navigate back to HomeScreen upon confirmation
            navigation.navigate('HomeScreen');
          },
        }
      ],
      { cancelable: false }
    );
  }
  const callTrade = (v, m) => {
    switch (v) {
      case 'SFOR':
        FORtransactionAction(m);
        break;
      case 'STWD':
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
        {/*Header of Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>提款</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
              <Text style={styles.labelText}>
                提款帳號
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.selectBox}>
              <RNPickerSelect
                style={styles.select}
                placeholder={{
                  label: '請選擇',
                  value: null,
                }}
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: '活期儲蓄存款  0081234567890', value: 'STWD' },
                  { label: "外匯存款  0081234567891", value: 'SFOR' },
                ]}
              />
              <View style={{ width: 100, right: 200 }}>{geticon('scan')}</View>
          </View>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
              <Text style={styles.labelText}>
                提款金額
              </Text>
            </View>
          </View>
          <View style={styles.selectBox}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.select2}
                onChangeText={text => onChangeMoney(text)}
                value={MoneyText}
                keyboardType="numeric"
              />
            </View>
          </View>
          {/* 2000 3000 5000 */}
          <View>
              
          </View>

          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
              <Text style={styles.labelText}>
                無卡提款密碼
              </Text>
            </View>
          </View>
          <View style={styles.selectBox}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.select2}
                onChangeText={text => onChangeMoney(text)}
                value={MoneyText}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7 }}></View>
              <Text style={styles.labelText}>
                再次確認密碼
              </Text>
            </View>
          </View>
          <View style={styles.selectBox}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.select2}
                onChangeText={text => onChangeMoney(text)}
                value={MoneyText}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            callTrade(selectedValue, MoneyText)
            showAlert();
          }}>
          <Text style={styles.buttonText}>確認</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9'
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#244172',
  },
  scrollViewContent: {
    width: 320,
    height: 900,
    marginTop: 20,
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
      paddingRight: 30,
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
    borderBottomWidth: 1, 
    borderColor: '#D9D9D9',
    color: 'black',
    paddingRight: 30,
    width: 270,
    marginBottom: 5,
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
});
export default Withdraw