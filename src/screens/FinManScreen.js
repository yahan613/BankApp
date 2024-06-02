import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ActionSheetIOS } from 'react-native'; // Import ActionSheetIOS
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { geticon } from '../component/img/getIcon';
import { Platform } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';


const FinMan = ({navigation}) => {
  const dispatch = useDispatch();
  
  const HeaderFlagAction = (flag) => {
    dispatch({ type: 'SET_HEADER_FLAG', payload: flag });
  };
  const headerShowFlag = useSelector(state => state.header.headerShowFlag);

  const bottomSheetRef = useRef(null);
  const [assetType, setAssetType] = useState(null);

  const handleAssetSelection = (type) => {
    setAssetType(type);
    bottomSheetRef.current.close(); // Close the bottom sheet after selection
  };


  useFocusEffect(
    React.useCallback(() => {
      HeaderFlagAction(0);
    }, [])
  );

  // Function to render assets based on asset type
  const renderAssets = () => {
    switch (assetType) {
      case 'fund':
        return renderFunds();
      case 'ETF':
        return renderETFs();
      case 'stock':
        return renderStocks();
      case 'bond':
        return renderBonds();
      default:
        return renderFunds();
    }
  };

  // Function to render funds
  const renderFunds = () => {
    return (
      <>
         {/* fund 1 */}
         <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>0325</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>巴菲特全球資產組合A (新台幣) (月配息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>穩健型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+3.24%</Text></View>
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>

          <View style={styles.line} />
          {/* fund 2 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>MNO012</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>新興市場增長基金 (歐元) (穩定配息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>成長型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+8.12%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>

          <View style={styles.line} />
          {/* fund 3 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>GHI345</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>日本永續股票基金 (日幣) </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>穩健型</Text><Text style={{ fontSize: 10, color: '#66AF47' }}>-1.67%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
      </>
    );
  };

  // Function to render ETFs
  const renderETFs = () => {
    return (
      <>
          {/* etf 1 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>EMHY</Text>
                <Text style={{marginTop:5, marginBottom:5}}>新興市場高收益債券ETF (現金股息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>成長型</Text><Text style={{ fontSize: 10, color: '#66AF47' }}>-2.17%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* etf 2 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>URBI</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>城市化基礎設施ETF(Urban Infrastructure ETF)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>保守型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+0.17%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* etf 3 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>GTS</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>環球科技精選ETF(GlobalTech Select ETF)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>成長型</Text><Text style={{ fontSize: 10, color: '#66AF47' }}>-12.19%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
      </>
    );
  };

  // Function to render ETFs
  const renderStocks = () => {
    return (
      <>
          {/* stock 1 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>GLT</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%' }}>全球科技股份有限公司(GlobalTech Corp.) (現金股息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>高風險型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+21.8%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* stock 2 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>NEG</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>新能源集團有限公司 (股票股息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>穩健型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+7.01%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* stock 3 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>ACH</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>亞洲消費品控股有限公司(AsiaConsumer Holdings Ltd.) (現金股息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>高風險型</Text><Text style={{ fontSize: 10, color: '#66AF47' }}>-14.89%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
      </>
    );
  };

  // Function to render bonds
  const renderBonds = () => {
    return (
      <>
          {/* bond 1 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>AHCB</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>亞洲高收益公司債券 (半年度支付利息)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>穩健型</Text><Text style={{ fontSize: 10, color: '#66AF47' }}>-1.21%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* bond 2 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>EMCB</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>新興市場企業債券(Emerging Market Corporate Bond)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>穩健型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+3.65%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
          <View style={styles.line} />
          {/* bond 3 */}
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 12, color: '#929191'}}>GYB</Text>
                <Text style={{marginTop:5, marginBottom:5, maxWidth: '95%'}}>環球收益債券(Global Yield Bonds)</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%'}}><Text style={{ fontSize: 10 }}>保守型</Text><Text style={{ fontSize: 10, color: '#FF0202' }}>+0.89%</Text></View>          
            </View>
            {geticon('Arrow_forward_ios')}
          </TouchableOpacity>
      </>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D9D9D9'}}>
      <View style={styles.topBackground} />
      <View style={styles.header}>
        <View style={{ position: 'absolute', left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {geticon('Arrow')}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: 20 }}>理財</Text>
      </View>
      <ScrollView contentContainerStyle={{ marginTop: 35, width: '85%', ...Platform.select({ios: {height: 810},android: {height: 780}}), alignSelf: 'center' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20, color: '#244172' }}>我的理財規劃</Text>
        </View>
        <TouchableOpacity style={styles.addbox}>
            <Text style={{ color: '#000', fontSize: 18, marginTop: 40,color: '#D9D9D9' }}>開始你的第一筆理財規劃吧！</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50, borderRadius: 10, marginTop: 50 }}>
              {geticon('Add')}
            </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7 }}></View>
          <Text style={{ fontSize: 20, color: '#244172' }}>熱門投資主題</Text>
        </View>  
        
        <View style={styles.box}>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.labelText, { flex: 1 }]}>
                  {assetType === 'bond' ? '債券' : assetType === 'ETF' ? 'ETF' : assetType === 'stock' ? '股票' : '基金'}
                </Text>
                <TouchableOpacity onPress={() => bottomSheetRef.current.open()} style={{ marginLeft: 'auto' }}>
                  <Text style={{ color: '#5C94F3', borderWidth: 1, borderRadius: 8, borderColor: '#D9D9D9', paddingTop: 3, paddingBottom: 3, paddingRight: 10, paddingLeft: 10 }}>選擇主題</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          {renderAssets()}
        </View>

      </ScrollView>
      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        customStyles={{
          container: {
            paddingHorizontal: 24,
            paddingBottom: 24,
            paddingTop: 15,
          },
        }}
      >
        
        <TouchableOpacity onPress={() => handleAssetSelection('fund')} style={styles.option}>
          <Text style={{fontSize: 18}}>基金</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAssetSelection('ETF')} style={styles.option}>
          <Text style={{fontSize: 18}}>ETF</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAssetSelection('stock')} style={styles.option}>
          <Text style={{fontSize: 18}}>股票</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAssetSelection('bond')} style={{margin: 3, paddingBottom: 15, alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>債券</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => bottomSheetRef.current.close()} style={styles.btn}>
          <Text style={{fontSize: 18, color: '#D9D9D9'}}>返回</Text>
        </TouchableOpacity>
      </RBSheet>

    </SafeAreaView >
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
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'column',
  },
  label: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  labelContainer: {
      marginBottom: 10,
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
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    ...Platform.select({
        ios: {
            fontSize: 16,
        },
        android: {
            fontSize: 18,
        }
    }),
  },
  option: {
    margin: 3,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    alignItems: 'center'
  },
  btn: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: '#244172',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default FinMan