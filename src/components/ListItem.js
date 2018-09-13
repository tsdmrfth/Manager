import React, {Component} from 'react';
import {Button, CardSection} from "./common";
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Communications from 'react-native-communications';

/**
 * Created by Fatih Taşdemir on 13.09.2018
 */

export default class ListItem extends Component {

    static onListItemClicked() {
        Actions.editEmployee({employee: this.props.employee});
    }

    render() {
        const {name} = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={ListItem.onListItemClicked.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                    >

                    <CardSection>
                        <Button whenClicked={this.textScheduleButtonClicked.bind(this)} label={'Text Schedule'}/>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    textScheduleButtonClicked() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift ${shift}`)
    }

}

const styles = {
    titleStyle: {
        fontSize: 19
    }
};