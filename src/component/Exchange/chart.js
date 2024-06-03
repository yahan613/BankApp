import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import { db } from '../../../Firebaseinit';
import { getFirestore, collection, getDocs, doc, updateDoc, query, where } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { LineChart } from "react-native-gifted-charts";
import LottieView from 'lottie-react-native';



export const Chart = (Country, Days) => {
    const GetData = async () => {
        let d = [];
        try {
            const ref = collection(db, "Exchange");
            const q = query(ref, where("ID", "==", Country));
            const querySnapshot2 = await getDocs(q);
            d = querySnapshot2.docs[0].data();
            //map = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            //console.log("Data from database:", d); 
            return d
        } catch (err) {
            console.log("ERR：", err)
        }

    };
    const { data } = useQuery({ queryKey: ['getData'], queryFn: GetData }); //重要的是 queryFn: GetData
    //const [BuyinARR_5D, setBuyinARR_5D] = useState([]);
    //const [BuyinARR_30D, setBuyinARR_30D] = useState([]);
    //const [SelloutARR, setSelloutARR] = useState([]);

    //所有資料
    let BuyinDate = [];
    let BuyinV = [];
    let SelloutDate = [];
    let SelloutV = [];

    //五日資料
    let [Data5, setData5] = useState([]);
    let [Data30, setData30] = useState([]);
    let [SData5, setSData5] = useState([]);
    let [SData30, setSData30] = useState([]);

    useEffect(() => {
        if (data) {
            const sortedKeys = Object.keys(data).sort();
            for (const key of sortedKeys) {
                if (data[key].hasOwnProperty('Sellout')) {
                    SelloutDate.push(key);
                    SelloutV.push(parseFloat(data[key].Sellout));
                }
                if (data[key].hasOwnProperty('Buyin')) {
                    BuyinDate.push(key);
                    BuyinV.push(parseFloat(data[key].Buyin));
                }
            }
            let BuyinData = BuyinV.slice(-5).map(value => ({ value }));
            setData5(BuyinData);
            BuyinData = BuyinV.slice(-30).map(value => ({ value }));
            setData30(BuyinData);
            
            let SData = SelloutV.slice(-5).map(value => ({ value }));
            setSData5(SData);
            SData = SelloutV.slice(-30).map(value => ({ value }));
            setSData30(SData);
        }
    }, [data]);

    /*useEffect(() => {
        console.log("YYYYYccc", BuyinData);
    }, [BuyinARR_5D]);*/



    //LLL
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500); // 3秒的加载时间

        return () => clearTimeout(timer); // 清除計時器
    }, []);
    

    if (loading) {
        return (
            <View style={styles.loadingScreen}>
                <LottieView style={{ flex: 1, width: 200, height: 200 }} source={require('../img/Lottie_Animation/B.json')} autoPlay loop />
            </View>
        )
    }
    else {
        
        const chartProps = {
            color: '#5C94F3',
            dataPointsColor: '#244172',
            yAxisLabelWidth: 45,
            yAxisSide: 'left',
            showFractionalValues: true,
            yAxisTextStyle: { fontSize: 10 }, 
            yAxisLabelFormatter: (value) => value.toFixed(2),
        };
        const minYValue = Math.min(...Data5.map(item => item.value)) - 1;


        console.log('SData5:', SData5);
        switch (Days) {
            case '5B':
                return (
                    <LineChart data={Data5} />
                );
            case '5S':
                return (
                    <LineChart 
                    height={280}
                    spacing={60}
                    yAxisOffset={minYValue-0.1}
                    data={SData5}
                    {...chartProps}
                     />
                );
            case '30B':
                return (
                    <LineChart data={Data30} />
                );
            case '30S':
                return (
                    <LineChart data={SData30} />
                );
            default:
                return null;
        }
    }


};


const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        backgroundColor: '#D9D9D9', // 白色背景
        justifyContent: 'center',
        /*borderLeftWidth: 3,
        borderLeftColor: '#244172',
        borderBottomWidth: 3,
        borderBottomColor: '#244172',*/
        alignItems: 'center',
    },

});