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
        const Data10 = [
            { value: 32.37 }, { value: 32.38 }, { value: 32.39 }, { value: 32.40 }, { value: 32.41 },
            { value: 32.42 }, { value: 32.43 }, { value: 32.44 }, { value: 32.45 }, { value: 32.46 },
            { value: 32.47 }, { value: 32.48 }, { value: 32.49 }, { value: 32.50 }, { value: 32.51 },
            { value: 32.52 }, { value: 32.53 }, { value: 32.54 }, { value: 32.55 }, { value: 32.56 },
            { value: 32.57 }, { value: 32.58 }, { value: 32.59 }, { value: 32.60 }, { value: 32.61 },
            { value: 32.62 }, { value: 32.63 }, { value: 32.64 }, { value: 32.65 }, { value: 32.66 }
          ];

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

        const firstValue = Data5[0].value;
        const lastValue = Data5[Data5.length - 1].value;

        // 計算差值
        const difference = lastValue - firstValue;


        //30D
        const firstValue3 = Data5[0].value;
        const lastValue3 = Data5[Data5.length - 1].value;

        // 計算差值
        const difference3 = lastValue - firstValue;


        console.log("OOOOO", difference)
        console.log('SData5:', Data5[4] - Data5[0]);
        let startColor = '#828282'
        let endColor = '#D1D1D1'
        console.log("OOPPPIO", Data30)
        if (difference > 0) {
            startColor = '#F65D5D'
            endColor = '#FCCDCD'
        }
        else if (difference < 0) {
            startColor = '#2F9F3A'
            endColor = '#ABC6AD'
        }
        
        let startColor3 = '#828282'
        let endColor3 = '#D1D1D1'
        if (difference3 > 0) {
            startColor3 = '#F65D5D'
            endColor3 = '#FCCDCD'
        }
        else if (difference3 < 0) {
            startColor3 = '#2F9F3A'
            endColor3 = '#ABC6AD'
        }
        //const startColor = (Data5[4]-Data5[0]) ? '#F65D5D' : 'green'

        console.log('PPPPPP', Data5)
        switch (Days) {
            case '5B':
                return (
                    <LineChart
                        areaChart
                        height={280}
                        spacing={60}
                        yAxisOffset={minYValue - 0.1}
                        data={Data5}
                        startFillColor={startColor}
                        hideDataPoints
                        //startFillColor="#F65D5D"
                        startOpacity={0.8}
                        endFillColor={endColor}
                        //endFillColor="#FCCDCD"
                        endOpacity={0.3}
                        {...chartProps}
                    />
                );
            case '5S':
                return (
                    <LineChart
                        areaChart
                        height={280}
                        spacing={60}
                        yAxisOffset={minYValue - 0.1}
                        data={Data5}
                        startFillColor={startColor}
                        hideDataPoints
                        //startFillColor="#F65D5D"
                        startOpacity={0.8}
                        endFillColor={endColor}
                        //endFillColor="#FCCDCD"
                        endOpacity={0.3}
                        {...chartProps}
                    />
                );
            case '30B':
                return (
                    <LineChart
                        areaChart
                        height={280}
                        width={240}
                        spacing={6.5}
                        yAxisOffset={minYValue - 0.1}
                        data={Data30}
                        startFillColor={startColor}
                        hideDataPoints
                        //startFillColor="#F65D5D"
                        startOpacity={0.8}
                        endFillColor={endColor}
                        //endFillColor="#FCCDCD"
                        endOpacity={0.3}
                        {...chartProps}
                    />
                );
            case '30S':
                return (
                    <LineChart
                        areaChart
                        height={280}
                        spacing={60}
                        yAxisOffset={minYValue - 0.1}
                        data={SData30}
                        startFillColor={startColor}
                        hideDataPoints
                        //startFillColor="#F65D5D"
                        startOpacity={0.8}
                        endFillColor={endColor}
                        //endFillColor="#FCCDCD"
                        endOpacity={0.3}
                        {...chartProps}
                    />
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