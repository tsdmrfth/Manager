import React, {Component} from 'react';
import {View} from 'react-native';
import EmployeeForm from "../components/EmployeeForm";
import {Button, CardSection} from "../components/common";
import {connect} from 'react-redux';
import {formValueChanged, updateEmployee} from "../actions";
import _ from 'lodash';

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeEditScreen extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.formValueChanged({prop, value});
        });
    }

    render() {
        return (
            <View>
                <EmployeeForm/>
                <CardSection>
                    <Button label={'Save Changes'} whenClicked={this.onSaveButtonClicked.bind(this)}/>
                </CardSection>
            </View>
        );
    }

    onSaveButtonClicked() {
        const {name, phone, shift} = this.props;
        this.props.updateEmployee({name, phone, shift, uid: this.props.employee.uid})
    }

}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {formValueChanged, updateEmployee})(EmployeeEditScreen)