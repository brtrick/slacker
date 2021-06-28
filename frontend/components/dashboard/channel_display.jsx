import React from "react";
import MessageItem from "./messageItem"

class ChannelDisplay extends React.Component {
    constructor (props) {
        super(props);
        // this.id = this.props.params["id"];
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.match.params["id"])
    }

    render () {
        const messages = this.props.messages; 
        // const temp = Object.keys(messages).length;
        if (Object.keys(messages).length === 0) {
            return null;
        }
        const messageListItems = Object.values(messages).map ((message) => {
            return <MessageItem key={message.id} message={message} author={this.props.users[message.authorId]}/>
        })

        return (
            <div className = "messagesDisplay">
                 {messageListItems}
            </div>
        )
    }
}
export default ChannelDisplay;