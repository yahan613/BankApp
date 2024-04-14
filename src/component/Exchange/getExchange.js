import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSelectedRates = async () => {
    console.log("getSelectedRates is come")
    try {
        const url = "https://open.er-api.com/v6/latest/TWD";
        const response = await fetch(url);
        const result = await response.json();
        const rates = result.rates;
        const selected = {
            JPY: rates.JPY,
            USD: rates.USD,
            CNY: rates.CNY,
            HKD: rates.HKD,
            EUR: rates.EUR
        };
        // 将所选货币的汇率数据存储在本地
        console.warn(JPY)
        await AsyncStorage.setItem('selectedRates', JSON.stringify(selected));
        return selected;
    } catch (error) {
        console.error('获取数据时出错：', error);
        return null;
    }
};

export const loadSelectedRatesFromStorage = async () => {
    try {
        const storedRates = await AsyncStorage.getItem('selectedRates');
        return storedRates ? JSON.parse(storedRates) : null;
    } catch (error) {
        console.error('从存储中加载数据时出错：', error);
        return null;
    }
};
