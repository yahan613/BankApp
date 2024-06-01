import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { geticon } from '../component/img/getIcon';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CreditCardScreen = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState('BuffetCard');

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    if (xOffset < 200) {
      setSelectedCard('BuffetCard');
    } else {
      setSelectedCard('AddCard');
    }
  };

  let UserData = useSelector(state => state.auth.UserData);
  const cre = UserData.Balance.credit

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
        <Text style={{ color: '#fff', fontSize: 20 }}>信用卡</Text>
      </View>
      <View style={styles.BottomBackground} />
      <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: 400, marginBottom: 20, alignSelf: 'flex-start', marginLeft: 30 }}>
                <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
                <Text style={{ fontSize: 20, color: '#244172' }}>我的卡片</Text>
            </View> 
            <View style={styles.filters}>
              <ScrollView 
                horizontal 
                contentContainerStyle={styles.filtersContainer}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.9}
                snapToInterval={360}  // Adjust to match the width of your cards
                snapToAlignment={'center'} 
                disableIntervalMomentum={true}
                onScroll={handleScroll}
                scrollEventThrottle={16}
              >
                {/* 巴菲特卡圖示 */}
                <View style={{alignSelf: 'center', marginLeft: 10}}>
                  <Image
                    source={geticon("BuffetCard")}
                  />
                </View>
                
                {/* 新增卡片圖示 */}
                <View style={styles.addCard}>
                  <Text style={{color: '#D9D9D9', fontSize: 18}}>新增卡片</Text>
                  {geticon("Add")}
                </View>
              </ScrollView>
            </View>
            
            {/* Conditional content rendering */}
            {selectedCard === 'BuffetCard' && (
              <View style={styles.box}>
                <View style={{ flexDirection: 'row', width: 400, marginBottom: 20, alignSelf: 'flex-start' }}>
                  <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
                  <Text style={{ fontSize: 20, color: '#244172' }}>巴菲特虛擬御璽卡</Text>
                </View>
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>卡號</Text>
                  <Text>1234 5678 9087 6543</Text>
                </View>
                <View style={styles.line} />
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>效期</Text>
                  <Text>12/12</Text>
                </View>
                <View style={styles.line} />
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>安全碼</Text>
                  <Text>135</Text>
                </View>
                <View style={styles.line} />
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>持卡人</Text>
                  <Text>CardHolder</Text>
                </View>
                <View style={styles.line} />
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>卡片等級</Text>
                  <Text>御璽卡</Text>
                </View>
                <View style={styles.line} />
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>信用額度</Text>
                  <Text>{cre}</Text>
                </View>
                <View style={styles.line} />
                <View style={{width: '85%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                  <Text>結帳日</Text>
                  <Text>每月10號</Text>
                </View>
              </View>
            )}
            {selectedCard === 'AddCard' && (
              <View style={styles.box}>
                <Text style={{alignSelf: 'center', fontSize: 18, color: '#D9D9D9', paddingRight: 20}}>新增卡片內容</Text>
              </View>
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    height: 300,
    backgroundColor: '#fff',
    zIndex: -1,
  },
  filters: {
    height: 240,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  addCard: {
    height: 210,
    width: 360,
    backgroundColor: '#244172',
    borderRadius: 12,
    alignSelf: 'center',
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  box: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 50,
    marginBottom: 20,
    flexDirection: 'column',
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
    width: 430,
    height: 1,
    marginLeft: -50,
    backgroundColor: '#D9D9D9'
  },
  selectBox: {
    flexDirection: 'column',
    width: '100%',
  },
  selectlabel: {
    color: '#929191',
    marginBottom: 10,
    fontSize: 16,
    marginTop: 10,
  },
  select2: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderBottomWidth: 1, 
    borderColor: '#D9D9D9',
    color: '#929191',
    paddingRight: 30,
    ...Platform.select({
      ios: {
        width: 300,
      },
      android: {
        width: 285,
      }
    }),
    marginBottom: 15,
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
export default CreditCardScreen;
