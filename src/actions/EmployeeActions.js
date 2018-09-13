import {FORM_VALUE_CHANGED} from "./types";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

export const formValueChanged = ({prop, value}) => {
    return {
        type: FORM_VALUE_CHANGED,
        payload: {prop, value}
    }
};