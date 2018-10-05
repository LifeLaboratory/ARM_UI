import {combineReducers} from 'redux'
import {SidebarConfiguration} from "../constants/SidebarConfiguration";

const initialState = {sidebarConfig: SidebarConfiguration};

const sidebarReducer = function (state = initialState) {
    return {...state}
};

export default combineReducers({
    sidebarReducer
})
