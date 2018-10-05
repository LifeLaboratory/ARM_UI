import {connect} from 'react-redux'
import Sidebar from '../components/sidebar/Sidebar'

const mapStateToProps = state => {
    const {sidebarReducer } = state;
    return {blocks: sidebarReducer.sidebarConfig.blocks}
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
