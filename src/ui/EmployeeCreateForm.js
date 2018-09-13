import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from "../components/common";
import {connect} from 'react-redux';

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeCreateForm extends Component {

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        placeholder={'Muro'}
                        label={'Name'}/>
                </CardSection>

                <CardSection>
                    <Input
                        placeholder={'Phone'}
                        label={'505-001-0493'}/>
                </CardSection>

                <CardSection>
                    <Button label={'Create'}/>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {

};

export default connect()(EmployeeCreateForm)