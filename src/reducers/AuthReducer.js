import {EMAIL_CHANGED, LOGIN_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, PASSWORD_CHANGED} from "../actions/types";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

const INITIAL_STATE = {email: 'test@test.com', password: 'tester', user: null, error: '', loading: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                ...INITIAL_STATE
            };

        case LOGIN_USER_FAIL:
            return {...state, error: action.payload, loading: false};

        case LOGIN_USER:
            return {...state, loading: true, error: ''};

        default:
            return state;
    }
};