import {connect} from 'react-redux'
import Sidebar from '../components/sidebar/Sidebar'
import {SidebarConfiguration} from "../constants/SidebarConfiguration";
import {fromJS} from 'immutable';
import {setProfile, switchAFK} from "../actions/sideBarActions";
import {selectOpened} from "../actions/chatListActions";

const mapStateToProps = state => {
    const {sidebarReducer, authReducer} = state;
    const profileData = sidebarReducer.get('profile');
    const blocks = fromJS(SidebarConfiguration.blocks);
    const {session} = authReducer.auth;

    const mappedBlocks = blocks.map((block, index) => {
        const items = block.get('items');
        return block.set('items', items.map((item) => {
            if (item.get('type') === 'profileItem') {
                return item
                    .set('name', profileData.get('name'))
                    .set('profileImgSrc', profileData.get('profileImgSrc'))
                    .set('afk', profileData.get('afk'))
            }
            return item;
        }));
    });
    return {blocks: mappedBlocks, session:session}
};

const mapDispatchToProps = dispatch => ({
    onSwitchAfk: () => dispatch(switchAFK()),
    setProfile: (profile) => dispatch(setProfile(profile))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
