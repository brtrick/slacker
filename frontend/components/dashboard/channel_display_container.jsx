import { connect } from "react-redux";
import {fetchChannel} from "../../actions/channel_actions"
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
        fetchChannel: (channel_id) => dispatch(fetchChannel(channel_id)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default withRouter(connect (mapSTP, mapDTP)(ChannelDisplay));