import { createStore, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from '../../Firebaseinit';
import { collection, doc, getDocs, query, where } from "@firebase/firestore";


// Reducer functions

const initialState = {
    isSignedIn: false,
    userName: '',
    headerShowFlag: 1,
    rate: {
        usdRate: 1,
        jpyRate: 1,
        eurRate: 1,
        rmbRate: 1,
        hkdRate: 1,
    },
    catchDate: {
        year: 0,
        month: 0,
        day: 0,
    },
    balance: {
        twd: 0,
        for: 0,//折合台幣
        credit: 0,
    },
    UserData: {
        AccountNum: 'default',
        Balance: {
            Credit: 0,
            for: 0,
            twd: 0,
        },
        ID: 'default',
        Name: 'default',
        Phone: 'default',
        mail: 'default',
    }
};

//交易金額Action(台幣、外幣)
const FORtransactionAction = (money) => {
    dispatch({ type: 'SET_FOR_TR', payload: { for: money } });
};
const TWDtransactionAction = (money) => {
    dispatch({ type: 'SET_TWD_TR', payload: { twd: money } });
};

const HeaderFlagAction = (flag) => {
    dispatch({ type: 'SET_HEADER_FLAG', payload: flag });
};


const HeaderFlagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HEADER_FLAG':
            return { ...state, headerShowFlag: action.payload };
        default:
            return state;
    }
};

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        //deduct
        case 'SET_FOR_TR':
            return {
                ...state,
                UserData: {
                    Balance: {
                        ...state,
                        for: state.UserData.Balance.for - parseInt(action.payload.money, 10)
                    }
                },
            };
        case 'SET_TWD_TR':
            //console.log('change SET_FOR_TR', state.UserData.Balance)
            return {
                ...state,
                UserData: {
                    Balance: {
                        ...state,
                        for: state.UserData.Balance.twd - parseInt(action.payload.money, 10)
                    }
                },
            };
        //add
        case 'SET_FOR_TRA':
            return {
                ...state,
                balance: {
                    ...state.balance,
                    for: state.balance.for + parseInt(action.payload.money, 10)
                }
            };
        case 'SET_TWD_TRA':
            return {
                ...state,
                balance: {
                    ...state.balance,
                    twd: state.balance.twd + parseInt(action.payload.money, 10)
                }
            };
        default:
            return state;
    }
};



const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const authReducer = (state = initialState, action) => {
    console.log("I WANNA KNOW", action);
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isSignedIn: true,
                UserData: {
                    AccountNum: action.payload.AccountNum,
                    Balance: {
                        credit: action.payload.Balance.credit,
                        for: action.payload.Balance.for,
                        twd: action.payload.Balance.twd,
                    },
                    ID: action.payload.ID,
                    Name: action.payload.Name,
                    Phone: action.payload.Phone,
                    mail: action.payload.mail,
                },
            };
        case 'LOGOUT':
            return {
                ...state,
                isSignedIn: false,
                UserData: {
                    AccountNum: 'Logged out',
                    Balance: {
                        credit: 'Logged out',
                        for:'Logged out',
                        twd: 'Logged out',
                    },
                    ID: 'Logged out',
                    Name: 'Logged out',
                    Phone: 'Logged out',
                    mail: 'Logged out',
                },
            };
        default:
            return state;
    }
};

const exchangeRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RATE':
            return {
                ...state,
                usdRate: action.payload.usdRate,
                jpyRate: action.payload.jpyRate,
                eurRate: action.payload.eurRate,
                rmbRate: action.payload.rmbRate,
                hkdRate: action.payload.hkdRate
            };
        default:
            return state;
    }
};

const catchDateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATE':
            return {
                ...state,
                year: action.payload.year,
                month: action.payload.month,
                day: action.payload.day,
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    header: HeaderFlagReducer,
    rate: exchangeRateReducer,
    date: catchDateReducer,
    trade: transactionReducer,
});

// Create Redux store
const store = createStore(rootReducer);

// Counter component
const Counter = () => {
    const count = useSelector(state => state.counter.count); // 使用 counter 名称选择 counterReducer 中的状态
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
        </View>
    );
};



export { Counter, store };