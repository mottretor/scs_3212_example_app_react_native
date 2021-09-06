import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../resourses/styles';
import ItemComponent from '../components/ItemComponent';
import firestore from '@react-native-firebase/firestore';

const MainScreen = (props) => {

    const navigation = props.navigation;
    const [itemsArray, setItemsArray] = React.useState([]);

    React.useEffect(() => {
        firestore()
            .collection('Users')
            .onSnapshot(querySnapshot => {
                    const tempArray = [];
                    querySnapshot.forEach(documentSnapshot => {
                        tempArray.push(documentSnapshot.data());
                    });
                    setItemsArray(tempArray);
                },
                error => {
                    console.log(error);
                });
    }, []);


    return (
        <View
            style={styles.container}>


            {itemsArray.length > 0 ? (
                <ItemComponent items={itemsArray}/>
            ) : (
                <Text>No items</Text>
            )}

            <Button
                onPress={() => {
                    navigation.push('Details');
                }
                }

                title="Push me"
            />
        </View>
    );

};

export default MainScreen;
