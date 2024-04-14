import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const FinMan = () => {
  const dispatch = useDispatch();
    const HeaderFlagAction = (flag) => {
        dispatch({ type: 'SET_HEADER_FLAG', payload: flag });
    };
    const headerShowFlag = useSelector(state => state.header.headerShowFlag);
    console.log(headerShowFlag);
    useFocusEffect(
        React.useCallback(() => {
            HeaderFlagAction(0);//HomeHeader!!!!
        }, [])
    );
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Finman</Text>
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
export default FinMan