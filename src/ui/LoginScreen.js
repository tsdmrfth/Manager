import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, CardSection, Input, Spinner} from "../components/common";
import {connect} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from '../actions';

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

    renderError() {
        if (this.props.error) {
            return (
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner spinnerSize={'large'}/>
            );
        }

        return (
            <Button
                label={'Login'}
                whenClicked={this.onLoginButtonClicked.bind(this)}/>
        );
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

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </View>
        );

    }

}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red',
        marginTop: 5,
        marginBottom: 5
    }
};

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading}
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginScreen);
