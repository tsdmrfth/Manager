import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, CardSection, Input} from "../components/common";
import {connect} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from '../actions';
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

    onLoginButtonClicked() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    render() {

        const {email, password} = this.props;

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
                        value={password}
                        whenTextChanged={this.onPasswordChanged.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Button
                        label={'Login'}
                        whenClicked={this.onLoginButtonClicked.bind(this)}/>
                </CardSection>

            </View>
        );

    }

}

const mapStateToProps = state => {
    Reactotron.log(JSON.stringify(state.auth) + ' auth');
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginScreen);
