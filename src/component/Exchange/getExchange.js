import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux'; // 假設你使用的是 Redux

const GetSelectedRates = () => {
    const apiKey = 'f835a80f35acb24a41b109e8';
    const apiUrl = 'https://open.er-api.com/v6/latest/TWD';
    const [usdRate, setUsdRate] = useState(null);
    const [jpyRate, setJpyRate] = useState(null);
    const [eurRate, setEurRate] = useState(null);
    const [rmbRate, setRmbRate] = useState(null);
    const [hkdRate, setHkdRate] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'x-rapidapi-key': apiKey
                    }
                });
                const json = await response.json();
                if (json && json.rates && json.rates.USD) {
                    //USA
                    setUsdRate(json.rates.USD);
                    const usdRate = (1 / json.rates.USD).toFixed(2);
                    
                    //JAPAN
                    
                    setJpyRate(json.rates.JPY);
                    const jpyRate = (1 / json.rates.JPY).toFixed(2);
                
                    //EUR
                    
                    setEurRate(json.rates.EUR);
                    const eurRate = (1 / json.rates.EUR).toFixed(2);
                    
                    //China
                    
                    setRmbRate(json.rates.CNY);
                    const rmbRate = (1 / json.rates.CNY).toFixed(2);
                    
                    //HongKong
                    
                    setHkdRate(json.rates.HKD);
                    const hkdRate = (1 / json.rates.HKD).toFixed(2);
                    
                    const getExchangeAction = () => {
                        dispatch({ 
                            type: 'SET_RATE', 
                            payload: { 
                                usdRate: (1 / json.rates.USD).toFixed(2), 
                                jpyRate: (1 / json.rates.JPY).toFixed(2), 
                                eurRate: (1 / json.rates.EUR).toFixed(2), 
                                rmbRate: (1 / json.rates.CNY).toFixed(2), 
                                hkdRate: (1 / json.rates.HKD).toFixed(2)
                            } 
                        });
                    }
                    getExchangeAction();
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };
        fetchData();

    }, []);

};

export default GetSelectedRates;
