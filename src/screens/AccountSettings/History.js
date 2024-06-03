import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { geticon } from '../../component/img/getIcon';
import React, { useState, useEffect } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { db } from '../../../Firebaseinit';

const HistoryScreen = ({ navigation, route }) => {

  //失敗(different stacks)
  const { tfromAccount, tfromAmount, ttoAccount, ttoAmount } = route.params || {};

  const [selectedSegment, setSelectedSegment] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [transactions, setTransactions] = useState({
    twd: [],
    foreign: [],
  });

  useEffect(() => {
    if (tfromAccount && tfromAmount && ttoAccount && ttoAmount) {
      addTransaction(tfromAccount, tfromAmount, ttoAccount, ttoAmount);
    }
  }, [tfromAccount, tfromAmount, ttoAccount, ttoAmount]);

  const addTransaction = (fromAccount, fromAmount, toAccount, toAmount) => {
    const newTransactions = { ...transactions };

    const fromTransaction = {
      id: Date.now() + '-from',
      account: fromAccount,
      amount: `-${fromAmount}`,
      description: '轉出',
    };

    const toTransaction = {
      id: Date.now() + '-to',
      account: toAccount,
      amount: `+${toAmount}`,
      description: '轉入',
    };

    if (fromAccount === '活期儲蓄存款  0081234567890') {
      newTransactions.foreign.push(fromTransaction);
      newTransactions.foreign.push(toTransaction);
    } else {
      newTransactions.twd.push(fromTransaction);
      newTransactions.twd.push(toTransaction);
    }

    setTransactions(newTransactions);
  };

  const filteredTransactions = transactions[selectedSegment === 0 ? 'twd' : 'foreign'].filter(
    (transaction) => 
      transaction.description.includes(searchText)
  );

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#D9D9D9' }}>
      <View style={styles.topBackground} />
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>交易紀錄</Text>
      </View>
      <View style={styles.BottomBackground} />
      <View style={styles.search}>
        <TextInput
          style={{ color: 'black' }}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholder="快速查詢..."
        />
        <TouchableOpacity style={{ width: 20, height: 20 }}>
          {geticon("Search")}
        </TouchableOpacity>
      </View>
      <SegmentedControl
        values={['台幣', '外幣']}
        selectedIndex={selectedSegment}
        onChange={(event) => setSelectedSegment(event.nativeEvent.selectedSegmentIndex)}
        style={{ marginTop: 45, height: 38, width: '85%' }}
      />
      <Text style={styles.head}>日期        摘要/金額</Text>
      <ScrollView contentContainerStyle={{ marginTop: 10, width: '85%', alignItems: 'flex-start' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <View key={transaction.id} style={styles.box}>
              <Text style={styles.transactionText}>{transaction.description}</Text>
              <Text style={styles.transactionText}>{transaction.amount}</Text>
            </View>
          ))
        ) : (
          <View>
            
          </View>
        )}
      </ScrollView>  
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
  BottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 600,
    backgroundColor: '#fff',
    zIndex: -1,
  },
  search: {
    backgroundColor: '#fff',
    width: '85%',
    height: 40,
    marginTop: 30,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  head:{
    width: 330,
    paddingTop: 10,
    marginTop: 30,
    color: '#929191',
  },
  box: {
    width: 430,
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'flex-start' // Align items to the start (left)
  },
  transactionText: {
    textAlign: 'left', // Ensure text is aligned to the left
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelContainer: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
  },
  labelText: {
    fontSize: 16,
    color: '#000000',
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    width: 400,
    height: 1,
    marginLeft: -50,
    backgroundColor: '#D9D9D9'
  },
  button: {
    width: '85%',
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
  }
});

export default HistoryScreen;
