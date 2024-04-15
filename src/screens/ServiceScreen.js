import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import React from 'react'

const Service = () => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{ color: '#fff', fontSize: 20 }}>服務</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 500, }}>
      
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
export default Service