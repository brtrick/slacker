
import React from "react";
import {Link} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Link to='/'>
                    <img src={slackerRGBUrl} />
                </Link>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}