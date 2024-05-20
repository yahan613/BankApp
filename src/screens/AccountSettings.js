import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { geticon } from '../component/img/getIcon';
import React, { useEffect, useState } from 'react';

const AccountSettingsScreen = ({ navigation }) => {
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
        <Text style={{ color: '#fff', fontSize: 20 }}>帳戶設定</Text>
      </View>
      <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%', ...Platform.select({ios: {height: 810},android: {height: 780}}) }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.memberbox}>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
            <Text style={{ fontSize: 20, color: '#244172' }}>我的帳戶</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={geticon('userHead')}
              style={{ width: 60, height: 60, marginLeft: 10 }}
            />
            <View style={styles.memberTextbox}>
              <Text style={{ ...Platform.select({ios: {fontSize: 18},android: {fontSize: 20}}) }}>Amy</Text>
              {/* navigate to 編輯帳戶 */}
              <TouchableOpacity onPress={() => navigation.navigate('AccountEdit')} style={{ flexDirection: 'row' }}><Text style={{ ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}), color: '#5C94F3', marginRight: 3 }}>編輯個人資料</Text><View style={{marginTop: 5}}>{geticon('Blue_arrow')}</View></TouchableOpacity>
            </View>
          </View>
        </View> 
        
        <View style={styles.box}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20, color: '#244172' }}>更多功能</Text>
        </View> 
        <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            {/* navigate to 編輯帳戶 */}
            <TouchableOpacity onPress={() => navigation.navigate('SavingsAccount')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>我的存款帳戶</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            <TouchableOpacity onPress={() => navigation.navigate('History')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>交易紀錄查詢</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>使用者代號/密碼重設</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
         
          {/* other selections*/}
        </View>
        
      </View>

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
  memberbox: {
    ...Platform.select({ios: {width: 350},android: {width: 340}}),
    height: 150,
    backgroundColor: '#fff',  
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: 'column',
    padding: 20
  },
  memberTextbox: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  box: {
    width: '85%',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 10,
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
    margin: 8,
    width: 400,
    height: 1,
    marginLeft: -50,
    backgroundColor: '#D9D9D9'
  },
});
export default AccountSettingsScreen