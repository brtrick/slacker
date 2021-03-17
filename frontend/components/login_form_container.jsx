import {connect} from "react-redux";
import { login } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapSTP = ({errors: {session: errors}}) => {
    return {
        errors: errors,
        formType: "login"
    }
}

const mapDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
    }
}

export default connect(mapSTP, mapDTP)(SessionForm);