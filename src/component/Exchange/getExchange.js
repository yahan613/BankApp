import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const GetSelectedRates = ({ rate }) => {
    const apiKey = 'f835a80f35acb24a41b109e8';
    const apiUrl = 'https://open.er-api.com/v6/latest/TWD';
    const [usdRate, setUsdRate] = useState(null);
    const [jpyRate, setJpyRate] = useState(null);
    const [eurRate, setEurRate] = useState(null);
    const [rmbRate, setRmbRate] = useState(null);
    const [hkdRate, setHkdRate] = useState(null);

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
                console.log(json.rates.USD)
                const usdRate = (1 / json.rates.USD).toFixed(2);
                console.log(usdRate)


                //JAPAN
                console.log("This is JP")
                setJpyRate(json.rates.JPY);
                console.log(json.rates.JPY)
                const jpyRate = (1 / json.rates.JPY).toFixed(2);
                console.log(jpyRate)

                //EUR
                console.log("This is EU")
                setEurRate(json.rates.EUR);
                console.log(json.rates.EUR)
                const eurRate = (1 / json.rates.EUR).toFixed(2);
                console.log(eurRate)

                //China
                console.log("This is China")
                setRmbRate(json.rates.CNY);
                console.log(json.rates.CNY)
                const rmbRate = (1 / json.rates.CNY).toFixed(2);
                console.log(rmbRate)

                //HongKong
                console.log("This is HK")
                setHkdRate(json.rates.HKD);
                console.log(json.rates.HKD)
                const hkdRate = (1 / json.rates.HKD).toFixed(2);
                console.log(hkdRate)
                switch (rate) {
                    case "USA":
                        return (usdRate);
                    case "JAPAN":
                        return (jpyRate);
                    case "EUR":
                        return (eurRate);
                    case "CHINA":
                        return (rmbRate);
                    case "HK":
                        return (hkdRate);
                    default:
                        return null;
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default GetSelectedRates;
