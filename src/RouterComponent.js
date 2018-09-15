import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import LoginForm from './ui/LoginScreen';
import EmployeeList from "./ui/EmployeeListScreen";
import EmployeeCreateForm from "./ui/EmployeeCreateScreen";
import EmployeeEditScreen from './ui/EmployeeEditScreen';
import {connect} from 'react-redux';
import {onBackButtonClicked} from "./actions";

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
                        component={EmployeeCreateForm}
                        onExit={() => this.props.onBackButtonClicked()}/>

                    <Scene
                        key={'editEmployee'}
                        component={EmployeeEditScreen} title={'Edit'}
                        onExit={() => this.props.onBackButtonClicked()}/>

                </Scene>

            </Scene>
        </Router>
    );
};

export default connect(null, {onBackButtonClicked})(RouterComponent);