import GetSelectedRates from "./getExchange";

/*const USAsaBuyin = GetSelectedRates('USA');
const USASellout = GetSelectedRates('USA');
const JAPANBuyin = GetSelectedRates('JAPAN');
const JAPANSellout = GetSelectedRates('JAPAN');
const CHINABuyin = GetSelectedRates('CHINA');
const CHINASellout = GetSelectedRates('CHINA');
const EUROPEBuyin = GetSelectedRates('EUR');
const EUROPESellout = GetSelectedRates('EUR');
const HKBuyin = GetSelectedRates('HK');
const HKSellout = GetSelectedRates('HK');*/

export let EXCHANGE_DATA = [
    { id: '1', value: 'USA', width: '20%' },
    { id: '2', value: '美金', width: '7%' },
    { id: '3', value: 'Buyin', width: '20%' },
    { id: '4', value: 'sellout', width: '30%' },
    { id: '5', value: 'Japan', width: '20%' },
    { id: '6', value: '日幣', width: '7%' },
    { id: '7', value: 'Buyin', width: '20%' },
    { id: '8', value: 'sellout', width: '30%' },
    { id: '9', value: 'China', width: '20%' },
    { id: '10', value: '人民幣', width: '7%' },
    { id: '11', value: 'Buyin', width: '20%' },
    { id: '12', value: 'sellout', width: '30%' },
    { id: '13', value: 'Europe', width: '20%' },
    { id: '14', value: '歐元', width: '7%' },
    { id: '15', value: 'Buyin', width: '20%' },
    { id: '16', value: 'sellout', width: '30%' },
    { id: '17', value: 'HongKong', width: '20%' },
    { id: '18', value: '港幣', width: '7%' },
    { id: '19', value: 'Buyin', width: '20%' },
    { id: '20', value: 'sellout', width: '30%' },
];