import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';
import { useDispatch } from 'react-redux';

const Transfer = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Exchange Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>轉帳</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Transfer</Text>
      </View>
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
export default Transfer