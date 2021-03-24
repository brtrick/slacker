import { connect } from "react-redux";
import { fetchChannelMessages } from "../../actions/channel_actions";
import ChannelList from "./channel_list";

const mapSTP = ({ entities: { channels, dms } }) => {

    return {
        channels: channels,
        dms:    dms
    }
}

const mapDTP = (dispatch) => {
    return {
        fetchChannelMessages: (channel_id, message_id) => dispatch(fetchChannelMessages(channel_id, message_id)),
    }
}

export default connect(mapSTP, mapDTP)(ChannelList);