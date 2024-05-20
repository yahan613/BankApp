//重設密碼Screen

//編輯個人資料Screen
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { geticon } from '../../component/img/getIcon';
import React, { useEffect, useState } from 'react';

const ResetPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Exchange Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>重置密碼</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', width: '100%'}}>
        <Text>重置密碼</Text>
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
export default ResetPassword