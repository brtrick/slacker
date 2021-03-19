
import React from "react";

export default class Home extends React.Component {

    render() {
        return (
            <>
                <img src={slackerRGBUrl}/>
                <button onClick={this.props.logout}>Logout</button>
            </>
        )
    }
}