import React from "react";
import MessageItem from "./messageItem"

class ChannelDisplay extends React.Component {
    constructor (props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchChannel(this.props.match.params["id"])
    // }

    render () {
        const messages = this.props.messages; 
        if (messages.length === 0) {
            return null;
        }
        const messageListItems = messages.map ((message) => {
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