import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { geticon } from '../../component/img/getIcon';
import React, { useEffect, useState } from 'react';

const AccountEditScreen = ({ navigation }) => {
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
        <Text style={{ color: '#fff', fontSize: 20 }}>編輯帳戶</Text>
      </View>
      <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%', ...Platform.select({ios: {height: 810},android: {height: 780}}) }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.box}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
                    <Text style={{ fontSize: 20, color: '#244172' }}>我的資料</Text>
                </View> 
                <View style={styles.line} />
                {/* 輸入 */}
                <View style={styles.labelContainer}>
                    <View style={styles.label}>
                        <Text style={styles.labelText}>
                            用戶名稱
                        </Text>
                    </View>
                </View>
                <View style={styles.selectBox}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TextInput
                        style={styles.select2}
                        />
                    </View>
                </View>
                <View style={styles.labelContainer}>
                    <View style={styles.label}>
                        <Text style={styles.labelText}>
                            Email
                        </Text>
                    </View>
                </View>
                <View style={styles.selectBox}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TextInput
                        style={styles.select2}
                        />
                    </View>
                </View>
                <View style={styles.labelContainer}>
                    <View style={styles.label}>
                        <Text style={styles.labelText}>
                            電話號碼
                        </Text>
                    </View>
                </View>
                <View style={styles.selectBox}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TextInput
                        style={styles.select2}
                        keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={styles.labelContainer}>
                    <View style={styles.label}>
                        <Text style={styles.labelText}>
                            住家電話
                        </Text>
                    </View>
                </View>
                <View style={styles.selectBox}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TextInput
                        style={styles.select2}
                        />
                    </View>
                </View>
                <View style={styles.labelContainer}>
                    <View style={styles.label}>
                        <Text style={styles.labelText}>
                            現居地址
                        </Text>
                    </View>
                </View>
                <View style={styles.selectBox}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TextInput
                        style={styles.select2}
                        />
                    </View>
                </View>
                
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                {/* saveData() */}
                navigation.goBack()
              }}>
              <Text style={styles.buttonText}>儲存</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
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
  memberbox: {
    ...Platform.select({ios: {width: 355},android: {width: 350}}),
    height: 150,
    backgroundColor: '#fff',  
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: 'column',
    padding: 20
  },
  memberTextbox: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  box: {
    width: '85%',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
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
  selectBox: {
    flexDirection: 'column',
    width: '100%',
  },
  selectlabel: {
    color: '#929191',
    marginBottom: 10,
    fontSize: 16,
    marginTop: 10,
  },
  select2: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderBottomWidth: 1, 
    borderColor: '#D9D9D9',
    color: '#929191',
    paddingRight: 30,
    ...Platform.select({
      ios: {
        width: 300,
      },
      android: {
        width: 285,
      }
    }),
    marginBottom: 15,
  },
  button: {
    width: '85%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#244172',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff'
  }
});
export default AccountEditScreen