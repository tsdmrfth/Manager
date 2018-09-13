import {EMPLOYEES_FETCHED} from "../actions/types";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCHED:
            return action.payload;

        default:
            return {state}
    }
}