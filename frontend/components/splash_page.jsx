import React from 'react'
import {Link} from 'react-router-dom'

const SplashPage = () => {
    return (
        <div id="splash">
            <div className="splash-header">
                <Link to='/'><img className="logo" src={slackerRGBUrl} /></Link>
            </div>
            <div className="splash-body">
                <h1>sometimes easier is just better</h1>
                <Link to="/login"> Login </Link>
                <Link to="/signup"> Create an account</Link>
            </div>
        </div>
    )
}

export default SplashPage;