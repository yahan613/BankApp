import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import { useState } from 'react';

const ExRateChart = ({ navigation }) => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground} />
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Exchange Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity 
          onPress={() => {
            navigation.goBack();
          }}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>繳費</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          <View style={styles.box}>
            <View style={styles.labelContainer}>
              <View style={styles.label}>
                <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7, marginTop: 7 }}></View>
                <Text style={styles.labelText}>
                  繳費/稅項目
                </Text>
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.pItems}>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                {geticon('Add_call')}
                <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>電信費</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                {geticon('Water_ec')}
                <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>水電費</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                {geticon('Request_page')}
                <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>繳稅</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pItems}>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                {geticon('Credit_card2')}
                <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>信用卡費</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                {geticon('Local_parking')}
                <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>停車費</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                {geticon('Local_gas_station')}
                <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>汽燃費</Text>
              </TouchableOpacity>
            </View>
            {showMoreOptions && (
              <View style={styles.pItems}>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  {geticon('School')}
                  <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>學雜費</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  {geticon('Volunteer')}
                  <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>愛心捐款</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  {geticon('Widgets')}
                  <Text style={{ ...Platform.select({ ios: { fontSize: 12 }, android: { fontSize: 14 } }) }}>其他費用</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity onPress={toggleMoreOptions} style={{ marginTop: 10, padding: 5, width: 140, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
              <Text style={{ color: '#5C94F3', borderWidth: 1, borderRadius: 8, borderColor: '#D9D9D9', paddingTop: 3, paddingBottom: 3, paddingRight: 10, paddingLeft: 10 }}>{showMoreOptions ? '顯示更少' : '顯示更多'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <View style={styles.labelContainer}>
              <View style={styles.label}>
                <View style={{ height: '100%', width: 3, backgroundColor: '#244172', marginRight: 7, marginTop: 7 }}></View>
                <Text style={styles.labelText}>
                  更多功能
                </Text>
              </View>
            </View>
            <View style={styles.line} />
            <View style={{ paddingTop: 10 }}>
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 10 }}>
                <Text style={{ ...Platform.select({ ios: { fontSize: 14 }, android: { fontSize: 16 } }) }}>近期帳單</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginTop: 10 }}>
                <Text style={{ ...Platform.select({ ios: { fontSize: 14 }, android: { fontSize: 16 } }) }}>查詢歷史紀錄</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
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
    ...Platform.select({
      ios: {
        width: 350,
      },
      android: {
        width: 325,
      }
    }),
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
  pItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 10
  }
});
export default ExRateChart