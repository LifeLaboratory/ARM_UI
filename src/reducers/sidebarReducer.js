import {fromJS} from 'immutable';
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
        case SIDEBAR_ACTIONS.SET_PROFILE:
            const newProfile  = action.profile;
            return state.updateIn(['profile'], (profile) => {
                return profile
                    .set('name', newProfile.name)
            });
        default:
            return state.updateIn(['profile'], (profile) => {
                return profile
                    .set('profileImgSrc', "http://www.master-hard.com/wp-content/uploads/2008/08/avatar-thumb.jpg")
                    .set('name', '');
            });
    }


};

