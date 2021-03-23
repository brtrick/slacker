import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import TopNavBar from "./top_nav_bar"

const mSTP = state => ({

});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(TopNavBar)