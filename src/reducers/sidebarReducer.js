import {fromJS} from 'immutable';
import {MockProfileData} from "../mockData/mockProfile";
import {SIDEBAR_ACTION, SIDEBAR_ACTIONS} from "../actions/sideBarActions";

const raw = {
    profile: {name: null, profileImgSrc: null, profileStatus: null, afk: false},
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
    switch (action.type) {
        case SIDEBAR_ACTIONS.SWITCH_AFK:
            return state.updateIn(['profile'], (profile) => {
                return profile
                    .set('afk', !profile.get('afk'))
            });
        default:
            return state.updateIn(['profile'], (profile) => {
                return profile
                    .set('profileImgSrc', MockProfileData.profileImgSrc)
                    .set('name', MockProfileData.name);
            });
    }


};

