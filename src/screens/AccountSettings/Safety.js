import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity} from 'react-native';
import React from 'react'
import { geticon } from '../../component/img/getIcon';

const Safety = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground} />
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/*Header of Screen*/}
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>安全性設定</Text>
      </View>
        <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%', ...Platform.select({ios: {height: 810},android: {height: 780}}), alignSelf: 'center' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        
        <View style={styles.box}>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>交易驗證方式</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>圖形密碼</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>生物辨識</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
          {/* 其他安全性設定 */}
        </View>    

      </ScrollView>
      

      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  box: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
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
export default Safety