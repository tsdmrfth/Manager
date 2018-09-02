import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, CardSection, Input} from "../components/common";

/**
 * Created by Fatih Taşdemir on 2.09.2018
 */

export default class LoginScreen extends Component {

    render() {

        return (
            <View>

                <CardSection>
                    <Input
                        label={'Email'}
                        placeholder={'mail@email.com'}/>
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        placeholder={'************'}
                        isPassword/>
                </CardSection>

                <CardSection>
                    <Button label={'Login'}/>
                </CardSection>

            </View>
        );

    }

}