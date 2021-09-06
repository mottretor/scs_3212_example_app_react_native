import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableHighlight, View} from 'react-native';
import styles from '../resourses/styles';
import firestore from '@react-native-firebase/firestore';

let addItem = item => {
    firestore()
        .collection('Users')
        .add({
            name: item,
            age: 30,
        })
        .then(() => {
            console.log('User added!');
        });
};

const DetailsScreen = () => {
    console.log('second');

    const [name, onChangeText] = useState(0);

    const handleSubmit = () => {
        addItem(name);
        Alert.alert('Item saved successfully');
    };

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Add Item</Text>
            <TextInput style={styles.itemInput} onChangeText={text => onChangeText(text)}/>
            <TouchableHighlight
                style={styles.button}
                underlayColor="white"
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Add Item</Text>
            </TouchableHighlight>


        </View>
    );
};

export default DetailsScreen;
