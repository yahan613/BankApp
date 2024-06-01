import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity} from 'react-native';
import React from 'react'
import { geticon } from '../component/img/getIcon';

const Loan = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D9D9D9'}}>
      <View style={styles.topBackground} />
      <View style={styles.header}>
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>貸款</Text>
      </View>
        <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%', ...Platform.select({ios: {height: 810},android: {height: 780}}), alignSelf: 'center' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20, color: '#244172' }}>我的貸款</Text>
        </View>
        <TouchableOpacity style={styles.addbox}>
            <Text style={{ color: '#000', fontSize: 18, marginTop: 40,color: '#D9D9D9' }}>您尚未有任何貸款紀錄</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50, borderRadius: 10, marginTop: 50 }}>
              {geticon('Add')}
            </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20, color: '#244172' }}>巴菲特貸款方案</Text>
        </View>  
        
        <View style={styles.box}>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>個人信貸</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>房屋貸款</Text>
                {geticon('Arrow_forward_ios')}
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>汽車貸款</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>學生貸款</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>小額貸款</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>抵押貸款</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{flex: 1, ...Platform.select({ios: {fontSize: 14},android: {fontSize: 16}}) }}>無擔保貸款</Text>
                {geticon('Arrow_forward_ios')}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        

      </ScrollView>
      

      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default Loan