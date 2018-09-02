import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, CardSection, Input} from "../components/common";
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';
import Reactotron from "reactotron-react-native";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

class LoginScreen extends Component {

    onEmailChanged(text) {
        this.props.emailChanged(text)
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    render() {

        const {email} = this.props;

        return (
            <View>

                <CardSection>
                    <Input
                        value={email}
                        label={'Email'}
                        placeholder={'mail@email.com'}
                        whenTextChanged={this.onEmailChanged.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        placeholder={'************'}
                        isPassword
                        whenTextChanged={this.onPasswordChanged.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Button label={'Login'}/>
                </CardSection>

            </View>
        );

    }

}

const mapStateToProps = state => {
    Reactotron.log(state.auth);
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginScreen);
