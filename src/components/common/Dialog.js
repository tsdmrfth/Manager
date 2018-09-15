import React from 'react';
import {Modal, Text, View} from 'react-native';
import {Button} from "./Button";
import log from "../../log";

/**
 * Created by Fatih Taşdemir on 15.09.2018
 */

const Dialog = ({message, onAccept, onDecline, visible}) => {
    const {containerStyle, textStyle, buttonStyle} = styles;
    log(message);
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            style={{ width: '100%', alignSelf: 'center', height: '100%', justifyContent: 'flex-start', backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
            backdropOpacity = {0.3}
            onRequestClose={() => {
            }}>

            <View style={containerStyle}>
                <Text style={textStyle}>{message}</Text>

                <View style={styles.buttonContainerStyle}>
                    <Button whenClicked={onAccept} style={buttonStyle} label={'Yes'}/>
                    <Button whenClicked={onDecline} style={buttonStyle} label={'No'}/>
                </View>
            </View>

        </Modal>
    );
};

const styles = {
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        color: 'white'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        height: 100,
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 20,
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    buttonStyle: {
        borderRadius: 5,
        marginBottom: 10
    }
};

export {Dialog};