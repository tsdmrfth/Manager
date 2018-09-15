import React, {Component} from 'react';
import {View} from 'react-native';
import EmployeeForm from "../components/EmployeeForm";
import {Button, CardSection, Dialog} from "../components/common";
import {connect} from 'react-redux';
import {deleteEmployee, formValueChanged, updateEmployee} from "../actions";
import _ from 'lodash';
import Communications from "react-native-communications";
import log from "../log";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeEditScreen extends Component {

    state = {showModal: false};

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

                <CardSection>
                    <Button whenClicked={this.textScheduleButtonClicked.bind(this)} label={'Text Schedule'}/>
                </CardSection>

                <CardSection>
                    <Button whenClicked={this.deleteButtonClicked.bind(this)} label={'Fire Employee'}/>
                </CardSection>

                <Dialog
                    visible={this.state.showModal}
                    message={`Are you sure delete ${this.props.employee.name}`}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}/>

            </View>
        );
    }

    onAccept() {
        log('here1');
        const { uid } = this.props.employee;

        this.props.deleteEmployee({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onSaveButtonClicked() {
        const {name, phone, shift} = this.props;
        this.props.updateEmployee({name, phone, shift, uid: this.props.employee.uid})
    }

    textScheduleButtonClicked() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift ${shift}`)
    }

    deleteButtonClicked() {
        this.setState({showModal: true})
    }

}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {formValueChanged, updateEmployee, deleteEmployee})(EmployeeEditScreen)