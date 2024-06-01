import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import LottieView from 'lottie-react-native';

const ExchangeConfirm = ({ navigation, route }) => {

  const { transactionDetails } = route.params;
  const [currentDateTime] = useState(new Date());

  // Convert to Taipei time zone
  const taipeiTimeOptions = {
    timeZone: 'Asia/Taipei',
    hour12: false, // Use 24-hour format
  };
  const taipeiTime = currentDateTime.toLocaleString('en-US', taipeiTimeOptions);

  //LOADING
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3秒的加载时间

    return () => clearTimeout(timer); // 清除計時器
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingScreen}>
        <LottieView style={{ flex: 1, width: 200, height: 200 }} source={require('../component/img/Lottie_Animation/trade_con2.json')} autoPlay loop />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground} />
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Exchange Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>外幣</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          <View style={styles.box}>
            <View style={styles.labelContainer}>
              {geticon('Circle')}
              <Text style={styles.labelText}>
                交易成功
              </Text>
              <View>
                <Text style={{ margin: 8, color: 'gray' }}>{taipeiTime}</Text>
              </View>
            </View>
            <View>
              <Text style={{ ...Platform.select({ android: { fontSize: 18 }, ios: { fontSize: 14 } }), marginBottom: 10, lineHeight: 35 }}>{transactionDetails}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.button}>
            <Text style={styles.buttonText}>確認</Text>
          </TouchableOpacity>
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
  loadingScreen: {
    flex: 1,
    backgroundColor: '#D9D9D9', // 白色背景
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    width: 320,
    height: '100%',
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 20,
    color: '#244172',
    marginTop: 3,
  },
  line: {
    margin: 5,
    width: 400,
    height: 1,
    marginLeft: -50,
    backgroundColor: '#D9D9D9'
  },
  button: {
    width: 320,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#244172',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default ExchangeConfirm;