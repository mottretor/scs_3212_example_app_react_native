import React, {Component} from 'react';
import {Button, View, Linking} from 'react-native';
import styles from '../resourses/styles';
import Person from '../components/Person';

class MainScreen extends Component {

    async backgroundFunction() {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=%22Why%20leaders%20eat%20last%22");
        const json = await response.text();
        console.log(json);
    }

    render() {

        const navigation = this.props.navigation;


        return (
            <View
                style={styles.viewgroup}>

                <Person name="Isuru"/>
                <Person name="Roshan"/>
                <Button
                    onPress={() => {
                       navigation.push("Details");
                    }
                    }

                    title="Push me"
                />
            </View>
        );
    }
}

export default MainScreen;
