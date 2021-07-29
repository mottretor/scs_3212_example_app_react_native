import React from 'react';
import {Text, View} from 'react-native';

const Person = props => {
    return (
        <View>
            <Text>Hello, My name is {props.name}</Text>
        </View>
    );
};

export default Person;
