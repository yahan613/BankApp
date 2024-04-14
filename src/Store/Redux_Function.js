import { createStore, combineReducers } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

// Reducer functions

const initialState = {
    isSignedIn: false,
    userName: '',
    headerShowFlag: 1,
};

const  HeaderFlagAction = (flag) => {
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
            return { ...state, isSignedIn: true, userName: action.payload};
        case 'LOGOUT':
            return { ...state, isSignedIn: false, userName: ''};
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    header: HeaderFlagReducer,
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
