import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './ui/LoginScreen';
import EmployeeList from "./ui/EmployeeList";

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
                        onRight={() => console.log('dsd')}
                        initial/>
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;