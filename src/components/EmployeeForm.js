import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import {CardSection, Input} from "./common";
import {connect} from 'react-redux';
import {formValueChanged} from '../actions'
import log from "../log";

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

class EmployeeForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        placeholder={'Muro'}
                        label={'Name'}
                        value={this.props.name}
                        whenTextChanged={value => this.props.formValueChanged({prop: 'name', value})}/>
                </CardSection>

                <CardSection>
                    <Input
                        placeholder={'505-001-0493'}
                        label={'Phone'}
                        value={this.props.phone}
                        whenTextChanged={value => this.props.formValueChanged({prop: 'phone', value: value})}/>
                </CardSection>

                <CardSection style={{flexDirection: 'row'}}>

                    <Text style={styles.pickerLabelStyle}>Shift</Text>

                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.formValueChanged({prop: 'shift', value: day})}>

                        <Picker.Item label={'Monday'} value={'Monday'}/>
                        <Picker.Item label={'Tuesday'} value={'Tuesday'}/>
                        <Picker.Item label={'Wednesday'} value={'Wednesday'}/>
                        <Picker.Item label={'Thursday'} value={'Thursday'}/>
                        <Picker.Item label={'Friday'} value={'Friday'}/>
                        <Picker.Item label={'Saturday'} value={'Saturday'}/>
                        <Picker.Item label={'Sunday'} value={'Sunday'}/>

                    </Picker>

                </CardSection>
            </View>
        );
    }

}

const styles = {
    pickerLabelStyle: {
        fontSize: 20,
        paddingLeft: 20
    }
};

const mapStateToProps = state =>{
    const {name, phone, shift} = state.employeeForm;
    log(state);
    return {name, phone, shift}
};

export default connect(mapStateToProps, {formValueChanged})(EmployeeForm)