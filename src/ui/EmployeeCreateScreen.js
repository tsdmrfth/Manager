import React, {Component} from 'react';
import {Button, Card, CardSection} from "../components/common";
import {connect} from 'react-redux';
import {createEmployee, formValueChanged} from "../actions";
import EmployeeForm from "../components/EmployeeForm";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeCreateScreen extends Component {

    render() {
        return (
            <Card>

                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button label={'Create'} whenClicked={this.onCreateEmployeeButtonClicked.bind(this)}/>
                </CardSection>

            </Card>
        );
    }

    onCreateEmployeeButtonClicked() {
        const {name, phone, shift} = this.props;
        this.props.createEmployee({name, phone, shift: shift || 'Monday'})
    }

}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
};

export default connect(mapStateToProps, {formValueChanged, createEmployee})(EmployeeCreateScreen)