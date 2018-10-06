import {combineReducers} from 'redux';
import {sidebarReducer} from "./sidebarReducer";
import {chatListReducer} from "./chatListReducer";

export default combineReducers({
    sidebarReducer,
    chatListReducer: chatListReducer
})

