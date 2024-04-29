import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import RNPickerSelect from "react-native-picker-select";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

const Withdraw = ({navigation}) => {
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState('STWD');
  const [moneyText, setMoneyText] = useState('');

  const onChangeMoney = (text) => {
    setMoneyText(text);
  };
  const setAmount = (amount) => {
    setMoneyText(amount.toString());
  };
  
  const FORtransactionAction = (money) => {
    dispatch({ type: 'SET_FOR_TR', payload: { money: money } });
  };
  const TWDtransactionAction = (money) => {
    dispatch({ type: 'SET_TWD_TR', payload: { money: money } });
  };

  const showAlert = () => {
    Alert.alert(
      "預約成功",
      `預約提款金額為 ${moneyText} 元，\n請於15分鐘內至ATM取款，超過時間需重新預約`,
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
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7, marginTop: 7 }}></View>
              <Text style={styles.labelText}>
                提款帳號
              </Text>
            </View>
          </View>
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
                value={selectedValue}
              />
              <View style={{ width: 100, right: 200 }}>{geticon('scan')}</View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7, marginTop: 7 }}></View>
              <Text style={styles.labelText}>
                預約提款金額
              </Text>
            </View>
          </View>
          <View style={styles.selectBox}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                placeholder='輸入請以千為單位'
                style={styles.select2}
                onChangeText={onChangeMoney}
                value={moneyText}
                keyboardType="numeric"
              />
            </View>
            <View style={{flexDirection:'row', padding: 8}}>
              <TouchableOpacity style={styles.btn} onPress={() => setAmount(2000)}>
                <Text style={{ fontSize: 18 }}>2000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setAmount(3000)}>
                <Text style={{ fontSize: 18 }}>3000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => setAmount(5000)}>
                <Text style={{ fontSize: 18 }}>5000</Text>
              </TouchableOpacity>
            </View>   
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7, marginTop: 7 }}></View>
              <Text style={styles.labelText}>
                無卡提款密碼
              </Text>
            </View>
          </View>
          <View style={styles.selectBox}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                placeholder='請輸入6位數字密碼'
                maxLength={6}
                style={styles.select2}
                keyboardType="numeric"
                secureTextEntry={true}
                />
            </View>
          </View>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7, marginTop: 7 }}></View>
              <Text style={styles.labelText}>
                再次確認密碼
              </Text>
            </View>
          </View>
          <View style={styles.selectBox}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                placeholder='請輸入6位數字密碼'
                maxLength={6}
                style={styles.select2}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            callTrade(selectedValue, moneyText)
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
    height: 750,
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
    marginTop: 3,
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
      marginBottom: 10
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
    width: 250,
    marginBottom: 15,
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
  btn: {
     marginRight:10, 
     borderWidth:1, 
     borderRadius:8, 
     borderColor:'#D9D9D9', 
     paddingTop: 5, 
     paddingBottom: 5, 
     paddingRight: 15, 
     paddingLeft: 15
  }
});
export default Withdraw