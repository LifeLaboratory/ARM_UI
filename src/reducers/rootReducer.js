import {combineReducers} from 'redux'
import {fromJS} from 'immutable';
import {MockProfileData} from "../mockData/mockProfile";

const initialState = fromJS({profile: {name: null, profileImgSrc: null}});

const sidebarReducer = function (state = initialState, action) {
    return state.updateIn(['profile'], (profile) => {
        return profile
            .set('profileImgSrc', MockProfileData.profileImgSrc)
            .set('name', MockProfileData.name);
    });
};

export default combineReducers({
    sidebarReducer
})

