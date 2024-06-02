import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { geticon } from '../component/img/getIcon';
import { useNavigation } from '@react-navigation/native';
import Step1 from '../component/Signup/step1';
import Step2 from '../component/Signup/step2';
import Step3 from '../component/Signup/step3';
import Step4 from '../component/Signup/step4';
import AwesomeAlert from 'react-native-awesome-alerts';
import { getSpassword, getSusername, getSID } from '../component/Signup/step2';
import { getSPhone, getSAccount } from '../component/Signup/step1';
import { getSEmail } from '../component/Signup/step3';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, User } from "@firebase/auth";
import { auth, db } from '../../Firebaseinit';
import { doc, setDoc } from "@firebase/firestore";



const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.8;

const ForgetP = ({ navigation }) => {

  const [email, setemail] = useState('');
  const [bankpininput, setbankpininput] = useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  //Awesome
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.header}>
        <Text style={{ color: '#fff', fontSize: 20 }}>忘記密碼</Text>
      </View>
      <View style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.userSection}>
          <View style={{ flex: 1 }}>

          </View>
          <View style={{ width: itemWidth, position: 'absolute', bottom: 10, padding: 15 }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 50, justifyContent: 'space-around', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ backgroundColor: '#fff', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={{ color: '#244172', textAlign: 'center' }}> 取消 </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: '#244172', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={{ color: '#fff', textAlign: 'center' }}>完成</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView >
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
  stepbar: {
    width: '80%',
    height: 10,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 30,
    flexDirection: 'row',
  },
  userSection: {
    alignSelf: 'center',
    padding: 30,
    width: itemWidth,
    height: 600,
    borderRadius: 15,
    marginTop: -50,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  selectbox: {
    width: '100%',
    flexDirection: 'column',
    height: 50,
  },
  CheckBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 35,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#929191',
  },
});
export default ForgetP;