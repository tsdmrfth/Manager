import React, {Component} from 'react';
import {ListView} from 'react-native';
import {getEmployees} from "../actions/index";
import {connect} from 'react-redux';
import _ from 'lodash';
import ListItem from "../components/ListItem";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeListScreen extends Component {

    componentWillMount() {
        this.props.getEmployees();
        this.createDataSourceWith(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSourceWith(nextProps)
    }

    createDataSourceWith({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}/>
        );
    }

    renderRow(employee) {
        return <ListItem employee={employee}/>;
    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};

export default connect(mapStateToProps, {getEmployees})(EmployeeListScreen);