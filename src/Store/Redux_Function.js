import { createStore, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

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
        twd: 300000,
        for: 10000,//折合台幣
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
        case 'SET_FOR_TR':
            return {
                ...state,
                balance: {
                    ...state.balance,
                    for: state.balance.for - action.payload.money
                }
            };
        case 'SET_TWD_TR':
            return {
                ...state,
                balance: {
                    ...state.balance,
                    twd: state.balance.twd - action.payload.money
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
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isSignedIn: true, userName: action.payload };
        case 'LOGOUT':
            return { ...state, isSignedIn: false, userName: '' };
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
