import {connect} from 'react-redux'
import Chat from "../components/content/Chat";

const mapStateToProps = state => {
    const {chatListReducer} = state;
    const {chatReducer} = state;
    const {selectedId} = chatListReducer;
    return {selectedId}
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
