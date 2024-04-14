import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { geticon } from '../component/img/getIcon';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import ActionSheet from '@expo/react-native-action-sheet';


//即時換匯
const currencyItems = [
  { label: "新台幣", value: "新台幣" },
  { label: "美元", value: "美元" },
  { label: "日幣", value: "日幣" },
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
    "美元": 0.035, // Approximate conversion rate from TWD to USD
    "日幣": 3.38, // Approximate conversion rate from TWD to JPY
    "新台幣": 1
  },
  "美元": {
    "新台幣": 28.57, // Approximate conversion rate from USD to TWD
    "日幣": 109.20, // Approximate conversion rate from USD to JPY
    "美元": 1
  },
  "日幣": {
    "新台幣": 0.295, // Approximate conversion rate from JPY to TWD
    "美元": 0.00915, // Approximate conversion rate from JPY to USD
    "日幣": 1
  }
};

//定存申請
const dateItems = [
  { label: "5號", value: "5號" },
  { label: "10號", value: "10號" },
  { label: "15號", value: "15號" },
  { label: "20號", value: "20號" },
  { label: "25號", value: "25號" },
];

//main!!!!!
const ExchangeScreen = ({ navigation }) => {

  const [selectedSegment, setSelectedSegment] = useState(0);

  const [fromCurrency, setFromCurrency] = useState("新台幣");
  const [toCurrency, setToCurrency] = useState("美元");
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

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

  //交易確認鈕功能
  const handleConfirmButtonPress = () => {
    // Show action sheet
    ActionSheet.showActionSheetWithOptions(
      {
        options: ['取消', '確認'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
        title: '交易成功',
        message: '您的交易已成功完成。',
        showSeparators: true,
        textStyle: { color: '#244172', fontSize: 18 },
        titleTextStyle: { color: '#244172', fontSize: 20 },
        messageTextStyle: { color: '#929191', fontSize: 16 },
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          // Handle confirm action
          // You can add your logic here for further actions after confirmation
          console.log('交易成功');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
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
              <Image source={require('../component/img/sync_alt.png')} style={{ marginTop: 5 }} />
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
            <RNPickerSelect
              placeholder={{ label: "", value: "", color: "#000" }}
              items={discountItems}
              value="一般優惠"
              onValueChange={(value) => console.log(value)}
            />
            <View style={styles.line} />
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
        )}

        {selectedSegment === 1 && (
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
              <Image source={require('../component/img/sync_alt.png')} style={{ marginTop: 5 }} />
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
            <RNPickerSelect
              placeholder={{ label: "", value: "", color: "#000" }}
              items={discountItems}
              value="一般優惠"
              onValueChange={(value) => console.log(value)}
            />
            <View style={styles.line} />
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ height: 1, backgroundColor: '#D9D9D9', width: 125 }}></View>
                <Text style={{ color: '#929191' }}>或</Text>
                <View style={{ height: 1, backgroundColor: '#D9D9D9', width: 125 }}></View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 16 }}>    設定通知匯率</Text>
                <TextInput
                  style={{
                    width: 160,
                    borderWidth: 1,
                    paddingLeft: 10,
                    paddingTop: 2,
                    paddingBottom: 2,
                    backgroundColor: '#fff',
                    borderColor: '#244172',
                  }}
                  placeholder="輸入通知匯率"
                />
              </View>
            </View>
            {/* 
          <View style={styles.labelContainer}>
              <Text style={styles.label}>
                  每月扣款日期
              </Text>
          </View>
          <RNPickerSelect
              placeholder={{ label: "", value: "", color: "#000" }}
              items={dateItems} 
              value="5號"
              onValueChange={(value) => console.log(value)}
            />
        */}
          </View>

        )}

        <TouchableOpacity onPress={handleConfirmButtonPress} style={styles.button}>
          <Text style={{ left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: 18, justifyContent: 'center' }}>
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
  /*
  scrollViewContent: {
    width: '85%',
    height: 860,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
},*/
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
    width: 340,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#244172'
  },
  calendarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ExchangeScreen; 