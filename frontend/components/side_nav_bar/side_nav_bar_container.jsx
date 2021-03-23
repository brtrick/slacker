import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SideNavBar from "./side_nav_bar"

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(SideNavBar)