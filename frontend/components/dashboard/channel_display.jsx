import React from "react";
import MessageItem from "./messageItem"

class ChannelDisplay extends React.Component {
constructor (props) {
    super(props);
    // this.id = this.props.params["id"];

}

ComponentDidMount () {
    this.props.fetchChannel(this.props.params["id"])
}

render () {
    if (Object.keys(this.props.messages) === 0) return NULL;
    const messages = this.props.messages //.sort((a, b) => b.createdAt - a.createdAt);
    const messageListItems = messages.map ((message, idx) => {
        return <MessageItem key={idx} message={message} author={this.props.users[message.authorId]}/>
    })

    return (
        <div className = "displayItem">
            <p> Hello! </p>
        </div>
    )
}
}
export default ChannelDisplay;