import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { geticon } from '../component/img/getIcon';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Platform } from 'react-native';


//即時換匯
const currencyItems  = [
  { label: "新台幣", value: "新台幣" },
  { label: "美元", value: "美元" },
  { label: "日幣", value: "日幣" },
  { label: "人民幣", value: "人民幣" },
  { label: "歐元", value: "歐元" },
  { label: "港幣", value: "港幣" },
];
const discountItems = [
  { label: "一般優惠", value: "一般優惠" },
  { label: "VIP優惠?", value: "VIP優惠?" },
];
const accountItems = [
  { label: "活期儲蓄存款  0081234567890", value: "活期儲蓄存款  0081234567890" },
  { label: "外匯存款  0081234567891", value: "外匯存款  0081234567891" },
];

const currencyConversionRates = {
  "新台幣": {
    "美元": 0.03099,
    "日幣": 4.7619,
    "人民幣": 0.2247,
    "歐元": 0.02909,
    "港幣": 0.2427,
    "新台幣": 1
  },
  "美元": {
    "新台幣": 32.28,
    "日幣": 109.20,
    "人民幣": 6.47,
    "歐元": 1.17,
    "港幣": 7.77,
    "美元": 1
  },
  "日幣": {
    "新台幣": 0.21,
    "美元": 0.00915,
    "人民幣": 15.15,
    "歐元": 0.0078,
    "港幣": 0.59,
    "日幣": 1
  },
  "人民幣": {
    "新台幣": 4.45,
    "美元": 0.1545,
    "日幣": 0.0659,
    "歐元": 0.1217,
    "港幣": 0.13,
    "人民幣": 1
  },
  "歐元": {
    "新台幣": 34.37,
    "美元": 0.8547,
    "日幣": 128.21,
    "人民幣": 8.2137,
    "港幣": 9.57,
    "歐元": 1
  },
  "港幣": {
    "新台幣": 4.12,
    "美元": 0.1286,
    "日幣": 1.69,
    "人民幣": 7.78,
    "歐元": 0.1045,
    "港幣": 1
  }
};

//main!!!!!
const ExchangeScreen = ({ navigation }) => {

  // useEffect hook to reset data and clear inputs when component mounts
  useEffect(() => {
    // Reset state to default values
    setSelectedSegment(0);
    setFromCurrency("新台幣");
    setToCurrency("美元");
    setFromAmount('');
    setToAmount('');
    setStartDate(new Date());
    setEndDate(new Date());
    setShowStartDatePicker(false);
    setShowEndDatePicker(false);
  }, [selectedSegment]); // Empty dependency array ensures this effect runs only once on mount

  const [selectedSegment, setSelectedSegment] = useState(0);

  const [fromCurrency, setFromCurrency] = useState("新台幣");
  const [toCurrency, setToCurrency] = useState("美元");
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [discount, setDiscount] = useState("一般優惠");
  const [fromAccount, setFromAccount] = useState("活期儲蓄存款  0081234567890");
  const [toAccount, setToAccount] = useState("外匯存款  0081234567891");


  const handleFromAmountChange = (amount) => {
    setFromAmount(amount);
    const rate = currencyConversionRates[fromCurrency][toCurrency];
    setToAmount((parseFloat(amount) * rate).toFixed(2));
  };

  const handleToAmountChange = (amount) => {
    setToAmount(amount);
    const rate = currencyConversionRates[toCurrency][fromCurrency];
    setFromAmount((parseFloat(amount) * rate).toFixed(2));
  };

  //處理及時計算換匯
  useEffect(() => {
    if (fromAmount !== '') {
      const rate = currencyConversionRates[fromCurrency][toCurrency];
      setToAmount((parseFloat(fromAmount) * rate).toFixed(2));
    }
  }, [fromCurrency, toCurrency]);

  // Function to handle the swap of currencies and amounts
  const handleSwapCurrencies = () => {
    // Swap currencies
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    // Swap amounts
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  //選擇日期
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };
  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const showStartDatepicker = () => {
    setShowStartDatePicker(true);
  };
  const showEndDatepicker = () => {
    setShowEndDatePicker(true);
  };


  const handleConfirm = () => {
    let transactionDetails;
    if (selectedSegment === 0) {
      transactionDetails =  transactionDetails = `轉出金額 : ${fromCurrency} ${fromAmount} 元\n轉入金額 : ${toCurrency} ${toAmount} 元\n\n優惠 : ${discount}\n轉出帳號 : \n${fromAccount}\n轉入帳號 : \n${toAccount}`;
    } else if (selectedSegment === 1) {
      transactionDetails = `您預約的日期為：${moment(startDate).format('YYYY-MM-DD')}\n我們將在該日期再次與您確認交易詳情，巴菲特銀行感謝您。`;
    }

    //Show alert with transaction details
    //showAlert(transactionDetails);
    navigation.navigate('ExchangeConfirm', { transactionDetails });
  };


  // Function to show the alert (由交易成功頁取代)
  /*
  const showAlert = (transactionDetails) => {
    Alert.alert(
      '交易成功\n',
      `-------交易詳情-------\n${transactionDetails}`,
      [
        {
          text: '確認',
          onPress: () => {
            // Navigate back to HomeScreen upon confirmation
            navigation.navigate('HomeScreen');
          },
        },
      ],
      { cancelable: false }
    );
  };
  */

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
        <Text style={{ color: '#fff', fontSize: 20 }}>外幣</Text>
      </View>

      <SegmentedControl
        values={['即時換匯', '預約換匯']}
        selectedIndex={selectedSegment}
        onChange={(event) => setSelectedSegment(event.nativeEvent.selectedSegmentIndex)}
        style={{ marginTop: 15, marginBottom: 10, height: 38, width: '90%' }}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>

        {selectedSegment === 0 && (
          <View>
            <View style={styles.box}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  請選擇幣別與金額
                </Text>
              </View>
              <View style={styles.line} />

              <View style={styles.pickerSection}>
                <View style={styles.Sec}>
                  <RNPickerSelect
                    placeholder={{ label: "請選擇轉出幣別", value: "", color: "#000" }}
                    items={currencyItems}
                    value={fromCurrency}
                    onValueChange={(value) => setFromCurrency(value)}
                    style={styles.picker}
                  />
                </View>
                <View style={styles.Sec}>
                  <RNPickerSelect
                    placeholder={{ label: "請選擇轉入幣別", value: "", color: "#000" }}
                    items={currencyItems}
                    value={toCurrency}
                    onValueChange={(value) => setToCurrency(value)} // Corrected to update toCurrency
                    style={styles.picker}
                  />
                </View>
              </View>

              <View style={styles.inputSec}>
                <TextInput
                  style={{
                    width: '40%',
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#244172',
                  }}
                  placeholder="轉出金額"
                  value={fromAmount}
                  onChangeText={handleFromAmountChange}
                />
                <TouchableOpacity onPress={handleSwapCurrencies}>
                  <Image source={require('../component/img/sync_alt.png')} style={{ marginTop: 5 }} />
                </TouchableOpacity>
                <TextInput
                  style={{
                    width: '40%',
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#244172',
                  }}
                  placeholder="轉入金額"
                  value={toAmount}
                  onChangeText={handleToAmountChange}
                />
              </View>
              <Text style={{ color: '#929191', textAlign: 'center', margin: 10 }}>實際匯率以交易完成時間為準</Text>
              <View style={styles.line} />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  匯率優惠
                </Text>
              </View>
              <View style={styles.PlatformAdj}>
              <RNPickerSelect
                placeholder={{ label: "", value: "", color: "#000" }}
                items={discountItems}
                value={discount}
                onValueChange={(value) => setDiscount(value)}
              />
              </View>
              <View style={styles.line} />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  轉出帳號
                </Text>
              </View>
              <View style={styles.PlatformAdj2}>
              <RNPickerSelect
                placeholder={{ label: "", value: "", color: "#000" }}
                items={accountItems}
                value={fromAccount}
                onValueChange={(value) => setFromAccount(value)}
              />
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  轉入帳號
                </Text>
              </View>
              <View style={styles.PlatformAdj2}>
              <RNPickerSelect
                placeholder={{ label: "", value: "", color: "#000" }}
                items={accountItems}
                value={toAccount}
                onValueChange={(value) => setToAccount(value)}
              />
              </View>
            </View>
            <TouchableOpacity onPress={handleConfirm} style={styles.button}>
              <Text style={styles.buttonText}>確認</Text>
            </TouchableOpacity>
          </View>
        )}

        {selectedSegment === 1 && (
          <View>
            <View style={styles.box}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  請選擇幣別與金額
                </Text>
              </View>
              <View style={styles.line} />

              <View style={styles.pickerSection}>
                <View style={styles.Sec}>
                  <RNPickerSelect
                    placeholder={{ label: "請選擇轉出幣別", value: "", color: "#000" }}
                    items={currencyItems}
                    value={fromCurrency}
                    onValueChange={(value) => setFromCurrency(value)}
                    style={styles.picker}
                  />
                </View>
                <View style={styles.Sec}>
                  <RNPickerSelect
                    placeholder={{ label: "請選擇轉入幣別", value: "", color: "#000" }}
                    items={currencyItems}
                    value={toCurrency}
                    onValueChange={(value) => setToCurrency(value)} // Corrected to update toCurrency
                    style={styles.picker}
                  />
                </View>
              </View>

              <View style={styles.inputSec}>
                <TextInput
                  style={{
                    width: '40%',
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#244172',
                  }}
                  placeholder="轉出金額"
                  value={fromAmount}
                  onChangeText={handleFromAmountChange}
                />
                <TouchableOpacity onPress={handleSwapCurrencies}>
                  <Image source={require('../component/img/sync_alt.png')} style={{ marginTop: 5 }} />
                </TouchableOpacity>
                <TextInput
                  style={{
                    width: '40%',
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#244172',
                  }}
                  placeholder="轉入金額"
                  value={toAmount}
                  onChangeText={handleToAmountChange}
                />
              </View>
              <Text style={{ color: '#929191', textAlign: 'center', margin: 10 }}>實際匯率以交易完成時間為準</Text>
              <View style={styles.line} />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  匯率優惠
                </Text>
              </View>
              <View style={styles.PlatformAdj}>
              <RNPickerSelect
                placeholder={{ label: "", value: "", color: "#000" }}
                items={discountItems}
                value={discount}
                onValueChange={(value) => setDiscount(value)}
              />
              </View>
              <View style={styles.line} />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  轉出帳號
                </Text>
              </View>
              <View style={styles.PlatformAdj2}>
              <RNPickerSelect
                placeholder={{ label: "", value: "", color: "#000" }}
                items={accountItems}
                value={fromAccount}
                onValueChange={(value) => setFromAccount(value)}
              />
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  轉入帳號
                </Text>
              </View>
              <View style={styles.PlatformAdj2}>
              <RNPickerSelect
                placeholder={{ label: "", value: "", color: "#000" }}
                items={accountItems}
                value={toAccount}
                onValueChange={(value) => setToAccount(value)}
              />
              </View>
              <View style={styles.line} />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  預約設定
                </Text>
              </View>

              <View style={{ width: '95%', alignContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                  <Text style={{ fontSize: 16 }}>    預約入帳日</Text>
                  <TouchableOpacity onPress={showStartDatepicker} style={{ borderWidth: 1, padding: 5, width: 160, borderColor: '#244172', marginTop: 10, marginBottom: 5 }}>
                    <Text>{moment(startDate).format('YYYY-MM-DD')}</Text>
                  </TouchableOpacity>
                  {showStartDatePicker && (
                    <DateTimePicker
                      testID="startDatePicker"
                      value={startDate}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      onChange={handleStartDateChange}
                    />
                  )}
                </View>
              </View>
              {/* or? */}
            </View>
            <TouchableOpacity onPress={handleConfirm} style={styles.button}>
              <Text style={styles.buttonText}>確認</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>

    </SafeAreaView>
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
    height: 820,
    marginTop: 10,
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
  line: {
    margin: 10,
    width: 400,
    marginLeft: -50,
    marginRight: -50,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  Sec: {
    width: 275,
    ...Platform.select({
      ios: {
          marginTop: 10, // Apply margin top for iOS
          marginBottom: 10, // Apply margin bottom for iOS
      }
    })
  },
  pickerSection: {
    width: 310,
    paddingLeft: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  picker: {
    inputIOS: { width: '50%' },
    inputAndroid: { width: '50%' },
  },
  inputSec: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: 350,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#244172',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  calendarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlatformAdj:{
    ...Platform.select({
      ios: {
          marginTop: 10, // Apply margin top for iOS
          marginBottom: 10, // Apply margin bottom for iOS
      }
    })
  },
  PlatformAdj2:{
    ...Platform.select({
      ios: {
          marginTop: 20, // Apply margin top for iOS
          marginBottom: 20, // Apply margin bottom for iOS
      }
    })
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

export default ExchangeScreen; 