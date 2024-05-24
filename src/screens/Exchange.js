import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { geticon } from '../component/img/getIcon';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc } from '@firebase/firestore';
import { db } from '../../Firebaseinit';


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
  { label: "VIP優惠", value: "VIP優惠" },
];
const accountItems = [
  { label: "活期儲蓄存款  0081234567890", value: "活期儲蓄存款  0081234567890" },
  { label: "外匯存款  0081234567891", value: "外匯存款  0081234567891" },
];



//main!!!!!
const ExchangeScreen = ({ navigation }) => {

  UserData = useSelector(state => state.auth.UserData);
  const userName = UserData.Name
  const cre = UserData.Balance.credit
  const ori_twd = UserData.Balance.twd
  const ori_for = UserData.Balance.for

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  const dispatch = useDispatch();

  const usdRate = useSelector(state => state.rate.usdRate);
  const jpyRate = useSelector(state => state.rate.jpyRate);
  const eurRate = useSelector(state => state.rate.eurRate);
  const rmbRate = useSelector(state => state.rate.rmbRate);
  const hkdRate = useSelector(state => state.rate.hkdRate);

  const currencyConversionRates = {
    "新台幣": {
      "美元": 1 / usdRate,
      "日幣": 1 / jpyRate,
      "人民幣": 1 / rmbRate,
      "歐元": 1 / eurRate,
      "港幣": 1 / hkdRate,
    },
    "美元": {
      "新台幣": usdRate,
      "日幣": usdRate / jpyRate,
      "人民幣": usdRate / rmbRate,
      "歐元": usdRate / eurRate,
      "港幣": usdRate / hkdRate,
    },
    "日幣": {
      "新台幣": jpyRate,
      "美元": jpyRate / usdRate,
      "人民幣": jpyRate / rmbRate,
      "歐元": jpyRate / eurRate,
      "港幣": jpyRate / hkdRate,
    },
    "人民幣": {
      "新台幣": rmbRate,
      "美元": rmbRate / usdRate,
      "日幣": rmbRate / jpyRate,
      "歐元": rmbRate / eurRate,
      "港幣": rmbRate / hkdRate,
    },
    "歐元": {
      "新台幣": eurRate,
      "美元": eurRate / usdRate,
      "日幣": eurRate / jpyRate,
      "人民幣": eurRate / rmbRate,
      "港幣": eurRate / hkdRate,
    },
    "港幣": {
      "新台幣": hkdRate,
      "美元": hkdRate / usdRate,
      "日幣": hkdRate / jpyRate,
      "人民幣": hkdRate / rmbRate,
      "歐元": hkdRate / eurRate,
    }
  };
  
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

  /*
  const FORtransactionAction = (money) => {
    dispatch({ type: 'SET_FOR_TR', payload: { money: money } });
  };
  const TWDtransactionAction = (money) => {
    dispatch({ type: 'SET_TWD_TR', payload: { money: money } });
  };
  const FORtransactionActionA = (money) => {
    
    dispatch({ type: 'SET_FOR_TRA', payload: { money: money } });
  };
  const TWDtransactionActionA = (money) => {
    
    dispatch({ type: 'SET_TWD_TRA', payload: { money: money } });
  };
  */

  const upDateFireBaseOut = async (money, acctype) => {
    console.log("money is ", money)
    console.log("acc is ",  ori_for - money,)
    switch(acctype){
      case 'twd':
        await updateDoc(doc(db, "User", userName), {
          Balance:{
            for: ori_for,
            twd: ori_twd - money,
            credit: cre,
          }
        });
        break;
      case 'for':
        await updateDoc(doc(db, "User", userName), {
          Balance: {
            for: ori_for - money,
            twd: ori_twd,
            credit: cre,
          }
        });
        break;
    }
  };

  const upDateFireBaseIn = async (money, acctype) => {
    console.log("money is ", money)
    console.log("acc is ",  ori_for + money,)
    switch(acctype){
      case 'twd':
        await updateDoc(doc(db, "User", userName), {
          Balance:{
            for: ori_for,
            twd: ori_twd + money,
            credit: cre,
          }
        });
        break;
      case 'for':
        await updateDoc(doc(db, "User", userName), {
          Balance: {
            for: ori_for + money,
            twd: ori_twd,
            credit: cre,
          }
        });
        break;
    }
  };

  /*
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
  */

  /*
  const callTradeIn = (v, m) => {
    switch (v) {
      case '外匯存款  0081234567891':
        FORtransactionActionA(m);
        break;
      case '活期儲蓄存款  0081234567890':
        TWDtransactionActionA(m);
        break;
      default:
        break;
    }
  }
  */

  const callTrade = (v, m) => {
    switch (v) {
      case '外匯存款  0081234567891':
        upDateFireBaseOut(m, 'for'); //要轉多少，轉哪個帳戶的錢(活儲或外匯)
        break;
      case '活期儲蓄存款  0081234567890':
        upDateFireBaseOut(m, 'twd');
        break;
      default:
        break;
    }
  }
  const callTradeIn = (v, m) => {
    switch (v) {
      case '外匯存款  0081234567891':
        upDateFireBaseIn(m, 'for'); //要轉多少，轉哪個帳戶的錢(活儲或外匯)
        break;
      case '活期儲蓄存款  0081234567890':
        upDateFireBaseIn(m, 'twd');
        break;
      default:
        break;
    }
  }

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

  //設定匯到通知
  const [ConversionRates, setConversionRates] = useState('');

  const handleNotificationExchangeRateChange = (rate) => {
    setConversionRates(rate);
  };


  const handleConfirm = () => {

    let transactionDetails;
    if (selectedSegment === 0) {
      if (!fromCurrency || !toCurrency || !fromAccount || !fromAmount || !toAmount) {
        Alert.alert('有空白欄位', '請在確認送出前填寫所有欄位。');
        return;
      }

      transactionDetails =  transactionDetails = `轉出金額 : ${fromCurrency} ${fromAmount} 元\n轉入金額 : ${toCurrency} ${toAmount} 元\n\n優惠 : ${discount}\n轉出帳號 : \n${fromAccount}\n轉入帳號 : \n${toAccount}`;
      navigation.navigate('ExchangeConfirm', { transactionDetails });
    } 
    else if (selectedSegment === 1) {
      if( selectedOption === 'option1' ){
        if (!fromCurrency || !toCurrency || !fromAccount || !fromAmount || !toAmount) {
          Alert.alert('有空白欄位', '請在確認送出前填寫所有欄位。');
          return;
        }

        transactionDetails = `您預約的日期為：${moment(startDate).format('YYYY-MM-DD')}\n我們將於該日期再次與您確認交易詳情，巴菲特銀行感謝您。`;
        showAlert(transactionDetails);
      }
      else if( selectedOption === 'option2' ){
        if (!ConversionRates) {
          fromAmount = 0;
          toAmount = 0;
          Alert.alert('有空白欄位', '請在確認送出前填寫所有欄位。');
          return;
      }

        transactionDetails = `您設定的匯率為：${ConversionRates}\n我們將於匯率到價的時候通知您，交易會以當日匯率作計算，巴菲特銀行感謝您。`;
        showAlert(transactionDetails);
      }
    }
   
  };

  const showAlert = (transactionDetails) => {
    
    Alert.alert(
      '預約成功\n',
      `${transactionDetails}`,
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
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

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
                    onValueChange={(value) => {
                        setFromCurrency(value);
                        // Conditionally set default account based on 'fromCurrency'
                        setFromAccount(value === "新台幣" ? "活期儲蓄存款  0081234567890" : "外匯存款  0081234567891");
                    }}
                    style={styles.picker}
                  />
                </View>
                <View style={styles.Sec}>
                  <RNPickerSelect
                    placeholder={{ label: "請選擇轉入幣別", value: "", color: "#000" }}
                    items={currencyItems.filter(item => item.value !== fromCurrency)} // Filter out the current 'fromCurrency' from the options
                    value={toCurrency}
                    onValueChange={(value) => {
                      setToCurrency(value);
                      // Conditionally set default account based on 'toCurrency'
                      setToAccount(value === "新台幣" ? "活期儲蓄存款  0081234567890" : "外匯存款  0081234567891");
                    }}
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
                    borderRadius: 4,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#929191',
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
                    borderRadius: 4,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#929191',
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
                placeholder={{ label: "請選擇轉出帳號", value: "", color: "#000" }}
                items={fromCurrency === "新台幣" ? accountItems.slice(0, 1) : accountItems.slice(1)} // Conditionally set default account based on 'fromCurrency'
                value={fromAccount}
                onValueChange={(value) => setFromAccount(value)}
              />
              <Text style={{...Platform.select({ios:{marginTop: 5},android:{marginLeft: 15, marginBottom: 15}}), color: '#929191'}}>可用餘額 : {fromAccount==="活期儲蓄存款  0081234567890"?numberWithCommas(UserData.Balance.twd):fromAccount==="外匯存款  0081234567891"?numberWithCommas(UserData.Balance.for): ""}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  轉入帳號
                </Text>
              </View>
              <View style={styles.PlatformAdj2}>
              <RNPickerSelect
                placeholder={{ label: "請選擇轉入帳號", value: "", color: "#000" }}
                items={toCurrency === "新台幣" ? accountItems.slice(0, 1) : accountItems.slice(1)} // Conditionally set default account based on 'toCurrency'
                value={toAccount}
                onValueChange={(value) => setToAccount(value)}
              />
              <Text style={{...Platform.select({ios:{marginTop: 5},android:{marginLeft: 15}}), color: '#929191'}}>可用餘額 : {toAccount==="活期儲蓄存款  0081234567890"?numberWithCommas(UserData.Balance.twd):toAccount==="外匯存款  0081234567891"?numberWithCommas(UserData.Balance.for): ""}</Text>   
              </View>

              
            </View>
            <TouchableOpacity onPress={() => {
              callTrade(fromAccount, parseInt(fromAmount))
              callTradeIn(toAccount, parseInt(toAmount))
              handleConfirm()
              }} style={styles.button}>
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
                    onValueChange={(value) => {
                        setFromCurrency(value);
                        // Conditionally set default account based on 'fromCurrency'
                        setFromAccount(value === "新台幣" ? "活期儲蓄存款  0081234567890" : "外匯存款  0081234567891");
                    }}
                    style={styles.picker}
                  />
                </View>
                <View style={styles.Sec}>
                  <RNPickerSelect
                    placeholder={{ label: "請選擇轉入幣別", value: "", color: "#000" }}
                    items={currencyItems.filter(item => item.value !== fromCurrency)} // Filter out the current 'fromCurrency' from the options
                    value={toCurrency}
                    onValueChange={(value) => {
                      setToCurrency(value);
                      // Conditionally set default account based on 'toCurrency'
                      setToAccount(value === "新台幣" ? "活期儲蓄存款  0081234567890" : "外匯存款  0081234567891");
                    }}
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
                    borderRadius: 4,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#929191',
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
                    borderRadius: 4,
                    padding: 10,
                    backgroundColor: '#fff',
                    borderColor: '#929191',
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
                placeholder={{ label: "請選擇轉出帳號", value: "", color: "#000" }}
                items={fromCurrency === "新台幣" ? accountItems.slice(0, 1) : accountItems.slice(1)} // Conditionally set default account based on 'fromCurrency'
                value={fromAccount}
                onValueChange={(value) => setFromAccount(value)}
              />
              <Text style={{...Platform.select({ios:{marginTop: 5},android:{marginLeft: 15, marginBottom: 15}}), color: '#929191'}}>可用餘額 : {fromAccount==="活期儲蓄存款  0081234567890"?numberWithCommas(UserData.Balance.twd):fromAccount==="外匯存款  0081234567891"?numberWithCommas(UserData.Balance.for): ""}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  轉入帳號
                </Text>
              </View>
              <View style={styles.PlatformAdj2}>
              <RNPickerSelect
                placeholder={{ label: "請選擇轉入帳號", value: "", color: "#000" }}
                items={toCurrency === "新台幣" ? accountItems.slice(0, 1) : accountItems.slice(1)} // Conditionally set default account based on 'toCurrency'
                value={toAccount}
                onValueChange={(value) => setToAccount(value)}
              />
              <Text style={{...Platform.select({ios:{marginTop: 5},android:{marginLeft: 15}}), color: '#929191'}}>可用餘額 : {toAccount==="活期儲蓄存款  0081234567890"?numberWithCommas(UserData.Balance.twd):toAccount==="外匯存款  0081234567891"?numberWithCommas(UserData.Balance.for): ""}</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>
                  選擇預約方式
                </Text>
              </View>
              
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginTop: 10}}>
                <TouchableOpacity onPress={() => handleOptionSelect('option1')}>
                  <Text style={[{ ...Platform.select({ios: {fontSize: 13}, android: {fontSize: 14}}) }, selectedOption === 'option1' && { textDecorationLine: 'underline', textDecorationColor: '#5C94F3' }]}>
                    (1)預約入帳日
                  </Text>
                </TouchableOpacity>
                <Text style={{ ...Platform.select({ios: {fontSize: 13}, android: {fontSize: 14}}) , color: '#D9D9D9' }}>|</Text>
                <TouchableOpacity onPress={() => handleOptionSelect('option2')}>
                  <Text style={[{ ...Platform.select({ios: {fontSize: 13}, android: {fontSize: 14}}) }, selectedOption === 'option2' && { textDecorationLine: 'underline', textDecorationColor: '#5C94F3' }]}>
                    (2)設定匯率通知
                  </Text>
                </TouchableOpacity>
              </View>

              {/* You can render different components based on the selected option */}
              {selectedOption === 'option1' && (
                <View>
                  <View style={{ alignContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                  <Text style={{ fontSize: 16 }}>預約入帳日</Text>
                  <TouchableOpacity onPress={showStartDatepicker} style={{ borderWidth: 1, borderRadius: 4, padding: 6, width: 160, borderColor: '#929191', marginTop: 10, marginBottom: 5 }}>
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
                </View>
              )}
              {selectedOption === 'option2' && (
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginBottom: 10}}>
                  <Text style={{ fontSize: 16 }}>設定通知匯率</Text>
                  <TextInput
                    style={{
                          width: 160,
                          borderWidth: 1,
                          borderRadius: 4,
                          paddingLeft: 10,
                          paddingTop: 2,
                          paddingBottom: 2,
                          backgroundColor: '#fff',
                          borderColor: '#929191',
                    }}
                    value={ConversionRates}
                    placeholder="輸入通知匯率"
                    keyboardType="numeric"
                    onChangeText={handleNotificationExchangeRateChange}
                />
              </View>
                </View>
              )}

              {/* 
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{height: 1, backgroundColor: '#D9D9D9', width: 125 }}></View>
                <Text style={{color: '#929191'}}>或</Text>
                <View style={{height: 1, backgroundColor: '#D9D9D9', width: 125}}></View>
              </View>
              */}

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
    height: 850,
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