import {EMAIL_CHANGED, LOGIN_SUCCESS, PASSWORD_CHANGED} from "./types";
import firebase from "firebase";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                })
            })
    }
};