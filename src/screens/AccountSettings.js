import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { geticon } from '../component/img/getIcon';
import React, { useEffect, useState } from 'react';

const AccountSettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Exchange Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>帳戶設定</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("PersonalInfo") }}
        >
          <Text>編輯個人資料</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text>安全性設定</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("ResetPassword")}}
        >
          <Text>重置密碼</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 60,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});
export default AccountSettingsScreen