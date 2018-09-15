/**
 * Created by Fatih Taşdemir on 13.09.2018
 */
import {BACK_BUTTON_CLICKED, EMPLOYEE_CREATED, FORM_VALUE_CHANGED, UPDATE_EMPLOYEE_SUCCESS} from "../actions/types";

const INITIAL_STATE = {name: '', phone: '', shift: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FORM_VALUE_CHANGED:
            return {...state, [action.payload.prop]: action.payload.value};

        case EMPLOYEE_CREATED:
            return {INITIAL_STATE};

        case UPDATE_EMPLOYEE_SUCCESS:
            return {INITIAL_STATE};

        case BACK_BUTTON_CLICKED:
            return INITIAL_STATE;

        default:
            return state;
    }
};