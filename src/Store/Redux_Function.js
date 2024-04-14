import { createStore, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

// Reducer functions

const initialState = {
    isSignedIn: false,
    userName: '',
    headerShowFlag: 1,
    rate:{
        usdRate: 1,
        jpyRate: 1,
        eurRate: 1,
        rmbRate: 1,
        hkdRate: 1
    }
    
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
            console.log("Hi")
            console.log(action.payload.usdRate)
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

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    header: HeaderFlagReducer,
    rate: exchangeRateReducer,
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
