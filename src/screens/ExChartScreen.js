import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import { useState } from 'react';
import { Chart } from '../component/Exchange/Chart';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getFirestore, collection, getDocs, onSnapshot, query } from '@firebase/firestore';
import { db } from '../../Firebaseinit';

const ExRateChart = ({ navigation, route }) => {
  const { Country } = route.params;
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
        <Text style={{ color: '#fff', fontSize: 20 }}>匯率資訊</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {Chart(Country, '5S')}
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