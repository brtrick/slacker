import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import Home from "./home"

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(Home)