import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeListReducer from "./EmployeeListReducer";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeListReducer
})