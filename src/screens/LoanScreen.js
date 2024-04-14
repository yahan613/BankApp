import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import HomeScrMonitor from '../component/HomeScreenMonitor';

const Loan = () => {
  console.log(HomeScrMonitor())
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loan</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loan