// Import the libraries for making a component
import React from 'react';
import {ReactNative, Text, View} from 'react-native';

// Create the component
const Header = ({headerText}) => {

    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );

};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25,
        color: '#000',
        marginTop: 10
    }
};

// Make the component available to other parts of the app
export {Header};