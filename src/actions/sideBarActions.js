export const switchAFK = () => {
    return ({
        type: SIDEBAR_ACTIONS.SWITCH_AFK,
    })
};

export const setProfile = (profile) => {
    return ({
        type: SIDEBAR_ACTIONS.SET_PROFILE,
        profile
    })
};

export const SIDEBAR_ACTIONS = {
    SET_PROFILE: 'SET_PROFILE',
    SWITCH_AFK: 'SWITCH_AFK'
};
