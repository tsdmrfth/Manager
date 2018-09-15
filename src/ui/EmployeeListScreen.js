import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {getEmployees} from "../actions/index";
import {connect} from 'react-redux';
import _ from 'lodash';
import ListItem from "../components/ListItem";
import log from "../log";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeListScreen extends Component {

    componentWillMount() {
        this.props.getEmployees();
    }

    keyExtractor = (employee) => employee.uid;

    static renderRow(employee) {
        if (employee !== undefined) {
            return <ListItem employee={employee.item}/>;
        }

        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        );
    }

    render() {
        log('render');
        return (
            <FlatList
                data={this.props.employees}
                renderItem={(employee) => EmployeeListScreen.renderRow(employee)}
                keyExtractor={this.keyExtractor}/>
        );
    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};

export default connect(mapStateToProps, {getEmployees})(EmployeeListScreen);