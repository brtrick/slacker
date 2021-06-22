import {
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_USER_WORKSPACE } from '../actions/workspace_actions'
import { RECEIVE_CHANNEL } from '../actions/channel_actions'

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, action.channel.users, state);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case RECEIVE_USER_WORKSPACE:
            return Object.assign({}, action.workspace.users, state);
        default:
            return state;
    }
}

export default usersReducer;