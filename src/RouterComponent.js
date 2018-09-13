import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './ui/LoginScreen';
import EmployeeList from "./ui/EmployeeList";
import EmployeeCreateForm from "./ui/EmployeeCreateForm";

/**
 * Created by Fatih Taşdemir on 3.09.2018
 */

const RouterComponent = () => {

    return (
        <Router>
            <Scene key={'root'} hideNavBar>

                <Scene key={'auth'}>
                    <Scene key={'login'} component={LoginForm} title={'Login'} initial/>
                </Scene>

                <Scene key={'main'}>

                    <Scene
                        key={'employeeList'}
                        title={'Employees'}
                        component={EmployeeList}
                        rightTitle={'Add'}
                        onRight={() => Actions.createEmployee()}
                        initial/>

                    <Scene
                        key={'createEmployee'}
                        title={'Create Employee'}
                        component={EmployeeCreateForm}/>

                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;