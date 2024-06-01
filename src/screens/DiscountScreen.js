import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';

const Discount = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9' }}>
      <View style={styles.topBackground} />
      <View style={styles.header}>
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>優惠</Text>
      </View>
      <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%', justifyContent: 'center', }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.memberbox}>
          <Image
            source={geticon('userHead')}
            style={{ width: 60, height: 60 }}
          />
          <View style={styles.memberTextbox}>
            <Text style={{ ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>Amy</Text>
            <TouchableOpacity><Text style={{ ...Platform.select({ios: {fontSize: 12},android: {fontSize: 14}}), color: '#5C94F3' }}>查看個人資料</Text></TouchableOpacity>
          </View>
          <View style={styles.coinContainer}>
            <TouchableOpacity style={{ height: 30, width: 30, flexDirection: 'row', alignItems: 'center' }}>
              {[1, 2, 3].map((index) => (
                <Image
                  source={geticon('DiscountCoin')}
                  style={{ width: 20.5, height: 20.5, marginRight: -8 }}
                />
              ))}
              <Text style={{ fontSize: 16, marginLeft: 12, color: '#5C94F3', ...Platform.select({ios: {width: 35},android: {width: 30}}) }}>123</Text>
              {geticon('LeftMore')}     
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 300 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
            <Text style={{ fontSize: 20, color: '#244172' }}>快閃優惠</Text>
          </View>

          <ScrollView horizontal style={styles.container2} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../component/img/popup1.png")}
                style={{ width: '100%', height: 100 }}
              />
              <Text style={styles.popupText}>消費回饋-信用卡消費返利5%</Text>
              <Text style={styles.popupdate}>2024/10/31截止</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../component/img/popup2.png")}
                style={{ width: '100%', height: 100 }}
              />
              <Text style={styles.popupText}>點數轉換-航空里程積分</Text>
              <Text style={styles.popupdate}>2024/7/25截止</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../component/img/popup3.png")}
                style={{ width: '100%', height: 100 }}
              />
              <Text style={styles.popupText}>首刷滿3,000 享好禮三選一</Text>
              <Text style={styles.popupdate}>2024/5/5截止</Text>
            </TouchableOpacity>
            {/* Add more items here */}
          </ScrollView>
        </View>
        <View style={{ height: 265, marginBottom: 180 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
            <Text style={{ fontSize: 20, color: '#244172' }}>熱門兌換</Text>
          </View>
          <ScrollView horizontal style={styles.container2} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../component/img/PopularExchange1.png")}
                style={{ width: '100%', height: 100, }}
              />
              <Text style={styles.popupText}>星巴克 大杯拿鐵(冰)</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.popupdate2}>88</Text>
                <Image
                  source={geticon('DiscountCoin')}
                  style={{ width: 20.5, height: 20.5, marginRight: -8 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../component/img/PopularExchange2.png")}
                style={{ width: '100%', height: 100, }}
              />
              <Text style={styles.popupText}>7-ELEVEN 100元購物金</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.popupdate2}>100</Text>
                <Image
                  source={geticon('DiscountCoin')}
                  style={{ width: 20.5, height: 20.5, marginRight: -8 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../component/img/PopularExchange3.png")}
                style={{ width: '100%', height: 100, borderBottomWidth: 1, borderColor: '#929191', }}
              />
              <Text style={styles.popupText}>家樂福 100元即享卷</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#929191', }}>
                <Text style={styles.popupdate2}>100</Text>
                <Image
                  source={geticon('DiscountCoin')}
                  style={{ width: 20.5, height: 20.5, marginRight: -8 }}
                />
              </View>
            </TouchableOpacity>
            {/* Add more items here */}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#244172',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#244172',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  memberbox: {
    ...Platform.select({ios: {width: 365},android: {width: 350}}),
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  memberTextbox: {
    flexDirection: 'column',
  },
  selectedOption: {
    marginTop: 20,
    fontSize: 18,
  },
  container2: {
    flexDirection: 'row',
  },
  item: {
    width: 140,
    height: 200,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10,
    overflow: 'hidden',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 40,
    width: 120,
  },
  popupText: {
    ...Platform.select({
      ios: {
        fontSize: 12,
      },
      android: {
        fontSize: 14,
      }
    }),
    margin: 8,
    marginTop: 18,
  },
  popupdate: {
    ...Platform.select({
      ios: {
        fontSize: 10,
      },
      android: {
        fontSize: 13,
      }
    }),
    color: '#929191',
    margin: 8,
    marginTop: 10,
  },
  popupdate2: {
    fontSize: 13,
    color: '#5C94F3',
    margin: 8,
    marginTop: 10,
  },
});
export default Discount