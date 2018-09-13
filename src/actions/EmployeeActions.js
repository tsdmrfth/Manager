import {EMPLOYEE_CREATED, EMPLOYEES_FETCHED, FORM_VALUE_CHANGED, v} from "./types";
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

export const formValueChanged = ({prop, value}) => {
    return {
        type: FORM_VALUE_CHANGED,
        payload: {prop, value}
    }
};

export const createEmployee = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                Actions.employeeList({type: 'reset'});
                dispatch({
                    type: EMPLOYEE_CREATED
                })
            })
    }
};

export const getEmployees = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCHED, payload: snapshot.val()});
            });
    };
};

export const updateEmployee = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(() => {
                dispatch({
                    type: UPDATE_EMPLOYEE_SUCCESS
                });
                Actions.employeeList({type: 'reset'})
            })
    }
};