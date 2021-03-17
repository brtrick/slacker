import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
import * as SessionAPI from "./actions/session_actions"



document.addEventListener("DOMContentLoaded", () => {
    
    window.login = SessionAPI.login
    window.logout = SessionAPI.logout
    window.signup = SessionAPI.signup
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});