import React from "react";
import { Route } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/route_util.jsx";
import SplashPage from "./splash_page";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import HomeContainer from "./home_container";

const App = () => (
    <div>
        <header>
            
            {/* <Route exact path="/" component={GreetingContainer} /> */}
        </header>
            <AuthRoute path="/login" exact component={LoginFormContainer} />
            <AuthRoute path="/signup" exact component={SignupFormContainer} />
            <ProtectedRoute path="/" component={HomeContainer} />
    </div>
);

export default App;