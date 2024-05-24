import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { geticon } from '../../component/img/getIcon';
import React, { useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const HistoryScreen = ({ navigation }) => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [searchText, setSearchText] = useState('');

  // Dummy data for transaction history
  const transactions = {
    twd: [
        { id: 1, description: '台幣交易 1', amount: 1000 },
        { id: 2, description: '台幣交易 2', amount: 2000 },
        { id: 3, description: '台幣交易 3', amount: 1500 },
    ],
    foreign: [
      { id: 4, description: '外幣交易 1', amount: 300 },
      { id: 5, description: '外幣交易 2', amount: 500 },
      { id: 6, description: '外幣交易 3', amount: 400 },
    ],
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
        {selectedSegment === 0 && (
          filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <View key={transaction.id} style={styles.box}>
                <Text style={styles.transactionText}>{transaction.description}</Text>
                <Text style={styles.transactionText}>{transaction.amount}</Text>
              </View>
            ))
          ) : (
            <View>
              <Text style={{marginTop: 50}}>尚未有任何交易紀錄</Text>
            </View>
          )
        )}
        {selectedSegment === 1 && (
          filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <View key={transaction.id} style={styles.box}>
                <Text style={styles.transactionText}>{transaction.description}</Text>
                <Text style={styles.transactionText}>{transaction.amount}</Text>
              </View>
            ))
          ) : (
            <View>
              <Text style={{marginTop: 50}}>尚未有任何交易紀錄</Text>
            </View>
          )
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