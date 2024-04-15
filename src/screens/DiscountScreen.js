import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'

const Discount = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.header}>
        <Text style={{ color: '#fff', fontSize: 20 }}>優惠</Text>
      </View>
      <ScrollView contentContainerStyle={{marginTop: 50,width: '85%', justifyContent: 'center', }} showsHorizontalScrollIndicator={false}>
        <View style={{  height: 300,  marginBottom: 10}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style = {{backgroundColor: '#244172', width: 5, borderRadius: 5, marginRight: 7}}></View>
            <Text style={{fontSize: 20}}>本月活動</Text>
          </View>
          
          <ScrollView horizontal style={styles.container2} showsHorizontalScrollIndicator={false}>
            <View style={styles.item}>
              <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 3</Text>
            </View>
            {/* Add more items here */}
          </ScrollView>
        </View>
      </ScrollView>
      <ScrollView contentContainerStyle={{width: '85%', justifyContent: 'center', }} showsHorizontalScrollIndicator={false}>
        <View style={{  height: 250,  marginBottom: 80  }}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style = {{backgroundColor: '#244172', width: 5, borderRadius: 5, marginRight: 7}}></View>
            <Text style={{fontSize: 20}}>熱門兌換</Text>
          </View>
          
          <ScrollView horizontal style={styles.container2} showsHorizontalScrollIndicator={false}>
            <View style={styles.item}>
              <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 3</Text>
            </View>
            {/* Add more items here */}
          </ScrollView>
        </View>
      </ScrollView>


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
  },
  container2: {
    flexDirection: 'row',
  },
  item: {
    width: 150,
    height: 200,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default Discount