import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { geticon } from '../component/img/getIcon';

const FinMan = () => {
  const dispatch = useDispatch();
  const HeaderFlagAction = (flag) => {
    dispatch({ type: 'SET_HEADER_FLAG', payload: flag });
  };
  const headerShowFlag = useSelector(state => state.header.headerShowFlag);
  useFocusEffect(
    React.useCallback(() => {
      HeaderFlagAction(0);//HomeHeader!!!!
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{ color: '#fff', fontSize: 20 }}>理財</Text>
      </View>
      <ScrollView contentContainerStyle={{ marginTop: 50, width: '85%', justifyContent: 'center', alignSelf: 'center' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 5, borderRadius: 5, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20 }}>我的理財規劃</Text>
        </View>
        <TouchableOpacity style={styles.addbox}>
            <Text style={{ color: '#000', fontSize: 18, marginTop: 40,color: '#D9D9D9' }}>開始你的第一筆理財規劃吧！</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50, borderRadius: 10, marginTop: 50 }}>
              {geticon('Add')}
            </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 5, borderRadius: 5, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20 }}>熱門投資主題</Text>
        </View>

      </ScrollView>




    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  selectedOption: {
    marginTop: 20,
    fontSize: 18,
  },
  addbox: {
    width: 350,
    alignSelf: 'center',
    height: 140,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 18,
  }
});
export default FinMan