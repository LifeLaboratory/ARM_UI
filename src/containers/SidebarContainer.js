import {connect} from 'react-redux'
import Sidebar from '../components/sidebar/Sidebar'
import {SidebarConfiguration} from "../constants/SidebarConfiguration";
import {fromJS} from 'immutable';

const mapStateToProps = state => {
    const {sidebarReducer} = state;
    const profileData = sidebarReducer.get('profile');
    const blocks = fromJS(SidebarConfiguration.blocks)

    const mappedBlocks = blocks.map((block, index) => {
        const items = block.get('items');
        return block.set('items', items.map((item) => {
            if (item.get('type') === 'profileItem') {
                return item
                    .set('name', profileData.get('name'))
                    .set('profileImgSrc', profileData.get('profileImgSrc'))
            }
            return item;
        }));
    });
    return {blocks: mappedBlocks}
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
