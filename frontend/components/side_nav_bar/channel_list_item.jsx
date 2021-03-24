import React from "react"

const ChannelListItem = ({channel, clickFunction, selected, dm}) => {
    return (
        <li className={"channel-list-item" + 
                        (selected === channel.id ? " selected" : "")} 
            onClick={clickFunction}
            data-id={channel.id}>
            {dm ? (
                <p><span>{channel.id}</span>{channel.subscriberIds[1]}</p>
            ) : (
                <p><span>#</span> {channel.name}</p>
            )}
        </li>
    )

}

export default ChannelListItem;