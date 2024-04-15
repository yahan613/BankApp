import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
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
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 500, }}>
        <Text style={{ color: '#000', fontSize: 18, marginTop: 40, }}>開始你的第一筆理財規劃吧！</Text>

        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50 , backgroundColor: '#fff', borderRadius: 10, marginTop: 30 }}>
          {geticon('Add')}
        </View>

      </View>

    </SafeAreaView>
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
    width: '70%',
    height: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
export default FinMan