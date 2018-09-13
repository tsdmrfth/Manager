/**
 * Created by Fatih Taşdemir on 13.09.2018
 */
import {FORM_VALUE_CHANGED} from "../actions/types";

const INITIAL_STATE = {name: '', phone: '', shift: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_VALUE_CHANGED:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
};