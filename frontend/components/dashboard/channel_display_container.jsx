import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

import ChannelDisplay from "./channel_display"

const mapSTP = ({ entities: { users, messages } }) => {
    return {
        users: users,
        messages: messages
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchChannel: (channel_id) => dispatch(fetchWorkspaceChannels(channel_id)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default withRouter(connect (mapSTP, mapDTP)(ChannelDisplay));