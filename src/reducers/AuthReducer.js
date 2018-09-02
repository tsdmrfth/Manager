import {EMAIL_CHANGED, LOGIN_SUCCESS, PASSWORD_CHANGED} from "../actions/types";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

const INITIAL_STATE = {email: '', password: '', user: null};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case LOGIN_SUCCESS:
            return {...state, user: action.payload};

        default:
            return state;
    }
};