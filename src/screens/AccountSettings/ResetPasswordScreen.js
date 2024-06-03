import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { geticon } from '../../component/img/getIcon';
import ResetPassword1 from '../../component/ResetPassword/ResetPassword1';
import ResetPassword2 from '../../component/ResetPassword/ResetPassword2';
import ResetPassword3 from '../../component/ResetPassword/ResetPassword3';
import { getOldP, getNewP } from '../../component/ResetPassword/ResetPassword2';
import { db, auth } from '../../../Firebaseinit';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword, onAuthStateChanged, updatePassword } from '@firebase/auth';
import { getNewsPic } from '../../component/img/getnews';


const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.8;

let stepPage = 1;

const ResetPassword = ({ navigation }) => {

  let Usermail = []
  const dispatch = useDispatch();
  Usermail = useSelector(state => state.auth.UserData.mail);

  const configureProps = async (OldP, NewP) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, Usermail, OldP);
      const user = userCredential.user;
      updatePassword(user, NewP).then(() => {
        console.log("現在新的", NewP)
      }).catch((error) => {
        console.error("失败:", error);
      });

    } catch (error) {
      // 处理登录失败
      console.error("失败:", error);
    }
  };

  const [stepPage, setStepPage] = useState(1);
  useEffect(() => {
  }, [stepPage]);

  const prog1 = useRef(new Animated.Value(0)).current;
  const prog2 = useRef(new Animated.Value(0)).current;
  const prog3 = useRef(new Animated.Value(0)).current;


  const start1 = () => {
    Animated.timing(prog1, {
      toValue: 150,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }
  const start2 = () => {
    Animated.timing(prog2, {
      toValue: 190,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground} />
      <View style={{ width: '100%', height: 80, backgroundColor: '#244172', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>重置密碼</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '80%', height: 30, flexDirection: 'row', alignItems: 'center', }}>
          {stepPage < 3 ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#929191', marginRight: 5 }}>更改密碼</Text>
              <View style={{ backgroundColor: '#929191', width: 2, height: 17 }}></View>
              <Text style={{ color: '#929191', marginLeft: 5 }}>第{stepPage}步，共3步</Text>
            </View>
          ) : (
            <Text style={{ color: '#929191', marginLeft: 5 }}>更改密碼成功！</Text>
          )}
          <Text></Text>
          <Text></Text>
        </View>
        <View style={styles.stepbar}>
          <Animated.View style={{
            width: prog1,
            height: 10,
            flexDirection: 'row',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: (stepPage === 2 ? 10 : 0),
            borderTopRightRadius: (stepPage === 2 ? 10 : 0),
            backgroundColor: '#5C94F3',
            marginBottom: 30,
          }}></Animated.View>
          <Animated.View style={{
            width: prog2,
            height: 10,
            flexDirection: 'row',
            borderBottomRightRadius: (stepPage === 3 ? 10 : 0),
            borderTopRightRadius: (stepPage === 3 ? 10 : 0),
            backgroundColor: '#5C94F3',
            marginBottom: 30,
          }}></Animated.View>
        </View>
        <View style={styles.userSection}>
          <View style={{ flex: 1, }}>
            {stepPage === 1 && <ResetPassword1 />}
            {stepPage === 2 && <ResetPassword2 />}
            {stepPage === 3 && <ResetPassword3 />}
          </View>
          <View style={{ width: itemWidth, position: 'absolute', bottom: 10, padding: 15 }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 50, justifyContent: 'space-around', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ backgroundColor: '#fff', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                onPress={() => {
                  navigation.goBack();
                  setStepPage(1);
                }}
              >
                {stepPage < 3 ?
                  <Text style={{ color: '#244172', textAlign: 'center' }}> 取消 </Text>
                  : <Text style={{ color: '#244172', textAlign: 'center' }}>{' '} </Text>
                }

              </TouchableOpacity>

              <TouchableOpacity
                style={{ backgroundColor: '#244172', width: '50%', height: 40, justifyContent: 'center', borderRadius: 10 }}
                onPress={() => {
                  setStepPage(prevStepPage => {
                    const newStepPage = prevStepPage + 1;
                    if (newStepPage === 2) {
                      start1()
                    }
                    if (newStepPage === 3) {
                      const backoldP = getOldP();
                      const backnewP = getNewP();
                      configureProps(backoldP, backnewP)
                      console.log("OOO", backnewP)
                      start2()
                    }
                    if (newStepPage === 4) {
                      navigation.goBack();
                      navigation.goBack();
                      return 1; // Reset stepPage to 1
                    }
                    return newStepPage;
                  });
                }}
              >
                {stepPage < 3 ?
                  <Text style={{ color: '#fff', textAlign: 'center' }}>繼續</Text> : <Text style={{ color: '#fff', textAlign: 'center' }}>完成</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#244172',
  },
  button: {
    width: '100%',
    height: 60,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
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
    paddingTop: 0,
    width: itemWidth,
    height: 600,
    borderRadius: 15,
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
export default ResetPassword