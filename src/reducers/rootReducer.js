import {combineReducers} from 'redux';
import {sidebarReducer} from "./sidebarReducer";
import {chatListReducer} from "./chatListReducer";
import {chatReducer} from "./chatReducer";
import {authReducer} from "./authReducer";

export default combineReducers({
    sidebarReducer,
    chatReducer,
    chatListReducer,
    authReducer
})

