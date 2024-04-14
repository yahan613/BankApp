import { createStore, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

// Reducer functions

const initialState = {
    isSignedIn: false,
    userName: '',
    clear: 0,
};


const headerFlag = (state = { count: 0 }, action) => {
    switch (action.type) {
        case '0':
            return 0; // 将状态设置为0
        case '1':
            return 1; // 将状态设置为1
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
            return { ...state, isSignedIn: true, userName: action.payload , clear: 0};
        case 'LOGOUT':
            return { ...state, isSignedIn: false, userName: '', clear: 1};
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
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

    console.log(count);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
        </View>
    );
};

export { Counter, store };
