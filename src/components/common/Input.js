import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({label, value, whenTextChanged, placeholder, isPassword}) => {

    const {rootViewStyle, labelStyle, inputStyle} = styles;

    return (
        <View style={rootViewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={whenTextChanged}
                autoCorrect={false}
                secureTextEntry={isPassword}
                autoCapitalize='none'
            />
        </View>
    );
};

const styles = {
    rootViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        height: 40
    },
    labelStyle: {
        fontSize: 16,
        color: '#120548',
        margin: 5,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        lineHeight: 23,
        flex: 3
    }
};

export {Input}