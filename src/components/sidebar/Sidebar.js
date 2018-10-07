import React from 'react'
import SidebarItemsBlock from "./SidebarItemsBlock";
import {Iterable} from 'immutable';
import ARMApi from "../../utils/arm.api";

class Sidebar extends React.Component {
    componentDidMount() {
        const {session, setProfile} = this.props;
        ARMApi.getProfile(session)
            .then(result => {
                const data = result.Data;
                const name = data.Names;
                const afk = data.Status === "Работаю";
                const profile = {name};
                setProfile(profile);
            })
            .catch((e) => {
                //todo
                console.error(e);
            })
    }


    render() {
        const {blocks, onSwitchAfk} = this.props;

        return (
            <div className="sidebar">
                {blocks.valueSeq().map((block) => {
                    return <SidebarItemsBlock onSwitchAfk={onSwitchAfk} key={block.get('id')} id={block.get('id')}
                                              items={block.get('items')}/>
                })}
            </div>
        )
    }
}

/*
Sidebar.propTypes = {
    blocks: PropTypes.instanceOf(Iterable)
};
*/

export default Sidebar
