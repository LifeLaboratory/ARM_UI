import {combineReducers} from 'redux'
import {fromJS} from 'immutable';
import {MockProfileData} from "../mockData/mockProfile";

const raw = {
    profile: {name: null, profileImgSrc: null, profileStatus: null},
    chats: [
        {
            chatId: null,
            date: null,
            text: null
        },
    ],
    dialog: {

        chatId: null,
        clientId: null,
        messages: [
            {clientId: null}
        ]
    }

};

const initialState = fromJS(raw);

export const sidebarReducer = function (state = initialState, action) {
    return state.updateIn(['profile'], (profile) => {
        return profile
            .set('profileImgSrc', MockProfileData.profileImgSrc)
            .set('name', MockProfileData.name);
    });
};

