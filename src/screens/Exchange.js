import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const currencyItems  = [
  { label: "新台幣", value: "新台幣" },
  { label: "美元", value: "美元" },
  { label: "日幣", value: "日幣" },
];
const discountItems  = [
  { label: "一般優惠", value: "一般優惠" },
  { label: "VIP優惠?", value: "VIP優惠?" },
];
const accountItems  = [
  { label: "活期儲蓄存款  0081234567890", value: "活期儲蓄存款  0081234567890" },
  { label: "外匯存款  0081234567891", value: "外匯存款  0081234567891" },
];

const ExchangeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', justifyContent: 'center', alignItems: 'center' }}>
          {/*Header of Exchange Screen*/}
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, marginTop: 20}}>外幣</Text>
          </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.box}>
              <View style={styles.labelContainer}>
                  <Text style={styles.label}>
                      外幣兌換
                  </Text>
              </View>
              <View style={styles.line}/>
              
                <RNPickerSelect
                  placeholder={{ label: "請選擇幣別", value: "", color: "#000" }}
                  items={currencyItems} 
                  value="新台幣"
                  onValueChange={(value) => console.log(value)}
                  style={styles.picker}
                />
               
                <RNPickerSelect
                  placeholder={{ label: "請選擇幣別", value: "", color: "#000" }}
                  items={currencyItems} 
                  value="美元"
                  onValueChange={(value) => console.log(value)}
                  style={styles.picker}
                />
                
              <View style={styles.pickerSection}>
                <TextInput
                    style={{
                          width: '40%',
                          height: 40,
                          borderWidth: 1,
                          padding: 10,
                          backgroundColor: '#fff',
                          borderColor: '#244172',
                    }}
                    placeholder="請輸入金額"
                />
                <Image source={require('../component/img/sync_alt.png')} style={{marginTop: 5}}/>
                <TextInput
                    style={{
                          width: '40%',
                          height: 40,
                          borderWidth: 1,
                          padding: 10,
                          backgroundColor: '#fff',
                          borderColor: '#244172',
                    }}
                    placeholder="請輸入金額"
                />
              </View>
              <Text style={{color: '#929191', textAlign: 'center', margin: 10}}>實際匯率以交易完成時間為準</Text>
              <View style={styles.line}/>
              <View style={styles.labelContainer}>
                  <Text style={styles.label}>
                      匯率優惠
                  </Text>
              </View>
              <RNPickerSelect
                  placeholder={{ label: "", value: "", color: "#000" }}
                  items={discountItems} 
                  value="一般優惠"
                  onValueChange={(value) => console.log(value)}
                />
              <View style={styles.line}/>
              <View style={styles.labelContainer}>
                  <Text style={styles.label}>
                      轉出帳號
                  </Text>
              </View>
              <RNPickerSelect
                  placeholder={{ label: "", value: "", color: "#000" }}
                  items={accountItems} 
                  value="活期儲蓄存款  0081234567890"
                  onValueChange={(value) => console.log(value)}
                />
              <View style={styles.labelContainer}>
                  <Text style={styles.label}>
                      轉入帳號
                  </Text>
              </View>
              <RNPickerSelect
                  placeholder={{ label: "", value: "", color: "#000" }}
                  items={accountItems} 
                  value="外匯存款  0081234567891"
                  onValueChange={(value) => console.log(value)}
                />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
              <Text style={{ left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: 18, justifyContent:'center'}}>
                  確認
              </Text>
          </TouchableOpacity>
      </ScrollView>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
  },
  scrollViewContent: {
    width: '85%',
    height: 750,
    marginTop: 40,
    alignItems: 'center',
    alignSelf: 'center',
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
  fontSize: 20,
  color: '#244172',
},
labelContainer: {
  borderLeftColor: '#244172',
  borderLeftWidth: 3,
  paddingLeft: 10,
  flexDirection: 'row',
},
 input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#244172',
    marginBottom: 20,
},
text: {
    fontSize: 18,
    color: '#244172',
},
line:{
  margin: 10,
  width: 400,
  marginLeft: -50,
  marginRight: -50,
  height: 1,
  backgroundColor: '#D9D9D9',
},
pickerSection:{
  flexDirection: 'row',
  justifyContent: 'space-between'
},
picker:{
  inputIOS: {width: '50%'},
  inputAndroid: {width: '50%'},
},
button: {
  width: 340,
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
  flexDirection: 'column',
  backgroundColor: '#244172' 
}
});

export default ExchangeScreen;