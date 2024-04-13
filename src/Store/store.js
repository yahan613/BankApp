import {combineReducers, createStore} from "redux";

const initalState = {
    isSignedIn: true,
    userName: "NoNo"
}
const rootReducer = combineReducers({
    userData : () => initalState
})

export const store = createStore(rootReducer);