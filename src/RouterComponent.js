import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import LoginForm from './ui/LoginScreen';
import EmployeeList from "./ui/EmployeeListScreen";
import EmployeeCreateForm from "./ui/EmployeeCreateScreen";
import EmployeeEditScreen from './ui/EmployeeEditScreen';

/**
 * Created by Fatih Taşdemir on 3.09.2018
 */

const RouterComponent = () => {

    return (
        <Router sceneStyle={{paddingTop: 65}}>
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

                    <Scene key={'editEmployee'} component={EmployeeEditScreen} title={'Edit'}/>

                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;