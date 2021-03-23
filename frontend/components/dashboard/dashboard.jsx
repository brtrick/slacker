import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_util.jsx";
import TopNavBarContainer from "./top_nav_bar";
import SideNavBarContainer from "../side_nav_bar/side_nav_bar_container";

const Dashboard = () => (
    <div>
        <TopNavBarContainer />
        <SideNavBarContainer />
        
    </div>
);

export default Dashboard;